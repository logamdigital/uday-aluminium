"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Overview section — heading plus editorial accent-bar paragraphs
 * (same left accent-bar treatment as the homepage About section).
 * @param {{ title?: string, paragraphs: string[], inView?: boolean }} props
 */
export default function OverviewSection({ title = "Overview", paragraphs, inView = true }) {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-brand-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-brand-primary">{title}</h2>
      </div>
      <div className="space-y-4">
        {paragraphs.map((paragraph, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-brand-accent to-brand-accent/0" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
