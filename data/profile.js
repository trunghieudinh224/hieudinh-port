/**
 * PROFILE DATA
 * Sửa thông tin cá nhân của bạn tại đây.
 * File này được dùng bởi tất cả các trang HTML.
 */
const PROFILE = {
    name: 'Trung Hieu Dinh',            // ← Tên của bạn
    role: 'Web & Mobile Developer',
    tagline: 'Building accessible, pixel-perfect web experiences.',
    shortBio: "Hi, I’m Trung Hieu Dinh. A passionate Web & Mobile Developer focused on building high-performance applications and intuitive digital experiences.",
    bio: [
        'With over 5 years of experience as a Web and Mobile Developer, I focus on building practical digital products that combine performance, usability, and real business value. My work spans across web and mobile solutions, creating user-centered experiences that are both reliable and impactful.',
        "I have developed and contributed to a range of projects including E-commerce platforms, POS systems, booking applications, and business dashboards — always with an emphasis on delivering intuitive solutions that solve real-world problems."
    ],
    longBio: `With over five years of experience across web and mobile development, I've built and shipped products across a range of industries — from e-commerce platforms and point-of-sale systems to booking applications and financial dashboards.
My work sits at the intersection of frontend precision and full-stack thinking. I care about building things that are reliable under the hood and polished on the surface — products that hold up in production and feel right to use.
  <br><br>
  I'm continuously learning and evolving — driven by a genuine curiosity for what good software can look like.`,

    // Thông tin liên lạc
    email: 'trunghieudinh224@gmail.com',  // ← Email của bạn
    contactForm: {
        // mode: 'mailto' works when opening HTML files directly.
        // To send without opening an email app, change mode to 'api' and add a Formspree/Web3Forms endpoint.
        mode: 'api',
        endpoint: 'https://api.web3forms.com/submit',
        accessKey: 'cb5725a9-14b5-42b8-9588-1e905d59fdb9',
        fromName: 'HieuDinh Portfolio',
        subjectPrefix: 'Portfolio inquiry',
    },
    location: 'Ho Chi Minh City, VN',
    github: 'https://github.com/trunghieudinh224',  // ← Link GitHub
    linkedin: 'https://www.facebook.com/dth2204/', // ← Dùng Facebook thay LinkedIn
    facebook: 'https://www.facebook.com/dth2204/',
    cvLink: '#',                   // ← Link CV/Resume của bạn
    avatar: 'assets/images/port-ava.JPG',

    // Trang Home: 3 điểm mạnh
    strengths: [
        { icon: '⚡', title: 'Performance First', desc: 'Fast load times, optimized code — because speed is a feature' },
        { icon: '🔧', title: 'Full-Stack Capable', desc: 'From database to UI, I handle the full product — no handoff gaps' },
        { icon: '📱', title: 'Cross-Platform Ready', desc: 'Web and mobile from a single team — consistent quality across both' },
    ],

    // Trang About: Thống kê
    stats: [
        { label: 'Years of Experience', value: '5+' },
        { label: 'Projects Shipped', value: '20+' },
        { label: 'Technologies Used', value: '15+' },
        { label: 'Total Commits', value: '2,000+' },
    ],

    // Trang About:

    skills: [
        { title: 'Frontend', icon: '💻', items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React'] },
        { title: 'Mobile', icon: '📱', items: ['Android (Java)', 'iOS (Swift)', 'Flutter'] },
        { title: 'Backend', icon: '🗄️', items: ['Node.js', 'Laravel', 'MySQL', 'MongoDB', 'Firebase'] },
    ],

    // Kinh nghiệm làm việc (thứ tự cũ → mới; UI sẽ reverse để hiện mới nhất trên cùng)
    experience: [
        {
            period: 'May 2021 - 2022',
            role: 'Android Developer',
            company: 'Marutou Compack Vietnam',
            location: 'Ho Chi Minh City, VN',
            description: 'Joined as a fresher and transitioned into Android development within 3 months. Built and maintained multiple Android applications for Japanese gas utility operations — covering field work support, data entry, and real-time reporting. Gained hands-on experience with Java, API integration, and Japanese business workflows.',
            isCurrent: false,
        },
        {
            period: '2022 - 2024',
            role: 'Cross-Platform Developer (Android / iOS / Web)',
            company: 'Marutou Compack Vietnam',
            location: 'Ho Chi Minh City, VN',
            description: 'Extended Android gas utility apps to iOS, ensuring feature parity across both platforms. Subsequently led the web conversion of core Android apps, rebuilding native functionality into responsive browser-based interfaces. Independently built Uketsuke Kun — a full gas communication web app — from requirements through to production deployment.',
            isCurrent: false,
        },
        {
            period: '2023 - PRESENT',
            role: 'Freelance Fullstack Developer',
            company: 'Independent / Self-employed',
            location: 'Remote',
            description: 'Built and shipped production web applications for clients across Vietnam, the US, and Australia. Projects include a nail salon booking platform (Laravel, US market), a B2B uniform ordering system (Fabrico, Australia), multiple e-commerce stores (Candle Shop, Blanco Floral, Kiến Đạo), a QR-based POS system (ProPOS), and an automated cryptocurrency trading bot (Python / FastAPI).',
            isCurrent: true,
        },
        {
            period: '2024 - PRESENT',
            role: 'Web Systems Developer',
            company: 'Marutou Compack Vietnam',
            location: 'Ho Chi Minh City, VN',
            description: 'Leading the migration of legacy gas management desktop applications (Java / NetBeans) to modern web-based systems. Also architected and delivered internal web management platforms for Japanese manufacturing companies and enterprises — covering asset tracking, operations workflows, and reporting dashboards.',
            isCurrent: true,
        },
    ],

    // Học vấn
    education: [
        {
            title: 'Bachelor of Computer Science',
            institution: 'Ton Duc Thang University',
            period: '2017 - 2021',
            icon: 'TDT',
            iconImg: 'https://tdtu.edu.vn/sites/www/files/logo-dh_0.png',
            detail: 'Major: Information Systems',
        },
    ],
};

window.PROFILE = PROFILE;
