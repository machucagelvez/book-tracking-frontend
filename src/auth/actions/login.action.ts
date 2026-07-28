import { bookApi } from "@/api/book.api";
import type { AuthResponse } from "../types/auth.response";

export const loginAction = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await bookApi.post<AuthResponse>("/user/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
