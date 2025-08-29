import React, { useEffect } from "react";

import AmaanImg from "../Assets/DevelopersPage/Amaan.jpg";
import TeenaImg from "../Assets/DevelopersPage/Teena.jpg";
import PriyanshuImg from "../Assets/DevelopersPage/Priyanshu.jpg";
import DhruvImg from "../Assets/DevelopersPage/Dhruv.jpg";
import AnkitImg from "../Assets/DevelopersPage/Ankit.jpg";
import AdityaImg from "../Assets/DevelopersPage/Aditya.jpg";
import GithubIcon from "../Assets/DevelopersPage/Github.png";
import LinkedinIcon from "../Assets/DevelopersPage/Linkedin.png";

const DevelopersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center md:px-10 mx-10 my-20">
        <div className="bg-[#0F8922] w-full relative my-12 flex flex-col items-center">
          <div className="w-[105px] md:w-[150px] bg-[#0B6419] p-[6px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] top-[-15%] md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-[-30%]">
            <img
              src={AmaanImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>
          <p className="p-4 mt-[20%] md:mt-0 md:ml-[20%] lg:ml-[15%] text-[#FFFFFF] font-semibold text-justify">
            Hey, I’m Amaan . I believe the farming industry is in a vulnerable
            state, with farmers often facing exploitation. To address this
            issue, we have decided to develop this website, dedicated to
            empowering and supporting the Kisan community. I have led my team as
            a Web and AI developer to build this project.
          </p>
          <div className="flex flex-wrap my-3 gap-8">
            <a
              href="https://github.com/AmaanNaseh"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/amaan-naseh"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div>
        {/* <div className="bg-[#0F8922] w-full relative my-12 flex flex-col items-center">
          <div className="w-[105px] md:w-[150px] bg-[#0B6419] p-[6px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] top-[-15%] md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-[-30%]">
            <img
              src={TeenaImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>
          <p className="p-4 mt-[20%] md:mt-0 md:ml-[20%] lg:ml-[15%] text-[#FFFFFF] font-semibold text-justify">
            Hey, I’m Teena! Let’s be real—farmers have it tough, and the farming
            industry isn’t exactly a walk in the park. So, we thought, why not
            develop an app to help our Kisan community? because they deserve
            nothing less than the best! I expertise
          </p>
          <div className="flex flex-wrap my-3 gap-8">
            <a
              href="https://github.com/teena-718b732b9"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/TeenaSingh4640"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div> */}
        <div className="bg-[#0F8922] w-full relative my-12 flex flex-col items-center">
          <div className="w-[105px] md:w-[150px] bg-[#0B6419] p-[6px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] top-[-15%] md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-[-30%]">
            <img
              src={PriyanshuImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>
          <p className="p-4 mt-[20%] md:mt-0 md:ml-[20%] lg:ml-[15%] text-[#FFFFFF] font-semibold text-justify">
            Hey, I am Priyanshu. As a part of the Kisan Kranti team, I develop
            solutions that bring technology to agriculture. From front end to
            full stack market linkages, I have helped create a platform that
            enables farmers to make informed decisions and improve their
            productivity.
          </p>
          <div className="flex flex-wrap my-3 gap-8">
            <a
              href="https://github.com/priyanshu-git-hub"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/priyanshu-prajapati-366b90255"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div>
        <div className="bg-[#0F8922] w-full relative my-12 flex flex-col items-center">
          <div className="w-[105px] md:w-[150px] bg-[#0B6419] p-[6px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] top-[-15%] md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-[-30%]">
            <img
              src={DhruvImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>
          <p className="p-4 mt-[20%] md:mt-0 md:ml-[20%] lg:ml-[15%] text-[#FFFFFF] font-semibold text-justify">
            Hey, I’m Dhruv. In the Kisan Kranti team, I focus on developing and
            maintaining the digital tools that support farmers in managing
            crops, accessing market prices, and leveraging agricultural
            insights. My role ensures the platform is efficient, reliable, and
            accessible to farmers across regions.
          </p>
          <div className="flex flex-wrap my-3 gap-8">
            <a
              href="https://github.com/dhruvtaneja19"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/dhruv-taneja-008074286"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div>
        {/* <div className="bg-[#0F8922] w-full relative my-12 flex flex-col items-center">
          <div className="w-[105px] md:w-[150px] bg-[#0B6419] p-[6px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] top-[-15%] md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-[-30%]">
            <img
              src={AnkitImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>
          <p className="p-4 mt-[20%] md:mt-0 md:ml-[20%] lg:ml-[15%] text-[#FFFFFF] font-semibold text-justify">
            Hey! I’m Ankit. In the Kisan Kranti team, I design and implement key
            features that deliver critical agricultural data to farmers. I
            ensure the platform is both user-friendly and reliable, for which I
            have deployed the segments of this website in multiple stages for
            everyone to access !
          </p>
          <div className="flex flex-wrap my-3 gap-8">
            <a
              href="https://github.com/ankitredhat"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/ankit-gupta-936843323"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div> */}
        <div className="bg-[#0F8922] w-full relative my-12 flex flex-col items-center">
          <div className="w-[105px] md:w-[150px] bg-[#0B6419] p-[6px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] top-[-15%] md:left-0 md:top-[50%] md:translate-y-[-50%] md:translate-x-[-30%]">
            <img
              src={AdityaImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>
          <p className="p-4 mt-[20%] md:mt-0 md:ml-[20%] lg:ml-[15%] text-[#FFFFFF] font-semibold text-justify">
            Hey, I’m Aditya. As a developer on the Kisan Kranti project, I work
            on creating a user-friendly platform that provides farmers with
            vital resources like live chatbot, and crop management tools
            including medicine calculation for effective management of farm
            lands.
          </p>
          <div className="flex flex-wrap my-3 gap-8">
            <a
              href="https://github.com/Ad72828"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-choudhary-663357327"
              className="decoration-none hover:scale-[1.25] hover:border-white hover:border-[2px] p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopersPage;
