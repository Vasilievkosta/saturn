import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from "react-router-dom";

import { AppTest } from "./AppTest";
import { DecksPage } from "./pages/decks/decks-page";
import { Page } from "./components/ui/page";
import { My } from "./components/ui/layout/trener";
import { useGetMeQuery } from "./services/base-api";
import { LoginForm } from "./components/auth/loginForm/loginForm";
import { MyForm } from "./components/auth/loginForm/myForm";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: (
      <div>
        <Page>
          <LoginForm />
          <MyForm />
        </Page>
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
  {
    path: "/my",
    element: <My>{"My"}</My>,
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
  let { isError } = useGetMeQuery();
  console.log(isError);

  let isAuthenticated = !isError;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
