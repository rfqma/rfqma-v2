import LogoNextJs from '/public/images/logos/logo-nextjs.svg'
import LogoJavascript from '/public/images/logos/logo-javascript.svg'
import LogoGit from '/public/images/logos/logo-git.svg'
import LogoTailwindCSS from '/public/images/logos/logo-tailwindcss.svg'
import LogoFigma from '/public/images/logos/logo-figma.svg'
import LogoReact from '/public/images/logos/logo-react.svg'
import LogoMongoDB from '/public/images/logos/logo-mongodb.svg'
import LogoNodeJs from '/public/images/logos/logo-nodejs.svg'
import LogoExpressJsDark from '/public/images/logos/logo-express.svg'
import LogoExpressJsLight from '/public/images/logos/logo-express-light.svg'
import LogoPremierePro from '/public/images/logos/logo-premierepro.svg'
import LogoLightroomClassic from '/public/images/logos/logo-lightroomclassic.svg'
import LogoAfterEffects from '/public/images/logos/logo-aftereffects.svg'
import LogoCPP from '/public/images/logos/logo-cpp.svg'
import LogoHTML from '/public/images/logos/logo-html.svg'
import LogoCSS from '/public/images/logos/logo-css.svg'

import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { SiPexels } from 'react-icons/si'

import RZBarbershopPreview from '/public/images/projects/project-rzbarbershopteaser.jpg'
import OurBlogPreview from '/public/images/projects/project-ourblog.jpg'
import Valorant101Preview from '/public/images/projects/project-valorant101.jpg'

import TechaveDevLogo from '/public/images/companies/techave-dev.jpeg'
import AngkasaPura1Logo from '/public/images/companies/angkasa-pura-1.jpeg'

import {
    TechStack,
    Experience,
    Project,
    HeaderMenuItem,
    ExternalLink,
} from '@/lib/utilities/types'

export const socialLinks = [
    {
        name: 'Pexels',
        icon: SiPexels,
        url: 'https://www.pexels.com/@rifqi-maulana-286675026/',
    },
    {
        name: 'LinkedIn',
        icon: AiFillLinkedin,
        url: 'https://www.linkedin.com/in/rfqma',
    },
    {
        name: 'GitHub',
        icon: AiFillGithub,
        url: 'https://github.com/rfqma'
    },
    {
        name: 'Instagram',
        icon: AiFillInstagram,
        url: 'https://instagram.com/maruarchive'
    },
    {
        name: 'YouTube',
        icon: AiFillYoutube,
        url: 'https://www.youtube.com/@maruarchive'
    }
]

export const externalLinks: ExternalLink = {
    CV: 'https://drive.google.com/file/d/1Fdgs_s1G10O0Nr5Vip0pjRTf0Z03jZgK/view?usp=sharing',
    EMAIL: 'rifqimaulanax@gmail.com',
    MAILTO: 'mailto:rifqimaulanax@gmail.com',
    MAP: 'https://maps.app.goo.gl/1YJRYAgFmHrrhgj17'
}

export const headerMenuItems: HeaderMenuItem[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'V1',
        href: 'https://v1.rifqimaulana.xyz'
    }
]

export const techStacks: TechStack[] = [
    {
        label: 'Premiere Pro',
        logo: LogoPremierePro,
        darkModeLogo: LogoPremierePro,
        url: 'https://www.adobe.com/id_id/products/premiere.html'
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
        label: 'Javascript',
        logo: LogoJavascript,
        darkModeLogo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    // {
    //     label: 'CSS',
    //     logo: LogoCSS,
    //     darkModeLogo: LogoCSS,
    //     url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    // },
    {
        label: 'Tailwind CSS',
        logo: LogoTailwindCSS,
        darkModeLogo: LogoTailwindCSS,
        url: 'https://tailwindcss.com/'
    },

    {
        label: 'React',
        logo: LogoReact,
        darkModeLogo: LogoReact,
        url: 'https://react.dev/'
    },
    {
        label: 'Next.js',
        logo: LogoNextJs,
        darkModeLogo: LogoNextJs,
        url: 'https://nextjs.org/'
    },
    {
        label: 'Node.js',
        logo: LogoNodeJs,
        darkModeLogo: LogoNodeJs,
        url: 'https://nodejs.org/en'
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
]

export const experiences: Experience[] = [
    {
        logo: LogoNextJs,
        darkModeLogo: LogoNextJs,
        logoAlt: 'Mora Studio logo',
        name: 'Mora Studio',
        position: 'Freelance Photographer & Videographer',
        startDate: new Date(2020, 11),
        currentlyWorkHere: false,
        endDate: new Date(2021, 10),
        summary: [
            'Work as a cameraman and video editor.',
            'Documenting photos and videos during the event.',
            'The studio mostly documenting Chinese-Indonesians wedding and engagement style, also a lot of prewedding concept.'
        ],
    },
    {
        logo: TechaveDevLogo,
        darkModeLogo: TechaveDevLogo,
        logoAlt: 'Techave Dev logo',
        name: 'Techave Dev',
        position: 'Front-End Developer Support',
        startDate: new Date(2023, 3),
        currentlyWorkHere: false,
        endDate: new Date(2023, 3),
        summary: [
            'Act as additional support for the Front-End Developer in the web application development project for one of the state-owned companies.',
        ],
    },
    {
        logo: AngkasaPura1Logo,
        darkModeLogo: AngkasaPura1Logo,
        logoAlt: 'Angkasa Pura 1 logo',
        name: 'PT. Angkasa Pura I, Yogyakarta International Airport',
        position: 'Internship Student at Airport Quality Management Unit',
        startDate: new Date(2023, 6),
        currentlyWorkHere: false,
        endDate: new Date(2023, 8),
        summary: [
            'Create frameworks and workflows and internship reports.',
            'Assist the Unit Manager and Staff in dealing with problems in the field, such as accompanying during audit activities and assisting during internal meetings.',
            'Build a lost and found website as an innovation product requested by the company.'
        ],
    },
]

export const projects: Project[] = [
    {
        name: 'RZ Barbershop Teaser',
        description:
            'a mini commercial video for RZ Barbershop.',
        url: 'https://www.youtube.com/watch?v=KdqK7SruAT0',
        previewImage: RZBarbershopPreview,
        techStacks: [
            'Premiere Pro',
        ],
    },
    {
        name: 'Our Blog',
        description:
            'simple blog web based app.',
        url: 'https://blog.rifqimaulana.xyz',
        previewImage: OurBlogPreview,
        techStacks: [
            'Next.js',
            'TypeScript',
            'Firebase',
            'PostgreSQL',
            'Prisma',
            'Tailwind CSS',
            'React-Quill'
        ],
    },
    {
        name: 'Valorant 101',
        description:
            'data display playground from valorant-api.com',
        url: 'https://valorant101.vercel.app',
        previewImage: Valorant101Preview,
        techStacks: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
        ],
    },
]
