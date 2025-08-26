import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mark",
  lastName: "Deaconu",
  name: `Mark Deaconu`,
  role: "Quantum Computing Researcher",
  avatar: "/images/avatar.jpg",
  email: "mark.deaconu@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Romainian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MarkNDeaconu",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mark-deaconu-621b44220/",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@markdeaconu1245",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Navigating wherever my curiosity will take me</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Mark, a computing student in my last year. I am particularly interested in quantum computing 
      and building engineering projects at home!
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mark-deaconu",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mark is a Toronto-based researcher with a broad background in the sciences. He has had the opportunity to research on the cutting edge of quantum computation
         and abstract algebra, and has been awarded gold medals in math olympiads. In his free time, he has built everything from websites to watches to guitar FX circuits.
         
      </>
    ),
  },
  work: {
  display: true,
  title: "Work Experience",
  experiences: [
    {
      company: "SoftwareQ",
      timeframe: "Jan 2025 - Jun 2025",
      role: "Research Intern",
      achievements: [
        <>Collaborated with researchers at Nuquantum on a joint grant project to implement error correction on a distributed quantum architecture.</>,
        <>Discovered efficient heuristic methods for scheduling quantum memory circuits corrected by hyperbolic Floquet codes.</>,
        <>Designed an open source circuit visualization tool called staqvi.</>,
      ],
      images: [],
    },
    {
      company: "Institute For Quantum Computing",
      timeframe: "Apr 2024 - May 2025",
      role: "Undergraduate Researcher — Dr. Michele Mosca",
      achievements: [
        <>Wrote a paper about using number theoretic methods to build quantum circuits</>,
        <>Created a novel Python package for synthesizing arithmetic matrix groups.</>,
        <>Invited to present at the FoQaCIA conference at the INL in Braga, Portugal.</>,
      ],
      images: [],
    },
    {
      company: "Queen's University",
      timeframe: "Feb 2023 - Aug 2023",
      role: "Undergraduate Researcher — Dr. Charles Paquette, Dr. Kaveh Mousavand",
      achievements: [
        <>Solved an open problem in quiver representation theory by connecting topics in formal language theory.</>,
      ],
      images: [],
    },
    {
      company: "Ad Astra Math",
      timeframe: "Jun 2020 - Apr 2024",
      role: "Instructor",
      achievements: [
        <>Taught over 200 hours of lectures in mathematics.</>,
      ],
      images: [],
    },
  ],
},
studies: {
  display: true,
  title: "Studies",
  institutions: [
    {
      name: "Perimeter Institute",
      description: <>Participating in the PSI bridge theoretical physics program - completed courses in quantum, classical, and statistical mechanics.</>,
    },
    {
      name: "University of Waterloo",
      description: (
        <>Undergraduate Summer Quantum Information Program — completed labs in Spin Qubits, NMR, Nonlinear Optics, Post-Quantum Cryptography, and QKD protocols.</>
      ),
    },
    {
      name: "Queen's University",
      description: (
        <>BS Computer Science and Math — Excellence Scholarship, 2× Dean's Honor List, Program GPA: 3.96. Leadership roles in Bioinformatics, Mathematics, and AI clubs. Completed graduate courses in functional analysis and probability.</>
      ),
    },
  ],
},
technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Programming Languages",
      description: <>Python, Javascript, SQL, Prolog, Haskell</>,
      images: [],
      
    },
  ],
},
}

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/thumbssnow.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/stefsnow.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/thaikayak.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/deep.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/tokyocar.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/koreancastle.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/statue.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/thaiboat.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
