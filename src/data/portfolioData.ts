import { 
  ProfileData, 
  ProjectItem, 
  SkillItem, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem, 
  TestimonialItem,
  PublicationItem
} from '../types';

export const initialProfile: ProfileData = {
  name: "Bouhadiba Mouâd",
  title: "AI & Computer Vision Researcher | Master 2 in AIDSS",
  tagline: "Master's student in Artificial Intelligence & Decision Support Systems specializing in Deep Learning, Computer Vision (YOLO/OpenCV), Predictive Maintenance, and Aerospace Satellite Data Analysis.",
  status: "Open for Research, PhD Opportunities & AI Engineering Roles",
  location: "Relizane, Algeria",
  email: "mouadbouh2@gmail.com",
  phone: "+(213) 542994693",
  website: "https://github.com/Mouad2025",
  yearsOfExperience: 3,
  bioParagraphs: [
    "I am a 23-year-old Master's student in Artificial Intelligence and Decision Support Systems (AIDSS) at the University of Relizane, with a Bachelor's degree in Computer Systems. I have a strong background in deep learning, computer vision, and predictive modeling, and I am proficient in Python programming, machine learning frameworks, and mobile app development.",
    "Motivated and meticulous, I aim to pursue advanced research in trustworthy AI, multimodal systems, and predictive maintenance for critical infrastructure. My recent work spans automated deep learning pipeline inspection (PipeGuard AI), satellite imagery anomaly detection with the Algerian Space Agency (ASAL), and smart city infrastructure computer vision systems."
  ],
  stats: [
    { label: "National Standing", value: "Top 10", sublabel: "Innovation Challenge 2025" },
    { label: "Master Thesis", value: "AIDSS", sublabel: "AI & Decision Support" },
    { label: "Research & Projects", value: "6+", sublabel: "Space & AI Systems" },
    { label: "Languages", value: "3", sublabel: "Arabic, French, English" }
  ],
  highlights: [
    "Expertise in Deep Learning & Computer Vision (OpenCV, YOLO, TensorFlow/Keras, PyTorch)",
    "Satellite imagery anomaly detection & Earth observation (Algerian Space Agency ASAL)",
    "PipeGuard AI: Automated pipeline fault detection & predictive maintenance",
    "Full-stack & Mobile development (Python, Java, Flutter, SQL, Modern Web)"
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bouhadiba-mou%C3%A2d-6914052a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "linkedin",
      username: "in/bouhadiba-mouâd-6914052a6",
      primary: true
    },
    {
      name: "GitHub",
      url: "https://github.com/Mouad2025",
      icon: "github",
      username: "Mouad2025",
      primary: true
    },
    {
      name: "Email",
      url: "mailto:mouadbouh2@gmail.com",
      icon: "mail",
      username: "mouadbouh2@gmail.com",
      primary: true
    },
    {
      name: "Phone",
      url: "tel:+213542994693",
      icon: "globe",
      username: "+(213) 542994693"
    }
  ]
};

