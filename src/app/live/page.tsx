"use client";

import Image from "next/image";
import { Users, ShoppingCart } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const translations = {
  ja: {
    heroBadge: "配信予定",
    heroViewers: "1,200人が視聴予定",
    heroSchedule: "毎週土曜 19:00〜",
    heading: "八重山ライブコマース",
    description1: "八重山の豊かな海で育った新鮮な水産物を、漁師や地元職員がリアルタイムでご紹介します。",
    description2: "ライブ中に質問したり、その場で商品を購入したりと、新しいお買い物の体験をお楽しみください。",
    productsSectionTitle: "今回の配信で紹介予定の商品",
    reserveButton: "事前予約する",
    commentsSectionTitle: "視聴者コメント（見本）",
    commentsNotice: "※配信中はこのようなリアルタイムコメントが表示されます。",
    comment1User: "沖縄太郎",
    comment1Text: "今日のマグロも美味しそう！",
    comment2User: "石垣花子",
    comment2Text: "この前買った魚、家族に大好評でした。",
    comment3User: "東京一郎",
    comment3Text: "次回はぜひ参加したいです。",
    notifyTitle: "配信開始をお知らせします",
    notifyEmailLabel: "メールアドレス",
    notifyButton: "登録する",
  },
  en: {
    heroBadge: "Scheduled",
    heroViewers: "1,200 viewers expected",
    heroSchedule: "Every Saturday 7:00 PM (JST)",
    heading: "Yaeyama Live Commerce",
    description1:
      "Fishermen and local staff from Yaeyama introduce fresh seafood nurtured in Yaeyama's rich waters in real time.",
    description2:
      "Ask questions during the live stream and purchase products on the spot — a new way to shop.",
    productsSectionTitle: "Products scheduled for this stream",
    reserveButton: "Reserve Now",
    commentsSectionTitle: "Viewer Comments (Sample)",
    commentsNotice: "※Real-time comments like these will appear during the stream.",
    comment1User: "Taro Okinawa",
    comment1Text: "Today's tuna looks delicious!",
    comment2User: "Hanako Ishigaki",
    comment2Text: "The fish I bought last time was a hit with my family.",
    comment3User: "Ichiro Tokyo",
    comment3Text: "I'd love to join next time.",
    notifyTitle: "Notify me when the stream starts",
    notifyEmailLabel: "Email Address",
    notifyButton: "Register",
  },
  "zh-TW": {
    heroBadge: "預計直播",
    heroViewers: "預計1,200人收看",
    heroSchedule: "每週六 19:00〜",
    heading: "八重山直播電商",
    description1: "由八重山的漁民和當地工作人員，即時介紹在八重山豐饒海域中養育的新鮮水產品。",
    description2: "在直播中您可以提問、即時購買商品，享受全新的購物體驗。",
    productsSectionTitle: "本次直播預計介紹的商品",
    reserveButton: "預先預訂",
    commentsSectionTitle: "觀眾留言（範例）",
    commentsNotice: "※直播期間將顯示此類即時留言。",
    comment1User: "沖繩太郎",
    comment1Text: "今天的鮪魚看起來很好吃！",
    comment2User: "石垣花子",
    comment2Text: "上次買的魚，家人都說很好吃。",
    comment3User: "東京一郎",
    comment3Text: "下次我一定要參加。",
    notifyTitle: "直播開始時通知我",
    notifyEmailLabel: "電子郵件地址",
    notifyButton: "註冊",
  },
};

export default function LiveCommercePage() {
  const { lang } = useLanguage();
  const { addItem } = useCart();
  const t = translations[lang];
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <section className="mb-12">
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-center text-balance">
              {t.heading}
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">{t.description1}</p>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-2">
              {t.description2}
            </p>
          </section>

          <section className="mb-16">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/live-commerce.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent" />

              <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground text-sm px-4 py-1.5">
                {t.heroBadge}
              </Badge>

              <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-ocean-deep/60 px-4 py-2 text-ocean-deep-foreground backdrop-blur-sm">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">{t.heroViewers}</span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-center">
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-ocean-deep-foreground text-balance">
                  {t.heroSchedule}
                </h2>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
              {t.productsSectionTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-lg flex flex-col">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.name[lang]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-heading font-semibold mb-1 line-clamp-1">{product.name[lang]}</h3>
                      <p className="text-muted-foreground text-sm tabular-nums mb-4">
                        ¥{product.price.toLocaleString()} / {product.unit[lang]}
                      </p>
                    </div>
                    <Button
                      onClick={() => addItem(product)}
                      variant="secondary"
                      className="w-full focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {t.reserveButton}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center">
              {t.commentsSectionTitle}
            </h2>
            <p className="text-xs text-muted-foreground text-center mb-6">{t.commentsNotice}</p>
            <div className="max-w-xl mx-auto flex flex-col gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{t.comment1User}</p>
                <p className="text-foreground text-sm">{t.comment1Text}</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{t.comment2User}</p>
                <p className="text-foreground text-sm">{t.comment2Text}</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{t.comment3User}</p>
                <p className="text-foreground text-sm">{t.comment3Text}</p>
              </div>
            </div>
          </section>

          <section>
            <Card className="max-w-xl mx-auto shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="font-heading text-xl font-bold mb-6">{t.notifyTitle}</h2>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col sm:flex-row gap-3 items-end"
                >
                  <div className="flex-1 w-full text-left">
                    <label htmlFor="notify-email" className="block text-sm font-medium mb-1.5">
                      {t.notifyEmailLabel}
                    </label>
                    <input
                      id="notify-email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-secondary">
                    {t.notifyButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
