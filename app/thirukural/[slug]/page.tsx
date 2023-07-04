"use client";
import BookCategoriesSection from "@/components/BookComponents/BookCategoriesSection";
import BookDescriptionSection from "@/components/BookComponents/BookDescriptionSection";
import { useState } from "react";

export default function BookPage() {
  const [selectedChapter, setSelectedChapter] = useState("கடவுள் வாழ்த்து");

  const handleSelectChapter = (chapter: any) => {
    setSelectedChapter(chapter);
  };

  return (
    <main className="h-screen w-screen flex mt-16">
      <section className=" flex flex-col w-1/6 bg-slate-700 overflow-auto">
        <BookCategoriesSection setSelectedChapter={handleSelectChapter} />
      </section>
      <section className="flex flex-col  w-5/6 bg-red-300 overflow-y-auto ">
        <BookDescriptionSection
          selectedChapter={selectedChapter}
          setSelectedChapter={setSelectedChapter}
        />
      </section>
    </main>
  );
}
