

import { Project, Profile } from './types';

export const PROFILES: Profile[] = [
  { 
    id: '1', 
    name: 'Recruiter', 
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' // Classic Red Smile
  }
];

// --- HERO VIDEO OPTIONS ---
export const HERO_VIDEO_OPTIONS = [
  {
    id: 'v1',
    label: 'Cyber Security',
    // Abstract Red/Black Tech
    url: 'https://videos.pexels.com/video-files/2061191/2061191-uhd_2560_1440_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'v2',
    label: 'Deep Focus',
    // Developer Typing / Coding
    url: 'https://videos.pexels.com/video-files/853789/853789-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'v3',
    label: 'Data Center',
    // Server Room / Blue Tech
    url: 'https://videos.pexels.com/video-files/3252451/3252451-uhd_2560_1440_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-efc535b5c47c?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'v4',
    label: 'Teamwork',
    // Office / Whiteboard
    url: 'https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200&auto=format&fit=crop'
  }
];

// --- INDIVIDUAL PROJECTS DEFINITIONS ---

const p_sih_llm: Project = {
  id: 'sih-llm',
  title: 'LLM Question Answer System',
  description: 'AI-powered system that answers queries using Large Language Models. Features context understanding, natural language responses, and dataset-based training.',
  imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop', // Digital Brain / AI Network
  techStack: ['Python', 'LLMs', 'NLP', 'Machine Learning'],
  match: 99,
  year: '2024',
  duration: 'Winner',
  genre: ['AI', 'Software'],
  category: 'Project',
  link: 'https://github.com/Lonewolf152006/llm-model-pdfQ-A',
};

const p_sih_file: Project = {
  id: 'sih-file',
  title: 'File Management System',
  description: 'Smart India Hackathon project for automated file and document handling. Streamlines organizational workflows with intelligent sorting and retrieval.',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Data Visualization Dashboard
  techStack: ['React', 'Node.js', 'SQL', 'Automation'],
  match: 97,
  year: '2023',
  duration: 'Hackathon',
  genre: ['Web', 'Software'],
  category: 'Project',
};

const p_yt_skip: Project = {
  id: 'yt-skip',
  title: 'YouTube Ad Skipper',
  description: 'A browser automation tool built to detect and automatically skip YouTube ads, enhancing the viewing experience.',
  imageUrl: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=800&auto=format&fit=crop', // Video/Media UI
  techStack: ['Python', 'Selenium'],
  match: 95,
  year: '2023',
  genre: ['Automation', 'Tool'],
  category: 'Project',
};

const p_jarvis: Project = {
  id: 'jarvis',
  title: 'Jarvis Voice Assistant',
  description: 'Desktop voice-controlled personal assistant capable of executing system commands, web searches, and automation features.',
  imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da9e2dc6?q=80&w=800&auto=format&fit=crop', // AI Robot Face
  techStack: ['Python', 'Speech Recognition', 'Automation'],
  match: 98,
  year: '2023',
  genre: ['AI', 'Automation'],
  category: 'Project',
};

const p_morse: Project = {
  id: 'morse',
  title: 'Morse Code Decoder',
  description: 'Hardware project utilizing CD4017, CD4013, logic gates, and a debounce circuit to decode Morse code inputs into visual output.',
  imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', // Circuit Board Macro
  techStack: ['Electronics', 'Embedded', 'Logic Gates'],
  match: 92,
  year: '2022',
  genre: ['Hardware', 'Circuit'],
  category: 'Project',
};

const p_parking: Project = {
  id: 'parking',
  title: 'Automatic Parking System',
  description: 'Sensor-based automated parking control prototype designed to manage vehicle entry and exit efficiently.',
  imageUrl: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=800&auto=format&fit=crop', // Parking Garage / Sensors
  techStack: ['Embedded', 'Sensors', 'C++'],
  match: 90,
  year: '2022',
  genre: ['Hardware', 'IoT'],
  category: 'Project',
};

