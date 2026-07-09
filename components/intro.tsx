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
      <div className='flex items-center justify-center'>
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
      <motion.h1 className='mt-4 mb-10 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5] !sm:leading-[1.7]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hi, I'm Unnikrishnan</span>. I'm a <span className='font-bold'>full stack developer</span> with <span className='font-bold'>8 years</span> of experience. I enjoy building <span className='italic'>responsive web applications</span> and exploring <span className='italic'>new technologies</span>. My focus is <span className='underline'>React(Next.js) and Tailwind.</span>
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

        <a href="https://www.linkedin.com/in/your-profile" className='bg-white p-4 py-3 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack' target='_blank'><BsLinkedin className='inline-block ml-1' /></a>

        <a href="https://www.linkedin.com/in/your-profile" className='bg-white p-4 py-3 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack' target='_blank'><BsGithub className='inline-block ml-1' /></a>
      </motion.div>
    </ClientSectionObserver>
  )
}
