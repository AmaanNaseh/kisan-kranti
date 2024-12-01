import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const ComplaintsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pradhanMail, setPradhanMail] = useState("");
  const [textCount, setTextCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="my-10">
        <h1 className="text-center font-bold text-5xl">
          Complaint Logging System
        </h1>
      </div>
      <div className="my-16">
        <form
          action={`mailto:${pradhanMail}`}
          method="post"
          className="flex flex-col items-center justify-center p-4"
        >
          <div className="flex flex-col justify-start gap-7 mb-12">
            <label htmlFor="name" className="font-bold text-2xl">
              Enter your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={"Kisan"}
              className="md:w-96 h-12 border-[2px] hover:border-[3px] border-black px-2"
            />
            <label htmlFor="email" className="font-bold text-2xl">
              Enter Pradhan's/Sarpanch's Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={"example@gmail.com"}
              className="md:w-96 h-12 border-[2px] hover:border-[3px] border-black px-2"
              onChange={(e) => {
                setPradhanMail(e.target.value);
                console.log(pradhanMail);
              }}
            />
            <p className="text-red-700 font-semibold">
              Don't know email? Check here:
              <a
                href="https://egramswaraj.gov.in/addProfileReport.do"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500 hover:text-2xl ml-4"
              >
                eGramSwaraj
              </a>
            </p>

            <label htmlFor="complain" className="font-bold text-2xl">
              Enter your complain
            </label>
            <textarea
              name="complain"
              id="complain"
              placeholder={"Complain"}
              maxLength={2500}
              rows={10}
              className="md:w-96 border-[2px] hover:border-[3px] border-black px-2"
              onChange={(e) => {
                setTextCount(e.target.value.length);
              }}
            />
            <p className="pl-52">{textCount}/2500 characters used</p>
            <hr />
          </div>

          <div className="flex flex-row gap-12">
            <input
              type="submit"
              value={"Submit"}
              className="font-bold text-2xl p-3 bg-green-500 hover:bg-green-300 rounded-lg w-28 my-3"
            />
            <input
              type="reset"
              value={"Reset"}
              className="font-bold text-2xl p-3 bg-red-600 hover:bg-red-400 rounded-lg w-28 my-3"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ComplaintsPage;
