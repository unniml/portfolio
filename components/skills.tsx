"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ClientSectionObserver = dynamic(
  () => import('@/components/section-view'),
  { ssr: true }
);

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: index * 0.05 } }),
};

export default function Skills() {
  return (
    <ClientSectionObserver sectionName="Skills" id='skills' className='max-w-[45rem] text-center leading-8 scroll-mt-28 mb-28'>
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap gap-2 justify-center text-lg text-gray-800'>
        {
          skillsData.map((skill, index) => (
            <motion.li key={index} className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            >{skill}</motion.li>
          ))
        }
      </ul>
    </ClientSectionObserver>
  )
}
