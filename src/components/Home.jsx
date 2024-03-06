import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoReddit } from 'react-icons/io5'

import { useState } from 'react'
import { useTransition } from 'react'

function Home() {
   const [status, setStatus] = useState('none')
   const [toggle, setToggle] = useState(true)
   const [isPending, startTransition] = useTransition({ timeoutMs: 3000 })

   const toggleSidebar = () => {
      if (status === 'flex') {
         startTransition(() => {
            setStatus('none')
            setToggle(true)
         })
      } else {
         startTransition(() => {
            setStatus('flex')
            setToggle(false)
         })
      }
   }

   return (
      <>
         <div
            id="header-first"
            className="border-b-[1px] border-[var(--theme-white-shade)] bg-[var(--theme-dark-shade)] px-8 py-6 text-[var(--theme-white-shade)] sm:px-6"
         >
            <div className="flex items-center justify-between text-3xl ">
               <div>Arpit.</div>
               <button
                  onClick={toggleSidebar}
                  className="hover:opacity-50 duration-300"
               >
                  {toggle ? <HiOutlineBars3BottomRight /> : <RxCross2 />}
               </button>
            </div>
         </div>
         <div id="header-container" className="flex items-center py-10">
            <div className="px-60 sm:px-6">
               <div className="block w-36 border-2 border-[var(--theme-white-shade)] bg-[var(--theme-white-shade)] py-2 text-center text-[var(--theme-dark-shade)]">
                  Hi Everyone !
               </div>
               <div
                  className="mt-6 text-8xl leading-[1.2] sm:text-5xl sm:leading-[1.2]"
                  id="font-DM"
               >
                  Arpit Goswami <br /> Full Stack Developer
               </div>
               <div className="width mb-8 mt-3 text-slate-300 sm:text-sm">
                  Make designs mainly logos, visual identities, apps & websites,
                  social media and magazines.
               </div>
               <div className="flex space-x-4">
                  <div className="btn block w-36 border-2 border-[var(--theme-white-shade)] py-2 text-center">
                     Get Started
                  </div>
                  <div className="btn block w-36 border-2 border-[var(--theme-white-shade)] py-2 text-center">
                     Resume
                  </div>
               </div>
            </div>
         </div>

         <div
            id="header-last"
            className="header-second border-[var(--theme-white-shade)] border-t-[1px] bg-[var(--theme-dark-shade)] px-8 py-6 text-[var(--theme-white-shade)] sm:px-6"
         >
            <div className="flex items-center space-x-4 text-lg ">
               <div className="border border-[var(--theme-white-shade)] border-[2px] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <FaGithub />
               </div>
               <div className="border border-[var(--theme-white-shade)] border-[2px] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <FaLinkedinIn />
               </div>
               <div className="border border-[var(--theme-white-shade)] border-[2px] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <FaInstagram />
               </div>
               <div className="border border-[var(--theme-white-shade)] border-[2px] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <IoLogoReddit />
               </div>
            </div>
         </div>

         <div
            id="sidebar"
            style={{ display: status }}
            className="flex items-center justify-center border-[var(--theme-white-shade)] border-r-[1px] bg-[var(--theme-dark-shade)] text-[var(--theme-white-shade)]"
         >
            <div className="space-y-4 text-3xl">
               <div className="hover:opacity-50 duration-300">Home</div>
               <div className="hover:opacity-50 duration-300">About</div>
            </div>
         </div>
      </>
   )
}

export default Home
