export const portfolioData = {
  personalInfo: {
    name: "Mohamed Shalapy",
    role: "Back End Developer",
    titleTagline: "Building scalable server-side systems, secure APIs & optimized databases",
    bio: "Passionate Back End Developer specialized in designing and building robust server-side architectures, RESTful APIs, and relational databases using PHP, Laravel, MySQL, and modern backend engineering practices.",
    statusBadge: "Available for new backend roles & projects",
    location: "Cairo, Egypt",
    email: "mahmedhaitham@gmail.com",
    whatsapp: "https://wa.me/201012876627", // ضع رقم الواتساب الخاص بك هنا، مثال: https://wa.me/201234567890
    whatsappNumber: "+20 (WhatsApp)",
    github: "https://github.com/MohammedHaitham007",
    linkedin: "https://linkedin.com/in/mohamed-haitham-shalapy-4a02a9221",
    resumeUrl: "#", // Add your CV file link here
  },

  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Completed Projects", value: "1+" },
    { label: "Code Commits", value: "1,500+" },
    { label: "Client Satisfaction", value: "100%" },
  ],

  about: {
    story: "I am a Back End Developer dedicated to engineering reliable, secure, and scalable web backends. I focus on developing clean RESTful APIs, optimizing relational database queries, and implementing clean MVC architecture that powers smooth web experiences.",
    highlights: [
      {
        title: "RESTful APIs & Services",
        description: "Designing structured, secure, and well-documented API endpoints for seamless frontend integration.",
      },
      {
        title: "Database Design & Optimization",
        description: "Modeling efficient MySQL schemas, managing relationships, migrations, and query performance.",
      },
      {
        title: "Security & Authentication",
        description: "Implementing robust authentication, session management, input validation, and data protection.",
      },
      {
        title: "Clean MVC Architecture",
        description: "Writing maintainable, modular, and scalable code following Laravel and OOP best practices.",
      },
    ],
  },

  skills: {
    categories: ["All", "Backend", "Tools & Deployment", "Frontend Basics"],
    items: [
      // Backend
      { name: "PHP", category: "Backend", level: "Advanced", experience: "2 yrs" },
      { name: "Laravel", category: "Backend", level: "Advanced", experience: "1.5 yrs" },
      { name: "MySQL", category: "Backend", level: "Advanced", experience: "2 yrs" },
      { name: "RESTful APIs", category: "Backend", level: "Expert", experience: "2 yrs" },
      { name: "OOP & MVC", category: "Backend", level: "Advanced", experience: "2 yrs" },
      { name: "Database Design", category: "Backend", level: "Advanced", experience: "2 yrs" },
      { name: "Authentication & Security", category: "Backend", level: "Advanced", experience: "1.5 yrs" },
      { name: "Eloquent ORM", category: "Backend", level: "Advanced", experience: "1.5 yrs" },
      // Tools & Deployment
      { name: "Git & GitHub", category: "Tools & Deployment", level: "Advanced", experience: "2 yrs" },
      { name: "Postman", category: "Tools & Deployment", level: "Advanced", experience: "2 yrs" },
      { name: "Composer", category: "Tools & Deployment", level: "Advanced", experience: "1.5 yrs" },
      { name: "Railway / Cloud", category: "Tools & Deployment", level: "Intermediate", experience: "1 yr" },
      // Frontend Basics
      { name: "JavaScript", category: "Frontend Basics", level: "Intermediate", experience: "2 yrs" },
      { name: "HTML5 & CSS3", category: "Frontend Basics", level: "Advanced", experience: "2 yrs" },
      { name: "Tailwind CSS", category: "Frontend Basics", level: "Intermediate", experience: "1 yr" },
      { name: "Blade Templates", category: "Frontend Basics", level: "Advanced", experience: "1.5 yrs" },
    ],
  },

  projects: [
    {
      id: "project-1",
      title: "Cinema Project - Movie Discovery & Management System",
      category: "Back End",
      description: "A comprehensive web application for managing movie catalogs and user watchlists. Built with Laravel and MySQL, featuring full CRUD operations (add, view, edit, delete movies), secure user authentication, watchlist system, RESTful API endpoints, and a responsive UI.",
      tags: ["Laravel", "PHP", "MySQL", "REST API", "Blade", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
      liveUrl: "https://cinemaproject0.up.railway.app/login",
      githubUrl: "https://github.com/MohammedHaitham007/Cinema_Project.git",
      featured: true,
      features: [
        "User Authentication & Authorization using Laravel",
        "Full CRUD functionality for movie catalog management",
        "Custom Watchlist system for registered users",
        "Relational database design in MySQL with migrations & Eloquent models",
        "Deployed and running live on Railway cloud platform",
      ],
    },
  ],

  experience: [
    {
      role: "Back End Developer",
      company: "Independent Projects & Freelance",
      period: "2023 - Present",
      location: "Cairo, Egypt",
      description: "Developing robust web applications and backend systems using Laravel and PHP. Designing MySQL databases, building secure authentication flows, and deploying web services on Railway.",
      technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Git", "Railway"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Faculty of Computers and Artificial Intelligence",
      period: "2023 - 2027",
      details: "Specialization in Software Engineering and Web Technologies.",
    },
  ],
};
