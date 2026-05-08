import type { UserBook } from "./user-book.interface";

export interface UserBookResponse {
  total: number;
  userBooks: UserBook[];
}
