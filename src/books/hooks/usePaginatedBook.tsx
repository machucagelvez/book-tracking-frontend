import { useQuery } from "@tanstack/react-query";
import { getBooksByUserAction } from "../actions/get-books-by-user.action";
import { useAuthStore } from "@/auth/store/auth.store";

export const usePaginatedBook = (
  page: number,
  limit: number,
  readingStatus: string | null,
) => {
  const userId = useAuthStore((state) => state.user?.id);

  return useQuery({
    queryKey: ["user-books", userId, { page, limit, readingStatus }],
    queryFn: () => getBooksByUserAction(+page, +limit, readingStatus),
    staleTime: 1000 * 60 * 5,
  });
};
