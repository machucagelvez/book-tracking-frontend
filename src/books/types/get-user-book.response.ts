import type { UserBook } from "./user-book.interface";

export interface UserBookResponse {
  total: number;
  pages: number;
  userBooks: UserBook[];
}
