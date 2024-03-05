import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

import { useState } from 'react'

function Home() {
   const [status, setStatus] = useState('none')
   const [toggle, setToggle] = useState(true)

   const toggleSidebar = () => {
      if (status == 'flex') {
         setStatus('none')
         setToggle(true)
      } else {
         setStatus('flex')
         setToggle(false)
      }
   }

   return (
      <>
         <div
            id="header-first"
            className="border-b-[1px] bg-[#111] px-8 py-6 text-[#fff] sm:px-6"
         >
            <div className="flex items-center justify-between text-3xl ">
               <div>Arpit.</div>
               <button onClick={toggleSidebar}>
                  {toggle ? <HiOutlineBars3BottomRight /> : <RxCross2 />}
               </button>
            </div>
         </div>
         <div id="header-container" className="flex items-center py-10">
            <div className="px-60 sm:px-6">
               <div className="block w-36 border-2 border-white bg-white py-1 text-center text-black">
                  Hi Everyone !
               </div>
               <div className="my-6 text-8xl leading-[1.2] sm:text-5xl sm:leading-[1.2]">
                  Arpit Goswami <br /> Full Stack Developer
               </div>
               <div className="width my-8 text-slate-300 sm:text-sm">
                  Make designs mainly logos, visual identities, apps & websites,
                  social media and magazines.
               </div>
               <div className="flex space-x-4">
                  <div className="btn block w-36 border-2 border-white py-1 text-center">
                     Get Started
                  </div>
                  <div className="btn block w-36 border-2 border-white py-1 text-center">
                     Menu Panel
                  </div>
               </div>
            </div>
         </div>
         <div
            id="header-last"
            className="header-second border-t-[1px] bg-[#111] px-8 py-6 text-[#fff] sm:px-6"
         >
            <div className="flex items-center justify-between text-3xl ">
               Icons.
            </div>
         </div>

         <div
            id="sidebar"
            style={{ display: status }}
            className="flex items-center justify-center border-r-[1px] bg-[#111] text-white"
         >
            <div className="space-y-4 text-3xl">
               <div>Home</div>
               <div>About</div>
            </div>
         </div>
      </>
   )
}

export default Home
