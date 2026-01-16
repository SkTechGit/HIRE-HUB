import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  CodeWithJava,
} from "../assets";

export const jobTypes = ["Full-Time", "Part-Time", "ContracT", "Intern"];

export const experience = [
  { title: "Under 1 Year", value: "0-1" },
  { title: "1 -2 Year", value: "1-2" },
  { title: "2 -6 Year", value: "2-6" },
  { title: "Over 6 Years", value: "6-20" },
];

export const popularSearch = [
  "Software Engineer",
  "Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Remote",
  "Full-Time",
  "Sales",
  "Office Assistant",
];

export const jobs = [
  {
    id: "1",
    company: {
      name: "Microsoft Corporation",
      location: "Califonia",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Twitter,
    },
    jobTitle: "Software Engineer",
    location: "West US",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "As an X Software Development Engineer, you will be part of a dynamic team dedicated to developing cutting-edge software solutions that drive our business forward. This role involves designing, coding, testing, and maintaining software applications that meet the highest standards of performance, reliability, and security.",

        requirement:
          "1. Proficiency in Programming Languages: Languages such as Java, C++, Python, or others relevant to the job. 2. Problem-Solving Abilities: Strong analytical and debugging skills. 3. Knowledge of Software Development Tools: Familiarity with IDEs, version control systems (like Git), and build tools. 4. Understanding of Algorithms and Data Structures: Essential for optimizing software performance. 5. Experience with Databases: Knowledge of SQL and NoSQL databases.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Google,
    },
    jobTitle: "System Analyst",
    location: "New York",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "A System Analyst at Google plays a crucial role in bridging the gap between business needs and technology solutions. They are responsible for analyzing, designing, and implementing information systems that enhance business processes and improve efficiency.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      name: "LinkedIn Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Linkedin,
    },
    jobTitle: "Social Meia Manager",
    location: "India, Mumbai",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "A Social Media Manager for LinkedIn is responsible for managing and enhancing a company's presence on LinkedIn, one of the leading professional networking platforms. The role involves a variety of tasks aimed at building brand awareness, engaging with the audience, and driving traffic to the company's LinkedIn page and website.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      name: "Spotify Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Spotify,
    },
    jobTitle: "CFO",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "A Chief Financial Officer (CFO) at Spotify or a similar company is a senior executive responsible for managing the financial actions of the company. The CFO's duties include tracking cash flow, financial planning, analyzing the company's financial strengths and weaknesses, and proposing corrective actions. ",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "Facebook Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Facebook,
    },
    jobTitle: "CFO",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "The role of a Chief Financial Officer (CFO) at a large tech company like Facebook (now Meta) is critical for the financial health and strategic planning of the organization.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "WhatsApp Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: WhatsApp,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "WhatsApp, being a prominent messaging platform owned by Meta (formerly Facebook), would likely seek Product Managers who can handle its diverse and highly engaged user base.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "7",
    company: {
      name: "Instagram Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Instagram,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Instagram, being a visual social media platform owned by Facebook, may emphasize skills related to photo and video content, community engagement, and mobile-first user experiences. Knowledge of social media trends, influencer marketing, and advertising platforms could also be beneficial.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "8",
    company: {
      name: "Youtube Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Youtube,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "The role of a Product Manager at YouTube involves overseeing the development and enhancement of YouTube's products and features.",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "9",
    company: {
      name: "CodeWave Solutions",
      location: "India",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: CodeWithJava,
    },
    jobTitle: "Subscribe Please",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Subscribing to - CodeWithJava, offers you an immersive journey into mastering Java programming. From beginner concepts to advanced techniques, you'll receive clear, concise tutorials that demystify Java's intricacies. Prepare to unlock your potential, whether you're aiming to build robust applications, delve into backend development, or ace coding interviews. Join a vibrant community committed to Java excellence and stay updated with the latest tips, tricks, and industry insights. Don't missout - subscribe now and embark on your Java programming adventure with confidence !! ",

        requirement:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Microsoft Corporation",
    location: "Califonia",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "India",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
  {
    _id: 9,
    name: "CodeWithJava Pvt. Ltd.",
    location: "Ghana",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: CodeWithJava,
    jobPosts: ["1", "2"],
  },
];

export const users = [
  {
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "CodeWaver",
    lastName: "Solutions",
    email: "support@code.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: CodeWithJava,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];
