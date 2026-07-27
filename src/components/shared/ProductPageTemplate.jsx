"use client";

import { motion, useInView } from "framer-motion";
import { useRef, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, ArrowRight, Boxes, GitCompare, Thermometer, Cable } from "lucide-react";
import { Button } from "@/components/ui/button";
import StandardsTable from "@/components/shared/StandardsTable";
import SizeApplicationTable from "@/components/shared/SizeApplicationTable";
import MechanicalPropertiesTable from "@/components/shared/MechanicalPropertiesTable";
import ConductivitySpec from "@/components/shared/ConductivitySpec";
import TDSDownload from "@/components/shared/TDSDownload";
import ProductInquiryForm from "@/components/shared/ProductInquiryForm";
import GenericSpecTable from "@/components/shared/GenericSpecTable";
import OverviewSection from "@/components/shared/OverviewSection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const EXTRA_TABLE_ICONS = {
  boxes: Boxes,
  gitCompare: GitCompare,
  thermometer: Thermometer,
  cable: Cable,
};

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
        <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] bg-brand-primary">
          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="100vw"
            className={data.heroImageFit === "contain" ? "object-contain" : "object-cover"}
            priority
          />
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
          {/* Intro overview paragraphs */}
          {data.introParagraphs && data.introParagraphs.length > 0 && (
            <>
              <OverviewSection paragraphs={data.introParagraphs} inView={contentInView} />
              <div className="border-t border-gray-100" />
            </>
          )}

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

          {/* Extra reference tables (product capability, conductor types, variant charts, etc.) */}
          {data.extraTables &&
            data.extraTables.map((table, idx) => (
              <Fragment key={idx}>
                <div className="border-t border-gray-100" />
                <GenericSpecTable
                  title={table.title}
                  icon={EXTRA_TABLE_ICONS[table.icon]}
                  intro={table.intro}
                  columns={table.columns}
                  rows={table.rows}
                  note={table.note}
                  inView={contentInView}
                />
              </Fragment>
            ))}

          <div className="border-t border-gray-100" />

          {/* 3. Standards Compliance */}
          <StandardsTable standards={data.standards} inView={contentInView} />

          {/* 4. Available Sizes */}
          {data.sizeRange && (
            <>
              <div className="border-t border-gray-100" />
              <SizeApplicationTable
                min={data.sizeRange?.min}
                max={data.sizeRange?.max}
                rows={data.sizeRange?.rows}
                inView={contentInView}
              />
            </>
          )}

          {data.meshNote && (
            <>
              <div className="border-t border-gray-100" />
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
            </>
          )}

          {/* 5. Mechanical Properties */}
          {data.mechanicalProperties && (
            <>
              <div className="border-t border-gray-100" />
              <MechanicalPropertiesTable rows={data.mechanicalProperties} inView={contentInView} />
            </>
          )}

          {/* 6. Conductivity */}
          {(data.conductivity?.value || data.conductivity?.note) && (
            <>
              <div className="border-t border-gray-100" />
              <ConductivitySpec
                value={data.conductivity?.value}
                note={data.conductivity?.note}
                inView={contentInView}
              />
            </>
          )}

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
