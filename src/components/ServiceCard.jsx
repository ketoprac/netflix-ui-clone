import { motion } from "framer-motion";

const ServiceCard = ({ iconUrl, title, body }) => {
  return (
    <motion.div whileHover={{y: -10}} className="bg-[#1F2127] p-6 rounded-[30px] lg:w-[290px] md:w-full w-full min-h-[250px]">
      <img className="mb-3" src={iconUrl} alt="icon" />
      <p className="text-newWhite mb-2">{title}</p>
      <p className="text-[#E3E0E0] font-light text-sm">{body}</p>
    </motion.div>
  );
};

export default ServiceCard;
