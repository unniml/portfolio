import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'> 
      <small className='text-sm mb-2'>
        &copy; {new Date().getFullYear()} M L Unnikrishnan Lenin. All rights reserved. 
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>Build with React &amp; Next.js, Typescript, Tailwind CSS, Framer Motion and hosted on Cloudflare. </span>
      </p>
    </footer>
  )
}
