import { bookApi } from "../api/book.api";
import type { UserBookResponse } from "../types/get-user-book.response";

export const getBooksByUserAction = async (): Promise<UserBookResponse> => {
  const { data } = await bookApi.get<UserBookResponse>("/user-book");
  return data;
};
