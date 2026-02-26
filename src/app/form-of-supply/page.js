"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Package,
  Ruler,
  Spool,
  Weight,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const packagingGroups = [
  {
    icon: Ruler,
    style: "Wire Rod — Alignment Rolling",
    description: "Large industrial coils for high-volume wire drawing and downstream processing.",
    specs: [
      { size: "7.0 ~ 35Φ", intDia: "750", extDia: "1,450", width: "950", weight: "2,000 kg" },
      { size: "7.0 ~ 35Φ", intDia: "750", extDia: "1,100", width: "950", weight: "1,000 kg" },
    ],
  },
  {
    icon: Spool,
    style: "Coil Style",
    description: "Open coils for general industrial use and downstream processing lines.",
    specs: [
      { size: "0.8 ~ 1.8Φ", intDia: "280", extDia: "450", width: "—", weight: "MAX 20 kg" },
      { size: "1.3 ~ 3.0Φ", intDia: "320", extDia: "600", width: "—", weight: "MAX 40 kg" },
      { size: "1.9 ~ 6.5Φ", intDia: "450", extDia: "700", width: "—", weight: "MAX 50 kg" },
      { size: "6.4 ~ 25Φ ①", intDia: "600", extDia: "1,100", width: "—", weight: "50–200 kg" },
      { size: "6.4 ~ 25Φ ②", intDia: "850", extDia: "1,300", width: "—", weight: "MAX 300 kg" },
      { size: "22 ~ 30Φ", intDia: "800–1,000", extDia: "1,100–1,400", width: "—", weight: "MAX 500 kg" },
      { size: "7.0 ~ 30Φ", intDia: "750", extDia: "1,450", width: "920", weight: "1,000–2,000 kg" },
    ],
  },
  {
    icon: Weight,
    style: "Carrier Style",
    description:
      "Precision spools for automated processing, CNC machines, and controlled pay-off systems.",
    specs: [
      { size: "0.8 ~ 1.8Φ", intDia: "260", extDia: "450", width: "—", weight: "MAX 80 kg" },
      { size: "1.3 ~ 3.0Φ", intDia: "320", extDia: "600", width: "—", weight: "MAX 200 kg" },
      { size: "1.9 ~ 6.5Φ", intDia: "400", extDia: "700", width: "—", weight: "MAX 200 kg" },
      { size: "6.4 ~ 25Φ ①", intDia: "600", extDia: "1,100", width: "—", weight: "MAX 500 kg" },
      { size: "6.4 ~ 25Φ ②", intDia: "850", extDia: "1,300", width: "—", weight: "MAX 500 kg" },
      { size: "22 ~ 30Φ", intDia: "1,100", extDia: "1,200", width: "—", weight: "MAX 500 kg" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function FormOfSupplyPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link href="/products" className="hover:text-brand-accent transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-primary font-medium">Form of Supply</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        className="bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            custom={0}
            className="flex items-center gap-3 mb-4"
          >
            <span className="bg-brand-accent text-white px-3 py-1 rounded-lg text-xs sm:text-sm font-bold tracking-wider">
              SUPPLY
            </span>
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-lg">
              <Package className="w-3.5 h-3.5 text-white/80" />
              <span className="text-xs font-medium text-white">Packaging &amp; Coil Specs</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-3"
          >
            Form of Supply
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            custom={2}
            className="text-base sm:text-lg text-white/70 font-light max-w-2xl"
          >
            Wire rod supplied in alignment rolling, coil, and carrier styles — covering every
            downstream process from high-volume wire drawing to precision automated production.
          </motion.p>
        </div>
      </section>

      {/* Packaging & Coil Specifications */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            custom={0}
            className="mb-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-2">
              Packaging &amp; Coil Specifications
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl">
              Three supply styles to match every production requirement. All dimensions in mm,
              weights per single coil or spool.
            </p>
          </motion.div>

          <div className="space-y-12">
            {packagingGroups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={gi}
                  variants={fadeUp}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  custom={gi + 1}
                >
                  {/* Group Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-primary">{group.style}</h3>
                      <p className="text-xs text-gray-400">{group.description}</p>
                    </div>
                  </div>

                  {/* Swipe hint — mobile only */}
                  <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l-7 7 7 7M15 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-[11px] font-medium">Swipe to see all columns</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                    <table className="w-full text-sm border-collapse min-w-[520px]">
                      <thead>
                        <tr className="bg-brand-primary text-white">
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide rounded-tl-xl">
                            Size (Φ mm)
                          </th>
                          <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide">
                            Internal Dia. (mm)
                          </th>
                          <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide">
                            External Dia. (mm)
                          </th>
                          <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide">
                            Width (mm)
                          </th>
                          <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide rounded-tr-xl">
                            Single Weight
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.specs.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`border-t border-gray-100 transition-colors ${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                            } hover:bg-brand-accent/5`}
                          >
                            <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs">
                              {row.size}
                            </td>
                            <td className="px-4 py-3 text-center text-xs text-gray-600 tabular-nums">
                              {row.intDia}
                            </td>
                            <td className="px-4 py-3 text-center text-xs text-gray-600 tabular-nums">
                              {row.extDia}
                            </td>
                            <td className="px-4 py-3 text-center text-xs text-gray-500 tabular-nums">
                              {row.width}
                            </td>
                            <td className="px-4 py-3 text-center text-xs font-semibold text-brand-accent tabular-nums">
                              {row.weight}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Footer Nav */}
      <section ref={ctaRef} className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10"
          >
            <div>
              <h3 className="text-base font-bold text-brand-primary mb-1">
                Need a custom supply arrangement?
              </h3>
              <p className="text-sm text-gray-400">
                Our team can tailor coil size, weight, and packaging to your line requirements.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button
                className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-xl font-semibold text-sm px-5 py-2.5"
                asChild
              >
                <Link href="/contact">
                  <Zap className="mr-2 h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-500 hover:text-brand-primary hover:border-brand-primary/20 rounded-xl text-sm"
                asChild
              >
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
