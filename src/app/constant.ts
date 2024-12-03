import Image, { StaticImageData } from "next/image";
import projectImg1 from "../app/assets/news1.jpg";
import ProjectBabel from "../app/assets/project/Projectbabel.png"
import ProjectKoperasi from "../app/assets/project/Projectkoperasi.png"
import ProjectMyKitchen from "../app/assets/project/Projectmykitchen.png"

import { IconType } from "react-icons";
import { DiPhp } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaDribbble,
} from "react-icons/fa";
import {
  SiVite,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiSelenium,
} from "react-icons/si";

export const TYPED_STR = [
  "I design and develop for website",
  "I love to learn new technology",
  "I design dynamic user experience",
];

export const SOCIAL_MEDIA = {
  Linkedin: "https://www.linkedin.com/in/c-satrio/",
  Github: "https://github.com/blazertooth-99",
  Gmail: "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzggPZPppddbDcBTNpkZlPVhKdcJsjnhxThZJPKSSfNZLWkrmBKWNHLdCqZqRHxWmpn",
  Instagram: "https://www.instagram.com/csatrioo/",
  Twitter: "",
  Facebook: "https://www.facebook.com/christian.satrio30/",
}

//EXPERIENCE DATA
export const EXPERIENCE = [
  {
    year: "Sept 2019 - Apr 2020",
    title: "System Engineer (Intern)",
    Jobdesc: "Create something goods",
    Tag: ["Docker", "Angular 7", "Springboot", "Redhat 7", "Oracle 11g"],
    company: "PT. Multipolar Technology, Tbk.",
  },
  {
    year: "Jan 2021 - Apr 2021",
    title: "PHP Programmer & Android Developer",
    Jobdesc: "Create something goods",
    Tag: ["Code Igniter", "HTML", "CSS", "MySQL"],
    company: "Freelance - Koperasi",
  },
  {
    year: "Nov 2021 - May 2022",
    title: "PHP Programmer - Fullstack",
    Jobdesc: "Create something goods",
    Tag: ["Zend Framework", "Boostrap", "MySQL"],
    company: "Square Gate One",
  },
  {
    year: "Jul 2022 - Present",
    title: "Design & Software Quality Assurance",
    Jobdesc: "Create something goods",
    Tag: ["Selenium", "Manual Tester", "Automation Tester"],
    company: "PT. Hartono Istana Teknologi (Polytron)",
  },
];

//PROJECT PAGE DATA
export type ProjectList = {
  id: number;
  projectTitle: string;
  projectImg: StaticImageData;
  altImg: string;
  projectLink: string;
  projectSubtitle: string;
};

export const projectList: ProjectList[] = [
  {
    id: 1,
    projectTitle: "Babel Leathercraft Catalogue",
    projectImg: ProjectBabel,
    altImg: "Babel Logo",
    projectLink: "https://github.com/blazertooth-99/angular-babel-product-catalogue",
    projectSubtitle: "Leather craft product catalog website from babel brand using Angular 7.",
  },
  {
    id: 2,
    projectTitle: "Web & Android App Koperasi",
    projectImg: ProjectKoperasi,
    altImg: "Koperasi Logo",
    projectLink: "https://github.com/blazertooth-99/PHP-Aplikasi-koperasi",
    projectSubtitle: "Website & android application for selling credit, electricity tokens, groceries and online loan applications using PHP code igniter & Android native.",
  },
  {
    id: 3,
    projectTitle: "My Kitchen Design",
    projectImg: ProjectMyKitchen,
    altImg: "My Kitchen Logo",
    projectLink: "https://www.figma.com/proto/58fGb202in1aAPbIEqaKPY/Untitled?t=McedLYR26235VIee-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2",
    projectSubtitle:
    "My Kitchen Design UI/UX design using figma for the My Kitchen application, the use of the application as a guide to how to cook and there are many catalog recipes available",
  },
];

//TECH STACK PAGE DATA
export interface TechIcon {
  id: number;
  Icon: IconType;
  label: string;
  color: string;
  duration: number;
}

export const techIcons: TechIcon[] = [
  {
    id: 1,
    Icon: FaLinux,
    label: "Linux",
    color: "text-cyan-700 dark:text-cyan-300",
    duration: 2.5,
  },
  {
    id: 2,
    Icon: FaReact,
    label: "React Js",
    color: "text-cyan-500 dark:text-cyan-400",
    duration: 2.5,
  },
  {
    id: 3,
    Icon: SiJavascript,
    label: "JavaScript",
    color: "text-yellow-600 dark:text-yellow-400",
    duration: 3,
  },
  {
    id: 4,
    Icon: SiVite,
    label: "Vite",
    color: "text-cyan-800 dark:text-cyan-200",
    duration: 4,
  },
  {
    id: 5,
    Icon: SiTailwindcss,
    label: "Tailwind Css",
    color: "text-cyan-400 dark:text-cyan-300",
    duration: 2.5,
  },
  {
    id: 6,
    Icon: DiPhp,
    label: "PHP",
    color: "text-cyan-600 dark:text-cyan-400",
    duration: 2.5,
  },
  {
    id: 7,
    Icon: FaCss3Alt,
    label: "CSS 3",
    color: "text-blue-600 dark:text-blue-400",
    duration: 2.5,
  },
  {
    id: 8,
    Icon: SiNextdotjs,
    label: "Next Js",
    color: "text-slate-800 dark:text-slate-200",
    duration: 3,
  },
  {
    id: 9,
    Icon: BiLogoPostgresql,
    label: "PostgreSQL",
    color: "text-sky-700 dark:text-sky-300",
    duration: 4,
  },
  {
    id: 10,
    Icon: SiSelenium,
    label: "Selenium",
    color: "text-sky-700 dark:text-sky-300",
    duration: 4,
  },
  {
    id: 11,
    Icon: FaFigma,
    label: "Figma",
    color: "text-pink-500 dark:text-pink-300",
    duration: 4,
  },
  {
    id: 12,
    Icon: FaGitAlt,
    label: "Git",
    color: "text-red-500 dark:text-red-400",
    duration: 4,
  },
];

//CONTACT FOOTER DATA

export interface ContactIcon1 {
  id: number;
  title: string;
  Icon: IconType;
  link: string;
}
export const ContactIcon: ContactIcon1[] = [
  {
    id: 1,
    title: "Github",
    Icon: FaGithub,
    link: "https://github.com/blazertooth-99",
  },
  {
    id: 2,
    title: "Linkedin",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/c-satrio/",
  },
  {
    id: 3,
    title: "Twitter",
    Icon: FaTwitter,
    link: "#",
  },
  {
    id: 4,
    title: "Instagram",
    Icon: FaInstagram,
    link: "https://www.instagram.com/csatrioo/",
  },
  {
    id: 5,
    title: "Facebook",
    Icon: FaFacebook,
    link: "https://www.facebook.com/christian.satrio30/",
  },
  {
    id: 6,
    title: "Dribble",
    Icon: FaDribbble,
    link: "#",
  },
];
