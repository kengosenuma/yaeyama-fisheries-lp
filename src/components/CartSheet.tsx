"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { useLanguage } from "@/lib/i18n";

import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";

const translations = {
  cartTitle: {
    ja: "ショッピングカート",
    en: "Shopping Cart",
    "zh-TW": "購物車",
  },
  emptyCartMessage: {
    ja: "カートは空です",
    en: "Your cart is empty",
    "zh-TW": "購物車是空的",
  },
  subtotalLabel: {
    ja: "小計",
    en: "Subtotal",
    "zh-TW": "小計",
  },
  proceedToCheckout: {
    ja: "レジに進む",
    en: "Proceed to Checkout",
    "zh-TW": "前往結帳",
  },
};

export default function CartSheet() {
  const { items, removeItem, updateQuantity, subtotal, isOpen, setIsOpen } = useCart();
  const { lang } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading">{translations.cartTitle[lang]}</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center text-muted-foreground p-4">
            <ShoppingCart className="h-20 w-20 mb-4" />
            <p>{translations.emptyCartMessage[lang]}</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto flex flex-col gap-4 py-4 px-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name[lang]}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.product.name[lang]}</p>
                    <p className="text-xs text-muted-foreground tabular-nums">
                      ¥{item.product.price.toLocaleString()} / {item.product.unit[lang]}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="h-8 w-8 focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrement quantity</span>
                    </Button>
                    <span className="min-w-[2ch] text-center tabular-nums text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="h-8 w-8 focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increment quantity</span>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.product.id)}
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-secondary"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 px-4 pb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">{translations.subtotalLabel[lang]}</span>
                <span className="font-bold text-lg tabular-nums">¥{subtotal.toLocaleString()}</span>
              </div>
              <Link
                href="/checkout"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full focus-visible:outline-2 focus-visible:outline-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {translations.proceedToCheckout[lang]}
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
