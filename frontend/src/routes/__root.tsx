// src/routes/__root.tsx
import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RouterComponent,
  // notFoundComponent: Page404NotFound,
});

// ใช้ createRootRoute เพื่อสร้าง Route หลัก
function RouterComponent() {
  return (
    <div className='h-full'>
      <div className='h-full'>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
}
// export const Route = createRootRoute({
//   component: () => (
//     <div className='h-full'>
//       <div className='h-full'>
//         <Outlet />
//       </div>
//       <TanStackRouterDevtools />
//     </div>
//   ),
// });
