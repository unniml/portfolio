"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGit, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import ClientSectionObserver from '@/components/section-view'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <ClientSectionObserver sectionName='Home' id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'>
      <div className='flex items-center justify-center mb-4 sm:mb-10'>
        <div className='relative'>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 , type: 'tween' }}
          >
            <Image src="/unni.jpg" alt="Unni's Photo" priority={true} width={96} height={96} className='h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl' />            
          </motion.div>

          <motion.span className='text-4xl absolute -bottom-2 -right-2'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 , type: 'spring', stiffness: 125, delay: 0.1 }}
          >👋</motion.span>
        </div>
      </div>
      <motion.h1 className='mt-4 mb-10 px-4 text-xl sm:text-2xl font-medium !leading-[1.5] !sm:leading-[1.7]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span className='font-bold'>Unnikrishnan</span> — a <span className='font-bold'>Full Stack WordPress Developer</span> with <span className='font-bold'>25+ years</span> of web development experience. I build fast, scalable, and maintainable websites using <span className='font-bold'>WordPress, Next.js, TypeScript, and Tailwind CSS</span>. I specialize in custom WordPress development, headless WordPress architectures, and modern frontend experiences that are responsive, accessible, and built for long-term growth.
      </motion.h1>

      <motion.div className='flex flex-col items-center justify-center gap-4 sm:flex-row'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1
      }}
      >
        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me here <BsArrowRight className='inline-block ml-1 opacity-70 group-hover:translate-x-1 transition' onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }} /></Link>

        <a  className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack' href="/CV.pdf" download={true}>Download CV <HiDownload className='inline-block ml-1 opacity-65 group-hover:translate-y-1 transition' /></a>

        <a href="https://www.linkedin.com/in/unnikrishnan-m-l-18685110/" className='bg-white p-4 py-3 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack' target='_blank' aria-label="Visit my LinkedIn profile"><BsLinkedin className='inline-block ml-1' /></a>

        <a href="https://github.com/unniml" className='bg-white p-4 py-3 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack' target='_blank' aria-label="Visit my GitHub profile"><BsGithub className='inline-block ml-1' /></a>
      </motion.div>
    </ClientSectionObserver>
  )
}
