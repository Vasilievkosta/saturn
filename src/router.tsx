import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from "react-router-dom";

import { AppTest } from "./AppTest";
import { DecksPage } from "./pages/decks/decks-page";
import { Page } from "./components/ui/page";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: (
      <div>
        <Page>login</Page>
      </div>
    ),
  },
  {
    path: "/app",
    element: <AppTest />,
  },
];
const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Page>
        <DecksPage />
      </Page>
    ),
  },
];

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

function PrivateRoutes() {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
