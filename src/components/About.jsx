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
                  A passionate pre-final year engineering student, mastered the
                  expertise in software development, specialized in MERN stack
                  and Java programming.
               </div>

               <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                  <div className="space-y-2 border border-[var(--theme-dark-shade)]">
                     <img
                        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        id="about-img"
                        alt="404: Image Not Found"
                     />
                     <div className="p-4">
                        <div className="text-2xl font-semibold">
                           Programming
                        </div>
                        <div className="text-lg opacity-60">-- profession</div>
                        <div>
                           As programming stands as my chosen profession, I am
                           deeply engaged in the intricate interplay of logic
                           and creativity, orchestrating solutions that
                           seamlessly unite human conceptualization with digital
                           manifestation. In the dynamic realm of technology,
                           characterized by perpetual evolution, I am committed
                           to a path of perpetual learning, embracing new
                           methodologies and tools to maintain a position of
                           foresight and relevance.{' '}
                        </div>
                     </div>
                  </div>

                  <div className="space-y-2 border border-[var(--theme-dark-shade)]">
                     <img
                        src="https://images.pexels.com/photos/5980921/pexels-photo-5980921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        id="about-img"
                        alt="404: Image Not Found"
                     />
                     <div className="p-4">
                        <div className="text-2xl font-semibold">Blockchain</div>
                        <div className="text-lg opacity-60">-- interest</div>
                        <div>
                           As blockchain captivates my interest, I find myself
                           deeply engrossed in exploring the intricate workings
                           of decentralized systems, where cryptographic
                           principles and distributed consensus mechanisms
                           converge to redefine trust and transparency in
                           digital transactions. Each block mined, each smart
                           contract deployed, represents a captivating journey
                           into the realms of cryptography, algorithms, and
                           decentralized governance, unveiling the potential to
                           reshape industries and empower individuals worldwide.
                        </div>
                     </div>
                  </div>
               </div>

               <div className="pt-8 text-4xl" id="font-DM">
                  Core Skills
               </div>

               <div>
                  Always eager to develop some extraordinary, I have acquired a
                  diverse set of technical core skills across various
                  technologies. The following are the primary areas in which I
                  have taken the lead and honed my expertise.
               </div>

               <div className="space-y-8 pb-2 pt-4">
                  <div>
                     <div className="text-xl font-semibold">
                        Java Programming
                     </div>
                     <div className="text-xs">-- Advance</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>

                  <div>
                     <div className="text-xl font-semibold">
                        React & MERN Stack
                     </div>
                     <div className="text-xs">-- Advance</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>

                  <div>
                     <div className="text-xl font-semibold">
                        AWS Cloud Engine
                     </div>
                     <div className="text-xs">-- Intermediate</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>

                  <div>
                     <div className="text-xl font-semibold">
                        Blockchain Solidity Programming
                     </div>
                     <div className="text-xs">-- Beginner</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>
               </div>

               <div className="pt-8 text-4xl" id="font-DM">
                  Soft Skills
               </div>

               <div>
                  In addition to core competencies, proficiency in business soft
                  skills is imperative for effective presentation and
                  interaction within an organization. The following soft skills
                  have been honed by me.
               </div>
               <div className="space-y-8 pb-2 pt-4">
                  <div>
                     <div className="text-xl font-semibold">
                        Problem Solving
                     </div>
                     <div className="text-xs">-- Beginner</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>

                  <div>
                     <div className="text-xl font-semibold">
                        Communication Skills
                     </div>
                     <div className="text-xs">-- Beginner</div>
                     <span className="mt-2" id="progress-bar"></span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default About
