import React from "react";
import Link from "next/link";

const navItems = [
  { href: "/", text: "Intro" },
  { href: "/skills", text: "Skills" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" }
];

function Navbar() {
  return (
    <nav className="top-0 w-full z-50 p-5 font-mono bg-nav text-gray-500">
      <ul className="flex justify-center lg:text-2xl md:text-lg text-sm">
        {navItems.map((item, index) => (
          <li key={index} className="pr-4 lg:px-10 px-4">
            <Link href={item.href} className="active:underline hover:underline">
              <b>{item.text}</b>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
