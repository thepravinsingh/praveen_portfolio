"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
 
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 
  return (
    <nav className="flex justify-between items-center relative py-3 bg-transparent  max-md:mx-5 mx-[100px] my-5">
      <div className="w-10 h-10  rounded-full">
        <Image
          src="https://img.freepik.com/premium-vector/ps-monogram-logo-design-letter-text-name-symbol-monochrome-logotype-alphabet-character-simple-logo_955145-2462.jpg"
          alt="Image Logo"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
      </div>
 
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="text-greyTextColor focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
 
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 greyTextColor  absolute  sm:static top-14 left-0 right-0 sm:top-0 bg-[#CCD6F6] sm:bg-transparent px-4 py-4 sm:py-0 z-10`}
      >
        <Link href="" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="#experience" onClick={() => setIsMenuOpen(false)}>
          Experience
        </Link>
        <Link href="#project" onClick={() => setIsMenuOpen(false)}>
          Project
        </Link>
        <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}