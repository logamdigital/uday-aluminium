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
  title: "Uday Aluminium - Aluminium & AL Alloy Wires Manufacturer",
  description: "Leading manufacturer of aluminium and aluminium alloy wires, wire mesh (5154, powder coated), wire rods (6201, 6061, AL59), welding wire, rivet wire, braiding wire, anchor wire, and zinc coating wires.",
  keywords: "aluminium wire manufacturer, aluminium alloy wire, 5154 wire mesh, powder coated mesh, 6201 rod, 6061 rod, AL59 overhead conductor, welding wire, rivet wire, braiding wire, anchor wire, zinc wire",
  authors: [{ name: "Uday Aluminium" }],
  icons: {
    icon: "/images/hero/Icon.svg",
  },
  openGraph: {
    title: "Uday Aluminium - Aluminium & AL Alloy Wires Manufacturer",
    description: "Leading manufacturer of aluminium and aluminium alloy wires, wire mesh, overhead conductor rods, welding wire and zinc coating wires.",
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
