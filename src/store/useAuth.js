import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
    persist(
        (set) => ({
            loading: false,
            user: null,
            token: null,
            authenticated: false,
            setAuthenticated: (value) => set({ authenticated: value }),
            setLoading: (loading) => set({ loading }),
            setAuth: (user, token) => set({ user, token}),
            removeAuth: () => {
                localStorage.removeItem("auth-storage");
                set({ user: null, token: null , authenticated:false })
            }
        }),
        {
            name: "auth-storage",
            getStorage: () => localStorage,
        }
    )
);

export default useAuth;
