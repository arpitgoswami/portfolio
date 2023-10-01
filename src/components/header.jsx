function Header() {
  return (
    <>
      <div id="header-container" className="py-10">
        <div className="sm:mx-6 mx-8 text-3xl flex justify-between">
          <p>Arpit.</p>
          <p>Icons</p>
          <nav className="hidden">
            <p>Home</p>
            <p>Designs</p>
            <p>Achivements</p>
            <p>Contact</p>
          </nav>
        </div>
        <div className="sm:mx-6 mx-60 my-10">
          <p className="px-2 py-1 text-xl bg-slate-500  text-center w-36">
            Hi! Everyone
          </p>
          <p className="sm:text-5xl my-6 text-8xl">
            Chris Lee <br /> Brand Designer
          </p>
          <p className="sm:text-sm my-8 text-slate-300 ">
            Make designs mainly logos, visual identities, apps
            <br /> & websites, social media and magazines.
          </p>
          <a href="">
            <p className="py-1 block border-2 border-white w-36 text-center">
              GET IN TOUCH
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
