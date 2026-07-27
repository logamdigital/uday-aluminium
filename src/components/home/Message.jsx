"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  Users,
  Factory,
  BadgeDollarSign,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const advantages = [
  { title: "40+ Years Group Experience", icon: Clock },
  { title: "Strong Customer Base", icon: Users },
  { title: "Manufacturing Expertise", icon: Factory },
  { title: "Cost Competitive", icon: BadgeDollarSign },
  { title: "Quality Focused", icon: ShieldCheck },
  { title: "Gujarat Location Advantage", icon: MapPin },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Message() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-16 bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-brand-accent/5 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,_rgba(26,31,46,0.15)_1px,_transparent_0)] bg-[length:40px_40px]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="h-px w-6 bg-brand-accent/60" />
            <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
              Message from Management
            </span>
            <div className="h-px w-6 bg-brand-accent/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
            Leadership Statement
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-12 shadow-lg shadow-slate-200/50"
        >
          <p className="text-lg sm:text-xl leading-8 text-slate-700 font-medium">
            “Quality is not just a commitment; it is the foundation of our
            business. Backed by the legacy of Urmila Group and Uday Wire Pvt. Ltd.,
            Uday Aluminum aims to deliver world-class aluminum products with
            consistency, reliability and customer trust.”
          </p>

          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-accent font-semibold">
                Executive Management
              </p>
              <p className="text-base text-slate-500">Uday Aluminium</p>
            </div>
            <div className="rounded-full border border-brand-accent/20 bg-white px-4 py-2 text-sm text-brand-accent font-semibold shadow-sm">
              Quality. Reliability. Trust.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
          className="mx-auto mt-16 sm:mt-20 max-w-5xl"
        >
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary">
              Competitive Advantages
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {advantages.map(({ title, icon: Icon }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={idx * 0.5}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:border-brand-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                  <Icon className="h-5 w-5 text-brand-accent" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-brand-primary">
                  {title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
