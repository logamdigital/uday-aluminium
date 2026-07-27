"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Award, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import StandardsTable from "@/components/shared/StandardsTable";
import HighlightList from "@/components/shared/HighlightList";
import OverviewSection from "@/components/shared/OverviewSection";
import ProseSection from "@/components/shared/ProseSection";
import GradesTable from "@/components/shared/GradesTable";
import AlloyVariantTable from "@/components/shared/AlloyVariantTable";
import GradeTemperPropertiesTable from "@/components/shared/GradeTemperPropertiesTable";
import SizesBlock from "@/components/shared/SizesBlock";
import TDSDownload from "@/components/shared/TDSDownload";
import ProductInquiryForm from "@/components/shared/ProductInquiryForm";
import {
  alloyWiresOverview,
  alloyWiresKeyAdvantages,
  alloyWiresGradesIntro,
  alloyWiresEcGradeRow,
  alloyVariants,
  alloyWiresTempers,
  alloyWiresMechanicalElectrical,
  alloyWiresSizes,
  alloyWiresStandards,
  alloyWiresApplications,
} from "@/data/aluminiumAlloyWiresSpecs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AluminiumAlloyWiresContent({ product }) {
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
            <span className="text-brand-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative h-[300px] sm:h-[380px] lg:h-[420px]">
          <Image src={product.image} alt={product.name} fill sizes="100vw" className="object-cover" priority />
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
                {product.name}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={1}
                className="text-base sm:text-lg text-white/70 font-light max-w-2xl"
              >
                {product.tagline}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Overview */}
          <OverviewSection paragraphs={alloyWiresOverview} inView={contentInView} />

          <div className="border-t border-gray-100" />

          {/* Key Technical Advantages */}
          <HighlightList
            title="Key Technical Advantages"
            icon={Award}
            items={alloyWiresKeyAdvantages}
            inView={contentInView}
          />

          <div className="border-t border-gray-100" />

          {/* Grades — EC Grade summary row */}
          <GradesTable intro={alloyWiresGradesIntro} rows={alloyWiresEcGradeRow} inView={contentInView} />

          <div className="border-t border-gray-100" />

          {/* Grades — 5xxx / 6xxx alloy variants */}
          <AlloyVariantTable variants={alloyVariants} inView={contentInView} />

          <div className="border-t border-gray-100" />

          {/* Tempers — EC Grade 1350 */}
          <ProseSection
            title="Tempers — EC Grade 1350"
            icon={Thermometer}
            text={alloyWiresTempers}
            inView={contentInView}
          />

          <div className="border-t border-gray-100" />

          {/* Mechanical & Electrical Properties — EC Grade 1350 */}
          <GradeTemperPropertiesTable
            title="Mechanical & Electrical Properties — EC Grade 1350 (by Temper)"
            rows={alloyWiresMechanicalElectrical}
            inView={contentInView}
          />

          <div className="border-t border-gray-100" />

          {/* Sizes */}
          <SizesBlock
            min={alloyWiresSizes.min}
            max={alloyWiresSizes.max}
            rangeLabel={alloyWiresSizes.rangeLabel}
            rows={alloyWiresSizes.rows}
            inView={contentInView}
          />

          <div className="border-t border-gray-100" />

          {/* Standards Compliance */}
          <StandardsTable standards={alloyWiresStandards} inView={contentInView} />

          <div className="border-t border-gray-100" />

          {/* Typical Applications */}
          <HighlightList
            title="Typical Applications"
            items={alloyWiresApplications}
            columns={2}
            inView={contentInView}
          />

          <div className="border-t border-gray-100" />

          {/* Technical Data Sheet */}
          <TDSDownload productName={product.name} inView={contentInView} />

          <div className="border-t border-gray-100" />

          {/* Inquiry Form */}
          <ProductInquiryForm productName={product.inquiryProductLabel || product.name} />
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
