import { Outlet } from "react-router";

export const BooksLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto w-full max-w-5xl px-4 py-8 sm:py-12">
        <Outlet />
      </div>
    </div>
  );
};
