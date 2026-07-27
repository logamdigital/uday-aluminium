"use client";

import { motion } from "framer-motion";
import { Ruler } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Wire Size & Application Quick Reference
 * @param {{ min: string, max: string, rows: { diameter: string, application: string }[], inView?: boolean }} props
 */
export default function SizeApplicationTable({ min, max, rows, inView = true }) {
  if (!rows || rows.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Ruler className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Wire Size &amp; Application
        </h2>
      </div>

      {/* Headline stat */}
      {min && max && (
        <div className="mb-5 bg-gray-900 rounded-2xl px-6 py-5 flex items-center gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {min}
            </span>
            <span className="text-white/40 text-sm">to</span>
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {max}
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider text-brand-accent font-semibold border-l border-white/15 pl-4">
            Full Manufacturing Range
          </span>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[420px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                Diameter
              </th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tr-xl">
                Common Application
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.diameter}
                className={`border-t border-gray-100 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs tabular-nums whitespace-nowrap">
                  {row.diameter}
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">
                  {row.application}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
