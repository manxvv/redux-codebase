import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "Does Long-term mentorship really produce outcomes?",
    "What should be the duration of my long-term mentorship?",
    "How many sessions can I have with the mentor?",
    "When is the right time to take long-term mentorship?",
    "Do you provide any student discount on the long-term mentorship plan?",
    "What are 100% money-back guarantee & mentor-change policies?",
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 w-[70%] rounded-lg mt-10 text-white mx-auto my-10 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Find answers to commonly asked questions about Long Term Mentorship
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="text-sm sm:text-base">{question}</span>
                <span className="text-gray-400">
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.707 14.707a1 1 0 010-1.414L10 9l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    // <svg
                    //   xmlns="http://www.w3.org/2000/svg"
                    //   className="h-5 w-5"
                    //   viewBox="0 0 20 20"
                    //   fill="currentColor"
                    // >
                      // <path
                      //   fillRule="evenodd"
                      //   d="M10 5a1 1 0 01.707 1.707L6.414 11h7.172a1 1 0 110 2H6.414l4.293 4.293a1 1 0 11-1.414 1.414L4 12l5.293-5.293A1 1 0 0110 5z"
                      //   clipRule="evenodd"
                      // />
                      <FaArrowLeft />

                    // </svg>
                  )}
                </span>
              </button>

              {/* Accordion Content */}
              {activeIndex === index && (
                <div className="bg-gray-700 text-gray-300 p-4 text-sm sm:text-base">
                  This is the answer for: {question}. You can customize this
                  content with actual answers.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
