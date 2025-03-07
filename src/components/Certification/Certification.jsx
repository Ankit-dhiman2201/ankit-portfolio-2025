import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants"; // Assuming this contains the fadeIn variant
import { FaBuilding, FaCertificate } from "react-icons/fa"; // Importing the certificate icon from react-icons
import { AiFillSafetyCertificate } from "react-icons/ai";
import AnkitRs from "../../../public/images/Ankit - Resume01.pdf";

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateLink, setCertificateLink] = useState(""); // For dynamically setting the certificate link

  // Function to open modal with the specific certificate link
  const openModal = (link) => {
    setCertificateLink(link);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      {/* Certification Section */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col gap-6"
      >
        {/* Certifications Title */}
        <motion.p
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          id="certification"
          className="text-5xl text-cyan mb-10 flex flex-col items-center mt-[100px]"
        >
          Certifications & Training
        </motion.p>

        {/* Certification List */}
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-4"
        >
          {/* training */}
          <motion.div
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center gap-2"
          >
            <FaBuilding className="text-lightBrown text-2xl" />{" "}
            {/* training  Icon */}
            <motion.p className="font-bold text-lg text-white">
              AWS Training(Foundations & Architecting) | ETHNUS Bengaluru |
            </motion.p>
          </motion.div>
          <motion.p
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="font-medium text-sm text-center text-gray-500"
          >
            Time Period: Aug2024 - Feb2025
          </motion.p>
          <button
            onClick={() => window.open("../../../public/images/ethnusC.pdf")} // Link to the certificate PDF or image
            className="text-orange  font-semibold hover:underline text-center mx-auto"
          >
            View Certificate
          </button>
          {/* Certification 1 */}
          <motion.div
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center gap-2"
          >
            <AiFillSafetyCertificate className="text-lightBrown text-2xl" />{" "}
            {/* Certification Icon */}
            <motion.p className="font-bold text-lg text-white">
              AWS Certified Solutions Architect – Associate (SAA)
            </motion.p>
          </motion.div>
          <motion.p
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="font-medium text-sm text-center text-gray-500"
          >
            Issued on: January 20, 2025
          </motion.p>
          <button
            onClick={() =>
              window.open(
                "https://www.credly.com/badges/8907c03c-e5aa-4481-824a-68019f1a5ea7/public_url"
              )
            } // Link to the certificate PDF or image
            className="text-orange  font-semibold hover:underline text-center mx-auto"
          >
            View Certificate
          </button>

          {/* Certification 2 */}
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center gap-2"
          >
            <FaCertificate className="text-lightBrown text-2xl" />{" "}
            {/* Certification Icon */}
            <motion.p className="font-bold text-lg text-white">
              AWS Academy Graduate - AWS Academy Cloud Foundations
            </motion.p>
          </motion.div>
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="font-medium text-sm text-center text-gray-500"
          >
            Issued on: October 22, 2024
          </motion.p>
          <button
            onClick={() =>
              window.open(
                "https://www.credly.com/badges/893ef368-31ae-4e82-bc9c-459c31da5116/public_url"
              )
            } // Link to the certificate PDF or image
            className="text-orange font-semibold hover:underline text-center mx-auto"
          >
            View Certificate
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center gap-2"
        >
          <FaCertificate className="text-lightBrown text-2xl" />{" "}
          {/* Certification services */}
          <motion.p className="font-bold text-lg text-white">
            Verified AWS Certifications & Achievements
          </motion.p>
        </motion.div>

        <button
          onClick={() =>
            window.open("https://www.credly.com/users/ankit-dhiman.bba62fe7")
          } // Link to the certificate PDF or image
          className="text-orange font-semibold hover:underline text-center mx-auto"
        >
          View Services
        </button>
      </motion.div>

      {/* Resume Download Button */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center mt-6"
      >
        <a
          href={AnkitRs} // Update with the actual path to your resume
          download="Ankit-Resume"
          className="px-6 py-2 bg-orange text-white font-bold rounded-lg text-center hover:bg-darkOrange transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Certificate Modal (appears when View Certificate button is clicked) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded-lg max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation on the modal content
          >
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-red-600 font-bold text-lg"
              >
                Close
              </button>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Certificate Details
              </h3>
              {/* Display the certificate as an iframe or image */}
              <iframe
                src={certificateLink} // Display the certificate PDF or image
                width="100%"
                height="400px"
                title="Certificate"
                className="rounded-md"
              />
              {/* Alternatively, if you want to show an image */}
              {/* <img src={certificateLink} alt="Certificate" className="max-w-full rounded-md" /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
