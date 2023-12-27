function Project() {
  const imageProjectnames = [
    {title: "Grademica", description: "Course grade input management information system"}, 
    {title: "OKFT", description: 'Website "Organisasi Kemahasiswaan Informatika Fakultas Teknik"'}, 
    {title: "grademica", description: "My portfolio"}, 
    {title: "Calculator", description: "A calculator that supports light and dark display modes."}, 
    {title: "NotesApp", description: "A notes application that implements the Create, Read, Update, and Delete (CRUD) function integrated with the database.", link: "a"}, 
  ];

  return (
    <section id="project" className="px-14 py-14">
      <div>
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-gray-600 font-poppins
    after:content-[''] after:h-px after:w-11/12 after:bg-primary after:inline-block after:my-1 after:mx-2.5"
        >
          Projects
        </h2>
        <div className="text-justify">
          <p className="relative text-3xl font-bold uppercase font-poppins text-white mb-4">
            My <span className="text-blue-500">Works</span>
          </p>
          <div className="flex flex-wrap gap-6">
            {imageProjectnames.map((projectname, index) => (
              <div className="border border-solid border-gray-300 bg-cover bg-center w-[22rem] h-[20rem]">
                <img
                  className="object-cover"
                  src={`/${projectname.title}.png`}
                  alt={`Image ${index + 1}`}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="px-3 py-2 text-lg font-semibold border-b border-solid border-gray-300">
                    {projectname.title}
                  </h2>
                  <p className="px-3 text-sm">
                    {projectname.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
