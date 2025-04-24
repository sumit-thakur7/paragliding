import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionCardProps {
  question: string;
  answer: string;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6">
      <motion.button
        className="flex items-center justify-between w-full bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition text-left"
        onClick={toggleAccordion}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-heading font-semibold text-lg text-dark">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white px-5 pb-5 rounded-b-xl shadow-md mt-px overflow-hidden"
          >
            <p className="text-neutral">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionCard;
