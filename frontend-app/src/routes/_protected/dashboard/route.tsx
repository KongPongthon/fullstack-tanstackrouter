import Dashboard from '@/pages/(admin)/dashboard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/dashboard')({
  component: Dashboard,
});
