import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <AnimatedSection>
        <section id="about-preview" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                About <span className="text-secondary">GEP Paragliding</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Learn about our journey, mission, and passion for bringing the experience 
                of paragliding to adventure enthusiasts around the world.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Mountain landscape for paragliding" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-heading font-semibold text-3xl text-dark mb-4">Our Story</h3>
                <p className="text-neutral mb-6">
                  Founded in 2005, GEP Paragliding began with a simple mission: to share the incredible 
                  experience of paragliding with the world. What started as a small operation with just 
                  two instructors has grown into India's premier paragliding destination.
                </p>
                <p className="text-neutral mb-6">
                  Our team of certified instructors has decades of combined experience, ensuring that 
                  every flight is not only exhilarating but also safe. We've trained thousands of 
                  pilots and given countless tandem experiences to those looking to touch the sky.
                </p>
                
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <p className="font-heading font-bold text-3xl text-secondary">15+</p>
                    <p className="text-neutral">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-3xl text-secondary">50+</p>
                    <p className="text-neutral">Instructors</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-3xl text-secondary">5000+</p>
                    <p className="text-neutral">Students Trained</p>
                  </div>
                </div>
                
                <Link href="/about">
                  <Button className="px-8 py-6 bg-primary text-white font-accent rounded-full hover:bg-primary/90 transition">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Courses Preview Section */}
      <AnimatedSection>
        <section id="courses-preview" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Our <span className="text-secondary">Courses & Services</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                From your first tandem flight to becoming a certified paraglider pilot, 
                we offer a range of courses and services for all experience levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tandem Flight Experience */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition service-card">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600593186771-c232e741c0c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tandem Paragliding Experience" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-heading font-bold text-xl text-dark">Tandem Flight Experience</h3>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">Beginner</span>
                  </div>
                  <p className="text-neutral mb-4">
                    Experience the thrill of paragliding with our certified pilots. 
                    No experience necessary - just bring your sense of adventure!
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold text-2xl text-dark">₹2,500</span>
                    <Link href="/booking">
                      <Button className="px-5 py-2 bg-primary text-white font-accent rounded-full hover:bg-primary/90 transition">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* P1 Basic Course */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition service-card">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607962792938-67cad9d4c8af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Basic Paragliding Course" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-heading font-bold text-xl text-dark">P1 Basic Course</h3>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">Beginner</span>
                  </div>
                  <p className="text-neutral mb-4">
                    Learn the fundamentals of paragliding and experience your first 
                    solo flights under instructor supervision.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold text-2xl text-dark">₹15,000</span>
                    <Link href="/booking">
                      <Button className="px-5 py-2 bg-primary text-white font-accent rounded-full hover:bg-primary/90 transition">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* P2 Intermediate Course */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition service-card">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1622527270672-0dbdec943d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Advanced Paragliding Course" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-heading font-bold text-xl text-dark">P2 Intermediate Course</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
                  </div>
                  <p className="text-neutral mb-4">
                    Take your skills to the next level with advanced techniques 
                    and longer mountain flights.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold text-2xl text-dark">₹25,000</span>
                    <Link href="/booking">
                      <Button className="px-5 py-2 bg-primary text-white font-accent rounded-full hover:bg-primary/90 transition">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/courses">
                <Button variant="outline" className="px-8 py-3 font-accent rounded-full border-primary text-primary hover:bg-primary/5 transition">
                  View All Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery Preview */}
      <AnimatedSection>
        <section id="gallery-preview" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Our <span className="text-secondary">Gallery</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Explore stunning moments captured during our paragliding adventures. 
                Each image tells a story of freedom, adventure, and the beauty of flight.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1485467701900-3a736f3f5c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Paraglider over mountains" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1436981427624-2ecd3a8a795a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Paraglider in sunset" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Paraglider launching" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600108515428-489c93e6e607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Mountain landscape view" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/gallery">
                <Button className="px-8 py-3 bg-primary text-white font-accent rounded-full hover:bg-primary/90 transition">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">Ready to Experience the Thrill of Flight?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Join thousands of adventure seekers who have discovered the freedom of paragliding with us.
              Book your adventure today and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking">
                <Button className="px-8 py-6 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition btn-primary">
                  Book Your Flight
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-accent font-medium rounded-full hover:bg-white/20 transition">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default Home;
