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

import RZBarbershopPreview from '/public/images/projects/work-rzbarbershopteaser.jpg'

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
    CV: 'https://drive.google.com/file/d/1kl8Aok4uem13xbpWtpUnXH98MQmJD4Xg/view',
    EMAIL: 'rifqimaulanax@gmail.com',
    MAILTO: 'mailto:rifqimaulanax@gmail.com',
    MAP: 'https://goo.gl/maps/DcXukKwgocguB6sd7'
}

export const headerMenuItems: HeaderMenuItem[] = [
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Works',
        href: '/works'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
]

export const techStacks: TechStack[] = [
    {
        label: 'Premiere Pro',
        logo: LogoPremierePro,
        darkModeLogo: LogoPremierePro,
        url: 'https://www.adobe.com/id_id/products/premiere.html'
    },
    {
        label: 'Lightroom Classic',
        logo: LogoLightroomClassic,
        darkModeLogo: LogoLightroomClassic,
        url: 'https://www.adobe.com/id_id/products/photoshop-lightroom-classic.html'
    },
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
    {
        label: 'HTML',
        logo: LogoHTML,
        darkModeLogo: LogoHTML,
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        label: 'Javascript',
        logo: LogoJavascript,
        darkModeLogo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        label: 'CSS',
        logo: LogoCSS,
        darkModeLogo: LogoCSS,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
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
            'Take part as a cameraman and video editor.',
            'Documenting photos and videos during the event.',
            'The studio mostly documenting chinese indonesians wedding and engagement style, also a lot of pre-wedding concept.'
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
]