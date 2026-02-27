"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { homepageProducts } from "@/data/productSeries";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: "easeOut" }
  })
};

function ProductCard({ product, index, isInView }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
    >
      <Link href={product.link} className="group block">
        {/* Card — fixed aspect ratio, fully image-driven */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          {/* Photo */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Always-visible gradient + name at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Tag */}
          <div className="absolute top-3 left-3">
            <span className="bg-brand-accent text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
              {product.tag}
            </span>
          </div>

          {/* Default: name only */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {product.name}
            </h3>
          </div>

          {/* Hover overlay — slides up from bottom */}
          <div className="absolute inset-0 bg-brand-primary/90 flex flex-col justify-end p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <span className="text-[10px] font-semibold text-brand-accent tracking-widest uppercase mb-2">
              {product.tag}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="flex items-center gap-1.5 text-brand-accent text-xs sm:text-sm font-semibold">
              View Details
              <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-gray-50 py-10 sm:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-0.5 w-8 bg-brand-accent" />
            <span className="text-xs sm:text-sm font-semibold text-brand-accent tracking-widest uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary">
            Aluminium &amp; AL Alloy Wire Products
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {homepageProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={homepageProducts.length + 1}
          className="text-center mt-10 sm:mt-12 pt-8 border-t border-gray-200"
        >
          <Button
            asChild
            size="lg"
            className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3 rounded-none font-semibold text-sm sm:text-base border-0 shadow-lg shadow-brand-accent/20 transition-all duration-300"
          >
            <Link href="/products" className="flex items-center gap-2">
              Browse Full Product Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
