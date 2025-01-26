import HeroImage from "../images/hero.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import CV from "../images/cv.pdf";

function Home() {
  return (
    <div name="about">
      <div className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <a
          href={CV}
          download
          className="cv absolute bottom-12 right-4 p-4 bg-white rounded-lg shadow-lg flex items-center"
        >
          Curriculum Vitae
          <i className="fas fa-cloud-download-alt ml-2"></i>
        </a>
        {/* <img src={HeroImage} className="max-w-full h-auto object-cover " /> */}
        <div className="absolute right-[10%] bottom-[30%]">
          <h1 className="text-5xl md:text-6xl font-signature">
            <font color="#CD5C5C">Hello! </font>I'm Rohit
          </h1>
          <p className="text-xl">Software Developer from London</p>
          <button className="group flex py-2 px-4 my-3 items-center bg-slate-600 bg-gradient-to-r from-white to-black cursor-pointer rounded-l-lg">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={30} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
