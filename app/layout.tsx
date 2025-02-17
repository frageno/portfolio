import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Szymon Piątkowski - Frontend Developer Portfolio",
  description: "Frontend Developer specjalizujący się w Wordpressie, React, Next.js i nowoczesnych technologiach webowych. Tworzę responsywne, wydajne i funkcjonalne strony internetowe z naciskiem na UX/UI.",
};

const GA_ID = 'G-ZNMXKPQD4J';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
         {/* Google Analytics */}
         <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}  
          </ThemeProvider>
      </body>
    </html>
  );
}
