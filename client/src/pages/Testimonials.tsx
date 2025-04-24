import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonialData } from "@/data/testimonialData";
import { Star, StarHalf } from "lucide-react";

const Testimonials = () => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-secondary text-secondary" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-secondary text-secondary" />);
    }
    
    return stars;
  };

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
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Testimonials</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the adventurers who have 
            experienced the thrill of paragliding with us.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                What Our <span className="text-secondary">Flyers Say</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Read the experiences of our customers who have soared through the skies with us.
                Their stories inspire us to continue providing unforgettable paragliding adventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialData.featured.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
                  <div className="text-secondary text-7xl absolute -top-6 left-6 opacity-20">"</div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="flex text-secondary">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="ml-2 text-neutral font-medium">{testimonial.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-neutral italic mb-6">{testimonial.text}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover" 
                      />
                      <div>
                        <h4 className="font-heading font-semibold text-dark">{testimonial.name}</h4>
                        <p className="text-neutral text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Testimonials */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Video <span className="text-secondary">Testimonials</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Watch our customers share their paragliding experiences in their own words.
                These authentic stories capture the excitement and joy of flying with GEP Paragliding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Rahul's Experience with GEP Paragliding" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">Rahul's First Flight Experience</h3>
                  <p className="text-neutral mb-4">
                    "I was nervous at first, but the instructors made me feel so comfortable. The views were absolutely breathtaking!"
                  </p>
                  <div className="flex items-center">
                    <div className="flex text-secondary">
                      {renderStars(5)}
                    </div>
                    <span className="ml-2 text-neutral font-medium">5.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Priya's P1 Course Experience" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">Priya's P1 Training Journey</h3>
                  <p className="text-neutral mb-4">
                    "The comprehensive training helped me become confident in my skills. By the end of the course, I was flying solo!"
                  </p>
                  <div className="flex items-center">
                    <div className="flex text-secondary">
                      {renderStars(5)}
                    </div>
                    <span className="ml-2 text-neutral font-medium">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* All Testimonials */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                More <span className="text-secondary">Reviews</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Here are more stories from our customers about their experiences with GEP Paragliding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialData.more.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-secondary">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-neutral font-medium">{testimonial.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-neutral italic mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-full mr-3 object-cover" 
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-dark text-sm">{testimonial.name}</h4>
                      <p className="text-neutral text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ratings & Statistics */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-12">Our Customer Satisfaction</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-heading font-bold text-5xl mb-2">4.9/5</div>
                <p className="mb-3">Overall Rating</p>
                <div className="flex justify-center text-secondary">
                  {renderStars(4.9)}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-heading font-bold text-5xl mb-2">98%</div>
                <p>Would Recommend</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-heading font-bold text-5xl mb-2">5000+</div>
                <p>Happy Customers</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-heading font-bold text-5xl mb-2">85%</div>
                <p>Return Customers</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default Testimonials;
