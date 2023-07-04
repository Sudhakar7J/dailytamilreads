"use client";
import React, { useState } from "react";
import { ThirukuralAdhigaramData } from "@/mockdataconfigs/ThirukuralAdhigaramData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export default function BookCategoriesSection({ setSelectedChapter }: any) {
  const renderedChapters = new Set();

  const handleClickChapter = (chapter: any) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="flex flex-col h-screen w-full mt-10">
      <Accordion type="single" collapsible>
        {ThirukuralAdhigaramData[0].sections.map((section) => (
          <AccordionItem
            value={section.toLowerCase()}
            className="border-none"
            key={section}
          >
            <div className="font-bold text-xl text-white my-4">
              <AccordionTrigger className="hover:no-underline items-center justify-between mx-8">
                {section}
              </AccordionTrigger>
            </div>
            <div>
              <AccordionContent>
                {ThirukuralAdhigaramData[0].kurals
                  .filter((kural) => kural.section === section)
                  .map((kural) => {
                    if (renderedChapters.has(kural.chapter)) {
                      return null;
                    }
                    renderedChapters.add(kural.chapter);
                    return (
                      <div
                        key={kural.number}
                        className="text-white font-md ml-8 py-2 cursor-pointer"
                        onClick={() => handleClickChapter(kural.chapter)}
                      >
                        {kural.chapter}
                      </div>
                    );
                  })}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
