import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { faqData } from "@/data/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about paragliding experiences, 
            courses, and safety measures.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Common <span className="text-secondary">Questions</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                We've compiled answers to the most frequently asked questions about 
                paragliding with GEP Paragliding. If you can't find the answer you're 
                looking for, please contact us.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.general.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-general-${index}`} className="border-none">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      <AccordionTrigger className="p-5 font-heading font-semibold text-lg text-dark px-5 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 text-neutral">
                        {faq.answer}
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Categories */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Questions by <span className="text-secondary">Category</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Browse questions organized by topic to find specific information about our courses, 
                equipment, safety protocols, and more.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Beginner Questions */}
              <div className="mb-12">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">For Beginners</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.beginners.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-beginner-${index}`} className="border-none">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <AccordionTrigger className="p-5 font-heading font-semibold text-lg text-dark px-5 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-5 text-neutral">
                          {faq.answer}
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Course Questions */}
              <div className="mb-12">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">About Courses</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.courses.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-course-${index}`} className="border-none">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <AccordionTrigger className="p-5 font-heading font-semibold text-lg text-dark px-5 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-5 text-neutral">
                          {faq.answer}
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Equipment Questions */}
              <div>
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">About Equipment</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.equipment.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-equipment-${index}`} className="border-none">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <AccordionTrigger className="p-5 font-heading font-semibold text-lg text-dark px-5 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-5 text-neutral">
                          {faq.answer}
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">Still Have Questions?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              If you couldn't find the answer you were looking for, our team is here to help.
              Feel free to contact us, and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="px-8 py-6 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition">
                  Contact Us
                </Button>
              </Link>
              <Link href="/booking">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-accent font-medium rounded-full hover:bg-white/20 transition">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default FAQ;
