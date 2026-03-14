"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "ISO Certified",
    desc: "International quality standards across all processes",
    icon: Shield,
  },
  {
    title: "Growing Reach",
    desc: "Supplying quality aluminium alloy products across India and international markets",
    icon: Globe,
  },
  {
    title: "Expert Team",
    desc: "Skilled engineers and metallurgists driving innovation",
    icon: Users,
  },
  {
    title: "Quality Assured",
    desc: "Committed to excellence in aluminium alloy manufacturing at every production stage",
    icon: Award,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,31,46,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Accent glows */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <div className="h-px w-6 bg-brand-accent/60" />
            <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
              About Us
            </span>
            <div className="h-px w-6 bg-brand-accent/60" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Aluminium &amp; AL Alloy
            <span className="text-brand-accent"> Wires Manufacturer</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
          >
            Uday Aluminium is a leading manufacturer of aluminium and aluminium alloy wires,
            wire mesh, wire rods, welding wire, braiding wire, anchor wire, and zinc coating wires —
            supplying industries across India and worldwide.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left — Text Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-brand-accent to-brand-accent/0" />
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  With state-of-the-art drawing and manufacturing facilities and
                  rigorous quality control processes, we ensure that every wire,
                  mesh and rod product meets the highest international standards.
                  Our range covers pure aluminium through high-strength alloy grades
                  including 5154 mesh, 6201/6061/AL59 overhead conductor rods,
                  welding wire, rivet wire, braiding wire, anchor wire, and zinc coating wires.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-brand-accent to-brand-accent/0" />
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  At Uday Aluminium, we don&apos;t just supply wire products — we
                  provide precision-engineered solutions trusted by cable manufacturers,
                  construction companies, OEMs and fabricators worldwide. Our commitment
                  to quality has made us a reliable partner across diverse industries.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm sm:text-base hover:gap-3 transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right — Feature Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={4 + i}
                className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-4 sm:p-6 hover:bg-white hover:border-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/5 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-accent/5 via-transparent to-transparent" />
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
