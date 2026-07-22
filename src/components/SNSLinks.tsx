"use client";

import { Camera, Share2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function SNSLinks() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-background text-center">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-2xl font-bold">{t.sns.heading}</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t.sns.body}</p>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="#"
            aria-label={t.sns.instagram}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-ocean-deep text-ocean-deep-foreground shadow-md transition hover:bg-secondary hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <Camera className="h-6 w-6" />
          </a>
          <a
            href="#"
            aria-label={t.sns.facebook}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-ocean-deep text-ocean-deep-foreground shadow-md transition hover:bg-secondary hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <Share2 className="h-6 w-6" />
          </a>
          <a
            href="#"
            aria-label={t.sns.line}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-ocean-deep text-ocean-deep-foreground shadow-md transition hover:bg-secondary hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
