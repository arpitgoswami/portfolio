function Main() {
  return (
    <>
      <div id="about-container" className="mx-60 my-40">
        <p className="my-6 text-8xl">About</p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="my-8 text-slate-300 ">
              I’m Chris Lee, a front-end web developer and Web Page Designer
              based in New York, USA. I've been working for the last 10 years.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="">
              <p className="py-1 block border-2 bg-black text-white w-36 text-center">
                About Me
              </p>
            </a>
          </div>
          <div className="space-y-8">
            <p>PHOTOSHOP</p>
            <span className="progress-bar"></span>
            <p>ILLUSTRATOR</p>
            <span className="progress-bar"></span>
            <p>FIGMA</p>
            <span className="progress-bar"></span>
            <p>AFTER EFFECTS</p>
            <span className="progress-bar"></span>
            <p>INDESIGN</p>
            <span className="progress-bar"></span>
          </div>
        </div>
      </div>
      <div className="mx-60">
        <p className="my-6 text-8xl text-center">Portfolio</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img
              src="https://demo.templatesjungle.com/chris/images/portfolio1.jpg"
              alt=""
            />
            <br />
            <img
              src="https://demo.templatesjungle.com/chris/images/portfolio5.jpg"
              alt=""
            />
            <br />
            <img
              src="https://demo.templatesjungle.com/chris/images/portfolio3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://demo.templatesjungle.com/chris/images/portfolio3.jpg"
              alt=""
            />
            <br />
            <img
              src="https://demo.templatesjungle.com/chris/images/portfolio6.jpg"
              alt=""
            />
            <br />
            <img
              src="https://demo.templatesjungle.com/chris/images/portfolio2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