const p_battery: Project = {
  id: 'battery',
  title: 'Battery Level Indicator',
  description: 'Electronic circuit design that visually displays real-time battery charge percentage using multi-level LED indicators.',
  imageUrl: 'https://images.unsplash.com/photo-1619641901614-5f5021e5b4c1?q=80&w=800&auto=format&fit=crop', // AA Batteries / Electronics
  techStack: ['Electronics', 'Circuits'],
  match: 88,
  year: '2021',
  genre: ['Hardware', 'Electronics'],
  category: 'Project',
};

const p_taser: Project = {
  id: 'taser',
  title: 'Taser Device Prototype',
  description: 'Miniature high-voltage prototype developed for academic research into academic safety mechanisms.',
  imageUrl: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=800&auto=format&fit=crop', // High Voltage Spark / Coil
  techStack: ['Electronics', 'HV'],
  match: 85,
  year: '2021',
  genre: ['Hardware', 'Prototype'],
  category: 'Project',
};

const p_flight: Project = {
  id: 'flight',
  title: 'Flight Management System',
  description: 'Console-based flight management simulation built using Data Structures to handle scheduling, passenger lists, and routes.',
  imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop', // Airplane Wing View
  techStack: ['Java', 'DSA', 'OOP'],
  match: 96,
  year: '2022',
  genre: ['Software', 'Simulation'],
  category: 'Project',
};

// --- CATEGORIZED EXPORTS ---

export const SOFTWARE_PROJECTS: Project[] = [
  p_sih_llm,
  p_sih_file,
  p_flight,
  p_yt_skip,
  p_jarvis
];

export const HARDWARE_PROJECTS: Project[] = [
  p_morse,
  p_parking,
  p_battery,
  p_taser
];

// HERO IS NOW PERSONAL BRANDING
export const HERO_PROJECT: Project = {
  id: 'hero-main',
  title: 'VEDANT NIKUMBH',
  description: '', // Cleared as requested
  imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop', // Matrix/Tech BG
  videoUrl: HERO_VIDEO_OPTIONS[0].url, // Default to first option
  techStack: [],
  match: 100,
  year: '2024',
  duration: '',
  genre: ['Full Stack', 'Electronics'],
  category: 'Profile',
};

export const MY_PROFILE: Project = {
  id: 'profile-main',
  title: 'VEDANT NIKUMBH',
  description: 'I build smart solutions inspired by real problems.',
  imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop', // Professional Team / Desk
  techStack: ['Python', 'Django', 'React', 'AI'],
  match: 100,
  year: '2024',
  duration: '5+ Years Exp',
  genre: ['Python Developer', 'Tech Lead'],
  category: 'Profile',
};

export const EXPERIENCE: Project[] = [
  {
    id: 'exp-anvl',
    title: 'Intern - ANVL',
    description: `ANVL, Ambernath | 1 Month

• Assisted in basic engineering and technical tasks
• Supported ongoing projects under supervision
• Learned industry workflow, tools, and safety protocols
• Worked with team members to complete assigned tasks
• Gained hands-on exposure to real industrial environment`,
    // Cinematic Armoured Vehicle Image
    imageUrl: 'https://images.unsplash.com/photo-1598556776374-13c5ccb59432?q=80&w=800&auto=format&fit=crop', 
    techStack: ['Engineering', 'Teamwork', 'Safety'],
    match: 90,
    year: '1 Month',
    genre: ['Internship', 'Industrial'],
    category: 'Experience',
  }
];

export const EDUCATION: Project[] = [
  {
    id: 'edu-vit',
    title: 'B.Tech Electronics & CS',
    description: 'Vidyalankar Institute of Technology, Mumbai\n2024 – 2028 | Pursuing (Second Year)',
    // Modern Glass Architecture University Building
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', 
    techStack: ['Electronics', 'Comp Sci', 'Embedded'],
    match: 100,
    year: '2024-2028',
    genre: ['Education', 'Degree'],
    category: 'Education',
  }
];

