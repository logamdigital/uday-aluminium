"use client";

import { motion } from "framer-motion";
import { Waves } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Weave Types block.
 * @param {{ types: { name: string, description: string }[], inView?: boolean }} props
 */
export default function WeaveTypesBlock({ types, inView = true }) {
  if (!types || types.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Waves className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">
          Types of Weave
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {types.map((type) => (
          <div
            key={type.name}
            className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-brand-accent/20 transition-colors"
          >
            <span className="inline-block bg-brand-accent text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
              {type.name}
            </span>
            <p className="text-xs text-gray-500 leading-relaxed">{type.description}</p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-gray-400 mt-3">
        Additional weave patterns (e.g. Twill, Dutch weave) pending further reference material.
      </p>
    </motion.div>
  );
}
