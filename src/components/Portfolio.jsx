import PortfolioImage from "../images/portfolioImage.png";
import RailsFlats from "../images/RailsFlats.png";
import gamesSwap from "../images/game-swap.png";
import ReactCalender from "../images/ReactCalender.png";
import ReactPizza from "../images/ReactPizza.png";
import ReactWeather from "../images/ReactWeather.png";
import gymDiary from "../images/gymDiary.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gymDiary,
      name: "Gymdiary",
      tech: "React",
      demo: "https://main--sweat-beasts.netlify.app/",
      code: "https://github.com/rohit5012/gymDiary",
    },
    {
      id: 2,
      src: gamesSwap,
      name: "Games-swap",
      tech: "React",
      demo: "https://rohittsharrma.netlify.app/",
      code: "https://github.com/rohit5012/games-swap-app",
    },
    {
      id: 3,
      src: RailsFlats,
      name: "FlatSearch",
      tech: "Ruby On Rails",
      demo: "",
      code: "https://github.com/rshaarma/react-flats",
    },
    {
      id: 4,
      src: ReactCalender,
      name: "DailyCalender",
      tech: "React",
      demo: "https://rshaarma.github.io/work-planner/",
      code: "https://github.com/rshaarma/work-planner",
    },
    {
      id: 5,
      src: ReactPizza,
      name: "PizzaDelivery",
      tech: "React",
      demo: "",
      code: "https://github.com/rshaarma/react-pizza-cart",
    },
    {
      id: 6,
      src: ReactWeather,
      name: "WeatherForecast",
      tech: "React",
      demo: "https://rshaarma.github.io/weather-display-app/",
      code: "https://github.com/rshaarma/weather-display-app",
    },
  ];

  const handleDemoclick = (index) => {
    window.open(portfolios[index].demo, "_blank");
  };

  const handleCodeclick = (index) => {
    window.open(portfolios[index].code, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="pb-16 pt-20 pl-9 pr-9 md:pl-7 md:pr-7 md:p-20 text-[#193641]"
      style={{ backgroundImage: `url(${PortfolioImage})` }}
    >
      <div>
        <h1 className="flex justify-center text-xl md:text-4xl font-medium mt-6 md:mt-4">
          Portfolio
        </h1>
        <p className="py-3 text-lg md:text-xl lg:text-2xl flex justify-center">
          Check out some of my work right here
        </p>
        <hr className="border-1 border-black my-4"></hr>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-12 rounded-lg">
        {portfolios.map((portfolio, index) => {
          return (
            <div
              key={portfolio.id}
              className="bg-[#FFFFFF] shadow-lg hover:scale-105 duration-200 rounded-lg h-96"
            >
              <div className="relative h-50 rounded-lg">
                <img
                  src={portfolio.src}
                  alt="example"
                  className="w-full h-72 rounded-lg"
                />
                <div className="absolute inset-0 hover:bg-black hover:bg-opacity-50 flex items-center justify-center"></div>
              </div>
              <div className="flex flex-col justify-center items-center h-20">
                <div className="flex flex-col justify-center items-center pt-2">
                  <h2 className="text-[#193641] text-lg italic">
                    {portfolio.name}
                  </h2>
                  <p className="text-sm">{portfolio.tech}</p>
                </div>
                <div className="w-full flex justify-around">
                  <button
                    onClick={() => handleDemoclick(index)}
                    className="bg-slate-100 p-1 px-3 hover:bg-slate-200"
                  >
                    Demo
                  </button>

                  <button
                    onClick={() => handleCodeclick(index)}
                    className="bg-slate-100 p-1 px-3 hover:bg-slate-200"
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
