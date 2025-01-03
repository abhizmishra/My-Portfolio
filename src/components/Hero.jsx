import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/2nfianl.jpg";
import { motion } from "framer-motion";


import "./Hero.css";

let container = (d) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: d },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 h-[  ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="type">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="  pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl relative  "
              >
                ABhiƵMishra
              </motion.h1>
            </div>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent "
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8  ">
          <motion.div className="pt-5 sm:pt-0 flex flex-wrap  justify-evenly sm:justify-end ">
            <div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className=" liquid_shape flex  justify-center 
          rounded-full 
           
         h-[250px] w-[250px]  sm:h-[355px] sm:w-[355px] md:scale-95"
            >
              <img
               // src="https://res.cloudinary.com/dtz70zyel/image/upload/v1726282963/2nfianl_fgppjf.jpg"
                src="https://res.cloudinary.com/dtz70zyel/image/upload/v1735212435/2nfianl_mjrlbj.jpg"
                alt="AbhiMishra"
                className="
              hover:scale-125 duration-300
                brightness-75
                rounded-full border-[1.5x] border-[#7F00FF] "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
