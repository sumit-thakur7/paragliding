import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for handling form submissions
  
  // Process booking form submission
  app.post('/api/bookings', async (req: Request, res: Response) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Booking request received successfully!", 
        booking 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Booking submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process booking request" 
        });
      }
    }
  });

  // Process contact form submission
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully!", 
        contact 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Process newsletter subscription
  app.post('/api/newsletter', async (req: Request, res: Response) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Newsletter subscription successful!", 
        newsletter 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
