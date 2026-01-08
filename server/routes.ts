import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const parsed = insertInquirySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ 
          message: fromZodError(parsed.error).message 
        });
      }
      const inquiry = await storage.createInquiry(parsed.data);
      res.status(201).json(inquiry);
    } catch (error) {
      console.error("Error creating inquiry:", error);
      res.status(500).json({ message: "문의 저장 중 오류가 발생했습니다." });
    }
  });

  return httpServer;
}
