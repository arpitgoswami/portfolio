import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

import { useState } from 'react'
import { useTransition } from 'react'

import { motion } from 'framer-motion'

import Home from './Home'
import About from './About'

import ReactDOM from 'react-dom'

function Header() {
   const [status, setStatus] = useState('flex')
   const [toggle, setToggle] = useState(true)

   const toggleSidebar = () => {
      if (status === 'flex') {
         setStatus('none')
         setToggle(true)
      } else {
         setStatus('flex')
         setToggle(false)
      }
   }

   function renderApp(component, str) {
      ReactDOM.render(component, document.getElementById('workspace'))
      toggleSidebar()
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
                  className="duration-300 hover:opacity-50"
               >
                  {toggle ? <HiOutlineBars3BottomRight /> : <RxCross2 />}
               </button>
            </div>
         </div>

         <motion.div
            initial={{ opacity: 0, zIndex: '10' }}
            animate={toggle ? {} : { opacity: 1 }}
            transition={{ duration: 0.5 }}
         >
            <div
               id="sidebar"
               style={{ display: status }}
               className="flex items-center justify-center border-r-[1px] border-[var(--theme-white-shade)] bg-[var(--theme-dark-shade)] text-[var(--theme-white-shade)]"
            >
               <div className="space-y-4 text-3xl">
                  <div
                     className="duration-300 hover:opacity-50"
                     onClick={() => renderApp(<Home />)}
                  >
                     Home
                  </div>
                  <div
                     className="duration-300 hover:opacity-50"
                     onClick={() => renderApp(<About />)}
                  >
                     About
                  </div>
               </div>
            </div>
         </motion.div>

         <div id="workspace">
            <Home />
         </div>
      </>
   )
}

export default Header
