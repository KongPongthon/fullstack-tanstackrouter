import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import useAuthStore from '@/store/auth-store';

export const Route = createFileRoute('/_protected')({
  beforeLoad: () => {
    const { accessToken } = useAuthStore.getState();

    if (!accessToken) {
      throw redirect({ to: '/login' });
    }
  },
  component: Layout,
});

async function Layout() {
  return (
    <div className='min-h-screen h-full p-20'>
      <Outlet />
    </div>
  );
}
