import { features } from "../../data";
import Button from "../Button/Button";
import "./section3.css";

const Section3 = () => {
  return (
    <section className="section3 h-[40vh] sm:h-[80vh] w-full mb-[500px]">
      <div className="imgContainer h-[80%] w-full grid grid-cols-2">
        <div className="flex flex-col col-start-2 justify-center sm:px-24">
          <div className="ml-8 sm:ml-0">
            <p className="font-theme text-primary-gray font-bold sm:text-2xl mb-2 sm:mb-5">
              Sartoris
            </p>
            <p className="font-semibold text-primary-gray text-xs sm:text-lg mb-1 sm:mb-2 underline">
              DESCRIPTION
            </p>
            <p className="text-xs mb-3 sm:mb-7 text-primary-gray">
              High Fabric Wallpaper <br />
              Water proof <br /> 1024” * 800”
            </p>
            <p className="font-bold text-xs sm:text-xl mb-1 sm:mb-4">
              ₹9,999.00
            </p>
            <div>
              <Button text="Buy Now" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 lg:grid-cols-4 mt-10 ">
        {features.map((feat) => (
          <div
            key={feat.id}
            className="flex items-center  lg:place-self-center"
          >
            <img src={feat.icon} alt="" className="w-7 md:w-9 mr-4" />
            <div>
              <h1 className="text-sm md:text-xl font-semibold">{feat.title}</h1>
              <p className="text-xs md:text-base">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
