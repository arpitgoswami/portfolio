function Footer() {
  return (
    <>
      <footer className=" bg-black">
        <div className="mx-60 pt-16 grid grid-cols-2 gap-12">
          <div>
            <p className="text-4xl font-medium text-white">Arpit</p>
            <p className="my-4 text-white">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
          <div>
            <p className="text-2xl font-medium text-white">Get Notified</p>
            <p className="my-4 text-white">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
            <input type="text" />
            <button className="text-white">Subscribe</button>
          </div>
        </div>
        <p className="text-center pb-16 text-white">
          © Copyright Glint 2022 | Site Template by Colorlib
        </p>
      </footer>
    </>
  );
}

export default Footer;
