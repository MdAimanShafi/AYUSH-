export interface SkillItem {
  name: string;
  category: string;
  focusArea: string;
  statusText: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages being used for academic coursework, logic building, and development.",
    skills: [
      {
        name: "C / C++",
        category: "Programming Languages",
        focusArea: "Structured programming, memory management & pointer logic",
        statusText: "Academic Foundation & Problem-Solving",
        iconName: "Binary",
      },
      {
        name: "Python",
        category: "Programming Languages",
        focusArea: "Scripting, algorithm implementation, rapid prototyping",
        statusText: "Active Practice & Exploration",
        iconName: "Code",
      },
      {
        name: "Java",
        category: "Programming Languages",
        focusArea: "Object-oriented principles, classes, and standard collections",
        statusText: "Core Subject Learning",
        iconName: "Coffee",
      },
    ],
  },
  {
    id: "cs-fundamentals",
    name: "CS Fundamentals",
    description: "Theoretical pillars that define computer architecture and computational complexity.",
    skills: [
      {
        name: "Data Structures",
        category: "CS Fundamentals",
        focusArea: "Arrays, Linked Lists, Stacks, Queues, Trees",
        statusText: "Ongoing Implementation & Analysis",
        iconName: "Boxes",
      },
      {
        name: "Algorithms & Complexity",
        category: "CS Fundamentals",
        focusArea: "Time & Space complexity (Big-O), search, sort, recursion",
        statusText: "Algorithmic Thinking Practice",
        iconName: "Cpu",
      },
      {
        name: "Object-Oriented Programming",
        category: "CS Fundamentals",
        focusArea: "Encapsulation, abstraction, inheritance, polymorphism",
        statusText: "Software Design Fundamentals",
        iconName: "Layers",
      },
    ],
  },
  {
    id: "problem-solving",
    name: "Problem-Solving",
    description: "Methodological approach to breaking down complex requirements into solvable modules.",
    skills: [
      {
        name: "Analytical Thinking",
        category: "Problem-Solving",
        focusArea: "Decomposing problems into clear sub-tasks and edge conditions",
        statusText: "Primary Passion",
        iconName: "Target",
      },
      {
        name: "Pattern Recognition",
        category: "Problem-Solving",
        focusArea: "Identifying algorithmic patterns (two-pointers, sliding window, divide & conquer)",
        statusText: "Active Study",
        iconName: "Network",
      },
      {
        name: "Debugging & Verification",
        category: "Problem-Solving",
        focusArea: "Tracing test vectors, dry-running code, locating invariant violations",
        statusText: "Hands-on Practice",
        iconName: "CheckCircle2",
      },
    ],
  },
  {
    id: "dev-tools",
    name: "Development Tools",
    description: "Standard developer environment and workflow utilities.",
    skills: [
      {
        name: "Git & Version Control",
        category: "Development Tools",
        focusArea: "Repository setup, branching, commit discipline",
        statusText: "Practical Familiarity",
        iconName: "GitBranch",
      },
      {
        name: "Linux / Terminal CLI",
        category: "Development Tools",
        focusArea: "Bash commands, file system navigation, build processes",
        statusText: "Daily Developer Environment",
        iconName: "Terminal",
      },
      {
        name: "VS Code & Debuggers",
        category: "Development Tools",
        focusArea: "Extensions, breakpoints, workspace configuration",
        statusText: "Primary IDE",
        iconName: "Monitor",
      },
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Building modern, accessible, and responsive user interfaces.",
    skills: [
      {
        name: "HTML5 & Semantic Markup",
        category: "Web Development",
        focusArea: "Accessible document structure, SEO essentials",
        statusText: "Foundational Standard",
        iconName: "FileCode",
      },
      {
        name: "Modern CSS & Tailwind",
        category: "Web Development",
        focusArea: "Flexbox, CSS Grid, responsive design, dark mode",
        statusText: "Styling & Responsive UI",
        iconName: "Palette",
      },
      {
        name: "JavaScript & TypeScript Basics",
        category: "Web Development",
        focusArea: "DOM manipulation, ES6+ syntax, asynchronous fetching",
        statusText: "Interactive Web Foundations",
        iconName: "Sparkles",
      },
    ],
  },
];
