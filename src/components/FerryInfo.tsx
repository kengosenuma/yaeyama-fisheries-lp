"use client";

import Image from "next/image";
import { Ship } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const badgeLabel: Record<"ja" | "en" | "zh-TW", string> = {
  ja: "フェリーご利用の皆様へ",
  en: "For Ferry Passengers",
  "zh-TW": "渡輪旅客專屬",
};

export default function FerryInfo() {
  const { lang, t } = useLanguage();

  return (
    <section
      className={cn(
        "py-20 md:py-28 bg-ocean-deep text-ocean-deep-foreground relative overflow-hidden",
        lang === "zh-TW" && "ring-4 ring-secondary"
      )}
    >
      {/* Background image */}
      <Image
        src="/images/ferry.png"
        alt=""
        fill
        className="opacity-20 object-cover"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {lang === "zh-TW" && (
          <Badge variant="secondary" className="mb-4 text-sm px-3 py-1.5 font-semibold">
            {badgeLabel[lang]}
          </Badge>
        )}
        <Ship className="h-16 w-16 mx-auto mb-6 text-secondary" />
        <h2 className="font-heading text-3xl font-bold">{t.ferry.heading}</h2>
        <p className="mt-6 text-ocean-deep-foreground/90 leading-relaxed">{t.ferry.body1}</p>
        <p className="mt-4 text-ocean-deep-foreground/90 leading-relaxed">{t.ferry.body2}</p>
        <p className="mt-6 text-sm text-ocean-deep-foreground/70">{t.ferry.note}</p>
      </div>
    </section>
  );
}
