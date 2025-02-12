import { type Event, type InsertEvent, type Gallery, type InsertGallery } from "@shared/schema";

export interface IStorage {
  // Events
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  deleteEvent(id: number): Promise<void>;

  // Gallery
  getGalleryItems(): Promise<Gallery[]>;
  createGalleryItem(item: InsertGallery): Promise<Gallery>;
  deleteGalleryItem(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private events: Map<number, Event>;
  private gallery: Map<number, Gallery>;
  private eventId: number;
  private galleryId: number;

  constructor() {
    this.events = new Map();
    this.gallery = new Map();
    this.eventId = 1;
    this.galleryId = 1;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.eventId++;
    const newEvent = { ...event, id };
    this.events.set(id, newEvent);
    return newEvent;
  }

  async deleteEvent(id: number): Promise<void> {
    this.events.delete(id);
  }

  async getGalleryItems(): Promise<Gallery[]> {
    return Array.from(this.gallery.values());
  }

  async createGalleryItem(item: InsertGallery): Promise<Gallery> {
    const id = this.galleryId++;
    const newItem = { ...item, id };
    this.gallery.set(id, newItem);
    return newItem;
  }

  async deleteGalleryItem(id: number): Promise<void> {
    this.gallery.delete(id);
  }
}

export const storage = new MemStorage();
