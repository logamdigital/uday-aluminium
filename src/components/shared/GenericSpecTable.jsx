"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Generic multi-column spec table — for reference data that doesn't fit the
 * fixed two/three-column shared tables (product capability, conductor type
 * comparisons, variant charts, distribution conductor datasheets, etc).
 * @param {{
 *   title: string,
 *   icon?: React.ComponentType,
 *   intro?: string,
 *   columns: { key: string, label: string }[],
 *   rows: Record<string, string>[],
 *   note?: string,
 *   inView?: boolean
 * }} props
 */
export default function GenericSpecTable({ title, icon: Icon, intro, columns, rows, note, inView = true }) {
  if (!columns || columns.length === 0 || !rows || rows.length === 0) return null;

  return (
    <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-5 h-5 text-brand-accent" />}
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">{title}</h2>
      </div>

      {intro && <p className="text-sm text-gray-600 leading-relaxed mb-5">{intro}</p>}

      <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
        <span className="text-[11px] font-medium">Swipe to see all columns</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse" style={{ minWidth: `${Math.max(480, columns.length * 140)}px` }}>
          <thead>
            <tr className="bg-brand-primary text-white">
              {columns.map((col, idx) => (
                <th
                  key={col.key}
                  className={`px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide whitespace-nowrap ${
                    idx === 0 ? "rounded-tl-xl" : ""
                  } ${idx === columns.length - 1 ? "rounded-tr-xl" : ""}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={`border-t border-gray-100 transition-colors ${
                  rIdx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                {columns.map((col, cIdx) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 text-xs ${
                      cIdx === 0
                        ? "font-mono font-bold text-brand-primary whitespace-nowrap"
                        : "text-gray-600"
                    }`}
                  >
                    {row[col.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && <p className="text-[11px] text-gray-400 mt-2">{note}</p>}
    </motion.div>
  );
}
