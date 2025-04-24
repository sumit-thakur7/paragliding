import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  level: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  level,
  description,
  features,
  price,
  image,
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

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beginner":
        return "bg-secondary/10 text-secondary";
      case "Intermediate":
        return "bg-primary/10 text-primary";
      case "Advanced":
        return "bg-accent/10 text-accent";
      default:
        return "bg-secondary/10 text-secondary";
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-heading font-bold text-xl text-dark">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(level)}`}>
            {level}
          </span>
        </div>
        <p className="text-neutral mb-4">{description}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="h-4 w-4 text-accent mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="font-heading font-bold text-2xl text-dark">{price}</span>
          <Link href="/booking">
            <a>
              <Button className="bg-primary hover:bg-primary/90 text-white font-accent rounded-full">
                Book Now
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
