import { create } from "zustand";

export type User = {
  id: string;
  mobile: string;
  // Add other user fields as needed
};

interface AuthState {
  isLoggedIn: boolean;
  isAuthChecked: boolean;
  user: User | null;
  setLoggedIn: (val: boolean) => void;
  setUser: (user: User | null) => void;
  setAuthChecked: (val: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  isAuthChecked: false,
  user: null,
  setLoggedIn: (val) => set({ isLoggedIn: val }),
  setUser: (user) => set({ user }),
  setAuthChecked: (val) => set({ isAuthChecked: val }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));
