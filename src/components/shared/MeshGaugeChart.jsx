"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Grid3x3 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PAGE_SIZE = 20;

/**
 * Mesh / Wire Gauge Chart — Mesh Count | Wire Dia (SWG/mm) | Opening (mm) | Open Area %
 * @param {{ rows: { mesh: string, swg: string, wireMm: number, opening: number, openArea: number }[], overview?: { meshRange: string, openingRange: { min: string, max: string }, material: string, orderType: string }, inView?: boolean }} props
 */
export default function MeshGaugeChart({ rows, overview, inView = true }) {
  const [showAll, setShowAll] = useState(false);
  if (!rows || rows.length === 0) return null;

  const visibleRows = showAll ? rows : rows.slice(0, PAGE_SIZE);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Grid3x3 className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Mesh &amp; Wire Gauge Chart
        </h2>
      </div>

      {overview && (
        <div className="mb-5 bg-gray-900 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {overview.meshRange}
            </span>
          </div>
          <div className="sm:border-l sm:border-white/15 sm:pl-4 flex flex-wrap gap-x-6 gap-y-1 text-xs sm:text-sm text-white/60">
            <span>
              Opening: {overview.openingRange.min} – {overview.openingRange.max}
            </span>
            <span>Material: {overview.material}</span>
            <span>{overview.orderType}</span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
        <span className="text-[11px] font-medium">Swipe to see all columns</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[520px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                Mesh
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">
                Wire Dia (SWG)
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">
                Wire Dia (mm)
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">
                Opening (mm)
              </th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide rounded-tr-xl">
                Open Area %
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row, idx) => (
              <tr
                key={`${row.mesh}-${row.wireMm}-${idx}`}
                className={`border-t border-gray-100 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs tabular-nums">
                  {row.mesh}
                </td>
                <td className="px-3 py-3 text-center text-xs text-gray-600 tabular-nums">
                  {row.swg}
                </td>
                <td className="px-3 py-3 text-center text-xs text-gray-600 tabular-nums">
                  {row.wireMm}
                </td>
                <td className="px-3 py-3 text-center text-xs text-gray-600 tabular-nums">
                  {row.opening}
                </td>
                <td className="px-3 py-3 text-center text-xs font-semibold text-brand-accent tabular-nums">
                  {row.openArea}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rows.length > PAGE_SIZE && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-3 text-xs font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors"
        >
          {showAll ? "Show fewer rows" : `Show all ${rows.length} rows`}
        </button>
      )}
    </motion.div>
  );
}
