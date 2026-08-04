import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/portfolio";

// Fonts are self-hosted (see ./fonts) so the build never fetches from Google
// Fonts — deploy environments that can't reach fonts.gstatic.com still build.
const serif = localFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    { path: "./fonts/fraunces-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/fraunces-italic.woff2", weight: "100 900", style: "italic" },
  ],
});

const grotesk = localFont({
  variable: "--font-grotesk",
  display: "swap",
  src: [
    { path: "./fonts/space-grotesk-normal.woff2", weight: "300 700", style: "normal" },
  ],
});

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  metadataBase: new URL("https://haiderali.dev"),
  themeColor: "#f3efe6",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${grotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var e=document.documentElement;e.classList.toggle('dark',t==='dark');e.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
