// ============================================================
// ALL CV DATA – Single source of truth
// ============================================================

export const personalInfo = {
    name: 'Dinidu Thilakshan',
    firstName: 'Dinidu',
    lastName: 'Thilakshan',
    titles: ['Business Analyst', 'Project Manager', 'ICT Undergraduate', 'AI Enthusiast'],
    tagline: 'Passionate about Business Analysis, Project Management, and AI-based solutions.',
    location: 'Sulthanagoda, Matara, Sri Lanka',
    email: 'diniduthilakshan1@gmail.com',
    phone: '+94 71 012 8411',
    linkedin: 'https://www.linkedin.com/in/dinidu-thilakshan-454803287',
    github: 'https://github.com/dinidutshan',
    cvFile: '/mycv.pdf',
    profileImage: '/profile.png',
}

export const aboutMe = {
    bio: [
        `I am an undergraduate at <strong>Rajarata University of Sri Lanka</strong> pursuing a 
    <strong>Bachelor of Information &amp; Communication Technology (BICT Hons)</strong>. 
    I specialize in Business Analysis and Project Management with hands-on experience 
    in leading academic and practical projects.`,
        `I have strong skills in analyzing business requirements, preparing documentation, 
    coordinating teams, and delivering technology-driven solutions. I am highly organized, 
    detail-oriented, and passionate about emerging technologies, especially 
    <strong>AI and web development</strong>.`,
        `I aim to contribute to dynamic, project-focused organizations while continuously 
    growing as a technology professional.`,
    ],
    stats: [
        { num: '5+', label: 'Projects' },
        { num: '3+', label: 'Years Study' },
        { num: '3.03', label: 'GPA' },
    ],
    languages: [
        { flag: '🇱🇰', name: 'Sinhala' },
        { flag: '🇬🇧', name: 'English' },
        { flag: '🇩🇪', name: 'German' },
    ],
    softSkills: [
        { icon: 'fas fa-users', label: 'Leadership' },
        { icon: 'fas fa-handshake', label: 'Teamwork' },
        { icon: 'fas fa-comments', label: 'Communication' },
        { icon: 'fas fa-clock', label: 'Time Management' },
        { icon: 'fas fa-puzzle-piece', label: 'Problem Solving' },
        { icon: 'fas fa-sync-alt', label: 'Adaptability' },
        { icon: 'fas fa-brain', label: 'Critical Thinking' },
    ],
}

export const education = [
    {
        id: 1,
        icon: 'fas fa-university',
        type: 'university',
        year: '2022 – Present',
        active: true,
        degree: 'Bachelor of Information & Communication Technology (BICT Hons)',
        institution: 'Rajarata University of Sri Lanka',
        gpa: '3.03',
        gpaSub: 'Up to 3rd Year, 1st Semester',
        eduType: 'Undergraduate Degree',
    },
    {
        id: 2,
        icon: 'fas fa-certificate',
        type: 'cert',
        year: '2025',
        degree: 'Foundations of Project Management',
        institution: 'University of Moratuwa (CODL)',
        eduType: 'Certificate',
    },
    {
        id: 3,
        icon: 'fas fa-certificate',
        type: 'cert',
        year: '2026',
        degree: 'Agile Project Management',
        institution: 'Alison',
        eduType: 'Certificate',
    },
    {
        id: 4,
        icon: 'fas fa-certificate',
        type: 'cert',
        year: '2026',
        degree: 'Diploma in Modern Project Management',
        institution: 'Alison',
        eduType: 'Diploma',
    },
    {
        id: 5,
        icon: 'fas fa-school',
        type: 'school',
        year: '2018 – 2020',
        degree: 'G.C.E Advanced Level – Engineering Technology Stream',
        institution: 'Rahula College',
        results: '2B & 1C',
        eduType: 'Advanced Level',
    },
]

