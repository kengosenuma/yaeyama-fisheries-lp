"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/60 to-ocean-deep/20" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-ocean-deep-foreground text-balance max-w-3xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ocean-deep-foreground/90 max-w-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "focus-visible:outline-2 focus-visible:outline-secondary"
              )}
            >
              {t.hero.ctaContact}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#products"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-ocean-deep-foreground/40 text-ocean-deep-foreground hover:bg-ocean-deep-foreground/10",
                "focus-visible:outline-2 focus-visible:outline-secondary"
              )}
            >
              {t.hero.ctaProducts}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
