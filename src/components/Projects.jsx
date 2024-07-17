import {  PROJECTS as project } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {


  const [isActive, setisActive] = useState(false)
  
  const onMosueEnter = () => { 
  
    setisActive(true)
    return;
  }
  const onMouseOut = () => { 
    setisActive(false)
    return;
   }
 


  return (
    <div
      onClick={() => setactive(false)}
      className="border-b border-neutral-900 pb-4  "
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Projects
      </motion.h1>
      <div className="">
        <div className="">
          {project.map((project, index) => (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <div className=" items-center inline-flex ">
                  <a href={project.projectUrl} target="_blank">
                    <img
                      width={150}
                      height={150}
                      src={project.image}
                      alt={project.title}
                      onMouseEnter={onMosueEnter}
                      onMouseOut={onMouseOut}
                      className="mb-6 hover:border-2 hover:border-indigo-700 rounded hover:scale-125 "
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold ">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
