"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold text-center">
          {t.products.heading}
        </h2>

        <BentoGrid className="mx-auto mt-16 max-w-6xl">
          {t.products.items.map((item, i) => (
            <BentoGridItem
              key={item.name}
              className={cn(
                i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1",
                "hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-muted/30 transition-all duration-300 ease-in-out"
              )}
              header={
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              }
              title={<span className="font-heading font-bold">{item.name}</span>}
              description={
                <>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="mt-2 font-bold text-primary tabular-nums">{item.price}</p>
                </>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
