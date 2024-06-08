function Project() {
  const imageWebsiteProjectnames = [
    {
      title: "Grademica",
      description: "Course grade input management information system",
    },
    {
      title: "OKFT",
      description:
        'Website "Organisasi Kemahasiswaan Informatika Fakultas Teknik"',
    },
    { title: "Portfolio", description: "My personal portfolio" },
    {
      title: "Calculator",
      description: "A calculator that supports light and dark display modes.",
    },
    {
      title: "NotesApp",
      description:
        "A notes application that implements the Create, Read, Update, and Delete (CRUD) function integrated with the database.",
    },
    {
      title: "SpotifyClone",
      description:
        "Create a Spotify clone website using the Spotify API",
    },
  ];

  const imageAndroidProjectnames = [
    {
      title: "Trails",
      description: "Personalized City Tour Companion App",
    },
    {
      title: "Catpedia",
      description:
        'The application that provides various information about various types of cats from the API',
    },
    { title: "AboutHealth", description: "An application that is able to analyze images to determine whether the image shows cancer or not" },
    {
      title: "DicodingStory",
      description: "An application that empowers you to share your personal story with the entire world",
    },
  ];

  return (
    <main id="project" className="px-14 py-14">
      <section>
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-white font-poppins relative 
      after:content-[''] after:h-px after:w-full after:bg-primary after:inline-block after:my-1 after:mx-auto"
        >
          Projects
        </h2>
        <p className="relative text-3xl font-bold uppercase font-poppins text-white mb-4">
          My Work<span className="text-blue-500"> Websites</span>
        </p>
        <section className="flex flex-wrap justify-center xl:justify-start gap-6 text-justify">
          {imageWebsiteProjectnames.map((projectname, index) => (
            <section className="border-2 border-solid border-gray-300 bg-cover bg-center w-[22rem] h-[20rem]">
              <img
                className="object-cover border-b"
                src={`/${projectname.title}.webp`}
                alt={`Image ${index + 1}`}
              />
              <div className="flex flex-col gap-4">
                <h2 className="px-3 py-2 text-lg font-semibold border-b border-solid border-gray-300">
                  {projectname.title}
                </h2>
                <p className="px-3 text-sm">{projectname.description}</p>
              </div>
            </section>
          ))}
        </section>

        <p className="relative text-3xl font-bold uppercase font-poppins text-white mt-12 mb-4">
          My Work<span className="text-blue-500"> Androids</span>
        </p>
        <section className="flex flex-wrap justify-center xl:justify-start gap-6 text-justify">
          {imageAndroidProjectnames.map((projectname, index) => (
            <section className="border-2 border-solid border-gray-300 bg-cover bg-center w-[22rem] h-[24rem]">
              <img
                className="border-b w-[348px] h-[225px]"
                src={`/${projectname.title}.svg`}
                alt={`Image ${index + 1}`}
              />
              <div className="flex flex-col gap-4">
                <h2 className="px-3 py-2 text-lg font-semibold border-b border-solid border-gray-300">
                  {projectname.title}
                </h2>
                <p className="px-3 text-sm">{projectname.description}</p>
              </div>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
