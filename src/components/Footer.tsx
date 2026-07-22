"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ocean-deep text-ocean-deep-foreground py-10 text-center text-sm">
      <p>{t.footer.copyright}</p>
    </footer>
  );
}