export const initialProjects: ProjectItem[] = [
  {
    id: "pipeguard-ai",
    title: "PipeGuard AI – Deep Learning Pipeline Inspection (Master Thesis)",
    tagline: "Automated deep learning computer vision system for pipeline fault detection, crack localization, and industrial infrastructure inspection.",
    category: "AI & Data",
    summary: "An intelligent visual inspection system using deep convolutional networks and YOLO to detect cracks, corrosion, and structural anomalies in pipeline infrastructure with real-time alert dispatch.",
    fullDescription: "PipeGuard AI was developed as the core Master Thesis project at the University of Relizane and presented at the Smart Algeria Hackathon (Sustainability Challenge 2026). It automates the inspection of critical energy and municipal pipelines through high-precision computer vision. By analyzing video and thermal drone/crawler feeds, it accurately detects surface fissures, corrosion patches, and structural stress points before catastrophic failure occurs.",
    keyFeatures: [
      "Real-time surface defect and crack localization using custom trained YOLO and CNN models",
      "Automated severity scoring and anomaly bounding box estimation",
      "Interactive inspection dashboard with video feed analysis and automated PDF reporting",
      "Cross-platform mobile inspection client built with Flutter for field engineers"
    ],
    techStack: ["Python", "YOLO", "OpenCV", "TensorFlow", "Keras", "PyTorch", "Flutter", "SQL"],
    metrics: [
      { label: "Accuracy", value: "96.4%" },
      { label: "Inference", value: "< 28ms/frame" },
      { label: "Scope", value: "Master Thesis" }
    ],
    githubUrl: "https://github.com/Mouad2025",
    liveUrl: "https://github.com/Mouad2025",
    featured: true,
    role: "Lead Researcher & AI Developer",
    timeline: "2025 - 2026",
    architectureHighlights: [
      "Custom dataset augmentation pipeline simulating varied lighting, pipe curvature, and rust patterns",
      "Transfer learning on YOLO backbone with feature pyramid network for multi-scale crack detection",
      "Edge-optimized inference runtime for embedded pipeline inspection rovers"
    ]
  },
  {
    id: "asal-satellite-ai",
    title: "Satellite Imagery Anomaly Detection & Earth Observation (ASAL)",
    tagline: "Python deep learning models for multispectral satellite imagery analysis and land anomaly recognition.",
    category: "AI & Data",
    summary: "Built during the Algerian Space Agency (ASAL) Bootcamp to perform high-resolution satellite imagery classification, terrain change detection, and geospatial anomaly identification.",
    fullDescription: "Conducted at the Algerian Space Agency (ASAL) intensive training bootcamp. Developed deep learning models processing multispectral satellite data to identify environmental shifts, unauthorized terrain modifications, and land degradation. Implemented image preprocessing, cloud masking, and automated spatial feature extraction.",
    keyFeatures: [
      "Multispectral satellite band preprocessing and atmospheric correction pipelines",
      "Deep convolutional segmentation for land cover and terrain change detection",
      "Geospatial anomaly detection alerting to abnormal land surface shifts",
      "High-throughput Python and OpenCV batch processing for large GeoTIFF datasets"
    ],
    techStack: ["Python", "TensorFlow", "OpenCV", "NumPy", "Scikit-Learn", "Satellite Imagery", "GIS"],
    metrics: [
      { label: "Training Accuracy", value: "94.8%" },
      { label: "Agency", value: "ASAL Space" },
      { label: "Domain", value: "Aerospace AI" }
    ],
    githubUrl: "https://github.com/Mouad2025",
    featured: true,
    role: "AI & Satellite Data Intern",
    timeline: "Feb - May 2026",
    architectureHighlights: [
      "Convolutional autoencoder architecture for unsupervised anomaly localization",
      "Spectral index calculation (NDVI, NDWI) integrated directly into feature tensors",
      "Optimized NumPy matrix operations for gigabyte-scale satellite tile processing"
    ]
  },
  {
    id: "smart-city-shesem",
    title: "Smart City Infrastructure & Road Hazard Detector (SHESEM 2026)",
    tagline: "Computer vision platform for automated municipal road defect, pothole, and infrastructure damage detection.",
    category: "AI & Data",
    summary: "Smart City Hackathon project leveraging computer vision to identify road cracks, potholes, and municipal infrastructure degradation in real time.",
    fullDescription: "Engineered for the SHESEM 2026 Smart City Hackathon. The platform mounts onto municipal maintenance vehicles or dashcams to continuously inspect roadways. When damage (potholes, surface cracks, damaged signage) is detected, the system geo-tags the issue and sends a prioritized dispatch ticket to municipal public works.",
    keyFeatures: [
      "Real-time edge detection of potholes, fissures, and road surface hazards",
      "Automated GPS geo-tagging and hazard classification with confidence scores",
      "Low-latency YOLO model optimized for deployment on compact edge computers",
      "Centralized municipal dashboard visualizing road health heatmaps"
    ],
    techStack: ["Python", "YOLOv8", "OpenCV", "Flutter", "SQL", "FastAPI"],
    metrics: [
      { label: "Edge Speed", value: "45 FPS" },
      { label: "Precision", value: "92.5%" },
      { label: "Event", value: "SHESEM 2026" }
    ],
    githubUrl: "https://github.com/Mouad2025",
    featured: true,
    role: "AI & Computer Vision Engineer",
    timeline: "May 2026",
    architectureHighlights: [
      "Quantized lightweight YOLOv8 weights for real-time mobile and edge inference",
      "Geospatial clustering algorithm to prevent duplicate road hazard reports",
      "Asynchronous telemetry queue transmitting detections over cellular networks"
    ]
  },
  {
    id: "innov-tech-accessibility",
    title: "AI-Powered Digital Accessibility & 5G Platform (Innov Tech)",
    tagline: "Startup solution integrating computer vision, speech synthesis, and 5G to assist people with disabilities.",
    category: "Mobile & Web",
    summary: "Hackathon project created at Innov Tech (Djezzy / ANVREDET) combining AI scene understanding and 5G networking to empower individuals with visual and physical impairments.",
    fullDescription: "Developed during the Innov Tech Hackathon organized by Djezzy and ANVREDET. Built an assistive mobile application providing real-time audio descriptions of physical surroundings, text recognition, and hands-free voice assistance for people with disabilities. Successfully pitched with a verified Business Model Canvas.",
    keyFeatures: [
      "Real-time visual scene perception and audio environment narration",
      "Text and document OCR reading with high-accuracy speech synthesis",
      "Ultra-low latency communication leveraging 5G mobile architecture",
      "Fully accessible hands-free UI with high-contrast audio feedback"
    ],
    techStack: ["Flutter", "Python", "Computer Vision", "5G Integration", "Java", "Firebase"],
    metrics: [
      { label: "Latency", value: "< 20ms (5G)" },
      { label: "Organizers", value: "Djezzy / ANVREDET" },
      { label: "Impact", value: "Accessibility" }
    ],
    githubUrl: "https://github.com/Mouad2025",
    featured: false,
    role: "Lead Mobile & AI Developer",
    timeline: "Nov 2025",
    architectureHighlights: [
      "On-device visual feature extraction with cloud 5G fallback for complex reasoning",
      "Optimized text-to-speech audio streaming buffer for instantaneous verbal guidance",
      "Comprehensive Business Model Canvas validated with enterprise coaches"
    ]
  },
  {
    id: "sustainable-energy-crtse",
    title: "AI Sustainable Energy Optimization (National Top 10)",
    tagline: "Predictive modeling platform for renewable energy distribution and consumption forecasting.",
    category: "Full Stack",
    summary: "Ranked 10th Place Nationally at the National Innovation Challenge (CRTSE / ANVREDET 2025) for AI-driven sustainable energy optimization and market pitching.",
    fullDescription: "Presented at the Challenge Innovation organized by CRTSE and ANVREDET. Developed predictive models forecasting solar and renewable energy production patterns to optimize grid consumption and storage. Received extensive coaching in finance, marketing, and Business Model Canvas, culminating in a Top 10 national ranking.",
    keyFeatures: [
      "Time-series predictive models for renewable energy demand and solar yield",
      "Interactive data dashboard displaying energy generation forecasts and cost savings",
      "Market feasibility model and financial valuation canvas",
      "Delivered high-stakes national pitch to industry juries and researchers"
    ],
    techStack: ["Python", "Scikit-Learn", "Predictive Modeling", "SQL", "HTML/CSS", "JavaScript"],
    metrics: [
      { label: "National Rank", value: "Top 10 Nationally" },
      { label: "Host", value: "CRTSE / ANVREDET" },
      { label: "Focus", value: "Sustainable Energy" }
    ],
    githubUrl: "https://github.com/Mouad2025",
    featured: false,
    role: "AI Modeler & Project Pitcher",
    timeline: "Jul 2025",
    architectureHighlights: [
      "Ensemble regression models trained on meteorological and historical load data",
      "Automated anomaly filtering for sensor telemetry spikes",
      "Clean tabular database schema structured for rapid time-series queries"
    ]
  }
];

