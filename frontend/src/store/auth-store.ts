import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserDate {
  id: string;
  idCustomer: string;
  username: string;
  role: 'customer' | 'admin' | 'staff';
}

interface IAuthStore {
  refreshToken: string | null;
  accessToken: string | null;
  isAuthenticated: () => boolean;
  setToken: ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => void;
  clearAll: () => void;
  userData: IUserDate;
  setUserData: (data: IUserDate) => void;
}
const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      refreshToken: '',
      accessToken: '',
      isAuthenticated: () => {
        const { accessToken } = get();
        return !!accessToken;
      },
      setToken: ({ accessToken, refreshToken }) => {
        if (accessToken) set({ accessToken });
        if (refreshToken) set({ refreshToken });
        if (accessToken && refreshToken) set({ isAuthenticated: () => true });
      },
      clearAll: () =>
        set({
          refreshToken: null,
          accessToken: null,
          isAuthenticated: () => true,
        }),
      userData: { id: '', idCustomer: '', username: '', role: 'customer' },
      setUserData: (data) => set({ userData: data }),
    }),
    {
      name: 'token',
      partialize: (state) => ({
        refreshToken: state.refreshToken,
        accessToken: state.accessToken,
      }),
    }
  )
);
export default useAuthStore;
