import { Eye, Heart } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { UserBook } from "../types/user-book.interface";

interface Props {
  book: UserBook;
}

export const BookCard = ({ book }: Props) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-linear-to-br from-white to-gray-50">
      <div className="relative h-64">
        <img
          src={book.imageUrl || "/placeholder.svg"}
          alt={book.title}
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
            <h3 className="font-bold text-lg leading-tight">{book.title}</h3>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
