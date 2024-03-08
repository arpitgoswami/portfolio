import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoReddit } from 'react-icons/io5'

function Footer() {
   return (
      <>
         <div
            id="header-last"
            className="header-second border-t-[1px] border-[var(--theme-white-shade)] bg-[var(--theme-dark-shade)] px-8 py-6 text-[var(--theme-white-shade)] sm:px-6"
         >
            <div className="flex items-center space-x-4 text-lg ">
               <div className="border border-[2px] border-[var(--theme-white-shade)] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <FaGithub />
               </div>
               <div className="border border-[2px] border-[var(--theme-white-shade)] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <FaLinkedinIn />
               </div>
               <div className="border border-[2px] border-[var(--theme-white-shade)] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <FaInstagram />
               </div>
               <div className="border border-[2px] border-[var(--theme-white-shade)] p-2 duration-300 hover:bg-[var(--theme-white-shade)] hover:text-[var(--theme-dark-shade)]">
                  <IoLogoReddit />
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer