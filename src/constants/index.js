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
  careerly,
  pebywine,
  todo,
  bookchasers,
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
    title: "Fullstack Developer",
    company_name: "Careerli",
    icon: careerly,
    iconBg: "#333333",
    date: "Sept 2023 - Till Date",
  },
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
    name: "Todo App",
    description: `A todo app built with MERN stack which also uses AI to generate todo list on prompt.`,
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
    image: todo,
    repo: "https://github.com/Phildeoner/to-do-app",
    demo: "https://app-todo-mern.netlify.app/",
  },
  {
    id: "project-2",
    name: "E-Commerce Website",
    description:
      "An E-commerce website for sales and purchase of different types and brands of wine",
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
    image: pebywine,
    repo: "https://github.com/Phildeoner/E-commerce-Website",
    demo: "https://pebywines.netlify.app/",
  },
  {
    id: "project-3",
    name: "BookChasers App",
    description:
      "A website for showcasing booking contents, writing, commenting and liking articles and showcasing interviews on books related subjects.",
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
    image: bookchasers,
    repo: "https://github.com/Phildeoner/bookstore-project",
    demo: "https://bookchasers.netlify.app/",
  },
  {
    id: "project-4",
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
    id: "project-5",
    name: "Portfolio Project",
    description:
      "A simple portfolio with multiple sections containing owners information.",
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
    repo: "https://github.com/Phildeoner/my-portfolio",
    demo: "https://phildeoner.github.io/my-portfolio/",
  },
];

export { services, technologies, experiences, projects };
