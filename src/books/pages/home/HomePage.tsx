import { BookGrid } from "@/books/components/BookGrid";
import { CustomHeader } from "@/components/custom/CustomHeader";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { useState } from "react";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "reading" | "readed" | "pending" | "dropped"
  >("reading");

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

        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="reading"
              onClick={() => setActiveTab("reading")}
            >
              Leyendo (3)
            </TabsTrigger>
            <TabsTrigger value="readed" onClick={() => setActiveTab("readed")}>
              Leídos (5)
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              onClick={() => setActiveTab("pending")}
            >
              Pendientes (2)
            </TabsTrigger>
            <TabsTrigger
              value="dropped"
              onClick={() => setActiveTab("dropped")}
            >
              Abandonados (1)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reading">
            <h1>Leyendo</h1>
            {/* Mostrar todos los libros en estado leyendo */}
            <BookGrid />
          </TabsContent>
          <TabsContent value="readed">
            <h1>Leídos</h1>
            {/* Mostrar todos los leídos */}
            <BookGrid />
          </TabsContent>
          <TabsContent value="pending">
            <h1>Pendientes</h1>
            {/* Mostrar todos los pendientes */}
            <BookGrid />
          </TabsContent>
          <TabsContent value="dropped">
            <h1>Abandonados</h1>
            {/* Mostrar todos los abandonados */}
            <BookGrid />
          </TabsContent>
        </Tabs>

        <CustomPagination totalPages={5} />
      </main>

      {/* <AddBookDialog open={open} onOpenChange={setOpen} onAdd={addBook} /> */}
    </>
  );
};
