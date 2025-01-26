import React from "react";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdOutlineAutorenew } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";

const skills = [
  {
    id: 1,
    image: <FaCode size={50} />,
    label: "Web Application Development",
  },
  {
    id: 2,
    image: <FaDatabase size={40} />,
    label: "Database Design",
  },
  {
    id: 3,
    image: <MdOutlineAutorenew size={40} />,
    label: "Software Automation",
  },
  {
    id: 4,
    image: <IoSettings size={40} />,
    label: "RESTful API development & AJAX",
  },
  {
    id: 5,
    image: <FaPaintBrush size={40} />,
    label: "UI Design",
  },
  {
    id: 6,
    image: <FaNetworkWired size={40} />,
    label: "MVC Architecture & Design Patterns",
  },
];

const Fields = () => {
  return (
    <div>
      <div className="p-4 md:p-12 text-[#193641]">
        <h1 className="flex justify-center text-xl md:text-4xl font-medium mt-6 md:mt-4">
          What I am passionate about
        </h1>
        <hr className="border-1  mt-8"></hr>
        <ul className="grid grid-cols-2 lg:grid-cols-3 pt-4">
          {skills.map((skill) => {
            return (
              <li
                key={skill.id}
                className="text-lg md:text-xl lg:text-2xl flex flex-col p-8 gap-6 justify-center items-center"
              >
                {skill.image}
                {skill.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Fields;
