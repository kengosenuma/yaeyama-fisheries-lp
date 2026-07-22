"use client";

import Image from "next/image";
import { Anchor } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Fishery() {
  const { t } = useLanguage();

  return (
    <section id="fishery" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <Anchor className="h-8 w-8 text-secondary mb-4" />
            <h2 className="font-heading text-3xl font-bold">{t.fishery.heading}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.fishery.body}</p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/fishery.png"
              alt=""
              fill
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
