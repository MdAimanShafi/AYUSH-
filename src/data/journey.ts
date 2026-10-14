export interface JourneyMilestone {
  id: string;
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  type: "Education" | "Milestone" | "Continuous Focus";
  description: string;
  highlights: string[];
  link?: string;
  linkText?: string;
}

export const journeyData: JourneyMilestone[] = [
  {
    id: "btech-kalinga",
    year: "2024–2028",
    period: "2024 – 2028 · 4-Year Undergraduate",
    title: "B.Tech in Computer Science and Engineering",
    institution: "Kalinga University",
    location: "Raipur, Chhattisgarh",
    type: "Education",
    description: "Pursuing Bachelor of Technology with focus on computer science theory, algorithms, software engineering principles, and systems architecture.",
    highlights: [
      "Core coursework in Engineering Mathematics, Object-Oriented Principles, and Discrete Structures",
      "Regular lab coursework in C/C++ memory management, control flow, and data organization",
      "Building a solid academic and practical computing foundation",
    ],
    link: "https://www.linkedin.com/in/ayush-kumar-56352632a/",
    linkText: "Verified on LinkedIn",
  },
  {
    id: "cs-entry",
    year: "2024",
    period: "August 2024",
    title: "Commenced Academic Degree & Computational Thinking",
    institution: "Department of Computer Science & Engineering",
    location: "Kalinga University, Raipur",
    type: "Milestone",
    description: "Started higher education journey in engineering with high dedication to logic development and problem solving.",
    highlights: [
      "Mastered foundational programming constructs, loops, conditionals, and functions",
      "Established daily problem analysis and structured dry-run problem habits",
    ],
  },
  {
    id: "algorithms-practice",
    year: "2024–Present",
    period: "Active Continuous Practice",
    title: "Algorithm Exploration & Interactive Tool Building",
    institution: "Independent Technical Exploration",
    location: "Raipur, Chhattisgarh",
    type: "Continuous Focus",
    description: "Deepening practical knowledge in data structures (arrays, recursion, search, sorting) and interactive web applications.",
    highlights: [
      "Implemented step-by-step visualizers to inspect sorting mechanics in real time",
      "Constructed modular utilities for bitwise computations and mathematical invariants",
      "Focused on clean code formatting, modular architecture, and version control",
    ],
  },
];
