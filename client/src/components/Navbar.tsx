import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/equipment", label: "Equipment" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-light/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-secondary w-8 h-8 mr-2">
                <path d="M12.6.75h2.454l-1.812 3H15a.75.75 0 0 1 0 1.5h-3.38L12.6.75Zm-.5 3.75V2.25h-2.22l-1.841 5.06 1.973 1.46L11.6 4.5Zm2.385 3.354-2.291-1.7 2.79-5.242 3.034 1.394a.75.75 0 0 1 .386.656.75.75 0 0 1-.386.657l-3.533 1.9a2.25 2.25 0 0 0-.945.935l-.069.136a.75.75 0 0 1-.986.364ZM7.832 4.065a.75.75 0 0 1 .203.034L7.927 4.07l1.173.423-.681 1.87a.75.75 0 0 1-.694.504H5.91l1.922-2.803Zm2.729 5.605L9.47 8.834a.75.75 0 0 1-.231-1.033L9.593 7.2l.395-1.085 1.32.098a1.5 1.5 0 0 1 1.224.877l.536 1.293a1.5 1.5 0 0 1 0 1.18l-.996 2.244a.75.75 0 0 1-1.151.337.75.75 0 0 1-.195-.197l-.236-.416a1.5 1.5 0 0 1 .67-2.132h.001l-.003-.002Zm-1.932 9.778L9.463 17.2a.75.75 0 0 1-.175-.851l.143-.352a.75.75 0 0 1 .136-.222l2.116-2.235a.75.75 0 0 1 .233-.167l1.13-.445a.75.75 0 0 1 .549-.019l3.18 1.196a.75.75 0 0 1-.546 1.397l-2.99-1.123-1.801 1.896.338.836a.75.75 0 0 1-.546 1.016l-2.361.607a.75.75 0 0 1-.28.003Zm1.931-10.12.4.7a.75.75 0 0 1-.654 1.113h-1.217l2.293 3.217a.75.75 0 0 1 .143.54l-.313 1.432a.75.75 0 0 1-.638.588l-1.95.307a.75.75 0 0 1-.525-.124.75.75 0 0 1-.281-.462l-.21-.963-1.823 1.924a.75.75 0 0 1-1.147-.1l-1.075-1.5a.75.75 0 0 1 .028-.965L7.33 9.625l3.229.03Zm2.16-7.917L12.82.817l3.182 2.34a.75.75 0 0 1-.314 1.335l-3.988.837a.75.75 0 0 1-.213.022Z" />
              </svg>
              <span className="font-heading font-bold text-2xl text-dark">GEP <span className="text-secondary">Paragliding</span></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "nav-link font-medium transition-colors relative",
                  location === link.href ? "text-secondary" : "text-dark hover:text-secondary"
                )}>
                  {link.label}
                  <span className={cn(
                    "absolute bottom-[-4px] left-0 w-0 h-0.5 bg-secondary transition-all duration-300",
                    location === link.href && "w-full"
                  )}></span>
                </a>
              </Link>
            ))}
          </div>

          {/* Book Now Button (Desktop) */}
          <Link href="/booking" className="hidden md:block">
            <Button className="px-6 py-2 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition">
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-dark text-2xl">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={cn(
                        "py-2 px-4 font-medium rounded-md transition-colors",
                        location === link.href
                          ? "bg-secondary/10 text-secondary"
                          : "hover:bg-gray-100"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <Link href="/booking">
                  <Button 
                    className="w-full mt-4 px-6 py-2 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
