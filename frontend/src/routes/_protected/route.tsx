import MainHeader from '@/layout/mainHeader';
import useAuthStore from '@/store/auth-store';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected')({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated();
    console.log('isAuth', isAuthenticated);

    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: MainHeader,
});
