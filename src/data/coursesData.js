import reactImg from "../assets/images/React.png";
import jsImg from "../assets/images/JavaScript.png";
import nodeJsImg from "../assets/images/NodeJs.png";
import tsImg from "../assets/images/TypeScript.png";
import pythonImg from "../assets/images/Python.png";
import nextJsImg from "../assets/images/NextJs.png";
import dockerImg from "../assets/images/Docker.png";
import mongoDBImg from "../assets/images/MongoDB.png";

//Data of CoursesCard
const coursesData = [
  {
    id: 1,
    slug: "react-fundamentals",
    name: "React Fundamentals",
    instructor: "John Carter",
    oldPrice: 89.99,
    isFree: true,
    imgSrc: reactImg,
    lessons: [
      {
        id: 1,
        title: "Introduction to React",
        description:
          "Understand what React is and why it is used to build modern user interfaces.",
      },
      {
        id: 2,
        title: "Components and JSX",
        description:
          "Learn how to create reusable components and write JSX syntax effectively.",
      },
      {
        id: 3,
        title: "Props and Data Flow",
        description:
          "Discover how data is passed between components using props.",
      },
      {
        id: 4,
        title: "State Management Basics",
        description:
          "Understand how state works and how it controls dynamic UI behavior.",
      },
    ],
  },
  {
    id: 2,
    slug: "advanced-javascript",
    name: "Advanced JavaScript",
    instructor: "Emma Wilson",
    oldPrice: 74.99,
    isFree: true,
    imgSrc: jsImg,
    lessons: [
      {
        id: 1,
        title: "Closures Explained",
        description:
          "Learn how closures work and how they preserve scope in JavaScript.",
      },
      {
        id: 2,
        title: "Asynchronous JavaScript",
        description:
          "Understand callbacks, promises, and async/await patterns.",
      },
      {
        id: 3,
        title: "Event Loop Deep Dive",
        description:
          "See how JavaScript handles concurrency using the event loop.",
      },
      {
        id: 4,
        title: "Modern ES6+ Features",
        description:
          "Explore destructuring, spread operator, and modern syntax improvements.",
      },
    ],
  },
  {
    id: 3,
    slug: "nodejs-bootcamp",
    name: "Node.js Bootcamp",
    instructor: "Michael Brown",
    oldPrice: 99.99,
    isFree: true,
    imgSrc: nodeJsImg,
    lessons: [
      {
        id: 1,
        title: "Node.js Architecture",
        description:
          "Understand how Node.js works under the hood and its event-driven model.",
      },
      {
        id: 2,
        title: "Building a Server",
        description: "Create a basic HTTP server using Node.js core modules.",
      },
      {
        id: 3,
        title: "Express Basics",
        description: "Learn how to build APIs using Express framework.",
      },
      {
        id: 4,
        title: "Middleware System",
        description:
          "Understand how middleware works and how to use it effectively.",
      },
    ],
  },
  {
    id: 4,
    slug: "typescript-complete-guide",
    name: "TypeScript Complete Guide",
    instructor: "Sophia Davis",
    oldPrice: 64.99,
    isFree: true,
    imgSrc: tsImg,
    lessons: [
      {
        id: 1,
        title: "TypeScript Basics",
        description:
          "Learn static typing and why TypeScript improves JavaScript.",
      },
      {
        id: 2,
        title: "Interfaces and Types",
        description:
          "Understand how to define object structures using interfaces and types.",
      },
      {
        id: 3,
        title: "Generics Introduction",
        description: "Create reusable and flexible components using generics.",
      },
      {
        id: 4,
        title: "TypeScript with React",
        description:
          "Combine TypeScript with React for safer component development.",
      },
    ],
  },
  {
    id: 5,
    slug: "python-for-beginners",
    name: "Python for Beginners",
    instructor: "Daniel Thompson",
    oldPrice: 79.99,
    isFree: true,
    imgSrc: pythonImg,
    lessons: [
      {
        id: 1,
        title: "Python Syntax Basics",
        description: "Learn variables, data types, and basic syntax in Python.",
      },
      {
        id: 2,
        title: "Control Flow",
        description: "Understand if statements, loops, and logic control.",
      },
      {
        id: 3,
        title: "Functions in Python",
        description: "Learn how to create reusable functions and modular code.",
      },
      {
        id: 4,
        title: "Working with Data",
        description: "Handle lists, dictionaries, and basic data structures.",
      },
    ],
  },
  {
    id: 6,
    slug: "docker-essentials",
    name: "Docker Essentials",
    instructor: "Olivia Anderson",
    oldPrice: 69.99,
    isFree: true,
    imgSrc: dockerImg,
    lessons: [
      {
        id: 1,
        title: "What is Docker?",
        description:
          "Understand containerization and why Docker is used in modern development.",
      },
      {
        id: 2,
        title: "Docker Images and Containers",
        description:
          "Learn the difference between images and running containers.",
      },
      {
        id: 3,
        title: "Dockerfile Basics",
        description: "Create your first Dockerfile and build images.",
      },
      {
        id: 4,
        title: "Docker Compose",
        description: "Manage multi-container applications with Docker Compose.",
      },
    ],
  },
  {
    id: 7,
    slug: "nextjs-in-pratice",
    name: "Next.js in Practice",
    instructor: "James Walker",
    oldPrice: 84.99,
    isFree: true,
    imgSrc: nextJsImg,
    lessons: [
      {
        id: 1,
        title: "Introduction to Next.js",
        description: "Understand server-side rendering and Next.js advantages.",
      },
      {
        id: 2,
        title: "File-based Routing",
        description: "Learn how routing works automatically in Next.js.",
      },
      {
        id: 3,
        title: "API Routes",
        description: "Build backend endpoints directly inside Next.js.",
      },
      {
        id: 4,
        title: "Static vs Dynamic Rendering",
        description: "Understand SSR, SSG, and ISR concepts.",
      },
    ],
  },
  {
    id: 8,
    slug: "mongodb-masterclass",
    name: "MongoDB Masterclass",
    instructor: "Charlotte Harris",
    oldPrice: 59.99,
    isFree: true,
    imgSrc: mongoDBImg,
    lessons: [
      {
        id: 1,
        title: "Introduction to MongoDB",
        description: "Learn what NoSQL databases are and how MongoDB works.",
      },
      {
        id: 2,
        title: "CRUD Operations",
        description: "Create, read, update, and delete documents in MongoDB.",
      },
      {
        id: 3,
        title: "Schema Design",
        description: "Design efficient document structures for applications.",
      },
      {
        id: 4,
        title: "Indexes and Performance",
        description: "Improve query performance using indexes.",
      },
    ],
  },
];

export default coursesData;
