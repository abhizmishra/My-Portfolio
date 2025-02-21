import aboutImg from "../assets/abhiMishraAbout.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900  pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-600"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl h-[350px] w-[260px] brightness-75 border-r-4 
              border-b-[2px]
              border-l-4 border-indigo-500 
             hover:-translate-y-3 duration-300 hover:scale-105
              "
              src="https://res.cloudinary.com/dtz70zyel/image/upload/v1735213249/abhiMishraAbout_yksck5.png"
              alt="about"
            />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start ">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="my-2 maxw-xl py-6"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
