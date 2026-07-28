"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { faqData } from "@/lib/faq-data";
import SectionHeading from "./section-heading";
import { HiChevronDown } from "react-icons/hi";
import dynamic from "next/dynamic";

const ClientSectionObserver = dynamic(
  () => import("@/components/section-view"),
  { ssr: true }
);

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqData)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-black/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-gray-900 hover:text-gray-950 transition"
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronDown className="text-gray-400 shrink-0" size={20} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? contentRef.current?.scrollHeight ?? 0 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div ref={contentRef}>
          <p className="pb-4 text-gray-700 leading-relaxed whitespace-pre-line">{item.answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ClientSectionObserver
      sectionName="FAQs"
      id="faqs"
      className="max-w-[45rem] text-center scroll-mt-28 mb-28"
    >
      <SectionHeading>Frequently asked questions</SectionHeading>
      <div className="text-left">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </ClientSectionObserver>
  );
}
