import { z } from "zod";

export const eventSchema = z.object({
  id: z.number(),
  titleEn: z.string(),
  titleMr: z.string(),
  descriptionEn: z.string(),
  descriptionMr: z.string(),
  date: z.string(),
  images: z.array(z.string()),
});

export const gallerySchema = z.object({
  id: z.number(),
  titleEn: z.string(),
  titleMr: z.string(),
  image: z.string(),
  date: z.string(),
});

export type Event = z.infer<typeof eventSchema>;
export type Gallery = z.infer<typeof gallerySchema>;

export const events: Event[] = [
  {
    id: 1,
    titleEn: "Educational Workshop",
    titleMr: "शैक्षणिक कार्यशाळा",
    descriptionEn: "A workshop focused on modern teaching methods and technology in education.",
    descriptionMr: "आधुनिक शिक्षण पद्धती आणि शिक्षणातील तंत्रज्ञानावर केंद्रित कार्यशाळा.",
    date: "2025-02-10T10:00:00.000Z",
    images: [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7"
    ],
  },
  {
    id: 2,
    titleEn: "Community Library Opening",
    titleMr: "सामुदायिक ग्रंथालय उद्घाटन",
    descriptionEn: "Grand opening of our new community library with thousands of books.",
    descriptionMr: "हजारो पुस्तकांसह आमच्या नवीन सामुदायिक ग्रंथालयाचे भव्य उद्घाटन.",
    date: "2025-01-15T14:30:00.000Z",
    images: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    ],
  },
];

export const galleryItems: Gallery[] = [
  {
    id: 1,
    titleEn: "Student Achievement Day",
    titleMr: "विद्यार्थी यश दिन",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    date: "2025-01-20T15:00:00.000Z",
  },
  {
    id: 2,
    titleEn: "Reading Circle",
    titleMr: "वाचन मंडळ",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
    date: "2025-01-25T16:30:00.000Z",
  },
  {
    id: 3,
    titleEn: "Science Exhibition",
    titleMr: "विज्ञान प्रदर्शन",
    image: "https://images.unsplash.com/photo-1612521554578-9dc81257ade7",
    date: "2025-02-01T09:00:00.000Z",
  },
];
