import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

import { useState } from 'react'
import { useTransition } from 'react'

import { motion } from 'framer-motion'

function Header() {
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
                  className="duration-300 hover:opacity-50"
               >
                  {toggle ? <HiOutlineBars3BottomRight /> : <RxCross2 />}
               </button>
            </div>
         </div>
      </>
   )
}

export default Header
