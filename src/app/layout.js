import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Uday Aluminium - Premium Aluminum Solutions",
  description: "Leading manufacturer and supplier of high-quality aluminum alloys across 8 different series. Premium aluminum solutions for aerospace, automotive, marine, construction, and industrial applications.",
  keywords: "aluminum, alloys, manufacturing, 1xxx, 2xxx, 3xxx, 4xxx, 5xxx, 6xxx, 7xxx, 8xxx, aerospace, automotive, marine",
  authors: [{ name: "Uday Aluminium" }],
  icons: {
    icon: "/images/hero/Icon.svg",
  },
  openGraph: {
    title: "Uday Aluminium - Premium Aluminum Solutions",
    description: "Leading manufacturer and supplier of high-quality aluminum alloys across 8 different series.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16 sm:pt-20 lg:pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
