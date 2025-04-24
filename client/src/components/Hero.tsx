import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Features list for info cards
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.21 13.89 7 23l9-9-8.99-9-.28 7.59 5.5 1.5" />
        </svg>
      ),
      title: "Certified Trainers",
      description: "Learn from internationally certified paragliding professionals"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21 21-1.8-1.8"/>
          <path d="m4.8 4.8 1.8 1.8"/>
          <path d="m21 5-1.8 1.8"/>
          <path d="m4.8 21 1.8-1.8"/>
          <path d="M3 14h3m12 0h3"/>
          <path d="M10 3v3m0 12v3"/>
          <path d="m8 8 8 8"/>
          <path d="m16 8-8 8"/>
          <path d="M8 16 16 8"/>
        </svg>
      ),
      title: "Scenic Locations",
      description: "Fly over breathtaking landscapes and mountain views"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 12H9.5l-.5-8"/>
        </svg>
      ),
      title: "Safety First",
      description: "Top-tier equipment and rigorous safety protocols"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 1 0-16 0"/>
          <path d="M12 11v8"/>
          <path d="M8 15h8"/>
        </svg>
      ),
      title: "5000+ Happy Flyers",
      description: "Join thousands who've experienced the thrill with us"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient bg-cover bg-center relative overflow-hidden">
      {/* Background Overlay with a slightly darkened gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6">
              Experience the <span className="text-secondary">Freedom</span> of Flight
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Discover the thrill of paragliding with India's premier paragliding destination. 
              Professional training, breathtaking views, and unforgettable experiences await you.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/booking">
                <Button className="px-8 py-6 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition">
                  Book Your Flight
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-accent font-medium rounded-full hover:bg-white/20 transition">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            variants={itemVariants}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Paraglider in flight" 
              className="rounded-2xl shadow-2xl max-w-md w-full"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="text-white text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-heading font-bold text-white text-xl mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
