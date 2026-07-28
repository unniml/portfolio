import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuCode } from "react-icons/lu";
import indianMetalImg from "@/public/indian-metal-exchange.png";
import ekathraImg from "@/public/ekathra-experiences.png";
import futureImg from "@/public/future-outdoor-newzealand.png";
import medconnectImg from "@/public/medconnect-telemedicine.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "FAQs",
    hash: "#faqs",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Web Developer",
    location: "RTWMatters Pty. Ltd., Australia",
    description:
      "I am working as a senior web developer for 16 years. My responsibilities included developing and maintaining websites, and ensuring the quality of the codebase.",
    icon: React.createElement(LuCode),
    date: "2010 - present",
  },
  {
    title: "Wordpress Developer",
    location: "RDWMedia, India",
    description:
      "I worked as a wordpress developer for 5 years and developed and maintained websites for various clients. My responsibilities included developing custom themes and plugins, and ensuring the quality of the codebase.",
    icon: React.createElement(FaWordpressSimple),
    date: "2021 - 2026",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelance",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Indian Metal Exchange",
    description:
      "Developed and maintained a business platform serving the metal trading and industrial sector.",
    tags: ["Wordpress", "PHP", "Javascript", "ACFPro", "WSForm"],
    imageUrl: indianMetalImg,
    websiteUrl: "https://www.indianmetalexchange.in/",
  },
  {
    title: "Ekathra Experiences",
    description:
      "Developed and maintained a tourism and travel experiences platform focused on showcasing curated travel packages and cultural experiences.",
    tags: ["Wordpress", "PHP", "Javascript", "ACFPro", "WSForm"],
    imageUrl: ekathraImg,
    websiteUrl: "https://ekathraexperiences.com/",
  },
  {
    title: "Future Outdoor New Zealand",
    description:
      "Developed and maintained a WooCommerce-powered website for a New Zealand-based company specializing in fencing, pergolas, carports,",
    tags: ["Wordpress", "PHP", "Javascript", "ACFPro", "WooCommerce"],
    imageUrl: futureImg,
    websiteUrl: "https://futureoutdoor.co.nz/",
  },
  {
    title: "MedConnect - Telemedicine Platform",
    description:
      "Developed and maintained a telemedicine platform for remote healthcare consultations.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "ShadCN UI", "Prisma", "Clerk", "Stripe"],
    imageUrl: medconnectImg,
    websiteUrl: "https://doctor-app-gamma-ruby.vercel.app/",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "ShadCN UI",
  "WordPress",
  "PHP",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "Framer Motion",
] as const;