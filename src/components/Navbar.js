import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0  w-full z-50 p-5 font-mono bg-nav text-gray-500 ">
      <ul className="flex justify-center lg:text-2xl md:text-lg text-sm">
        <li className="pr-4 lg:px-10 px-4 active:underline ">
          <Link href={"#intro"}>
            <b>Intro</b>
          </Link>
        </li>
        <li className="pr-4 lg:px-10 px-4   active:underline">
          <Link href={"#skills"}>
            <b>Skills</b>
          </Link>
        </li>
        <li className="pr-4 lg:px-10 px-4  active:underline">
          <Link href={"#projects"}>
            <b>Projects</b>
          </Link>
        </li>
        <li className="pr-4 lg:px-10 px-4  active:underline">
          <Link href={"#contact"}>
            <b>Contact</b>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
