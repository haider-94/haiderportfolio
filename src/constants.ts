import { title } from "process";
import {
  anaNinja1,
  anaNinja2,
  anaNinja3,
  vstora1,
  vstora2,
  vstora3,

} from "./images";
export const DOMAIN = "";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/haider-ali-693996272/";

export const GITHUB_URL = "https://github.com/haider-94";

export const EMAIL_URL = "mail.haiderali94@gmail.com";

export const RESUME_URL = "/fazal.pdf";

export const COLOR_TEXT = "rgb(239, 242, 250)";
export const COLOR_BACKGROUND = "rgb(7, 9, 13)";
export const COLOR_PRIMARY = "rgb(52, 93, 225)";
export const COLOR_SECONDARY = "rgb(18, 27, 59)";
export const COLOR_ACCENT = "rgb(76, 235, 156)";

export const NICE_CUBIC = [0.19, 1, 0.22, 1];

export const SANITY_CDN = "https://cdn.sanity.io";

export const ABOUT_ME_TEXT = [
  "I am a dedicated frontend developer with a background in Electrical Engineering. My career journey has involved working with startups and mid-sized companies, where I've developed a strong foundation in software development. Currently, I focus on creating user-friendly web applications, applying my engineering problem-solving skills to design and implement intuitive interfaces. In my role, I collaborate with cross-functional teams to ensure optimal performance and seamless user experiences. I am committed to staying abreast of the latest technologies and continuously enhancing my skills to meet the dynamic demands of the industry. My engineering background equips me with a unique perspective on building robust applications, and I am passionate about delivering innovative solutions that exceed user expectations.",
  "<span class='primary-gradient-2 font-bold block mt-4'>I'm currently looking for full-time remote opportunities. If you're interested in working with me, feel free to reach out!</span>",
];