export const CERTIFICATIONS: Project[] = [
  {
    id: 'cert-java',
    title: 'Java Certification',
    description: 'Issued by NPTEL\n\nCompleted Java programming fundamentals, Object Oriented Programming (OOP) concepts, and practical implementation details.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Coding/Code Editor
    techStack: ['Java', 'OOP', 'NPTEL'],
    match: 95,
    year: 'Certified',
    genre: ['NPTEL', 'Programming'],
    category: 'Certification',
  },
  {
    id: 'cert-chatbot',
    title: 'Chatbot with Chatfuel',
    description: 'Issued by Chatfuel\n\nI’m happy to share that I’ve obtained a new certification: Create a Lead Generation Messenger Chatbot using Chatfuel. Learned to build automated conversational flows.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop', // Digital Connection / Nodes
    techStack: ['Chatfuel', 'AI', 'Automation'],
    match: 90,
    year: 'Certified',
    genre: ['AI', 'Chatbot'],
    category: 'Certification',
  },
  {
    id: 'cert-wordpress',
    title: 'Build Website with WordPress',
    description: 'Issued by Coursera\n\nI’m happy to share that I’ve obtained a new certification: Build a Website with WordPress! Hands-on project learning to create a full website.',
    imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop', // CMS / Web Layout
    techStack: ['WordPress', 'Web Design'],
    match: 85,
    year: 'Project',
    genre: ['Web', 'CMS'],
    category: 'Certification',
  },
  {
    id: 'cert-tcs',
    title: 'TCS iON Career Edge',
    description: 'Issued by TCS iON\n\nYoung Professional training covering communication skills, soft skills, business etiquette, resume writing, interview skills, and IT fundamentals.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop', // Handshake / Business
    techStack: ['Soft Skills', 'Business', 'IT'],
    match: 92,
    year: 'Certified',
    genre: ['Professional', 'Soft Skills'],
    category: 'Certification',
  },
  {
    id: 'cert-drone',
    title: 'Drone Technology',
    description: 'Issued by Defence Ministry of India\n\nCompleted drone technology training covering basics of UAVs, aerodynamics, and practical operation/flight training.',
    imageUrl: 'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800&auto=format&fit=crop', // Drone Flight
    techStack: ['UAV', 'Hardware', 'Flight'],
    match: 98,
    year: 'Certified',
    genre: ['Hardware', 'Defence'],
    category: 'Certification',
  },
  {
    id: 'cert-matlab',
    title: 'MATLAB Fundamentals',
    description: 'Issued by MathWorks\n\nFundamental training in MATLAB programming, mathematical modeling, data analysis, and simulation.',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop', // Mathematics / Graph
    techStack: ['MATLAB', 'Simulation'],
    match: 88,
    year: 'Certified',
    genre: ['Programming', 'Math'],
    category: 'Certification',
  },
];

export const ONGOING_CERTIFICATIONS: Project[] = [
  {
    id: 'cert-ongoing-web',
    title: 'Web Development',
    description: 'Currently learning full-stack web development including HTML, CSS, JavaScript, React, backend basics, and deployment strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop', // Web Code
    techStack: ['HTML/CSS', 'React', 'Node.js'],
    match: 65, // Use match as progress percentage
    year: 'In Progress',
    genre: ['Web', 'Ongoing'],
    category: 'Certification',
    duration: 'In Progress'
  },
  {
    id: 'cert-ongoing-hack',
    title: 'Ethical Hacking',
    description: 'Learning fundamentals of cybersecurity, penetration testing, system vulnerabilities, network scanning, and ethical hacking tools.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop', // Hacker / Hooded Figure
    techStack: ['Security', 'Linux', 'Network'],
    match: 40, // Use match as progress percentage
    year: 'In Progress',
    genre: ['Security', 'Ongoing'],
    category: 'Certification',
    duration: 'In Progress'
  }
];

