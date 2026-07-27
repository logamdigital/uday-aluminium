"use client";

import { motion } from "framer-motion";
import { Ruler } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Sizes block — headline range stat plus label/value detail rows
 * (most-ordered sizes, tolerance, packaging, standard dimensions, etc).
 * @param {{
 *   title?: string, min?: string, max?: string, rangeLabel?: string, rangeNote?: string,
 *   rows: { label: string, value: string }[],
 *   inView?: boolean
 * }} props
 */
export default function SizesBlock({ title = "Sizes", min, max, rangeLabel, rangeNote, rows, inView = true }) {
  if (!rows || rows.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Ruler className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">{title}</h2>
      </div>

      {min && max && (
        <div className="mb-3 bg-gray-900 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {min}
            </span>
            <span className="text-white/40 text-sm">to</span>
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {max}
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider text-brand-accent font-semibold sm:border-l sm:border-white/15 sm:pl-4">
            {rangeLabel || "Standard Range"}
          </span>
        </div>
      )}

      {rangeNote && (
        <p className="text-xs text-gray-400 mb-5 leading-relaxed">{rangeNote}</p>
      )}

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[420px]">
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.label}
                className={`border-t border-gray-100 first:border-t-0 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                }`}
              >
                <td className="px-4 py-3 text-xs font-semibold text-brand-primary uppercase tracking-wide w-1/3 align-top whitespace-nowrap">
                  {row.label}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
