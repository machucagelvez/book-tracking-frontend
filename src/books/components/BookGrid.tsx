import { BookCard } from "./BookCard";

export const BookGrid = () => {
  return (
    <section key={status} aria-labelledby={`section-${status}`}>
      {/* <div className="mb-4 flex items-baseline gap-3">
        <span className="h-2 w-2 rounded-full" aria-hidden />
        <h2
          id={`section-${status}`}
          className="text-lg font-semibold tracking-tight"
        >
          Leyendo
        </h2>
        <span className="text-sm text-muted-foreground">4</span>
      </div> */}

      {/* <p className="rounded-lg border border-dashed border-border px-4 py-6 text-sm text-muted-foreground">
                      Sin libros en esta categoría todavía.
                    </p> */}

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </section>
  );
};
