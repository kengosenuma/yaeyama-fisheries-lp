export type Lang = "ja" | "en" | "zh-TW";

export type Product = {
  id: string;
  image: string;
  price: number; // 円
  unit: { ja: string; en: string; "zh-TW": string };
  name: { ja: string; en: string; "zh-TW": string };
  description: { ja: string; en: string; "zh-TW": string };
};

export const PRODUCTS: Product[] = [
  {
    id: "tuna",
    image: "/images/product-tuna.png",
    price: 3500,
    unit: { ja: "kg", en: "kg", "zh-TW": "kg" },
    name: { ja: "八重山産 生マグロ", en: "Yaeyama Fresh Tuna", "zh-TW": "八重山產 新鮮鮪魚" },
    description: {
      ja: "八重山の近海で一本釣りされた、鮮度抜群の生マグロです。とろけるような食感と濃厚な旨味が特徴です。",
      en: "Fresh tuna caught by single-line fishing in the waters near Yaeyama. Characterized by its melt-in-your-mouth texture and rich umami flavor.",
      "zh-TW": "在八重山近海釣獲，新鮮度極佳的生鮪魚。特點是入口即化的口感和濃郁的鮮味。",
    },
  },
  {
    id: "akamachi",
    image: "/images/product-akamachi.png",
    price: 6800,
    unit: { ja: "kg", en: "kg", "zh-TW": "kg" },
    name: {
      ja: "幻の高級魚 スジアラ（アカマチ）",
      en: "Phantom High-Grade Fish: Red Grouper (Akamachi)",
      "zh-TW": "夢幻高級魚：東星斑",
    },
    description: {
      ja: "沖縄三大高級魚の一つ。上品な脂と引き締まった身が絶妙なバランスで、刺身や鍋に最適です。",
      en: "One of Okinawa's three most prized fish. Its exquisite balance of delicate fat and firm flesh makes it perfect for sashimi or hotpot.",
      "zh-TW": "沖繩三大高級魚之一。優雅的油脂與緊實的魚肉完美平衡，最適合生魚片或火鍋。",
    },
  },
  {
    id: "ebi",
    image: "/images/product-ebi.png",
    price: 4200,
    unit: { ja: "200g", en: "200g", "zh-TW": "200g" },
    name: { ja: "石垣島産 活き車海老", en: "Ishigaki Island Live Kuruma Prawns", "zh-TW": "石垣島產 活車蝦" },
    description: {
      ja: "プリプリの食感と強い甘みが特徴の活き車海老。刺身で、塩焼きで、贅沢な味わいをお楽しみください。",
      en: "Live Kuruma prawns characterized by their plump texture and intense sweetness. Enjoy their luxurious taste as sashimi or grilled with salt.",
      "zh-TW": "活車蝦特有的彈牙口感和濃郁甜味。無論是生食或鹽烤，都能品嚐到其奢華的美味。",
    },
  },
  {
    id: "mozuku",
    image: "/images/product-mozuku.png",
    price: 800,
    unit: { ja: "500g", en: "500g", "zh-TW": "500g" },
    name: { ja: "八重山産 太もずく", en: "Yaeyama Thick Mozuku Seaweed", "zh-TW": "八重山產 粗水雲" },
    description: {
      ja: "八重山の清らかな海で育った、シャキシャキとした食感と豊富なヌメリが特徴の太もずく。健康にも良いとされています。",
      en: "Thick mozuku seaweed grown in the clear waters of Yaeyama, known for its crisp texture and abundant sliminess. Also believed to be beneficial for health.",
      "zh-TW": "在八重山清澈海域生長，以爽脆口感和豐富黏液為特點的粗水雲。據說對健康有益。",
    },
  },
  {
    id: "tako",
    image: "/images/product-tako.png",
    price: 2800,
    unit: { ja: "kg", en: "kg", "zh-TW": "kg" },
    name: { ja: "八重山産 島タコ", en: "Yaeyama Island Octopus", "zh-TW": "八重山產 島嶼章魚" },
    description: {
      ja: "豊かな磯で育った、弾力のある食感と噛むほどに広がる旨味が特徴の島タコです。",
      en: "Island octopus raised in rich rocky shores, characterized by its elastic texture and savory flavor that spreads with every bite.",
      "zh-TW": "在豐富潮間帶生長的島嶼章魚，特點是彈性十足的口感和越嚼越香的鮮味。",
    },
  },
  {
    id: "gurukun",
    image: "/images/product-gurukun.png",
    price: 1500,
    unit: { ja: "kg", en: "kg", "zh-TW": "kg" },
    name: { ja: "沖縄県魚 グルクン", en: "Okinawa Prefectural Fish: Gurukun", "zh-TW": "沖繩縣魚：紅肉魚" },
    description: {
      ja: "沖縄の食卓には欠かせない、唐揚げやマース煮で美味しいグルクン。癖のない白身魚です。",
      en: "Gurukun, an essential fish in Okinawan cuisine, delicious fried or boiled in salt. A mild white fish.",
      "zh-TW": "沖繩餐桌不可或缺的紅肉魚，無論是炸物或鹽煮皆美味。是一種沒有腥味的白肉魚。",
    },
  },
];
