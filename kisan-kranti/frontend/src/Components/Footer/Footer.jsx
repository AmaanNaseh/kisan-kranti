import React from "react";
import { motion } from "framer-motion";
import BrochureHindi from "../../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../../Assets/Brochure/Brochure_English.pdf";
import { Link } from "react-router-dom";
import { Flask_Backend_API } from "../../Config/Config";

const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        className="w-full bg-gradient-to-br from-[#1B7D3A] via-[#197735] to-[#156B31] text-white relative overflow-hidden"
        id="#About"
      >
        {/* Background circles for design */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-800/10 rounded-full blur-3xl"></div>

        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
            {/* Brand Section */}
            <motion.div
              className="flex flex-col items-start space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <h2 className="text-4xl font-bold text-white">
                  किसान <span className="italic font-light">Kranti</span>
                </h2>
              </Link>
              <p className="text-base leading-relaxed text-white/90 max-w-xs">
                Empowering farmers with cutting-edge technology and sustainable
                solutions for a better tomorrow.
              </p>
            </motion.div>

            {/* About Us */}
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">About Us</h3>
              <Link
                to="/developers"
                className="text-white/90 hover:text-white text-base transition-colors duration-300"
              >
                Developers
              </Link>
              <a
                href="https://github.com/AmaanNaseh/kisan-kranti"
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-white text-base transition-colors duration-300"
              >
                Software Repo
              </a>
              <Link
                to="/ai-architecture"
                className="text-white/90 hover:text-white text-base transition-colors duration-300"
              >
                AI Architecture
              </Link>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Resources</h3>
              <a href={BrochureEnglish} download>
                Brochure (English)
              </a>
              <a href={BrochureHindi} download>
                Brochure (Hindi)
              </a>

              <a
                href="https://youtu.be/QwbhA1V4NrI"
                target="_blank"
                rel="noreferrer"
              >
                How to Use? (Hindi)
              </a>
              <a
                href="https://youtu.be/LVCE_83GQlY"
                target="_blank"
                rel="noreferrer"
              >
                How to Use? (English)
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Quick Links
              </h3>

              <Link
                to="/crop-selection"
                className="text-white/90 hover:text-white text-base transition-colors duration-300"
              >
                Crop Selection
              </Link>

              <a
                href={Flask_Backend_API}
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-white text-base transition-colors duration-300"
              >
                Crop Disease Prediction
              </a>

              <Link
                to="/crop-report-generator"
                className="text-white/90 hover:text-white text-base transition-colors duration-300"
              >
                Crop Report Generation
              </Link>

              <Link
                to="/edukaan"
                className="text-white/90 hover:text-white text-base transition-colors duration-300"
              >
                E-Dukaan
              </Link>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-700/30 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <p className="text-base text-white/80 text-center">
                © {currentYear} Kisan Kranti. All rights reserved. |{" "}
                <span className="font-semibold">
                  Empowering Farmers, Growing Future
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
