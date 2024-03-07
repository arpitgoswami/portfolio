import '../../styles/about.css'

function About() {
   return (
      <>
         <div id="container" className="flex overflow-y-auto px-6 py-32">
            <div className="space-y-4">
               <div className="text-4xl" id="font-DM">
                  About
               </div>

               <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
               </div>

               <div className="space-y-2 border border-[var(--theme-dark-shade)] p-4">
                  <div className="text-3xl font-semibold">3.5 million+</div>
                  <div className="text-xl">estate planning docs</div>
                  <div>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident.
                  </div>
               </div>

               <div className="space-y-2 border border-[var(--theme-dark-shade)] p-4">
                  <div className="text-3xl font-semibold">2 million+</div>
                  <div className="text-xl">businesses</div>
                  <div>
                     Helping entrepreneurs turn ideas into bussinesses over 2
                     million times.
                  </div>
               </div>

               <div className="space-y-2 border border-[var(--theme-dark-shade)] p-4">
                  <div className="text-3xl font-semibold">2 million+</div>
                  <div className="text-xl">businesses</div>
                  <div>
                     Helping entrepreneurs turn ideas into bussinesses over 2
                     million times.
                  </div>
               </div>

               <div className="pt-8 text-4xl" id="font-DM">
                  Skills
               </div>

               <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
               </div>

               <div className="space-y-8 pb-2 pt-4">
                  <div>
                     <div className="text-xl font-semibold">
                        React Programming
                     </div>
                     <div className="text-xs">-- Advance</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>

                  <div>
                     <div className="text-xl font-semibold">
                        Another Programming
                     </div>
                     <div className="text-xs">-- Advance</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>

                  <div>
                     <div className="text-xl font-semibold">
                        Badge Programming
                     </div>
                     <div className="text-xs">-- Advance</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>

                  <div>
                     <div className="text-xl font-semibold">MERN Stack</div>
                     <div className="text-xs">-- Advance</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default About