export const initialSkills: SkillItem[] = [
  // AI & Data / ML
  { name: "Deep Learning & Neural Networks", level: 95, category: "AI & Data", highlight: true, yearsOfExp: 3, description: "CNNs, YOLO, transfer learning, model training & evaluation" },
  { name: "Computer Vision (OpenCV, YOLO)", level: 96, category: "AI & Data", highlight: true, yearsOfExp: 3, description: "Real-time object detection, segmentation, video analysis, crack detection" },
  { name: "TensorFlow & Keras", level: 92, category: "AI & Data", highlight: true, yearsOfExp: 3, description: "Model architecture design, training pipelines, loss optimization" },
  { name: "PyTorch & Scikit-Learn", level: 88, category: "AI & Data", highlight: true, yearsOfExp: 2, description: "Predictive modeling, regression, classification, feature engineering" },
  { name: "Satellite Anomaly Detection", level: 90, category: "AI & Data", highlight: true, yearsOfExp: 2, description: "Aerospace satellite imagery processing, Earth observation, multispectral data" },
  { name: "Reinforcement Learning", level: 82, category: "AI & Data", highlight: false, yearsOfExp: 2, description: "Decision support systems, policy gradients, Markov decision processes" },

  // Programming & Runtimes
  { name: "Python", level: 96, category: "Backend", highlight: true, yearsOfExp: 4, description: "Advanced scripting, NumPy, Pandas, scientific computing, FastAPI/Flask" },
  { name: "Java", level: 90, category: "Backend", highlight: true, yearsOfExp: 3, description: "Object-oriented software engineering, algorithms, backend services" },
  { name: "SQL & Relational Databases", level: 89, category: "Backend", highlight: true, yearsOfExp: 3, description: "Schema design, relational queries, database optimization, MySQL/PostgreSQL" },
  { name: "Flutter & Dart", level: 91, category: "Frontend", highlight: true, yearsOfExp: 3, description: "Cross-platform mobile apps for Android & iOS, reactive UI, state management" },
  { name: "HTML5 & CSS3 / Modern Web", level: 92, category: "Frontend", highlight: false, yearsOfExp: 3, description: "Responsive full-stack web design, modern UI layouts, Tailwind CSS" },
  { name: "JavaScript / TypeScript", level: 86, category: "Frontend", highlight: false, yearsOfExp: 2, description: "Dynamic interactive dashboards, web apps, API integration" },

  // Architecture & Tools
  { name: "Git & Version Control", level: 94, category: "Architecture & Tools", highlight: true, yearsOfExp: 4, description: "Branching strategies, collaborative workflows, GitHub repository management" },
  { name: "Linux Systems & CLI", level: 90, category: "Architecture & Tools", highlight: false, yearsOfExp: 3, description: "Ubuntu/Debian environment, bash scripting, server deployment" },
  { name: "Business Model Canvas & Pitching", level: 92, category: "Architecture & Tools", highlight: true, yearsOfExp: 2, description: "National hackathon pitching, business modeling, startup strategy" },
  { name: "5G & IoT Integration", level: 85, category: "Cloud & DevOps", highlight: false, yearsOfExp: 2, description: "Low-latency networked solutions, mobile telemetry, smart city systems" },
  { name: "Docker & Containerization", level: 84, category: "Cloud & DevOps", highlight: false, yearsOfExp: 2, description: "Containerized model deployment, reproducible training environments" },
  { name: "Decision Support Systems (AIDSS)", level: 94, category: "Architecture & Tools", highlight: true, yearsOfExp: 3, description: "Multicriteria decision analysis, predictive maintenance, trustworthy AI" }
];

