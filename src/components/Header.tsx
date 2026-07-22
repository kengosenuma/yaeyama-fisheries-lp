"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Waves, Menu } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#fishery", label: t.nav.fishery },
    { href: "#contact", label: t.nav.contact },
  ];

  const languageOptions: { key: "ja" | "en" | "zh-TW"; label: string }[] = [
    { key: "ja", label: "日本語" },
    { key: "en", label: "English" },
    { key: "zh-TW", label: "繁體中文" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ocean-deep text-ocean-deep-foreground shadow-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-secondary"
        >
          <Waves className="h-6 w-6" />
          <span className="font-heading font-bold text-lg">八重山漁業協同組合</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-8">
            {languageOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setLang(option.key)}
                className={cn(
                  "h-8 rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-secondary",
                  lang === option.key
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-transparent border border-ocean-deep-foreground/30 text-ocean-deep-foreground hover:bg-ocean-deep-foreground/10"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-ocean-deep-foreground hover:bg-ocean-deep-foreground/10 focus-visible:outline-2 focus-visible:outline-secondary"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            }
          />
          <SheetContent
            side="right"
            className="bg-ocean-deep text-ocean-deep-foreground border-l border-ocean-deep-foreground/20"
          >
            <div className="flex flex-col items-start gap-6 pt-10 px-6">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="w-full text-left py-2 hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                      {link.label}
                    </a>
                  }
                />
              ))}

              <Separator className="bg-ocean-deep-foreground/30 my-2" />

              <div className="flex flex-col gap-2 w-full">
                {languageOptions.map((option) => (
                  <SheetClose
                    key={option.key}
                    render={
                      <button
                        type="button"
                        onClick={() => setLang(option.key)}
                        className={cn(
                          "w-full text-left h-10 rounded-lg px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-secondary",
                          lang === option.key
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-transparent border border-ocean-deep-foreground/30 text-ocean-deep-foreground hover:bg-ocean-deep-foreground/10"
                        )}
                      >
                        {option.label}
                      </button>
                    }
                  />
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
