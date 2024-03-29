import type { StaticImageData } from "next/image";

export type TechStack = {
    logo?: string | StaticImageData
    darkModeLogo?: string | StaticImageData
    label: string
    url: string
}

export type Experience = {
    logo: string | StaticImageData
    darkModeLogo?: string | StaticImageData
    logoAlt: string
    name: string
    position: string
    currentlyWorkHere?: boolean
    startDate: Date
    endDate?: Date | null
    summary: string[]
}

export type Project = {
    name: string
    description: string
    url: string
    previewImage: string | StaticImageData
    techStacks: string[]
}

export type HeaderMenuItem = {
    label: string
    href: string
}

export type ExternalLink = {
    CV: string
    EMAIL: string
    MAILTO: string
    MAP: string
}