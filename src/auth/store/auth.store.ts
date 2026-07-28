import type { User } from "@/types/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";
import { checkStatusAction } from "../actions/check-status.action";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

type AuthState = {
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuthStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  token: null,
  authStatus: "checking",

  login: async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password);
      localStorage.setItem("token", data.token);
      set({ user: data.user, token: data.token, authStatus: "authenticated" });
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null, authStatus: "not-authenticated" });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, authStatus: "not-authenticated" });
  },

  checkAuthStatus: async () => {
    try {
      const { token, user } = await checkStatusAction();
      set({ user, token, authStatus: "authenticated" });
      return true;
    } catch (error) {
      set({ user: null, token: null, authStatus: "not-authenticated" });
      return false;
    }
  },
}));
