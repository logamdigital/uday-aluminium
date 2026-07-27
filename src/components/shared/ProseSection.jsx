"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Generic icon + heading + single paragraph block — used for narrative
 * spec content that isn't a table (Tempers, Grades overview, etc).
 * @param {{ title: string, icon?: React.ComponentType, text: string, inView?: boolean }} props
 */
export default function ProseSection({ title, icon: Icon, text, inView = true }) {
  if (!text) return null;

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
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </motion.div>
  );
}
