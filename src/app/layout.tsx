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
  title: "Lancea Web",
  description: "Welcome to my porto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={montserrat.className}>
          <div className={nunito_sans.className}>
            <Navigation />
          </div>
          <Suspense fallback={<Loading/>}>
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