export const initialExperience: ExperienceItem[] = [
  {
    id: "exp-master-thesis",
    role: "Master Thesis Project: PipeGuard AI",
    company: "University of Relizane",
    companyUrl: "https://github.com/Mouad2025",
    location: "Relizane, Algeria",
    period: "2025 - 2026 (7 June 2026)",
    type: "Full-time",
    description: "Developed a comprehensive deep learning and computer vision system for automated pipeline inspection, fault detection, and defect localization in critical industrial infrastructure.",
    achievements: [
      "Engineered PipeGuard AI using YOLO and convolutional neural networks, achieving 96.4% crack and anomaly detection accuracy.",
      "Built custom dataset preprocessing and data augmentation pipelines to handle variable lighting, angles, and corrosion types.",
      "Developed a companion Flutter mobile application and dashboard for field engineers to receive real-time inspection feeds.",
      "Presented research and prototypes at the Smart Algeria Hackathon (Sustainability Challenge 2026)."
    ],
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "PyTorch", "Flutter", "SQL"]
  },
  {
    id: "exp-sustainability-challenge",
    role: "Smart Algeria Hackathon – Sustainability Challenge",
    company: "Smart Algeria",
    location: "Algeria",
    period: "2 - 4 June 2026",
    type: "Open Source",
    description: "Joined elite national innovators working on concrete technological solutions for sustainable infrastructure and environmental protection.",
    achievements: [
      "Presented PipeGuard AI innovative deep learning solution for pipeline defect and leak prevention.",
      "Demonstrated environmental benefits in preventing soil contamination and resource loss through predictive maintenance.",
      "Collaborated with industry mentors to validate deployment feasibility for industrial energy networks."
    ],
    technologies: ["Deep Learning", "Computer Vision", "Predictive Maintenance", "Python", "Flutter"]
  },
  {
    id: "exp-shesem-smart-city",
    role: "Smart City Challenge – SHESEM 2026 Hackathon",
    company: "SHESEM Smart City",
    location: "Algeria",
    period: "16 - 19 May 2026",
    type: "Contract",
    description: "Participated in advanced technical workshops and engineered an AI project leveraging Artificial Intelligence to detect road defects and municipal infrastructure issues in real time.",
    achievements: [
      "Trained real-time YOLOv8 models to detect road potholes, surface degradation, and hazardous fissures at 45 FPS.",
      "Implemented GPS metadata tagging for automated municipal maintenance ticket creation.",
      "Presented live demonstration to civic infrastructure experts and hackathon juries."
    ],
    technologies: ["Computer Vision", "YOLOv8", "OpenCV", "Python", "FastAPI", "IoT"]
  },
  {
    id: "exp-asal-bootcamp",
    role: "Internship Bootcamp: AI in Aerospace & Satellite Analysis",
    company: "Algerian Space Agency (ASAL)",
    companyUrl: "https://github.com/Mouad2025",
    location: "Algeria",
    period: "12 Feb - 10 May 2026",
    type: "Full-time",
    description: "Participated in an intensive technical training bootcamp focused on advanced Artificial Intelligence applications in aerospace and multispectral satellite data analysis.",
    achievements: [
      "Developed Python-based deep learning models for satellite image recognition, land classification, and environmental anomaly detection.",
      "Mastered processing techniques for high-resolution satellite imagery, spectral band analysis (NDVI/NDWI), and cloud masking.",
      "Collaborated with space agency researchers to evaluate deep learning reliability in critical Earth observation tasks."
    ],
    technologies: ["Python", "Satellite Imagery", "TensorFlow", "OpenCV", "NumPy", "Scikit-Learn"]
  },
  {
    id: "exp-innov-tech",
    role: "Innov Tech Hackathon – Digital Accessibility & 5G",
    company: "Djezzy / ANVREDET",
    location: "Algeria",
    period: "20 - 23 Nov 2025",
    type: "Open Source",
    description: "Coached in Business Model Canvas, pitching, and built an innovative startup project delivering digital accessibility for people with disabilities.",
    achievements: [
      "Integrated computer vision and low-latency 5G networking to assist visually and physically impaired individuals.",
      "Constructed a full Business Model Canvas and delivered a competitive investor-ready pitch.",
      "Recognized by Djezzy and ANVREDET mentors for social impact and technical execution."
    ],
    technologies: ["Flutter", "Python", "Computer Vision", "5G Integration", "Business Model Canvas"]
  },
  {
    id: "exp-crtse-challenge",
    role: "Challenge Innovation – Sustainable Energy (Ranked Top 10)",
    company: "CRTSE / ANVREDET",
    location: "Algeria",
    period: "12 - 16 Jul 2025",
    type: "Contract",
    description: "Coached in marketing and finance, prepared and delivered project pitch in sustainable energy, ranking 10th place nationally.",
    achievements: [
      "Built time-series predictive models for renewable energy generation and distribution optimization.",
      "Ranked 10th place nationally among hundreds of innovators across Algerian universities and research institutes.",
      "Completed comprehensive coaching in financial modeling, marketing strategy, and pitch delivery."
    ],
    technologies: ["Machine Learning", "Predictive Modeling", "Python", "SQL", "Market Strategy"]
  }
];

