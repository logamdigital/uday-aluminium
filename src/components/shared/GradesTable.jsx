"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Grades table — Grade | <middleColumnLabel> | Typical Applications
 * @param {{
 *   intro?: string,
 *   rows: { grade: string, middleValue: string, applications: string }[],
 *   middleColumnLabel?: string,
 *   inView?: boolean
 * }} props
 */
export default function GradesTable({ intro, rows, middleColumnLabel = "Conductivity", inView = true }) {
  if (!rows || rows.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">Grades</h2>
      </div>

      {intro && (
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{intro}</p>
      )}

      <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
        <span className="text-[11px] font-medium">Swipe to see all columns</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                Grade
              </th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">
                {middleColumnLabel}
              </th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tr-xl">
                Typical Applications
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.grade}
                className={`border-t border-gray-100 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs whitespace-nowrap">
                  {row.grade}
                </td>
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">
                  {row.middleValue}
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">{row.applications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
