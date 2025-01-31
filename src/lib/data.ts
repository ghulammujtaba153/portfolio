import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "Education",
    hash: "#education",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Cardio Hema Hub",
    description:
      "An advanced health platform providing online appointments with doctors and labs, health record management, real-time chats, video calls, and report viewing. Features include AI classification for CBC and blood reports, a medical recommendation bot, and a RAG chatbot for patient assistance.",
    tags: ["Next.js", "MongoDB", "ReduxToolkit", "Express.js", "AI", "Python", "Socket.io", "ZegoCloud"],
    imageUrl: "/cardio.jpg",
    link: "https://www.youtube.com/watch?v=HW2scKJ5SuQ&feature=youtu.be", // Replace with the actual link
  },
  {
    title: "Freelancing Platform",
    description:
      "A combined freelancing platform featuring voice-controlled navigation for routes, task management, and an intuitive shopping experience. The system integrates seamless payment processing and dynamic route control.",
    tags: ["React", "MongoDB", "Tailwind", "Express.js", "ReactQuery","Alan Ai"],
    imageUrl: "/freelance.png",
    link: "https://www.youtube.com/watch?v=qei8Ex77XgQ", // Replace with the actual link
  },
  {
    title: "Laundromat Scheduling System",
    description:
      "A scheduling platform for laundromats that allows customers to book time slots for laundry services and make secure payments via Stripe. Includes admin tools for managing availability, tracking bookings, and generating payment reports.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    imageUrl: "/laudromat.jpg",
    link: "https://youtu.be/Oj1zNetSS9g", // Replace with the actual link
  },
  {
    title: "E-Commerce Website",
    description:
      "A shopping platform for goods featuring a customer dashboard for seamless browsing, cart management, and checkout. Includes an admin dashboard for managing products, orders, and user accounts with real-time data insights.",
    tags: ["React", "MongoDB", "SASS", "Node.js", "Redux"],
    imageUrl: "/ecommerce.png",
    link: "https://youtu.be/kLSdjEBnUsQ", // Replace with the actual link
  },
  {
    title: "Job portal",
    description:
      "A job portal application enabling job posting, shortlisting and managing jobs. It features a user-friendly interface with robust authentication, managing job applications, and seamless responsiveness for mobile and desktop users.",
    tags: ["React.js", "Express.js", "MongoDB", "Tailwind"],
    imageUrl: "/job.png",
    link: "https://www.youtube.com/watch?v=0dB--g130ek", // Replace with the actual link
  },
  {
    title: "Netflix",
    description:
      "A Netflix clone application features a user-friendly interface with robust authentication and seamless responsiveness for mobile and desktop users.",
    tags: ["React.js", "TMD api", "Firsbase", "Tailwind"],
    imageUrl: "/netflix.png",
    link: "https://www.youtube.com/watch?v=0dB--g130ek", // Replace with the actual link
  },
  {
    title: "Dastify",
    description:
      "A Dastify front-end application features a user-friendly interface and seamless responsiveness for mobile and desktop users.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/das.png",
    link: "https://youtu.be/UeT3UdWiogA", // Replace with the actual link
  },
];


export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "Java",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Express",
  "Node.js",
  "Nest.js",
  "Git",
  "Prisma",
  "Rest Api",
  "GraphQL",
  "MySQL",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "React Query",
  "AWS",
  "Docker",
  "Jenkins"
];
