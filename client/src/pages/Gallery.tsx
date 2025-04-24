import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { galleryData } from "@/data/galleryData";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Gallery</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Explore stunning moments captured during our paragliding adventures. 
            Each image tells a story of freedom, adventure, and the beauty of flight.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Our <span className="text-secondary">Photo Gallery</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Browse through moments of pure joy and breathtaking views from our paragliding adventures. 
                Click on any image to view it in full size.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryData.map((image, index) => (
                <motion.div 
                  key={index}
                  className="overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Gallery */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Paragliding <span className="text-secondary">Videos</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Experience the thrill of paragliding through our collection of videos.
                Feel the freedom of flight from the comfort of your screen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/LU6EkmPP-iM" 
                    title="Paragliding in Bir Billing" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-2">Soaring Above Bir Billing</h3>
                <p className="text-neutral">Experience the magnificent views of the Himalayas from a paraglider's perspective.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/3PtZUDY8M4E" 
                    title="Learning to Paraglide" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-2">Learning to Paraglide</h3>
                <p className="text-neutral">Follow the journey of a student learning to paraglide with our experienced instructors.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/6XQAghJhkE4" 
                    title="Sunset Paragliding" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-2">Sunset Paragliding Magic</h3>
                <p className="text-neutral">The most beautiful time to fly is during sunset, with golden light bathing the landscape.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/l7KeSCQ5GS8" 
                    title="Cross Country Flying" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-2">Cross Country Adventure</h3>
                <p className="text-neutral">Follow our advanced pilots as they navigate a challenging cross-country route.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Gallery Image View</DialogTitle>
          <div className="relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Gallery;