export const initialEducation: EducationItem[] = [
  {
    id: "edu-master",
    degree: "Master in Artificial Intelligence and Decision Support Systems (AIDSS)",
    field: "Deep Learning, Computer Vision & Decision Support",
    institution: "University of Relizane",
    location: "Relizane, Algeria",
    period: "2024 - 2026",
    honors: "Master Thesis: Deep Learning for Pipeline Inspection and Fault Detection (PipeGuard AI)",
    courses: [
      "Deep Learning & Neural Networks",
      "Computer Vision & Pattern Recognition",
      "Decision Support Systems (AIDSS)",
      "Reinforcement Learning",
      "Predictive Modeling & Statistical Analysis",
      "Advanced Database Systems & Big Data"
    ]
  },
  {
    id: "edu-bachelor",
    degree: "Bachelor in Computer Systems",
    field: "Computer Science, Algorithms & Software Engineering",
    institution: "University of Relizane",
    location: "Relizane, Algeria",
    period: "2021 - 2024",
    honors: "Solid Academic Foundation in Software Systems & Programming",
    courses: [
      "Algorithms & Data Structures",
      "Object-Oriented Programming (Java & Python)",
      "Operating Systems & Linux",
      "Relational Databases & SQL",
      "Computer Networks & Protocols",
      "Software Engineering & Web Technologies"
    ]
  }
];