export const myProjects = [
  {
    isFeatured: true,
    title: "Klaro",
    slug: "Klaro",
    websiteUrl: "",
    description:
      "A mobile app to monitor atmospheric stats of a humidor and broadcast notifications based on user personal preferences. It had integrations with shopify, apple store and couple of other third-party statistical apps. UI/UX Development, API configuration/implementation and third-party Integrations, Test coverage on backend, Weekly client communication, requirement gathering and demo testing",
    dateRange: { start: "2024-08-02", end: "", ongoing: true },

    tags: [
      {
        name: "React Native",
        slug: "react-native",
        icon: "react",
        iconFileName: "react.png",
      },
      {
        name: "Redux",
        slug: "redux",
        icon: "redux",
        iconFileName: "redux.png",
      },
      {
        name: "Shopify",
        slug: " shopify",
        icon: "shopify",
        iconFileName: "shopify.png",
      },
      {
        name: "Ruby on Rails",
        slug: "ruby-on-rails",
        icon: "ruby-on-rails",
        iconFileName: "rails.png",
      },
      {
        name: "Push Notification",
        slug: " push-notification",
        icon: "push-notification",
        iconFileName: "push-notification.png",
      },
    ],
  },
  {
    isFeatured: true,
    title: "Samurai Dashboard",
    slug: "Samurai-Dashboard",
    websiteUrl: "https://ananinja.com/sa/en",
    description:
      "A management system for one of the largest retail distributions in Gulf. They have different apps for delivery, inventory management, distribution and admin roles. My role is to fix the current known issues, UI/UX updates, version updates, VueJs to React Admin migration and feature updates. I am working as an SSE on one of the platforms and Senior Front-End Lead on the migration team.",
    dateRange: { start: "2024-01-01", end: "2024-07-31" },
    images: [anaNinja1, anaNinja2, anaNinja3],

    tags: [
      {
        name: "React",
        slug: "react",
        icon: "react",
        iconFileName: "react.png",
        imageFileName: "anaNinja.png",
      },
      {
        name: "React Admin",
        slug: "react-admin",
        icon: "react-admin",
        iconFileName: "react-admin.png",
      },
      {
        name: "VueJs",
        slug: "vue.js",
        icon: "vue-js",
        iconFileName: "vue-js.png",
      },
      {
        name: "Material UI",
        slug: "material-ui",
        icon: "material-ui",
        iconFileName: "material-ui.png",
      },
      {
        name: "Google Maps",
        slug: "google-map",
        icon: "google-map",
        iconFileName: "google-map.png",
      },
    ],
  },

  {
    isFeatured: false,

    title: "Vstora",
    slug: "Vstora",
    websiteUrl: "https://vstora.com/",
    description:
      "One stop solution for creating and managing your online business with inventory management. API’s integration/configuration for Customer side and dashboard. UI/UX development, third party integrations",
    dateRange: { start: "2022-10-01", end: "2023-04-01" },
    images: [vstora1, vstora2, vstora3],
    tags: [
      {
        name: "React",
        slug: "react",
        icon: "react",
        iconFileName: "react.svg",
      },
      {
        name: "NextJs",
        slug: "nextjs",
        icon: "nextjs",
        iconFileName: "next-js.svg",
      },
      {
        name: "NodeJS",
        slug: "nodejs",
        icon: "nodejs",
        iconFileName: "node.js.png",
      },
      {
        name: "Push Notification",
        slug: "push-notification",
        icon: "push-notification",
        iconFileName: "push-notification.png",
      },
      {
        name: "Google Maps",
        slug: "google maps",
        icon: "google-maps",
        iconFileName: "google-map.png",
      },
      {
        name: "Stripe Integration",
        slug: "stripe-integration",
        icon: "stripe-integration",
        iconFileName: "stripe.png",
      },
    ],
  },
  
  
  {
    isFeatured: false,
    title: "London Filmed",
    slug: "London-Filmed",
    websiteUrl: "https://londonfilmed.com/",
    description:
      "Build, deliver, and manage event and media projects from one central platform.",
    dateRange: { start: "2022-10-01", end: "2023-04-01" },
    images: [vstora1, vstora2, vstora3],
    tags: [
      {
        name: "React",
        slug: "react",
        icon: "react",
        iconFileName: "react.svg",
      },
      {
        name: "Push Notification",
        slug: "push-notification",
        icon: "push-notification",
        iconFileName: "push-notification.png",
      },
    ],
  },
  {
    isFeatured: false,

    title: "Agency Reviews",
    slug: "Agency-Reviews",
    websiteUrl: "https://www.agencyreviews.io/",
    description:
      "Agency Reviews is a platform that connects businesses with marketing and advertising agencies. It features reviews and ratings from clients, helping users make informed decisions when selecting an agency for their projects. The site aims to streamline the process of finding reputable agencies by providing detailed insights into their performance and client satisfaction.",
    dateRange: { start: "2022-10-01", end: "2023-04-01" },
    images: [vstora1, vstora2, vstora3],
    tags: [
      {
        name: "React",
        slug: "react",
        icon: "react",
        iconFileName: "react.svg",
      },
      {
        name: "Typescript",
        slug: "Typescript",
        icon: "typescript",
        iconFileName: "typescript.svg",
      },
      {
        name: "Material UI",
        slug: "material-ui",
        icon: "material-ui",
        iconFileName: "material-ui.png",
      },
      {
        name: "Redux",
        icon: "redux",
        slug: "redux",
        iconFileName: "redux.png",
      },
    ],
  },
  

  // {
  //   isFeatured: false,
  //   title: "Prologis",
  //   slug: "Prologis",
  //   websiteUrl: "https://www.prologis.com/",
  //   description:
  //     "A web app to manage your property, find warehouse solutions, contact support and more. It is an owner, operator, and developer of industrial real estate, focused on global markets across the Americas, Europe, and Asia. UI/UX Development, API configuration/implementation, Front End Test coverage. ",
  //   dateRange: { start: "2021-08-01", end: "2022-01-01" },
  //   images: [prologis1, prologis2, prologis3],
  //   tags: [
  //     {
  //       name: "React",
  //       slug: "react",
  //       icon: "react",
  //       iconFileName: "react.png",
  //     },
  //     {
  //       name: "Redux",
  //       slug: "redux",
  //       icon: "redux",
  //       iconFileName: "redux.png",
  //     },
  //     {
  //       name: "NodeJS",
  //       slug: "nodejs",
  //       icon: "nodejs",
  //       iconFileName: "node.js.png",
  //     },
  //     {
  //       name: "MongoDB",
  //       slug: "mongodb",
  //       icon: "mongodb",
  //       iconFileName: "mongodb.png",
  //     },
  //     {
  //       name: "Jest",
  //       slug: "jest",
  //       icon: "jest",
  //       iconFileName: "jest.png",
  //     },
  //   ],
  // },
  // {
  //   isFeatured: true,
  //   title: "Run Buddy",
  //   slug: "Run-Buddy",
  //   websiteUrl: "http://runbuddymobile.com/",
  //   description:
  //     "A hybrid mobile application to manage workout scheduling for pets. App included features like authentication, scheduling, payment integrations, Google Places APIs integrations, chat module, camera and call integrations. Design complete UI as per provided mockups from scratch, build complete architecture of app as per requirements, integrate backend APIs Integrate Third Party APIs, scheduled testing and fixing cross platform errors, Client communication regarding task updates and requirement gathering. ",
  //   dateRange: { start: "2020-03-01", end: "2021-01-01" },
  //   images: [runBuddy1, runBuddy2, runBuddy3],
  //   tags: [
  //     {
  //       name: "React Native",
  //       slug: "react-native",
  //       icon: "react",
  //       iconFileName: "react.png",
  //     },
  //     {
  //       name: "Redux",
  //       slug: "redux",
  //       icon: "redux",
  //       iconFileName: "redux.png",
  //     },
  //     {
  //       name: "Ruby on Rails",
  //       slug: "ruby-on-rails",
  //       icon: "ruby-on-rails",
  //       iconFileName: "rails.png",
  //     },
  //     {
  //       name: "PostgreSQL",
  //       slug: "postgresql",
  //       icon: "postgresql",
  //       iconFileName: "postgreSQL.png",
  //     },
  //     {
  //       name: "Google Maps",
  //       slug: "google-map",
  //       icon: "google-map",
  //       iconFileName: "google-map.png",
  //     },
  //   ],
  // },
  // {
  //   isFeatured: true,
  //   title: "Go Boon",
  //   slug: "Go-Boon",
  //   websiteUrl: "https://goboon.co/",
  //   description:
  //     "A platform that provides organizations to put on Job vacancies for candidates to apply and refer others for the position. It had a web-based admin panel and for end users a web app along with hybrid mobile app was designed. Jobs had associated bounties, and a complete hiring process was automated. Translate Lucid chats into app flow, Requirement gathering and testing, building complex and responsive UIs for handling. Fixes in previous code base. API Integrations Code reviews and assist peer developers with their issues.",
  //   dateRange: { start: "2019-09-01", end: "2020-02-01" },
  //   images: [goBoon1, goBoon2, goBoon3],
  //   tags: [
  //     {
  //       name: "React Native",
  //       slug: "react-native",
  //       icon: "react",
  //       iconFileName: "react.png",
  //     },
  //     {
  //       name: "Redux",
  //       slug: "redux",
  //       icon: "redux",
  //       iconFileName: "redux.png",
  //     },
  //     {
  //       name: "Ruby on Rails",
  //       slug: "ruby-on-rails",
  //       icon: "ruby-on-rails",
  //       iconFileName: "rails.png",
  //     },
  //     {
  //       name: "Asana",
  //       slug: "asana",
  //       icon: "asana",
  //       iconFileName: "asana.png",
  //     },
  //     {
  //       name: "Bitbucket",
  //       slug: "bitbucket",
  //       icon: "bitbucket",
  //       iconFileName: "bitbucket.png",
  //     },
  //   ],
  // },
  // {
  //   isFeatured: false,
  //   title: "W9 Manager",
  //   slug: "W9-Manager",
  //   websiteUrl: "https://www.w9manager.com",
  //   description:
  //     "A corporate level web system designed to manage W9s and taxation related legal procedures. Application had service- based modules for different clients including vendors imports and management, TIN import and management, services for legal procedures. Understanding the business requirements, UI and feature development of new functionalities, Re-themed some modules using Angular Material, Client communication, requirement gathering and task updates. Back End API Integrations.",
  //   dateRange: { start: "2019-02-01", end: "2019-09-01" },
  //   tags: [
  //     {
  //       name: "Angular 8",
  //       slug: "angular",
  //       icon: "angular",
  //       iconFileName: "angular.png",
  //     },
  //     {
  //       name: "Ruby on Rails",
  //       slug: "ruby-on-rails",
  //       icon: "ruby-on-rails",
  //       iconFileName: "rails.png",
  //     },
  //     {
  //       name: "Angular Material",
  //       slug: "angular-material",
  //       icon: "angular-material",
  //       iconFileName: "angular-material.png",
  //     },
  //   ],
  // },
  // {
  //   isFeatured: true,
  //   title: "Xcite Interactive Games",
  //   slug: "Xcite-Interactive-Games",
  //   websiteUrl: "https://www.gcmvp.com/",
  //   description:
  //     "These were web-based apps, used to interact with animations designed on Unreal Engine. Animations were played on stadium jumbotrons, apps interacted using firebase and the game stats were saved using firestore. App re-skinning as per requirements, firebase and firestore integration for stats and analytics. Complete app flow testing with Q.A regarding animation sync and score stats. Daily client communication for updates and upcoming tasks.",
  //   dateRange: { start: "2017-09-01", end: "2018-02-01" },
  //   images: [xcite1, xcite2, xcite3],
  //   tags: [
  //     {
  //       name: "Angular",
  //       slug: "angular",
  //       icon: "angular",
  //       iconFileName: "angular.png",
  //     },
  //     {
  //       name: "TypeScript",
  //       slug: "typescript",
  //       icon: "typescript",
  //       iconFileName: "typescript.png",
  //     },
  //     {
  //       name: "Firebase",
  //       slug: "firebase",
  //       icon: "firebase",
  //       iconFileName: "firebase.png",
  //     },
  //     {
  //       name: "Firestore",
  //       slug: "firestore",
  //       icon: "firestore",
  //       iconFileName: "firestore.png",
  //     },
  //   ],
  // },
];

