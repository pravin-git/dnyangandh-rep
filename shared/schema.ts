import { pgTable, text, serial, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  titleEn: text("title_en").notNull(),
  titleMr: text("title_mr").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionMr: text("description_mr").notNull(),
  date: timestamp("date").notNull(),
  images: json("images").$type<string[]>().notNull(),
});

export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  titleEn: text("title_en").notNull(),
  titleMr: text("title_mr").notNull(), 
  image: text("image").notNull(),
  date: timestamp("date").notNull(),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export const insertGallerySchema = createInsertSchema(gallery).omit({ id: true });

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
export type InsertGallery = z.infer<typeof insertGallerySchema>;
export type Gallery = typeof gallery.$inferSelect;
