import logo from "../assets/logo/netflix.svg";
import Button from "./Button";
import { ReactComponent as HamburgerIcon } from "../assets/icon/hamburger.svg";
import { ReactComponent as CloseIcon } from "../assets/icon/close.svg";
import { useState } from "react";
import { ReactComponent as ChevronDownIcon } from "../assets/icon/chevron-down.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const menuLinks = [
    { text: "Movies", href: "#" },
    { text: "TV Shows", href: "#" },
    { text: "New & Popular", href: "#" },
  ];
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
    <nav className="text-white py-12 flex justify-between font-body items-center">
      <img className="cursor-pointer" src={logo} alt="logo" />
      <div className="gap-x-6 text-newWhite hidden md:flex">
        {menuLinks.map(({ text, href }) => (
          <a key={text} href={href}>
            {text}
          </a>
        ))}
      </div>
      <div className="items-center gap-x-6 hidden md:flex">
        <div className="flex items-center gap-x-2 cursor-pointer">
        <p>ID</p>
        <ChevronDownIcon />
        </div>
        <Button>Masuk</Button>
      </div>
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.6}} className="block md:hidden">
        {showNavbar ? 
          <CloseIcon onClick={() => setShowNavbar(false)} /> :
          <HamburgerIcon onClick={() => setShowNavbar(true)} />
        }
      </motion.div>
    </nav>
        {showNavbar && (
          <motion.div animate={{y: 0, scale: 1}} initial={{y: -50, scale: 0.8}} className="bg-dark font-body text-newWhite px-3 pb-6 flex flex-col gap-y-3">
                <div className="gap-y-3 flex flex-col md:hidden">
                {menuLinks.map(({ text, href }) => (
                  <a key={text} href={href}>
                    {text}
                  </a>
                ))}
              </div>
                    <div className="gap-y-3 flex flex-col md:hidden">
                     <p>ID | EN</p>
                    <Button>Masuk</Button>
                  </div>
                  </motion.div>
        )}
        </>
  );
};

export default Navbar;
