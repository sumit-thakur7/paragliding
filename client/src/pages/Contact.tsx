import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

// Extend the contact schema with any additional validation
const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Newsletter schema with validation
const newsletterFormSchema = insertNewsletterSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  // Initialize the contact form
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Initialize the newsletter form
  const newsletterForm = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle contact form submission
  const contactMutation = useMutation({
    mutationFn: async (values: z.infer<typeof contactFormSchema>) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: async () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default",
      });
      contactForm.reset();
      setSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setSubmitting(false);
    },
  });

  // Handle newsletter form submission
  const newsletterMutation = useMutation({
    mutationFn: async (values: z.infer<typeof newsletterFormSchema>) => {
      return apiRequest("POST", "/api/newsletter", values);
    },
    onSuccess: async () => {
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });
      newsletterForm.reset();
      setNewsletterSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setNewsletterSubmitting(false);
    },
  });

  const onContactSubmit = (values: z.infer<typeof contactFormSchema>) => {
    setSubmitting(true);
    contactMutation.mutate(values);
  };

  const onNewsletterSubmit = (values: z.infer<typeof newsletterFormSchema>) => {
    setNewsletterSubmitting(true);
    newsletterMutation.mutate(values);
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
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Have questions or want to learn more about our paragliding services? 
            Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-2/5">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                  <h2 className="font-heading font-bold text-2xl text-dark mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Our Location</h3>
                        <p className="text-neutral">123 Adventure Road, Bir Billing, Himachal Pradesh, India - 176077</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Phone Number</h3>
                        <p className="text-neutral">+91 98765 43210</p>
                        <p className="text-neutral">+91 94321 56789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Email Address</h3>
                        <p className="text-neutral">info@geparagliding.org</p>
                        <p className="text-neutral">bookings@geparagliding.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Operating Hours</h3>
                        <p className="text-neutral">Monday - Sunday: 7:00 AM - 6:00 PM</p>
                        <p className="text-neutral text-sm">(Weather permitting)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="font-heading font-bold text-2xl text-dark mb-6">Connect With Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[#3b5998] text-white p-3 rounded-full hover:opacity-90 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#1da1f2] text-white p-3 rounded-full hover:opacity-90 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#c32aa3] text-white p-3 rounded-full hover:opacity-90 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#ff0000] text-white p-3 rounded-full hover:opacity-90 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#25d366] text-white p-3 rounded-full hover:opacity-90 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                  <h2 className="font-heading font-bold text-2xl text-dark mb-6">Send Us a Message</h2>
                  
                  <Form {...contactForm}>
                    <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={contactForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-dark font-medium">Your Name</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                                  placeholder="Your name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-dark font-medium">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  type="email" 
                                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                                  placeholder="Your email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-dark font-medium">Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  type="tel" 
                                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                                  placeholder="Your phone number (optional)"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-dark font-medium">Subject</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                                  placeholder="Message subject"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={contactForm.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-dark font-medium">Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                rows={5} 
                                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                                placeholder="Your message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        disabled={submitting}
                        className="px-8 py-3 bg-primary text-white font-accent font-medium rounded-full hover:bg-primary/90 transition"
                      >
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection>
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="rounded-xl overflow-hidden shadow-lg h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13511.839311727055!2d76.71769716977537!3d32.03297619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904a15c810f5657%3A0x43c91b5d86b15c9e!2sBir%20Billing%20Paragliding!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="GEP Paragliding Location"
              ></iframe>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Stay updated with the latest news, special offers, and paragliding tips.
              Subscribe to our newsletter today.
            </p>
            <div className="max-w-md mx-auto">
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="flex flex-col sm:flex-row gap-4">
                  <FormField
                    control={newsletterForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="Your email address" 
                            className="px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full" 
                          />
                        </FormControl>
                        <FormMessage className="text-red-200 text-sm mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={newsletterSubmitting}
                    className="px-6 py-3 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition"
                  >
                    {newsletterSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default Contact;