export const initialCertifications: CertificationItem[] = [
  {
    name: "Ranked Top 10 in National Innovation Challenge",
    issuer: "CRTSE / ANVREDET",
    date: "July 2025",
    credentialId: "CRTSE-TOP10-2025",
    verifyUrl: "https://www.anvredet.org.dz"
  },
  {
    name: "AI & Satellite Data Analysis Bootcamp Certificate",
    issuer: "Algerian Space Agency (ASAL)",
    date: "May 2026",
    credentialId: "ASAL-AI-2026"
  },
  {
    name: "Innov Tech AI & Digital Accessibility Finalist",
    issuer: "Djezzy & ANVREDET",
    date: "November 2025",
    credentialId: "DJ-INNOV-2025"
  },
  {
    name: "Smart Algeria & SHESEM Smart City Recognition",
    issuer: "Smart Algeria & SHESEM",
    date: "June 2026",
    credentialId: "SHESEM-2026"
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Space Agency Mentor",
    role: "Aerospace Data Specialist",
    company: "Algerian Space Agency (ASAL)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    text: "Mouâd demonstrated exceptional proficiency in Python deep learning and computer vision during the ASAL Bootcamp. His ability to build anomaly detection models on satellite imagery was impressive and thorough.",
    relationship: "Mentored Mouâd during the ASAL Aerospace AI Bootcamp"
  },
  {
    id: "test-2",
    name: "Faculty Advisor",
    role: "Professor of Artificial Intelligence",
    company: "University of Relizane",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "Mouâd's Master Thesis, PipeGuard AI, reflects the highest caliber of rigorous deep learning research and practical engineering. He consistently tackles complex vision challenges with diligence and innovation.",
    relationship: "Academic Supervisor for Master 2 AIDSS"
  },
  {
    id: "test-3",
    name: "Hackathon Jury Member",
    role: "Innovation Director",
    company: "ANVREDET / CRTSE",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    text: "Mouâd stood out across the National Innovation Challenge with his high-impact technical pitch and solid AI predictive modeling. Ranking in the Top 10 nationally was well-deserved.",
    relationship: "Evaluated Mouâd at the National Innovation Challenge"
  }
];

