import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="top-0 fixed w-full p-5 font-mono bg-nav z-50 text-gray-500 ">
      <ul className="flex justify-center lg:text-2xl md:text-lg text-sm">
        {['Intro', 'Skills', 'Projects', 'Contact'].map((page, index) => (
          <li key={index} className="pr-4 lg:px-10 px-4">
            <Link href={`/${page.toLowerCase()}`} className="active:underline hover:underline">
              <b>{page}</b>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
