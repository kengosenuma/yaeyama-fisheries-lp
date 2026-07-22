"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/images/about.png"
              alt=""
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Text and Stats */}
          <div>
            <h2 className="font-heading text-3xl font-bold">{t.about.heading}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.about.body}</p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div>
                <div className="font-heading text-3xl font-bold text-secondary">
                  {t.about.statFounded}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.about.statFoundedLabel}
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-secondary">
                  {t.about.statMembers}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.about.statMembersLabel}
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-secondary">
                  {t.about.statSpecies}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.about.statSpeciesLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
