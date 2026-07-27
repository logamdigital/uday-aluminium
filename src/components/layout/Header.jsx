"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Package } from "lucide-react";
import { productPages } from "@/data/productPages";

const commercialProducts = [
  { id: "aluminium-busbars", name: "Aluminium Busbars" },
  { id: "aluminium-alloy-wires", name: "Aluminium Alloy Wires" },
  { id: "aluminium-rods", name: "Aluminium Rods" },
  { id: "aluminium-wire-mesh", name: "Aluminium Wire Mesh" },
  { id: "fine-wires", name: "Aluminium Fine Wires" },
  { id: "cable-conductors", name: "Cable Conductors" },
].map((p) => ({ ...p, image: productPages[p.id]?.image }));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const dropdownRef = useRef(null);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showSolid = true;
  const isProductsActive =
    pathname.startsWith("/products") || pathname.startsWith("/form-of-supply");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-brand-primary/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 sm:h-20 lg:h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <Image
            src="/images/hero/final_logo.png"
            alt="Uday Aluminium"
            width={210}
            height={80}
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Home */}
          <Link
            href="/"
            className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
              pathname === "/"
                ? "text-brand-accent"
                : "text-white/75 hover:text-white hover:bg-white/8"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-accent rounded-full" />
            )}
          </Link>

          {/* About
          <Link
            href="/about"
            className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
              pathname === "/about"
                ? "text-brand-accent"
                : "text-white/75 hover:text-white hover:bg-white/8"
            }`}
          >
            About
            {pathname === "/about" && (
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-accent rounded-full" />
            )}
          </Link> */}

          {/* Products Mega Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`relative flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                isProductsActive
                  ? "text-brand-accent"
                  : "text-white/75 hover:text-white hover:bg-white/8"
              }`}
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
              {isProductsActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-accent rounded-full" />
              )}
            </button>

            {/* Mega Menu Panel */}
            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50">
                {/* Shop by Product — commercial-name pages */}
                <div className="mb-5 pb-5 border-b border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">
                    Shop by Product
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {commercialProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        className="flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-brand-accent/6 transition-colors"
                      >
                        <span className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
                          {p.image && (
                            <Image
                              src={p.image}
                              alt=""
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          )}
                        </span>
                        <p className="text-sm font-semibold text-brand-primary leading-tight">
                          {p.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Form of Supply */}
                <div className="border-t border-gray-100 pt-3 space-y-1.5">
                  <Link
                    href="/form-of-supply"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/8 transition-colors"
                  >
                    <Package className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span className="text-xs font-bold text-brand-primary">
                      Form of Supply
                    </span>
                  </Link>
                  <Link
                    href="/products"
                    className="flex items-center px-3 py-2 text-[11px] font-medium text-gray-400 hover:text-brand-accent transition-colors"
                  >
                    View All Products →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Other Nav Links */}
          {["Applications", "Industries", "Contact"].map((name) => {
            const href = `/${name.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-brand-accent"
                    : "text-white/75 hover:text-white hover:bg-white/8"
                }`}
              >
                {name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side: CTA + Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white text-xs lg:text-sm font-semibold px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-md shadow-brand-accent/20"
          >
            <Phone className="w-3.5 h-3.5" />
            Get Quote
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-brand-primary/98 backdrop-blur-xl border-t border-white/10 px-4 sm:px-6 pb-6 pt-2 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <nav className="flex flex-col gap-1">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                pathname === "/"
                  ? "text-brand-accent bg-brand-accent/10"
                  : "text-white/70 hover:text-white hover:bg-white/6"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                pathname === "/about"
                  ? "text-brand-accent bg-brand-accent/10"
                  : "text-white/70 hover:text-white hover:bg-white/6"
              }`}
            >
              About
            </Link>

            {/* Mobile Products Accordion */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  isProductsActive
                    ? "text-brand-accent bg-brand-accent/10"
                    : "text-white/70 hover:text-white hover:bg-white/6"
                }`}
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  mobileProductsOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-3 mt-1 space-y-4 pb-2 border-l border-white/10 pl-3">
                  {/* Shop by Product */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-2 mb-1">
                      Shop by Product
                    </p>
                    {commercialProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/6 transition-colors"
                      >
                        <span className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-white/5">
                          {p.image && (
                            <Image
                              src={p.image}
                              alt=""
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          )}
                        </span>
                        {p.name}
                      </Link>
                    ))}
                  </div>

                  {/* Form of Supply + View All */}
                  <div className="border-t border-white/10 pt-2 space-y-1">
                    <Link
                      href="/form-of-supply"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-2 py-2.5 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/6 transition-colors"
                    >
                      <Package className="w-3.5 h-3.5 text-brand-accent" />
                      Form of Supply
                    </Link>
                    <Link
                      href="/products"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-2 py-2 rounded-lg text-sm text-white/50 hover:text-white/70 transition-colors"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other nav links */}
            {["Applications", "Industries", "Contact"].map((name) => {
              const href = `/${name.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand-accent bg-brand-accent/10"
                      : "text-white/70 hover:text-white hover:bg-white/6"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-brand-accent hover:bg-brand-accent/90 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
