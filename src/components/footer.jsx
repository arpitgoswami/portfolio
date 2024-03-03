function Footer() {
   return (
      <>
         <footer style={{ background: '#111111', color: '#595959' }}>
            <div className="mx-60 grid grid-cols-2 gap-12 pt-16 sm:mx-6 sm:grid-cols-1">
               <div>
                  <p
                     className="m-0 text-4xl font-semibold"
                     style={{ color: '#3AB449' }}
                  >
                     Arpit
                  </p>
                  <p className="my-4 ">
                     Proin eget tortor risus. Mauris blandit aliquet elit, eget
                     tincidunt nibh pulvinar a. Praesent sapien massa, convallis
                     a pellentesque nec, egestas non nisi. Mauris blandit
                     aliquet elit, eget tincidunt nibh pulvinar a. Nulla
                     porttitor accumsan tincidunt. Nulla porttitor accumsan
                     tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
                  </p>
               </div>
               <div>
                  <p
                     className="text-lg font-medium"
                     style={{ color: '#FFFFF0' }}
                  >
                     Get Notified
                  </p>
                  <p className="my-4">
                     Quia quo qui sed odit. Quaerat voluptas autem
                     necessitatibus vitae aut non alias sed quia. Ut itaque enim
                     optio ut excepturi deserunt iusto porro.
                  </p>
                  <input type="text" />
                  <button className="text-white">Subscribe</button>
               </div>
            </div>
            <p className="pb-16 text-center">
               © Copyright Arpit 2022 | Site Template by{' '}
               <span style={{ color: '#FFFFF0' }}>Colorlib</span>
            </p>
         </footer>
      </>
   )
}

export default Footer
