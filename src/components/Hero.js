import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

import React from "react";

const Intro = () => {
  return (
    <section
      id="intro"
      className="text-gray-800 flex justify-center items-center 
      w-screen h-screen "
    >
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse w-full h-full max-[540px]:mt-24  max-[290px]:ml-8 ">
        <aside className="flex justify-center lg:ml-16 ">
          <Image
            src={"/icon.png"}
            width={400}
            height={400}
            className="w-auto h-auto"
            alt="Profile Icon"
            priority={true}
          />
        </aside>
        <aside className="flex flex-col items-center justify-center text-center max-[840px]:mt-4">
          <div className="mb-4">
            <span className="bg-green-700 text-white text-md font-medium me-2 px-2.5 py-1 rounded">
              remote
            </span>
            <span className="bg-green-700 text-white text-md font-medium me-2 px-2.5 py-1 rounded">
              Freelancing
            </span>
          </div>
          <h1 className="lg:2xl md:text-lg p-4 text-nowrap  bg-neutral-200 rounded-full bg-shadow ">
            {"👋 Hey! there, I'm"}{" "}
            <span className="text-xl text-sky-800 font-extrabold ">
              Fariha Rana
            </span>
          </h1>
          <h4 className="text-sm sm:text-base bg-neutral-200 mt-6 p-6  rounded-lg bg-shadow w-60 ">
            {"I'm a"}{" "}
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
