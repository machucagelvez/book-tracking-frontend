import { bookApi } from "../api/book.api";
import type { UserBookResponse } from "../types/get-user-book.response";

export const getBooksByUserAction = async (
  page: number = 1,
  limit: number = 6,
  reading_status: string | null = null,
): Promise<UserBookResponse> => {
  if (isNaN(page)) page = 1;
  if (isNaN(limit)) limit = 6;

  const { data } = await bookApi.get<UserBookResponse>("/user-book", {
    params: { page, limit, reading_status },
  });
  return data;
};
