import { createFileRoute, redirect } from '@tanstack/react-router';
import useAuthStore from '../store/auth-store';
import AuthLayout from '../components/layout/authLayout';

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState();

    if (!isAuthenticated.isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: AuthLayout,
});
