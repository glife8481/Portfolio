export const profile = {
  name: "Pranav Kulkarni",
  initials: "PK",
  email: "pk6437110@gmail.com",
  github: "https://github.com/glife8481",
  linkedin: "https://www.linkedin.com/in/pranav-kulkarni-pk8481",
  // Add your LeetCode profile URL here; the LeetCode section stays hidden while this is empty.
  leetcode: "",
  location: "Nipani, Karnataka",
  education: "BMSCE · B.E. Computer Science and Engineering · Expected 2029",
  diploma: "Diploma in CSE · Vasantrao Potdar Polytechnic · CGPA 9.55/10",
  tagline: "Software Engineer · Full Stack · Applied AI",
  intro:
    "I build full-stack applications with Python, Java, React and TypeScript, and I like the hard parts: security, machine learning and making systems behave correctly under pressure.",
  about:
    "I’m Pranav Kulkarni, a Computer Science and Engineering student at B.M.S. College of Engineering, with a Diploma in CSE (CGPA 9.55/10). My main project, BioAuth, replaces passwords with face, voice and spoken-phrase verification, backed by a 49-endpoint FastAPI server and automated security tests. I’m looking for software engineering internships.",
  collaboration:
    "I’m open to software engineering internships, research projects and team builds.",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  { title: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
  { title: "Backend", items: ["FastAPI", "Pydantic", "REST APIs", "SQLite"] },
  {
    title: "AI/ML",
    items: [
      "PyTorch",
      "OpenCV",
      "Computer vision",
      "Speech-to-text",
      "Voice biometrics",
      "LLM APIs",
    ],
  },
  {
    title: "Security",
    items: ["JWT", "OAuth 2.0", "Encryption at rest", "Role-based access"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub Actions", "Docker", "Unit testing"],
  },
  {
    title: "Fundamentals",
    items: ["Data structures", "Object-oriented programming"],
  },
];

// Fill these in from your LeetCode profile and set checkedAt to the date you looked.
export const leetcodeStats: {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  checkedAt: string;
} | null = null;

export const bioauth = {
  name: "BioAuth",
  subtitle: "Face and voice biometric passwordless login",
  description:
    "A full-stack login system where every sign-in must pass three checks: a face match, a voice match and a spoken secret phrase.",
  problem:
    "Each biometric alone has a weakness: a photo can target a face check and a recording can target a voice check. BioAuth makes an attacker beat a face match, a speaker match and a secret phrase in the same login.",
  features: [
    "Face verification with InsightFace embeddings across several camera frames, with image quality and distinct-frame checks.",
    "Voice verification with SpeechBrain ECAPA speaker embeddings, and the secret phrase transcribed with faster-whisper and fuzzy-matched.",
    "49 REST endpoints with JWT sessions, three-tier role-based access, per-client rate limits and progressive lockouts of 10 minutes, 30 minutes and 2 hours.",
    "Face and voice templates encrypted at rest with Fernet; secret phrases stored only as hashes and HMAC tokens; consent at enrollment and automatic retention cleanup.",
    "Google sign-in, an admin console with audit logs, and a Gemini-powered security assistant with fallback across three AI providers.",
  ],
  architecture:
    "React and TypeScript client → FastAPI REST API → SQLite with encrypted templates. InsightFace, SpeechBrain and faster-whisper run on CUDA GPUs with a CPU fallback.",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "PyTorch",
    "InsightFace",
    "SpeechBrain",
    "faster-whisper",
    "SQLite",
    "JWT",
    "GitHub Actions",
    "Docker",
  ],
  quality:
    "60+ automated backend tests cover the security controls, API access rules, the biometric flow and the voice pipeline, and run in GitHub Actions on every push.",
  limits:
    "Next steps I’d build: challenge-response liveness with a random phrase per login, and accuracy benchmarking of false accept and false reject rates.",
  walkthrough: "https://claude.ai/artifact/MZX1retNG13abDoEU6UzZZ",
  source: "Source code is private and available to reviewers on request.",
  screenshots: [
    {
      src: "/media/bioauth/home.jpg",
      alt: "BioAuth home page introducing face and voice login",
      label: "Home",
    },
    {
      src: "/media/bioauth/login.jpg",
      alt: "BioAuth login page with face and voice capture",
      label: "Login",
    },
    {
      src: "/media/bioauth/admin.jpg",
      alt: "BioAuth admin console with user management and logs, using fictional sample data",
      label: "Admin console",
    },
  ],
};

export const pawcare = {
  name: "PawCare",
  subtitle: "Stray animal rescue and adoption · team project",
  description:
    "A team-built community platform (4 members) that connects people who report stray or injured animals with volunteers, shelters and adopters.",
  teamSize: 4,
  myRole:
    "Testing and quality assurance. I tested the app end to end and found key flaws: new accounts were never verified, so the app could not tell legitimate users from fake ones; sign-up gave new users no way to choose their role (reporter, volunteer, shelter); uploaded animal photos did not display; and the Leaflet map made it hard to pin an animal’s exact location. I reported these to the team, and fixes are in progress. I also worked on the frontend design.",
  stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Leaflet"],
  repo: "https://github.com/shobhitguptacs/pawcare",
  live: "https://pawcare-v9rzfscq.manus.space",
  screenshot: {
    src: "/media/pawcare/pawcare-assistance-map.png",
    alt: "PawCare assistance map and priority-ranked rescue requests",
  },
};

export const otherProjects = [
  {
    name: "Facial Emotion Recognition",
    description:
      "A computer vision application that detects faces and classifies their emotions in real time.",
    tags: ["Python", "Machine learning", "Computer vision"],
  },
  {
    name: "House Price Prediction",
    description:
      "Collecting, cleaning and analysing real estate data, with visualisations of what drives prices, as the base for a prediction model. In progress.",
    tags: ["Python", "Data analysis", "Visualisation"],
  },
  {
    name: "Exam Seating Arrangement System",
    description:
      "A tool that handles exam scheduling and generates seating arrangements automatically.",
    tags: ["Scheduling", "Allocation logic"],
  },
];

export const certificationsFolder =
  "https://github.com/glife8481/Portfolio/tree/main/public/certificates";

export const certifications = [
  {
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "Aug 2026",
    file: "/certificates/Infosys-Springboard-Artificial-Intelligence.pdf",
  },
  {
    name: "Cyber Security Foundation",
    issuer: "Infosys Springboard",
    date: "Aug 2026",
    file: "/certificates/Infosys-Springboard-Cyber-Security-Foundation.pdf",
  },
  {
    name: "Digital Productivity with AI · score 100%",
    issuer: "UNICEF YuWaah · Passport to Earning",
    date: "Aug 2026",
    file: "/certificates/UNICEF-YuWaah-Digital-Productivity-with-AI.pdf",
  },
];
