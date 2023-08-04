import {
  frontend,
  mentor,
  ux,
  javascript,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  git,
  figma,
  prs,
  etch,
  portfolio,
  capstone,
  timer,
  top,
  seamfix,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Mentor/Facilitator",
    icon: mentor,
  },
  {
    title: "Graphics Designer",
    icon: ux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Development Facilitator",
    company_name: "Seamfix NextGen Academy",
    icon: seamfix,
    iconBg: "#333333",
    date: "Feb 2023 - Till Date",
  },
  {
    title: "Front-End Development Mentor (Volunteer)",
    company_name: "TOP Developers",
    icon: top,
    iconBg: "#333333",
    date: "Mar 2022 - Till Date",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Capstone Project",
    description:
      "The capstone project is a seminar website for an upcoming seminar called TOP Developers seminar for the year 2023.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: capstone,
    repo: "https://github.com/phildeoner/Capstone-Project",
    demo: "https://phildeoner.github.io/Capstone-Project/",
  },
  {
    id: "project-2",
    name: "Portfolio Project",
    description:
      "A simple protfolio with multiple sections containg owners information.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "2023 Countdown Timer",
    description: `A countdown timer for the year 2023, which will run all through the year and stops once the year is ended.`,
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: timer,
    repo: "https://github.com/Phildeoner/2023-Countdown",
    demo: "https://phildeoner.github.io/2023-Countdown/",
  },
  {
    id: "project-4",
    name: "Rock Paper Scissors",
    description:
      "This is a rock paper scissors game, which accepts inputs on click of a button and compare it to a computer input which is randomly generated.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: prs,
    repo: "https://github.com/Phildeoner/Game-PRS-Complete",
    demo: "https://phildeoner.github.io/Game-PRS-Complete/",
  },
  {
    id: "project-5",
    name: "Etch a Sketch",
    description:
      "This is a sketch board designed for sketching designs and writing.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: etch,
    repo: "https://github.com/Phildeoner/Project-Etch-A-Sketch",
    demo: "https://phildeoner.github.io/Project-Etch-A-Sketch/",
  },
];

export { services, technologies, experiences, projects };
