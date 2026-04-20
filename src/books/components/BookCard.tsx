import { Eye, Heart } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// interface Props {
//   book: Book;
// }

export const BookCard = () => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-linear-to-br from-white to-gray-50">
      <div className="relative h-64">
        <img
          src="/ubik.jpg"
          alt="book"
          loading="lazy"
          className="h-full w-full object-cover transition-base group-hover:scale-[1.03]"
        />

        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="py-3 z-10 bg-gray-100/50 backdrop-blur-sm relative top-1 group-hover:-top-2.5 transition-all duration-300">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-tight">Ubik</h3>
            <p className="text-sm text-gray-600">Philip K. Dick</p>
          </div>
        </div>
      </CardHeader>
    </Card>
    // <div>
    //   <div className="relative overflow-hidden rounded-lg bg-muted shadow-sm transition-base group-hover:shadow-card">
    //     <div className="aspect-[2/3] w-full">
    //       {book.coverUrl ? (
    //         <img
    //           src={book.coverUrl}
    //           alt={`Portada de ${book.title}`}
    //           loading="lazy"
    //           className="h-full w-full object-cover transition-base group-hover:scale-[1.03]"
    //           onError={(e) => {
    //             (e.currentTarget as HTMLImageElement).style.display = "none";
    //           }}
    //         />
    //       ) : (
    //         <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground">
    //           <BookOpen className="h-10 w-10" strokeWidth={1.25} />
    //         </div>
    //       )}
    //     </div>

    //     <button
    //       type="button"
    //       aria-label={
    //         book.favorite ? "Quitar de favoritos" : "Marcar como favorito"
    //       }
    //       aria-pressed={book.favorite}
    //       className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-background/90 shadow-sm backdrop-blur transition-base hover:scale-105"
    //     >
    //       <Heart
    //         className={cn(
    //           "h-4 w-4 transition-base",
    //           book.favorite
    //             ? "fill-highlight text-highlight"
    //             : "text-foreground",
    //         )}
    //         strokeWidth={2}
    //       />
    //     </button>
    //   </div>

    //   <div className="mt-3 space-y-0.5">
    //     <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
    //       {book.title}
    //     </h3>
    //     <p className="line-clamp-1 text-xs text-muted-foreground">
    //       {book.author}
    //     </p>
    //   </div>
    // </div>
  );
};
