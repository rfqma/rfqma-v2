import {
  TechStack,
  HeaderMenuItem,
  ExternalLink,
  ExperienceProps,
  ProjectProps,
} from "@/lib/utilities/types";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiPexels } from "react-icons/si";

export const socialLinks = [
  {
    name: "Pexels",
    icon: SiPexels,
    url: "https://www.pexels.com/@rifqi-maulana-286675026/",
  },
  {
    name: "LinkedIn",
    icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/rfqma",
  },
  {
    name: "GitHub",
    icon: AiFillGithub,
    url: "https://github.com/rfqma",
  },
  {
    name: "Instagram",
    icon: AiFillInstagram,
    url: "https://instagram.com/maruarchive",
  },
  {
    name: "YouTube",
    icon: AiFillYoutube,
    url: "https://www.youtube.com/@maruarchive",
  },
];

export const externalLinks: ExternalLink = {
  CV: "https://drive.google.com/file/d/1Fdgs_s1G10O0Nr5Vip0pjRTf0Z03jZgK/view?usp=sharing",
  EMAIL: "rifqimaulanax@gmail.com",
  MAILTO: "mailto:rifqimaulanax@gmail.com",
  MAP: "https://maps.app.goo.gl/1YJRYAgFmHrrhgj17",
};

export const headerMenuItems: HeaderMenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "V1",
    href: "https://v1.rifqimaulana.xyz",
  },
];

import LogoNextJs from "/public/images/logos/logo-nextjs.svg";
import LogoJavascript from "/public/images/logos/logo-javascript.svg";
import LogoGit from "/public/images/logos/logo-git.svg";
import LogoTailwindCSS from "/public/images/logos/logo-tailwindcss.svg";
import LogoFigma from "/public/images/logos/logo-figma.svg";
import LogoReact from "/public/images/logos/logo-react.svg";
import LogoMongoDB from "/public/images/logos/logo-mongodb.svg";
import LogoNodeJs from "/public/images/logos/logo-nodejs.svg";
import LogoExpressJsDark from "/public/images/logos/logo-express.svg";
import LogoExpressJsLight from "/public/images/logos/logo-express-light.svg";
import LogoPremierePro from "/public/images/logos/logo-premierepro.svg";
import LogoLightroomClassic from "/public/images/logos/logo-lightroomclassic.svg";
import LogoAfterEffects from "/public/images/logos/logo-aftereffects.svg";
import LogoCPP from "/public/images/logos/logo-cpp.svg";
import LogoHTML from "/public/images/logos/logo-html.svg";
import LogoCSS from "/public/images/logos/logo-css.svg";

export const techStacks: TechStack[] = [
  {
    label: "Premiere Pro",
    logo: LogoPremierePro,
    darkModeLogo: LogoPremierePro,
    url: "https://www.adobe.com/id_id/products/premiere.html",
  },
  // {
  //     label: 'Lightroom Classic',
  //     logo: LogoLightroomClassic,
  //     darkModeLogo: LogoLightroomClassic,
  //     url: 'https://www.adobe.com/id_id/products/photoshop-lightroom-classic.html'
  // },
  // {
  //     label: 'Figma',
  //     logo: LogoFigma,
  //     darkModeLogo: LogoFigma,
  //     url: 'https://www.figma.com/'
  // },
  // {
  //     label: 'After Effects',
  //     logo: LogoAfterEffects,
  //     darkModeLogo: LogoAfterEffects,
  //     url: 'https://www.adobe.com/id_id/products/aftereffects.html'
  // },
  // {
  //     label: 'C++',
  //     logo: LogoCPP,
  //     darkModeLogo: LogoCPP,
  //     url: 'https://cplusplus.com/'
  // },
  // {
  //     label: 'HTML',
  //     logo: LogoHTML,
  //     darkModeLogo: LogoHTML,
  //     url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  // },
  {
    label: "Javascript",
    logo: LogoJavascript,
    darkModeLogo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  // {
  //     label: 'CSS',
  //     logo: LogoCSS,
  //     darkModeLogo: LogoCSS,
  //     url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  // },
  {
    label: "Tailwind CSS",
    logo: LogoTailwindCSS,
    darkModeLogo: LogoTailwindCSS,
    url: "https://tailwindcss.com/",
  },

  {
    label: "React",
    logo: LogoReact,
    darkModeLogo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextJs,
    darkModeLogo: LogoNextJs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodeJs,
    darkModeLogo: LogoNodeJs,
    url: "https://nodejs.org/en",
  },
  // {
  //     label: 'Express.js',
  //     logo: LogoExpressJsDark,
  //     darkModeLogo: LogoExpressJsLight,
  //     url: 'https://expressjs.com/'
  // },
  // {
  //     label: 'MongoDB',
  //     logo: LogoMongoDB,
  //     darkModeLogo: LogoMongoDB,
  //     url: 'https://www.mongodb.com/'
  // },
  // {
  //     label: 'Git',
  //     logo: LogoGit,
  //     darkModeLogo: LogoGit,
  //     url: 'https://git-scm.com/'
  // },
];

export const experiences: ExperienceProps[] = [
  {
    id: 1,
    title: "Front-End Developer Support",
    company_name: "Techave Dev",
    company_logo: "/images/company_logos/techave-dev.png",
    end_date: "2023-04-30",
    description:
      "Act as additional support for the Front-End Developer in the web application development project for one of the state-owned companies.",
    start_date: "2023-04-01",
  },
  {
    id: 2,
    title: "Freelance Photographer & Videographer",
    company_name: "Mora Studio",
    company_logo:
      "https://startupjobs.asia/assets/dafd3b11/86942e60/images/default/company-logo-placeholder.png?v=1712892193",
    end_date: "2021-11-01",
    description:
      "Work as a cameraman and video editor. Documenting photos and videos during the event. The studio mostly documenting Chinese-Indonesians wedding and engagement style, also a lot of prewedding concept.",
    start_date: "2020-12-01",
  },
  {
    id: 3,
    title: "Internship Student at Airport Quality Management Unit",
    company_name: "PT. Angkasa Pura I, Yogyakarta International Airport",
    company_logo: "/images/company_logos/ap1.png",
    end_date: "2023-09-05",
    description:
      "Create frameworks and workflows and internship reports. Assist the Unit Manager and Staff in dealing with problems in the field, such as accompanying during audit activities and assisting during internal meetings. Build a lost and found website as an innovation product requested by the company.",
    start_date: "2023-07-05",
  },
];

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: "RZ Barbershop Teaser",
    description: "a mini commercial video for RZ Barbershop.",
    url: "https://www.youtube.com/watch?v=KdqK7SruAT0",
    thumbnail: "/images/thumbnails/project-rzbarbershopteaser.jpg",
    tech_stacks: ["Premiere Pro"],
  },
];
