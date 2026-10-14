export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  approach: string;
  technologies: string[];
  category: "Algorithms" | "Tools" | "Web Applications" | "Academic";
  githubUrl?: string;
  demoUrl?: string;
  hasInteractiveDemo?: boolean;
  interactiveDemoType?: "sorting" | "logic" | "none";
  featured: boolean;
  status: "Completed" | "In Active Development" | "Planned / Draft";
  isDraft?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "algo-visualizer",
    title: "Sorting & Search Algorithm Visualizer",
    subtitle: "Interactive step-by-step visualizer for core sorting algorithms",
    description: "An educational web application that visually demonstrates how sorting algorithms compare elements, swap values, and converge to sorted order.",
    problemSolved: "Abstract algorithmic concepts and time-complexity trade-offs can be challenging to grasp through static pseudocode alone.",
    approach: "Built modular visualization runners with configurable speed and array size. Tracks active comparison indices and swap operations dynamically.",
    technologies: ["TypeScript", "React", "Canvas / DOM", "Algorithms"],
    category: "Algorithms",
    githubUrl: "https://github.com",
    demoUrl: "#interactive-demo",
    hasInteractiveDemo: true,
    interactiveDemoType: "sorting",
    featured: true,
    status: "Completed",
    isDraft: false,
  },
  {
    id: "computational-logic-engine",
    title: "Computational Number Theory & Bit Engine",
    subtitle: "Exploration tool for prime factorization, modular arithmetic, and binary bitwise operations",
    description: "A focused computational utility created to practice modular arithmetic, Euclidean GCD, Sieve of Eratosthenes, and bitwise bit-manipulation patterns.",
    problemSolved: "Provides immediate visual feedback when testing mathematical invariants, prime factor trees, and bit shift operations.",
    approach: "Implemented pure functional utility algorithms with comprehensive test cases and edge condition checks (negative integers, zero, large integers).",
    technologies: ["TypeScript", "Mathematics", "Problem Solving", "React"],
    category: "Tools",
    githubUrl: "https://github.com",
    demoUrl: "#interactive-demo",
    hasInteractiveDemo: true,
    interactiveDemoType: "logic",
    featured: true,
    status: "Completed",
    isDraft: false,
  },
  {
    id: "student-portfolio-platform",
    title: "Personal Digital Portfolio & 3D Interactive Space",
    subtitle: "High-performance portfolio built with Three.js, React, and Tailwind CSS",
    description: "Personal portfolio website engineered to showcase problem-solving philosophy, academic coursework at Kalinga University, and technical milestones.",
    problemSolved: "Traditional resume formats fail to communicate real-time interactivity, spatial design awareness, and algorithmic passion to modern recruiters.",
    approach: "Designed a lightweight 3D Three.js experience with exponential damping, procedural lighting, WCAG AA compliance, and full keyboard accessibility.",
    technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Motion"],
    category: "Web Applications",
    githubUrl: "https://github.com",
    demoUrl: "#",
    featured: true,
    status: "Completed",
    isDraft: false,
  },
  {
    id: "project-template-draft",
    title: "Upcoming Academic Mini-Project (Draft Template)",
    subtitle: "Easily editable template for Ayush's future semester projects",
    description: "Reserved slot for future semester coursework projects (such as Database Management Systems or Operating Systems simulation).",
    problemSolved: "Structured to document problem statement, database schema or system architecture, and performance results.",
    approach: "Document the requirements, design ER/flow diagrams, implement core algorithms, and conduct validation tests.",
    technologies: ["SQL / C++", "Data Structures", "System Design"],
    category: "Academic",
    githubUrl: "https://github.com",
    featured: false,
    status: "Planned / Draft",
    isDraft: true,
  },
];
