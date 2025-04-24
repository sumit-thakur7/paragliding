import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      }
    }
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <motion.div 
        className="text-primary text-4xl mb-4"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-heading font-bold text-2xl text-dark mb-3">{title}</h3>
      <p className="text-neutral">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
