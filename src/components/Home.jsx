function Home() {
   return (
      <>
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
                  <div className="btn block w-36 border-2 border-[var(--theme-white-shade)] py-2  text-center">
                     Get Started
                  </div>
                  <div className="btn block w-36 border-2 border-[var(--theme-white-shade)] py-2 text-center">
                     Resume
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
