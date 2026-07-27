"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productPages, productPageSlugs } from "@/data/productPages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const products = productPageSlugs.map((slug) => productPages[slug]);

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.tagline.toLowerCase().includes(term) ||
      product.applications.some((app) => app.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section
        ref={heroRef}
        className="relative bg-brand-light overflow-hidden py-20 sm:py-28 lg:py-36"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,31,46,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,31,46,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <div className="h-px w-6 bg-brand-accent/60" />
              <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
                Our Products
              </span>
              <div className="h-px w-6 bg-brand-accent/60" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight tracking-tight mb-4 sm:mb-6"
            >
              Complete Aluminium{" "}
              <span className="text-brand-accent">Product Range</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
            >
              From EC grade wire to busbars, rods and mesh — explore our
              complete product line, engineered for every industrial
              requirement.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={3}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-brand-primary/15 text-brand-primary hover:bg-brand-primary hover:text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Request Catalog
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative max-w-md w-full mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-100 rounded-xl bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/30 transition-all duration-300 placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* ── Product Cards ── */}
      <section
        ref={gridRef}
        className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight mb-4"
            >
              Explore Our <span className="text-brand-accent">Products</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
            >
              Select any product to view detailed specs, standards
              compliance, and applications.
            </motion.p>
          </div>

          {/* Clean card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                variants={fadeUp}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                custom={3 + index}
              >
                <Link href={`/products/${product.slug}`} className="block h-full">
                  <div className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500 h-full">
                    {/* Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Name overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white mb-0.5">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    {/* Minimal card body */}
                    <div className="p-4">
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
                        {product.tagline}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-brand-accent font-semibold text-xs sm:text-sm group-hover:gap-2.5 transition-all duration-300">
                          View Details
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-300" />
              </div>
              <p className="text-gray-400 text-sm sm:text-base font-light">
                No products found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        ref={ctaRef}
        className="relative bg-gray-900 overflow-hidden py-16 sm:py-20 lg:py-28"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <div className="h-px w-6 bg-brand-accent/60" />
            <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
              Get Started
            </span>
            <div className="h-px w-6 bg-brand-accent/60" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={1}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Need Help Choosing the{" "}
            <span className="text-brand-accent">Right Product</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Our material engineers can help you select the optimal aluminium
            product for your specific application and performance
            requirements.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={3}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl border-0 shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                Consult Our Engineers
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
