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
        I am a <span className="font-medium">full stack developer</span> with{" "}
        <span className="font-medium">8 years</span> of experience in reactive
        technologies. I am a{" "}
        <span className="font-medium">passionate full stack developer</span>{" "}
        with a passion for building{" "}
        <span className="italic">responsive web applications</span>. I enjoy
        building <span className="italic">responsive web applications</span>.
        With over 24 years of experience, I have honed my skills in various
        technologies, focusing primarily on{" "}
        <span className="font-medium">React (Next.js)</span> and{" "}
        <span className="font-medium">Tailwind CSS</span>. I am proficient in
        Wordpress, HTML, CSS, and JavaScript. I have a strong foundation in{" "}
        <span className="font-medium">React (Next.js), TypeScript</span> and{" "}
        <span className="font-medium">Tailwind CSS</span>. I enjoy exploring new
        technologies and continuously improving my craft.
      </p>
      <p>
        In my free time, I love to learn new programming languages, and stay
        updated with the latest trends in{" "}
        <span className="font-medium">web development</span>. I also enjoy
        contributing to open source projects and helping others learn{" "}
        <span className="font-medium">web development</span>. I believe in the
        power of community and collaboration, and I am always eager to connect
        with fellow developers.
      </p>
    </ClientSectionObserver>
  );
}
