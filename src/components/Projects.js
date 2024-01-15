"use client";
import { FaFolderOpen, FaGithub, FaInfo, FaLink } from "react-icons/fa6";
import { projectData } from "@/utils/data.js";
import Link from "next/link";
import { useState } from "react";

const projectsPerPage = 1;
const buttonsPerPage = 6;
const totalPages = Math.ceil(projectData.length / projectsPerPage);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const startPage = Math.max(1, currentPage - Math.floor(buttonsPerPage / 2));
  const endPage = Math.min(totalPages, startPage + buttonsPerPage - 1);

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center font-mono text-neutral-100 text-lg text-pretty w-screen h-screen max-[400px]:mt-24  max-[290px]:ml-4 " 
    >
      <h2 className="text-center text-nowrap text-4xl  max-[290px]:text-3xl  text-neutral-200 underline m-8 opacity-90 " style={{ textShadow: "3px 3px 2px"}}>
        Featured Projects
      </h2>
      <div className="h-[25rem] max-[540px]:h-[35rem] flex flex-col justify-center items-center lg:w-[40rem] md:w-[30rem] w-[20rem]  max-[290px]:w-[18rem]  max-[290px]:h-[39rem] ">
        {currentProjects.map((project) => (
          <div
            className="p-4 border border-solid border-neutral-800 rounded-2xl  bg-slate-100 flex flex-col justify-center items-center project-bg project"
            key={project.id}
          >
            <div className="flex justify-center mb-4 h-4">
              <span className="mt-1 mr-1">
                <FaFolderOpen />
              </span>
              <h3 className="font-bold text-gray-900 text-nowrap underline text-xl">
                - {project.title}
              </h3>
            </div>
            <div className="flex mt-3">
              <span className="mt-1">
                <FaInfo />
              </span>
              <p className="">{project.description}</p>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center text-center">
              <h6 className=" font-bold text-gray-900 text-center text-nowrap underline text-xl">
                tech-stack:
              </h6>
              <span>{project?.stack}</span>
            </div>
            <div className="flex justify-center mt-6 text-2xl">
              <Link href={project.gitHubLink}>
                <FaGithub />
              </Link>
              <Link className="ml-4" href={project.websiteLink}>
                <FaLink />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 text-sm">
        <ul className="flex list-none ">
          {currentPage > 1 && (
            <li className="mx-1 ">
              <button
                onClick={() => paginate(currentPage - 1)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full focus:outline-none border-2 hover:bg-purple-400 border-sky-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_1px_#08f,0_0_10px_#08f]"
              >
                {"<"}
              </button>
            </li>
          )}

          {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
            <li key={startPage + i} className="mx-1 ">
              <button
                onClick={() => paginate(startPage + i)}
                className={`${
                  currentPage === startPage + i
                    ? "bg-purple-800 text-white"
                    : "bg-gray-200 text-gray-800"
                } px-4 py-2  max-[530px]:px-3  max-[290px]:px-2 rounded-full focus:outline-none border-2 hover:bg-purple-400 border-sky-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_1px_#08f,0_0_10px_#08f]`}
              >
                {startPage + i}
              </button>
            </li>
          ))}

          {currentPage < totalPages && (
            <li className="mx-1">
              <button
                onClick={() => paginate(currentPage + 1)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full focus:outline-none border-2 hover:bg-purple-400 border-sky-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_1px_#08f,0_0_10px_#08f]"
              >
                {">"}
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
