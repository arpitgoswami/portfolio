import 'boxicons'

import { IoPlay } from 'react-icons/io5'
import { IoArrowBackCircle } from 'react-icons/io5'
import { IoArrowForwardCircle } from 'react-icons/io5'
import { LuShuffle } from 'react-icons/lu'
import { MdOutlineReplay } from 'react-icons/md'
import { FaPause } from 'react-icons/fa6'

import { useState, useRef, useEffect } from 'react'

function Prices() {
   const [isPlaying, setIsPlaying] = useState(false)
   const [currentLength, setCurrent] = useState(0.0)
   const [length, setLength] = useState(0.0)

   const audioRef = useRef(null)
   const progressRef = useRef(null)

   useEffect(() => {
      const audio = audioRef.current
      const progress = progressRef.current

      const updateProgress = () => {
         const duration = audio.duration
         const currentTime = audio.currentTime
         const progressPercent = (currentTime / duration) * 100
         progress.style.width = progressPercent + '%'

         setCurrent(currentTime.toFixed(1))
         setLength(duration.toFixed(1))
      }

      audio.addEventListener('timeupdate', updateProgress)

      return () => {
         audio.removeEventListener('timeupdate', updateProgress)
      }
   }, [])

   const togglePlay = () => {
      const audio = audioRef.current

      if (audio.paused) {
         audio.play()
         setIsPlaying(true)
      } else {
         audio.pause()
         setIsPlaying(false)
      }
   }

   return (
      <>
         <div
            id="font-Code"
            className="flex h-[100vh] w-[100wh] items-center justify-center bg-[#141414] text-white"
         >
            <div className="mx-4 w-[auto] space-y-4 rounded-md border-2">
               <div>
                  <div className="flex justify-end">
                     <div className="m-2 h-[0.8rem] w-[0.8rem] rounded-full bg-[#fff]"></div>
                     <div className="my-2 h-[0.8rem] w-[0.8rem] rounded-full bg-[#fff]"></div>
                     <div className="m-2 h-[0.8rem] w-[0.8rem] rounded-full bg-[#fff]"></div>
                  </div>
                  <div className="h-[2px] w-[100%] bg-[white]"></div>
               </div>

               <div>
                  <div className="px-8 pb-8 pt-2">
                     <div className="text-2xl">Player</div>
                     <img
                        className="my-8 h-[20rem] w-[auto] rounded-md shadow-xl"
                        src="https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                     />
                     <div className="text-2xl">Square Music</div>
                     <div className="text-sm opacity-80">Author Name</div>

                     <div className="my-8">
                        <div className="h-[2px] bg-[#fff]">
                           <div
                              ref={progressRef}
                              className="h-[2px] w-[0] bg-[#222] opacity-50"
                           ></div>
                        </div>
                        <div className="mt-1 flex justify-between text-sm opacity-50">
                           <p>{currentLength}</p>
                           <p>{length}</p>
                        </div>
                     </div>

                     <div className="flex items-center justify-between text-2xl">
                        <LuShuffle />
                        <IoArrowBackCircle className="text-3xl" />
                        <button className="text-5xl" onClick={togglePlay}>
                           {isPlaying ? <FaPause /> : <IoPlay />}
                        </button>
                        <IoArrowForwardCircle className="text-3xl" />
                        <MdOutlineReplay />
                     </div>

                     <div className="mt-8 flex justify-between">
                        <p className="opacity-40 hover:opacity-100">UP NEXT</p>
                        <p className="opacity-40 hover:opacity-100">LYRICS</p>
                        <p className="opacity-40 hover:opacity-100">RELATED</p>
                     </div>
                  </div>
               </div>
            </div>
            <audio ref={audioRef} src="dark.mp3"></audio>
         </div>
      </>
   )
}

export default Prices
