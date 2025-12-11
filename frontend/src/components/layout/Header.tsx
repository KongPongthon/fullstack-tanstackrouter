import { cn } from '@/lib/utils';
import type { LinkProps } from '@tanstack/react-router';

interface Header {
  className?: string;
}
interface HeaderMenuItem extends LinkProps {
  label: string;
}
interface HeaderMenuProps {
  menu: readonly HeaderMenuItem[];
}
function Header({ children, className }: React.PropsWithChildren<Header>) {
  return (
    <header
      className={cn(
        'sticky top-0 z-100 border-b border-gray-200 bg-white px-4',
        className
      )}
    >
      {children}
    </header>
  );
}

export { Header };
export type { HeaderMenuItem, HeaderMenuProps };
