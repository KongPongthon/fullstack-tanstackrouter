import { Homepage } from '@/pages/(public)/homepage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Homepage,
});
