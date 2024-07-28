import "./hero.css";
import logoOne from "../../assets/brandsLogo/1.png";
import logoTwo from "../../assets/brandsLogo/2.png";
import logoThree from "../../assets/brandsLogo/3.png";
import logoFour from "../../assets/brandsLogo/4.png";

const Hero = () => {
  const logos = [logoOne, logoTwo, logoThree, logoFour];
  return (
    <section className="mb-12">
      <div className="grid grid-cols-12 grid-rows-3 gap-4 w-full h-96 md:h-screen mx-auto mb-6">
        <div className="item-1 col-span-12 md:col-span-8 row-span-1 bg-cover bg-center rounded-lg order-1"></div>
        <div className="item-2 col-span-3 md:col-span-4 row-span-1 md:row-span-2 bg-cover bg-center rounded-lg bg-gray-300 order-2"></div>
        <div className="item-3 col-span-3 md:col-span-4 row-span-1 md:row-span-2 bg-cover bg-center rounded-lg bg-gray-300 order-4 md:order-3"></div>
        <div className="item-4 col-span-6 md:col-span-4 row-span-1 flex justify-center items-center bg-white order-3 md:order-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-medium">ULTIMATE</h1>
            <h2 className="text-4xl sale md:text-8xl font-bold">SALE</h2>
            <button className="mt-4 px-4 py-1 md:px-8 md:py-2 bg-black text-white rounded-md md:rounded-xl">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="item-5 col-span-12 md:col-span-8 row-span-1 bg-cover bg-center rounded-lg bg-gray-300 order-5"></div>
      </div>
      <div className="flex justify-between ">
        {logos.map((logo, i) => (
          <img
            src={logo}
            key={i}
            alt=""
            className="self-center md:w-24 md:h-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
