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
  languages: ["English", "French", "Romanian"], // optional: Leave the array empty if you don't want to display languages
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
    link: "https://www.linkedin.com/in/mark-d-621b44220/",
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
        Mark is a Toronto-based researcher specializing in quantum computation and abstract algebra.
        He is currently a student at Queen's University and the only Canadian accepted into the 2025 PSI Bridge cohort at the Perimeter Institute.
        Beyond his research in distributed quantum architectures and circuit synthesis, he is a Math Olympiad Champion, 
        a startup founder, and was recently featured on the front page of the Globe and Mail.
      </>
    ),
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Queen's University",
        description: (
          <>
            Bachelor of Computing, Mathematics Specialization — Core GPA: 3.975/4.3.
            <br />
            Recipient of the Excellence Scholarship ($1,500) and 2× Dean's Honor List.
            Awarded Professional distinction for exceptional performance in a 1-year co-op placement.
          </>
        ),
      },
      {
        name: "Perimeter Institute",
        description: (
          <>
            PSI Bridge Program (May 2025 – Dec 2025).
            <br />
            Participated in a rigorous 8-month program focusing on Classical, Quantum, and Statistical Mechanics, and Lie Algebra theory.
            Selected as the only Canadian student in a cohort of 16.
          </>
        ),
      },
      {
        name: "University of Waterloo",
        description: (
          <>
            Undergraduate Summer Quantum Information Program (June 2024 – Aug 2024).
            <br />
            Offered a full-time research co-op position upon successful completion of the intensive program.
          </>
        ),
      },
    ],
  },
  publications: {
    display: true,
    title: "Publications",
    papers: [
      {
        title: "Buildings for Synthesis with Clifford+R",
        authors: "Mark Deaconu, Nihar Gargava, Amolak Ratan Kalra, Michele Mosca, and Jon Yard",
        journal: "arXiv e-prints, 2025",
        link: "https://arxiv.org/abs/2510.11526",
      },
      {
        title: "Infinite string bricks and Sturmian words over some gentle algebras",
        authors: "Mark Deaconu, Kaveh Mousavand, and Charles Paquette",
        journal: "arXiv e-prints, 2025",
        link: "https://arxiv.org/abs/2510.22377",
      },
    ],
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SoftwareQ",
        timeframe: "Jan 2025 – April 2025",
        role: "Research Intern",
        achievements: [
          <>Investigated distributed quantum computing methodologies, focusing on detecting and localizing errors and implementing hyperbolic Floquet codes.</>,
          <>Designed a stochastic process in which circuit synthesis and device scheduling methods could inform each other and iteratively improve.</>,
        ],
        images: [],
      },
      {
        company: "Institute for Quantum Computing",
        timeframe: "April 2024 – April 2025",
        role: "Undergraduate Researcher — Dr. Michele Mosca",
        achievements: [
          <>Leveraged Bruhat Tits theory to progress the understanding of the SU(3) subgroup associated with Clifford+R quantum circuits.</>,
          <>Researched bounds on the stabilizer rank of states and characterized stabilizer states based on the Barnes-Wall lattice.</>,
          <>Developed a software package for algebra over cyclotomic matrix algebras for qudit synthesis prototyping.</>,
        ],
        images: [],
      },
      {
        company: "Queen's University",
        timeframe: "Feb 2023 – Aug 2023",
        role: "Undergraduate Researcher — Dr. Charles Paquette, Dr. Kaveh Mousavand",
        achievements: [
          <>Classified infinite dimensional Schur-Representations over quivers by connecting their combinatorial structure to Sturmian words.</>,
        ],
        images: [],
      },
      {
        company: "Ad Astra Math",
        timeframe: "Jun 2017 – Apr 2024",
        role: "Math Instructor",
        achievements: [
          <>Served as the sole instructor for over 200 contest-level math classes (2-6 students each).</>,
          <>Mentored two students that progressed to win gold medals at nationally recognized competitions.</>,
        ],
        images: [],
      },
    ],
  },
  talks: {
    display: true,
    title: "Talks & Presentations",
    presentations: [
      {
        title: "FoQaCiA Conference (June 2025)",
        description: <>Selected for a talk and poster presentation titled <i>"Arithmeticity of Qutrit Clifford+R Gate Set"</i>.</>,
      },
      {
        title: "IQC Student Seminar (Feb 2025)",
        description: <>Invited 1-hour presentation titled <i>"Ramanujan Graphs and Optimal Circuits"</i>.</>,
      },
      {
        title: "IQC Graduate Student Conference (Sep 2024)",
        description: <>Selected for a talk titled <i>"Quantum Circuit Synthesis"</i>.</>,
      },
    ],
  },
  awards: {
    display: true,
    title: "Awards & Honors",
    list: [
      {
        title: "Math Olympiad Champion",
        description: <>2nd Place in Canada (Galois Contest), 6 gold medals in national contests, and qualification to Repêchage in the COMC.</>,
      },
      {
        title: "Innovation Award (2025)",
        description: <>Recipient of the innovation award from the Association of Romanian Engineers in Canada (AREC).</>,
      },
      {
        title: "Featured Startup (NEXT36 Venture Day 2025)",
        description: <>Automation project <i>Cordax</i> showcased in a leading startup accelerator.</>,
      },
      {
        title: "Globe and Mail Featured Story",
        description: (
          <>
            Profiled on the front page of Canada's largest national newspaper for the charitable initiative{" "}
            <a href="https://www.theglobeandmail.com/life/article-one-dollar-portraits-trinity-bellwoods-jasmine-boyd/">"Portraits in the Park"</a>.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Tools",
        description: <>Python, Git, Bash, C++, Javascript, PennyLane</>,
        images: [],
      },
      {
        title: "Course Work",
        description: <>Functional analysis, Quantum mechanics, Number theory, Cryptography, Real & Complex analysis, Group theory, Statistical inference, Software architecture</>,
        images: [],
      },
    ],
  },
};

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
