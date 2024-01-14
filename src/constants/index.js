import {
  java,
  jenkins,
  kubernetes,
  linux,
  powerBI,
  python,
  reactNative,
  snowflake,
  tableau,
  terraform,
  backend,
  cloud,
  appStore,
  dataAnalyst,
  aws,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  ari,
  ndsu,
  ascend,
  beyond,
  aws_cicd,
  tableu_proj,
  snowflake_cloud,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: dataAnalyst,
  },
  {
    title: "Cloud Enginner",
    icon: cloud,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Application Developer",
    icon: appStore,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Power BI",
    icon: powerBI,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Snowflake",
    icon: snowflake,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Automotive Robotics Inc",
    icon: ari,
    iconBg: "#383E56",
    date: "Oct 2022 - Present",
    points: [
      "In the preprocessing phase, used Pandas to remove or replace all the missing data and balanced the dataset with Over-sampling the minority label class and Under-sampling the majority label class.",
      "In the data exploration stage used correlation analysis and graphical techniques in Matplotlib and seaborn to get some insights about the defective parts of the early manufacturing stages. Performed data imputation using Scikit-Learn package in Python.",
      "Designed rich data visualizations to model data into human-readable form with Tableau and Matplotlib.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "North Dakota State University",
    icon: ndsu,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Sep 2023",
    points: [
      "Created ETL pipeline using Python, Amazon S3, EC2, and Snowflake database. Deployed code to AWS Code Commit.",
      "Performed data cleaning, data imputation and data preparation using Pandas and NumPy. ",
      "Utilized Terraform and Ansible for efficient deployment and management of infrastructure resources.",
      "Designed, deployed, and maintained VMware Cloud Foundation and VxRail, achieving high availability and performance.",
    ],
  },
  {
    title: "Graduate Teaching Instructor",
    company_name: "North Dakota State University",
    icon: ndsu,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Dec 2022",
    points: [
      "CSCI 312 – Survey of Programming Language: Topics Covered- Data Types, Expressions Assignment Statements, Sentiment-Level Control Structures, Scripting Language, Concurrency, Exception Handling Event Handling, Functional and Logic. [PL: Java, Python, C#, C++]",
      "CSCI 122- Programming in Basic – Visual Basic .NET: Topics Covered - User Interface Design, Variables, Selection Structures, Loops & String Manipulation, Sub & Function Procedures, Lists & Arrays, Forms, Modules, & Menus, Structures and Sequential Access Files. [PL: Visual Basic .NET]",
      "•	CSCI 159- Computer Science Problem Solving: Topics Covered- History of computer, representing information digitally, HTML & JavaScript, Data structure & algorithms. [PL: HTML, CSS & Java Script]",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Ascend Technology Inc",
    icon: ascend,
    iconBg: "#383E56",
    date: "May 2016 - July 2018",
    points: [
      "Ensured data accuracy and integrity across all analytics projects. Developed assembly planning tools to optimize workflow and resource allocation. Conducted thorough testing and troubleshooting of new tools, ensuring optimal performance.",
      "Communicated and coordinated with end client for collecting data and performed ETL to define the uniform standard format. Queried and retrieved data from database to get the dataset.",
      "Communicated and coordinated with end client for collecting data and performed ETL to define the uniform standard format. Queried and retrieved data from database to get the dataset.",
      "Integrated Python scripting into the project, enhancing the application's capabilities with data processing, external API interactions, resulting in a more versatile and intelligent user experience.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Beyond Innovations & Technologies Limited",
    icon: beyond,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Apr 2016",
    points: [
      "Created and executed automated software test plans, cases, and scripts. Perform thorough system analysis to uncover software issues and root causes.",
      "Developed Android applications using Java and Android Studio, understand Android ecosystem, UI/UX design principles, and efficient coding practices to deliver engaging and user-friendly mobile experiences.",
      "Provided technical support and fix for operational issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Don’t comment bad code – rewrite it!",
    name: "Brian Kernighan",
    designation: "Computer Scientist",
    image:
      "https://engineering.princeton.edu/wp-content/uploads/2020/06/brian_kernighan.png",
  },
  {
    testimonial: "No data is clean, but most is useful!",
    name: "Dean Abbott",
    designation: "Chief Data Scientist",
    image:
      "https://www.darden.virginia.edu/sites/default/files/styles/square_hero_1_1_665px_/public/2023-05/DeanAbbottBW.jpg?itok=RVLpAVFt",
  },
  {
    testimonial: "Data is the new science. Big data holds the answer!",
    name: "Pat Gelsinger",
    designation: "CEO - Intel Corporation",
    image:
      "https://pbs.twimg.com/profile_images/1361315465067307014/d8jc8KTA_400x400.jpg",
  },
];

const projects = [
  {
    name: "AWS CI/CD Pipeline",
    description:
      "CI/CD pipeline in an AWS project automates code integration, testing, and deployment, improving development speed and code reliability. AWS provides tools like CodePipeline, CodeBuild, and CodeDeploy to implement and manage these pipelines effectively.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: aws_cicd,
    source_code_link: "https://github.com/tanvircs",
  },
  {
    name: "Tableau Sales Dashboard",
    description:
      "The objective of this Tableau report is to analyze and present comprehensive insights into sales, profit, orders, profit margin, and various comparisons to provide a clear understanding of key performance indicators and trends.",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
      {
        name: "snowflake",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: tableu_proj,
    source_code_link: "https://github.com/tanvircs",
  },
  {
    name: "Snowflake Cloud Data Application",
    description:
      "It tries to provide valuable data insights about invoices (timelines & trends, cost segmentation, services overview) and usage data overview, aggregated through various dimensions. All of that with many filters which makes finding the proper data set for the analysis even easier.",
    tags: [
      {
        name: "snowflake",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "Apache Superset",
        color: "pink-text-gradient",
      },
    ],
    image: snowflake_cloud,
    source_code_link: "https://github.com/tanvircs",
  },
];

export { services, technologies, experiences, testimonials, projects };
