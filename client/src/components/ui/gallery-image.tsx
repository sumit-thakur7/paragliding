import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImageProps {
  src: string;
  alt: string;
  index?: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  index = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openImage = () => setIsOpen(true);
  const closeImage = () => setIsOpen(false);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const modalImageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <>
      <motion.div 
        className="overflow-hidden rounded-lg cursor-pointer"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        onClick={openImage}
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-64 object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeImage}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              variants={modalImageVariants}
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={src} 
                alt={alt}
                className="w-full h-auto max-h-[90vh] rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                onClick={closeImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryImage;
