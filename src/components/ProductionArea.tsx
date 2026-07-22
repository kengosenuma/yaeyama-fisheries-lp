"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ProductionArea() {
  const { t } = useLanguage();

  return (
    <section id="production-area" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full md:order-1">
            <Image
              src="/images/production-area.png"
              alt=""
              fill
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:order-2">
            <MapPin className="h-8 w-8 text-secondary mb-4" />
            <h2 className="font-heading text-3xl font-bold">{t.productionArea.heading}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.productionArea.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
