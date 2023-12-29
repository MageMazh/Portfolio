function Hero() {
  return (
    <main id="home" className="px-14">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-[45rem] lg:h-screen pt-16 lg:pt-0">
        <main className="flex flex-col gap-3 justify-center">
          <section className="text-center lg:text-left">
            <p className="text-xl font-light">Hello, I&apos;m</p>
            <p className="text-4xl font-bold">
              Marcellino Candyawan <br />
            </p>
          </section>
          <p className="text-xl font-light text-center lg:text-left">
            I'm a passionate <span className="text-blue-500">Front-end</span>{" "}
            and <span className="text-blue-500">Android</span> Developer from
            Indonesia
          </p>

          <div className="flex gap-4 sm:justify-center lg:justify-start">
            <a
              href="#about"
              className="flex items-center justify-center border border-primary text-center w-1/2 sm:w-1/3 py-3 bg-primary px-8 text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >
              Discover
            </a>
            <a
              href="#contact"
              className="border border-primary text-center w-1/2 sm:w-1/3 py-3 px-8 text-white font-semibold transition duration-300 ease-in-out hover:bg-primary hover:opacity-80 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </main>
        <main className="relative h-screen flex items-center justify-center lg:items-start lg:justify-start">
          <section className="absolute top-[14.5rem] right-1/2 translate-x-1/2 -translate-y-1/2 w-72 h-[17rem] bg-primary rounded-lg z-1 lg:w-96 lg:h-80 lg:right-0 lg:top-40 lg:translate-x-0 lg:translate-y-0"></section>
          <section className="absolute top-64 right-1/2 translate-x-[40%] -translate-y-1/2 w-72 h-[17rem] border-2 border-solid border-white rounded-lg box-border z-2 lg:top-48 lg:right-8 lg:w-96 lg:h-80 lg:translate-x-0 lg:translate-y-0"></section>
          <img
            className="absolute z-3 w-72 h-[30rem] top-32 right-1/2 lg:w-[22rem] lg:h-[32rem] lg:top-[-2rem] lg:right-4 -translate-y-1/2 translate-x-1/2 lg:translate-x-0 lg:translate-y-0"
            src="/profilepicture.webp"
            alt="profile"
          ></img>
        </main>
      </section>
    </main>
  );
}

export default Hero;
