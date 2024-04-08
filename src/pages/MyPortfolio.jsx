import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPlayCircle,
  FaReact,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
// import { IoMdDoneAll } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import Header from "../components/common/Header";

const MyPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/portfolio/portfolio-items`,
        );
        setPortfolio(response.data);
      } catch (error) {
        console.error("Error fetching mails:", error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="m-5 w-full overflow-hidden rounded-lg border bg-white p-3">
      <Header title="My portfolio" />
      <main className="h-[calc(100%-61px)] overflow-auto p-3">
        <div className="portfolio_container grid grid-cols-3 gap-10">
          {portfolio.map((data, index) => (
            <div
              className="flex flex-col items-center gap-3 rounded-lg border bg-slate-50 p-5 text-gray-800"
              key={index}
            >
              <div className="heading text-center">
                <h1 className="text-lg font-semibold">{data.title}</h1>
                <h2 className="">{data.tagline}</h2>
              </div>
              <div className="tech">
                <div className="icons flex items-center gap-2">
                  {data && data.technologies ? (
                    data.technologies.map((technology, index) => (
                      <div
                        key={index}
                        className="icon flex flex-wrap items-center justify-center gap-2 rounded-lg border bg-white p-2"
                      >
                        {technology === "HTML" ? (
                          <FaHtml5 className="text-[#E34C26]" />
                        ) : technology === "CSS" ? (
                          <FaCss3Alt className="text-[#264DE4]" />
                        ) : technology === "JavaScript" ? (
                          <IoLogoJavascript className="text-[#F7DF1E]" />
                        ) : technology === "Tailwind" ? (
                          <SiTailwindcss className="text-[#38B2AC]" />
                        ) : technology === "React" ? (
                          <FaReact className="text-[#61DAFB]" />
                        ) : technology === "Node.js" ? (
                          <FaNodeJs className="text-[#339933]" />
                        ) : technology === "Express" ? (
                          <SiExpress className="text-[#000000]" />
                        ) : technology === "MongoDB" ? (
                          <SiMongodb className="text-[#47A248]" />
                        ) : (
                          <FaCode className="text-[#6B7280]" />
                        )}
                        <span className="text-sm font-semibold">
                          {technology}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
              </div>
              <div className="image h-[300px] cursor-pointer overflow-hidden rounded-md border bg-gray-50">
                <a href={"props.live"} target="blank">
                  <img
                    src={`http://localhost:3000/${data.image}`}
                    alt={data.image}
                    className="img-fluid translate-y-0 transform transition duration-[8s] ease-in-out hover:translate-y-[calc(-100%+300px)]"
                  />
                </a>
              </div>
              <div className="button flex items-center gap-3">
                <a
                  className="flex cursor-pointer items-center gap-2 rounded bg-[#FF0000] px-3 py-2 text-sm text-white transition-all hover:gap-3"
                  href="https://www.youtube.com/embed/w9Mfh5IX12Y"
                  target="_blank"
                >
                  <FaPlayCircle className="text-lg" /> Play Video
                </a>
                <a
                  className="flex cursor-pointer items-center gap-2 rounded bg-[#6077f2] px-3 py-2 text-sm text-white transition-all hover:gap-3"
                  href="/"
                >
                  <RiPagesLine className="text-lg" /> Live Preview
                </a>
                <a
                  className="flex cursor-pointer items-center gap-2 rounded bg-[#181717] px-3 py-2 text-sm text-white transition-all hover:gap-3"
                  href="/"
                >
                  <FaGithub className="text-lg" /> View Code
                </a>
              </div>
              {/* <ul className="features w-full">
                <h3 className="mb-1 font-bold">Features and Functionality:</h3>
                {data && data.features ? (
                  data.features.map((data, index) => (
                    <li className="ms-5 flex items-center gap-2" key={index}>
                      <IoMdDoneAll className="text-[#6077f2]" />
                      <p className="text-gray-800">{data}</p>
                    </li>
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </ul>
              {data.details.description.map((details, index) => (
                <p
                  className="details w-full overflow-hidden truncate"
                  key={index}
                >
                  {details} <br /> <br />
                </p>
              ))} */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyPortfolio;
