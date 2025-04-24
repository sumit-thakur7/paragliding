import React from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";
import AnimatedWrapper from "./AnimatedWrapper";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [location] = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <AnimatedWrapper key={location}>
            {children}
          </AnimatedWrapper>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const ScrollToTop = () => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition z-50 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default Layout;
