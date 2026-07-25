// components/about.tsx
import React from "react";
import SectionHeading from "./section-heading";
import dynamic from "next/dynamic";

const ClientSectionObserver = dynamic(
  () => import("@/components/section-view"),
  { ssr: true }
);

export default function About() {
  return (
    <ClientSectionObserver
      sectionName="About"
      className="max-w-[45rem] text-center leading-8 scroll-mt-28 mb-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
       I&rsquo;m a <span className="font-medium">Full Stack WordPress Developer</span> with over 25 years of experience building websites and web applications. I specialize in <span className="font-medium">custom WordPress development</span>, <span className="font-medium">headless WordPress architectures</span>, and <span className="font-medium">modern frontend development</span> using <span className="font-medium">Next.js</span>, <span className="font-medium">TypeScript</span>, <span className="font-medium">Tailwind CSS</span>, and <span className="font-medium">Framer Motion</span>. I enjoy creating fast, scalable, and maintainable digital experiences, with a strong focus on clean code, performance, accessibility, and user experience. 
      </p>
      <p>
        I thrive on solving complex technical challenges and continuously expanding my skills by exploring new technologies and development practices. Whether I&rsquo;m building custom WordPress solutions, integrating APIs, or crafting interactive user interfaces, I&rsquo;m committed to delivering high-quality work that helps businesses achieve their goals.
      </p>
    </ClientSectionObserver>
  );
}