export const SKILLS: Project[] = [
  {
    id: 'skill-python',
    title: 'Python',
    description: 'Advanced proficiency in Python for Data Science, AI, and Backend development.',
    imageUrl: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=600&auto=format&fit=crop',
    icon: 'https://cdn.simpleicons.org/python/white',
    color: 'from-blue-900 to-yellow-700',
    techStack: ['Django', 'FastAPI', 'Pandas'],
    match: 99,
    year: 'Advanced',
    genre: ['Language', 'Backend'],
    category: 'Skill',
  },
  {
    id: 'skill-java',
    title: 'Java',
    description: 'Enterprise level Java development with Spring Boot and Microservices architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?q=80&w=600&auto=format&fit=crop',
    icon: 'https://cdn.simpleicons.org/openjdk/white',
    color: 'from-red-900 to-orange-800',
    techStack: ['Spring Boot', 'Hibernate', 'Android'],
    match: 95,
    year: 'Expert',
    genre: ['Language', 'Enterprise'],
    category: 'Skill',
  },
  {
    id: 'skill-db',
    title: 'Database',
    description: 'Design and optimization of SQL and NoSQL databases.',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop',
    icon: 'https://cdn.simpleicons.org/postgresql/white',
    color: 'from-blue-800 to-indigo-900',
    techStack: ['PostgreSQL', 'MongoDB', 'Redis'],
    match: 98,
    year: 'Advanced',
    genre: ['Data', 'Storage'],
    category: 'Skill',
  },
  {
    id: 'skill-llm',
    title: 'LLM',
    description: 'Building and fine-tuning Large Language Model applications.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    icon: 'https://cdn.simpleicons.org/openai/white',
    color: 'from-green-900 to-emerald-700',
    techStack: ['LangChain', 'LlamaIndex', 'HuggingFace'],
    match: 99,
    year: 'Expert',
    genre: ['AI', 'Future'],
    category: 'Skill',
  },
  {
    id: 'skill-embedded',
    title: 'Embedded Systems',
    description: 'Programming and hardware interfacing for embedded devices.',
    imageUrl: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=600&auto=format&fit=crop',
    icon: 'https://cdn.simpleicons.org/arduino/white',
    color: 'from-teal-900 to-cyan-800',
    techStack: ['Arduino', 'Raspberry Pi', 'RTOS'],
    match: 90,
    year: 'Intermediate',
    genre: ['Hardware', 'IoT'],
    category: 'Skill',
  },
  {
    id: 'skill-c',
    title: 'C Programming',
    description: 'Low-level systems programming and algorithm optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop',
    icon: 'https://cdn.simpleicons.org/c/white',
    color: 'from-blue-900 to-blue-600',
    techStack: ['System', 'Drivers', 'Memory'],
    match: 92,
    year: 'Advanced',
    genre: ['Language', 'System'],
    category: 'Skill',
  },
  {
    id: 'skill-frontend',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1618477247222-ac5912454582?q=80&w=600&auto=format&fit=crop',
    icon: 'https://cdn.simpleicons.org/react/white',
    color: 'from-purple-900 to-pink-800',
    techStack: ['React', 'Next.js', 'Tailwind'],
    match: 98,
    year: 'Expert',
    genre: ['Web', 'UI/UX'],
    category: 'Skill',
  },
];

export const CONTACT: Project[] = [
  {
    id: 'contact1',
    title: 'LinkedIn',
    description: 'Connect with me professionally. View my full work history and endorsements.',
    imageUrl: 'https://images.unsplash.com/photo-1611944212129-29990460f752?q=80&w=800&auto=format&fit=crop',
    techStack: ['Connect', 'Network'],
    match: 100,
    year: 'Social',
    genre: ['Contact', 'Professional'],
    category: 'Contact',
    link: 'https://www.linkedin.com/in/vedant-nikumbh-27612a329/',
    icon: 'https://cdn.simpleicons.org/linkedin/white',
    color: '#0077b5', // LinkedIn Blue
  },
  {
    id: 'contact2',
    title: 'GitHub',
    description: 'Check out my open source contributions and personal coding projects.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop',
    techStack: ['Code', 'Repos'],
    match: 100,
    year: 'Code',
    genre: ['Contact', 'Dev'],
    category: 'Contact',
    link: 'https://github.com/Lonewolf152006',
    icon: 'https://cdn.simpleicons.org/github/white',
    color: '#ffffff', // GitHub White
  },
  {
    id: 'contact3',
    title: 'Email Me',
    description: 'hello@netfolio.dev | Reach out for collaboration or job opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop',
    techStack: ['Email', 'Hire'],
    match: 100,
    year: 'Direct',
    genre: ['Contact', 'Message'],
    category: 'Contact',
    link: 'mailto:hello@netfolio.dev',
    icon: 'https://cdn.simpleicons.org/gmail/white',
    color: '#ea4335', // Gmail Red
  },
];
