import SectionHeading from '@/components/section-heading'
import React from 'react'
import { projectsData } from '@/lib/data'
import Project from '@/components/project'
import dynamic from 'next/dynamic'

const ClientSectionObserver = dynamic(
  () => import('@/components/section-view'),
  { ssr: true }
);

export default function Projects() {

  return (
    <ClientSectionObserver sectionName="Projects" id='projects' className='max-w-[45rem] text-center scroll-mt-28 mb-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </ClientSectionObserver>
  )
}
