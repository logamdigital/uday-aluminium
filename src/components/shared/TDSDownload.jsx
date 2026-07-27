"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Technical Data Sheet section.
 * No PDF asset has been supplied for this product yet, so this renders a
 * request CTA rather than a dead download link.
 * @param {{ productName: string, inView?: boolean }} props
 */
export default function TDSDownload({ productName, inView = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Technical Data Sheet
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6">
        <div>
          <p className="text-sm font-semibold text-brand-primary mb-1">
            {productName} — Full Technical Data Sheet
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Request the complete PDF datasheet with certified mechanical,
            chemical and dimensional data for this product.
          </p>
        </div>
        <Link
          href={`/contact?product=${encodeURIComponent(productName)}&request=tds`}
          className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200 shrink-0 group"
        >
          Request Data Sheet
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
