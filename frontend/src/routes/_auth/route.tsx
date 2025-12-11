import AuthLayout from '@/layout/authLayout';
import useAuthStore from '@/store/auth-store';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState();

    if (isAuthenticated.isLoggedIn) {
      throw redirect({ to: '/' });
    }
  },
  component: AuthLayout,
});
