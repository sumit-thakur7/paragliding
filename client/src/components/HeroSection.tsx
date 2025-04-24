import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4)), url('https://images.unsplash.com/photo-1622283577839-b8bbc8036252?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.h1 
              className="font-heading font-bold text-4xl md:text-6xl text-white mb-6"
              variants={itemVariants}
            >
              Experience the <span className="text-secondary">Freedom</span> of Flight
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg mb-8 max-w-lg"
              variants={itemVariants}
            >
              Discover the thrill of paragliding with India's premier paragliding destination. 
              Professional training, breathtaking views, and unforgettable experiences await you.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Link href="/booking">
                <a className="px-8 py-3 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition text-center relative overflow-hidden group">
                  <span className="relative z-10">Book Your Flight</span>
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                </a>
              </Link>
              <Link href="/courses">
                <a className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-accent font-medium rounded-full hover:bg-white/20 transition text-center">
                  Explore Courses
                </a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            variants={imageVariants}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Paraglider in flight"
              className="rounded-2xl shadow-2xl max-w-md w-full"
              variants={floatAnimation}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8, 
            duration: 0.5,
            staggerChildren: 0.2, 
          }}
        >
          <FeatureBox 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="Certified Trainers"
            description="Learn from internationally certified paragliding professionals"
            delay={0.2}
          />
          <FeatureBox 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
            title="Scenic Locations"
            description="Fly over breathtaking landscapes and mountain views"
            delay={0.4}
          />
          <FeatureBox 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            title="Safety First"
            description="Top-tier equipment and rigorous safety protocols"
            delay={0.6}
          />
          <FeatureBox 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="5000+ Happy Flyers"
            description="Join thousands who've experienced the thrill with us"
            delay={0.8}
          />
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transition group hover:bg-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="text-white text-3xl mb-3"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-heading font-bold text-white text-xl mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </motion.div>
  );
};

export default HeroSection;
