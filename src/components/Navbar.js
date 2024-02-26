import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="top-0 fixed w-full p-5 font-mono bg-nav z-50 text-gray-500 ">
      <ul className="flex justify-center lg:text-2xl md:text-lg text-sm">
        <li className="pr-4 lg:px-10 px-4  ">
          <Link href={"/"} className="active:underline" >
            <b>Intro</b>
          </Link>
        </li>
        <li className="pr-4 lg:px-10 px-4   ">
          <Link href={"/skills"} className="active:underline">
            <b>Skills</b>
          </Link>
        </li>
        <li className="pr-4 lg:px-10 px-4  ">
          <Link href={"/projects"} className="active:underline">
            <b>Projects</b>
          </Link>
        </li>
        <li className="pr-4 lg:px-10 px-4  ">
          <Link href={"/contact"} className="active:underline">
            <b>Contact</b>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
