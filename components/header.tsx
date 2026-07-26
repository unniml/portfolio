"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { HiMenu, HiX } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 pb-18 sm:pb-0 h-[3.5rem] w-full rounded-none border-white backdrop-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.name}
              className="h-3/4 flex items-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition", {
                "text-gray-950": activeSection === link.name,
              })} href={link.hash}
                onClick={() => {setActiveSection(link.name); setTimeOfLastClick(Date.now());}}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span className="bg-gray-100 absolute inset-0 rounded-full -z-10"
                   layoutId="activeSection"
                   transition={{ type: "spring", stiffness: 380, damping: 30 }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="sm:hidden fixed top-2 right-4 z-[1000]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg border border-black/5"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sm:hidden fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[4rem] left-4 right-4 rounded-2xl bg-white shadow-xl border border-black/5 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      className={clsx(
                        "flex w-full items-center justify-center px-4 py-3 rounded-xl text-[0.9rem] font-medium transition",
                        activeSection === link.name
                          ? "text-gray-950 bg-gray-100"
                          : "text-gray-500 hover:text-gray-950 hover:bg-gray-50"
                      )}
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
