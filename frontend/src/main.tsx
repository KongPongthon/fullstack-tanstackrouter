// // src/main.tsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider, createRouter } from '@tanstack/react-router';

// import { routeTree } from './routeTree.gen';

// const router = createRouter({
//   routeTree,
// });

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router;
//   }
// }

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/config/provider';

const rootElement = document.getElementById('root')!;
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
