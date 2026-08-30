import { Language } from '../types';

export interface TranslationStrings {
  // Navigation & General
  nav: {
    about: string;
    aiLab: string;
    projects: string;
    skills: string;
    research: string;
    resume: string;
    contact: string;
    editProfile: string;
    resumePdf: string;
    availableForWork: string;
    menu: string;
    getInTouch: string;
  };
  // Theme & Language
  theme: {
    toggleTheme: string;
    switchToDark: string;
    switchToLight: string;
    darkMode: string;
    lightMode: string;
  };
  language: {
    chooseLanguage: string;
    english: string;
    french: string;
    arabic: string;
    en: string;
    fr: string;
    ar: string;
  };
  // Hero
  hero: {
    statusBadge: string;
    greeting: string;
    viewProjects: string;
    liveVisionLab: string;
    pdfResume: string;
    saveVCard: string;
    connect: string;
    copyCli: string;
    cliCopied: string;
    terminalTabs: {
      stack: string;
      pipeline: string;
      status: string;
    };
    diagnosticOk: string;
    specs: {
      degree: string;
      specialization: string;
    };
  };
  // About
  about: {
    badge: string;
    title: string;
    subtitle: string;
    researchFocus: string;
    coreMethods: string;
    pillarsTitle: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
    };
    basedIn: string;
    openRemote: string;
    reachOut: string;
    tabs: {
      experience: string;
      education: string;
      certifications: string;
      testimonials: string;
    };
    keyImpact: string;
    stack: string;
    honors: string;
    specializedModules: string;
    issued: string;
    verified: string;
  };
  // Vision Lab
  visionLab: {
    badge: string;
    title: string;
    subtitle: string;
    modelSelector: string;
    models: {
      pipeguard: string;
      satellite: string;
      smartcity: string;
    };
    controls: {
      play: string;
      pause: string;
      reset: string;
      threshold: string;
      heatmap: string;
      spectralBand: string;
      rgb: string;
      ndvi: string;
      thermal: string;
    };
    liveTelemetry: string;
    detectionsFound: string;
    confidence: string;
    severity: string;
    depthMeasure: string;
    recommendedAction: string;
    noDefects: string;
    latency: string;
    fps: string;
    architecture: string;
    runtime: string;
  };
  // Projects
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    clear: string;
    categories: {
      all: string;
      aiVision: string;
      satelliteAi: string;
      edgeNdt: string;
      fullStack: string;
    };
    noProjects: string;
    resetFilters: string;
    deepDive: string;
    sourceCode: string;
    liveDemo: string;
    modal: {
      problemScope: string;
      keyFeatures: string;
      techStack: string;
      architecture: string;
      faultTolerance: string;
      metrics: string;
      impact: string;
      close: string;
      githubRepo: string;
    };
  };
  // Skills
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    coreHighlights: string;
    categories: {
      all: string;
      deepLearning: string;
      aiFrameworks: string;
      dataSignals: string;
      softwareDeployment: string;
    };
    coreMastery: string;
    proficiency: string;
    yearsExp: string;
    extendedStack: string;
  };
  // Publications
  publications: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    types: {
      all: string;
      thesis: string;
      spaceAgency: string;
      conference: string;
      preprint: string;
    };
    abstract: string;
    expand: string;
    collapse: string;
    topics: string;
    copyBibtex: string;
    bibtexCopied: string;
    sourceCode: string;
    inquirePdf: string;
    collabNotice: string;
    collabSub: string;
  };
  // Resume Section
  resume: {
    badge: string;
    title: string;
    subtitle: string;
    features: {
      ats: string;
      degree: string;
      credentials: string;
      export: string;
    };
    downloadPdf: string;
    generatingPdf: string;
    interactivePreview: string;
    clickToExpand: string;
    page: string;
    openDoc: string;
  };
  // Contact
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    profilesCoordinates: string;
    primaryEmail: string;
    activeResponse: string;
    copy: string;
    copied: string;
    verifiedProfiles: string;
    locatedIn: string;
    inquiriesWelcome: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      category: string;
      categoryOptions: string[];
      message: string;
      messagePlaceholder: string;
      chars: string;
      sendMessage: string;
      sending: string;
      orMailClient: string;
      successTitle: string;
      successMessage: string;
      sendAnother: string;
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
        messageLength: string;
      };
    };
  };
  // Footer
  footer: {
    availableBadge: string;
    navigationTitle: string;
    profilesTitle: string;
    backToTop: string;
    allRightsReserved: string;
    builtWith: string;
    visitorCountLabel: string;
    pageViewsLabel: string;
  };
  // Modals
  resumeModal: {
    title: string;
    print: string;
    downloadPdf: string;
    copyText: string;
    textCopied: string;
    close: string;
  };
  editModal: {
    title: string;
    subtitle: string;
    fullName: string;
    headline: string;
    status: string;
    location: string;
    email: string;
    bio: string;
    saveChanges: string;
    resetDefaults: string;
    close: string;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  en: {
    nav: {
      about: 'About',
      aiLab: 'AI Lab',
      projects: 'Projects',
      skills: 'Skills',
      research: 'Research',
      resume: 'Resume',
      contact: 'Contact',
      editProfile: 'Edit Profile',
      resumePdf: 'Resume PDF',
      availableForWork: 'Available for work & research',
      menu: 'Menu',
      getInTouch: 'Get In Touch'
    },
    theme: {
      toggleTheme: 'Toggle theme mode',
      switchToDark: 'Switch to Dark mode',
      switchToLight: 'Switch to Light mode',
      darkMode: 'Dark',
      lightMode: 'Light'
    },
    language: {
      chooseLanguage: 'Choose language',
      english: 'English',
      french: 'French',
      arabic: 'Arabic',
      en: 'English',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      statusBadge: 'Open for Research & Senior AI Roles',
      greeting: "Hi, I'm",
      viewProjects: 'View Projects',
      liveVisionLab: 'Live AI Vision Lab',
      pdfResume: 'PDF Resume',
      saveVCard: 'Save Contact (vCard)',
      connect: 'Connect:',
      copyCli: 'npx contact-engineer',
      cliCopied: 'Copied!',
      terminalTabs: {
        stack: 'AI Stack',
        pipeline: 'Pipeline',
        status: 'Status'
      },
      diagnosticOk: 'Active & Ready',
      specs: {
        degree: 'Master 2 AIDSS • Deep Learning',
        specialization: 'Computer Vision & Satellite AI'
      }
    },
    about: {
      badge: 'Biography & Background',
      title: 'Deep Learning Research, Real-World Vision Systems',
      subtitle: 'A comprehensive look into my academic journey, research projects, and specialized AI competencies.',
      researchFocus: 'About My Research & Focus',
      coreMethods: 'Core Specializations & Methods',
      pillarsTitle: 'Research & Engineering Pillars',
      pillars: {
        p1Title: 'Data-Centric AI Modeling:',
        p1Desc: 'Robust synthetic augmentations, noisy signal filtering, and multi-sensor calibration.',
        p2Title: 'Real-Time Edge Inference:',
        p2Desc: 'Optimizing YOLOv8 and TensorRT runtimes for low-latency inspection in critical environments.',
        p3Title: 'Reproducible Science:',
        p3Desc: 'Structured experiment tracking with MLflow, modular code architecture, and clear evaluation metrics.'
      },
      basedIn: 'Based in Relizane, Algeria',
      openRemote: 'Open for remote AI engineering & research collaborations',
      reachOut: 'Reach Out',
      tabs: {
        experience: 'Research & Experience',
        education: 'Education',
        certifications: 'Certifications',
        testimonials: 'Endorsements'
      },
      keyImpact: 'Key Impact & Research Outcomes:',
      stack: 'Stack:',
      honors: 'Honors:',
      specializedModules: 'Specialized Modules:',
      issued: 'Issued:',
      verified: 'Verified'
    },
    visionLab: {
      badge: 'Interactive AI Vision & Diagnostic Lab',
      title: 'Real-Time Computer Vision Inference Engine',
      subtitle: 'Live visual simulation of custom-trained Deep Learning models: industrial pipeline defect inspection, satellite anomaly detection, and smart city hazards.',
      modelSelector: 'Select AI Model Scenario:',
      models: {
        pipeguard: 'PipeGuard AI (Pipeline NDT)',
        satellite: 'ASAL Satellite Anomaly (Earth Obs)',
        smartcity: 'SHESEM Smart City (Road Defects)'
      },
      controls: {
        play: 'Run Inference Feed',
        pause: 'Pause Feed',
        reset: 'Reset Stream',
        threshold: 'Confidence Threshold',
        heatmap: 'Heatmap Overlay',
        spectralBand: 'Spectral Band',
        rgb: 'RGB Visual',
        ndvi: 'NDVI Index',
        thermal: 'Thermal / Infrared'
      },
      liveTelemetry: 'Live Model Telemetry',
      detectionsFound: 'Detections Found',
      confidence: 'Confidence',
      severity: 'Severity',
      depthMeasure: 'Metric / Anomaly Index',
      recommendedAction: 'Action Required',
      noDefects: 'No anomalies detected above current threshold',
      latency: 'Latency',
      fps: 'Throughput',
      architecture: 'Architecture',
      runtime: 'Runtime'
    },
    projects: {
      badge: 'Research & Engineering Projects',
      title: 'Featured AI & Vision Showcase',
      subtitle: 'Industrial Computer Vision, Satellite Multi-Spectral AI, and Deep Learning defect detection pipelines.',
      searchPlaceholder: 'Search by tech, model, domain...',
      clear: 'Clear',
      categories: {
        all: 'All',
        aiVision: 'AI & Vision',
        satelliteAi: 'Satellite AI',
        edgeNdt: 'Edge & NDT',
        fullStack: 'Full Stack & Web'
      },
      noProjects: 'No projects match the selected criteria',
      resetFilters: 'Reset Filters',
      deepDive: 'Architecture Deep Dive',
      sourceCode: 'Source Code',
      liveDemo: 'Live Demonstration',
      modal: {
        problemScope: 'Problem & System Scope',
        keyFeatures: 'Key Technical Features',
        techStack: 'Technology Stack',
        architecture: 'Architectural Highlights & Pipeline Engineering',
        faultTolerance: 'Fault-Tolerance & Model Validation',
        metrics: 'Metrics & Benchmark Results',
        impact: 'Research & Industry Impact',
        close: 'Close',
        githubRepo: 'GitHub Repo'
      }
    },
    skills: {
      badge: 'Core Competencies & Stack',
      title: 'AI Research & Engineering Ecosystem',
      subtitle: 'Computer vision pipelines, deep neural architectures, signal processing algorithms, and edge deployments.',
      searchPlaceholder: 'Filter skill...',
      coreHighlights: 'Core Highlights',
      categories: {
        all: 'All',
        deepLearning: 'Deep Learning & CV',
        aiFrameworks: 'AI Frameworks',
        dataSignals: 'Data & Signals',
        softwareDeployment: 'Software & Deployment'
      },
      coreMastery: 'Core Mastery',
      proficiency: 'Proficiency',
      yearsExp: 'Research & Project Exp',
      extendedStack: 'Extended AI Tooling & Data Stack'
    },
    publications: {
      badge: 'Academic Works & Technical Reports',
      title: 'Publications & Working Research',
      subtitle: 'Master Thesis defenses, aerospace agency technical reports, and national innovation preprints in trustworthy AI and computer vision.',
      searchPlaceholder: 'Search papers, keywords, topics...',
      types: {
        all: 'All',
        thesis: 'Master Thesis Defense',
        spaceAgency: 'Space Agency Report',
        conference: 'Conference Paper',
        preprint: 'Technical Preprint'
      },
      abstract: 'Abstract & Key Findings',
      expand: 'Expand',
      collapse: 'Collapse',
      topics: 'Topics:',
      copyBibtex: 'Copy BibTeX',
      bibtexCopied: 'BibTeX Copied!',
      sourceCode: 'Source Code',
      inquirePdf: 'Inquire for Pre-Print PDF',
      collabNotice: 'Open for Collaborative Research & PhD Programs',
      collabSub: 'Interested in citing these works, proposing an academic paper collaboration, or discussing a PhD research position in Computer Vision & Decision Support?'
    },
    resume: {
      badge: 'Curriculum Vitae',
      title: 'Downloadable PDF Resume & Academic Dossier',
      subtitle: 'Clean, ATS-compliant format engineered for recruiters, research institutions, and engineering managers with verified performance metrics and deep learning competencies.',
      features: {
        ats: 'ATS-Optimized Formatting',
        degree: 'Master 2 AIDSS & Research Focus',
        credentials: 'Verified Deep Learning Credentials',
        export: 'Instant Vector PDF Export'
      },
      downloadPdf: 'Download PDF Resume',
      generatingPdf: 'Generating PDF...',
      interactivePreview: 'Interactive Full Preview',
      clickToExpand: 'Click to Expand',
      page: 'Page 1 of 2',
      openDoc: 'Open Interactive Document →'
    },
    contact: {
      badge: 'Direct Communication',
      title: "Let's Collaborate on Next-Gen AI",
      subtitle: 'Interested in discussing research, computer vision models, predictive maintenance, or career opportunities? Send a message directly.',
      profilesCoordinates: 'Profiles & Coordinates',
      primaryEmail: 'Primary Email',
      activeResponse: 'Active Response',
      copy: 'Copy',
      copied: 'Copied',
      verifiedProfiles: 'Verified Profiles',
      locatedIn: 'Located in',
      inquiriesWelcome: 'Research & Industry inquiries welcome',
      form: {
        name: 'Your Name *',
        namePlaceholder: 'Dr. Sarah Jenkins',
        email: 'Email Address *',
        emailPlaceholder: 'sarah@institution.edu',
        category: 'Inquiry Category',
        categoryOptions: [
          'Research Collaboration & Lab Inquiry',
          'AI / Computer Vision Engineering Opportunity',
          'Deep Learning & Predictive Maintenance Project',
          'Academic Mentorship / Thesis Discussion',
          'General Inquiry / Tech Discussion'
        ],
        message: 'Message / Research Context *',
        messagePlaceholder: 'Share details regarding your team, research project, computer vision requirements, or position...',
        chars: 'chars',
        sendMessage: 'Send Message',
        sending: 'Sending Message...',
        orMailClient: 'Or send via email client',
        successTitle: 'Message Sent Successfully!',
        successMessage: 'Thank you for reaching out. Your inquiry has been routed to the primary inbox. I will review your details and respond promptly.',
        sendAnother: 'Send Another Message',
        errors: {
          nameRequired: 'Please provide your full name',
          emailRequired: 'Please provide your email address',
          emailInvalid: 'Please provide a valid email address',
          messageRequired: 'Please include a message or inquiry details',
          messageLength: 'Message must be at least 10 characters'
        }
      }
    },
    footer: {
      availableBadge: 'Available for AI & CV Opportunities',
      navigationTitle: 'Navigation',
      profilesTitle: 'Profiles',
      backToTop: 'Back to top',
      allRightsReserved: 'All rights reserved.',
      builtWith: 'Built with React 19 & Tailwind CSS',
      visitorCountLabel: 'Collaborators & Visitors',
      pageViewsLabel: 'Total Page Views'
    },
    resumeModal: {
      title: 'Curriculum Vitae — ATS Document Preview',
      print: 'Print Document',
      downloadPdf: 'Download Vector PDF',
      copyText: 'Copy Plaintext',
      textCopied: 'Text Copied!',
      close: 'Close'
    },
    editModal: {
      title: 'Customize Portfolio Details',
      subtitle: 'Update your display profile, bio, coordinates, and research focal points live.',
      fullName: 'Full Name',
      headline: 'Headline / Academic Title',
      status: 'Current Availability Status',
      location: 'Location',
      email: 'Contact Email',
      bio: 'Biography Paragraphs',
      saveChanges: 'Save Changes',
      resetDefaults: 'Reset to Defaults',
      close: 'Cancel'
    }
  },

  fr: {
    nav: {
      about: 'À propos',
      aiLab: 'Labo IA',
      projects: 'Projets',
      skills: 'Compétences',
      research: 'Recherche',
      resume: 'CV',
      contact: 'Contact',
      editProfile: 'Modifier le profil',
      resumePdf: 'CV PDF',
      availableForWork: 'Disponible pour recherche & projets IA',
      menu: 'Menu',
      getInTouch: 'Me Contacter'
    },
    theme: {
      toggleTheme: 'Basculer le thème',
      switchToDark: 'Passer en mode Sombre',
      switchToLight: 'Passer en mode Clair',
      darkMode: 'Sombre',
      lightMode: 'Clair'
    },
    language: {
      chooseLanguage: 'Choisir la langue',
      english: 'Anglais',
      french: 'Français',
      arabic: 'Arabe',
      en: 'English',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      statusBadge: 'Ouvert à la recherche, doctorat et postes ingénieur IA',
      greeting: 'Bonjour, je suis',
      viewProjects: 'Voir les projets',
      liveVisionLab: 'Labo Vision IA Live',
      pdfResume: 'CV PDF',
      saveVCard: 'Enregistrer le contact (vCard)',
      connect: 'Réseaux :',
      copyCli: 'npx contact-engineer',
      cliCopied: 'Copié !',
      terminalTabs: {
        stack: 'Stack IA',
        pipeline: 'Pipeline',
        status: 'Statut'
      },
      diagnosticOk: 'Actif & Opérationnel',
      specs: {
        degree: 'Master 2 AIDSS • Deep Learning',
        specialization: 'Vision par ordinateur & IA Satellite'
      }
    },
    about: {
      badge: 'Biographie & Parcours',
      title: 'Recherche en Deep Learning & Systèmes de Vision Industrielle',
      subtitle: "Un aperçu approfondi de mon parcours académique, de mes travaux de recherche et de mes compétences spécialisées en IA.",
      researchFocus: 'À propos de mes recherches',
      coreMethods: 'Spécialisations & Méthodologies Clés',
      pillarsTitle: 'Piliers de Recherche & Ingénierie',
      pillars: {
        p1Title: 'Modélisation IA centrée sur les données :',
        p1Desc: 'Augmentations synthétiques robustes, filtrage de signaux bruités et calibration multi-capteurs.',
        p2Title: 'Inférence Edge en Temps Réel :',
        p2Desc: 'Optimisation de YOLOv8 et des runtimes TensorRT pour une inspection à faible latence dans des environnements critiques.',
        p3Title: 'Science Reproductible :',
        p3Desc: 'Suivi rigoureux des expériences avec MLflow, architecture modulaire et métriques d’évaluation transparentes.'
      },
      basedIn: 'Basé à Relizane, Algérie',
      openRemote: 'Disponible pour des collaborations et projets IA à distance',
      reachOut: 'Prendre contact',
      tabs: {
        experience: 'Recherche & Expérience',
        education: 'Formation',
        certifications: 'Certifications',
        testimonials: 'Recommandations'
      },
      keyImpact: 'Impact & Résultats de Recherche Clés :',
      stack: 'Technologies :',
      honors: 'Distinction :',
      specializedModules: 'Modules Spécialisés :',
      issued: 'Délivré :',
      verified: 'Vérifié'
    },
    visionLab: {
      badge: 'Laboratoire Interactif de Vision IA & Diagnostic',
      title: "Moteur d'Inférence de Vision par Ordinateur en Temps Réel",
      subtitle: "Simulation visuelle en direct de modèles de Deep Learning : inspection de défauts de pipelines industriels, détection d'anomalies satellitaires et dangers urbains intelligents.",
      modelSelector: 'Sélectionner le Scénario IA :',
      models: {
        pipeguard: 'PipeGuard AI (CND Pipelines)',
        satellite: 'ASAL Anomalies Satellite (Obs. Terre)',
        smartcity: 'SHESEM Smart City (Défauts Routiers)'
      },
      controls: {
        play: 'Lancer le flux d’inférence',
        pause: 'Mettre en pause',
        reset: 'Réinitialiser le flux',
        threshold: 'Seuil de Confiance',
        heatmap: 'Superposition Heatmap',
        spectralBand: 'Bande Spectrale',
        rgb: 'Visuel RGB',
        ndvi: 'Indice NDVI',
        thermal: 'Thermique / Infrarouge'
      },
      liveTelemetry: 'Télémétrie du Modèle en Direct',
      detectionsFound: 'Détections Trouvées',
      confidence: 'Confiance',
      severity: 'Sévérité',
      depthMeasure: 'Métrique / Indice d’Anomalie',
      recommendedAction: 'Action Requise',
      noDefects: 'Aucune anomalie détectée au-dessus du seuil actuel',
      latency: 'Latence',
      fps: 'Débit',
      architecture: 'Architecture',
      runtime: 'Environnement'
    },
    projects: {
      badge: 'Projets de Recherche & Ingénierie',
      title: 'Galerie de Projets IA & Vision',
      subtitle: 'Vision par ordinateur industrielle, IA satellitaire multispectrale et pipelines de détection de défauts par Deep Learning.',
      searchPlaceholder: 'Rechercher par techno, modèle, domaine...',
      clear: 'Effacer',
      categories: {
        all: 'Tous',
        aiVision: 'IA & Vision',
        satelliteAi: 'IA Satellite',
        edgeNdt: 'Edge & CND',
        fullStack: 'Full Stack & Web'
      },
      noProjects: 'Aucun projet ne correspond aux critères sélectionnés',
      resetFilters: 'Réinitialiser les filtres',
      deepDive: 'Analyse d’Architecture Détaillée',
      sourceCode: 'Code Source',
      liveDemo: 'Démonstration Live',
      modal: {
        problemScope: 'Problématique & Portée du Système',
        keyFeatures: 'Fonctionnalités Techniques Clés',
        techStack: 'Stack Technologique',
        architecture: 'Points Forts Architecturaux & Pipeline',
        faultTolerance: 'Tolérance aux Pannes & Validation',
        metrics: 'Métriques & Résultats de Benchmark',
        impact: 'Impact Recherche & Industrie',
        close: 'Fermer',
        githubRepo: 'Dépôt GitHub'
      }
    },
    skills: {
      badge: 'Compétences Fondamentales & Stack',
      title: 'Écosystème de Recherche & Ingénierie IA',
      subtitle: 'Pipelines de vision par ordinateur, architectures neuronales profondes, algorithmes de traitement du signal et déploiements edge.',
      searchPlaceholder: 'Filtrer les compétences...',
      coreHighlights: 'Atouts Majeurs',
      categories: {
        all: 'Toutes',
        deepLearning: 'Deep Learning & Vision',
        aiFrameworks: 'Frameworks IA',
        dataSignals: 'Données & Signaux',
        softwareDeployment: 'Logiciel & Déploiement'
      },
      coreMastery: 'Maîtrise Clé',
      proficiency: 'Niveau de Maîtrise',
      yearsExp: 'Expérience Recherche & Projet',
      extendedStack: 'Outils IA & Stack de Données Élargie'
    },
    publications: {
      badge: 'Travaux Académiques & Rapports Techniques',
      title: 'Publications & Recherches en Cours',
      subtitle: 'Soutenances de Master, rapports techniques spatiaux et prépublications nationales en IA de confiance et vision par ordinateur.',
      searchPlaceholder: 'Rechercher des articles, mots-clés, thèmes...',
      types: {
        all: 'Tous',
        thesis: 'Soutenance de Thèse de Master',
        spaceAgency: 'Rapport Agence Spatiale',
        conference: 'Article de Conférence',
        preprint: 'Prépublication Technique'
      },
      abstract: 'Résumé & Découvertes Clés',
      expand: 'Développer',
      collapse: 'Réduire',
      topics: 'Thématiques :',
      copyBibtex: 'Copier BibTeX',
      bibtexCopied: 'BibTeX Copié !',
      sourceCode: 'Code Source',
      inquirePdf: 'Demander le PDF de prépublication',
      collabNotice: 'Ouvert aux Collaborations de Recherche & Thèses de Doctorat (PhD)',
      collabSub: 'Intéressé pour citer ces travaux, proposer une collaboration scientifique ou discuter d’un poste de recherche doctoral en Vision par Ordinateur ?'
    },
    resume: {
      badge: 'Curriculum Vitae',
      title: 'CV PDF Téléchargeable & Dossier Académique',
      subtitle: 'Format clair et optimisé pour les ATS, conçu pour les recruteurs, centres de recherche et responsables ingénierie, avec métriques de performance et compétences deep learning.',
      features: {
        ats: 'Formatage Optimisé pour ATS',
        degree: 'Master 2 AIDSS & Focus Recherche',
        credentials: 'Certifications Deep Learning Vérifiées',
        export: 'Export PDF Vectoriel Instantané'
      },
      downloadPdf: 'Télécharger le CV PDF',
      generatingPdf: 'Génération du PDF...',
      interactivePreview: 'Aperçu Interactif Complet',
      clickToExpand: 'Cliquer pour Agrandir',
      page: 'Page 1 sur 2',
      openDoc: 'Ouvrir le document interactif →'
    },
    contact: {
      badge: 'Communication Directe',
      title: 'Collaborons sur l’IA de Nouvelle Génération',
      subtitle: 'Vous souhaitez discuter de recherche, de modèles de vision par ordinateur, de maintenance prédictive ou d’opportunités de carrière ? Envoyez un message directement.',
      profilesCoordinates: 'Profils & Coordonnées',
      primaryEmail: 'Email Principal',
      activeResponse: 'Réponse Rapide',
      copy: 'Copier',
      copied: 'Copié',
      verifiedProfiles: 'Profils Vérifiés',
      locatedIn: 'Localisé à',
      inquiriesWelcome: 'Demandes de recherche et professionnelles bienvenues',
      form: {
        name: 'Votre Nom *',
        namePlaceholder: 'Dr. Sarah Jenkins',
        email: 'Adresse Email *',
        emailPlaceholder: 'sarah@institution.edu',
        category: 'Catégorie de la Demande',
        categoryOptions: [
          'Collaboration de Recherche & Laboratoire',
          'Opportunité Ingénieur IA / Vision par Ordinateur',
          'Projet Deep Learning & Maintenance Prédictive',
          'Encadrement Académique / Discussion Thèse',
          'Demande Générale / Échange Technique'
        ],
        message: 'Message / Contexte du Projet *',
        messagePlaceholder: 'Partagez les détails concernant votre équipe, projet de recherche, besoins en vision ou opportunité...',
        chars: 'caractères',
        sendMessage: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        orMailClient: 'Ou envoyer via votre client mail',
        successTitle: 'Message Envoyé avec Succès !',
        successMessage: 'Merci pour votre message. Votre demande a été transmise directement à ma boîte principale. Je l’examinerai et vous répondrai rapidement.',
        sendAnother: 'Envoyer un Autre Message',
        errors: {
          nameRequired: 'Veuillez indiquer votre nom complet',
          emailRequired: 'Veuillez indiquer votre adresse email',
          emailInvalid: 'Veuillez indiquer une adresse email valide',
          messageRequired: 'Veuillez rédiger un message',
          messageLength: 'Le message doit contenir au moins 10 caractères'
        }
      }
    },
    footer: {
      availableBadge: 'Disponible pour Opportunités IA & Vision',
      navigationTitle: 'Navigation',
      profilesTitle: 'Profils',
      backToTop: 'Haut de page',
      allRightsReserved: 'Tous droits réservés.',
      builtWith: 'Conçu avec React 19 & Tailwind CSS',
      visitorCountLabel: 'Collaborateurs & Visiteurs',
      pageViewsLabel: 'Vues de page'
    },
    resumeModal: {
      title: 'Curriculum Vitae — Aperçu Document ATS',
      print: 'Imprimer le Document',
      downloadPdf: 'Télécharger le PDF Vectoriel',
      copyText: 'Copier en Texte Brut',
      textCopied: 'Texte Copié !',
      close: 'Fermer'
    },
    editModal: {
      title: 'Personnaliser les Détails du Portfolio',
      subtitle: 'Mettez à jour votre profil affiché, votre bio, vos coordonnées et vos axes de recherche en direct.',
      fullName: 'Nom Complet',
      headline: 'Titre Académique / Rôle',
      status: 'Disponibilité Actuelle',
      location: 'Localisation',
      email: 'Email de Contact',
      bio: 'Paragraphes de Biographie',
      saveChanges: 'Enregistrer les Modifications',
      resetDefaults: 'Réinitialiser aux Valeurs par Défaut',
      close: 'Annuler'
    }
  },

  ar: {
    nav: {
      about: 'عني',
      aiLab: 'مختبر الذكاء الاصطناعي',
      projects: 'المشاريع',
      skills: 'المهارات',
      research: 'الأبحاث',
      resume: 'السيرة الذاتية',
      contact: 'تواصل معي',
      editProfile: 'تعديل الملف',
      resumePdf: 'تحميل السيرة الذاتية PDF',
      availableForWork: 'متاح للبحث العلمي والمشاريع الهندسية',
      menu: 'القائمة',
      getInTouch: 'ابدأ التواصل'
    },
    theme: {
      toggleTheme: 'تبديل المظهر',
      switchToDark: 'التبديل إلى الوضع الداكن',
      switchToLight: 'التبديل إلى الوضع المضيء',
      darkMode: 'داكن',
      lightMode: 'فاتح'
    },
    language: {
      chooseLanguage: 'اختر اللغة',
      english: 'الإنجليزية',
      french: 'الفرنسية',
      arabic: 'العربية',
      en: 'English',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      statusBadge: 'متاح للبحث العلمي، برامج الدكتوراه، ومناصب هندسة الذكاء الاصطناعي',
      greeting: 'مرحبًا، أنا',
      viewProjects: 'استعراض المشاريع',
      liveVisionLab: 'مختبر الرؤية الحاسوبية الحي',
      pdfResume: 'السيرة الذاتية PDF',
      saveVCard: 'حفظ بطاقة الاتصال (vCard)',
      connect: 'التواصل المهني:',
      copyCli: 'npx contact-engineer',
      cliCopied: 'تم النسخ!',
      terminalTabs: {
        stack: 'التقنيات',
        pipeline: 'خط المعالجة',
        status: 'الحالة'
      },
      diagnosticOk: 'نشط ويعمل بكفاءة',
      specs: {
        degree: 'ماستر 2 AIDSS • التعلم العميق',
        specialization: 'الرؤية الحاسوبية والذكاء الاصطناعي للأقمار الصناعية'
      }
    },
    about: {
      badge: 'السيرة والمسار الأكاديمي',
      title: 'أبحاث التعلم العميق وأنظمة الرؤية الحاسوبية الصناعية',
      subtitle: 'نظرة شاملة على مسيرتي الأكاديمية، ومشاريعي البحثية، وخبراتي المتخصصة في الذكاء الاصطناعي.',
      researchFocus: 'عن أبحاثي ومجالات تركيزي',
      coreMethods: 'التخصصات والمنهجيات الأساسية',
      pillarsTitle: 'ركائز البحث والهندسة المتقدمة',
      pillars: {
        p1Title: 'نمذجة الذكاء الاصطناعي المرتكزة على البيانات:',
        p1Desc: 'توليد البيانات الاصطناعية، وتصفية الإشارات المشوشة، ومعايرة أجهزة الاستشعار المتعددة.',
        p2Title: 'الاستدلال الآني على الحافة (Edge AI):',
        p2Desc: 'تحسين نماذج YOLOv8 ومحركات TensorRT للفحص السريع بزمن استجابة منخفض في البيئات الحرجة.',
        p3Title: 'البحث العلمي القابل لإعادة الإنتاج:',
        p3Desc: 'تتبع التجارب بدقة عبر MLflow، وهندسة برمجية معيارية، ومقاييس تقييم واضحة.'
      },
      basedIn: 'مقيم في غليزان، الجزائر',
      openRemote: 'متاح للتعاون البحثي وهندسة الذكاء الاصطناعي عن بعد',
      reachOut: 'تواصل الآن',
      tabs: {
        experience: 'الأبحاث والخبرة',
        education: 'التعليم الأكاديمي',
        certifications: 'الشهادات المعتمدة',
        testimonials: 'التزكيات والآراء'
      },
      keyImpact: 'أبرز الإنجازات والنتائج البحثية:',
      stack: 'التقنيات المستخدمة:',
      honors: 'المرتبة والتقدير:',
      specializedModules: 'الوحدات المتخصصة:',
      issued: 'تاريخ الإصدار:',
      verified: 'تم التحقق'
    },
    visionLab: {
      badge: 'مختبر الرؤية الحاسوبية والتشخيص التفاعلي',
      title: 'محرك الاستدلال الآني للرؤية الحاسوبية',
      subtitle: 'محاكاة بصرية حية لنماذج التعلم العميق المدربة مسبقًا: فحص عيوب أنابيب النفط والغاز الصناعية، واكتشاف شذوذ صور الأقمار الصناعية، ومخاطر الطرق الحضرية الذكية.',
      modelSelector: 'اختر سيناريو نموذج الذكاء الاصطناعي:',
      models: {
        pipeguard: 'PipeGuard AI (فحص الأنابيب NDT)',
        satellite: 'ASAL لتحليل صور الأقمار الصناعية',
        smartcity: 'SHESEM للمدن الذكية وفحص الطرق'
      },
      controls: {
        play: 'تشغيل البث والاستدلال',
        pause: 'إيقاف البث مؤقتًا',
        reset: 'إعادة ضبط البث',
        threshold: 'عتبة الثقة (Confidence)',
        heatmap: 'طبقة الخريطة الحرارية',
        spectralBand: 'النطاق الطيفي',
        rgb: 'ألوان RGB الطبيعية',
        ndvi: 'مؤشر الغطاء النباتي NDVI',
        thermal: 'الحراري / الأشعة تحت الحمراء'
      },
      liveTelemetry: 'قياسات النموذج الحية',
      detectionsFound: 'العيوب المكتشفة',
      confidence: 'نسبة الثقة',
      severity: 'درجة الخطورة',
      depthMeasure: 'المقياس / مؤشر الشذوذ',
      recommendedAction: 'الإجراء المطلوب',
      noDefects: 'لم يتم رصد أي عيوب تتجاوز عتبة الثقة الحالية',
      latency: 'زمن الاستجابة',
      fps: 'معدل الإطارات',
      architecture: 'معمارية النموذج',
      runtime: 'بيئة التشغيل'
    },
    projects: {
      badge: 'مشاريع البحث والهندسة',
      title: 'معرض مشاريع الذكاء الاصطناعي والرؤية الحاسوبية',
      subtitle: 'الرؤية الحاسوبية الصناعية، وتحليل الأقمار الصناعية متعدد الأطياف، وخطوط كشف العيوب بالتعلم العميق.',
      searchPlaceholder: 'ابحث بالتقنية، النموذج، أو المجال...',
      clear: 'مسح',
      categories: {
        all: 'الكل',
        aiVision: 'الذكاء الاصطناعي والرؤية',
        satelliteAi: 'ذكاء الأقمار الصناعية',
        edgeNdt: 'الفحص الصناعي NDT',
        fullStack: 'الأنظمة والويب المتكامل'
      },
      noProjects: 'لا توجد مشاريع تطابق معايير البحث الحالية',
      resetFilters: 'إعادة ضبط المرشحات',
      deepDive: 'تفاصيل المعمارية البرمجية',
      sourceCode: 'الكود المصدري',
      liveDemo: 'عرض تجريبي حي',
      modal: {
        problemScope: 'المشكلة ونطاق النظام',
        keyFeatures: 'الميزات التقنية الرئيسية',
        techStack: 'حزمة التقنيات المستخدمة',
        architecture: 'هندسة المعمارية وخط المعالجة العصبي',
        faultTolerance: 'تحمل الأخطاء والتحقق من النماذج',
        metrics: 'المقاييس ونتائج الاختبار المعياري',
        impact: 'الأثر البحثي والصناعي',
        close: 'إغلاق',
        githubRepo: 'مستودع GitHub'
      }
    },
    skills: {
      badge: 'الكفاءات والمهارات التقنية',
      title: 'منظومة البحث وهندسة الذكاء الاصطناعي',
      subtitle: 'معالجة الرؤية الحاسوبية، والشبكات العصبية العميقة، وخوارزميات معالجة الإشارات، ونشر النماذج على الحافة.',
      searchPlaceholder: 'تصفية المهارات...',
      coreHighlights: 'المهارات الأساسية فقط',
      categories: {
        all: 'الكل',
        deepLearning: 'التعلم العميق والرؤية',
        aiFrameworks: 'أطر الذكاء الاصطناعي',
        dataSignals: 'البيانات والإشارات',
        softwareDeployment: 'البرمجيات والنشر'
      },
      coreMastery: 'إتقان رئيسي',
      proficiency: 'مستوى الإتقان',
      yearsExp: 'سنوات الخبرة في المشاريع والبحث',
      extendedStack: 'مكتبات وأدوات الذكاء الاصطناعي الممتدة'
    },
    publications: {
      badge: 'الأعمال الأكاديمية والتقارير التقنية',
      title: 'المنشورات والأبحاث الجارية',
      subtitle: 'مناقشات رسائل الماستر، والتقارير التقنية الفضائية، وأوراق العمل في الذكاء الاصطناعي الموثوق والرؤية الحاسوبية.',
      searchPlaceholder: 'ابحث في الأوراق البحثية، الكلمات المفتاحية...',
      types: {
        all: 'الكل',
        thesis: 'مناقشة رسالة الماستر',
        spaceAgency: 'تقرير وكالة الفضاء',
        conference: 'ورقة مؤتمر علمي',
        preprint: 'مسودة تقنية أولية'
      },
      abstract: 'الملخص وأبرز النتائج',
      expand: 'عرض المزيد',
      collapse: 'طي',
      topics: 'المواضيع:',
      copyBibtex: 'نسخ توثيق BibTeX',
      bibtexCopied: 'تم نسخ BibTeX!',
      sourceCode: 'الكود المصدري',
      inquirePdf: 'طلب نسخة البحث PDF',
      collabNotice: 'متاح للتعاون البحثي وبرامج الدكتوراه (PhD)',
      collabSub: 'هل ترغب في الاستشهاد بهذه الأبحاث، أو اقتراح تعاون بحثي مشترك، أو مناقشة منحة دكتوراه في الرؤية الحاسوبية وأنظمة دعم القرار؟'
    },
    resume: {
      badge: 'السيرة الذاتية الأكاديمية والمهنية',
      title: 'تحميل السيرة الذاتية PDF والملف الأكاديمي',
      subtitle: 'تنسيق متوافق مع أنظمة تتبع المتقدمين (ATS)، مصمم لمسؤولي التوظيف، والمراكز البحثية، ومدراء الهندسة مع مقاييس دقيقة وكفاءات مثبتة في الذكاء الاصطناعي.',
      features: {
        ats: 'تنسيق متوافق مع أنظمة ATS',
        degree: 'ماستر 2 AIDSS وتركيز بحثي عالي',
        credentials: 'شهادات معتمدة في التعلم العميق',
        export: 'تصدير فوري لملف PDF عالي الجودة'
      },
      downloadPdf: 'تحميل السيرة الذاتية PDF',
      generatingPdf: 'جاري إنشاء ملف PDF...',
      interactivePreview: 'معاينة تفاعلية كاملة',
      clickToExpand: 'انقر للتوسيع والمعاينة',
      page: 'صفحة 1 من 2',
      openDoc: 'فتح المستند التفاعلي ←'
    },
    contact: {
      badge: 'التواصل المباشر',
      title: 'دعنا نتعاون في بناء الجيل القادم من الذكاء الاصطناعي',
      subtitle: 'هل تود مناقشة أبحاث علمية، أو نماذج رؤية حاسوبية، أو الصيانة التنبؤية، أو فرص مهنية وأكاديمية؟ أرسل رسالتك مباشرة.',
      profilesCoordinates: 'الملفات والمعلومات الشخصية',
      primaryEmail: 'البريد الإلكتروني الرئيسي',
      activeResponse: 'استجابة سريعة ونشطة',
      copy: 'نسخ',
      copied: 'تم النسخ',
      verifiedProfiles: 'الحسابات الموثقة',
      locatedIn: 'مقيم في',
      inquiriesWelcome: 'نرحب باستفسارات البحث العلمي والفرص الهندسية',
      form: {
        name: 'الاسم الكامل *',
        namePlaceholder: 'د. سارة الأحمد',
        email: 'البريد الإلكتروني *',
        emailPlaceholder: 'sarah@institution.edu',
        category: 'نوع الاستفسار',
        categoryOptions: [
          'تعاون بحثي واستفسار مخبري',
          'فرصة عمل في هندسة الذكاء الاصطناعي / الرؤية الحاسوبية',
          'مشروع في التعلم العميق والصيانة التنبؤية',
          'توجيه أكاديمي / مناقشة أطروحة بحثية',
          'استفسار عام / نقاش تقني'
        ],
        message: 'تفاصيل الرسالة أو سياق البحث *',
        messagePlaceholder: 'شارك تفاصيل فريقك، أو مشروعك البحثي، أو متطلبات الرؤية الحاسوبية، أو الفرصة المتاحة...',
        chars: 'حرف',
        sendMessage: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        orMailClient: 'أو أرسل عبر برنامج البريد الخاص بك',
        successTitle: 'تم إرسال رسالتك بنجاح!',
        successMessage: 'شكرًا لتواصلك. تم تحويل رسالتك مباشرة إلى البريد الإلكتروني وسأقوم بالرد عليك في أقرب وقت ممكن.',
        sendAnother: 'إرسال رسالة أخرى',
        errors: {
          nameRequired: 'يرجى كتابة الاسم الكامل',
          emailRequired: 'يرجى إدخال البريد الإلكتروني',
          emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
          messageRequired: 'يرجى كتابة نص الرسالة',
          messageLength: 'يجب أن لا تقل الرسالة عن 10 أحرف'
        }
      }
    },
    footer: {
      availableBadge: 'متاح للفرص البحثية وهندسة الرؤية الحاسوبية',
      navigationTitle: 'روابط سريعة',
      profilesTitle: 'الحسابات المهنية',
      backToTop: 'العودة للأعلى',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      builtWith: 'تم البناء باستخدام React 19 و Tailwind CSS',
      visitorCountLabel: 'المتعاونون والزوار',
      pageViewsLabel: 'مشاهدات الصفحة'
    },
    resumeModal: {
      title: 'السيرة الذاتية — معاينة مستند ATS',
      print: 'طباعة المستند',
      downloadPdf: 'تحميل ملف PDF المتجهي',
      copyText: 'نسخ النص العادي',
      textCopied: 'تم نسخ النص!',
      close: 'إغلاق'
    },
    editModal: {
      title: 'تخصيص بيانات الملف الشخصي',
      subtitle: 'قم بتحديث الاسم، والمسمى الأكاديمي، والنبذة التعريفية، ومعلومات الاتصال مباشرة.',
      fullName: 'الاسم الكامل',
      headline: 'المسمى الوظيفي / الأكاديمي',
      status: 'حالة التوفر الحالية',
      location: 'الموقع الجغرافي',
      email: 'البريد الإلكتروني للتواصل',
      bio: 'فقرات النبذة التعريفية',
      saveChanges: 'حفظ التعديلات',
      resetDefaults: 'استعادة الإعدادات الافتراضية',
      close: 'إلغاء'
    }
  }
};