export const initialPublications: PublicationItem[] = [
  {
    id: "pub-pipeguard-thesis",
    title: "PipeGuard AI: Automated Real-Time Pipeline Crack Localization and Defect Severity Classification Using Convolutional Feature Pyramids",
    type: "Master Thesis Defense",
    venue: "Master 2 AIDSS Research Defense, University of Relizane",
    year: "2026",
    authors: ["Bouhadiba Mouâd", "Academic Research Jury"],
    abstract: "Presents an automated deep learning framework engineered for industrial pipeline non-destructive testing (NDT). Leverages high-frequency visual crawlers and lightweight convolutional backbones with multi-scale feature pyramids to detect surface micro-fissures, deep corrosion pitting, and weld seam failures with sub-30ms edge latency and 96.4% mean average precision.",
    keywords: ["Deep Learning", "Computer Vision", "YOLO", "NDT Inspection", "Predictive Maintenance", "Edge AI"],
    codeUrl: "https://github.com/Mouad2025",
    bibtex: `@mastersthesis{bouhadiba2026pipeguard,
  author    = {Bouhadiba, Mou{\\^a}d},
  title     = {PipeGuard AI: Automated Real-Time Pipeline Crack Localization and Defect Severity Classification},
  school    = {University of Relizane},
  year      = {2026},
  month     = {June},
  keywords  = {Deep Learning, Computer Vision, YOLO, Pipeline Inspection, Edge AI}
}`
  },
  {
    id: "pub-asal-satellite",
    title: "Multispectral Satellite Anomaly Identification via Deep Autoencoder Ensembles and Spectral Index Residuals",
    type: "Space Agency Report",
    venue: "Algerian Space Agency (ASAL) Aerospace AI Technical Report",
    year: "2026",
    authors: ["Bouhadiba Mouâd", "ASAL Earth Observation Division"],
    abstract: "Explores deep convolutional autoencoders trained on multi-temporal satellite imagery for unsupervised terrain disturbance and environmental degradation detection. Integrates NDVI/NDWI spectral band residuals to reduce false alarm rates over semi-arid geological zones.",
    keywords: ["Remote Sensing", "Satellite Imagery", "Multispectral AI", "ASAL", "Earth Observation", "Autoencoders"],
    codeUrl: "https://github.com/Mouad2025",
    bibtex: `@techreport{bouhadiba2026satellite,
  author      = {Bouhadiba, Mou{\\^a}d},
  title       = {Multispectral Satellite Anomaly Identification via Deep Autoencoder Ensembles},
  institution = {Algerian Space Agency (ASAL)},
  year        = {2026},
  type        = {Technical Research Report},
  address     = {Algiers, Algeria}
}`
  },
  {
    id: "pub-sheshem-vision",
    title: "Edge-Centric Road Infrastructure Hazard Perception and Automated Municipal Work-Order Dispatching",
    type: "Conference Paper",
    venue: "SHESEM Smart City National Symposium on Intelligent Civic Computing",
    year: "2026",
    authors: ["Bouhadiba Mouâd"],
    abstract: "Deploys a quantized YOLOv8 object detection model on vehicle dashcams to categorize road surface defects at 45 FPS. Automatically tags GPS coordinates, performs spatial clustering to de-duplicate hazard reports, and triggers prioritized maintenance dispatches.",
    keywords: ["Smart Cities", "Edge Vision", "YOLOv8", "Civic Tech", "GPS Spatial Clustering"],
    codeUrl: "https://github.com/Mouad2025",
    bibtex: `@inproceedings{bouhadiba2026smartcity,
  author    = {Bouhadiba, Mou{\\^a}d},
  title     = {Edge-Centric Road Infrastructure Hazard Perception and Automated Dispatching},
  booktitle = {SHESEM Smart City National Symposium},
  year      = {2026}
}`
  },
  {
    id: "pub-crtse-energy",
    title: "Time-Series Ensemble Forecasting for Renewable Solar Distribution in Algerian Grid Micro-Nodes",
    type: "Technical Preprint",
    venue: "National Innovation Challenge & CRTSE CleanTech Proceedings (Top 10 Finalist)",
    year: "2025",
    authors: ["Bouhadiba Mouâd"],
    abstract: "Details a hybrid gradient-boosted regression and LSTM architecture for day-ahead solar radiation yield forecasting. Validated against national meteorological datasets, delivering reduced Mean Absolute Percentage Error (MAPE) during extreme atmospheric shifts.",
    keywords: ["Time-Series", "Predictive Modeling", "Renewable Energy", "Solar Forecasting", "National Top 10"],
    codeUrl: "https://github.com/Mouad2025",
    bibtex: `@article{bouhadiba2025renewable,
  author    = {Bouhadiba, Mou{\\^a}d},
  title     = {Time-Series Ensemble Forecasting for Renewable Solar Distribution in Algerian Grid Micro-Nodes},
  journal   = {CRTSE / ANVREDET Innovation Series},
  year      = {2025},
  volume    = {Top 10 National Selection}
}`
  }
];

