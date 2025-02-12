import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEventSchema, insertGallerySchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  // Events endpoints
  app.get("/api/events", async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get("/api/events/:id", async (req, res) => {
    const event = await storage.getEvent(Number(req.params.id));
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  });

  app.post("/api/events", async (req, res) => {
    const parsed = insertEventSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid event data" });
    }
    const event = await storage.createEvent(parsed.data);
    res.status(201).json(event);
  });

  app.delete("/api/events/:id", async (req, res) => {
    await storage.deleteEvent(Number(req.params.id));
    res.status(204).send();
  });

  // Gallery endpoints
  app.get("/api/gallery", async (_req, res) => {
    const items = await storage.getGalleryItems();
    res.json(items);
  });

  app.post("/api/gallery", async (req, res) => {
    const parsed = insertGallerySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid gallery data" });
    }
    const item = await storage.createGalleryItem(parsed.data);
    res.status(201).json(item);
  });

  app.delete("/api/gallery/:id", async (req, res) => {
    await storage.deleteGalleryItem(Number(req.params.id));
    res.status(204).send();
  });

  const httpServer = createServer(app);
  return httpServer;
}
