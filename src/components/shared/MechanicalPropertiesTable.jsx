"use client";

import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Mechanical Properties Table
 * @param {{ rows: { property: string, value: string|null, note?: string }[], inView?: boolean }} props
 */
export default function MechanicalPropertiesTable({ rows, inView = true }) {
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
          Mechanical Properties
        </h2>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[480px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                Property
              </th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">
                Value
              </th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tr-xl">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.property}
                className={`border-t border-gray-100 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 text-xs font-medium text-brand-primary">
                  {row.property}
                </td>
                <td className="px-4 py-3 text-xs font-mono font-bold tabular-nums whitespace-nowrap">
                  {row.value ? (
                    <span className="text-brand-primary">{row.value}</span>
                  ) : (
                    <span className="text-gray-400 font-sans font-medium">
                      On request
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {row.note || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
