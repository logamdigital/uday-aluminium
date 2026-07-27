"use client";

import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Mechanical & Electrical Properties by Grade–Temper.
 * @param {{
 *   title?: string,
 *   rows: { gradeTemper: string, uts: string, yieldTyp: string, elongationMin: string, conductivityMin: string }[],
 *   footnote?: string,
 *   inView?: boolean
 * }} props
 */
export default function GradeTemperPropertiesTable({ title = "Mechanical & Electrical Properties", rows, footnote, inView = true }) {
  if (!rows || rows.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Gauge className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
        <span className="text-[11px] font-medium">Swipe to see all columns</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                Grade–Temper
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">
                UTS (MPa)
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">
                Yield typ. (MPa)
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">
                Elongation min
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide rounded-tr-xl">
                Conductivity min
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.gradeTemper}
                className={`border-t border-gray-100 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs whitespace-nowrap">
                  {row.gradeTemper}
                </td>
                <td className="px-3 py-3 text-center text-xs tabular-nums whitespace-nowrap">
                  {row.uts}
                </td>
                <td className="px-3 py-3 text-center text-xs tabular-nums whitespace-nowrap">
                  {row.yieldTyp}
                </td>
                <td className="px-3 py-3 text-center text-xs tabular-nums whitespace-nowrap">
                  {row.elongationMin}
                </td>
                <td className="px-3 py-3 text-center text-xs tabular-nums whitespace-nowrap">
                  {row.conductivityMin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnote && (
        <p className="text-[11px] text-gray-400 mt-2 italic leading-relaxed">
          {footnote}
        </p>
      )}
    </motion.div>
  );
}
