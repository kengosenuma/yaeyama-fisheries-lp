"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "ja" | "en" | "zh-TW";

type ProductItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export type Dict = {
  nav: { about: string; products: string; fishery: string; contact: string };
  hero: { title: string; subtitle: string; ctaContact: string; ctaProducts: string };
  about: {
    heading: string;
    body: string;
    statFounded: string;
    statFoundedLabel: string;
    statMembers: string;
    statMembersLabel: string;
    statSpecies: string;
    statSpeciesLabel: string;
  };
  products: { heading: string; items: ProductItem[] };
  fishery: { heading: string; body: string };
  productionArea: { heading: string; body: string };
  ferry: { heading: string; body1: string; body2: string; note: string };
  sns: { heading: string; body: string; instagram: string; facebook: string; line: string };
  contact: {
    heading: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    hoursLabel: string;
    hours: string;
    formHeading: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitLabel: string;
  };
  footer: { copyright: string };
};

const dict: Record<Lang, Dict> = {
  ja: {
    nav: { about: "組合紹介", products: "商品紹介", fishery: "漁業紹介", contact: "お問い合わせ" },
    hero: {
      title: "八重山の豊かな海と共に、未来へ。",
      subtitle: "石垣島・八重山諸島が育む新鮮な海の幸を、皆様の食卓へ。",
      ctaContact: "お問い合わせ",
      ctaProducts: "商品を見る",
    },
    about: {
      heading: "組合紹介",
      body: "八重山漁業協同組合は、1950年に設立されて以来、八重山諸島の豊かな漁場を守り、新鮮で高品質な水産物を安定して供給することを使命としてきました。伝統的な漁法から最新の技術までを取り入れ、持続可能な漁業を推進しています。私たちの目標は、地域経済の活性化に貢献し、次世代へこの美しい海と文化を継承することです。",
      statFounded: "1950",
      statFoundedLabel: "設立年",
      statMembers: "約350名",
      statMembersLabel: "組合員数",
      statSpecies: "120種以上",
      statSpeciesLabel: "年間取扱魚種数",
    },
    products: {
      heading: "商品紹介",
      items: [
        {
          name: "八重山産 生マグロ",
          description: "八重山の近海で一本釣りされた、鮮度抜群の生マグロです。とろけるような食感と濃厚な旨味が特徴です。",
          price: "¥3,500 / kg",
          image: "/images/product-tuna.png",
        },
        {
          name: "幻の高級魚 スジアラ（アカマチ）",
          description: "沖縄三大高級魚の一つ。上品な脂と引き締まった身が絶妙なバランスで、刺身や鍋に最適です。",
          price: "¥6,800 / kg",
          image: "/images/product-akamachi.png",
        },
        {
          name: "石垣島産 活き車海老",
          description: "プリプリの食感と強い甘みが特徴の活き車海老。刺身で、塩焼きで、贅沢な味わいをお楽しみください。",
          price: "¥4,200 / 200g",
          image: "/images/product-ebi.png",
        },
        {
          name: "八重山産 太もずく",
          description: "八重山の清らかな海で育った、シャキシャキとした食感と豊富なヌメリが特徴の太もずく。健康にも良いとされています。",
          price: "¥800 / 500g",
          image: "/images/product-mozuku.png",
        },
        {
          name: "八重山産 島タコ",
          description: "豊かな磯で育った、弾力のある食感と噛むほどに広がる旨味が特徴の島タコです。",
          price: "¥2,800 / kg",
          image: "/images/product-tako.png",
        },
        {
          name: "沖縄県魚 グルクン",
          description: "沖縄の食卓には欠かせない、唐揚げやマース煮で美味しいグルクン。癖のない白身魚です。",
          price: "¥1,500 / kg",
          image: "/images/product-gurukun.png",
        },
      ],
    },
    fishery: {
      heading: "八重山の漁業紹介",
      body: "八重山諸島では、豊かな海の恵みを活かすため、様々な漁法が営まれています。特に盛んなのは、マグロやカツオを狙う「一本釣り漁」です。熟練の漁師が魚群を探し、生きたままの魚を釣り上げることで、魚にストレスを与えず鮮度を保つことができます。また、サンゴ礁に住む魚を追い込む「追い込み漁」や、イカなどを捕獲する「夜間集魚灯漁」など、地域に根ざした持続可能な漁業が実践されています。",
    },
    productionArea: {
      heading: "産地紹介：石垣島・八重山諸島の魅力",
      body: "石垣島を含む八重山諸島は、日本最南西端に位置し、美しいサンゴ礁に囲まれた豊かな自然が魅力です。年間を通して温暖な気候に恵まれ、透明度の高い海には多種多様な海洋生物が生息しています。この恵まれた環境が、八重山漁業協同組合が誇る新鮮で美味しい水産物を育んでいます。",
    },
    ferry: {
      heading: "台湾基隆からの観光客の皆様へ",
      body1:
        "台湾基隆から石垣島へのフェリーをご利用の皆様、ようこそ八重山へ！当組合では、石垣島ならではの新鮮な海の幸を多数取り揃えております。お土産には、真空パックされた加工品や、空港で受け取り可能な冷凍便などをご用意。",
      body2: "また、石垣島内の提携レストランでは、八重山で獲れたばかりの魚介類を最高の形でご提供しています。ぜひ、八重山の美食をご堪能ください。",
      note: "※詳細は、石垣港ターミナル内の観光案内所または当組合ウェブサイトでご確認ください。",
    },
    sns: {
      heading: "八重山の海の情報をSNSで！",
      body: "最新の水揚げ情報やイベント、八重山の美しい海の様子を日々発信しています。ぜひフォローしてください！",
      instagram: "Instagram",
      facebook: "Facebook",
      line: "LINE",
    },
    contact: {
      heading: "お問い合わせ",
      addressLabel: "所在地",
      address: "〒907-0012 沖縄県石垣市美崎町1番地（ダミー住所）",
      phoneLabel: "電話番号",
      phone: "+81-980-82-xxxx（ダミー）",
      hoursLabel: "営業時間",
      hours: "月～金 9:00 - 17:00",
      formHeading: "メールフォーム",
      nameLabel: "お名前",
      emailLabel: "メールアドレス",
      subjectLabel: "件名",
      messageLabel: "お問い合わせ内容",
      submitLabel: "送信",
    },
    footer: {
      copyright: "© 2026 八重山漁業協同組合. 全ての権利を留保します。",
    },
  },
  en: {
    nav: { about: "About Us", products: "Products", fishery: "Fishery Methods", contact: "Contact" },
    hero: {
      title: "With the Abundant Seas of Yaeyama, Towards the Future.",
      subtitle: "Delivering fresh seafood nurtured by Ishigaki Island and the Yaeyama Islands to your table.",
      ctaContact: "Contact Us",
      ctaProducts: "View Products",
    },
    about: {
      heading: "About Yaeyama Fisheries Cooperative",
      body: "Established in 1950, the Yaeyama Fisheries Cooperative has been dedicated to preserving the rich fishing grounds of the Yaeyama Islands and consistently supplying fresh, high-quality seafood. We employ both traditional and modern fishing techniques to promote sustainable fisheries. Our goal is to contribute to the revitalization of the local economy and pass on this beautiful sea and culture to future generations.",
      statFounded: "1950",
      statFoundedLabel: "Founded",
      statMembers: "~350",
      statMembersLabel: "Members",
      statSpecies: "120+",
      statSpeciesLabel: "Species Handled Annually",
    },
    products: {
      heading: "Our Products",
      items: [
        {
          name: "Yaeyama Fresh Tuna",
          description:
            "Fresh tuna caught by single-line fishing in the waters near Yaeyama. Characterized by its melt-in-your-mouth texture and rich umami flavor.",
          price: "¥3,500 / kg",
          image: "/images/product-tuna.png",
        },
        {
          name: "Phantom High-Grade Fish: Red Grouper (Akamachi)",
          description:
            "One of Okinawa's three most prized fish. Its exquisite balance of delicate fat and firm flesh makes it perfect for sashimi or hotpot.",
          price: "¥6,800 / kg",
          image: "/images/product-akamachi.png",
        },
        {
          name: "Ishigaki Island Live Kuruma Prawns",
          description:
            "Live Kuruma prawns characterized by their plump texture and intense sweetness. Enjoy their luxurious taste as sashimi or grilled with salt.",
          price: "¥4,200 / 200g",
          image: "/images/product-ebi.png",
        },
        {
          name: "Yaeyama Thick Mozuku Seaweed",
          description:
            "Thick mozuku seaweed grown in the clear waters of Yaeyama, known for its crisp texture and abundant sliminess. Also believed to be beneficial for health.",
          price: "¥800 / 500g",
          image: "/images/product-mozuku.png",
        },
        {
          name: "Yaeyama Island Octopus",
          description:
            "Island octopus raised in rich rocky shores, characterized by its elastic texture and savory flavor that spreads with every bite.",
          price: "¥2,800 / kg",
          image: "/images/product-tako.png",
        },
        {
          name: "Okinawa Prefectural Fish: Gurukun",
          description:
            "Gurukun, an essential fish in Okinawan cuisine, delicious fried or boiled in salt. A mild white fish.",
          price: "¥1,500 / kg",
          image: "/images/product-gurukun.png",
        },
      ],
    },
    fishery: {
      heading: "Yaeyama Fishery Methods",
      body: "In the Yaeyama Islands, various fishing methods are practiced to harness the rich bounty of the sea. Particularly prominent is \"single-line fishing,\" targeting tuna and bonito. Skilled fishermen search for schools of fish and catch them alive, minimizing stress and preserving freshness. Sustainable, community-rooted practices such as \"drive-in net fishing\" for reef fish and \"night-time light fishing\" for squid are also carried out.",
    },
    productionArea: {
      heading: "Production Area: The Charm of Ishigaki Island and the Yaeyama Islands",
      body: "The Yaeyama Islands, including Ishigaki Island, are located at Japan's southwesternmost tip, boasting rich natural beauty surrounded by stunning coral reefs. Blessed with a warm climate year-round, the highly transparent waters are home to a diverse array of marine life nurturing the fresh, delicious seafood the Cooperative proudly offers.",
    },
    ferry: {
      heading: "To Tourists from Keelung, Taiwan",
      body1:
        "To all tourists arriving by ferry from Keelung, Taiwan, welcome to Yaeyama! Our cooperative offers a wide selection of fresh seafood unique to Ishigaki Island, including vacuum-packed souvenirs and frozen delivery services available for airport pick-up.",
      body2:
        "Our partner restaurants on Ishigaki Island also serve the freshest Yaeyama seafood prepared in the finest ways. We invite you to savor the exquisite cuisine of Yaeyama.",
      note: "※For more details, please check at the tourist information center within Ishigaki Port Terminal or on our cooperative's website.",
    },
    sns: {
      heading: "Follow Yaeyama Sea News on SNS!",
      body: "We share daily updates on fresh catches, events, and the beautiful Yaeyama sea. Please follow us!",
      instagram: "Instagram",
      facebook: "Facebook",
      line: "LINE",
    },
    contact: {
      heading: "Contact Us",
      addressLabel: "Location",
      address: "1 Misaki-cho, Ishigaki City, Okinawa 907-0012, Japan (Dummy Address)",
      phoneLabel: "Phone Number",
      phone: "+81-980-82-xxxx (Dummy)",
      hoursLabel: "Business Hours",
      hours: "Mon-Fri 9:00 - 17:00",
      formHeading: "Email Form",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitLabel: "Send",
    },
    footer: {
      copyright: "© 2026 Yaeyama Fisheries Cooperative. All rights reserved.",
    },
  },
  "zh-TW": {
    nav: { about: "關於漁會", products: "商品介紹", fishery: "漁業介紹", contact: "聯絡我們" },
    hero: {
      title: "與八重山豐饒的海洋共進，邁向未來。",
      subtitle: "將石垣島與八重山群島孕育的新鮮海產，送到您的餐桌。",
      ctaContact: "聯絡我們",
      ctaProducts: "查看商品",
    },
    about: {
      heading: "關於八重山漁業協同組合",
      body: "八重山漁業協同組合自1950年成立以來，肩負著保護八重山群島豐富漁場、穩定供應新鮮高品質水產品的使命。結合傳統捕魚法與最新技術，推動永續漁業。我們的目標是為活化地方經濟做出貢獻，並將這片美麗的海洋與文化傳承給下一代。",
      statFounded: "1950",
      statFoundedLabel: "成立年",
      statMembers: "約350名",
      statMembersLabel: "組合員人數",
      statSpecies: "120種以上",
      statSpeciesLabel: "年處理魚種數",
    },
    products: {
      heading: "商品介紹",
      items: [
        {
          name: "八重山產 新鮮鮪魚",
          description: "在八重山近海釣獲，新鮮度極佳的生鮪魚。特點是入口即化的口感和濃郁的鮮味。",
          price: "¥3,500 / kg",
          image: "/images/product-tuna.png",
        },
        {
          name: "夢幻高級魚：東星斑",
          description: "沖繩三大高級魚之一。優雅的油脂與緊實的魚肉完美平衡，最適合生魚片或火鍋。",
          price: "¥6,800 / kg",
          image: "/images/product-akamachi.png",
        },
        {
          name: "石垣島產 活車蝦",
          description: "活車蝦特有的彈牙口感和濃郁甜味。無論是生食或鹽烤，都能品嚐到其奢華的美味。",
          price: "¥4,200 / 200g",
          image: "/images/product-ebi.png",
        },
        {
          name: "八重山產 粗水雲",
          description: "在八重山清澈海域生長，以爽脆口感和豐富黏液為特點的粗水雲。據說對健康有益。",
          price: "¥800 / 500g",
          image: "/images/product-mozuku.png",
        },
        {
          name: "八重山產 島嶼章魚",
          description: "在豐富潮間帶生長的島嶼章魚，特點是彈性十足的口感和越嚼越香的鮮味。",
          price: "¥2,800 / kg",
          image: "/images/product-tako.png",
        },
        {
          name: "沖繩縣魚：紅肉魚",
          description: "沖繩餐桌不可或缺的紅肉魚，無論是炸物或鹽煮皆美味。是一種沒有腥味的白肉魚。",
          price: "¥1,500 / kg",
          image: "/images/product-gurukun.png",
        },
      ],
    },
    fishery: {
      heading: "八重山漁業介紹",
      body: "在八重山群島，為了利用豐富的海洋恩賜，實行了多種捕魚方法。特別盛行的是針對鮪魚和鰹魚的「一本釣漁法」。經驗豐富的漁民尋找魚群，活捕魚隻，這樣可以減少魚的壓力並保持新鮮度。此外，還有將珊瑚礁魚類驅趕入網的「趕網漁法」，以及捕捉魷魚等海產的「夜間集魚燈漁法」等永續漁業。",
    },
    productionArea: {
      heading: "產地介紹：石垣島・八重山群島的魅力",
      body: "包含石垣島在內的八重山群島，位於日本最西南端，以美麗的珊瑚礁環繞的豐富自然景觀為魅力。全年氣候溫暖，透明度極高的海洋中棲息著多種多樣的海洋生物，培育了八重山漁業協同組合引以為傲的新鮮美味水產品。",
    },
    ferry: {
      heading: "致來自台灣基隆的觀光客朋友們",
      body1:
        "致各位搭乘台灣基隆至石垣島渡輪的旅客，歡迎來到八重山！本漁會備有許多石垣島特有的新鮮海產。作為伴手禮，我們提供真空包裝的加工品，以及可在機場取貨的冷凍配送服務。",
      body2: "此外，石垣島內的合作餐廳提供以最佳方式烹製的八重山新鮮海產。請務必品嚐八重山的美味佳餚。",
      note: "※詳情請洽石垣港碼頭內的觀光服務中心或本漁會網站。",
    },
    sns: {
      heading: "在社群媒體上追蹤八重山海洋資訊！",
      body: "每日發布最新的漁獲資訊、活動以及八重山美麗海洋的樣貌。歡迎追蹤！",
      instagram: "Instagram",
      facebook: "Facebook",
      line: "LINE",
    },
    contact: {
      heading: "聯絡我們",
      addressLabel: "地址",
      address: "〒907-0012 沖繩縣石垣市美崎町1號（虛擬地址）",
      phoneLabel: "電話號碼",
      phone: "+81-980-82-xxxx（虛擬）",
      hoursLabel: "營業時間",
      hours: "週一至週五 9:00 - 17:00",
      formHeading: "電子郵件表單",
      nameLabel: "您的姓名",
      emailLabel: "電子郵件地址",
      subjectLabel: "主旨",
      messageLabel: "詢問內容",
      submitLabel: "送出",
    },
    footer: {
      copyright: "© 2026 八重山漁業協同組合. 版權所有。",
    },
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ja");
  const value = { lang, setLang, t: dict[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
