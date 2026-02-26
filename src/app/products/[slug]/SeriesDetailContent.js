"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Flame,
  BarChart3,
  Shield,
  Wrench,
  ChevronRight,
  Package2,
  FlaskConical,
  Layers,
  Thermometer,
  ClipboardCheck,
  Settings2,
  Spool,
  Weight,
  Ruler,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const getRatingColor = (rating) => {
  switch (rating) {
    case "Excellent":
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    case "Very High":
    case "High":
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    case "Good":
    case "Medium-High":
    case "Medium":
      return "text-brand-accent bg-brand-accent/10 border-brand-accent/20";
    case "Fair":
    case "Low-Medium":
    case "Low":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "Poor":
      return "text-red-500 bg-red-50 border-red-200";
    default:
      return "text-gray-500 bg-gray-50 border-gray-200";
  }
};

const strengthLevel = {
  Low: 1,
  "Low-Medium": 2,
  Medium: 3,
  "Medium-High": 4,
  High: 5,
  "Very High": 6,
  Varies: 3,
};

// Icon map for process steps (cycled by index)
const processIcons = [Package2, Flame, FlaskConical, Layers, Settings2, ClipboardCheck, Thermometer, Spool];

function ProgressBar({ value, label, icon: Icon }) {
  const filled = strengthLevel[value] || 3;
  const percentage = (filled / 6) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-brand-accent" />
          <span className="text-sm font-medium text-brand-primary">{label}</span>
        </div>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${getRatingColor(value)}`}
        >
          {value}
        </span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-brand-accent rounded-full"
        />
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/* ── Manufacturing Process ── */
function ManufacturingProcess({ process, inView }) {
  if (!process || process.length === 0) return null;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={4}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-6">
        Manufacturing Process
      </h2>

      {/* Desktop: horizontal stepper */}
      <div className="hidden md:flex items-start gap-0">
        {process.map((step, idx) => {
          const Icon = processIcons[idx % processIcons.length];
          const isLast = idx === process.length - 1;
          return (
            <div key={idx} className="flex items-start flex-1 min-w-0">
              <div className="flex flex-col items-center flex-1 min-w-0">
                {/* Circle + connector line */}
                <div className="flex items-center w-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  {!isLast && (
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-accent/60 to-gray-200 mx-1" />
                  )}
                </div>
                {/* Step content */}
                <div className="mt-3 pr-3 w-full">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-0.5">
                    Step {step.step}
                  </p>
                  <h3 className="text-xs font-bold text-brand-primary mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical stepper */}
      <div className="flex flex-col gap-0 md:hidden">
        {process.map((step, idx) => {
          const Icon = processIcons[idx % processIcons.length];
          const isLast = idx === process.length - 1;
          return (
            <div key={idx} className="flex gap-4">
              {/* Left: circle + vertical line */}
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center shadow-sm">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                {!isLast && <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-accent/50 to-gray-200 my-1" />}
              </div>
              {/* Right: content */}
              <div className={`pb-6 flex-1 ${isLast ? "" : ""}`}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-0.5">
                  Step {step.step}
                </p>
                <h3 className="text-sm font-bold text-brand-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Chemical Composition ── */
function ChemicalCompositionTable({ data, inView }) {
  if (!data || !data.alloys || data.alloys.length === 0) return null;
  const cols = data.columns;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={5}
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Chemical Composition
        </h2>
        <div className="sm:text-right">
          <p className="text-xs font-semibold text-brand-accent">{data.standard}</p>
          <p className="text-[11px] text-gray-400">{data.note}</p>
        </div>
      </div>

      {/* Swipe hint — mobile only */}
      <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l-7 7 7 7M15 5l7 7-7 7" />
        </svg>
        <span className="text-[11px] font-medium">Swipe to see all columns</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                Alloy
              </th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">
                Chem. Symbol
              </th>
              {cols.map((col) => (
                <th
                  key={col}
                  className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide last:rounded-tr-xl"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.alloys.map((row, idx) => (
              <tr
                key={row.alloy}
                className={`border-t border-gray-100 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs">
                  {row.alloy}
                </td>
                <td className="px-4 py-3 text-xs text-gray-500 font-medium">
                  {row.chemSymbol}
                </td>
                {cols.map((col) => {
                  const val = row[col.toLowerCase()] ?? "—";
                  return (
                    <td
                      key={col}
                      className="px-3 py-3 text-center text-xs text-gray-600 tabular-nums"
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

/* ── Packaging Specifications ── */
function PackagingSpecs({ specs, inView }) {
  if (!specs || specs.length === 0) return null;
  const groupIcons = [Ruler, Spool, Weight];
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={6}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-6">
        Packaging &amp; Coil Specifications
      </h2>

      <div className="space-y-8">
        {specs.map((group, gi) => {
          const Icon = groupIcons[gi % groupIcons.length];
          return (
            <div key={gi}>
              {/* Group header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-primary">{group.style}</h3>
                  <p className="text-xs text-gray-400">{group.description}</p>
                </div>
              </div>

              {/* Swipe hint — mobile only */}
              <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l-7 7 7 7M15 5l7 7-7 7" />
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
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function SeriesDetailContent({
  series,
  prevSeries,
  nextSeries,
}) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const extraRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const extraInView = useInView(extraRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-white">
      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link
              href="/products"
              className="hover:text-brand-accent transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-primary font-medium">
              {series.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Hero — Full-width image with overlay ── */}
      <section ref={heroRef} className="relative overflow-hidden">
        {/* Background image */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[450px]">
          <Image
            src={series.image}
            alt={series.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={0}
                className="flex items-center gap-3 mb-3 flex-wrap"
              >
                <span className="bg-brand-accent text-white px-3 py-1 rounded-lg text-xs sm:text-sm font-bold tracking-wider">
                  {series.id.toUpperCase()}
                </span>
                {series.heatTreatable === true && (
                  <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-lg">
                    <Flame className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="text-xs font-medium text-white">
                      Heat Treatable
                    </span>
                  </span>
                )}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={1}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-2"
              >
                {series.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={2}
                className="text-base sm:text-lg text-white/70 font-light max-w-2xl"
              >
                {series.subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content — Two column layout ── */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left column — Main info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                custom={0}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-3">
                  Overview
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {series.mainProperty}
                </p>
              </motion.div>

              {/* Warning */}
              {series.warnings && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  custom={1}
                  className="flex items-start gap-3 p-4 bg-amber-50/60 border border-amber-100/80 rounded-xl"
                >
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-600 leading-relaxed">
                    {series.warnings}
                  </p>
                </motion.div>
              )}

              {/* Applications */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                custom={2}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {series.applications.map((app, idx) => (
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

              {/* Common Alloys */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                custom={3}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
                  Common Alloys
                </h2>
                <div className="flex flex-wrap gap-3">
                  {series.examples.map((example) => (
                    <span
                      key={example}
                      className="bg-gray-900 text-white px-5 py-3 rounded-xl font-mono text-base sm:text-lg font-semibold"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column — Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                custom={1}
                className="sticky top-24 space-y-6"
              >
                {/* Properties card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <h3 className="text-base font-bold text-brand-primary mb-5">
                    Properties
                  </h3>
                  <div className="space-y-5">
                    <ProgressBar
                      value={series.strength}
                      label="Strength"
                      icon={BarChart3}
                    />
                    <ProgressBar
                      value={series.corrosion}
                      label="Corrosion Resistance"
                      icon={Shield}
                    />
                    <ProgressBar
                      value={series.weldability}
                      label="Weldability"
                      icon={Wrench}
                    />
                  </div>

                  {/* Heat Treatable */}
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-brand-accent" />
                        <span className="text-sm font-medium text-brand-primary">
                          Heat Treatable
                        </span>
                      </div>
                      {series.heatTreatable === true ? (
                        <span className="text-xs font-semibold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-md border border-brand-accent/20">
                          Yes
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                          {series.heatTreatable === false ? "No" : "Varies"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA card */}
                <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-center">
                  <h3 className="text-base font-bold text-white mb-2">
                    Need {series.id.toUpperCase()} Series?
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">
                    Get a competitive quote from our team.
                  </p>
                  <Button
                    className="w-full group bg-brand-accent hover:bg-brand-accent/90 text-white rounded-xl font-semibold text-sm border-0 px-6 py-3 transition-all duration-300"
                    asChild
                  >
                    <Link href={`/contact?series=${series.id}`}>
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manufacturing Process & Chemical Composition ── */}
      <section ref={extraRef} className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Divider */}
          <div className="border-t border-gray-100" />

          <ManufacturingProcess process={series.process} inView={extraInView} />

          {/* Divider */}
          <div className="border-t border-gray-100" />

          <ChemicalCompositionTable data={series.chemicalComposition} inView={extraInView} />

          {series.packagingSpecs && (
            <>
              <div className="border-t border-gray-100" />
              <PackagingSpecs specs={series.packagingSpecs} inView={extraInView} />
            </>
          )}
        </div>
      </section>

      {/* ── Prev / Next Navigation ── */}
      <section ref={ctaRef} className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="flex items-center justify-between py-8"
          >
            {prevSeries ? (
              <Link
                href={`/products/${prevSeries.id}`}
                className="flex items-center gap-3 text-gray-400 hover:text-brand-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                    Previous
                  </span>
                  <p className="text-sm font-medium">{prevSeries.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Button
              variant="outline"
              className="border-gray-200 text-gray-500 hover:text-brand-primary hover:border-brand-primary/20 rounded-xl text-xs sm:text-sm"
              asChild
            >
              <Link href="/products">View All Series</Link>
            </Button>

            {nextSeries ? (
              <Link
                href={`/products/${nextSeries.id}`}
                className="flex items-center gap-3 text-gray-400 hover:text-brand-primary transition-colors group text-right"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                    Next
                  </span>
                  <p className="text-sm font-medium">{nextSeries.name}</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
