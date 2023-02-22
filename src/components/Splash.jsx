import heroImage from "../assets/illustration/hero-2.png";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <div className="flex items-center mb-[180px] lg:flex-row md:flex-col-reverse flex-col-reverse">
      <motion.img initial={{ scale: 0.5 }}
  whileInView={{ scale: 1 }} className="z-10" src={heroImage} alt="hero" />
      <h1 className="font-title text-newWhite text-[40px] mb-4 text-center lg:text-left">
        Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi
      </h1>
    </div>
  );
};

export default Splash;
