import { RouterProvider } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

import { appRouter } from "./router/app.router";
import { useAuthStore } from "./auth/store/auth.store";
import { CustomLoading } from "./components/custom/CustomLoading";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
  const { checkAuthStatus } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 60 * 1.5,
    refetchOnWindowFocus: true,
  });
  if (isLoading) return <CustomLoading />;

  return children;
};

export const BooksTrackingApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <CheckAuthProvider>
        <RouterProvider router={appRouter} />
      </CheckAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
