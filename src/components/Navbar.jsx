import logo from "../assets/AbhiMishraLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Background from "./Background";
import "./Hero.css"
const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center  ">
          <img
            className="hover:scale-110  mx-2 mt-3.2 w-[70px] h-[70px]"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="  flex items-center justify-center gap-4 text-2xl  m-8 hover:bg-gradient-to-r from-pink-700 via-slate-900 to-purple-500 hover:border hover:px-2 hover:rounded-lg ">
          <a
            target="_blank"
            className="hover:scale-150"
            href="https://www.linkedin.com/in/abhishek-kumar-85a555225/"
          >
            <FaLinkedin />
          </a>

          <a
            target="_blank"
            className="hover:scale-150"
            href="https://github.com/abhizmishra"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            className="hover:scale-150"
            href="https://www.instagram.com/abhizmishra?igsh=b3RsdXg3Z29pcnNz"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            className="hover:scale-150"
            href="https://x.com/abhizmishra?t=oAnziXfP4eGN07-RYUASfg&s=09"
          >
            {" "}
            <FaSquareXTwitter />
          </a>
        </div>

        <div className=" mt-[50px]  scale-50 end-[180px] absolute ">
          <Background>
            <div
              className=" absolute liquid_shape flex justify-center rounded-full h-[355px]
          w-[355px]"
            ></div>
          </Background>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
