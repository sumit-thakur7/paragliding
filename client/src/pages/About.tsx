import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl text-white mb-4">About Us</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Learn about our journey, mission, and passion for bringing the experience of paragliding to adventure enthusiasts around the world.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Mountain landscape for paragliding" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-heading font-bold text-4xl text-dark mb-6">Our Story</h2>
                <p className="text-neutral mb-4">
                  Founded in 2005, GEP Paragliding began with a simple mission: to share the incredible 
                  experience of paragliding with the world. What started as a small operation with just 
                  two instructors, Rajesh and Vikram, in the stunning valleys of Bir Billing, has grown 
                  into India's premier paragliding destination.
                </p>
                <p className="text-neutral mb-4">
                  Over the years, we've expanded our operations to multiple locations across India, 
                  bringing the joy of flight to thousands of adventure seekers. Our team of certified 
                  instructors has decades of combined experience, ensuring that every flight is not 
                  only exhilarating but also safe.
                </p>
                <p className="text-neutral mb-4">
                  We've trained thousands of pilots and given countless tandem experiences to those 
                  looking to touch the sky. Our commitment to safety, quality equipment, and exceptional 
                  customer service has made us the trusted choice for paragliding in India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Statistics */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-heading font-bold text-5xl text-secondary mb-2">15+</p>
                <p className="text-neutral font-medium">Years of Experience</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-heading font-bold text-5xl text-secondary mb-2">50+</p>
                <p className="text-neutral font-medium">Certified Instructors</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-heading font-bold text-5xl text-secondary mb-2">5000+</p>
                <p className="text-neutral font-medium">Students Trained</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-heading font-bold text-5xl text-secondary mb-2">10+</p>
                <p className="text-neutral font-medium">Flying Locations</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission, Vision, Values */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Guided by our core values, we strive to make paragliding accessible, safe, and unforgettable for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition service-card">
                <div className="text-primary text-4xl mb-4"><i className="fas fa-bullseye"></i></div>
                <h3 className="font-heading font-bold text-2xl text-dark mb-3">Our Mission</h3>
                <p className="text-neutral">
                  To provide safe, professional, and unforgettable paragliding experiences while promoting 
                  the sport in India and around the world. We aim to inspire a love for flight and adventure 
                  in everyone who visits us.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition service-card">
                <div className="text-primary text-4xl mb-4"><i className="fas fa-eye"></i></div>
                <h3 className="font-heading font-bold text-2xl text-dark mb-3">Our Vision</h3>
                <p className="text-neutral">
                  To become the world's most trusted paragliding training center and to make the joy of flight 
                  accessible to everyone. We envision a future where paragliding is recognized as a safe and 
                  accessible adventure sport for all.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition service-card">
                <div className="text-primary text-4xl mb-4"><i className="fas fa-heart"></i></div>
                <h3 className="font-heading font-bold text-2xl text-dark mb-3">Our Values</h3>
                <p className="text-neutral">
                  Safety, excellence, environmental responsibility, and a passion for sharing the freedom of 
                  flight with others. We believe in creating a supportive community where people can discover 
                  the joy of paragliding in a responsible way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Team */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Meet Our Team
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Our experienced instructors and staff are dedicated to providing you with a safe and memorable paragliding experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Rajesh Kumar - Founder & Chief Instructor" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-dark mb-1">Rajesh Kumar</h3>
                  <p className="text-primary font-medium mb-3">Founder & Chief Instructor</p>
                  <p className="text-neutral text-sm mb-4">
                    With over 20 years of paragliding experience, Rajesh is a certified international instructor 
                    and has trained hundreds of pilots.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Vikram Singh - Co-Founder & Operations Manager" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-dark mb-1">Vikram Singh</h3>
                  <p className="text-primary font-medium mb-3">Co-Founder & Operations Manager</p>
                  <p className="text-neutral text-sm mb-4">
                    Vikram oversees all operations, ensuring that every aspect of your experience with us is smooth and memorable.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Priya Sharma - Senior Instructor" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-dark mb-1">Priya Sharma</h3>
                  <p className="text-primary font-medium mb-3">Senior Instructor</p>
                  <p className="text-neutral text-sm mb-4">
                    Priya specializes in beginner training and is known for her patient and encouraging teaching style.
                  </p>
                </div>
              </div>
              
              {/* Team Member 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Alex Johnson - International Instructor" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-dark mb-1">Alex Johnson</h3>
                  <p className="text-primary font-medium mb-3">International Instructor</p>
                  <p className="text-neutral text-sm mb-4">
                    With experience flying in over 20 countries, Alex brings international expertise to our advanced training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">Join Our Paragliding Community</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Whether you're looking for your first flight experience or want to become a certified pilot,
              we're here to guide you on your paragliding journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking">
                <Button className="px-8 py-6 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition">
                  Book Your Adventure
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

export default About;
