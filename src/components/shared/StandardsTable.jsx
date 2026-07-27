"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Standards Compliance Table
 * @param {{ standards: { code: string, name: string }[], inView?: boolean }} props
 */
export default function StandardsTable({ standards, inView = true }) {
  if (!standards || standards.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Standards Compliance
        </h2>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[420px]">
          <thead>
            <tr className="bg-brand-primary text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tl-xl">
                Standard
              </th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide rounded-tr-xl">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {standards.map((row, idx) => (
              <tr
                key={row.code}
                className={`border-t border-gray-100 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                } hover:bg-brand-accent/5`}
              >
                <td className="px-4 py-3 font-mono font-bold text-brand-primary text-xs whitespace-nowrap">
                  {row.code}
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
