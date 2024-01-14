import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

import React from "react";

const Intro = () => {
  return (
    <section
      id="intro"
      className="text-gray-800 flex justify-center items-center 
      w-full xl:w-[100rem] md:w-[50rem] sm:w-[30rem]"
    >
      <div className="flex flex-col justify-center items-center xl:flex-row-reverse  xxl:mt-36  xxl:flex-row-reverse xl:mr-32 font-mono xl:mt-32 mt-20 p-8 z-1 sm:ml-24 md:ml-16">
        <aside className="flex justify-center xl:flex-none m-4 xl:ml-8">
          <Image
            src={"/icon.png"}
            width={400}
            height={400}
            className="w-auto h-auto"
            alt="Profile Icon"
            priority={true}
          />
        </aside>
        <aside className="flex flex-col items-center justify-center text-center w-full md:w-96 lg:mr-8">
          <div className="mb-4">
            <span className="bg-green-700 text-white text-md font-medium me-2 px-2.5 py-1 rounded">
              remote
            </span>
            <span className="bg-green-700 text-white text-md font-medium me-2 px-2.5 py-1 rounded">
              Freelancing
            </span>
          </div>
          <h1 className="lg:2xl md:text-lg p-4 text-nowrap  bg-neutral-200 rounded-full bg-shadow ">
            {"👋 Hey! there, I'm"}
            <span className="text-xl text-sky-800 font-extrabold ">
              Fariha Rana
            </span>
          </h1>
          <h4 className="text-sm sm:text-base bg-neutral-200 mt-6 p-4  rounded-lg bg-shadow w-72 ">
            I'm a{" "}
            <span className="underline underline-offset-3 decoration-2 decoration-blue-700 ">
              Next.js
            </span>{" "}
            full-stack developer based in Meerut, India. I am specialize in
            building exceptional Next.js-based websites.
          </h4>
          <div className="flex gap-4 mt-6  bg-neutral-200 justify-center items-center rounded-full p-3  bg-shadow w-[130px] h-[40px] link">
            <Link href="https://twitter.com/fariha0712">
              <FaTwitter />
            </Link>
            <Link href="https://github.com/Fariha-Rana">
              <FaGithub />
            </Link>
            <Link href="https://discord.com/channels/@fariha13">
              <FaDiscord />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Intro;
