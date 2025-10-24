import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      {/* This is the main content container. 
        It controls the spacing and layout of the logo/text and the links.
      */}
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20 
      py-10 border-b border-gray-500/30 text-gray-500'>

        {/* 1. Logo and Description Section (Flex Item 1) */}
        <div>
          {/* Ensure 'assets' is imported */}
          <img src={assets.logo} alt="logo"
            className='w-32 sm:w-44' />
          <p
            className='max-w-[410px] mt-6'>
            Get the latest news blog from yours truly. All matters arising
            all over Kenya, Africa and the world at large.
          </p>
        </div>

        {/* 2. Links Section (Flex Item 2) 
            w-full is important for wrapping on small screens
            md:w-auto allows it to take only necessary width on larger screens, 
            but you can keep w-[45%] if you want it to occupy more space.
        */}
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-8 sm:gap-10 md:gap-16'>
          {/* Ensure 'footer_data' is imported */}
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3
                className='font-semibold text-base text-gray-900 md:mb-5 mb-2'
              >{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* 3. Copyright Section (Outside the main flex container, at the bottom) */}
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        &copy; {new Date().getFullYear()} Midenga - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
