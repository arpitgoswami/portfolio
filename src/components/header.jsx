import { HiOutlineBars3BottomRight } from 'react-icons/hi2'

function Header() {
   return (
      <>
         <div id="header-container" className="py-10 flex items-center">
            <div className="mx-60 my-10 sm:mx-6">
               <div className="block w-36 border-2 border-white bg-white py-1 text-center text-black">
                  Hi Everyone !
               </div>
               <div className="my-6 text-8xl sm:text-5xl leading-[1.2] sm:leading-[1.2]">
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
      </>
   )
}

export default Header