export const skills = [
    {
        id: 1,
        icon: 'fas fa-code',
        category: 'Programming & Web',
        items: [
            { icon: 'fab fa-java', label: 'Java' },
            { icon: 'fab fa-python', label: 'Python' },
            { icon: 'fas fa-c', label: 'C' },
            { icon: 'fab fa-html5', label: 'HTML' },
            { icon: 'fab fa-css3-alt', label: 'CSS' },
            { icon: 'fab fa-js', label: 'JavaScript' },
            { icon: 'fab fa-php', label: 'PHP' },
        ],
    },
    {
        id: 2,
        icon: 'fas fa-layer-group',
        category: 'Frameworks',
        items: [
            { icon: 'fab fa-react', label: 'React.js', featured: true },
            { icon: 'fas fa-mobile-alt', label: 'Flutter', featured: true },
        ],
    },
    {
        id: 3,
        icon: 'fas fa-code-branch',
        category: 'Version Control',
        items: [
            { icon: 'fab fa-git-alt', label: 'Git' },
            { icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 4,
        icon: 'fas fa-tools',
        category: 'Tools & Technologies',
        items: [
            { icon: 'fas fa-code', label: 'Visual Studio' },
            { icon: 'fab fa-figma', label: 'Figma' },
            { icon: 'fab fa-docker', label: 'Docker' },
            { icon: 'fab fa-jira', label: 'Jira' },
            { icon: 'fas fa-tasks', label: 'ClickUp' },
            { icon: 'fab fa-trello', label: 'Trello' },
        ],
    },
]

export const proficiencies = [
    { label: 'Business Analysis', pct: 90 },
    { label: 'Project Management', pct: 85 },
    { label: 'Web Development', pct: 80 },
    { label: 'AI & Machine Learning', pct: 75 },
    { label: 'UI/UX Design', pct: 70 },
    { label: 'Database Management', pct: 78 },
]

export const projects = [
    {
        id: 1,
        icon: 'fas fa-hands',
        iconClass: 'ai-icon',
        status: 'ongoing',
        statusLabel: 'Ongoing',
        year: '',
        title: 'Sinhala Sign Language Detection System',
        subtitle: 'Performance Enhancement of Sinhala Sign Language Detection',
        desc: 'Improved detection accuracy using advanced image preprocessing and data augmentation techniques. Implemented CNN models for real-time detection with full planning and documentation management.',
        techs: [
            { label: 'Python', cls: 'python' },
            { label: 'OpenCV', cls: '' },
            { label: 'CNN', cls: 'ai' },
        ],
        highlights: ['Image Preprocessing', 'Data Augmentation', 'CNN Models'],
        featured: true,
    },
    {
        id: 2,
        icon: 'fas fa-robot',
        iconClass: 'bot-icon',
        status: 'completed',
        statusLabel: '2025',
        year: '2025',
        title: 'AI-Based Mango Disease Detection',
        subtitle: 'with Smart Chatbot Integration',
        desc: 'CNN model for mango disease classification integrated with an AI chatbot for user guidance. Managed full project lifecycle including requirements analysis and deployment.',
        techs: [
            { label: 'React.js', cls: 'react' },
            { label: 'Flask', cls: 'flask' },
            { label: 'TensorFlow', cls: 'ai' },
            { label: 'MySQL', cls: 'db' },
        ],
        highlights: ['Disease Classification CNN', 'AI Chatbot Integration', 'Full Project Lifecycle'],
    },
    {
        id: 3,
        icon: 'fas fa-briefcase',
        iconClass: 'web-icon',
        status: 'completed',
        statusLabel: '2024',
        year: '2024',
        title: 'Freelancer Platform',
        subtitle: 'Job Posting & Finding System',
        desc: 'A complete freelancer platform with job posting, freelancer search, and admin dashboard. Designed database architecture and full UI documentation.',
        techs: [
            { label: 'PHP', cls: 'php' },
            { label: 'MySQL', cls: 'db' },
            { label: 'Bootstrap', cls: 'bootstrap' },
        ],
        highlights: ['Job Posting System', 'Freelancer Search', 'Admin Dashboard'],
    },
    {
        id: 4,
        icon: 'fas fa-vote-yea',
        iconClass: 'elect-icon',
        status: 'completed',
        statusLabel: '2023',
        year: '2023',
        title: 'Online Election System',
        subtitle: 'Secure Digital Voting Platform',
        desc: 'Secure election platform with authentication, vote casting, and real-time result display. Security-focused system design ensuring integrity and transparency.',
        techs: [
            { label: 'PHP', cls: 'php' },
            { label: 'JavaScript', cls: 'js' },
            { label: 'MySQL', cls: 'db' },
        ],
        highlights: ['Secure Authentication', 'Real-time Results', 'Security-focused Design'],
    },
    {
        id: 5,
        icon: 'fas fa-microchip',
        iconClass: 'iot-icon',
        status: 'completed',
        statusLabel: '2024/2025',
        year: '2024/2025',
        title: 'IoT Projects',
        subtitle: 'Smart Systems Integration',
        iotSubs: [
            { icon: 'fas fa-car', label: 'Smart Car Parking System' },
            { icon: 'fas fa-seedling', label: 'Automated Greenhouse System' },
        ],
        highlights: ['Hardware & Software Integration', 'Workflow Management', 'Technical Documentation'],
        isIot: true,
    },
]

export const leadership = [
    {
        id: 1,
        icon: 'fas fa-star',
        iconClass: 'secretary',
        role: 'Secretary',
        title: 'Association of Technology IT',
        org: 'Rajarata University of Sri Lanka',
        period: '2024 – 2026',
    },
    {
        id: 2,
        icon: 'fas fa-robot',
        iconClass: 'robot',
        role: 'Member',
        title: 'Robotic Society',
        org: 'Rajarata University of Sri Lanka',
    },
    {
        id: 3,
        icon: 'fas fa-video',
        iconClass: 'media',
        role: 'Videographer',
        title: 'FOT Media',
        org: 'Rajarata University of Sri Lanka',
    },
    {
        id: 4,
        icon: 'fas fa-user-tie',
        iconClass: 'rep',
        role: 'Representative',
        title: 'Batch Representative (2020–2021)',
        org: 'Department Representative – IT Department',
    },
    {
        id: 5,
        icon: 'fas fa-chalkboard-teacher',
        iconClass: 'mentor',
        role: 'Mentor',
        title: 'EXTRU 2024 / 2025 Exhibition',
        org: 'Technology Exhibition Mentorship',
    },
    {
        id: 6,
        icon: 'fas fa-hands-helping',
        iconClass: 'volunteer',
        role: 'Volunteer',
        title: '"Sipmansala" Program',
        org: 'Community Volunteer Service',
    },
    {
        id: 7,
        icon: 'fas fa-fist-raised',
        iconClass: 'karate',
        role: 'Member',
        title: 'Faculty Karate Team',
        org: 'Rajarata University of Sri Lanka',
    },
]

export const references = [
    {
        id: 1,
        initials: 'HM',
        name: 'Mr. Husni Mohamed',
        position: 'Lecturer (T)',
        dept: 'Department of ICT',
        uni: 'Rajarata University of Sri Lanka',
        email: 'Hmohamed@tec.rjt.ac.lk',
        phone: '+94 76 638 3023',
        phoneRaw: '+94766383023',
    },
    {
        id: 2,
        initials: 'NT',
        name: 'Dr. Nadeesha Tilakarathne',
        position: 'Lecturer',
        dept: 'Department of ICT',
        uni: 'Rajarata University of Sri Lanka',
        email: 'ngthilak@tec.rjt.ac.lk',
        phone: '+94 71 954 5073',
        phoneRaw: '+94719545073',
    },
]