export const myExperiences = [
  {
    company: "Contractor",
    slug: "Contractor",
    title: "Front End Engineer",
    description:
      "JavaScript, React, React-Native, Typescript, Node, Sentry",

    dateRange: {
      start: "2024-08-02",
      end: "",
      ongoing: "Present",
    },
  },
  {
    company: "Jazzari",
    slug: "Jazzari",
    title: "Front End Engineer",
    description: "JavaScript, React, React Native, NextJs, Typescript, Firebase",

    dateRange: {
      start: "2023-03-01",
      end: "2024-07-01",
    },
  },
];

export const sampleTags: any = [
  {
    name: "React",
    iconFileName: "react.png",
    iconScale: 1.5,
    slug: "react",
    categories: [{ title: "Front End", slug: "frontend" }],
  },
  {
    name: "React Native",
    iconFileName: "react-native.png",
    iconScale: 1,
    slug: "react-native",
    categories: [{ title: "Front End", slug: "frontend" }],
  },

  {
    name: "React Admin",
    iconFileName: "react-admin.png",
    iconScale: 1,
    slug: "react-admin",
    categories: [{ title: "Front End", slug: "frontend" }],
  },

  {
    name: "Tailwind-css",
    iconFileName: "tailwindcss.png",
    iconScale: 1,
    slug: "tailwind",
    categories: [{ title: "Front End", slug: "frontend" }],
  },
  {
    name: "Vue.Js",
    iconFileName: "vue-js.png",
    iconScale: 1,
    slug: "vuejs",
    categories: [{ title: "Front End", slug: "frontend" }],
  },

  {
    name: "Material UI",
    iconFileName: "material-ui.png",
    iconScale: 1.3,
    slug: "material-ui",
    categories: [{ title: "Front End", slug: "frontend" }],
  },

  {
    name: "NextJs",
    iconFileName: "next-js.svg",
    iconScale: 1,
    slug: "nextjs",
    categories: [{ title: "Front End", slug: "frontend" }],
  },

  {
    name: "Redux",
    iconFileName: "redux.png",
    iconScale: 1,
    slug: "redux",
    categories: [{ title: "Front End", slug: "frontend" }],
  },

  {
    name: "Typescript",
    iconFileName: "typescript.png",
    iconScale: 1,
    slug: "typescript",
    categories: [{ title: "Front End", slug: "frontend" }],
  },

  // {
  //   name: "Firebase",
  //   iconFileName: "firebase.png",
  //   iconScale: 1,
  //   slug: "firebase",
  //   categories: [{ title: "Back End", slug: "backend" }],
  // },

    {
      name: "Firestore",
      iconFileName: "firestore.png",
      iconScale: 1,
      slug: "firestore",
      categories: [{ title: "Database", slug: "database" }],
    },

  {
    name: "Jest",
    iconFileName: "jest.png",
    iconScale: 1,
    slug: "jest",
    categories: [{ title: "Front End", slug: "frontend" }],
  },


  {
    name: "Google Maps",
    iconFileName: "google-map.png",
    iconScale: 1,
    slug: "google-map",
    categories: [{ title: "API", slug: "api" }],
  },

  {
    name: "Push Notifications",
    iconFileName: "push-notification.png",
    iconScale: 1,
    slug: "push-notification",
    categories: [{ title: "API", slug: "api" }],
  },

  {
    name: "Stripe Integration",
    iconFileName: "stripe.png",
    iconScale: 1,
    slug: "stripe-integration",
    categories: [{ title: "API", slug: "api" }],
  },
];

export const { tabs, tabsData } = (() => {
  let tabs: any = [];
  const slugSet = new Set<string>();

  sampleTags.forEach((tag: any) => {
    tag.categories.forEach((category: any) => {
      if (slugSet.has(category.slug)) return;
      slugSet.add(category.slug);
      tabs.push(category);
    });
  });

  const tabsData: any = {};
  for (const tab of tabs) {
    tabsData[tab.slug] = sampleTags.filter((tag: any) =>
      tag.categories.map((c: any) => c.slug).includes(tab.slug)
    );
  }

  tabs = [{ title: "All", slug: "all" }, ...tabs];
  tabsData["all"] = sampleTags;

  return { tabs, tabsData };
})();

export const navItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  // {
  //   text: "Experiences",
  //   href: "/experiences",
  // },
  // {
  //   text: "Resume",
  //   href: "/resume",
  // }
  // {
  //   text: "Blogs",
  //   href: "/blogs",
  // },
];
