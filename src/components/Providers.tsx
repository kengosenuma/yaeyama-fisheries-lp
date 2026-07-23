"use client";

import { LanguageProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";
import CartSheet from "@/components/CartSheet";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>
        {children}
        <CartSheet />
      </CartProvider>
    </LanguageProvider>
  );
}
