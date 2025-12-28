import { Outlet } from '@tanstack/react-router';

const AuthLayout = () => {
  return (
    <div className='min-h-screen h-full'>
      {/* <ModeToggle /> */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
