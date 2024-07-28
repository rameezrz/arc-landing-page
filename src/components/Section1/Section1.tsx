import Carousel2 from "../../widgets/Carousel";
import Timer from "../../widgets/Timer";
import Button from "../Button/Button";

import img1 from "../../assets/carousel/1.png";
import img2 from "../../assets/carousel/2.png";
import img3 from "../../assets/carousel/3.png";
import img4 from "../../assets/carousel/4.png";

const images = [img1, img2, img3, img4];

const Section1 = () => {
  return (
    <section className="section1 grid gap-10 grid-cols-1 md:grid-cols-6 h-full mb-12 w-full bg-[#fafafa] py-8 px-6 md:px-9 lg:px-12">
      <div className="flex flex-col md:col-span-2">
        <h1 className="font-theme text-2xl text-center mb-5 text-primary-gray">
          Deals Of The Month
        </h1>
        <p className="text-secondary-gray mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duisSceleri ultrices sollicitudin aliquam sem. Scelerisque duis
          ultrices sollicitudin{" "}
        </p>
        <div className="flex w-full justify-center mb-5">
          <Button text="Buy Now" className="" />
        </div>
        <h2 className="text-primary-gray font-semibold text-xl mb-5">
          Hurry, Before It’s Too Late!
        </h2>
        <Timer />
      </div>
      <div className="md:col-span-4">
        <Carousel2 images={images} />
      </div>
    </section>
  );
};

export default Section1;
