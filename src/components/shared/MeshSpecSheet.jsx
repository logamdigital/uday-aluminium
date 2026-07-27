"use client";

import { motion } from "framer-motion";
import { ClipboardList, ListChecks, Target, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Wire Mesh specification sheet — Overview, key/value spec table, typical
 * applications list, and recommended positioning copy.
 * @param {{
 *   overview?: string,
 *   advantages?: string[],
 *   alloyGrade?: { grade: string, alloyFamily: string, typicalComposition: string, typicalUse: string }[],
 *   specRows?: { label: string, value: string }[],
 *   applications?: string[],
 *   positioning?: string,
 *   inView?: boolean
 * }} props
 */
export default function MeshSpecSheet({
  overview,
  advantages,
  alloyGrade,
  specRows,
  applications,
  positioning,
  inView = true,
}) {
  if (!specRows || specRows.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {(overview || (advantages && advantages.length > 0)) && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="w-5 h-5 text-brand-accent" />
            <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
              Overview
            </h2>
          </div>
          {overview && (
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{overview}</p>
          )}
          {advantages && advantages.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {alloyGrade && alloyGrade.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-brand-accent" />
            <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
              Alloy / Grade
            </h2>
          </div>

          <div className="flex items-center gap-1.5 mb-2 sm:hidden text-gray-400">
            <span className="text-[11px] font-medium">Swipe to see all columns</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                    Grade
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">
                    Alloy Family
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">
                    Typical Composition / Notes
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tr-xl">
                    Typical Use
                  </th>
                </tr>
              </thead>
              <tbody>
                {alloyGrade.map((row, idx) => (
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
                      {row.alloyFamily}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600 leading-relaxed">
                      {row.typicalComposition}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600 leading-relaxed">
                      {row.typicalUse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
          Specification
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm border-collapse min-w-[420px]">
            <tbody>
              {specRows.map((row, idx) => (
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
      </div>

      {applications && applications.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ListChecks className="w-5 h-5 text-brand-accent" />
            <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
              Typical Applications / Usage
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {applications.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {positioning && (
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-brand-accent" />
            <h3 className="text-sm font-bold text-brand-primary">
              Recommended Product Positioning
            </h3>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{positioning}</p>
        </div>
      )}
    </motion.div>
  );
}
