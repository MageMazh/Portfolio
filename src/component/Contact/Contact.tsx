function Contact() {
  return (
    <main id="contact" className="px-14 py-14">
      <h2
        className="text-xs font-semibold uppercase tracking-widest text-white font-poppins relative 
      after:content-[''] after:h-px after:w-full after:bg-primary after:inline-block after:my-1 after:mx-auto"
      >
        Contact
      </h2>

      <p className="relative text-3xl font-bold uppercase font-poppins text-white mb-4">
        Let's get <span className="text-blue-500">connect</span> with me
      </p>
      <main
        id="contact"
        className="flex flex-col md:flex-row gap-12 md:pb-14 dark:bg-slate-800"
      >
        <section className="w-full md:w-2/3">
          <form action="https://formspree.io/f/mqkrebed" method="POST">
            <div className="mb-8 w-full">
              <label className="text-base font-bold text-primary">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md bg-slate-200 p-3 text-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-8 w-full">
              <label className="text-base font-bold text-primary">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md bg-slate-200 p-3 text-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-8 w-full">
              <label className="text-base font-bold text-primary">Pesan</label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full rounded-md bg-slate-200 p-3 text-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div className="w-full">
              <button className="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-md">
                Kirim
              </button>
            </div>
          </form>
        </section>
        <section className="flex p-4 w-full md:w-1/3 h-1/4 mx-auto my-auto flex-col gap-4 border border-solid border-gray-300">
          <p className="font-semibold text-xl">Or you can message me here</p>
          <div className="flex gap-3">
            <svg
              role="img"
              width="20"
              className="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Discord</title>
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
            <p>Mage#9298</p>
          </div>
          <div className="flex gap-3">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="20"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Gmail</title>
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
            <p className="break-all">marcellinocandyawan@gmail.com</p>
          </div>
        </section>
      </main>
    </main>
  );
}

export default Contact;
