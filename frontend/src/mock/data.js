// Mock data for the portfolio
export const personalInfo = {
  name: "Pavithran Rajasekar",
  title: "Full-Stack Developer | UI/UX Designer",
  tagline: "Crafting Digital Experiences with Cinematic Precision",
  bio: "I'm a passionate full-stack developer and designer who believes in creating digital experiences that tell stories. With expertise in modern web technologies and a keen eye for design, I bring ideas to life through clean code and stunning visuals.",
  location: "Chennai, India",
  email: "pavithran@example.com",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
};

export const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "Figma", level: 92, category: "Design" },
  { name: "Adobe XD", level: 88, category: "Design" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Docker", level: 78, category: "DevOps" }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/mrpavithran/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    category: "Web",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Chat App",
    description: "Real-time messaging application with AI chatbot integration. Built with Socket.io for live communication and OpenAI API for intelligent responses.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    technologies: ["React", "Socket.io", "OpenAI", "Express"],
    github: "https://github.com/mrpavithran/ai-chat-app",
    demo: "https://ai-chat-demo.vercel.app",
    category: "Web",
    featured: true
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with workout plans, nutrition tracking, and progress analytics. Built with React Native.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/mrpavithran/fitness-tracker",
    demo: "https://fitness-app-demo.com",
    category: "Mobile",
    featured: false
  },
  {
    id: 4,
    title: "Design System Library",
    description: "Comprehensive design system with reusable components, design tokens, and documentation. Used across multiple projects for consistent UI/UX.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
    technologies: ["Storybook", "React", "Sass", "Figma"],
    github: "https://github.com/mrpavithran/design-system",
    demo: "https://design-system-docs.vercel.app",
    category: "UI/UX",
    featured: false
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for business analytics with real-time charts, filters, and export functionality. Built for scalable data processing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["D3.js", "React", "Python", "PostgreSQL"],
    github: "https://github.com/mrpavithran/data-dashboard",
    demo: "https://data-viz-demo.vercel.app",
    category: "Web",
    featured: true
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "This very portfolio website you're viewing! A cinematic, futuristic design with smooth animations and modern interactions.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/mrpavithran/Portfolio",
    demo: "https://pavithran-portfolio.vercel.app",
    category: "Web",
    featured: true
  }
];

export const experience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    description: "Lead development of enterprise web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    id: 2,
    company: "DigitalCraft Studio",
    position: "Frontend Developer & UI Designer",
    duration: "2020 - 2022",
    description: "Developed responsive web applications and created user-centered design solutions. Collaborated with cross-functional teams on 15+ projects.",
    technologies: ["Vue.js", "Figma", "Firebase", "GraphQL"]
  },
  {
    id: 3,
    company: "StartupHub",
    position: "Junior Developer",
    duration: "2019 - 2020",
    description: "Built and maintained web applications for startup clients. Gained experience in rapid prototyping and agile development methodologies.",
    technologies: ["JavaScript", "React", "Express", "MySQL"]
  }
];

export const githubStats = {
  username: "mrpavithran",
  publicRepos: 24,
  followers: 156,
  following: 89,
  totalStars: 342,
  totalForks: 87,
  contributions: 1247,
  languages: [
    { name: "JavaScript", percentage: 35, color: "#f7df1e" },
    { name: "Python", percentage: 28, color: "#3776ab" },
    { name: "TypeScript", percentage: 20, color: "#3178c6" },
    { name: "CSS", percentage: 12, color: "#1572b6" },
    { name: "Other", percentage: 5, color: "#6c757d" }
  ]
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/mrpavithran", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/pavithran-rajasekar", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/pavithran_dev", icon: "twitter" },
  { name: "Email", url: "mailto:pavithran@example.com", icon: "mail" }
];