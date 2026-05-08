import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions/get-summary.action";

export const useBookSummary = () => {
  return useQuery({
    queryKey: ["book-summary"],
    queryFn: () => getSummaryAction(),
    staleTime: 1000 * 60 * 5,
  });
};
