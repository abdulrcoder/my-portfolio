import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../data/data";
import { Link } from "react-router-dom";
import { github } from "../assets";

const Projects = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[15px] max-w-3xl leading-[24px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. These projects reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-5 ">
        {projects.length > 0 ? (
          projects.map((project) =>
            project.enabled ? (
              <div
                key={project._id}
                className="rounded-xl sm:w-[270px] w-full shadow-lg transform hover:shadow-2xl cursor-pointer bg-gradient-to-b from-[#4e4e4e] via-[#2d2d2d] to-[#121212] hover:from-[#333333] hover:via-[#444444] hover:to-[#111111] transition-all duration-300 ease-in-out"
              >
                <div className="relative w-full h-[270px] overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt="project_image"
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="mt-4">
                    <h3 className="text-white font-bold text-[22px] transition-colors duration-300 hover:text-[#B400DD]">
                      {project.title}
                    </h3>
                    <p className="text-secondary mt-2 text-[14px] leading-[22px] opacity-80 hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#000000] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-[#555555]">
                        <Link to={project.githuburl} target="_blank">
                          <img
                            src={github}
                            alt="source code"
                            className="w-3/4 h-3/4 object-contain m-auto"
                          />
                        </Link>
                      </div>
                      <div className="bg-[#000000] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-[#555555]">
                        <Link
                          to={project.liveurl}
                          target="_blank"
                          className="text-yellow-400 font-bold text-[12px] hover:text-[#B400DD]"
                        >
                          Live
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
