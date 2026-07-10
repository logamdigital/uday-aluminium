"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StandardsTable from "@/components/shared/StandardsTable";
import SizeApplicationTable from "@/components/shared/SizeApplicationTable";
import MechanicalPropertiesTable from "@/components/shared/MechanicalPropertiesTable";
import ConductivitySpec from "@/components/shared/ConductivitySpec";
import TDSDownload from "@/components/shared/TDSDownload";
import ProductInquiryForm from "@/components/shared/ProductInquiryForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/* Alloy variant table — used only by the Aluminium Alloy Wires page */
function AlloyVariantTable({ variants, inView }) {
  if (!variants || variants.length === 0) return null;
  return (
    <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
        Alloy Variants &amp; Specifications
      </h2>
      <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
        <span className="text-[11px] font-medium">Swipe to see all columns</span>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">Alloy</th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">Composition</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">UTS</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">Yield</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">Elongation</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide rounded-tr-xl">Conductivity</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((row, idx) => (
              <tr
                key={row.alloy}
                className={`border-t border-gray-100 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"} hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs">{row.alloy}</td>
                <td className="px-4 py-3 text-xs text-gray-500">{row.composition || row.chemSymbol}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.uts || <span className="text-gray-400">On request</span>}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.yield || <span className="text-gray-400">On request</span>}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.elongation || <span className="text-gray-400">On request</span>}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.iacs || <span className="text-gray-400">On request</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-gray-400 mt-2">
        Values marked &quot;On request&quot; are certified per-batch via Mill Test Certificate — see Certification block above.
      </p>
    </motion.div>
  );
}

export default function ProductPageTemplate({ data }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

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
            <span className="text-brand-primary font-medium">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* 1. Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative h-[300px] sm:h-[380px] lg:h-[420px]">
          <Image src={data.image} alt={data.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={0}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-3"
              >
                {data.name}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={1}
                className="text-base sm:text-lg text-white/70 font-light max-w-2xl"
              >
                {data.tagline}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 2–8. Main content */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 2. Applications */}
          <motion.div variants={fadeUp} initial="hidden" animate={contentInView ? "visible" : "hidden"} custom={0}>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">Applications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-accent/20 transition-colors duration-200"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{app}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="border-t border-gray-100" />

          {/* 3. Standards Compliance */}
          <StandardsTable standards={data.standards} inView={contentInView} />

          <div className="border-t border-gray-100" />

          {/* 4. Available Sizes */}
          <SizeApplicationTable
            min={data.sizeRange?.min}
            max={data.sizeRange?.max}
            rows={data.sizeRange?.rows}
            inView={contentInView}
          />

          {/* Alloy variant table (Aluminium Alloy Wires page only) */}
          {data.alloyVariants && (
            <>
              <div className="border-t border-gray-100" />
              <AlloyVariantTable variants={data.alloyVariants} inView={contentInView} />
            </>
          )}

          {data.meshNote && (
            <div className="flex flex-col gap-2 p-4 bg-brand-accent/5 border border-brand-accent/15 rounded-xl">
              <p className="text-sm text-gray-600 leading-relaxed">{data.meshNote}</p>
              {data.meshNoteLink && (
                <Link
                  href={data.meshNoteLink}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors w-fit"
                >
                  View Full Mesh Gauge Chart
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          )}

          <div className="border-t border-gray-100" />

          {/* 5. Mechanical Properties */}
          {data.mechanicalProperties && (
            <MechanicalPropertiesTable rows={data.mechanicalProperties} inView={contentInView} />
          )}

          <div className="border-t border-gray-100" />

          {/* 6. Conductivity */}
          <ConductivitySpec
            value={data.conductivity?.value}
            note={data.conductivity?.note}
            inView={contentInView}
          />

          <div className="border-t border-gray-100" />

          {/* 7. Technical Data Sheet */}
          <TDSDownload productName={data.name} inView={contentInView} />

          <div className="border-t border-gray-100" />

          {/* 8. Inquiry Form */}
          <ProductInquiryForm productName={data.inquiryProductLabel || data.name} />
        </div>
      </section>

      {/* CTA footer */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
          <Link
            href="/products"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-primary transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Button
            className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-xl font-semibold text-sm border-0 px-6 py-3"
            asChild
          >
            <Link href="/contact">Talk to Sales</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
