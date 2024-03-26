import { useState } from 'react'
import '../../styles/contact.css'

import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

function Contact() {
   const [state, setState] = useState('')

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [company, setCompany] = useState('')
   const [designation, setDesignation] = useState('')
   const [message, setMessage] = useState('')

   async function Submit() {
      await setDoc(doc(db, 'Contact', name), {
         name: name,
         email: email,
         company: company,
         designation: designation,
         message: message,
      })
         .then(console.log('Successfully Entered'), setState('flex'))
         .catch((e) => console.log(e))
   }

   function Reload() {
      window.location.reload()
   }

   return (
      <>
         <div
            id="font-Code"
            className="flex h-[100vh] w-[100wh] items-center justify-center bg-[#333] text-white"
         >
            <div
               id="visibleContainer"
               className="mx-4 w-[24rem] space-y-4 rounded-[2rem] bg-[#222] py-8 shadow-2xl"
            >
               <div className="mx-8 text-2xl font-bold">Get In Touch</div>
               <div className="px-8 text-sm">
                  <div className="">Full Name</div>
                  <input
                     name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <hr />

               <div className="px-8 text-sm">
                  <div>Email</div>
                  <input
                     name="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <hr />

               <div className="px-8 text-sm">
                  <div>Company</div>
                  <input
                     name="company"
                     value={company}
                     onChange={(e) => setCompany(e.target.value)}
                  />
               </div>
               <hr />

               <div className="px-8 text-sm">
                  <div>Designation</div>
                  <input
                     name="designation"
                     value={designation}
                     onChange={(e) => setDesignation(e.target.value)}
                  />
               </div>
               <hr />

               <div className="px-8 text-sm">
                  <div>Message</div>
                  <textarea
                     name="message"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                     className="rounded bg-[#fff] px-2 py-1 text-[#222] duration-200 hover:bg-[#999] active:bg-[#999]"
                     onClick={Submit}
                  >
                     Submit
                  </button>
               </div>

               <div id="hiddenContainer" style={{ display: state }}>
                  <div className="space-y-8">
                     <p>
                        Thank <br />
                        You.
                     </p>
                     <hr />
                     <p className="text-[1.2rem]">We'll be in touch shortly!</p>
                     <button
                        className="rounded bg-[#fff] px-2 py-1 text-sm text-[#222] duration-200 hover:bg-[#999] active:bg-[#999]"
                        onClick={Reload}
                     >
                        Reset
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Contact
