import { Language, ProfileData, ProjectItem, SkillItem, ExperienceItem, EducationItem, CertificationItem, TestimonialItem, PublicationItem } from '../types';
import { 
  initialProfile, 
  initialProjects, 
  initialSkills, 
  initialExperience, 
  initialEducation, 
  initialCertifications, 
  initialTestimonials, 
  initialPublications 
} from '../data/portfolioData';

export interface LocalizedPortfolioData {
  profile: ProfileData;
  projects: ProjectItem[];
  skills: SkillItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  testimonials: TestimonialItem[];
  publications: PublicationItem[];
}

export const getLocalizedPortfolioData = (lang: Language): LocalizedPortfolioData => {
  if (lang === 'en') {
    return {
      profile: initialProfile,
      projects: initialProjects,
      skills: initialSkills,
      experience: initialExperience,
      education: initialEducation,
      certifications: initialCertifications,
      testimonials: initialTestimonials,
      publications: initialPublications
    };
  }

  if (lang === 'fr') {
    return {
      profile: {
        ...initialProfile,
        title: 'Chercheur en IA & Vision par Ordinateur | Master 2 AIDSS',
        tagline: 'Spécialiste en Deep Learning, traitement d’images haute résolution et maintenance prédictive industrielle.',
        status: 'Disponible pour opportunités en IA, R&D et Doctorat (PhD)',
        location: 'Relizane, Algérie (Disponible à distance & relocalisation)',
        bioParagraphs: [
          "Je suis diplômé en Master 2 en Intelligence Artificielle et Systèmes d'Aide à la Décision (AIDSS) à l'Université de Relizane, avec une spécialisation avancée en vision par ordinateur, détection d'objets (famille YOLO) et traitement du signal.",
          "Mon mémoire de Master intitulé 'PipeGuard AI' a conçu une approche de vision de bout en bout pour la détection et la segmentation autonome de défauts et fissures sur des pipelines industriels pétroliers et gaziers.",
          "J'ai également réalisé un stage de recherche à l'Agence Spatiale Algérienne (ASAL), développant des algorithmes de détection d'anomalies sur des données d'imagerie satellitaire multispectrale."
        ],
        stats: [
          { label: 'Diplôme de Recherche', value: 'Master 2', sublabel: 'IA & Systèmes de Décision (AIDSS)' },
          { label: 'Précision Modèle CV', value: '96.4%', sublabel: 'mAP@50 sur défauts industriels' },
          { label: 'Imagerie Analysée', value: '25K+', sublabel: 'Trames NDT & Tuiles Satellitaires' },
          { label: 'Latence Inférence Edge', value: '14ms', sublabel: 'TensorRT & Optimisation GPU' }
        ],
        highlights: [
          'Major / Mention Très Honorable en Master 2 AIDSS (Université de Relizane)',
          'Stage de recherche spatiale à l’Agence Spatiale Algérienne (ASAL) sur l’imagerie satellitaire',
          'Auteur de PipeGuard AI : pipeline autonome de vision par ordinateur pour le contrôle non destructif (CND)',
          'Lauréat national au Hackathon Smart City SHESEM pour la vision embarquée'
        ]
      },
      projects: [
        {
          ...initialProjects[0],
          title: 'PipeGuard AI — Vision Industrielle de Détection de Défauts sur Pipelines',
          tagline: 'Système autonome de détection et segmentation de fissures de surface par Deep Learning.',
          summary: 'Développement d’un pipeline de vision par ordinateur pour la localisation et la classification automatique des défauts de surface (corrosion, fissures, déformations) sur les pipelines d’hydrocarbures.',
          fullDescription: 'Conçu dans le cadre de mon mémoire de Master 2, PipeGuard AI aborde le défi critique du contrôle non destructif (CND) des infrastructures d’hydrocarbures. Le système utilise un modèle YOLOv8 personnalisé combiné à des modules de segmentation et de filtrage morphologique pour détecter les micro-fissures et les zones de corrosion avec une précision mAP50 de 96,4% et une inférence en temps réel à 70 FPS.',
          role: 'Chercheur Principal & Ingénieur Deep Learning',
          keyFeatures: [
            'Détection et segmentation multi-classes en temps réel (fissures, piqûres de corrosion, déformations)',
            'Inférence accélérée par GPU avec NVIDIA TensorRT atteignant 14,2 ms par trame',
            'Architecture d’apprentissage robuste aux variations d’éclairage et aux surfaces métalliques spéculaires',
            'Tableau de bord de télémétrie industrielle avec alertes de sévérité automatisées'
          ],
          architectureHighlights: [
            'Backbone YOLOv8 modifié avec Feature Pyramid Network (FPN) à échelles multiples',
            'Pipeline de prétraitement avec filtrage bilatéral et égalisation CLAHE',
            'Quantisation INT8/FP16 optimisée pour les plateformes embarquées NVIDIA Jetson'
          ]
        },
        {
          ...initialProjects[1],
          title: 'ASAL EarthVision — Détection d’Anomalies Satellitaires Multispectrales',
          tagline: 'Algorithmes d’apprentissage profond pour l’observation spatiale de la Terre à l’Agence Spatiale Algérienne.',
          summary: 'Conception d’autoencodeurs convolutifs profonds pour détecter les perturbations de sol non répertoriées et les anomalies spectrales sur l’imagerie satellitaire AlSat.',
          fullDescription: 'Durant mon stage au Centre des Applications Spatiales de l’Agence Spatiale Algérienne (ASAL), j’ai développé des méthodes de traitement d’images multispectrales et des modèles d’apprentissage non supervisé pour analyser des séries temporelles de données satellitaires et identifier des changements anormaux d’humidité et de végétation.',
          role: 'Stagiaire Chercheur en IA Satellitaire',
          keyFeatures: [
            'Traitement de données géo-spatiales GeoTIFF et calcul d’indices spectraux (NDVI, NDWI, EVI)',
            'Autoencodeur résiduel spectral pour l’extraction d’anomalies sans étiquetage manuel exhaustif',
            'Détection précise de modifications de surface avec un F1-score de 91,2%'
          ],
          architectureHighlights: [
            'Autoencodeur convolutif 2D/3D avec couches d’attention spatiale',
            'Prétraitement géométrique et radiométrique des bandes multispectrales',
            'Pipeline de partitionnement de tuiles à grande échelle avec GDAL et PyTorch'
          ]
        },
        {
          ...initialProjects[2],
          title: 'SHESEM CityVision — Système Embarqué d’Inspection Routière Intelligente',
          tagline: 'Perception Edge en temps réel des nids-de-poule et dégradations de chaussée avec géolocalisation.',
          summary: 'Solution primée lors du Hackathon Smart City pour l’analyse vidéo continue de l’état des routes municipales et la génération automatique de fiches d’intervention.',
          fullDescription: 'SHESEM CityVision transforme les flux vidéo de caméras embarquées sur des véhicules de service en cartographie dynamique de l’état des routes. Le modèle classe instantanément la gravité des nids-de-poule et fissures pour optimiser la planification des réparations urbaines.',
          role: 'Chef de Projet IA & Développeur Vision',
          keyFeatures: [
            'Modèle léger YOLOv8 Nano quantifié tournant à 45 FPS sur TPU/NPU basse consommation',
            'Regroupement spatial par GPS et estimation de la profondeur des dégradations',
            'API FastAPI connectée à une interface SIG municipale interactive'
          ]
        }
      ],
      skills: initialSkills,
      experience: [
        {
          ...initialExperience[0],
          role: 'Chercheur en Vision par Ordinateur & Auteur',
          description: 'Recherche appliquée sur l’automatisation du contrôle non destructif (CND) des pipelines pétroliers par vision par ordinateur et Deep Learning.',
          achievements: [
            'Conception et entraînement d’un modèle YOLOv8 personnalisé avec un mAP@50 de 96,4%',
            'Création et annotation d’un jeu de données de 12 500 images de défauts industriels',
            'Optimisation de l’inférence sous TensorRT à 14,2 ms par trame',
            'Rédaction complète du mémoire de recherche et soutenance devant le jury académique'
          ]
        },
        {
          ...initialExperience[1],
          role: 'Stagiaire Recherche en Imagerie Satellitaire & IA',
          description: 'Stage de recherche au sein de l’Agence Spatiale Algérienne (ASAL) axé sur l’observation de la Terre et la détection d’anomalies géospatiales.',
          achievements: [
            'Développement d’autoencodeurs convolutifs pour l’analyse multispectrale',
            'Traitement de séries temporelles satellitaires et calcul d’indices biophysiques',
            'Amélioration de 18% du taux de détection des perturbations de sol'
          ]
        },
        {
          ...initialExperience[2],
          role: 'Chef de Projet IA & Vision Embarquée',
          description: 'Développement d’un système de vision par ordinateur embarqué primé pour la surveillance urbaine et la maintenance des voiries municipales.',
          achievements: [
            'Déploiement en temps réel d’un modèle de détection d’anomalies routières à 45 FPS',
            'Intégration de la télémétrie GPS et synchronisation avec une plateforme SIG',
            'Obtention du Prix de l’Innovation au Hackathon Smart City'
          ]
        }
      ],
      education: [
        {
          ...initialEducation[0],
          degree: 'Master 2 en Intelligence Artificielle et Systèmes d’Aide à la Décision (AIDSS)',
          honors: 'Mention Très Honorable (Major de Promotion)',
          courses: [
            'Vision par Ordinateur & Traitement d’Images Avancé',
            'Architectures de Deep Learning & Réseaux de Neurones',
            'Systèmes d’Aide à la Décision & Modélisation',
            'Optimisation & Traitement Avancé du Signal',
            'Apprentissage Automatique & Statistiques Avancées'
          ]
        },
        {
          ...initialEducation[1],
          degree: 'Licence en Informatique Fondamentale',
          honors: 'Mention Très Bien',
          courses: [
            'Algorithmique & Structures de Données Avancées',
            'Probabilités & Statistiques pour l’Ingénierie',
            'Bases de Données Relationnelles & Systèmes Distribués',
            'Architecture des Ordinateurs & Systèmes d’Exploitation Linux'
          ]
        }
      ],
      certifications: initialCertifications,
      testimonials: [
        {
          ...initialTestimonials[0],
          text: "Mouâd a fait preuve d’une rigueur scientifique remarquable lors de son mémoire sur PipeGuard AI. Sa maîtrise des architectures de vision et son autonomie en ingénierie en font un profil exceptionnel pour la recherche avancée et l'industrie.",
          relationship: "Directeur de Mémoire de Master 2 AIDSS"
        },
        {
          ...initialTestimonials[1],
          text: "Durant son stage à l'ASAL, Mouâd s'est rapidement approprié la complexité des données satellitaires multispectrales. Ses contributions sur les autoencodeurs ont été d'une grande valeur technique.",
          relationship: "Superviseur de Recherche Spatiale à l'ASAL"
        },
        {
          ...initialTestimonials[2],
          text: "Capacité impressionnante à passer de la théorie mathématique complexe à une implémentation logicielle GPU ultra-rapide et stable lors du Hackathon.",
          relationship: "Mentor Technique Hackathon Smart City"
        }
      ],
      publications: [
        {
          ...initialPublications[0],
          title: 'PipeGuard AI : Détection et Localisation Autonome de Fissures et Corrosion par Vision par Ordinateur dans les Pipelines Industriels',
          abstract: 'Cette thèse présente une méthodologie d’apprentissage profond pour l’inspection automatisée des parois de pipelines d’hydrocarbures. En combinant un détecteur YOLOv8 optimisé avec des modules d’attention et une quantisation TensorRT, le système atteint 96,4% de mAP50 tout en maintenant une cadence temps réel de 70 FPS.'
        },
        {
          ...initialPublications[1],
          title: 'Détection d’Anomalies Multispectrales par Autoencodeurs Profonds sur Données d’Observation Satellitaire AlSat',
          abstract: 'Rapport technique présentant une architecture d’autoencodeur résiduel spectral pour l’extraction non supervisée de perturbations environnementales et d’anomalies de sol à partir de données d’observation de la Terre multi-temporelles.'
        },
        {
          ...initialPublications[2],
          title: 'Perception Edge Temps Réel et Classification des Dégradations de Chaussée pour la Gestion Intelligente des Infrastructures Urbaines',
          abstract: 'Article technique détaillant une architecture de vision légère déployée sur plateforme embarquée pour la détection et la géolocalisation automatique des dégradations routières.'
        }
      ]
    };
  }

  // Arabic (ar)
  return {
    profile: {
      ...initialProfile,
      name: 'بوحديبة معاذ',
      title: 'باحث في الذكاء الاصطناعي والرؤية الحاسوبية | ماستر 2 AIDSS',
      tagline: 'متخصص في أبحاث التعلم العميق، ومعالجة الصور عالية الدقة، والصيانة التنبؤية للأنظمة الصناعية.',
      status: 'متاح لفرص البحث العلمي، برامج الدكتوراه (PhD)، ومشاريع الذكاء الاصطناعي',
      location: 'غليزان، الجزائر (متاح للعمل عن بعد والانتقال)',
      bioParagraphs: [
        "حاصل على ماستر 2 في الذكاء الاصطناعي وأنظمة دعم القرار (AIDSS) من جامعة غليزان، مع تخصص متقدم في الرؤية الحاسوبية، واكتشاف الأجسام (عائلة نماذج YOLO)، ومعالجة الإشارات والبيانات.",
        "تمحورت أطروحة الماستر بعنوان 'PipeGuard AI' حول تصميم وتطوير نظام رؤية حاسوبية مستقل لفحص واكتشاف عيوب وتصدعات أنابيب النفط والغاز الصناعية بتقنيات التعلم العميق.",
        "أجريت تدريبًا بحثيًا متخصصًا لدى الوكالة الفضائية الجزائرية (ASAL)، ركز على تطوير نماذج متقدمة لاكتشاف الشذوذ والتغيرات البيئية في صور الأقمار الصناعية متعددة الأطياف."
      ],
      stats: [
        { label: 'الدرجة الأكاديمية', value: 'ماستر 2', sublabel: 'ذكاء اصطناعي وأنظمة القرار (AIDSS)' },
        { label: 'دقة نموذج الرؤية', value: '96.4%', sublabel: 'mAP@50 في كشف العيوب الصناعية' },
        { label: 'الصور المعالجة', value: '+25 ألف', sublabel: 'إطارات فحص صناعي وبيانات أقمار' },
        { label: 'زمن الاستدلال', value: '14 ميلي ثانية', sublabel: 'تحسين GPU عبر TensorRT' }
      ],
      highlights: [
        'المرتبة الأولى / تقدير ممتاز في ماستر 2 AIDSS (جامعة غليزان)',
        'تدريب بحثي متخصص في الوكالة الفضائية الجزائرية (ASAL) على تحليل صور الأقمار الصناعية',
        'مطور ومبتكر نظام PipeGuard AI: خط رؤية حاسوبية للفحص اللاإتلافي الصناعي (NDT)',
        'الفائز بالجائزة الوطنية للابتكار في هاكاثون المدن الذكية SHESEM'
      ]
    },
    projects: [
      {
        ...initialProjects[0],
        title: 'PipeGuard AI — نظام الرؤية الصناعية لكشف عيوب أنابيب الطاقة',
        tagline: 'نظام ذكي متكامل لاكتشاف وتحديد مواقع الشقوق والتآكل بدقة بالتعلم العميق.',
        summary: 'تطوير خط معالجة للرؤية الحاسوبية لاكتشاف وتصنيف عيوب الأسطح (التآكل، الشقوق الدقيقة، والتشوهات) على أنابيب نقل المحروقات في الوقت الفعلي.',
        fullDescription: 'تم تطوير هذا المشروع كأطروحة تخرج لماستر 2 لحل التحديات الحرجة في الفحص اللاإتلافي (NDT) لشبكات أنابيب النفط والغاز. يدمج النظام نموذج YOLOv8 مخصصًا مع معالجات موضعية لتحقيق دقة 96.4% وزمن استجابة فائق السرعة يصل إلى 70 إطار في الثانية.',
        role: 'الباحث الرئيسي ومهندس التعلم العميق',
        keyFeatures: [
          'اكتشاف وتقسيم متعدد الفئات للشقوق والصدأ في الوقت الفعلي',
          'استدلال فائق السرعة عبر NVIDIA TensorRT بزمن 14.2 ميلي ثانية لكل إطار',
          'بنية عصبية مدربة لتحمل تغيرات الإضاءة وانعكاسات الأسطح المعدنية',
          'لوحة تحكم صناعية لإرسال تنبيهات الخطورة الفورية'
        ],
        architectureHighlights: [
          'هيكل YOLOv8 مخصص مع شبكة هرمية الميزات متعددة المقاييس (FPN)',
          'معالجة أولية متقدمة باستخدام الفلترة ثنائية الأبعاد ومعادلة CLAHE',
          'تكميم كمي INT8/FP16 موجه لمنصات الحوسبة المدمجة NVIDIA Jetson'
        ]
      },
      {
        ...initialProjects[1],
        title: 'ASAL EarthVision — محرك كشف الشذوذ في صور الأقمار الصناعية',
        tagline: 'خوارزميات التعلم العميق لرصد الأرض واستشعار التغيرات في الوكالة الفضائية الجزائرية.',
        summary: 'بناء مشفرات تلقائية تلافيفية عميقة لاكتشاف التغيرات المفاجئة والأنشطة غير المسجلة في بيانات الأقمار الصناعية AlSat.',
        fullDescription: 'خلال فترة التدريب البحثي بمركز التطبيقات الفضائية التابع للوكالة الفضائية الجزائرية (ASAL)، قمت بتطوير خوارزميات لمعالجة الصور الفضائية متعددة الأطياف وتحليل السلاسل الزمنية لاكتشاف التغيرات في الرطوبة والغطاء النباتي.',
        role: 'باحث متدرب في الذكاء الاصطناعي للأقمار الصناعية',
        keyFeatures: [
          'معالجة البيانات الجغرافية المكانية GeoTIFF وحساب المؤشرات الطيفية (NDVI, NDWI)',
          'مشفر تلقائي كاشف للشذوذ الطيفي دون الحاجة لتوسيم يدوي كثيف',
          'دقة رصد عالية للتغيرات الأرضية بمعدل F1 قدره 91.2%'
        ],
        architectureHighlights: [
          'مشفر تلقائي تلافيفي مدعوم بآليات الانتباه المكاني',
          'معالجة هندسية وإشعاعية متقدمة للنطاقات الطيفية المتعددة',
          'خط تجزئة ومعالجة للصور الفضائية الضخمة باستخدام GDAL و PyTorch'
        ]
      },
      {
        ...initialProjects[2],
        title: 'SHESEM CityVision — نظام الرؤية المدمج لمراقبة الطرق الذكية',
        tagline: 'إدراك فوري على الحافة (Edge AI) للحفر وتشققات الأسفلت مع الربط بنظام GPS.',
        summary: 'مشروع فائز في هاكاثون المدن الذكية لتحليل الفيديو المباشر من المركبات البلدية لتحديد حالة شبكة الطرق بدقة.',
        fullDescription: 'يقوم SHESEM CityVision بتحويل كاميرات المركبات العادية إلى مستشعرات ذكية ترصد عيوب الطرق، وتقيم درجة خطورتها، وتنشئ بلاغات صيانة فورية للبلديات.',
        role: 'قائد فريق الذكاء الاصطناعي ومطور الرؤية الحاسوبية',
        keyFeatures: [
          'نموذج خفيف YOLOv8 Nano يعمل بمعدل 45 إطار/ثانية على معالجات TPU/NPU المدمجة',
          'تجميع جغرافي مكاني مع إحداثيات GPS وتقدير تقريبي لعمق الحفر',
          'واجهة برمجية FastAPI متصلة بنظام معلومات جغرافية (GIS) تفاعلي'
        ]
      }
    ],
    skills: initialSkills,
    experience: [
      {
        ...initialExperience[0],
        role: 'باحث في الرؤية الحاسوبية ومعد الأطروحة',
        description: 'أبحاث تطبيقية في أتمتة الفحص اللاإتلافي (NDT) لأنابيب الطاقة باستخدام تقنيات الرؤية الحاسوبية والتعلم العميق.',
        achievements: [
          'تصميم وتدريب نموذج YOLOv8 مخصص محققًا دقة mAP@50 بلغت 96.4%',
          'إنشاء وتوسيم قاعدة بيانات تضم 12,500 صورة للعيوب والشقوق الصناعية',
          'تسريع الاستدلال على معالجات GPU ليصل إلى 14.2 ميلي ثانية لكل إطار',
          'كتابة ومناقشة أطروحة الماستر بتفوق ونيل تقدير ممتاز'
        ]
      },
      {
        ...initialExperience[1],
        role: 'باحث متدرب في صور الأقمار الصناعية والذكاء الاصطناعي',
        description: 'تدريب بحثي بالوكالة الفضائية الجزائرية (ASAL) ركز على مراقبة الأرض وكشف الشذوذ في البيانات المكانية.',
        achievements: [
          'تطوير مشفرات تلقائية تلافيفية للتحليل الطيفي المتعدد للأقمار الصناعية',
          'معالجة السلاسل الزمنية وحساب مؤشرات الغطاء النباتي والمياه',
          'رفع نسبة اكتشاف التغيرات الأرضية بنسبة 18%'
        ]
      },
      {
        ...initialExperience[2],
        role: 'قائد فريق الذكاء الاصطناعي والرؤية المدمجة',
        description: 'تطوير نظام رؤية حاسوبية مدمج لمراقبة الطرق الحضرية وتحسين الصيانة البلدية.',
        achievements: [
          'نشر نموذج رصد عيوب الطرق في الوقت الفعلي بمعدل 45 إطار/ثانية',
          'دمج بيانات GPS والربط مع أنظمة المعلومات الجغرافية',
          'الفوز بجائزة الابتكار في هاكاثون المدن الذكية الوطني'
        ]
      }
    ],
    education: [
      {
        ...initialEducation[0],
        degree: 'ماستر 2 في الذكاء الاصطناعي وأنظمة دعم القرار (AIDSS)',
        honors: 'تقدير ممتاز مع مرتبة الشرف (الأول على الدفعة)',
        courses: [
          'الرؤية الحاسوبية ومعالجة الصور المتقدمة',
          'معماريات التعلم العميق والشبكات العصبية',
          'أنظمة دعم القرار والنمذجة الرياضية',
          'التحسين ومعالجة الإشارات المتقدمة',
          'التعلم الآلي والإحصاء التطبيقي'
        ]
      },
      {
        ...initialEducation[1],
        degree: 'ليسانس في الإعلام الآلي (علوم الحاسوب)',
        honors: 'تقدير جيد جدًا',
        courses: [
          'الخوارزميات وهياكل البيانات المتقدمة',
          'الاحتمالات والإحصاء الهندسي',
          'قواعد البيانات والأنظمة الموزعة',
          'معمارية الحواسيب وأنظمة تشغيل لينكس'
        ]
      }
    ],
    certifications: initialCertifications,
    testimonials: [
      {
        ...initialTestimonials[0],
        text: "أظهر معاذ دقة علمية وشغفًا استثنائيًا خلال إعداد أطروحته PipeGuard AI. إن تمكنه من معماريات الرؤية الحاسوبية وقدرته على الإنجاز المستقل تجعله كفاءة متميزة في البحث الأكاديمي والصناعي.",
        relationship: "المشرف الأكاديمي على أطروحة ماستر 2 AIDSS"
      },
      {
        ...initialTestimonials[1],
        text: "خلال فترة تدريبه في الوكالة الفضائية الجزائرية، أظهر معاذ سرعة فائقة في استيعاب بيانات الأقمار الصناعية متعددة الأطياف. كانت إسهاماته في نماذج المشفرات التلقائية ذات قيمة تقنية عالية.",
        relationship: "مشرف أبحاث بالوكالة الفضائية الجزائرية (ASAL)"
      },
      {
        ...initialTestimonials[2],
        text: "قدرة مبهرة على تحويل المعادلات الرياضية والنظريات المعقدة إلى برمجيات حقيقية فائقة السرعة والاستقرار تعمل على معالجات GPU.",
        relationship: "الموجه التقني بهاكاثون المدن الذكية"
      }
    ],
    publications: [
      {
        ...initialPublications[0],
        title: 'PipeGuard AI: كشف وتحديد مواقع الشقوق والتآكل ذاتيًا بالرؤية الحاسوبية في أنابيب الطاقة الصناعية',
        abstract: 'تقدم هذه الأطروحة منهجية تعلم عميق للفحص الآلي لأنابيب نقل المحروقات. بدمج كاشف YOLOv8 المحسن مع طبقات الانتباه وتكميم TensorRT، حقق النظام دقة mAP50 بلغت 96.4% مع الحفاظ على معدل معالجة آني بلغ 70 إطارًا في الثانية.'
      },
      {
        ...initialPublications[1],
        title: 'كشف الشذوذ في صور الأقمار الصناعية متعددة الأطياف عبر المشفرات التلقائية العميقة على بيانات AlSat',
        abstract: 'تقرير تقني يستعرض معمارية مشفر تلقائي طيفي للاستخراج غير الخاضع للإشراف للتغيرات البيئية وشذوذ التربة من بيانات رصد الأرض متعددة الفترات الزمنية.'
      },
      {
        ...initialPublications[2],
        title: 'الإدراك الآني على الحافة وتصنيف عيوب الأسفلت لإدارة البنية التحتية الذكية للمدن',
        abstract: 'ورقة عمل تقنية تفصل بنية رؤية حاسوبية خفيفة الوزن منشورة على معالجات مدمجة لاكتشاف وتحديد إحداثيات عيوب الطرق تلقائيًا.'
      }
    ]
  };
};
