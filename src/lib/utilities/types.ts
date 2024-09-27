import type { StaticImageData } from "next/image";

export type TechStack = {
  logo?: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type HeaderMenuItem = {
  label: string;
  href: string;
};

export type ExternalLink = {
  CV: string;
  EMAIL: string;
  MAILTO: string;
  MAP: string;
};

export type ExperienceProps = {
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  end_date: string;
  start_date: string;
  description: string;
};

export type ProjectProps = {
  id: number;
  description: string;
  name: string;
  url: string;
  thumbnail: string;
  tech_stacks: [string];
};
