// Single source of truth for portfolio content — derived from Haider Ali's CV.

export const profile = {
  name: "Haider Ali",
  role: "Full Stack Developer",
  focus: "AI-Assisted Development",
  location: "Lahore, Pakistan",
  email: "mail.haiderali94@gmail.com",
  phone: "+92 323 8898327",
  linkedin: "https://www.linkedin.com/in/haider-ali-693996272/",
  github: "https://github.com/haider-94",
  whatsapp: "https://wa.me/923238898327",
  resume: "/HaiderAli-CV.pdf",
  available: true,
  availableText: "Open to full-stack & frontend roles",
  tagline:
    "I build web and mobile products with React, Next.js, React Native and Rails, pairing solid engineering with AI-assisted workflows to ship faster without cutting corners.",
  summary:
    "Full Stack Developer with experience building web and mobile products using React, React Native, Next.js, TypeScript, Node.js and Ruby on Rails. I combine solid engineering fundamentals with AI-assisted development workflows, using tools like Claude, Cursor and similar copilots to accelerate delivery, explore solutions and improve iteration speed while maintaining production quality.",
};

export type Project = {
  index: string;
  title: string;
  year: string;
  role: string;
  url?: string;
  blurb: string;
  detail: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "1stPage",
    year: "Since 2024",
    role: "Frontend / Full Stack",
    blurb:
      "A seller-intelligence platform for Amazon sellers and vendors that surfaces product analytics and operational insight from Amazon reports and SP-API data.",
    detail:
      "Building analytics experiences that help sellers understand product performance, sales signals and marketplace trends. Supporting SP-API integrations and report-ingestion pipelines that turn raw Amazon data into dashboards and actionable insight through clean UI and practical reporting.",
    stack: ["React", "Next.js", "Node.js", "Amazon SP-API", "Analytics Pipelines"],
  },
  {
    index: "02",
    title: "Klaro",
    year: "2024",
    role: "Mobile / Full Stack",
    blurb:
      "A mobile app for monitoring a humidor's atmospheric conditions and sending personalized alerts based on user preferences.",
    detail:
      "Built UI/UX flows, API integrations and third-party integrations across connected-device and e-commerce workflows. Contributed to backend test coverage, requirement gathering, client communication and demo validation.",
    stack: ["React Native", "Redux", "Ruby on Rails", "Shopify", "Push Notifications", "BLE"],
  },
  {
    index: "03",
    title: "Samurai Dashboard",
    year: "2024",
    role: "Senior Contributor",
    blurb:
      "A retail-distribution management platform used across delivery, inventory, distribution and admin operations in the Gulf region.",
    detail:
      "Resolved known issues, improved UI/UX, upgraded dependencies and delivered feature enhancements. Supported a Vue.js → React Admin migration and worked as a senior contributor on platform modernization.",
    stack: ["React", "React Admin", "Vue.js", "Material UI", "Google Maps"],
  },
  {
    index: "04",
    title: "Vstora",
    year: "2023",
    role: "Full Stack",
    url: "https://vstora.com/",
    blurb:
      "An all-in-one platform for creating and managing online businesses with inventory and operational workflows.",
    detail:
      "Worked on customer-side and dashboard experiences, API integrations, UI implementation and third-party services including payments and notifications.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Stripe", "Push Notifications"],
  },
  {
    index: "05",
    title: "Agency Reviews",
    year: "2023",
    role: "Frontend",
    url: "https://www.agencyreviews.io/",
    blurb:
      "A platform that connects businesses with marketing and advertising agencies through reviews and ratings.",
    detail:
      "Contributed to frontend development focused on usability, trust and clear presentation of agency performance data.",
    stack: ["React", "Next.js", "Push Notifications"],
  },
  {
    index: "06",
    title: "London Filmed",
    year: "2022",
    role: "Frontend",
    url: "https://londonfilmed.com/",
    blurb:
      "A centralized platform for building, delivering and managing event and media projects.",
    detail:
      "Supported frontend implementation and user-interface development across the platform.",
    stack: ["React", "TypeScript"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Independent Contractor",
    role: "Frontend / Full Stack Developer",
    period: "Aug 2024 – Present",
    points: [
      "Develop and maintain web and mobile applications using React, React Native, TypeScript, Node.js and modern frontend tooling.",
      "Build user-facing features, integrate APIs and third-party services, and improve reliability through monitoring and issue resolution with tools such as Sentry.",
      "Use AI coding tools like Claude, Cursor and similar assistants to speed up prototyping, debugging and refactoring while keeping code quality high.",
    ],
  },
  {
    company: "Jazzari",
    role: "Software Engineer",
    period: "Mar 2023 – Jul 2024",
    points: [
      "Collaborated with engineers to design, build and improve software solutions for active client projects.",
      "Troubleshot and resolved defects to improve product stability, usability and client satisfaction.",
      "Contributed to frontend development, UI implementation, integrations and solution design across multiple products.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Ruby", "HTML & CSS"],
  },
  {
    label: "Frameworks",
    items: ["React.js", "React Native", "Next.js", "Node.js", "Ruby on Rails", "Vue.js"],
  },
  {
    label: "Tools & Services",
    items: ["Redux", "REST APIs", "Shopify", "Stripe", "Sentry", "PostgreSQL", "Git", "Google Maps"],
  },
  {
    label: "AI-Assisted",
    items: ["Claude", "Cursor", "Coding Copilots", "Rapid Prototyping", "LLM Debugging"],
  },
];

export const strengths: string[] = [
  "Comfortable in fast-moving product environments where speed, iteration and experimentation matter.",
  "Combines product understanding with AI-assisted workflows to move from idea to implementation quickly.",
  "Strong fit for startup and product teams that need engineers who can ship, iterate and adapt across the stack.",
];

export const education = {
  degree: "BSc, Electrical Engineering",
  school: "University of Central Punjab",
  period: "2013 – 2017",
};

export const navItems = [
  { text: "Work", href: "#work" },
  { text: "Experience", href: "#experience" },
  { text: "About", href: "#about" },
  { text: "Contact", href: "#contact" },
];
