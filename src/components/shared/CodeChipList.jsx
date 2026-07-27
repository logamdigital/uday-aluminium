"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Standards Compliance rendered as bare code chips — for source content
 * that lists standard codes without an accompanying description.
 * @param {{ title?: string, codes: string[], inView?: boolean }} props
 */
export default function CodeChipList({ title = "Standards Compliance", codes, inView = true }) {
  if (!codes || codes.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {codes.map((code) => (
          <span
            key={code}
            className="text-xs font-mono font-semibold bg-gray-50 border border-gray-100 text-brand-primary px-3 py-2 rounded-lg"
          >
            {code}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
