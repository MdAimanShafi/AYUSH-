export interface ProfileInfo {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  bio: string;
  education: {
    degree: string;
    field: string;
    university: string;
    location: string;
    period: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    linkedin: string;
    github?: string;
  };
  primaryInterest: string;
  aboutHighlights: Array<{
    title: string;
    subtitle: string;
    description: string;
  }>;
}

export const profileData: ProfileInfo = {
  name: "Ayush Kumar",
  role: "Computer Science & Engineering Student",
  headline: "Hi, I'm Ayush Kumar.",
  tagline: "I solve problems and build for the future.",
  bio: "B.Tech CSE student at Kalinga University, passionate about problem-solving, technology, and continuously learning how to build better digital experiences.",
  education: {
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    university: "Kalinga University",
    location: "Raipur, Chhattisgarh",
    period: "2024–2028",
  },
  contact: {
    phone: "+91 7903686729",
    phoneFormatted: "+91 79036 86729",
    email: "ayushkr82678@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-56352632a/",
    github: "https://github.com",
  },
  primaryInterest: "Problem-solving",
  aboutHighlights: [
    {
      title: "Education",
      subtitle: "B.Tech CSE · Kalinga University",
      description: "Pursuing undergraduate studies with strong emphasis on core computing principles and mathematical logic.",
    },
    {
      title: "Core Interest",
      subtitle: "Problem-Solving & Algorithms",
      description: "Analyzing computational challenges, breaking complexity into modular steps, and finding structured solutions.",
    },
    {
      title: "Current Focus",
      subtitle: "Foundations & Applied Practice",
      description: "Actively studying data structures, object-oriented programming, and modern software development practices.",
    },
  ],
};
