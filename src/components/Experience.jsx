import nextjs from "../images/nextjs.png";
import html from "../images/html.webp";
import css from "../images/css.png";
import javascript from "../images/JavaScript.png";
import github from "../images/github.webp";
import bootstrap from "../images/bootstrap.png";
import react from "../images/React.png";
import tailwind from "../images/Tailwind.png";
import ruby from "../images/ruby.webp";
import rails from "../images/rails.png";
import Node from "../images/node.png";
import netlify from "../images/netlify.png";
import jquery from "../images/jquery.jpeg";
import firebase from "../images/firebase.png";
import typescript from "../images/Typescript.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: rails,
      title: "RAILS",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: react,
      title: "REACT",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: ruby,
      title: "RUBY",
      style: "shadow-red-500",
    },
    {
      id: 9,
      src: Node,
      title: "NODEjs",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: netlify,
      title: "NETLIFY",
      style: "shadow-cyan-500",
    },
    {
      id: 11,
      src: jquery,
      title: "JQUERY",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: firebase,
      title: "FIREBASE",
      style: "shadow-blue-500",
    },
    {
      id: 13,
      src: typescript,
      title: "TYPESCRIPT",
      style: "shadow-blue-500",
    },
    {
      id: nextjs,
      src: nextjs,
      title: "NEXTJS",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full pb-16 pt-24 pl-9 pr-9 md:p-24"
    >
      <div className="text-white ">
        <h1 className="flex justify-center text-xl md:text-4xl font-medium ">
          Experience
        </h1>
        <p className="flex justify-center py-3 text-lg md:text-xl lg:text-2xl ">
          These are the technologies I've worked with
        </p>
        <hr className="border-1 my-4"></hr>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-2 text-center">
        {techs.map((tech) => (
          <div
            key={tech.id}
            className={`shadow-md hover:scale-105 duration-200 ${tech.style}`}
          >
            <img src={tech.src} alt="" className="w-20 mx-auto my-9" />
            {/* <p className="text-white">{tech.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
