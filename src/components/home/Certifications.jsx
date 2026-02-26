"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle, Shield, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management Systems" },
  { name: "ISO 14001:2015", desc: "Environmental Management" },
  { name: "AS9100D", desc: "Aerospace Quality Standard" },
];

const qualityChecks = [
  "Chemical composition analysis",
  "Mechanical property testing",
  "Dimensional accuracy verification",
  "Surface quality inspection",
  "Traceability documentation",
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,31,46,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />

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
              Certifications
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
            Quality <span className="text-brand-accent">Assurance</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
          >
            Our commitment to quality is validated by international
            certifications and rigorous testing protocols.
          </motion.p>
        </div>

        {/* Two column: Image + Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
          className="bg-white border border-gray-100 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px]">
              <Image
                src="/images/hero/hero-slide-1.png"
                alt="Uday Aluminium Manufacturing Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
            </div>

            {/* Content side */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Certifications list */}
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-5 h-5 text-brand-accent" />
                <h3 className="text-base sm:text-lg font-bold text-brand-primary">
                  Certifications
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-primary">
                        {cert.name}
                      </p>
                      <p className="text-xs text-gray-400">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quality checks */}
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-brand-accent" />
                <h3 className="text-base sm:text-lg font-bold text-brand-primary">
                  Quality Commitment
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                Every aluminium product undergoes comprehensive testing before
                delivery.
              </p>

              <ul className="space-y-2">
                {qualityChecks.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
