import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from "react-router-dom";
import { useGetDecksQuery } from "./services/base-api";
import { AppTest } from "./AppTest";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <div>login</div>,
  },
  {
    path: "/app",
    element: <AppTest />,
  },
];
const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>hello</div>,
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
  const { data, isLoading, isError } = useGetDecksQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <div>{JSON.stringify(data)}</div>;

  //   return <RouterProvider router={router} />;
};

function PrivateRoutes() {
  // const isAuthenticated = false;
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
