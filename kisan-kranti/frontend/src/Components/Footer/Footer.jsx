import React from "react";
import { Link } from "react-router-dom";
import { Flask_Backend_API } from "../../Config/Config";
import { motion } from "framer-motion";

import BrochureHindi from "../../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../../Assets/Brochure/Brochure_English.pdf";
import InstallButton from "../InstallButton/InstallButton";

const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        className="w-full bg-[#ffffff] border-t-[2px] border-t-[#BDCBDD] relative overflow-hidden"
        id="#About"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
            {/* Brand Section */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <h2 className="text-3xl font-bold">
                  <span className="text-green-500 text-2xl">किसान</span> Kranti
                </h2>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs">
                Empowering farmers with cutting-edge technology and sustainable
                solutions for a better tomorrow.
              </p>
              <InstallButton />
            </motion.div>

            {/* About Us */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">About Us</h3>
              <Link
                to="/developers"
                className="text-sm transition-colors duration-300"
              >
                Developers
              </Link>
              <a
                href="https://github.com/AmaanNaseh/kisan-kranti"
                target="_blank"
                rel="noreferrer"
                className="text-sm transition-colors duration-300"
              >
                Software Repo
              </a>
              <Link
                to="/ai-architecture"
                className="text-sm transition-colors duration-300"
              >
                AI Architecture
              </Link>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">Resources</h3>
              <a href={BrochureEnglish} download className="text-sm">
                Brochure (English)
              </a>

              <a href={BrochureHindi} download className="text-sm">
                Brochure (Hindi)
              </a>

              <a
                href="https://youtu.be/QwbhA1V4NrI"
                target="_blank"
                rel="noreferrer"
                className="text-sm"
              >
                How to Use? (Hindi)
              </a>

              <a
                href="https://youtu.be/LVCE_83GQlY"
                target="_blank"
                rel="noreferrer"
                className="text-sm"
              >
                How to Use? (English)
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>

              <Link
                to="/crop-selection"
                className="text-sm transition-colors duration-300"
              >
                Crop Selection
              </Link>

              <a
                href={Flask_Backend_API}
                target="_blank"
                rel="noreferrer"
                className="text-sm transition-colors duration-300"
              >
                Crop Disease Prediction
              </a>

              <Link
                to="/crop-report-generator"
                className="text-sm transition-colors duration-300"
              >
                Crop Report Generation
              </Link>

              <Link
                to="/edukaan"
                className="text-sm transition-colors duration-300"
              >
                E-Dukaan
              </Link>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#BDCBDD] pt-8 mt-12">
            <p className="text-base/80 text-center">
              © {currentYear} Kisan Kranti. All rights reserved.
            </p>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
