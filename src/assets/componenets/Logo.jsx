import { logo_no_bg } from "../../assets";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <div className="w-full" id="home">
      <div className="py-20 w-full flex justify-center items-center">
        <motion.div
          className="invisible md:visible h-4 rounded-lg w-[20%] bg-primary"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="md:w-[40%]"
        >
          <img src={logo_no_bg} className="p-8" />
        </motion.div>
        <motion.div
          className="invisible md:visible h-4 rounded-lg w-[20%] bg-primary"
          initial={{ x: +100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          onlo
        />
      </div>
    </div>
  );
};
export default Logo;
