import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../../../types";

interface AuthState {
  currentUser: User | null;
  updateUser: (data: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentUser: null,
      updateUser: (data) => set({ currentUser: data }),
    }),
    {
      name: "user-storage", // The name of the key in localStorage
    }
  )
);