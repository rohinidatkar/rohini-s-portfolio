// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Rohini Datkar",
  firstName: "Rohini",
  brandName: "Rohini",

  title: "Graduate Engineer | Analyst | Data & Technology Enthusiast",

  location: "Pune, Maharashtra, India",

  phone: "YOUR_PHONE_NUMBER",

  emails: {
    primary: "rohinidatkar@gmail.com",
    secondary: "datkarrohini@gmail.com",
  },

  summary:
    "Electronics & Telecommunication Engineering graduate with hands-on experience in Python, SQL, Power BI, Excel, Tableau, and Machine Learning. Passionate about analytics, business intelligence, and solving business problems using data. Open to entry-level opportunities in Analyst, Graduate Engineer, MIS, Technical Support, Operations, and related technology roles.",

  resumeUrl: "/Rohini_Datkar_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/rohinidatkar",
  linkedin: "https://www.linkedin.com/in/rohinidatkar/",
};

export const heroContent = {
  greeting: "Hi, I'm Rohini",

  titleHighlight: "Graduate Engineer | Analyst",

  subtitle:
    "Electronics & Telecommunication Engineering graduate passionate about Data Analytics, Business Intelligence, Python, SQL, Power BI, Excel, and Machine Learning. Currently seeking entry-level opportunities in Analyst, Graduate Engineer, MIS, Technical Support, Operations, and related technology roles.",

  ctaPrimary: {
    text: "View My Work",
    href: "#projects",
  },

  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:rohinidatkar@gmail.com?subject=Hiring Opportunity",
  },

  ctaResume: {
    text: "Download Resume",
    href: "/Rohini_Datkar_Resume.pdf",
  },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Rohini Datkar</span>, an Electronics & Telecommunication Engineering graduate passionate about Data Analytics, Business Intelligence, Machine Learning, and Data Visualization. I enjoy transforming raw data into meaningful business insights through dashboards, predictive models, and analytical solutions. I have hands-on experience with Python, SQL, Power BI, Excel, Tableau, Machine Learning, and dashboard development.`,
  techStack: ["Python", "SQL", "Power BI", "Machine Learning"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 92 },
        { name: "Excel", level: 90 }
      ]
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 82 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 82 },
        { name: "Time Series Forecasting", level: 80 },
        { name: "Feature Engineering", level: 78 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "SQL Joins", level: 92 },
        { name: "Window Functions", level: 82 }
      ]
    },
    {
      title: "Visualization",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "DAX", level: 82 },
        { name: "Tableau", level: 82 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 80 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "VS Code", level: 90 },
        { name: "Google Colab", level: 88 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "IEEE Madhya Pradesh Section (Social Media Team)",
    description: "Managed and coordinated digital content, driving audience engagement and designing interactive visual campaigns for tech events.",
    role: "Social Media Coordinator",
    badge: "Volunteer"
  },
  {
    title: "Team Coordinator – Go-Kart International Racing 2K25",
    description: "Led multi-disciplinary teams in project management, budget control, and logistics coordination for a high-profile international racing event.",
    role: "Team Coordinator",
    badge: "Leadership"
  },
  {
    title: "5-Day MOE IDE Bootcamp, Roorkee",
    description: "Participated in an intensive Innovation, Design, and Entrepreneurship Bootcamp organized by the Ministry of Education at IIT Roorkee.",
    role: "Bootcamp Graduate",
    badge: "Innovation"
  },
  {
    title: "Hosted INFORIA Tech Summit Hackathon",
    description: "Organized and hosted the flagship hackathon, managing registrations, mentoring participant teams, and coordinating judge evaluations.",
    role: "Hackathon Organizer",
    badge: "Co-Curricular"
  },
  {
    title: "Event Coordinator & Anchoring – INFORIA 2K25",
    description: "Coordinated technical events and served as the main stage anchor, speaking in front of large crowds and managing the summit flow.",
    role: "Stage Anchor & Coordinator",
    badge: "Public Speaking"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Netlink, Bhopal",
    role: "Data Analytics & BI Tools Intern",
    duration: "June 2025 - August 2025",
    skills: ["Data Analytics", "Business Intelligence", "Dashboard Design", "Data Modeling"],
    tech: ["Lumenore", "MySQL", "Excel", "BI Tools"]
  },
  {
    organization: "Canva",
    role: "Visual Content Creator & Designer",
    duration: "May 2024 - June 2024",
    skills: ["Visual Designing", "Poster Design", "Team Branding", "Asset Creation"],
    tech: ["Canva Pro", "Figma", "Canva Design Suite"]
  },
  {
    organization: "CollegeTips.in",
    role: "Web Development Intern",
    duration: "1 Month (Offline)",
    skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  {
    name: "Analytical Thinking",
    icon: "📊",
    desc: "Finding patterns, trends and business insights from data."
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking complex business problems into manageable solutions."
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Presenting technical findings clearly to stakeholders."
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively with cross-functional teams."
  },
  {
    name: "Critical Thinking",
    icon: "🧠",
    desc: "Evaluating data objectively before making decisions."
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Managing multiple projects while meeting deadlines."
  },
  {
    name: "Adaptability",
    icon: "🌱",
    desc: "Quickly learning new tools and technologies."
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Ensuring high data accuracy and quality."
  }
];

export const projects = [
  {
  id: "uber-traffic-prediction",
  number: "01",
  badge: "🚀 Featured Project",

  title: "Uber Traffic Volume Prediction",

  description:
    "Developed a machine learning model to predict hourly traffic volume using historical Uber traffic datasets. Performed data cleaning, exploratory data analysis, feature engineering, and time-series forecasting to improve prediction accuracy.",

  techTags: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "XGBoost",
    "LSTM",
    "Power BI"
  ],

  links: {
    github: "YOUR_GITHUB_PROJECT_LINK",
    demo: null,
  },

  isFlagship: true,
},
  {
  id: "sales-dashboard",
  number: "02",
  badge: null,

  title: "Sales & Refund Analytics Dashboard",

  description:
    "Designed an interactive Power BI dashboard to analyze sales performance, refunds, revenue trends, customer behavior, and business KPIs. Used SQL and Excel for data extraction, cleaning, and transformation before visualization.",

  techTags: [
    "Power BI",
    "SQL",
    "Excel",
    "Data Cleaning",
    "Dashboard",
    "DAX"
  ],

  links: {
    github: "#",
  },

  isFlagship: false,
},
  {
  id: "movie-recommendation",
  number: "03",
  badge: null,

  title: "Movie Recommendation System",

  description:
    "Built a recommendation system that suggests movies based on user preferences using collaborative filtering and content-based recommendation techniques. Performed data preprocessing, feature engineering, and recommendation analysis using Python.",

  techTags: [
    "Python",
    "Pandas",
    "Machine Learning",
    "Recommendation System",
    "Scikit-learn",
    "Data Analysis"
  ],

  links: {
    github: "#",
  },

  isFlagship: false,
},
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Programming in Java (94%)",
      issuer: "NPTEL",
      icon: "☕",
    },
    {
      name: "C Programming & Assembly Language",
      issuer: "NPTEL",
      icon: "⚙️",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      icon: "💼",
    },
    {
      name: "Career Edge – IT Primer",
      issuer: "TCS iON",
      icon: "🎓",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Lumenore",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "IES College of Technology (RGPV)",
  cgpa: "8.35",
  graduation: "2027",
  twelfth: "12th Science – 81%",
  tenth: "10th CBSE – 70%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.35",
  copyright: `© ${new Date().getFullYear()} Md Yusuf | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
