import { create } from "zustand";
import { persist } from "zustand/middleware";

const MOCK_USER = [
  {
    id: "1",
    email: "luthfi@gmail.com",
    password: "luthfi123",
    name: "Luthfi",
    role: "admin",
  },
  {
    id: "2",
    email: "fulan@gmail.com",
    password: "fulan123",
    name: "Fulan",
    role: "user",
  },
];

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      error: null,

      login: (email, password) => {
        const foundUser = MOCK_USER.find(
          (u) => u.email === email && u.password === password,
        );

        if (foundUser) {
          set({
            user: {
              id: foundUser.id,
              email: foundUser.email,
              name: foundUser.name,
              role: foundUser.role,
            },
            error: null,
          });
          return true;
        } else {
          // Perbaiki 'eror' menjadi 'error'
          set({ error: "Email atau password salah!" });
          return false;
        }
      },

      logout: () => {
        set({ user: null, error: null });
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
export default useAuthStore;
