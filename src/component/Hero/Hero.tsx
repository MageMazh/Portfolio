function Hero() {
  return (
    <main id="home" className="px-14">
      <section className="grid grid-cols-2 h-screen">
        <div className="flex flex-col gap-3 justify-center">
          <div>
            <p className="text-xl font-light">
              Hello, I&apos;m
            </p>
            <p className="text-4xl font-bold">
              Marcellino Candyawan <br />
            </p>
          </div>
          <p className="text-xl font-light">
            I'm a passionate <span className="text-blue-500">Front-end</span>{" "}
            and <span className="text-blue-500">Android</span> Developer from
            Indonesia
          </p>

          <a
            href="#"
            className="border border-blue-500 text-center w-1/3 py-3 px-8 text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
        <main className="relative">
          <section className="absolute top-40 right-0 w-96 h-80 bg-primary rounded-lg z-1"></section>
          <section className="absolute top-48 right-8 w-96 h-80 border-2 border-solid border-white rounded-lg box-border z-2"></section>
          <img
            className="relative z-3 w-[22rem] h-[32rem] bottom-8 left-56"
            src="/profilepicture.webp"
            alt="profile"
          ></img>
        </main>
      </section>
    </main>
  );
}

export default Hero;
