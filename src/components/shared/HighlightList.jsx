"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Generic bullet highlight list — used for Key Technical Advantages,
 * Typical Applications, etc.
 * @param {{ title: string, icon?: React.ComponentType, items: string[], columns?: 1 | 2, inView?: boolean }} props
 */
export default function HighlightList({ title, icon: Icon, items, columns = 1, inView = true }) {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-5 h-5 text-brand-accent" />}
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">{title}</h2>
      </div>

      <div className={`grid grid-cols-1 ${columns === 2 ? "lg:grid-cols-2" : ""} gap-2.5`}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-accent/20 transition-colors duration-200"
          >
            <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
