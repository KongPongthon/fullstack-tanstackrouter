import { createFileRoute } from '@tanstack/react-router';
import AuthLayout from '../../components/layout/authLayout';

export const Route = createFileRoute('/_auth')({
  // beforeLoad: () => {
  //   const isAuthenticated = useAuthStore.getState();

  //   if (isAuthenticated.isAuthenticated) {
  //     throw redirect({ to: '/' });
  //   }
  // },
  component: AuthLayout,
});
