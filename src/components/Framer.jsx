import { motion } from 'framer-motion'
import { useState } from 'react'

function Framer() {
   const [abc, setAbc] = useState('flex')

   return (
      <>
         <motion.div
            className="box"
            initial={{ opacity: 0, font: 20 }}
            animate={{ opacity: 1, font: 40 }}
            transition={{ duration: 10, type: 'spring' }}
         >
            <div className="content">
               <h1>Hello, world!</h1>
               <p>This is a simple Framer Motion animation.</p>
            </div>
         </motion.div>
      </>
   )
}

export default Framer
