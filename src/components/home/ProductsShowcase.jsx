"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { productSeries } from "@/data/productSeries";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const filterCategories = [
  { id: "all", name: "All Series" },
  { id: "heat-treatable", name: "Heat-Treatable" },
  { id: "non-heat-treatable", name: "Non-Heat-Treatable" },
  { id: "high-strength", name: "High Strength" },
  { id: "corrosion-resistant", name: "Corrosion Resistant" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" }
  })
};

function ProductCard({ series }) {
  return (
    <Link href={`/products/${series.id}`} className="block h-full">
      <div className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500 h-full">
        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <Image
            src={series.image}
            alt={series.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Series badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-brand-accent text-white px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wider">
              {series.id.toUpperCase()}
            </span>
          </div>

          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white mb-0.5">
              {series.name}
            </h3>
            <p className="text-xs text-white/70 font-light">
              {series.subtitle}
            </p>
          </div>
        </div>

        {/* Minimal body */}
        <div className="p-4">
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
            {series.mainProperty}
          </p>

          <div className="flex items-center gap-1.5 text-brand-accent font-semibold text-xs sm:text-sm group-hover:gap-2.5 transition-all duration-300">
            View Details
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const getFilteredProducts = () => {
    switch (activeFilter) {
      case "heat-treatable":
        return productSeries.filter((s) => s.heatTreatable === true);
      case "non-heat-treatable":
        return productSeries.filter((s) => s.heatTreatable === false);
      case "high-strength":
        return productSeries.filter((s) => ["2xxx", "7xxx"].includes(s.id));
      case "corrosion-resistant":
        return productSeries.filter((s) =>
          ["1xxx", "5xxx", "6xxx"].includes(s.id)
        );
      default:
        return productSeries;
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,31,46,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <div className="h-px w-6 bg-brand-accent/60" />
            <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
              Our Products
            </span>
            <div className="h-px w-6 bg-brand-accent/60" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Complete Aluminium{" "}
            <span className="text-brand-accent">Series Range</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
          >
            From pure aluminium to aerospace-grade alloys — comprehensive
            solutions across all 8 series for every industry need.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
          className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12"
        >
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? "bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20"
                  : "bg-white text-gray-500 border-gray-100 hover:border-brand-accent/20 hover:text-brand-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Mobile/Tablet: Swiper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Swiper for mobile & tablet */}
            <div className="lg:hidden [&_.swiper-pagination]:!-bottom-0 [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!mt-6 [&_.swiper-pagination-bullet]:!bg-gray-300 [&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!h-2 [&_.swiper-pagination-bullet-active]:!bg-brand-accent [&_.swiper-pagination-bullet-active]:!w-5 [&_.swiper-pagination-bullet-active]:!rounded-full">
              <Swiper
                modules={[FreeMode, Pagination]}
                spaceBetween={12}
                slidesPerView={1.2}
                freeMode={{ enabled: true, sticky: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                  480: { slidesPerView: 1.5, spaceBetween: 14 },
                  640: { slidesPerView: 2.2, spaceBetween: 16 }
                }}
                className="!overflow-visible"
              >
                {filteredProducts.map((series) => (
                  <SwiperSlide key={series.id} className="!h-auto pb-2">
                    <ProductCard series={series} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-4">
              {filteredProducts.map((series, index) => (
                <motion.div
                  key={series.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={4 + index}
                >
                  <ProductCard series={series} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={13}
          className="text-center mt-10 sm:mt-14"
        >
          <Button
            asChild
            size="lg"
            className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] transition-all duration-300 border-0"
          >
            <Link href="/products" className="flex items-center">
              View Complete Product Catalog
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
