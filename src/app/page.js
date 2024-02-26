import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

import React from "react";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col text-gray-600 font-extrabold justify-center items-center h-screen min-[700px]:flex-row-reverse mt-12  max-[290px]:ml-6 ">
        <aside className="flex justify-center lg:ml-16 ">
          <img src={"/icon.png"} className="w-auto h-auto" alt="Profile Icon" />
        </aside>
        <aside className="flex flex-col items-center justify-center text-center max-[840px]:mt-4">
          <div className="mb-4 text-gray-200">
            <span className="bg-green-700  text-md font-medium me-2 px-2.5 py-1 rounded">
              remote
            </span>
            <span className="bg-green-700  text-md font-medium me-2 px-2.5 py-1 rounded">
              Freelancing
            </span>
          </div>
          <h1 className="lg:text-xl md:text-lg p-4 text-nowrap  rounded-full bg-shadow" style={{backgroundColor: "#d1bdbd"}}>
            {"👋 Hey! there, I'm " } {"  "}
            <span className="text-xl text-sky-800 underline font-extrabold ">
              Fariha Rana
            </span>
          </h1>
          <h4 className="text-sm sm:text-base mt-6 p-6  rounded-lg bg-shadow w-60" style={{backgroundColor: "#d1bdbd"}}>
            {"I'm a"}{" "}
            <span className="underline decoration-2 decoration-blue-700 ">
              Next.js
            </span>{" "}
            full-stack developer based in Meerut, India. I am specialize in
            building exceptional Next.js-based websites.
          </h4>
          <div className="flex gap-4 mt-6  justify-center items-center rounded-full p-3 bg-shadow w-[130px] h-[40px] link" style={{backgroundColor: "#d1bdbd"}}>
            <Link href="https://twitter.com/fariha0712" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link href="https://github.com/Fariha-Rana" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
            <Link href="https://discord.com/channels/@fariha13" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Intro;
