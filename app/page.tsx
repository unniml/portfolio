import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "./projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Unnikrishnan",
  jobTitle: "Full Stack WordPress Developer",
  url: "https://unnikrishnantech.com",
  sameAs: [
    "https://www.linkedin.com/in/unnikrishnan-m-l-18685110/",
    "https://github.com/unniml",
  ],
  image: "https://unnikrishnantech.com/unni.jpg",
  knowsAbout: [
    "WordPress",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "PHP",
    "React",
    "WooCommerce",
    "JavaScript",
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
