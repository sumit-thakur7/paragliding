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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { insertBookingSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Extend the booking schema with any additional validation
const bookingFormSchema = insertBookingSchema.extend({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  date: z.string().refine((val) => {
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Please select a future date"),
});

const Booking = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      participants: 1,
      message: "",
    },
  });

  // Handle form submission
  const bookingMutation = useMutation({
    mutationFn: async (values: z.infer<typeof bookingFormSchema>) => {
      return apiRequest("POST", "/api/bookings", values);
    },
    onSuccess: async () => {
      toast({
        title: "Booking Request Received!",
        description: "We'll contact you shortly to confirm your adventure.",
        variant: "default",
      });
      form.reset();
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

  const onSubmit = (values: z.infer<typeof bookingFormSchema>) => {
    setSubmitting(true);
    bookingMutation.mutate(values);
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
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Book Your Adventure</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Ready to experience the thrill of paragliding? Reserve your spot now and prepare for an unforgettable adventure.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="font-heading font-bold text-3xl text-dark mb-6 text-center">Reserve Your Paragliding Experience</h2>
              <p className="text-neutral mb-8 text-center">
                Fill out the form below to book your paragliding adventure. We'll contact you shortly to confirm your reservation and provide additional details.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                            placeholder="Your full name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                            placeholder="Your email address"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                            placeholder="Your phone number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark font-medium">Select Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                              <SelectValue placeholder="Choose an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tandem">Tandem Flight Experience</SelectItem>
                            <SelectItem value="p1">P1 Basic Course</SelectItem>
                            <SelectItem value="p2">P2 Intermediate Course</SelectItem>
                            <SelectItem value="p3">P3 Pilot Certification</SelectItem>
                            <SelectItem value="private">Private Lessons</SelectItem>
                            <SelectItem value="photography">Photography Flights</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark font-medium">Preferred Date</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark font-medium">Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary">
                              <SelectValue placeholder="Choose a time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8:00 AM - 11:00 AM)</SelectItem>
                            <SelectItem value="midday">Midday (11:00 AM - 2:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (2:00 PM - 5:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="participants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark font-medium">Number of Participants</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="number" 
                            min="1" 
                            max="10" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                            onChange={e => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark font-medium">Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={4} 
                              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                              placeholder="Any specific requirements or questions?"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Button 
                      type="submit" 
                      disabled={submitting}
                      className="w-full px-8 py-4 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition text-lg"
                    >
                      {submitting ? "Processing..." : "Book Your Adventure Now"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Book With Us */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Why Book With <span className="text-secondary">GEP Paragliding</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Choose us for your paragliding adventure and enjoy these exclusive benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition service-card text-center">
                <div className="text-primary text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">Safety First</h3>
                <p className="text-neutral">
                  All our flights are conducted by certified instructors with years of experience and top-quality equipment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition service-card text-center">
                <div className="text-primary text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">Flexible Scheduling</h3>
                <p className="text-neutral">
                  Need to reschedule? No problem. We offer free rescheduling up to 48 hours before your flight.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition service-card text-center">
                <div className="text-primary text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">Prime Locations</h3>
                <p className="text-neutral">
                  Fly over some of the most breathtaking landscapes with perfect flying conditions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition service-card text-center">
                <div className="text-primary text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">Free Transport</h3>
                <p className="text-neutral">
                  We provide complimentary pickup and drop-off service from nearby hotels and transport hubs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Booking Policy */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="font-heading font-bold text-3xl text-dark mb-6 text-center">Booking Policy</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-2">Payment</h3>
                  <p className="text-neutral">
                    A 30% deposit is required to confirm your booking. The remaining balance is due on the day of your flight.
                    We accept cash, credit cards, and online transfers.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-2">Cancellation</h3>
                  <p className="text-neutral">
                    Cancellations made more than 72 hours before the scheduled flight receive a full refund.
                    Cancellations within 48-72 hours receive a 50% refund. Cancellations less than 48 hours before
                    the flight are non-refundable but can be rescheduled within 3 months.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-2">Weather Conditions</h3>
                  <p className="text-neutral">
                    In case of unsuitable weather conditions, we'll offer to reschedule your flight or provide a full refund.
                    Safety is our priority, and our pilots make the final decision regarding weather suitability.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-2">Health Requirements</h3>
                  <p className="text-neutral">
                    Participants should be in good health and not suffer from heart conditions, back problems, or 
                    serious medical issues. Please inform us of any health concerns when booking. Pregnant women 
                    and individuals under the influence of alcohol or drugs are not permitted to fly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default Booking;
