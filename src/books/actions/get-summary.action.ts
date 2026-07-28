import { bookApi } from "../../api/book.api";
import type { SummaryResponse } from "../types/summary.response";

export const getSummaryAction = async () => {
  const { data } = await bookApi.get<SummaryResponse>("/user-book/summary");
  return data;
};
