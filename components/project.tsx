"use client";
// Project component to display individual project details

import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  websiteUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
console.log(websiteUrl);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20rem] group-even:pl-8 hover:bg-gray-50 transition">
      <Link href={websiteUrl} target="_blank" className="absolute inset-0 z-10" aria-label={`Visit ${title}'s website`}>
        <Image
          src={imageUrl.src}
          alt={`${title} project screenshot`}
          quality={95}
          width={452}
          height={500}
          className="sm:absolute sm:top-8 sm:-right-40 sm:w-[28.25rem] sm:rounded-t-lg sm:shadow-2xl sm:group-even:right-[initial] sm:group-even:-left-40 sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-[1.04] sm:transition sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2 w-full h-48 object-cover"
        />
      </Link>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-1/2 flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap gap-2 my-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
