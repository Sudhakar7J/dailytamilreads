import React from "react";
import { ThirukuralAdhigaramData } from "@/mockdataconfigs/ThirukuralAdhigaramData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function BookDescriptionSection({
  selectedChapter,
  setSelectedChapter,
}: any) {
  const selectedKurals = ThirukuralAdhigaramData[0].kurals.filter(
    (kural) => kural.chapter === selectedChapter
  );

  const renderedChapters = new Set();

  const handleClickChapter = (chapter: any) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="flex flex-col h-screen w-full mt-10">
      <section className="flex items-center justify-center">
        <NavigationMenu>
          {ThirukuralAdhigaramData[0].sections.map((section) => (
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  value={section.toLowerCase()}
                  className="border-none bg-amber-100 font-semibold"
                  key={section}
                >
                  {section}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-indigo-100">
                  <NavigationMenuLink>
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
                            className="text-black font-md mx-4 py-2 cursor-pointer "
                            onClick={() => handleClickChapter(kural.chapter)}
                          >
                            {kural.chapter}
                            <div className="py-1">
                              <Separator className="border border-slate-400" />
                            </div>
                          </div>
                        );
                      })}
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          ))}
        </NavigationMenu>
      </section>
      <section>
        {selectedKurals.map((kural) => (
          <div
            key={kural.number}
            className="border border-slate-300 bg-slate-300 rounded-xl mx-12 mt-12 py-8"
          >
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center w-1/12">
                <h2 className="text-center font-semibold">{kural.number}</h2>
              </div>
              <div className="items-center justify-center flex flex-col py-2 w-10/12 font-bold">
                <h3 className="text-center">{kural.kural[0]}</h3>
                <h3 className="text-center">{kural.kural[1]}</h3>
              </div>
              {/* <Link
                href={`/${thirukuralcategory}/${thirukuralslug}
                `}
              ></Link> */}
            </div>
            <div className="px-12 text-base">
              <div className="pb-6 font-medium">{kural.meaning.ta_mu_va}</div>
              <div className="pb-6 font-medium">{kural.meaning.ta_salamon}</div>
              <div className="text-center font-medium">{kural.meaning.en}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
