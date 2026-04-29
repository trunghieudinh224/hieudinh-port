/**
 * PROFILE DATA
 * Sửa thông tin cá nhân của bạn tại đây.
 * File này được dùng bởi tất cả các trang HTML.
 */
const PROFILE = {
  name: 'Trung Hieu Dinh',            // ← Tên của bạn
  role: 'Web & Mobile Developer',
  tagline: 'Building accessible, pixel-perfect web experiences.',
  shortBio: "A passionate Web & Mobile Developer with 5+ years of experience crafting high-performance applications and intuitive digital experiences.",
  bio: [
    'With over 5 years of experience as a Web and Mobile Developer, I have a strong foundation in creating user-centric applications. I specialize in building responsive websites and cross-platform mobile apps that deliver seamless digital experiences.',
    "I am passionate about clean code, modern architecture, and continuously learning new technologies to solve complex problems."
  ],
  longBio: `I'm a Web & Mobile Developer based in Vietnam. I fell in love with coding because it empowers me to turn abstract ideas into interactive realities that people can actually touch and use. Beyond just writing clean code, I'm deeply motivated by crafting intuitive, user-centric designs that solve real-world problems.
  <br><br>
  When I'm not staring at my code editor, you can usually find me contributing to open-source projects, exploring the latest UI/UX design trends, or playing video games to unwind and find new creative inspiration.`,

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
    { icon: '⚡', title: 'Performance First', desc: 'Optimizing for speed and efficiency across all devices.' },
    { icon: '🎨', title: 'UI/UX Centric',    desc: 'Creating intuitive, accessible, and beautiful interfaces.' },
    { icon: '🏗️', title: 'Scalable Arch',    desc: 'Building robust systems that grow with your needs.' },
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
    { title: 'FRONTEND',       icon: '💻', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { title: 'BACKEND',        icon: '🗄️', items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'] },
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
    { title: 'BS in Computer Science',         institution: 'Massachusetts Institute of Technology', period: '2013 - 2017',  icon: 'MIT' },
    { title: 'AWS Certified Solutions Architect', institution: 'Amazon Web Services',               period: 'Issued 2022',  icon: 'AWS' },
  ],
};
