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
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "SQL", level: 90 },
        { name: "R", level: 65 }
      ]
    },

    {
      title: "Data Analytics",
      skills: [
        { name: "Data Cleaning", level: 95 },
        { name: "Data Preprocessing", level: 92 },
        { name: "EDA", level: 95 },
        { name: "Feature Engineering", level: 88 }
      ]
    },

    {
      title: "Visualization & BI",
      skills: [
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 85 },
        { name: "Excel", level: 95 },
        { name: "Matplotlib", level: 88 }
      ]
    },

    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-Learn", level: 88 },
        { name: "TensorFlow", level: 80 },
        { name: "LSTM", level: 78 },
        { name: "Model Evaluation", level: 86 }
      ]
    },

    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Git & GitHub", level: 85 },
        { name: "Jupyter Notebook", level: 95 },
        { name: "VS Code", level: 85 }
      ]
    },

    {
      title: "Core Concepts",
      skills: [
        { name: "Statistics", level: 85 },
        { name: "Business Analytics", level: 90 },
        { name: "Machine Learning", level: 88 },
        { name: "Data Visualization", level: 95 }
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
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
  id: "incidentiq-analysis",
  number: "01",
  badge: "⭐ Featured Project",

  title: "IncidentIQ IT Incident Analysis",

  description:
    "Business-focused IT Incident Management analysis using over 141,000 real-world ITSM records. Performed data cleaning, exploratory data analysis, KPI reporting, trend analysis, SLA monitoring, category-wise incident analysis, and visualization to identify operational bottlenecks and improve service efficiency.",

  techTags: [
    "Python",
    "Pandas",
    "Matplotlib",
    "NumPy",
    "EDA",
    "Data Visualization",
    "ITSM",
    "Business Analytics"
  ],

  links: {
    github: "https://github.com/rohinidatkar/incidentiq-it-incident-analysis",
  },

  isFlagship: true,
},

{
  id: "uber-traffic-weather",
  number: "02",

  title: "Uber Traffic Weather Analysis",

  description:
    "Analyzed Uber traffic volume by integrating weather and event datasets. Performed feature engineering, exploratory data analysis, trend visualization, and traffic pattern analysis to identify factors affecting congestion across different time periods.",

  techTags: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Feature Engineering",
    "EDA",
    "Machine Learning"
  ],

  links: {
    github: "https://github.com/rohinidatkar/uber-traffic-weather-analysis",
  },

  isFlagship: false,
},

{
  id: "sales-refund-analysis",
  number: "03",

  title: "Sales & Refund Analysis Dashboard",

  description:
    "Analyzed sales and refund transactions for a UK-based office infrastructure company. Built interactive dashboards and generated business insights to identify refund drivers, monitor KPIs, and support data-driven decision making.",

  techTags: [
    "SQL",
    "Power BI",
    "Excel",
    "Python",
    "Dashboard",
    "Business Intelligence"
  ],

  links: {
    github: "https://github.com/rohinidatkar/Sales-and-Refunds-Analysis",
  },

  isFlagship: false,
},
{
  id: "credit-risk-analysis",
  number: "04",

  title: "Credit Risk Analysis",

  description:
    "Developed a machine learning model to predict loan default risk using customer financial data. Performed data preprocessing, feature engineering, exploratory data analysis, and model evaluation using multiple classification algorithms to support data-driven lending decisions.",

  techTags: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "Machine Learning",
    "Classification",
    "EDA",
    "Data Visualization"
  ],

  links: {
    github: "https://github.com/rohinidatkar/Credit-Risk-Analysis-",
  },

  isFlagship: false,
},

{
  id: "movie-recommendation",
  number: "05",

  title: "Movie Recommendation System",

  description:
    "Built a personalized movie recommendation engine using collaborative and content-based filtering techniques. Processed movie datasets, engineered recommendation features, and generated personalized suggestions based on user preferences.",

  techTags: [
    "Python",
    "Machine Learning",
    "Recommendation System",
    "Pandas",
    "Scikit-learn"
  ],

  links: {
    github: "https://github.com/rohinidatkar/Movie-Recommendation-System",
  },

  isFlagship: false,
},

{
  id: "imdb-sentiment",

  number: "06",

  title: "IMDB RNN Sentiment Classifier",

  description:
    "Built a deep learning model using TensorFlow and LSTM to classify IMDB movie reviews into positive and negative sentiments. Included text preprocessing, tokenization, sequence padding, model training, and evaluation for binary sentiment classification.",

  techTags: [
    "Python",
    "TensorFlow",
    "LSTM",
    "Deep Learning",
    "NLP",
    "Sentiment Analysis"
  ],

  links: {
    github: "https://github.com/rohinidatkar/IMDB-RNN-Sentiment-Classifier",
  },

  isFlagship: false,
},
{
  id: "twitter-sentiment",
  number: "07",

  title: "Twitter Sentiment Analysis",

  description:
    "Performed sentiment analysis on Twitter data using Natural Language Processing techniques. Applied text preprocessing, tokenization, vectorization, and machine learning algorithms to classify tweets into positive, negative, and neutral sentiments.",

  techTags: [
    "Python",
    "NLP",
    "Pandas",
    "Scikit-learn",
    "Text Mining",
    "Machine Learning"
  ],

  links: {
    github: "https://github.com/rohinidatkar/Twitter-Sentimental-Analysis",
  },

  isFlagship: false,
},

{
  id: "uber-trip-analysis",
  number: "08",

  title: "Uber Trip Analysis",

  description:
    "Performed exploratory data analysis on Uber trip data to identify ride demand patterns, trip duration trends, peak hours, and customer behavior using Python and data visualization techniques.",

  techTags: [
    "Python",
    "Pandas",
    "Matplotlib",
    "EDA",
    "Data Visualization"
  ],

  links: {
    github: "https://github.com/rohinidatkar/-Uber-Trip-Analysis-",
  },

  isFlagship: false,
},

{
  id: "moving-object-detection",
  number: "09",

  title: "Moving Object Detection",

  description:
    "Developed a computer vision application to detect moving objects in video streams using image processing techniques. Implemented frame differencing and object tracking methods with OpenCV for real-time motion detection.",

  techTags: [
    "Python",
    "OpenCV",
    "Computer Vision",
    "Image Processing",
    "Object Detection"
  ],

  links: {
    github: "https://github.com/rohinidatkar/Moving-Object-Detection",
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
