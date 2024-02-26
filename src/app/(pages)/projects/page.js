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
      className="flex flex-col justify-center items-center font-mono text-lg text-pretty w-screen h-screen  mt-4   max-[290px]:ml-4 " 
        >
      <h2 className="text-center text-nowrap text-4xl  max-[290px]:text-lg  text-neutral-200 underline m-4  max-[430px]:text-3xl " style={{ textShadow: "3px 3px 2px"}}>
        Featured Projects
      </h2>
      <div className="h-[25rem] max-[540px]:h-[36rem] flex flex-col justify-center items-center lg:w-[40rem] sm:w-[30rem] w-[20rem]  max-[290px]:w-[19rem]  max-[290px]:h-[39rem]">
        {currentProjects.map((project) => (
          <div
            className="p-4 border border-solid border-neutral-800 rounded-2xl  bg-slate-100 flex flex-col justify-center items-center project-bg project"
            key={project.id}
          >
            <div className="flex justify-center mb-3 h-4">
              <span className="mt-1 mr-1">
                <FaFolderOpen />
              </span>
              <h3 className="font-bold text-gray-900 text-nowrap underline text-xl max-[500px]:text-lg">
                - {project.title}
              </h3>
            </div>
            <div className="flex mt-3 h-[12rem] min-[700px]:w-[28rem] max-[700px]:h-[18rem] text-center justify-center items-center max-[540px]:text-[0.9rem]">
              <p>{project.description}</p>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center text-center">
              <h6 className=" font-bold text-gray-900 text-center text-nowrap underline text-xl ">
                tech-stack:
              </h6>
              <span className="max-[540px]:text-[0.9rem]">{project?.stack}</span>
            </div>
            <div className="flex justify-center mt-6 text-2xl" target="_blank" rel="noopener noreferrer">
              <Link href={project.gitHubLink}>
                <FaGithub />
              </Link>
              <Link className="ml-4" href={project.websiteLink} target="_blank" rel="noopener noreferrer">
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
