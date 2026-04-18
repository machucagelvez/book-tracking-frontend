import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const BooksTrackingApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
