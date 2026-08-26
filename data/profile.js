/**
 * PROFILE DATA
 * Sửa thông tin cá nhân của bạn tại đây.
 * File này được dùng bởi tất cả các trang HTML.
 */
const PROFILE = {
    name: 'Trung Hieu Dinh',            // ← Tên của bạn
    role: 'Fullstack Web Developer & Sub-leader',
    tagline: 'Building production web systems from business requirements to deployment.',
    shortBio: "Hi, I’m Trung Hieu Dinh — a Fullstack Web Developer and Sub-leader focused on building reliable production systems, business workflows, and polished digital experiences.",
    bio: [
        'With over 5 years of experience across web and mobile development, I build production systems that combine reliable backend workflows, responsive interfaces, and practical business value.',
        'My work includes booking and studio operations platforms, e-commerce, B2B portals, POS systems, internal enterprise tools, automation, and local media tooling. I own delivery from requirements and architecture through implementation, testing, deployment, and production hardening.'
    ],
    longBio: `With over five years of experience across web and mobile development, I've built and shipped production systems for clients and teams in Vietnam, Japan, the United States, and Australia — from booking and studio operations platforms to e-commerce, B2B portals, POS systems, internal enterprise tools, and automation.
    My work sits at the intersection of backend reliability, frontend precision, and practical delivery. I care about clear architecture, business-rule correctness, production testing, deployment safety, and interfaces that feel right to use. In July 2026, I was promoted to Sub-leader while continuing hands-on web systems development.
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
    facebook: 'https://www.facebook.com/dth2204/',
    cvLink: 'cv/Trung_Hieu_Dinh_CV.pdf',  // ← Link CV/Resume của bạn
    avatar: 'assets/images/port-ava.JPG',

    // Trang Home: 3 điểm mạnh
    strengths: [
        { icon: '🏗️', title: 'Production Systems', desc: 'Business-critical workflows designed for reliability, auditability, and real operations' },
        { icon: '🔧', title: 'End-to-End Delivery', desc: 'Requirements, architecture, backend, UI, testing, deployment, and production hardening' },
        { icon: '🧭', title: 'Technical Leadership', desc: 'Hands-on development with project coordination, review, and team delivery responsibility' },
    ],

    // Trang About: Thống kê
    stats: [
        { label: 'Years of Experience', value: '5+' },
        { label: 'Projects Shipped', value: '20+' },
        { label: 'Markets Served', value: '4' },
        { label: 'Current Team Role', value: 'Sub-leader' },
    ],

    // Trang About:

    skills: [
        { title: 'Frontend', icon: '💻', items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Blade'] },
        { title: 'Backend & Data', icon: '🗄️', items: ['PHP', 'Laravel', 'Node.js', 'Python', 'FastAPI', 'MySQL', 'SQLite', 'REST APIs'] },
        { title: 'Mobile & Delivery', icon: '🚀', items: ['Android (Java)', 'iOS (Swift)', 'Flutter', 'Docker', 'Nginx', 'Linux VPS', 'GitHub Actions', 'FFmpeg'] },
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
            description: 'Built and shipped production web applications for clients across Vietnam, the US, and Australia. Recent work includes the completed Rema Pilates booking and studio operations platform, a white-label US nail salon booking system, Fabrico B2B ordering, Laravel e-commerce platforms, ProPOS, and Hyper Video Tool for local MP4 presentation automation.',
            isCurrent: true,
        },
        {
            period: '2024 - PRESENT',
            role: 'Web Systems Developer · Sub-leader',
            company: 'Marutou Compack Vietnam',
            location: 'Ho Chi Minh City, VN',
            description: 'Promoted to Sub-leader in July 2026 while continuing hands-on web systems development. Leading the migration of legacy Java / NetBeans gas management applications to modern web platforms and delivering internal systems for Japanese manufacturing and enterprise workflows, including asset tracking, operations, and reporting dashboards.',
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
