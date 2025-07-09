import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "牛马计算器 - 工作性价比评估工具",
    template: "%s | 牛马计算器"
  },
  alternates: {
    languages: {
      "en-US": "/en",
      "zh-CN": "/",
    },
  },
  description: "牛马计算器 - 专业的工作性价比评估工具，综合分析薪资、工时、通勤、工作环境等因素，帮你科学评估工作价值，告别盲目打工！",
  keywords: ["牛马计算器", "工作性价比", "薪资计算器", "工作评估", "职场工具", "工作价值评估", "薪资分析"],
  authors: [{ name: "id8" }],
  creator: "id8",
  publisher: "id8",
  verification: {
    google: "_OQGiIpYz87USAsgJV2C07-JJhQ8myV_4GoM1kDjFic",
  },
  openGraph: {
    title: "牛马计算器 - 工作性价比评估工具",
    description: "专业的工作性价比评估工具，综合分析薪资、工时、通勤、工作环境等因素，科学评估工作价值",
    url: "https://worthjob.id8.com",
    siteName: "牛马计算器",
    images: [
      {
        url: "/website.png",
        width: 1200,
        height: 630,
        alt: "牛马计算器 - 工作性价比评估工具",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "牛马计算器 - 工作性价比评估工具",
    description: "专业的工作性价比评估工具，综合分析薪资、工时、通勤、工作环境等因素，科学评估工作价值",
    images: ["/website.png"],
    creator: "@id8fun",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_OQGiIpYz87USAsgJV2C07-JJhQ8myV_4GoM1kDjFic" />
        <meta name="baidu-site-verification" content="codeva-pEoMg5F0Cv" />
        <link rel="canonical" href="https://worthjob.id8.com" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "牛马计算器",
              "description": "专业的工作性价比评估工具，综合分析薪资、工时、通勤、工作环境等因素，科学评估工作价值",
              "url": "https://worthjob.id8.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "CNY"
              },
              "author": {
                "@type": "Organization",
                "name": "id8",
                "url": "https://id8.fun"
              },
              "publisher": {
                "@type": "Organization",
                "name": "id8",
                "url": "https://id8.fun"
              },
              "inLanguage": ["zh-CN", "en-US"],
              "featureList": [
                "工作性价比计算",
                "薪资分析",
                "工时评估",
                "通勤成本计算",
                "工作环境评价",
                "个人因素定制",
                "详细报告生成",
                "多语言支持"
              ]
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CVCEF2C727"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CVCEF2C727');
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8196371508613271" crossOrigin="anonymous"></script>
        <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <footer className="w-full py-6 mt-8 bg-gradient-to-t from-gray-50/80 to-transparent dark:from-gray-900/80 dark:to-transparent border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            {/* <div className="flex justify-center items-center gap-6 mb-2">
              <a 
                href="https://offerselect.zippland.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-sm transform transition-all duration-200 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs mt-1.5 text-gray-700 dark:text-gray-300 font-medium">OfferSelect</span>
              </a>
              
              <a 
                href="https://citycompare.zippland.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 shadow-sm transform transition-all duration-200 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <span className="text-xs mt-1.5 text-gray-700 dark:text-gray-300 font-medium">城市对比</span>
              </a>
              
              <a 
                href="https://snapsolver.zippland.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-sm transform transition-all duration-200 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs mt-1.5 text-gray-700 dark:text-gray-300 font-medium">AI笔试</span>
              </a>
              
              <a 
                href="https://perlerbeads.zippland.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-blue-400 shadow-sm transform transition-all duration-200 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <span className="text-xs mt-1.5 text-gray-700 dark:text-gray-300 font-medium">拼豆图纸</span>
              </a>
            </div> */}
            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-light">by <a href="https://id8.fun/application/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 ease-out font-medium">id8</a></span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
