function Project() {
  const imageProjectnames = [
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
          My <span className="text-blue-500">Works</span>
        </p>
        <section className="flex flex-wrap justify-center xl:justify-start gap-6 text-justify">
          {imageProjectnames.map((projectname, index) => (
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
      </section>
    </main>
  );
}

export default Project;
