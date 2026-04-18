import { createBrowserRouter } from "react-router";

import { BooksLayout } from "@/books/layouts/BooksLayout";
import { AddBook } from "@/books/pages/add-book/AddBook";
import { BookDetailsPage } from "@/books/pages/book-details/BookDetailsPage";
import { HomePage } from "@/books/pages/home/HomePage";

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
]);
