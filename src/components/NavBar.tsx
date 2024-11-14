import { useState } from "react";
import { close, github, leedcode, linkedin, menu } from "../assets";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center border-2 border-blue-500 text-blue-500 font-extrabold text-2xl rounded-full shadow-lg mt-2 transition-transform duration-300 hover:scale-110 hover:text-purple-500">
            A
          </div>
        </Link>

        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#B600E0]" : "text-white"
              } hover:text-[#B600E0] font-medium cursor-pointer text-[18px]`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.href}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden sm:flex ml-[-30px]">
          <a
            href="https://www.linkedin.com/in/abdulrcoder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              height={30}
              width={30}
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://leetcode.com/abdulrcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={leedcode}
              alt="LeetCode"
              height={30}
              width={30}
              className="cursor-pointer mx-[20px]"
            />
          </a>
          <a
            href="https://github.com/abdulrcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              height={30}
              width={30}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Mobile Social Icons and Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/abdulrcoder/"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                height={25}
                width={25}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://leetcode.com/abdulrcoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={leedcode}
                alt="LeetCode"
                height={25}
                width={25}
                className="cursor-pointer mx-[10px]"
              />
            </a>
            <a
              href="https://github.com/abdulrcoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                height={25}
                width={25}
                className="cursor-pointer mr-5"
              />
            </a>
          </div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#0c0c1d] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#B600E0]" : "text-white"
                  } hover:text-[#B600E0] font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.href}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
