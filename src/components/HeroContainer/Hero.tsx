// import "./hero.css";
// import logoOne from "../../assets/brandsLogo/1.png";
// import logoTwo from "../../assets/brandsLogo/2.png";
// import logoThree from "../../assets/brandsLogo/3.png";
// import logoFour from "../../assets/brandsLogo/4.png";
// import Button from "../Button/Button";

// const Hero = () => {
//   const logos = [logoOne, logoTwo, logoThree, logoFour];
//   return (
//     <section className="mb-12">
//       <div className="grid grid-cols-12 grid-rows-3 gap-4 w-full h-96 md:h-screen mx-auto mb-6">
//         <div className="item-1 col-span-12 md:col-span-8 row-span-1 bg-cover bg-center rounded-lg order-1"></div>
//         <div className="item-2 col-span-3 md:col-span-4 row-span-1 md:row-span-2 bg-cover bg-center rounded-lg bg-gray-300 order-2"></div>
//         <div className="item-3 col-span-3 md:col-span-4 row-span-1 md:row-span-2 bg-cover bg-center rounded-lg bg-gray-300 order-4 md:order-3"></div>
//         <div className="item-4 col-span-6 md:col-span-4 row-span-1 flex justify-center items-center bg-white order-3 md:order-4">
//           <div className="text-center">
//             <h1 className="text-2xl md:text-5xl font-medium">ULTIMATE</h1>
//             <h2 className="text-4xl sale md:text-8xl font-bold">SALE</h2>
//             <Button text="SHOP NOW" />
//           </div>
//         </div>
//         <div className="item-5 col-span-12 md:col-span-8 row-span-1 bg-cover bg-center rounded-lg bg-gray-300 order-5"></div>
//       </div>
//       <div className="flex justify-between md:hidden">
//         {logos.map((logo, i) => (
//           <img
//             src={logo}
//             key={i}
//             alt=""
//             className="self-center w-20 md:w-24 h-auto"
//           />
//         ))}
//       </div>
//       <div className="hidden md:flex justify-between">
//         {logos.map((logo, i) => (
//           <img
//             src={logo}
//             key={i}
//             alt=""
//             className="self-center w-16 md:w-24 h-auto"
//           />
//         ))}
//         {logos.map((logo, i) => (
//           <img
//             src={logo}
//             key={i + 4}
//             alt=""
//             className="self-center w-16 md:w-24 h-auto"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import "./hero.css";
import logoOne from "../../assets/brandsLogo/1.png";
import logoTwo from "../../assets/brandsLogo/2.png";
import logoThree from "../../assets/brandsLogo/3.png";
import logoFour from "../../assets/brandsLogo/4.png";
import Button from "../Button/Button";

const Hero = () => {
  const logos = [logoOne, logoTwo, logoThree, logoFour];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: any) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section className="mb-12">
      <div className="grid grid-cols-12 grid-rows-3 gap-4 w-full h-96 md:h-screen mx-auto mb-6">
        <motion.div
          className="item-1 col-span-12 md:col-span-8 row-span-1 bg-cover bg-center rounded-lg order-1"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        ></motion.div>
        <motion.div
          className="item-2 col-span-3 md:col-span-4 row-span-1 md:row-span-2 bg-cover bg-center rounded-lg bg-gray-300 order-2"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        ></motion.div>
        <motion.div
          className="item-3 col-span-3 md:col-span-4 row-span-1 md:row-span-2 bg-cover bg-center rounded-lg bg-gray-300 order-4 md:order-3"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        ></motion.div>
        <motion.div
          className="item-4 col-span-6 md:col-span-4 row-span-1 flex justify-center items-center bg-white order-3 md:order-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-medium">ULTIMATE</h1>
            <h2 className="text-4xl sale md:text-8xl font-bold">SALE</h2>
            <Button text="SHOP NOW" />
          </div>
        </motion.div>
        <motion.div
          className="item-5 col-span-12 md:col-span-8 row-span-1 bg-cover bg-center rounded-lg bg-gray-300 order-5"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        ></motion.div>
      </div>
      <div className="flex justify-between md:hidden">
        {logos.map((logo, i) => (
          <motion.img
            src={logo}
            key={i}
            alt=""
            className="self-center w-20 md:w-24 h-auto"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={logoVariants}
          />
        ))}
      </div>
      <div className="hidden md:flex justify-between">
        {logos.map((logo, i) => (
          <motion.img
            src={logo}
            key={i}
            alt=""
            className="self-center w-16 md:w-24 h-auto"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={logoVariants}
          />
        ))}
        {logos.map((logo, i) => (
          <motion.img
            src={logo}
            key={i + 4}
            alt=""
            className="self-center w-16 md:w-24 h-auto"
            initial="hidden"
            animate="visible"
            custom={i + 4}
            variants={logoVariants}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
