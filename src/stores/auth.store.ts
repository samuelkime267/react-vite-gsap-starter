import { create } from "zustand";

type TokenType = string | null | undefined;
type AuthState = {
  token: TokenType;
  isLoading: boolean;
  setToken: (token: TokenType) => void;
  setIsLoading: (isLoading: boolean) => void;
  id: string | null;
  setId: (id: string | null) => void;
  name: string | null;
  setName: (name: string | null) => void;
  email: string | null;
  setEmail: (email: string | null) => void;
  setUser: (user: { id: string; name: string; email: string }) => void;
  clearUser: () => void;
  userDataError: boolean;
  setUserDataError: (error: boolean) => void;
};

export const useAuth = create<AuthState>((set) => ({
  isLoading: false,
  token: undefined,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
  setToken: (token) => set(() => ({ token })),
  id: null,
  setId: (id) => set(() => ({ id })),
  name: null,
  setName: (name) => set(() => ({ name })),
  email: null,
  setEmail: (email) => set(() => ({ email })),
  setUser: (user) =>
    set(() => ({ id: user.id, name: user.name, email: user.email })),
  clearUser: () =>
    set(() => ({
      id: null,
      name: null,
      email: null,
      token: null,
      isLoading: false,
    })),
  userDataError: false,
  setUserDataError: (error) => set(() => ({ userDataError: error })),
}));
