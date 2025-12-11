import LoginPage from '@/page/(auth)/login/loginPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/login/')({
  component: LoginPage,
});
