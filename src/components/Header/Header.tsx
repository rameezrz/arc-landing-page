import { useState } from "react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { PiListBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.5 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "200%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="h-20 lg:h-36 place-content-center grid grid-cols-12"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="logo col-span-8 md:col-span-3 lg:col-span-2 ">
        <h1 className="font-theme text-3xl lg:text-5xl cursor-pointer">
          <a href="#">ARC</a>
        </h1>
      </div>
      <div className="searchBar hidden lg:grid lg:col-span-4 mr-18">
        <Input
          size="large"
          placeholder="Search here..."
          prefix={<SearchOutlined />}
          className="border-gray-500 border-2 focus-within:border-gray-500 hover:border-gray-500 w-[65%]"
        />
      </div>
      <div className="col-span-2 md:hidden grid place-content-end self-center">
        <PiListBold size={24} onClick={toggleMenu} />
      </div>
      <motion.div
        className="navLinks hidden md:col-span-6 md:grid lg:col-span-5 self-center"
        variants={linkVariants}
      >
        <ul className="flex md:gap-6 justify-evenly text-lg ">
          {["Home", "Products", "Cart", "Wishlist", "Notification"].map(
            (link) => (
              <li
                key={link}
                className="relative hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <a
                  href="#productList"
                  className={`relative${
                    activeLink === link
                      ? "font-bold after:block after:absolute after:bottom-0 after:bg-gray-500 after:h-[3px] after:w-full"
                      : ""
                  } hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:bg-gray-500 hover:after:h-[3px] hover:after:w-full`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
      </motion.div>
      <motion.div
        className="profile col-span-2 md:col-span-3 lg:col-span-1 grid place-content-end self-center"
        variants={profileVariants}
      >
        <UserOutlined style={{ fontSize: "24px" }} />
      </motion.div>
      {menuOpen && (
        <motion.div
          className="absolute z-20 top-0 left-0 w-screen h-screen bg-gray-100"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <div className="flex justify-end mt-10 mr-10">
            <IoClose size={30} onClick={toggleMenu} />
          </div>
          <ul className="mt-12 flex gap-8 flex-col items-center w-full text-lg">
            {["Home", "Products", "Cart", "Wishlist", "Notification"].map(
              (link) => (
                <li key={link} className="my-2">
                  <a
                    href="#productList"
                    className={`block ${
                      activeLink === link ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      handleLinkClick(link);
                      toggleMenu();
                    }}
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
