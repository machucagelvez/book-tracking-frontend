import { bookApi } from "@/api/book.api";
import type { AuthResponse } from "../types/auth.response";

export const checkStatusAction = async (): Promise<AuthResponse> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Error de autenticación");

  try {
    const { data } = await bookApi.get<AuthResponse>("/user/check-status");
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    localStorage.removeItem("token");
    throw new Error("Error de autenticación");
  }
};
