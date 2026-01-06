import { createFileRoute, redirect } from '@tanstack/react-router';
import AuthLayout from '../../components/layout/authLayout';
import useAuthStore from '@/store/auth-store';

export const Route = createFileRoute('/_auth')({
  beforeLoad: () => {
    const { accessToken } = useAuthStore.getState();

    if (accessToken) {
      throw redirect({ to: '/dashboard' });
    }
  },
  component: AuthLayout,
});
