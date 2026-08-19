export const profile = {
  name: 'Shubham Gupta',
  title: 'Software Engineer building intelligent systems.',
  location: 'Bengaluru, India',
  email: 'shubham11gupta10@gmail.com',
  resume: '/resume.pdf',
  social: {
    github: '#', // TODO: replace with real GitHub URL
    linkedin: '#', // TODO: replace with real LinkedIn URL
  },
  status: 'Open to interesting engineering opportunities'
}

export const about = {
  heading: 'Building systems, not just features.',
  narrative:
    "I'm a Software Developer at IBM with experience building AI-assisted automation, data pipelines, backend services, dashboards, and full-stack developer tools. I enjoy working at the intersection of software engineering, intelligent systems, and infrastructure.",
  capabilities: [
    {
      title: 'AI & Intelligent Systems',
      items: [
        'AI-assisted automation',
        'LLM integration',
        'intelligent troubleshooting',
        'developer tooling'
      ]
    },
    {
      title: 'Backend & APIs',
      items: ['Python', 'Flask', 'FastAPI', 'REST APIs', 'service architecture']
    },
    {
      title: 'Data & Automation',
      items: ['Apache Airflow', 'SQL', 'Pandas', 'NumPy', 'validation frameworks']
    },
    {
      title: 'Cloud & Infrastructure',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'IBM Cloud']
    }
  ]
}

export const experience = [
  {
    company: 'IBM',
    role: 'Software Developer',
    range: 'Aug 2023 — Present',
    location: 'Bengaluru, India',
    projects: [
      {
        title: 'Jira Analytics Platform',
        stack: ['Python', 'Flask', 'React', 'Carbon Design System', 'Jira API', 'Docker', 'CI/CD'],
        description:
          'Built a Jira analytics dashboard that aggregates Jira data through APIs and presents engineering insights through a React-based interface.',
        highlight: 'API-driven analytics · Full-stack development · CI/CD'
      },
      {
        title: 'AI Kubernetes Support System',
        stack: ['Python', 'Ollama', 'Granite', 'Kubernetes'],
        description:
          'Built an AI-driven support system capable of assisting Kubernetes cluster management by intelligently retrying failed processes, resolving basic issues, and handling job failures.',
        highlight: 'AI automation · LLMs · Kubernetes · Developer productivity'
      },
      {
        title: 'Data Validation & Trend Analysis Framework',
        stack: ['Python', 'SQL', 'Pandas', 'NumPy', 'YAML'],
        description:
          'Architected a configurable multi-source, multi-table data validation framework and built trend-analysis capabilities to derive actionable insights from validated datasets.',
        highlight: 'Data engineering · Validation · Automation · Analytics'
      },
      {
        title: 'Airflow Data Delivery Optimization',
        stack: ['Apache Airflow', 'Python', 'SQL', 'YAML'],
        description:
          'Optimized and maintained Airflow-based data delivery pipelines, reducing execution time from approximately 15 hours to 7.5 hours.',
        highlight: '50% runtime reduction',
        metric: {
          before: '15h',
          after: '7.5h',
          reduction: '50%'
        }
      }
    ]
  },
  {
    company: 'IBM',
    role: 'Intern',
    range: 'Jan 2023 — Jul 2023',
    location: 'Bengaluru, India',
    projects: [
      {
        title: 'Architecture Diagram Generator',
        stack: ['React', 'Flask', 'Excel', 'IBM Cloud'],
        description:
          'Built a full-stack tool that automatically generates system architecture diagrams from Excel inputs and deployed the application on IBM Cloud.'
      }
    ]
  }
]

export const projects = [
  {
    name: 'Quantum Circuit Simulator',
    date: 'Apr 2025 — Sep 2025',
    description:
      'A web-based quantum circuit simulator combining Qiskit Aer with a FastAPI/Python backend and React frontend.',
    stack: ['Qiskit Aer', 'Python', 'FastAPI', 'React', 'Docker'],
    github: '#', // TODO
    demo: '#', // TODO
    visual: ['|0> ── H ──●── M', '|0> ───────X── M']
  },
  {
    name: 'Raspberry Pi / RasqBerry Pi',
    date: 'Jan 2025 — Aug 2025',
    description:
      'Experimental Raspberry Pi project combining quantum simulations with Python and Shell-based installation checks to improve reliability and avoid redundant setup operations.',
    stack: ['Raspberry Pi', 'Python', 'Shell', 'Quantum Computing'],
    github: '#',
    demo: '#'
  }
]

export const skills = {
  languages: ['Python', 'Shell Scripting', 'C++', 'JavaScript', 'SQL', 'Java'],
  frameworks: ['ReactJS', 'Flask', 'FastAPI', 'Node.js', 'Apache Airflow'],
  ai: ['Ollama', 'Granite', 'Qiskit', 'NumPy', 'Pandas'],
  infra: ['Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub', 'CI/CD', 'IBM Cloud'],
  tools: ['Postman', 'DBeaver', 'CyberDuck', 'REST APIs']
}

export const certifications = ['IBM DevOps Fundamentals', 'IBM Agile Training', 'Industrial IoT Markets and Security']

export const education = {
  school: 'Vellore Institute of Technology, Bhopal',
  degree: 'B.Tech — Computer Science and Engineering',
  range: '2019 — 2023'
}

export const currentlyExploring = [
  'AI Agents',
  'LLM-powered automation',
  'Kubernetes automation',
  'Data engineering',
  'Developer tooling',
  'Quantum computing',
  'Full-stack systems'
]

export const metrics = {
  airflowReduction: '50%',
  timeBefore: '15h',
  timeAfter: '7.5h',
  projects: 4,
  focus: 'AI + Cloud + Data'
}
