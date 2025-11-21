import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import AmaanImg from "../Assets/DevelopersPage/Amaan.jpg";
import PriyanshuImg from "../Assets/DevelopersPage/Priyanshu.jpg";
import DhruvImg from "../Assets/DevelopersPage/Dhruv.jpg";
import AdityaImg from "../Assets/DevelopersPage/Aditya.jpg";
import TeenaImg from "../Assets/DevelopersPage/Teena.jpg";
import AnkitImg from "../Assets/DevelopersPage/Ankit.jpg";
import GithubIcon from "../Assets/DevelopersPage/Github.png";
import LinkedinIcon from "../Assets/DevelopersPage/Linkedin.png";

const DevelopersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kisan Kranti Developer Resources & API Documentation</title>
        <meta
          name="description"
          content="Explore developer guides, AI architecture, APIs, and integration resources to build agriculture-focused applications with Kisan Kranti platform."
        />
        <link rel="canonical" href="https://www.kisankranti.tech/developers" />
      </Helmet>

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 my-20">
        {/* Amaan */}
        <div className="flex flex-col items-center justify-center gap-5 p-4 bg-[#ffffff] text-black shadow-xl w-[325px] lg:w-[400px]">
          <div className="w-[150px]">
            <img
              src={AmaanImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/AmaanNaseh"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/amaan-naseh"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>

          <p className="text-justify">
            Hey, I’m Amaan Naseh, the team lead . We have decided to develop
            this website, dedicated to empowering and supporting the Kisan
            community. I have led my team as a Web and AI developer to build
            this project, Kisan Kranti, an end to end solution for Indian
            farmers.
          </p>
        </div>

        {/* Teena */}
        <div className="flex flex-col items-center justify-center gap-5 p-4 bg-[#ffffff] text-black shadow-xl w-[325px] lg:w-[400px]">
          <div className="w-[150px]">
            <img
              src={TeenaImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/TeenaSingh4640"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/teena-singh-718b732b9"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>

          <p className="text-justify">
            Hey, I’m Teena! Let’s be real—farmers have it tough, and the farming
            industry isn’t exactly a walk in the park. So, we thought, why not
            develop an app to help our Kisan community? because they deserve
            nothing less than the best! I expertise
          </p>
        </div>

        {/* Priyanshu */}
        <div className="flex flex-col items-center justify-center gap-5 p-4 bg-[#ffffff] text-black shadow-xl w-[325px] lg:w-[400px]">
          <div className="w-[150px]">
            <img
              src={PriyanshuImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/priyanshu-git-hub"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyexec/"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>

          <p className="text-justify">
            Hey, I am Priyanshu. As a part of the Kisan Kranti team, I develop
            solutions that bring technology to agriculture. From front end to
            full stack market linkages, I have helped create a platform that
            enables farmers to make informed decisions and improve their
            productivity.
          </p>
        </div>

        {/* Dhruv */}
        <div className="flex flex-col items-center justify-center gap-5 p-4 bg-[#ffffff] text-black shadow-xl w-[325px] lg:w-[400px]">
          <div className="w-[150px]">
            <img
              src={DhruvImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/dhruvtaneja19"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/dhruv-taneja-008074286"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>

          <p className="text-justify">
            Hey, I’m Dhruv. In the Kisan Kranti team, I focus on developing and
            maintaining the digital tools that support farmers in managing
            crops, accessing market prices, and leveraging agricultural
            insights. My role ensures the platform is efficient, reliable, and
            accessible to farmers across regions.
          </p>
        </div>

        {/* Aditya */}
        <div className="flex flex-col items-center justify-center gap-5 p-4 bg-[#ffffff] text-black shadow-xl w-[325px] lg:w-[400px]">
          <div className="w-[150px]">
            <img
              src={AdityaImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/Ad72828"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-choudhary-663357327"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>

          <p className="text-justify">
            Hey, I’m Aditya. As a developer on the Kisan Kranti project, I work
            on creating a user-friendly platform that provides farmers with
            vital resources like live chatbot, and crop management tools
            including medicine calculation for effective management of farm
            lands.
          </p>
        </div>

        {/* Ankit */}
        <div className="flex flex-col items-center justify-center gap-5 p-4 bg-[#ffffff] text-black shadow-xl w-[325px] lg:w-[400px]">
          <div className="w-[150px]">
            <img
              src={AnkitImg}
              className="rounded-full w-full"
              alt="developer"
            />
          </div>

          <div className="flex flex-wrap my-3 gap-8">
            <a
              href="https://github.com/ankitredhat"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
            <a
              href="https://linkedin.com/in/ankit-gupta-936843323"
              className="decoration-none hover:scale-110 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="..." className="w-[25px] h-[25px]" />
            </a>
          </div>

          <p className="text-justify">
            Hey! I’m Ankit. In the Kisan Kranti team, I design and implement key
            features that deliver critical agricultural data to farmers. I
            ensure the platform is both user-friendly and reliable, for which I
            have deployed the segments of this website in multiple stages for
            everyone to access !
          </p>
        </div>
      </div>
    </>
  );
};

export default DevelopersPage;
