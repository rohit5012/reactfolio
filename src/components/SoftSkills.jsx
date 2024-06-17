import { useEffect } from "react";
import React, { useState } from "react";

const skills = [
  {
    id: 1,
    name: "Communication",
  },
  {
    id: 2,
    name: "Empathy",
  },
  {
    id: 3,
    name: "Accountability",
  },
  {
    id: 4,
    name: "Team Work",
  },
  {
    id: 5,
    name: "Problem Solving",
  },

  {
    id: 6,
    name: "Creativity",
  },
];

function SoftSkills() {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (percent < 100) {
      setTimeout(() => setPercent((newval) => newval + 1), 200);
    }
  }, [percent]);
  return (
    <div>
      <div className="p-24 text-[#193641] bg-[#E9ECEF]">
        <h1 className="flex justify-center text-xl md:text-4xl font-medium ">
          Soft Skills
        </h1>
        <hr className="border-1 mt-8"></hr>
        <p className=" text-lg md:text-xl lg:text-2xl">
          Soft skills are a combination of people skills, social skills,
          communication skills, character or personality traits, attitudes,
          career attributes, social intelligence and emotional intelligence
          quotients, among others, that enable people to navigate their
          environment, work well with others, perform well, and achieve their
          goals with complementing hard skills.
        </p>
        <ul className="grid grid-cols-2 lg:grid-cols-3 pt-2">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="text-lg md:text-xl lg:text-2xl flex flex-col p-8 gap-6 justify-center items-center"
            >
              <h3>{skill.name}</h3>
              <div className="w-full h-7 rounded-e-3xl border border-black ">
                <div
                  className="bg-[#CD5C5C] rounded-e-3xl h-7 text-lg"
                  style={{ width: `${percent}%` }}
                >
                  {percent}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SoftSkills;
