export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Level 2 Fiverr Seller | 100% Positive Reviews",
    description:
      "Shipped 25+ production apps across the US, Europe, and UAE with a 65% repeat client rate.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect Professional",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    className: "md:col-span-3 md:row-span-2",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    title: "My tech stack",
    description: "I constantly try to improve",
    imgClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Saith Waqas ali is a top-tier engineer. He led the frontend architecture for our blockchain healthcare platform, integrating complex Web3Auth and Wagmi modules flawlessly. His work directly contributed to a 40% improvement in our Core Web Vitals. Absolutely brilliant at scaling React applications.",
    name: "Dr. Arshad Khan",
    title: "Project Lead",
  },
  {
    quote:
      "Outstanding experience! Waqas delivered a high-performance DeFi dashboard for us on the Sui network. He has a deep understanding of wallet interactions and real-time data analytics. The code was clean, and his communication across time zones was perfect.",
    name: "Jameson Wright",
    title: "Founder of DeFi Protocol (US-based)",
  },
  {
    quote:
      "I was struggling with the complexity of VPCs and IAM policies until I started my AWS Solutions Architect training with Saith. His deep architectural knowledge helped me grasp the 'why' behind the services. Thanks to his guidance, I passed my Associate exam on the first attempt!",
    name: "Niklas Virtanen",
    title: "AWS Certified Solutions Architect (Finland)",
  },
  {
    quote:
      "Waqas is a brilliant mentor. He has a way of simplifying the most difficult AWS concepts into real-world scenarios. His exam strategies and hands-on labs were exactly what I needed to get certified. I'm now confidently applying these cloud-native patterns in my role in the UK.",
    name: "Rizwan Ahmed",
    title: "Cloud Engineer (United Kingdom)",
  },
  {
    quote:
      "I started with zero knowledge of coding, and Waqas walked me through the entire Web Development journey. He didn't just teach me syntax; he taught me how to think like an engineer. I’ve just landed my first full-time developer role, and I couldn't have done it without his mentorship.",
    name: "Priya Sharma",
    title: "Full-Stack Developer (India)",
  },
  {
    quote:
      "Working with a Level 2 seller makes a difference. Waqas didn't just build the site; he optimized our entire AWS cloud infrastructure, reducing our monthly costs and improving load times. He is a rare developer who understands both pixel-perfect UI and heavy-duty DevOps.",
    name: "Marco Rossi",
    title: "E-commerce Entrepreneur (Italy)",
  },
  {
    quote:
      "Fast, reliable, and technically gifted. He reduced our frontend bundle size by nearly 45%, which made a massive difference for our users on mobile. He's my go-to for any React/Next.js work. Total pro!",
    name: "Liam O'Connor",
    title: "Freelance Client (UK)",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperiences = [
  {
    title: "Senior Software Engineer",
    company_name: "TekHQS - (Full-time)",
    icon: "/assets/company/tekhqs_logo.jfif",
    iconBg: "#E6DEDD",
    date: "Feb 2026 - Present",
    points: [
      "Leading full-stack and multi-chain Web3 development for DeFi applications on Sui, Solana, Ethereum, and Worldcoin (WLD).",
      "Architecting scalable backend services with Node.js, Nest.JS, and monorepo patterns using MongoDB and PostgreSQL.",
      "Building modern React.js/Next.js dashboards with real-time analytics, improving user workflows by 30%.",
      "Leading code reviews and mentoring junior engineers, reducing release friction by 25% through CI/CD optimization.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Fiverr - (Freelance)",
    icon: "/assets/company/fiverr.png",
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Built and shipped 25+ production-ready web applications for global clients with a 95%+ on-time delivery rate.",
      "Developed full-stack solutions using React.js, Vue.js, and NestJS, deployed on AWS (EC2, S3, CloudFront, RDS).",
      "Improved SEO and Core Web Vitals through performance tuning, accessibility-first design, and cross-device optimization.",
      "Achieved Level 2 Seller status and a 60% client return rate through technical excellence and post-launch support.",
    ],
  },
  {
    title: "Senior Frontend Engineer & Team Lead",
    company_name: "Code Encoders - (Full-time)",
    icon: "/assets/company/code_encoders_logo.jfif",
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Feb 2026",
    points: [
      "Led frontend architecture for BlockMedPro, a blockchain healthcare platform serving 10K+ users with Web3Auth and Wagmi.",
      "Optimized Core Web Vitals by 40% using lazy loading, code-splitting, and efficient data fetching via React Query.",
      "Delivered premium NFT platforms (Golden Years, Infinity Global) with real-time wallet interactions and 99.5% uptime.",
      "Mentored 5 junior developers and established clean code principles and WCAG 2.1 accessibility standards.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "Next Bridge System - (Part-time)",
    icon: "/assets/company/next_bridge_system_logo.jfif",
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Jan 2026",
    points: [
      "Architected the frontend for My E-Assistant ERP SaaS platform, integrating REST APIs.",
      "Improved data clarity by 50% through the implementation of interactive charts and modern responsive UIs.",
      "Reduced page load times by 25% through performance optimization and strategic code splitting.",
      "Accelerated sprint delivery by 18% by contributing to reusable component libraries and agile workflows.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Hashed System - (Contract)",
    icon: "/assets/company/hashed_system_logo.jfif",
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jun 2024",
    points: [
      "Developed dynamic, high-performance web applications using React.js, Vue.js, and modern JavaScript.",
      "Integrated RESTful APIs for real-time backend communication, reducing user-facing errors by 30%.",
      "Collaborated with UI/UX designers to ensure design consistency and cross-device responsiveness.",
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "BlankSlate Technologies - (Full-time)",
    icon: "/assets/company/blankslate_tech_logo.jfif",
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Mar 2023",
    points: [
      "Built clean, structured web interfaces using HTML5, CSS3, and Sass for rapid prototyping.",
      "Developed component-based UIs and responsive layouts using React.js fundamentals.",
    ],
  },
];

export const services = [
  {
    title: "Full-Stack Development",
    description: "Delivering end-to-end web solutions:",
    offers: [
      "Build responsive & scalable apps using React, Next.js, Node.js, TypeScript",
      "RESTful APIs, GraphQL, and database design (SQL & NoSQL)",
      "3D Interactive Websites using three.js & Gsap ",
      "Performance optimization, SEO best practices, and accessibility compliance",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Designing cloud solutions, optimizing infrastructure:",
    offers: [
      "Architect scalable & reliable AWS/GCP infrastructures",
      "Implement CI/CD pipelines & automation for faster deployments",
      "Performance tuning & cost optimization strategies",
      "Security best practices, IAM management, monitoring & disaster recovery",
    ],
  },
  {
    title: "Web3 & Blockchain",
    description: "Building decentralized apps and blockchain solutions:",
    offers: [
      "Develop dApps on Ethereum, Solana, Sui",
      "Smart contract development & auditing",
      "Wallet integration & authentication (Web3Auth, RainbowKit)",
      "NFT projects, tokenomics, and blockchain API integrations (Web3.js, Ethers.js)",
      "Into the Web3, blockchain development and smart contracts",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://linkedin.com/in/saithwaqasali",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/saithwaqasali",
  },
  {
    id: 3,
    img: "/fiverr.png",
    link: "https://fiver.com/waqasali365",
  },
  {
    id: 4,
    img: "/upwork.png",
    link: "https://upwork.com/saithwaqasa",
  },
];
