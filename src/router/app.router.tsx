import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { BooksLayout } from "@/books/layouts/BooksLayout";
import { AddBook } from "@/books/pages/add-book/AddBook";
import { BookDetailsPage } from "@/books/pages/book-details/BookDetailsPage";
import { HomePage } from "@/books/pages/home/HomePage";
import { LoginPage } from "@/auth/pages/login/LoginPage";
import { RegisterPage } from "@/auth/pages/register/RegisterPage";

const AuthLayout = lazy(() => import("@/auth/layouts/AuthLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BooksLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "book/:id",
        element: <BookDetailsPage />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/auth/login" />,
  },
]);
