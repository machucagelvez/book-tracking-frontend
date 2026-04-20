import { BookMarked, LogOut } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";

export const CustomHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <BookMarked className="h-5 w-5" strokeWidth={2} />
          <span className="text-base font-semibold tracking-tight">
            Bibliógrafo
          </span>
        </Link>
        <div className="flex items-center gap-3">
          {/* {user && (
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user.name}
            </span>
          )} */}
          <Button variant="ghost" size="sm" aria-label="Cerrar sesión">
            <LogOut className="h-4 w-4" />
            <span className="ml-1.5 hidden sm:inline">Salir</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
