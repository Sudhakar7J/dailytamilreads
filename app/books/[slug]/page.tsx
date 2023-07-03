import BookCategoriesSection from "@/components/BookComponents/BookCategoriesSection";

export default function BookPage() {
  return (
    <main className="h-screen w-screen ">
      <div className="flex flex-row mt-16">
        <section className="flex flex-col w-1/6 bg-slate-700 min-h-screen overflow-y-auto">
          <BookCategoriesSection />
        </section>
        <section className="flex flex-col w-5/6 bg-red-300 min-h-screen"></section>
      </div>
    </main>
  );
}
