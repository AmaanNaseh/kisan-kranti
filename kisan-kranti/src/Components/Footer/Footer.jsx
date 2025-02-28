import React from "react";
import Logo from "../../Assets/Navbar/Logo.jpg";
import BrochureHindi from "../../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../../Assets/Brochure/Brochure_English.pdf";
import GmailIcon from "../../Assets/DevelopersPage/Gmail.png";
import LinkedinIcon from "../../Assets/DevelopersPage/Linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full h-fullmd:pt-5 bg-footer-gradient" id="#About">
        <div className="p-3 md:px-8 flex flex-col gap-4 md:flex-row md:justify-evenly">
          <div className="flex flex-col items-center md:w-[20%]">
            <div className="w-[100px]">
              <img src={Logo} className="w-full" alt="logo" />
            </div>
            <p className="text-justify my-2 mt-4 text-white font-bold">
              Kisan Kranti: “Technology Meets Tradition for Farmer Upliftment”
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly gap-5 py-2 md:w-[70%]">
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-bold text-xl">About</h1>
              <Link to={"/developers"} className="hover:scale-110">
                Developers
              </Link>

              <a
                href="https://github.com/AmaanNaseh/kisan-kranti"
                target="_blank"
                rel="noreferrer"
                className="decoration-none text-black hover:scale-110"
              >
                Software
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-bold text-xl">Resources</h1>
              <a
                className="decoration-none hover:scale-110 cursor-pointer"
                href="https://youtu.be/QwbhA1V4NrI"
                target="_blank"
                rel="noreferrer"
              >
                <p>How to Use? (Hindi)</p>
              </a>
              <a
                className="decoration-none hover:scale-110 cursor-pointer"
                href="https://youtu.be/LVCE_83GQlY"
                target="_blank"
                rel="noreferrer"
              >
                <p>How to Use? (English)</p>
              </a>
              <a
                href={BrochureHindi}
                download="Kisan_Kranti_Brochure_Hindi.pdf"
                className="decoration-none text-black"
              >
                <p className="hover:scale-110 cursor-pointer">
                  Brochure (Hindi)
                </p>
              </a>
              <a
                href={BrochureEnglish}
                download="Kisan_Kranti_Brochure_English.pdf"
                className="decoration-none text-black"
              >
                <p className="hover:scale-110 cursor-pointer">
                  Brochure (English)
                </p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-bold text-xl">Social</h1>
              <div className="flex flex-col items-center justify-center gap-4">
                <a
                  href="mailto:naseh.amaan@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none"
                >
                  <img
                    className="w-[32px] hover:scale-110"
                    src={GmailIcon}
                    alt="gmail icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/amaan-naseh/"
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none"
                >
                  <img
                    className="w-[32px]  hover:scale-110"
                    src={LinkedinIcon}
                    alt="linkedin icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2 border-0 w-[85%] bg-[#1F4529] h-[1px] outline-0 mx-auto" />
        <p className="text-center my-2">@{currentYear} All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
