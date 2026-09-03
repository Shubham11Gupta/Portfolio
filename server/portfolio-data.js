export const portfolioData = {
  seo: {
    title: "Shubham Gupta | Software Engineer",
    description:
      "Portfolio of Shubham Gupta, a software engineer focused on AI-assisted operations, data reliability, and full-stack product engineering."
  },
  hero: {
    name: "Shubham Gupta",
    title: "Software Engineer shaping dependable products for AI, data, and platform teams.",
    eyebrow: "Full-stack engineering for systems that need to stay calm under pressure",
    location: "Bengaluru, India",
    availability:
      "Focused on platform engineering, internal tools, data-intensive systems, and software roles where reliability matters.",
    summary:
      "I build software that reduces operational drag. My recent work spans AI-driven Kubernetes support, large-scale data validation, Airflow pipeline optimization, and React-based tooling that helps teams see the right signal faster.",
    ctas: [
      {
        label: "Download resume",
        href: "/shubham-gupta-resume.pdf",
        variant: "primary",
        download: true
      },
      {
        label: "Start a conversation",
        href: "#contact",
        variant: "secondary"
      },
      {
        label: "View GitHub",
        href: "https://github.com/Shubham11Gupta",
        variant: "ghost",
        external: true
      }
    ],
    socials: [
      {
        label: "Email",
        value: "shubham11gupta10@gmail.com",
        href: "mailto:shubham11gupta10@gmail.com"
      },
      {
        label: "Phone",
        value: "+91-9972547170",
        href: "tel:+919972547170"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/shubhamgupta-ibm",
        href: "https://www.linkedin.com/in/shubhamgupta-ibm"
      },
      {
        label: "GitHub",
        value: "github.com/ShubhamGupta",
        href: "https://github.com/Shubham11Gupta"
      }
    ]
  },
  spotlights: [
    {
      title: "Operational AI",
      description:
        "Built an AI-driven support system with Ollama and Granite to automate Kubernetes cluster management and reduce manual intervention."
    },
    {
      title: "Data reliability",
      description:
        "Designed a multi-source, multi-table validation framework and a trend analysis tool that made validated data more actionable."
    },
    {
      title: "Product-minded tooling",
      description:
        "Shipped internal dashboards and architecture tools with React, Flask, Docker, and IBM Cloud to make complex workflows easier to use."
    }
  ],
  stats: [
    {
      value: "50%",
      label: "Airflow runtime improvement",
      note: "Reduced pipeline execution from 15 hours to 7.5 hours through optimization, debugging, and failure resolution."
    },
    {
      value: "6",
      label: "Core languages in active use",
      note: "Python, Shell scripting, C++, JavaScript, SQL, and Java."
    },
    {
      value: "5",
      label: "High-impact systems highlighted here",
      note: "From Jira analytics and AI ops tooling to architecture automation and quantum simulation projects."
    },
    {
      value: "IBM",
      label: "Enterprise environment experience",
      note: "Working across data pipelines, cloud delivery, internal products, and developer productivity workflows."
    }
  ],
  principles: [
    {
      title: "Automate repeatable pain",
      description:
        "If a team is fixing the same class of failure again and again, I look for the workflow, validation, or retry logic that should exist instead."
    },
    {
      title: "Make systems explain themselves",
      description:
        "Dashboards, trend analysis, and structured reporting are valuable when they help people understand what changed and what to do next."
    },
    {
      title: "Build for real operating conditions",
      description:
        "I care about deployment, observability, and failure handling as much as feature delivery, especially for data and platform-heavy software."
    }
  ],
  experience: [
    {
      company: "IBM",
      role: "Software Developer",
      period: "Aug 2023 - Present",
      location: "Bengaluru, India",
      summary:
        "Building internal products and platform capabilities across analytics, AI-assisted operations, and large-scale data processing.",
      highlights: [
        "Built a Jira analytics dashboard with Python, Flask, React, and Carbon Design System, backed by Jira API data and Docker-based delivery.",
        "Developed an AI-driven support system using Python, Ollama, and Granite to automate Kubernetes cluster management and recover common job failures.",
        "Architected a multi-source, multi-table validation framework and a configuration-driven trend analysis tool using NumPy and Pandas.",
        "Optimized Apache Airflow data delivery pipelines, improving execution efficiency by 50 percent and cutting runtime from 15 hours to 7.5 hours.",
        "Maintained Airflow-based data validation workflows with SQL-driven YAML transformations for automated reporting and processing.",
        "Used IBM Bob AI for code analysis, automated review, and optimization across Python, JavaScript, and Shell scripting projects."
      ],
      stack: [
        "Python",
        "ReactJS",
        "Flask",
        "Apache Airflow",
        "Docker",
        "Kubernetes",
        "SQL",
        "Ollama",
        "Granite",
        "Pandas",
        "NumPy"
      ]
    },
    {
      company: "IBM",
      role: "Intern",
      period: "Jan 2023 - Jul 2023",
      location: "Bengaluru, India",
      summary:
        "Worked on full-stack automation tooling that turned structured inputs into deployable architecture visuals.",
      highlights: [
        "Developed a full-stack architecture diagram generator with React and Flask that auto-created system diagrams from Excel inputs.",
        "Deployed the tool on IBM Cloud, giving teams a faster way to translate planning data into usable system documentation."
      ],
      stack: [
        "ReactJS",
        "Flask",
        "IBM Cloud",
        "Excel integration"
      ]
    }
  ],
  projects: [
    {
      name: "Quantum Circuit Simulator",
      period: "Apr 2025 - Sep 2025",
      description:
        "A web-based simulator for experimenting with quantum circuits in a more accessible browser workflow.",
      highlights: [
        "Built with Qiskit AER, FastAPI, Python, and ReactJS.",
        "Containerized the application with Docker to support smoother deployment and scaling."
      ],
      stack: [
        "Qiskit AER",
        "FastAPI",
        "Python",
        "ReactJS",
        "Docker"
      ]
    },
    {
      name: "RasqBerry Pi",
      period: "Jan 2025 - Aug 2025",
      description:
        "A project centered on quantum simulation workflows and safer installation automation for edge-style environments.",
      highlights: [
        "Integrated quantum simulations into the broader workflow.",
        "Implemented installation checks with Python and Shell scripting to avoid redundancy and improve stability."
      ],
      stack: [
        "Python",
        "Shell scripting",
        "Quantum simulation"
      ]
    },
    {
      name: "Jira Analytics Dashboard",
      period: "IBM",
      description:
        "An internal analytics experience that surfaced Jira data in a cleaner, more actionable interface for teams.",
      highlights: [
        "Aggregated Jira API data into a React and Flask dashboard.",
        "Delivered through a Docker-based CI/CD pipeline using IBM design standards."
      ],
      stack: [
        "Python",
        "Flask",
        "ReactJS",
        "Carbon Design System",
        "Docker"
      ]
    }
  ],
  skills: [
    {
      title: "Languages",
      items: [
        "Python",
        "Shell scripting",
        "C++",
        "JavaScript",
        "SQL",
        "Java"
      ]
    },
    {
      title: "Frameworks and runtime tools",
      items: [
        "ReactJS",
        "Node.js",
        "Flask",
        "FastAPI",
        "Apache Airflow"
      ]
    },
    {
      title: "AI and data tooling",
      items: [
        "IBM Bob",
        "Ollama",
        "Granite",
        "Qiskit",
        "REST APIs",
        "Pandas",
        "NumPy"
      ]
    },
    {
      title: "Cloud and delivery",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "CyberDuck",
        "DBeaver",
        "Kubernetes",
        "Linux",
        "IBM Cloud"
      ]
    }
  ],
  education: [
    {
      school: "Vellore Institute of Technology, Bhopal",
      credential: "B.Tech in Computer Science and Engineering",
      period: "2019 - 2023"
    }
  ],
  certifications: [
    "IBM DevOps Fundamentals",
    "IBM Agile Training",
    "Industrial IoT Markets and Security"
  ],
  contact: {
    heading: "Build the next thing with me",
    blurb:
      "If you are hiring for software engineering, platform tooling, backend systems, or full-stack product work, I would love to hear what you are building.",
    email: "shubham11gupta10@gmail.com",
    phone: "+91-9972547170"
  }
};
