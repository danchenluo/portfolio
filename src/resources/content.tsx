import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Danchen",
  lastName: "Luo",
  name: `Danchen Luo`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "luo.danc@northeastern.edu",
  location: "America/Los_Angeles",
  languages: ["English", "Chinese"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional thoughts on software engineering, AI, and building things.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/danchenluo9",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/danchen-luo",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building intelligent systems, one commit at a time</>,
  featured: {
    display: true,
    title: <>Featured Project — EcoSim</>,
    href: "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
  },
  subline: (
    <>
      I'm Danchen, a software engineer based in Seattle, WA. I build full-stack applications,
      multi-agent AI systems, and data-driven tools — currently pursuing my MS in Information Systems
      at Northeastern University.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Seattle, WA`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Danchen is a Seattle-based software engineer with a background spanning applied mathematics,
        finance, and information systems. He builds full-stack applications, multi-agent AI
        simulations, and data pipelines — with a focus on clean architecture, performance, and
        practical AI integration. Before transitioning into software engineering, he spent three
        years at CITIC Securities leading high-stakes bond issuance projects in investment banking.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "CITIC Securities",
        timeframe: "March 2021 – August 2024",
        role: "Senior Associate, Debt Financing — Investment Banking",
        achievements: [
          <>
            Directed end-to-end execution of 30+ bond issuances as Field Lead, with a cumulative
            value exceeding RMB 150B.
          </>,
          <>
            Built high-fidelity capacity and pricing models to deliver quantitative decision support
            for projects exceeding RMB 4B in total issuance.
          </>,
          <>
            Coordinated cross-functional collaboration across up to 20 simultaneous stakeholders,
            driving consensus and approvals for complex bond issuances.
          </>,
          <>
            Enforced post-launch operational compliance through standardized reporting procedures,
            partnering with regulators to mitigate operational risks.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Northeastern University — Seattle, WA",
        description: <>Master of Science in Information Systems (Expected May 2027)</>,
      },
      {
        name: "Johns Hopkins University — Baltimore, MD",
        description: <>Master of Science in Finance (July 2020)</>,
      },
      {
        name: "University of California, San Diego — San Diego, CA",
        description: <>Bachelor of Science in Applied Mathematics (March 2019)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI & Machine Learning",
        description: (
          <>
            LLM Engineering (RAG, Prompt Engineering), LangChain, OpenAI API, LLaMA 3, PyTorch,
            Scikit-learn. Built multi-agent systems with dual-layer LLM architecture and reduced
            inference costs by 4,500×.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Backend & Systems",
        description: (
          <>
            Python, Java, Spring Boot, Flask, RESTful APIs, Distributed Systems (Multithreading,
            Concurrency), JWT authentication, MySQL, MongoDB.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>
            React, JavaScript, HTML, CSS, Node.js, Vite, IPyWidgets. Built interactive UIs for
            full-stack web apps and real-time simulation dashboards.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Data & Libraries",
        description: (
          <>
            SQL, Pandas, NumPy, OpenCV, PaddleOCR, Matplotlib, Seaborn. Built end-to-end data
            pipelines for receipt OCR, expense tracking, and financial modeling.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and AI...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software and AI projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
