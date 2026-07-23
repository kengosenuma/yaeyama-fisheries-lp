"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Check } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { PRODUCTS, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

const translations = {
  title: { ja: "オンラインショップ", en: "Online Shop", "zh-TW": "線上商店" },
  subtitle: {
    ja: "八重山の新鮮な水産物を産地から直接お届けします。",
    en: "Fresh Yaeyama seafood, delivered directly from the source.",
    "zh-TW": "八重山的新鮮水產品，從產地直接為您送達。",
  },
  addToCart: { ja: "カートに入れる", en: "Add to Cart", "zh-TW": "加入購物車" },
  added: { ja: "追加しました", en: "Added", "zh-TW": "已加入" },
};

export default function ShopPage() {
  const { lang } = useLanguage();
  const { addItem } = useCart();
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const handleAddItem = (product: Product) => {
    addItem(product);
    setAddedProductId(product.id);
  };

  useEffect(() => {
    if (!addedProductId) return;
    const timer = setTimeout(() => setAddedProductId(null), 1500);
    return () => clearTimeout(timer);
  }, [addedProductId]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
                {translations.title[lang]}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {translations.subtitle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-lg">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.name[lang]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-heading font-semibold mb-2 line-clamp-1">
                      {product.name[lang]}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
                      {product.description[lang]}
                    </p>
                    <p className="text-primary font-bold text-xl tabular-nums mb-4">
                      ¥{product.price.toLocaleString()} / {product.unit[lang]}
                    </p>
                    <Button
                      onClick={() => handleAddItem(product)}
                      className="w-full focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                      {addedProductId === product.id ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          {translations.added[lang]}
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {translations.addToCart[lang]}
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
