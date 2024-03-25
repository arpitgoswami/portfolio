function Home() {
   return (
      <>
         <div id="header-container" className="flex items-center py-10">
            <div className="px-60 sm:px-6">
               <div className="block w-36 border-2 border-[var(--theme-white-shade)] bg-[var(--theme-white-shade)] py-2 text-center text-[var(--theme-dark-shade)]">
                  Hi Everyone!
               </div>
               <div
                  className="mt-6 text-8xl leading-[1.2] sm:text-5xl sm:leading-[1.2]"
                  id="font-DM empty"
               >
                  Arpit Goswami <br /> Full Stack Developer
               </div>
               <div className="width mb-8 mt-3 text-slate-300 sm:text-sm">
                  Problem-solving full-stack developer committed to designing
                  applications, visual identities, as well as developing
                  critical algorithms.
               </div>
               <div className="flex space-x-4">
                  <div className="btn block w-36 border-2 border-[var(--theme-white-shade)] py-2  text-center">
                     Contact
                  </div>
                  <div
                     className="btn block w-36 border-2 border-[var(--theme-white-shade)] py-2 text-center"
                     onClick={() =>
                        window.open(
                           'https://docs.google.com/document/d/1JEjEhUHbm2Bm9Gu4-oktGI6V3t9JkFn9/edit?usp=sharing&ouid=111097917756348912950&rtpof=true&sd=true',
                           '_blank'
                        )
                     }
                  >
                     Resume
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
