import type { Metadata } from "next";
import { Inter, Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
// import Navbar from "./component/home/navbar";
import Navigation from "./component/home/Navigation";
import Footer from "./component/home/Footer";
import { ReactLenis } from "./utils/lenis";
import Loading from "./component/common/Loading";
import { Suspense } from "react";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
};

export const metadata: Metadata = {
  title: "Lancea Porto",
  description: "Welcome to my Website!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon2.png",
        href: "/icon2.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon1.png",
        href: "/icon1.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Lenis for smoothscrolling layout */}
      <ReactLenis root>
        <body className={montserrat.className}>
          <div className={nunito_sans.className}>
            <Navigation />
          </div>
          {/* Loading appears when load website */}
          <Suspense fallback={<Loading />}>
            <div className={montserrat.className}>{children}</div>
          </Suspense>
          <div>
            <Footer />
          </div>
        </body>
      </ReactLenis>
    </html>
  );
}
