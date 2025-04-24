import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { equipmentData } from "@/data/equipmentData";

const Equipment = () => {
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
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Equipment</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            We use only the highest quality, certified paragliding equipment to ensure 
            your safety and enjoyable flying experience.
          </p>
        </div>
      </section>

      {/* Main Equipment */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Our <span className="text-secondary">Equipment</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Safety and performance are our top priorities. We use premium, internationally 
                certified equipment that is regularly inspected and maintained.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {equipmentData.main.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition service-card">
                  <div className="h-48 overflow-hidden rounded-lg mb-6">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{item.title}</h3>
                  <p className="text-neutral mb-4">{item.description}</p>
                  <ul className="text-sm text-neutral">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <Check className="text-accent mr-2 h-4 w-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Equipment Rental & Sales */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
                  <h2 className="font-heading font-bold text-3xl text-dark mb-6">Equipment Rental & Sales</h2>
                  <p className="text-neutral mb-6">
                    We offer equipment rental for our students and visiting pilots. We also have a pro shop 
                    where you can purchase your own paragliding gear from leading brands like Ozone, 
                    Advance, Nova, and Supair.
                  </p>
                  <ul className="mb-6 space-y-3">
                    {equipmentData.rental.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                          <Check className="text-secondary h-4 w-4" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="px-8 py-3 bg-primary text-white font-accent font-medium rounded-full hover:bg-primary/90 transition">
                      Contact for Equipment
                    </Button>
                  </Link>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  {equipmentData.rental.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Brands We Trust */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Brands We <span className="text-secondary">Trust</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                We partner with the world's leading paragliding equipment manufacturers 
                to provide you with the best and safest gear available.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {equipmentData.brands.map((brand, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-16 mb-4 object-contain"
                  />
                  <h3 className="font-heading font-semibold text-lg text-dark text-center">{brand.name}</h3>
                  <p className="text-neutral text-sm text-center">{brand.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Equipment Maintenance */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1501884428012-e7488dc00096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Equipment maintenance" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-heading font-bold text-4xl text-dark mb-6">Equipment Maintenance</h2>
                <p className="text-neutral mb-4">
                  Regular maintenance and proper care of paragliding equipment is essential for safety and longevity. 
                  Our on-site workshop offers comprehensive maintenance services performed by certified technicians.
                </p>
                <p className="text-neutral mb-6">
                  We recommend annual inspections for all paragliding equipment, especially wings, 
                  harnesses, and reserve parachutes. Our technicians can identify potential issues 
                  before they become safety hazards.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-heading font-semibold text-lg text-dark mb-2">Wing Inspections</h3>
                    <p className="text-neutral text-sm">
                      Porosity testing, line measurements, trim checks, and repair services for all brands of paragliders.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-heading font-semibold text-lg text-dark mb-2">Reserve Repacking</h3>
                    <p className="text-neutral text-sm">
                      Professional reserve parachute inspection and repacking services, recommended every 6-12 months.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-heading font-semibold text-lg text-dark mb-2">Harness Repairs</h3>
                    <p className="text-neutral text-sm">
                      Harness inspections, airbag testing, and repairs to ensure your safety and comfort in flight.
                    </p>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="px-8 py-3 bg-primary text-white font-accent font-medium rounded-full hover:bg-primary/90 transition">
                    Book a Maintenance Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">Need Help Choosing Equipment?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Our experienced staff can help you select the right equipment for your skill level, 
              flying style, and budget. Contact us for personalized advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="px-8 py-6 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition">
                  Get Equipment Advice
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-accent font-medium rounded-full hover:bg-white/20 transition">
                  Explore Our Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default Equipment;
