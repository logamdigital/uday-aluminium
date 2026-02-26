"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  BarChart3,
  Download,
  Flame,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { productSeries } from "@/data/productSeries";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const filterCategories = [
  { id: "all", label: "All Series" },
  { id: "heat-treatable", label: "Heat Treatable" },
  { id: "non-heat-treatable", label: "Non-Heat Treatable" },
  { id: "high-strength", label: "High Strength" },
];

const getRatingColor = (rating) => {
  switch (rating) {
    case "Excellent":
      return "text-emerald-600 bg-emerald-50 border-emerald-100";
    case "Very High":
    case "High":
      return "text-emerald-600 bg-emerald-50 border-emerald-100";
    case "Good":
    case "Medium-High":
    case "Medium":
      return "text-brand-accent bg-brand-accent/10 border-brand-accent/20";
    case "Fair":
    case "Low-Medium":
    case "Low":
      return "text-amber-600 bg-amber-50 border-amber-100";
    case "Poor":
      return "text-red-500 bg-red-50 border-red-100";
    default:
      return "text-gray-500 bg-gray-50 border-gray-100";
  }
};

export default function ProductsPage() {
  const [showComparison, setShowComparison] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const heroRef = useRef(null);
  const comparisonRef = useRef(null);
  const seriesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const seriesInView = useInView(seriesRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const filteredSeries = productSeries.filter((series) => {
    const matchesSearch =
      series.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      series.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      series.applications.some((app) =>
        app.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesFilter =
      filterType === "all" ||
      (filterType === "heat-treatable" && series.heatTreatable === true) ||
      (filterType === "non-heat-treatable" && series.heatTreatable === false) ||
      (filterType === "high-strength" &&
        ["High", "Very High"].includes(series.strength));
    return matchesSearch && matchesFilter;
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
              <span className="text-brand-accent">Series Range</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
            >
              From pure aluminium to aerospace-grade alloys — explore our
              comprehensive range across all 8 series, engineered for every
              industrial requirement.
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
                className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl border-0 shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] transition-all duration-300"
                onClick={() => setShowComparison(!showComparison)}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Compare All Series
              </Button>
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

      {/* ── Search & Filter Bar ── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search series, applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-100 rounded-xl bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/30 transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filterCategories.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setFilterType(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                    filterType === filter.id
                      ? "bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20"
                      : "bg-white text-gray-500 border-gray-100 hover:border-brand-accent/20 hover:text-brand-primary"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <AnimatePresence>
        {showComparison && (
          <motion.section
            ref={comparisonRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative overflow-hidden bg-white"
          >
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary leading-tight tracking-tight">
                  Series <span className="text-brand-accent">Comparison</span>
                </h2>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="text-left p-4 text-white text-xs sm:text-sm font-semibold first:rounded-tl-2xl">
                        Series
                      </th>
                      <th className="text-left p-4 text-white text-xs sm:text-sm font-semibold">
                        Strength
                      </th>
                      <th className="text-left p-4 text-white text-xs sm:text-sm font-semibold">
                        Corrosion
                      </th>
                      <th className="text-left p-4 text-white text-xs sm:text-sm font-semibold">
                        Weldability
                      </th>
                      <th className="text-left p-4 text-white text-xs sm:text-sm font-semibold">
                        Heat Treatable
                      </th>
                      <th className="text-left p-4 text-white text-xs sm:text-sm font-semibold last:rounded-tr-2xl">
                        Top Applications
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productSeries.map((series, index) => (
                      <tr
                        key={series.id}
                        className={`border-b border-gray-50 last:border-0 transition-colors hover:bg-brand-accent/[0.02] ${
                          index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                        }`}
                      >
                        <td className="p-4">
                          <Link
                            href={`/products/${series.id}`}
                            className="font-semibold text-brand-primary hover:text-brand-accent transition-colors text-sm"
                          >
                            {series.name}
                          </Link>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getRatingColor(
                              series.strength
                            )}`}
                          >
                            {series.strength}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getRatingColor(
                              series.corrosion
                            )}`}
                          >
                            {series.corrosion}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getRatingColor(
                              series.weldability
                            )}`}
                          >
                            {series.weldability}
                          </span>
                        </td>
                        <td className="p-4">
                          {series.heatTreatable === true ? (
                            <div className="flex items-center gap-1.5">
                              <Flame className="w-4 h-4 text-brand-accent" />
                              <span className="text-xs font-medium text-brand-accent">
                                Yes
                              </span>
                            </div>
                          ) : series.heatTreatable === false ? (
                            <span className="text-xs text-gray-400">No</span>
                          ) : (
                            <span className="text-xs text-gray-400">
                              Varies
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-xs sm:text-sm text-gray-500">
                          {series.applications.slice(0, 2).join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Product Series Cards ── */}
      <section
        ref={seriesRef}
        className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={seriesInView ? "visible" : "hidden"}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight mb-4"
            >
              Explore Each <span className="text-brand-accent">Series</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={seriesInView ? "visible" : "hidden"}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
            >
              Select any series to view detailed properties, common alloys, and
              applications.
            </motion.p>
          </div>

          {/* Clean card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredSeries.map((series, index) => (
              <motion.div
                key={series.id}
                variants={fadeUp}
                initial="hidden"
                animate={seriesInView ? "visible" : "hidden"}
                custom={3 + index}
              >
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

                    {/* Minimal card body */}
                    <div className="p-4">
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
                        {series.mainProperty}
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
          {filteredSeries.length === 0 && (
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
            <span className="text-brand-accent">Right Series</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Our material engineers can help you select the optimal aluminum
            alloy for your specific application and performance requirements.
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
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full Catalog
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
