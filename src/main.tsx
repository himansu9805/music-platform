import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@/index.css'
import { NavBar } from '@/components/nav-bar.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import Home from '@/routes/home.tsx';
import { Login } from './routes/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
