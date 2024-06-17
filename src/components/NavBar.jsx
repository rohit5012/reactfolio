import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const links = [
  {
    id: 1,
    link: "about",
  },
  {
    id: 2,
    link: "portfolio",
  },
  {
    id: 3,
    link: "experience",
  },
  {
    id: 4,
    link: "contact",
  },
];

function NavBar() {
  const [nav, setNav] = useState(false);
  const [backGroundColor, setBackgroundColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);
  return (
    <div
      className={
        backGroundColor
          ? "bg-[#193641] z-10 flex justify-between items-center w-full h-20 px-4 text-[#ffffff] fixed"
          : "z-10 flex justify-between items-center w-full h-20 px-4 text-black fixed "
      }
    >
      <div>
        <h1 className="text-3xl ml-2 logo md:text-5xl">Rohit Sharma</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className=" teko text-2xl px-4 cursor-pointer capitalize  hover:scale-105 hover:text-[#CD5C5C] hover:underline duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 text-gray-500 cursor-pointer md:hidden z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 capitalize py-6 cursor-pointer text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
