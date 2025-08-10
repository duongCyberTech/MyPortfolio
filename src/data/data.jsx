const Pdata = [
    {   
        id: 'hsc',
        tag: 'education',
        label: 'High School',
        name: "Le Quy Don High School for the Gifted",
        location: "Ho Chi Minh City, Vietnam",
        specialization: "Physics",
        years: "2019 - 2022"
    },
    {
        id: 'uni',
        tag: 'education',
        label: 'University',
        name: "Ho Chi Minh City University of Technology",
        location: "Ho Chi Minh City, Vietnam",
        specialization: "Computer Science",
        years: "2022 - 2026"
    },
    {
        id: 'cert-1',
        tag: 'certifications',
        label: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
        years: "2025",
        filepath: '/file/oracle.pdf'
    },
    {
        id: 'cert-2',
        tag: 'certifications',
        label: 'Bosch Code Race Challenge 2025',
        years: '2025',
        filepath: '/file/bosch.pdf'
    }
]

const cards = [
  {
    "id": 1,
    "category": "React Js",
    "title": "Build Dynamic and Scalable Frontends with React.js",
    "image": "https://tse4.mm.bing.net/th/id/OIP.uMJzotTOa4doHWpJYdheVAHaD4?w=1200&h=630&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Leverage the power of component-based architecture to create fast, interactive user interfaces. React.js streamlines frontend development for single-page applications, ensuring high performance and seamless user experiences.",
    "size": "medium",
    "color": "from-blue-600/80 to-purple-700/80",
    "ptype": "FR"
  },
  {
    "id": 2,
    "category": "Node Js",
    "title": "Develop Scalable Network Applications with Node.js",
    "image": "https://tse4.mm.bing.net/th/id/OIP.TOA6sXgXRM9GQLfZBWYYrQHaEK?w=750&h=422&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Node.js is a powerful JavaScript runtime for building fast, event-driven backend services. Ideal for microservices and real-time systems, it enables developers to use JavaScript across the entire stack, enhancing productivity and consistency.",
    "size": "large",
    "color": "from-emerald-600/80 to-teal-700/80",
    "ptype": "FR"
  },
  {
    "id": 3,
    "category": "Nest Js",
    "title": "Enterprise-Ready Backend Solutions with NestJS",
    "image": "https://tse4.mm.bing.net/th/id/OIP.5tmRM9NP-DXSQyIOkcGWzAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "NestJS is a progressive Node.js framework built with TypeScript, designed for building scalable, maintainable, and testable server-side applications. Its modular architecture and built-in support for microservices make it a top choice for enterprise backends.",
    "size": "medium",
    "color": "from-cyan-600/80 to-blue-700/80",
    "ptype": "FR"
  },
  {
    "id": 4,
    "category": "FastAPI",
    "title": "High-Performance APIs with FastAPI and Python",
    "image": "https://tse3.mm.bing.net/th/id/OIP.QlcZr9iVilJPJcpVs9nsogHaEK?pid=ImgDet&w=203&h=114&c=7&o=7&rm=3",
    "description": "FastAPI enables rapid development of RESTful APIs with automatic validation, type checking, and interactive documentation. Built on modern Python standards, it offers exceptional performance and developer experience for data-driven and ML-powered apps.",
    "size": "medium",
    "color": "from-orange-600/80 to-red-700/80",
    "ptype": "FR"
  },
  {
    "id": 5,
    "category": "Flask",
    "title": "Lightweight Web Applications with Flask",
    "image": "https://tse4.mm.bing.net/th/id/OIP.qbO0aztY13rGVlsjKwYK2gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Flask is a minimal Python web framework ideal for small to medium-scale projects. With its flexible and unopinionated design, developers can build web services, APIs, and microservices quickly while maintaining full control over structure and components.",
    "size": "medium",
    "color": "from-orange-600/80 to-red-700/80",
    "ptype": "FR"
  },
    {
    "id": 6,
    "category": "C++",
    "title": "High-Performance Systems with C++",
    "image": "https://img.php.cn/upload/article/000/969/633/175384866995455.png",
    "description": "C++ is a powerful language used for system-level programming, game engines, and real-time simulations. It offers fine-grained control over memory and performance-critical applications.",
    "size": "large",
    "color": "from-gray-700/80 to-blue-800/80",
    "ptype": "PL"
  },
  {
    "id": 7,
    "category": "C#",
    "title": "Robust Enterprise Apps with C#",
    "image": "https://tse1.mm.bing.net/th/id/OIP.r0pxNse41AgFX_o0yRna1wHaGq?w=801&h=720&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "C# is a modern, object-oriented programming language developed by Microsoft, widely used for building Windows applications, games with Unity, and enterprise-level web services using .NET.",
    "size": "medium",
    "color": "from-purple-700/80 to-indigo-800/80",
    "ptype": "PL"
  },
  {
    "id": 8,
    "category": "Python",
    "title": "Versatile and Readable Python",
    "image": "https://tse3.mm.bing.net/th/id/OIP.E7KlM_v55oo8xJMRXo2cRgHaLH?w=1000&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Python is a beginner-friendly language known for its readability and wide applicability in data science, web development, automation, and artificial intelligence.",
    "size": "medium",
    "color": "from-yellow-500/80 to-amber-700/80",
    "ptype": "PL"
  },
  {
    "id": 9,
    "category": "JavaScript",
    "title": "Dynamic Web with JavaScript",
    "image": "https://i.pinimg.com/originals/b1/0f/9d/b10f9dc671c96c2a245e0e50ca2a323d.png",
    "description": "JavaScript is the foundation of modern web development, enabling dynamic and interactive user experiences. It powers frontend frameworks like React, Vue, and backend with Node.js.",
    "size": "large",
    "color": "from-yellow-400/80 to-orange-600/80",
    "ptype": "PL"
  },
  {
    "id": 10,
    "category": "TypeScript",
    "title": "Scalable Apps with TypeScript",
    "image": "https://tse2.mm.bing.net/th/id/OIP.zch2ujurTJixegbBOmloNQHaHd?rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "TypeScript is a statically typed superset of JavaScript that improves code quality, maintainability, and tooling support, especially for large-scale application development.",
    "size": "large",
    "color": "from-blue-500/80 to-cyan-600/80",
    "ptype": "PL"
  },
  {
    "id": 11,
    "category": "Java",
    "title": "Cross-Platform Power with Java",
    "image": "https://tse3.mm.bing.net/th/id/OIP.jdLrZU0mPF6_xDdvNxa3lwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Java is a class-based, object-oriented language widely used for building secure, scalable, and cross-platform applications, from Android apps to large enterprise systems.",
    "size": "medium",
    "color": "from-red-600/80 to-orange-800/80",
    "ptype": "PL"
  },
  {
    "id": 12,
    "category": "Microsoft SQL Server",
    "title": "Scalable Relational DB with SQL Server",
    "image": "https://media.licdn.com/dms/image/C5112AQHaVRTUh_HiIQ/article-cover_image-shrink_600_2000/0/1520127276943?e=2147483647&v=beta&t=jHzNHUXlHXsE-NzwfPbq7inNoIpk6AoXOmOr9ONYK-g",
    "description": "Microsoft SQL Server is a robust relational database management system ideal for enterprise-grade applications with strong integration into the Windows ecosystem and .NET stack.",
    "size": "large",
    "color": "from-indigo-700/80 to-blue-900/80",
    "ptype": "DB"
  },
  {
    "id": 15,
    "category": "MongoDB",
    "title": "Flexible NoSQL with MongoDB",
    "image": "https://www.bleepstatic.com/content/hl-images/2023/12/16/mongodb-header-o.jpg",
    "description": "MongoDB is a document-based NoSQL database optimized for scalability and flexibility. It uses JSON-like documents and is ideal for modern, fast-changing applications.",
    "size": "medium",
    "color": "from-green-600/80 to-emerald-700/80",
    "ptype": "DB"
  },
  {
    "id": 16,
    "category": "Redis",
    "title": "In-Memory Speed with Redis",
    "image": "https://th.bing.com/th/id/R.9addac5487fb3720c807763b2bcaaa82?rik=Zdf3spRpgQzxUg&pid=ImgRaw&r=0",
    "description": "Redis is a high-performance, in-memory key-value database known for caching, real-time analytics, and pub/sub systems. It’s fast, lightweight, and easy to integrate.",
    "size": "small",
    "color": "from-red-600/80 to-orange-700/80",
    "ptype": "DB"
  },
  {
    "id": 13,
    "category": "MySQL",
    "title": "Popular Open Source RDBMS",
    "image": "https://adriancs.com/wp-content/uploads/2021/09/mysql.jpg",
    "description": "MySQL is a widely-used open-source relational database that's fast, reliable, and ideal for both small and large applications. It's often used in LAMP stacks and web hosting environments.",
    "size": "large",
    "color": "from-sky-600/80 to-cyan-700/80",
    "ptype": "DB"
  },
  {
    "id": 14,
    "category": "PostgreSQL",
    "title": "Advanced Features with PostgreSQL",
    "image": "https://media.licdn.com/dms/image/v2/D4D12AQG8L2fbN4KdCw/article-cover_image-shrink_720_1280/B4DZhgSuSqHsAI-/0/1753962190103?e=2147483647&v=beta&t=Q40INEi5PZ2YACwT4ertoMAkISsknlRrvPkr7Lk4Ka0",
    "description": "PostgreSQL is an advanced, open-source RDBMS known for its extensibility, compliance with SQL standards, and features like JSON support, indexing, and full-text search.",
    "size": "large",
    "color": "from-blue-700/80 to-indigo-800/80",
    "ptype": "DB"
  },
  {
    "id": 17,
    "category": "Firebase",
    "title": "Realtime Backend with Firebase",
    "image": "https://bizflyportal.mediacdn.vn/bizflyportal/1383/2428/2021/04/22/16/25/fir16190619267496.jpeg",
    "description": "Firebase is a cloud-hosted NoSQL database solution by Google, offering real-time sync, authentication, storage, and analytics – perfect for mobile and web apps.",
    "size": "medium",
    "color": "from-yellow-500/80 to-amber-600/80",
    "ptype": "DB"
  } ,
   {
    "id": 17,
    "category": "Jupyter Notebook",
    "title": "Interactive Python with Jupyter Notebook",
    "image": "https://tse3.mm.bing.net/th/id/OIP.0wxT3QuFjm-LUIAgQ5J5awHaFH?w=768&h=531&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Jupyter Notebook provides an interactive environment to write and execute Python code in cells. It is ideal for data science, experimentation, and visualization.",
    "size": "medium",
    "color": "from-yellow-500/80 to-orange-600/80",
    "ptype": "OT"
  },
  {
    "id": 18,
    "category": "Jira",
    "title": "Agile Project Management with Jira",
    "image": "https://tse2.mm.bing.net/th/id/OIP.DdF_HJWc75rT7VN18HeVgAHaDN?rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Jira is a powerful tool used for project management, issue tracking, and agile development, offering boards, sprints, and detailed reporting features.",
    "size": "medium",
    "color": "from-indigo-600/80 to-purple-700/80",
    "ptype": "OT"
  },
  {
    "id": 19,
    "category": "Postman",
    "title": "API Testing with Postman",
    "image": "https://tse4.mm.bing.net/th/id/OIP.5frxMmwe5_20zdrfPL9tFwHaCV?w=2000&h=630&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Postman is an essential tool for testing, documenting, and automating APIs. It supports sending requests, scripting tests, and monitoring responses.",
    "size": "medium",
    "color": "from-orange-500/80 to-amber-600/80",
    "ptype": "OT"
  },
  {
    "id": 20,
    "category": "Swagger",
    "title": "API Documentation with Swagger",
    "image": "https://tse4.mm.bing.net/th/id/OIP.ciaQxj45EMqCGnz-Q5IpiQHaDz?rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Swagger provides tools for documenting RESTful APIs using OpenAPI specifications. It allows interactive exploration of endpoints and schemas.",
    "size": "medium",
    "color": "from-lime-500/80 to-green-600/80",
    "ptype": "OT"
  },
  {
    "id": 21,
    "category": "Upstash",
    "title": "Serverless Redis with Upstash",
    "image": "https://robots.net/wp-content/uploads/2024/02/upstashs-serverless-data-platform-achieves-1m-arr-in-just-two-years-1707415895.jpg",
    "description": "Upstash is a serverless database service optimized for Redis and Kafka with usage-based pricing and instant deployment.",
    "size": "medium",
    "color": "from-rose-500/80 to-pink-600/80",
    "ptype": "OT"
  },
  {
    "id": 22,
    "category": "Git",
    "title": "Version Control with Git",
    "image": "https://th.bing.com/th/id/R.3f27d1f4db2685df2c6197239b277ea6?rik=CI0D4M703Jnclw&pid=ImgRaw&r=0",
    "description": "Git is a distributed version control system widely used for code collaboration, enabling branching, merging, and tracking changes across teams.",
    "size": "medium",
    "color": "from-gray-700/80 to-black/80",
    "ptype": "OT"
  },
  {
    "id": 23,
    "category": "Power BI",
    "title": "Business Intelligence with Power BI",
    "image": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/152864604/original/2d4c8d4c57110779c24d5c9b7274993d99b7abd1/build-or-enhance-your-power-bi-dashboard.png",
    "description": "Power BI is a data visualization tool from Microsoft that allows users to transform data into interactive reports and dashboards for business insights.",
    "size": "medium",
    "color": "from-yellow-600/80 to-orange-700/80",
    "ptype": "OT"
  },
  {
    "id": 25,
    "category": "Railway",
    "title": "Instant Cloud Deployment with Railway",
    "image": "https://i.ytimg.com/vi/3u0jfliEifw/hqdefault.jpg",
    "description": "Railway is a cloud deployment platform designed for developers. It allows you to deploy databases, servers, and applications with minimal configuration.",
    "size": "medium",
    "color": "from-purple-600/80 to-indigo-700/80",
    "ptype": "OT"
  },
  {
    "id": 26,
    "category": "Docker",
    "title": "Containerization with Docker",
    "image": "https://tse4.mm.bing.net/th/id/OIP.KQVdgXp2Ez84bfmL72mNzQHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Docker is a platform that enables developers to package applications into containers—standardized units of software that run consistently across environments.",
    "size": "medium",
    "color": "from-blue-500/80 to-cyan-600/80",
    "ptype": "OT"
  } 
]

const Projects = [
  {
    "id": 1,
    "title": "Portfolio Website",
    "description": "A personal portfolio website showcasing my skills, projects, and experiences.",
    "image": "https://tse3.mm.bing.net/th/id/OIP.0wxT3QuFjm-LUIAgQ5J5awHaFH?w=768&h=531&rs=1&pid=ImgDetMain&o=7&rm=3",
    "link": "https://myportfolio.com"
  }
]

const pglang = ["C++", "C#", "Python", "JavaScript", "TypeScript", "Java"]
const pfr = ["React Js", "Node Js", "Nest Js", "FastAPI", "Flask"]

export { Pdata, cards, Projects, pglang, pfr };