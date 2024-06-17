import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { GrResume } from "react-icons/gr";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rohittsharrma/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/rshaarma",
    },
    {
      id: 3,
      child: (
        <>
          Mail <MdMailOutline size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <GrResume size={30} />
        </>
      ),
      href: "/dev-cv.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div>
      <div className="hidden lg:flex flex-col fixed left-0 top-[35%]">
        <ul>
          {links.map(({ id, child, href, style, download }) => {
            return (
              <li
                key={id}
                className={
                  "flex justify-center items-center w-40 h-14 px-4 bg-[#CD5C5C] ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 text-white" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
