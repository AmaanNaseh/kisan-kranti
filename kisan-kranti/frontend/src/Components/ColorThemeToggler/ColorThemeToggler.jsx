import { FaMoon } from "react-icons/fa";
import { CgSun } from "react-icons/cg";

const ColorThemeToggler = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div
        className={`rounded-full flex items-center justify-center border-[2px] ${
          darkMode ? "border-white" : "border-black"
        }`}
      >
        <div
          onClick={() => {
            setDarkMode(false);
          }}
          className={`rounded-l-full border-r-[1px] p-2 cursor-pointer font-bold hover:bg-yellow-500 hover:text-white ${
            darkMode
              ? "border-r-white"
              : "bg-yellow-500 text-white border-r-black"
          }`}
        >
          <CgSun />
        </div>
        <div
          onClick={() => {
            setDarkMode(true);
          }}
          className={`rounded-r-full border-l-[1px] p-2 cursor-pointer font-bold hover:bg-black hover:text-white ${
            darkMode ? "bg-black text-white border-l-white" : "border-l-black"
          }`}
        >
          <FaMoon />
        </div>
      </div>
    </>
  );
};

export default ColorThemeToggler;
