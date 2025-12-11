// import AuthLayout from '@/page/(admin)/dashboard/authLayout';
import AuthLayout from '@/layout/authLayout';
import useAuthStore from '@/store/auth-store';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState();

    if (!isAuthenticated.isLoggedIn) {
      throw redirect({ to: '/login' });
    }
  },
  component: AuthLayout,
});
