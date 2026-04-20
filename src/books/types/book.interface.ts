export type BookStatus = "reading" | "read" | "tbr" | "abandoned";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  status: BookStatus;
  favorite: boolean;
  rating: number; // 0-5
  startDate?: string; // ISO yyyy-mm-dd
  endDate?: string;
  notes?: string;
  review?: string;
  createdAt: string;
}
