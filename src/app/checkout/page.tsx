"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PackageX, CheckCircle } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { useCart } from "@/lib/cart";

const translations = {
  cartEmpty: { ja: "カートに商品がありません", en: "Your cart is empty", "zh-TW": "購物車中沒有商品" },
  goToShop: { ja: "ショップへ戻る", en: "Go to Shop", "zh-TW": "前往商店" },
  orderSummary: { ja: "ご注文内容", en: "Order Summary", "zh-TW": "訂購內容" },
  deliveryInfo: { ja: "お届け先情報", en: "Delivery Information", "zh-TW": "送貨資訊" },
  name: { ja: "お名前", en: "Name", "zh-TW": "姓名" },
  email: { ja: "メールアドレス", en: "Email Address", "zh-TW": "電子郵件地址" },
  address: { ja: "ご住所", en: "Address", "zh-TW": "地址" },
  subtotal: { ja: "小計", en: "Subtotal", "zh-TW": "小計" },
  shipping: { ja: "送料", en: "Shipping", "zh-TW": "運費" },
  shippingPrototype: { ja: "無料（プロトタイプ）", en: "Free (prototype)", "zh-TW": "免費（原型展示）" },
  total: { ja: "合計", en: "Total", "zh-TW": "總計" },
  placeOrder: { ja: "注文を確定する", en: "Place Order", "zh-TW": "確認訂單" },
  orderConfirmedTitle: { ja: "ご注文ありがとうございました", en: "Thank You for Your Order", "zh-TW": "感謝您的訂購" },
  orderConfirmedMessage: {
    ja: "これはデモです。実際の注文・決済は行われていません。",
    en: "This is a demo. No actual order or payment has been processed.",
    "zh-TW": "這是示範。實際上並未進行任何訂購或付款。",
  },
  disclaimer: {
    ja: "※本サイトはプロトタイプです。実際の注文・決済機能はありません。",
    en: "※This site is a prototype. There is no real ordering or payment functionality.",
    "zh-TW": "※本網站為原型展示，並無實際的訂購與付款功能。",
  },
};

export default function CheckoutPage() {
  const { lang } = useLanguage();
  const { items, subtotal, clearCart } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              {translations.orderConfirmedTitle[lang]}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{translations.orderConfirmedMessage[lang]}</p>
            <Link href="/shop" className={buttonVariants({ variant: "default", size: "lg" })}>
              {translations.goToShop[lang]}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <PackageX className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
              {translations.cartEmpty[lang]}
            </h1>
            <Link href="/shop" className={buttonVariants({ variant: "default", size: "lg" })}>
              {translations.goToShop[lang]}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">
              {translations.orderSummary[lang]}
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 border-b border-border pb-4 last:border-b-0"
                    >
                      <div className="relative h-16 w-16 shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={item.product.image}
                          alt={item.product.name[lang]}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.product.name[lang]}</p>
                        <p className="text-muted-foreground text-sm">
                          ¥{item.product.price.toLocaleString()} / {item.product.unit[lang]} &times;{" "}
                          {item.quantity}
                        </p>
                      </div>
                      <p className="text-foreground font-semibold tabular-nums">
                        ¥{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {translations.deliveryInfo[lang]}
                  </h2>
                  <form onSubmit={handlePlaceOrder}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                        {translations.name[lang]}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                        {translations.email[lang]}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium mb-1.5">
                        {translations.address[lang]}
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
                      />
                    </div>
                    <button
                      type="submit"
                      className={buttonVariants({ variant: "default", size: "lg" }) + " w-full"}
                    >
                      {translations.placeOrder[lang]}
                    </button>
                  </form>
                </div>
              </div>

              <div className="md:col-span-1">
                <Card className="shadow-lg sticky top-24">
                  <CardHeader>
                    <CardTitle className="font-heading">{translations.orderSummary[lang]}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{translations.subtotal[lang]}</span>
                      <span className="tabular-nums">¥{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{translations.shipping[lang]}</span>
                      <span className="text-secondary">{translations.shippingPrototype[lang]}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t border-border pt-3">
                      <span>{translations.total[lang]}</span>
                      <span className="tabular-nums">¥{subtotal.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-10">{translations.disclaimer[lang]}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
