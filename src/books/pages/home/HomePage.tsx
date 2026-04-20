import { BookGrid } from "@/books/components/BookGrid";
import { CustomHeader } from "@/components/custom/CustomHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const HomePage = () => {
  return (
    <>
      <CustomHeader />

      <main>
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Mi biblioteca
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {/* {books.length} {books.length === 1 ? "libro" : "libros"} */}#
              libros en total
            </p>
          </div>
          <Button className="shrink-0">
            <Plus className="h-4 w-4" />
            <span className="ml-1.5 hidden sm:inline">Agregar libro</span>
            <span className="ml-1.5 sm:hidden">Agregar</span>
          </Button>
        </div>

        <BookGrid />

        {/* {!ready ? (
          <div className="text-muted-foreground">Cargando…</div>
        ) : (
          <div className="space-y-12">
            {STATUS_ORDER.map((status) => {
              const list = grouped[status];
              const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
              const currentPage = Math.min(pages[status], totalPages);
              const start = (currentPage - 1) * PAGE_SIZE;
              const visible = list.slice(start, start + PAGE_SIZE);

              return (
                <section key={status} aria-labelledby={`section-${status}`}>
                  <div className="mb-4 flex items-baseline gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: `hsl(var(--${STATUS_META[status].colorVar}))` }}
                      aria-hidden
                    />
                    <h2
                      id={`section-${status}`}
                      className="text-lg font-semibold tracking-tight"
                    >
                      {STATUS_META[status].label}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {list.length}
                    </span>
                  </div>

                  {list.length === 0 ? (
                    <p className="rounded-lg border border-dashed border-border px-4 py-6 text-sm text-muted-foreground">
                      Sin libros en esta categoría todavía.
                    </p>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {visible.map((book) => (
                          <BookCard
                            key={book.id}
                            book={book}
                            onToggleFavorite={toggleFavorite}
                          />
                        ))}
                      </div>

                      {totalPages > 1 && (
                        <div className="mt-6 flex items-center justify-end gap-2">
                          <span className="mr-1 text-xs text-muted-foreground">
                            Página {currentPage} de {totalPages}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            aria-label="Página anterior"
                            disabled={currentPage === 1}
                            onClick={() => setPage(status, currentPage - 1)}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            aria-label="Página siguiente"
                            disabled={currentPage === totalPages}
                            onClick={() => setPage(status, currentPage + 1)}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </section>
              );
            })}
          </div>
        )} */}
      </main>

      {/* <AddBookDialog open={open} onOpenChange={setOpen} onAdd={addBook} /> */}
    </>
  );
};
