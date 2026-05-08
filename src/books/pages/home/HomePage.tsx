import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookGrid } from "@/books/components/BookGrid";
import { CustomHeader } from "@/components/custom/CustomHeader";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { usePaginatedBook } from "@/books/hooks/usePaginatedBook";
import { useBookSummary } from "@/books/hooks/useBookSummary";
import { useHomePageParams } from "@/books/hooks/useHomePageParams";

export const HomePage = () => {
  const { setSearchParams, page, limit, readingStatus, selectedTab } =
    useHomePageParams();

  const { data: userBooksData } = usePaginatedBook(
    +page,
    +limit,
    readingStatus,
  );

  const { data: summaryData } = useBookSummary();

  return (
    <>
      <CustomHeader />

      <main>
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Mi biblioteca
            </h1>
          </div>
          <Button className="shrink-0">
            <Plus className="h-4 w-4" />
            <span className="ml-1.5 hidden sm:inline">Agregar libro</span>
            <span className="ml-1.5 sm:hidden">Agregar</span>
          </Button>
        </div>

        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.delete("reading_status");
                  prev.set("tab", "all");
                  return prev;
                })
              }
            >
              Todos ({summaryData?.total ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="reading"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "reading");
                  prev.set("reading_status", "reading");
                  return prev;
                })
              }
            >
              Leyendo ({summaryData?.reading ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="readed"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "readed");
                  prev.set("reading_status", "completed");
                  return prev;
                })
              }
            >
              Leídos ({summaryData?.completed ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "pending");
                  prev.set("reading_status", "pending");
                  return prev;
                })
              }
            >
              Pendientes ({summaryData?.pending ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="dropped"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "dropped");
                  prev.set("reading_status", "dropped");
                  return prev;
                })
              }
            >
              Abandonados ({summaryData?.dropped ?? 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <BookGrid userBooks={userBooksData?.userBooks ?? []} />
          </TabsContent>
          <TabsContent value="reading">
            <BookGrid userBooks={userBooksData?.userBooks ?? []} />
          </TabsContent>
          <TabsContent value="readed">
            <BookGrid userBooks={userBooksData?.userBooks ?? []} />
          </TabsContent>
          <TabsContent value="pending">
            <BookGrid userBooks={userBooksData?.userBooks ?? []} />
          </TabsContent>
          <TabsContent value="dropped">
            <BookGrid userBooks={userBooksData?.userBooks ?? []} />
          </TabsContent>
        </Tabs>

        <CustomPagination totalPages={userBooksData?.pages ?? 1} />
      </main>

      {/* <AddBookDialog open={open} onOpenChange={setOpen} onAdd={addBook} /> */}
    </>
  );
};
