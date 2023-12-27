function Skill() {
  const imageFilenames = [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "java",
    "c++",
    "tailwind",
    "git",
    "ionic",
    "kotlin",
    "mysql",
    "firebase",
  ];

  return (
    <section id="skill" className="px-14 py-14">
      <div>
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-gray-600 font-poppins
      after:content-[''] after:h-px after:w-11/12 after:bg-primary after:inline-block after:my-1 after:mx-2.5"
        >
          Skills
        </h2>
        <div className="text-justify">
          <p className="relative text-3xl font-bold uppercase font-poppins text-white mb-4">
            My <span className="text-blue-500">Skills</span>
          </p>
          <div className="flex flex-wrap gap-4">
            {imageFilenames.map((filename, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 h-24 rounded-2xl border border-solid border-white hover:border-primary hover:shadow-md hover:shadow-primary hover:text-white"
              >
                <img
                  className="w-1/2 h-1/2"
                  src={`/${filename}.webp`}
                  alt={`Image ${index + 1}`}
                  title={`${filename}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
