import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions/get-summary.action";
import { useAuthStore } from "@/auth/store/auth.store";

export const useBookSummary = () => {
  const userId = useAuthStore((state) => state.user?.id);

  return useQuery({
    queryKey: ["book-summary", userId],
    queryFn: () => getSummaryAction(),
    staleTime: 1000 * 60 * 5,
  });
};
