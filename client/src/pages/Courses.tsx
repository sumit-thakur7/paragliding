import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { courseData } from "@/data/courseData";

const Courses = () => {
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
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Courses & Services</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            From your first tandem flight to becoming a certified paraglider pilot, 
            we offer a range of courses and services for all experience levels.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Our <span className="text-secondary">Paragliding Courses</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                We offer comprehensive training programs for all skill levels, from beginners to advanced pilots.
                All courses are taught by certified instructors with years of experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.map((course, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition service-card">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-heading font-bold text-xl text-dark">{course.title}</h3>
                      <span className={`${course.level === 'Beginner' ? 'bg-secondary/10 text-secondary' : course.level === 'Intermediate' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} px-3 py-1 rounded-full text-sm font-medium`}>
                        {course.level}
                      </span>
                    </div>
                    <p className="text-neutral mb-4">{course.description}</p>
                    <ul className="mb-6 space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="text-accent mr-2 h-4 w-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-bold text-2xl text-dark">{course.price}</span>
                      <Link href="/booking">
                        <Button className="px-5 py-2 bg-primary text-white font-accent rounded-full hover:bg-primary/90 transition">
                          {course.actionText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Course Structure */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Course <span className="text-secondary">Structure</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Our courses are designed to progressively build your skills and confidence,
                with a focus on safety and practical experience.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* P1 Basic Course Structure */}
              <div className="mb-12">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6 flex items-center">
                  <span className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">1</span>
                  P1 Basic Course (5 Days)
                </h3>
                <div className="ml-12 space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 1-2: Introduction & Ground Handling</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Theoretical basics of paragliding - aerodynamics, weather, equipment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Introduction to equipment and safety procedures</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Ground handling practice - inflation, control, and deflation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 3-4: Small Hill Training</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>First short flights from small hills with radio guidance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Practicing takeoff and landing techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Basic maneuvers and control exercises</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 5: Certification & Assessment</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Theoretical exam and practical assessment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Supervised high flights from the main launch site</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>P1 certification upon successful completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* P2 Intermediate Course Structure */}
              <div className="mb-12">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6 flex items-center">
                  <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">2</span>
                  P2 Intermediate Course (7 Days)
                </h3>
                <div className="ml-12 space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 1-2: Advanced Theory & Flight Planning</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Advanced aerodynamics and meteorology</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Flight planning and navigation techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Emergency procedures and safety protocols</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 3-5: Ridge Soaring & Thermaling</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Introduction to ridge soaring techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Thermal flying basics and practice</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Extended mountain flights with instructor guidance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 6-7: Cross-Country Introduction & Certification</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Introduction to cross-country flying concepts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Short guided cross-country flights</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Theoretical and practical assessment for P2 certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* P3 Pilot Certification Structure */}
              <div>
                <h3 className="font-heading font-bold text-2xl text-dark mb-6 flex items-center">
                  <span className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">3</span>
                  P3 Pilot Certification (10 Days)
                </h3>
                <div className="ml-12 space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 1-3: Advanced Theory & Safety Training</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Comprehensive meteorology and microclimate analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Advanced flight mechanics and glider performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>SIV (Simulation of Incidents in Flight) preparation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 4-6: SIV Course & Advanced Maneuvers</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Controlled SIV training over water (collapses, spirals, stalls)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Recovery techniques and emergency procedures</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Advanced flying maneuvers and control</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-heading font-semibold text-xl text-dark mb-3">Day 7-10: Cross-Country Flying & Certification</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Guided cross-country flights with increasing distance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Advanced thermal techniques and glide optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1" />
                        <span>Comprehensive testing and P3 certification assessment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Safety First */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1605773723154-40d51430e646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Safety briefing before paragliding" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-heading font-bold text-4xl text-dark mb-6">Safety First</h2>
                <p className="text-neutral mb-4">
                  At GEP Paragliding, safety is our top priority. All our courses include comprehensive 
                  safety training, and we only fly in suitable weather conditions. Our instructors are 
                  certified and experienced, ensuring that you receive the best guidance throughout your training.
                </p>
                <p className="text-neutral mb-6">
                  We maintain all our equipment to the highest standards and regularly update our safety 
                  protocols in line with international guidelines. We believe that a safe environment is 
                  essential for you to enjoy the learning process and develop confidence in your flying skills.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-secondary h-5 w-5" />
                    </div>
                    <span>Regular equipment safety checks and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-secondary h-5 w-5" />
                    </div>
                    <span>Comprehensive weather assessment before each flight</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-secondary h-5 w-5" />
                    </div>
                    <span>Certified instructors with emergency management training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-secondary h-5 w-5" />
                    </div>
                    <span>Low student-to-instructor ratio for personalized attention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">Ready to Start Your Paragliding Journey?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Whether you're looking for your first tandem experience or want to become a certified pilot,
              our courses are designed to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking">
                <Button className="px-8 py-6 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition">
                  Book a Course
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-accent font-medium rounded-full hover:bg-white/20 transition">
                  Contact for Details
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default Courses;
