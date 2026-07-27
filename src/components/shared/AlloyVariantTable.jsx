"use client";

import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Alloy Variants & Specifications table — Alloy | Composition | UTS | Yield | Elongation | Conductivity.
 * Unknown per-alloy values render as "On request" rather than being left blank.
 * @param {{
 *   title?: string,
 *   variants: { alloy: string, composition?: string, chemSymbol?: string, uts?: string, yield?: string, elongation?: string, iacs?: string }[],
 *   inView?: boolean
 * }} props
 */
export default function AlloyVariantTable({ title = "Alloy Variants & Specifications", variants, inView = true }) {
  if (!variants || variants.length === 0) return null;

  return (
    <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <div className="flex items-center gap-2 mb-4">
        <FlaskConical className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">{title}</h2>
      </div>
      <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
        <span className="text-[11px] font-medium">Swipe to see all columns</span>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">Alloy</th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">Composition</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">UTS</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">Yield</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">Elongation</th>
              <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide rounded-tr-xl">Conductivity</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((row, idx) => (
              <tr
                key={row.alloy}
                className={`border-t border-gray-100 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"} hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs">{row.alloy}</td>
                <td className="px-4 py-3 text-xs text-gray-500">{row.composition || row.chemSymbol}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.uts || <span className="text-gray-400">On request</span>}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.yield || <span className="text-gray-400">On request</span>}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.elongation || <span className="text-gray-400">On request</span>}</td>
                <td className="px-3 py-3 text-center text-xs tabular-nums">{row.iacs || <span className="text-gray-400">On request</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-gray-400 mt-2">
        Values marked &quot;On request&quot; are certified per-batch via Mill Test Certificate.
      </p>
    </motion.div>
  );
}
