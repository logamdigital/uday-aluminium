"use client";

import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Welding Wire specifications block — grades/material summary plus a
 * size-range & packaging key/value table (MIG vs TIG).
 * @param {{
 *   specRows?: { label: string, value: string }[],
 *   sizePackagingRows?: { label: string, value: string }[],
 *   inView?: boolean
 * }} props
 */
export default function WeldingSpecTable({ specRows, sizePackagingRows, inView = true }) {
  if (!specRows || specRows.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <ClipboardList className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Specifications
        </h2>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-2 mb-5">
        {specRows.map((row) => (
          <div key={row.label}>
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
              {row.label}:
            </span>{" "}
            <span className="text-sm text-gray-600">{row.value}</span>
          </div>
        ))}
      </div>

      {sizePackagingRows && sizePackagingRows.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm border-collapse min-w-[420px]">
            <tbody>
              {sizePackagingRows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`border-t border-gray-100 first:border-t-0 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  <td className="px-4 py-3 text-xs font-semibold text-brand-primary uppercase tracking-wide w-1/3">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
