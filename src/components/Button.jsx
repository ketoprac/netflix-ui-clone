import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-gradient-to-r from-red1 to-red2 shadow-button shadow-red3 rounded-xl py-2 px-7 font-semibold text-newWhite">
      {children}
    </motion.button>
  );
};

export default Button;
