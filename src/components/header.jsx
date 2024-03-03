import { HiOutlineBars3BottomRight } from 'react-icons/hi2'

function Header() {
   return (
      <>
         <div id="header-container" className="py-10">
            <div className="mx-8 flex items-center justify-between text-3xl sm:mx-6">
               <div>Arpit.</div>
               <div>
                  <HiOutlineBars3BottomRight />
               </div>
               <nav className="hidden">
                  <div>Home</div>
                  <div>Designs</div>
                  <div>Achivements</div>
                  <div>Contact</div>
               </nav>
            </div>
            <div className="mx-60 my-10 sm:mx-6">
               <div className="block w-36 border-2 border-white bg-white py-1 text-center text-black">
                  Hi Everyone !
               </div>
               <div className="my-6 text-8xl sm:text-5xl">
                  Arpit Goswami <br /> Full Stack Developer
               </div>
               <div className="width my-8 text-slate-300 sm:text-sm">
                  Make designs mainly logos, visual identities, apps & websites,
                  social media and magazines.
               </div>
               <a href="">
                  <div className="btn block w-36 border-2 border-white py-1 text-center">
                     GET IN TOUCH
                  </div>
               </a>
            </div>
         </div>
      </>
   )
}

export default Header
