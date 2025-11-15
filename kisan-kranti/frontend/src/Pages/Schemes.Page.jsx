import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import SchemesImg from "../Assets/Schemes_Page/Schemes.jpg";
import DonationImg from "../Assets/Schemes_Page/Donation.png";
import BankImg from "../Assets/Schemes_Page/Bank.png";

const SchemesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Government & NGO Schemes for Farmers | Loans & Insurance</title>
        <meta
          name="description"
          content="Explore Kisan Kranti’s collection of government and non-government schemes including PM-KISAN, KCC, crop insurance, NABARD programs, and more."
        />
        <link rel="canonical" href="https://www.kisankranti.tech/schemes" />
      </Helmet>

      <div className="flex flex-row flex-wrap gap-4 px-4 py-2 my-10 mb-12">
        <div className="md:w-[32%]">
          <div className=" flex flex-col justify-center items-center my-1">
            <img
              src={SchemesImg}
              alt="..."
              className="rounded-full w-[100px] h-[100px] "
            />
          </div>
          <div className="w-full h-[2px] bg-[#BDCBDD] my-4 mb-8"></div>

          <h1 className="text-center font-bold text-2xl my-1 mb-2">
            Government Schemes
          </h1>

          <div className="bg-[#ffffff] shadow-xl z-20 px-3 py-5 flex flex-col items-center justify-center gap-5">
            <h3 className="font-bold text-1xl my-1">
              Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)
            </h3>

            <ul className="list-disc px-8 text-justify">
              <li className="my-1">
                PM Kisan is a Central Sector scheme with 100% funding from
                Government of India.
              </li>
              <li className="my-1">
                It has become operational from 1.12.2018.
              </li>
              <li className="my-1">
                Under the scheme an income support of 6,000/- per year in three
                equal installments will be provided to all land holding farmer
                families.
              </li>
              <li className="my-1">
                Definition of family for the scheme is husband, wife and minor
                children.
              </li>
              <li className="my-1">
                State Government and UT administration will identify the farmer
                families which are eligible for support as per scheme
                guidelines.
              </li>
              <li className="my-1">
                The fund will be directly transferred to the bank accounts of
                the beneficiaries.
              </li>
              <li className="my-1">
                There are various Exclusion Categories for the scheme.
              </li>
            </ul>
            <a
              href="https://pmkisan.gov.in"
              target="_blank"
              rel="noreferrer"
              className="decoration-none text-white"
            >
              <button className="bg-green-500 hover:bg-green-600 rounded text-white text-sm cursor-pointer px-4 py-2 font-bold">
                Apply
              </button>
            </a>
          </div>
        </div>

        {/* Donations */}

        <div className="md:w-[32%]">
          <div className=" flex flex-col justify-center items-center my-1">
            <img
              src={BankImg}
              alt="..."
              className="rounded-full w-[100px] h-[100px] "
            />
          </div>
          <div className="w-full h-[2px] bg-[#BDCBDD] my-4 mb-8"></div>

          <h1 className="text-center font-bold text-2xl my-1 mb-2">Loans</h1>
          <div className="flex flex-col gap-8 flex-wrap">
            <div className="bg-[#ffffff] shadow-xl z-20 px-3 py-5 flex flex-col items-center justify-center gap-5">
              <h3 className="font-bold text-1xl my-1">
                Kisan Credit Card (KCC) Scheme
              </h3>
              <p className="text-justify">
                Kisan Credit Card is a dedicated blog that shares valuable
                updates, news, and information about Kisan Credit Cards, their
                applications, and the latest trends in the industry.
              </p>
              <a
                href="https://www.myscheme.gov.in/schemes/kcc"
                target="_blank"
                rel="noreferrer"
                className="decoration-none text-white bg-green-500 hover:bg-green-600 rounded text-sm cursor-pointer px-4 py-2 font-bold"
              >
                Apply
              </a>
            </div>
            <div className="bg-[#ffffff] shadow-xl z-20 px-3 py-5 flex flex-col items-center justify-center gap-5">
              <h3 className="font-bold text-1xl my-1">
                National Bank for Ariculture and Rural Deveopment (NABARD)
              </h3>
              <p className="text-justify">
                NABARD is India’s apex development bank, established in 1982
                under an Act of Parliament to promote sustainable and equitable
                agriculture and rural development. In its journey of more than
                four decades, the premier development financial institution has
                transformed lives in Indian villages through agri-finance,
                infrastructure development, banking technology, promotion of
                microfinance and rural entrepreneurship through SHGs & JLGs and
                more. It continues to aid in nation building through
                participative financial and non-financial interventions,
                innovations, technology and institutional development in rural
                areas.
              </p>
              <a
                href="https://www.nabard.org/"
                target="_blank"
                rel="noreferrer"
                className="decoration-none text-white bg-green-500 hover:bg-green-600 rounded text-sm cursor-pointer px-4 py-2 font-bold"
              >
                Apply
              </a>
            </div>
          </div>
        </div>

        {/* Crop Insuarance */}

        <div className="md:w-[32%]">
          <div className=" flex flex-col justify-center items-center my-1">
            <img
              src={DonationImg}
              alt="..."
              className="rounded-full w-[100px] h-[100px] "
            />
          </div>
          <div className="w-full h-[2px] bg-[#BDCBDD] my-4 mb-8"></div>

          <h1 className="text-center font-bold text-2xl my-1 mb-2">
            Crop Insuarance
          </h1>

          <div className="flex flex-col gap-8 flex-wrap">
            <div className="bg-[#ffffff] shadow-xl z-20 px-3 py-5 flex flex-col items-center justify-center gap-5">
              <h3 className="font-bold text-1xl my-1">
                Pradhan Mantri Fasal Bima Yojana (PMFBY)
              </h3>

              <ul className="list-disc px-8 text-justify">
                <li className="my-1">
                  Crop Insurance is an integrated IT solution and a web-based
                  ecosystem to speed up service delivery, unify fragmented
                  databases, achieve a single view of data, and eliminate manual
                  processes.
                </li>
                <li className="my-1">
                  The Government is endeavouring for the integration of all the
                  stakeholders viz. farmers, insurance companies, financial
                  institutions & Government agencies on single IT platform. This
                  will ensure better administration, coordination & transparency
                  for getting real time information and monitoring.
                </li>
                <li className="my-1">
                  Crop Insurance portal has enabled the digitization of
                  notification of areas, crops, schemes for enabling information
                  access to multiple stakeholders thereby facilitating ease of
                  access to the farmers in availing crop insurance services.
                </li>
              </ul>
              <a
                href="https://pmfby.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="decoration-none text-white bg-green-500 hover:bg-green-600 rounded text-sm cursor-pointer px-4 py-2 font-bold"
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchemesPage;
