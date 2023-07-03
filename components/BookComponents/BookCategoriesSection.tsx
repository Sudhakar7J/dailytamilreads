import { ThirukuralAdhigaramData } from "@/mockdataconfigs/ThirukuralAdhigaramData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function BookCategoriesSection() {
  const renderedChapters = new Set();

  return (
    <div>
      <Accordion type="multiple">
        {ThirukuralAdhigaramData[0].sections.map((section) => (
          <AccordionItem
            value={section.toLowerCase()}
            className="border-none"
            key={section}
          >
            <div className="font-bold text-2xl text-white my-4">
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
                      <div key={kural.number}>
                        <div className="text-white font-md ml-8 py-2 cursor-pointer">
                          {kural.chapter}
                        </div>
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
