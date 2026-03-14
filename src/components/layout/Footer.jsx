import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Product Series", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Applications", href: "/applications" },
  { name: "Quality Assurance", href: "/quality" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  { name: "1xxx Pure Aluminum", href: "/products/1xxx" },
  { name: "2xxx Al-Copper", href: "/products/2xxx" },
  { name: "5xxx Al-Magnesium", href: "/products/5xxx" },
  { name: "6xxx Al-Mg-Si", href: "/products/6xxx" },
  { name: "7xxx Al-Zinc", href: "/products/7xxx" },
  { name: "View All Series", href: "/products" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-r from-brand-accent to-copper flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">UA</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Uday Aluminium</h1>
                <p className="text-xs sm:text-sm text-brand-secondary">Premium Aluminum Solutions</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Leading aluminium alloy manufacturer and supplier of high-quality wires, rods, and mesh across multiple alloy series.
              Committed to excellence in quality, service, and innovation.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-gray-300 hover:text-brand-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-brand-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-brand-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Product Series */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Product Series</h3>
            <nav className="flex flex-col space-y-2">
              {productLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    Industrial Area, Phase-2<br />
                    Manufacturing District<br />
                    State, PIN - 123456
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-accent" />
                <div>
                  <p className="text-sm text-gray-300">+91 12345 67890</p>
                  <p className="text-sm text-gray-300">+91 09876 54321</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-accent" />
                <p className="text-sm text-gray-300">info@udayaluminium.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-brand-accent mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 w-full">
              <p className="text-xs sm:text-sm text-gray-300">
                © 2025 Uday Aluminium. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/privacy" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/sitemap" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            <p className="text-[11px] text-orange-300/70">
              Powered by <span className="font-semibold text-orange-300">Logam Digital</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}