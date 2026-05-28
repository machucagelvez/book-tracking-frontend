import { useQuery } from "@tanstack/react-query";
import { getBooksByUserAction } from "../actions/get-books-by-user.action";

export const usePaginatedBook = (
  page: number,
  limit: number,
  readingStatus: string | null,
) => {
  return useQuery({
    queryKey: ["user-books", { page, limit, readingStatus }],
    queryFn: () => getBooksByUserAction(+page, +limit, readingStatus),
    staleTime: 1000 * 60 * 5,
  });
};
