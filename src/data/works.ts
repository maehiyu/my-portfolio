// data/works.ts
export type Work = {
    id: string;
    title: string;
    type: string;
    image: string; // public フォルダ内 or URL
    icon: string;
    url: string;
    description?: string;
    techUsed: {
        category: string;
        technologies: string[];
    }[];
  };
  
  export const works: Work[] = [
    {
        id: "1",
        title: "リピレシピ - 動画アプリから簡単レシピ保存・材料抽出",
        type: "iOS App",
        image: "/repirecipeCover.jpg",
        icon: "/repirecipe.jpg",
        url: "https://apps.apple.com/us/app/%E3%83%AA%E3%83%94%E3%83%AC%E3%82%B7%E3%83%94-%E5%8B%95%E7%94%BB%E3%82%A2%E3%83%97%E3%83%AA%E3%81%8B%E3%82%89%E7%B0%A1%E5%8D%98%E3%83%AC%E3%82%B7%E3%83%94%E4%BF%9D%E5%AD%98-%E6%9D%90%E6%96%99%E6%8A%BD%E5%87%BA/id6744935322",
        description: "youtubeやwebサイトから共有するだけでレシピの材料分量を抽出。冷蔵庫にある食材やスーパーで安い食材からレシピを検索。使い回しレシピで日々の料理に安息を。",
        techUsed: [
            {
                category: "フロントエンド",
                technologies: ["Swift"]
            },
            {
                category: "バックエンド",
                technologies: ["AWS Lambda(python)", "Aamazon RDS(PostgreSQL)"]
            },
        ]
    },
    {
        id: "2",
        title: "とねり poker shop",
        type: "EC Site",
        image: "/toneri_cover.png",
        icon: "/toneri.png",
        url: "https://www.toneripokershop.jp",
        description: "ポーカーグッズを安心安全な価格で提供するECサイト。",
        techUsed: [
            {
              category: "フロントエンド",
              technologies: ["Next.js", "Medusa JS (商品API)", "Stripe (決済API)"]
            },
            {
              category: "バックエンド",
              technologies: ["Medusa JS"]
            },
            {
              category: "その他",
              technologies: ["Vercel (フロントエンド)", "Railway (バックエンド)"]
            }
          ]
    },
    {
        id: "3",
        title: "SpectralKit", 
        type: "研究",
        image: "/images/spectralkit.png",
        icon: "/icon.jpg",
        url: "https://github.com/yourname/spectralkit",
        description: "PBRT(オープンソースのCGレンダラー)における波長サンプリング手法のパッケージ。物理ベースレンダリングにおけるスペクトルレンダリングの波長サンプリングを効率的に行う提案手法の実装。",
        techUsed: [
            {
                category: "言語等",
                technologies: ["C++", "PBRT (Physically Based Rendering: From Theory to Implementation)"]
            }
        ]
    }      
];
  
export const stacks: string[] = [
    "Swift",
    "Next.js",
    "(C++)",
    "(PostgreSQL)",
    "AWS",
];