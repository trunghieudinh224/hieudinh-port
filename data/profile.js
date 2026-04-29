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
    location: 'Ho Chi Minh City, VN',
    github: 'https://github.com/trunghieudinh224',  // ← Link GitHub
    linkedin: 'https://linkedin.com', // ← Link LinkedIn
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
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Completed', value: '40+' },
        { label: 'Happy Clients', value: '20+' },
        { label: 'GitHub Commits', value: '2,500+' },
    ],

    // Trang About:

    skills: [
        { title: 'FRONTEND', icon: '💻', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
        { title: 'BACKEND', icon: '🗄️', items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'] },
        { title: 'TOOLS & DEVOPS', icon: '🛠️', items: ['Git', 'Docker', 'Figma'] },
    ],

    // Kinh nghiệm làm việc
    experience: [
        {
            period: '2021 - PRESENT',
            role: 'Senior Frontend Engineer',
            company: 'TechFlow Solutions',
            location: 'Ho Chi Minh City, VN',
            description: 'Spearheaded the migration of a legacy jQuery codebase to React 18, improving page load times by 40% and increasing user retention by 15%. Mentored junior developers and established CI/CD pipelines.',
            isCurrent: true,
        },
        {
            period: '2019 - 2021',
            role: 'Full Stack Developer',
            company: 'Creative Pulse Agency',
            location: 'Remote',
            description: 'Developed custom e-commerce solutions for high-profile clients using Shopify and Next.js. Integrated complex payment gateways, boosting conversion rates by 25% and handling over $1M in processed transactions.',
            isCurrent: false,
        },
        {
            period: '2017 - 2019',
            role: 'Junior Web Developer',
            company: 'StartUp Inc',
            location: 'Remote',
            description: 'Assisted in the development of a real-time chat application using React and Firebase. Collaborated with the design team to implement responsive layouts, growing the active user base from 0 to 10,000+ within the first 3 months.',
            isCurrent: false,
        }
    ],

    // Học vấn
    education: [
        { title: 'BS in Computer Science', institution: 'Massachusetts Institute of Technology', period: '2013 - 2017', icon: 'MIT' },
        { title: 'AWS Certified Solutions Architect', institution: 'Amazon Web Services', period: 'Issued 2022', icon: 'AWS' },
    ],
};
