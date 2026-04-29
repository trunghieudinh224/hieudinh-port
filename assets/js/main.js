document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Animation using IntersectionObserver
  const setupScrollAnimation = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const selectors = [
      '.animate-on-scroll',
      '.animate-fade-left',
      '.animate-fade-right',
      '.animate-scale-in',
      '.animate-zoom-bounce',
    ];
    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach((el) => observer.observe(el));
  };

  // 2. Navbar Scroll Effect & Mobile Menu
  const setupNavbar = () => {
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Set active link based on current path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Simple exact match or start match for projects
      if (currentPath.endsWith(href) || (href !== 'index.html' && currentPath.includes(href.replace('.html', '')))) {
        link.classList.add('active');
      }
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
        navbar.classList.remove('bg-white');
      } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
        navbar.classList.add('bg-white');
      }
    }, { passive: true });

    if (hamburgerBtn && mobileMenu) {
      hamburgerBtn.addEventListener('click', () => {
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
          hamburgerBtn.classList.add('menu-open');
          mobileMenu.classList.remove('hidden');
        } else {
          hamburgerBtn.classList.remove('menu-open');
          mobileMenu.classList.add('hidden');
        }
      });
    }
  };

  // 3. Setup 3D Hover effect for Project Cards
  const setup3DCards = () => {
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / rect.height) * -6;
        const rotateY = ((x - rect.width / 2) / rect.width) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(59,130,246,0.12), 0 20px 60px rgba(0,0,0,0.1)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.boxShadow = '';
      });
    });
  };

  // 4. Render Project Card HTML (Reusable function)
  window.renderProjectCard = (project, index = 0) => {
    const staggerClass = index ? `stagger-${Math.min(index + 1, 6)}` : '';
    
    // Tag generation
    const tagsHTML = project.tags.map(tag => 
      `<span class="skill-tag text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-50 text-slate-600 border border-slate-100 cursor-default">${tag}</span>`
    ).join('');

    return `
      <div class="animate-on-scroll ${staggerClass}">
        <div class="card-3d group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-full flex flex-col">
          <div class="relative h-64 overflow-hidden flex-shrink-0">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/65 via-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
              <p class="text-white/90 text-xs leading-relaxed translate-y-2 group-hover:translate-y-0 transition-transform duration-400 line-clamp-2">
                ${project.description}
              </p>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm border border-white/40">
                ${project.category.replace('_', ' ')}
              </span>
            </div>
          </div>
          
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              ${project.title}
            </h3>
            <p class="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow">
              ${project.description}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-8">
              ${tagsHTML}
            </div>
            
            <div class="flex items-center justify-between mt-auto">
              <a href="project-detail.html?id=${project.id}" class="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 mr-2">
                View Detail
              </a>
              <div class="flex gap-2">
                <a href="${project.liveLink || '#'}" target="_blank" class="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="${project.repoLink || '#'}" target="_blank" class="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // Setup Animated Counters (for About page)
  const setupCounters = () => {
    const statCards = document.querySelectorAll('.stat-card');
    if (!statCards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            startCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statCards.forEach(card => observer.observe(card));

    function startCounter(el) {
      const target = parseFloat(el.getAttribute('data-target'));
      if (isNaN(target) || target === 0) return; // For 'Infinite' or 0
      
      const duration = 1500; // ms
      const steps = 60;
      const increment = target / steps;
      const interval = duration / steps;
      let current = 0;
      
      const valueSpan = el.querySelector('.stat-value');
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          valueSpan.innerText = target;
          clearInterval(timer);
        } else {
          valueSpan.innerText = Math.floor(current);
        }
      }, interval);
    }
  };

  // Setup Parallax Background
  const setupParallax = () => {
    const blobs = document.querySelectorAll('.parallax-blob');
    if (blobs.length > 0) {
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        blobs.forEach((blob, index) => {
          const speed = (index + 1) * 0.15;
          const yPos = -(scrolled * speed);
          blob.style.transform = `translateY(${yPos}px)`;
        });
      }, { passive: true });
    }
  };

  // Setup Page Transitions
  const setupPageTransitions = () => {
    // Add fade-in class on load
    document.body.classList.add('page-fade');
    
    // Intercept clicks on local links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute('href');
      // Only intercept local HTML links that aren't anchors
      if (href && href.endsWith('.html') && !href.startsWith('http') && link.target !== '_blank') {
        e.preventDefault();
        document.body.classList.add('page-fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 300); // Wait for transition duration
      }
    });
  };

  // Init all scripts
  setupNavbar();
  setupPageTransitions();
  // Delay initial setup slightly to ensure dynamic content is loaded (for Home/Projects pages)
  setTimeout(() => {
    setupScrollAnimation();
    setup3DCards();
    setupCounters();
    setupParallax();
  }, 100);
});
