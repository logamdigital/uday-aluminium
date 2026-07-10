"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Conductivity Spec block
 * @param {{ value: string|null, note?: string, inView?: boolean }} props
 */
export default function ConductivitySpec({ value, note, inView = true }) {
  if (!value && !note) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Electrical Conductivity
        </h2>
      </div>

      <div className="bg-gray-900 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        {value ? (
          <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
            {value}
          </span>
        ) : (
          <span className="text-lg font-semibold text-white/60">
            Not the primary spec for this product
          </span>
        )}
        {note && (
          <span className="text-xs sm:text-sm text-white/60 sm:border-l sm:border-white/15 sm:pl-4 leading-relaxed">
            {note}
          </span>
        )}
      </div>
    </motion.div>
  );
}
