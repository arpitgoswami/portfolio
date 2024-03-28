import { useState } from 'react'

function SignUp() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [pass, setPass] = useState('')
   const [confirmPass, setConfirmPass] = useState('')

   return (
      <>
         <div className="flex h-[100vh] w-[100wh] items-center justify-center bg-[#333]">
            <div
               className="rounded-[2rem]  bg-[#222] p-10 text-white shadow-2xl"
               id="font-Code"
            >
               <p className="mb-8 text-3xl font-bold">Get Started</p>
               <div className="space-y-8 py-8 text-sm">
                  <div>
                     <p>NAME</p>
                     <input
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                     />
                     <hr />
                  </div>

                  <div>
                     <p>EMAIL ADDRESS</p>
                     <input />
                     <hr />
                  </div>

                  <div>
                     <p>PASSWORD</p>
                     <input />
                     <hr />
                  </div>

                  <div>
                     <p>CONFIRM PASSWORD</p>
                     <input />
                     <hr />
                  </div>
               </div>

               <div className="mt-8 flex justify-center">
                  <button
                     type="submit"
                     className="rounded-[2rem] bg-[#fff] px-8 py-2 text-[#222] duration-200 active:-translate-y-2"
                     onClick={() => console.log(name)}
                  >
                     Sign Up
                  </button>
               </div>

               <p
                  className="mt-8 cursor-pointer text-center text-sm"
                  onClick={() => window.location.reload()}
               >
                  Already a member? Sign in
               </p>
            </div>
         </div>
      </>
   )
}

export default SignUp
