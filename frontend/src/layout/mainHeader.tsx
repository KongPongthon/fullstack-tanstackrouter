import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useAuthStore from '@/store/auth-store';
import { Link } from '@tanstack/react-router';
import { LayoutDashboard, Leaf, LogOut, Truck, Users } from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'แดชบอร์ด' },
  { to: '/truck-entries', icon: Truck, label: 'รอบรถเข้า-ออก' },
  { to: '/sellers', icon: Users, label: 'ผู้ขายประจำ' },
];
const MainHeader = () => {
  const { userData, clearAll } = useAuthStore();

  return (
    <aside className='fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col shadow-xl z-50'>
      {/* Logo */}
      <div className='p-6 border-b border-sidebar-border'>
        <div className='flex items-center gap-3'>
          <div className='w-12 h-12 bg-sidebar-primary rounded-xl flex items-center justify-center'>
            <Leaf className='w-7 h-7 text-sidebar-primary-foreground' />
          </div>
          <div>
            <h1 className='font-bold text-lg text-sidebar-foreground'>
              ลานยางพารา
            </h1>
            <p className='text-xs text-sidebar-foreground/60'>
              Rubber Trading Yard
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex-1 p-4 space-y-2'>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            // className={({ isAuthenticated }) =>
            //   cn(
            //     'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group',
            //     isAuthenticated
            //       ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md'
            //       : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            //   )
            // }
          >
            <item.icon className='w-5 h-5' />
            <span className='font-medium'>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* User Info & Logout */}
      <div className='p-4 border-t border-sidebar-border'>
        <div className='flex items-center gap-3 px-4 py-3 mb-3 bg-sidebar-accent rounded-xl'>
          <div className='w-10 h-10 bg-sidebar-primary rounded-full flex items-center justify-center'>
            <span className='text-sidebar-primary-foreground font-semibold'>
              {userData?.idCustomer}
            </span>
          </div>
          <div className='flex-1 min-w-0'>
            <p className='font-medium text-sm truncate'>{userData?.username}</p>
            <p className='text-xs text-sidebar-foreground/60 capitalize'>
              {userData?.role}
            </p>
          </div>
        </div>
        <Button
          variant='ghost'
          className='w-full justify-start gap-3 text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10 text-black py-20'
          onClick={clearAll}
        >
          <LogOut className='w-5 h-5' />
          ออกจากระบบ
        </Button>
      </div>
    </aside>
  );
};

export default MainHeader;
