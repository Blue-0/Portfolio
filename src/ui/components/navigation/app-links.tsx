import { AppLinks } from "@/types/app-links";
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projet",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Fomation",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Design System",
        baseUrl: "/",
        type: "internal"
    },
];

const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "À propos",
        baseUrl: "/",
        type: "internal"
    },
];

export const footerRSLinks: AppLinks[] = [
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com/denis.fluteaux/",
        type: "external",
        icon: TbBrandInstagram,
    },
    {
        label: "GitHub",
        baseUrl: "https://github.com/Blue-0",
        type: "external",
        icon: TbBrandGithub,
    },
    {
        label: "LinkedIn",
        baseUrl: "https://www.linkedin.com/in/denis-fluteaux/",
        type: "external",
        icon: TbBrandLinkedin,
    },
];

export const footerLinks = [
    {
        label: "Site", 
        links: footerApplicationLinks,
    },
    {
        label: "Information", 
        links: footerInformationLinks,
    },
    {
        label: "Réseau Sociaux", 
        links: footerRSLinks,
    },
]