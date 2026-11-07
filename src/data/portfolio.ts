/**
 * Single Source of Truth for Sohaib Rashid's Portfolio
 * 
 * Edit this file to update any text, links, projects, journey milestones,
 * skills, or certificates without touching component code.
 */

export interface RotatingRole {
  title: string;
  badge: string;
}

export interface WhatIDoCategory {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  learningSkills?: string[];
  highlight?: string;
  iconName: 'code' | 'cpu';
}

export interface JourneyMilestone {
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  tech: string[];
  description: string;
  liveLink?: string; // If undefined or empty, will display "Link coming soon"
  isLive: boolean;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  fileName?: string; // File name under public/certificates/ (e.g., 'google-genai.pdf' or 'cloud-badge.png')
  description: string;
  skillsGained?: string[];
  credentialId?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  type: 'email' | 'linkedin' | 'github' | 'leetcode';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Sohaib Rashid',
    greeting: "Hi, I'm Sohaib Rashid",
    location: 'From Kanpur · Based in Hyderabad',
    education: 'B.Tech CS Student at MANUU Hyderabad',
    roles: [
      'Web Developer',
      'IoT Builder',
      'AI/ML Aspirant'
    ],
    aboutBio:
      "B.Tech CS student at MANUU Hyderabad, from Kanpur. I build web and IoT projects, shipped a store with real UPI payments, and I'm learning DSA and Machine Learning to become an AI/ML Engineer.",
    resumeFileName: 'Sohaib_Rashid_Resume.pdf', // Put in public/ if available
    statusIndicator: 'Open to internships & collaborative builds'
  },

  whatIDo: [
    {
      title: 'Develop',
      subtitle: 'Web Platforms & Real-World APIs',
      description:
        'Building functional, production-ready web applications with backend integrations, database schemas, real-time auth, and direct UPI payment gateway integrations.',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'Supabase',
        'Groq API',
        'UPI payments',
        'Netlify',
        'Railway',
        'Git',
        'GitHub'
      ],
      learningSkills: ['Java', 'DSA', 'Machine Learning'],
      highlight: 'Shipped live store handling verified UPI merchant callbacks',
      iconName: 'code'
    },
    {
      title: 'IoT & Hardware',
      subtitle: 'Embedded Systems & Microcontrollers',
      description:
        'Interfacing physical electronics with network connectivity. Designing smart home telemetry, sensor monitoring, and automated hardware control units.',
      skills: [
        'Arduino',
        'ESP8266',
        'ESP32',
        'Smart Fan Controller (Running at Home)'
      ],
      learningSkills: ['Embedded AI', 'Edge ML'],
      highlight: 'Custom ESP32 fan controller currently operating in home automation',
      iconName: 'cpu'
    }
  ] as WhatIDoCategory[],

  journey: [
    {
      period: 'Class 9',
      title: 'First IoT Projects & Hardware Spark',
      subtitle: 'Kanpur, UP',
      description:
        'Dived into hands-on microcontrollers, breadboard prototyping, circuit design, and writing foundational firmware with Arduino.',
      tag: 'Hardware Foundations'
    },
    {
      period: 'High School',
      title: 'Rajya Puraskar',
      subtitle: 'The Bharat Scouts & Guides (State Level)',
      description:
        'Awarded the prestigious Governor-level Rajya Puraskar certificate recognizing discipline, leadership, field problem-solving, and civic service.',
      tag: 'State Honour'
    },
    {
      period: '2025',
      title: 'Shipped Live Production Projects',
      subtitle: 'Full-Stack & Integrations',
      description:
        'Architected and shipped multiple live deployed applications, including PYQ Store featuring real UPI payments and MSR Connect seminar Q&A.',
      tag: 'Live Deployments'
    },
    {
      period: '2026',
      title: 'B.Tech CS at MANUU Hyderabad',
      subtitle: 'Undergraduate Computer Science',
      description:
        'Pursuing B.Tech Computer Science with an active focus on Data Structures & Algorithms, Systems, and applied Machine Learning foundations.',
      tag: 'Academic Journey'
    },
    {
      period: '2026',
      title: 'Techfest IIT Bombay College Ambassador',
      subtitle: "Asia's Largest Science & Tech Festival",
      description:
        'Representing IIT Bombay Techfest across campus, championing tech competitions, robotics initiatives, and student hackathons.',
      tag: 'Leadership'
    },
    {
      period: '2026',
      title: 'Started MANUU Coding Club',
      subtitle: 'Founder & Community Lead',
      description:
        'Founded the official MANUU Coding Club and built its community hub, fostering peer learning, competitive coding culture, and open-source collaboration.',
      tag: 'Community Builder'
    }
  ] as JourneyMilestone[],

  projects: [
    {
      id: 'msr-connect',
      title: 'MSR Connect',
      tag: 'Interactive Seminar Platform',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Supabase', 'Google Sign-In'],
      description:
        'Interactive seminar Q&A application featuring authenticated host dashboard, live audience projector view, and seamless Google Sign-In for real-time audience engagement.',
      liveLink: 'https://msrconnect.netlify.app/',
      isLive: true,
      featured: true
    },
    {
      id: 'msr-foodguard',
      title: 'MSR FoodGuard',
      tag: 'Health & Nutrition Utility',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Groq API', 'Netlify'],
      description:
        'Instant E-code and food additive analyzer that decodes food package labels, checks dietary restrictions, and explains health impacts in plain language.',
      liveLink: 'https://sohaib-msr.netlify.app/',
      isLive: true
    },
    {
      id: 'techzone-store',
      title: 'TechZone Store',
      tag: 'E-Commerce Platform',
      tech: ['JavaScript', 'Supabase', 'HTML5', 'CSS3', 'Netlify'],
      description:
        'Full-featured gadget e-commerce web application with real-time shopping cart, user wishlist, dynamic inventory filtering, and a secured admin control panel.',
      liveLink: 'https://msr-techstore.netlify.app/',
      isLive: true
    },
    {
      id: 'manuu-coding-club',
      title: 'MANUU Coding Club',
      tag: 'Official Community Portal',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Netlify', 'GitHub Pages'],
      description:
        'Official website and resource directory for the university student coding community, showcasing upcoming workshops, hackathons, and member achievements.',
      liveLink: 'https://manuucodingclub.netlify.app/',
      isLive: true
    },
    {
      id: 'msr-notes',
      title: 'MSR Notes',
      tag: 'Academic Examination Portal',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Netlify'],
      description:
        'Curated portal for Class 12 Previous Year Questions (PYQs), structured chapter-wise study resources, and solved examination notes.',
      liveLink: 'https://foodguardmsr.netlify.app/',
      isLive: true
    },
    {
      id: 'msr-tracker',
      title: 'MSR Tracker',
      tag: 'Productivity & Habits',
      tech: ['Python', 'JavaScript', 'Supabase'],
      description:
        'Personal productivity and academic goal tracker designed to streamline daily learning targets, DSA consistency, and habit progression.',
      liveLink: '',
      isLive: false
    },
    {
      id: 'studytrack-ai',
      title: 'StudyTrack (AI Mentor)',
      tag: 'AI-Guided Learning Assistant',
      tech: ['Groq API', 'Python', 'JavaScript'],
      description:
        'Intelligent study assistant utilizing Groq fast-inference LLMs to build customized concept roadmaps, answer homework doubts, and quiz topic retention.',
      liveLink: '',
      isLive: false
    },
    {
      id: 'esp32-smart-fan',
      title: 'ESP32 Smart Fan Controller',
      tag: 'Hardware & IoT Automation',
      tech: ['ESP32', 'Arduino C++', 'Wi-Fi Web Server', 'Hardware PWM'],
      description:
        'Custom IoT embedded hardware unit running physically at home, controlling ceiling fan speed with thermal feedback and local Wi-Fi browser controls.',
      liveLink: '',
      isLive: false
    }
  ] as ProjectItem[],

  certificates: [
    {
      id: 'cert-google-genai',
      title: 'Google Generative AI',
      issuer: 'Google',
      year: '2025',
      fileName: 'google-genai.pdf',
      description:
        'Foundational and prompt engineering mastery covering large language models, multimodal reasoning, and generative AI application paradigms.',
      skillsGained: ['Generative AI', 'Prompt Engineering', 'LLM Principles']
    },
    {
      id: 'cert-google-cloud-badges',
      title: 'Google Cloud Badges',
      issuer: 'Google Cloud Skills Boost',
      year: '2025',
      fileName: 'google-cloud-badges.pdf',
      description:
        'Skill badges earned through hands-on labs exploring Google Cloud compute instances, storage buckets, network architecture, and security fundamentals.',
      skillsGained: ['Cloud Computing', 'Compute Engine', 'Cloud Architecture']
    },
    {
      id: 'cert-microsoft-copilot',
      title: 'Microsoft Copilot',
      issuer: 'Microsoft',
      year: '2025',
      fileName: 'microsoft-copilot.pdf',
      description:
        'Applied AI productivity and workflow transformation leveraging Microsoft Copilot for automated analysis, documentation, and development speed.',
      skillsGained: ['Copilot AI', 'Productivity Engineering', 'Prompt Design']
    },
    {
      id: 'cert-eicta-iitk',
      title: 'EICTA IIT Kanpur (MeitY)',
      issuer: 'Electronics & ICT Academy, IIT Kanpur / MeitY',
      year: '2024',
      fileName: 'eicta-iit-kanpur.pdf',
      description:
        'Rigorous technical certification endorsed by the Ministry of Electronics and Information Technology (MeitY) and IIT Kanpur.',
      skillsGained: ['System Architecture', 'Core Computing', 'Information Tech']
    },
    {
      id: 'cert-aws-placement-groups',
      title: 'AWS Placement Groups',
      issuer: 'Amazon Web Services',
      year: '2025',
      fileName: 'aws-placement-groups.pdf',
      description:
        'Architectural design of low-latency cluster placement groups, partition groups, and spread groups in Amazon EC2 workloads.',
      skillsGained: ['AWS EC2', 'Cluster Topology', 'Network Latency']
    },
    {
      id: 'cert-python-simplilearn',
      title: 'Python Certification',
      issuer: 'Simplilearn',
      year: '2024',
      fileName: 'python-simplilearn.pdf',
      description:
        'Comprehensive Python programming covering object-oriented programming, data structures, automation scripting, and backend web interfacing.',
      skillsGained: ['Python OOP', 'Scripting', 'API Integration']
    },
    {
      id: 'cert-rajya-puraskar',
      title: 'Rajya Puraskar',
      issuer: 'The Bharat Scouts & Guides (Governor of State)',
      year: 'Governor Award',
      fileName: 'rajya-puraskar.pdf',
      description:
        'Governor Award for exceptional leadership, community service, survival skills, civil preparedness, and team discipline at the state tier.',
      skillsGained: ['State-Tier Leadership', 'Crisis Management', 'Team Leadership']
    }
  ] as CertificateItem[],

  /**
   * Animated marquee skills: Strictly Sohaib's verified skills & learning tracks.
   * NOTE: Per instructions, no React, Node, TypeScript, Next.js, Three.js, Blender or PHP!
   */
  skillsMarquee: [
    { name: 'Python', category: 'Core' },
    { name: 'JavaScript', category: 'Core' },
    { name: 'HTML5 & CSS3', category: 'Core' },
    { name: 'ESP32 & ESP8266', category: 'IoT' },
    { name: 'Arduino', category: 'IoT' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Groq API', category: 'AI Tools' },
    { name: 'UPI Payments', category: 'Fintech' },
    { name: 'Netlify & Railway', category: 'DevOps' },
    { name: 'Git & GitHub', category: 'Workflow' },
    { name: 'Java (Learning)', category: 'Learning' },
    { name: 'DSA (Learning)', category: 'Learning' },
    { name: 'Machine Learning (Learning)', category: 'Learning' }
  ],

  social: {
    email: 'rashidsohaib10232@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sohaib-rashid-msr',
    github: 'https://github.com/sohaibrashid-msr',
    leetcode: 'https://leetcode.com/u/MSRP1/'
  },

  footer: {
    text: 'Designed and developed by Sohaib Rashid',
    year: '2026'
  }
};
