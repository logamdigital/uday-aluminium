"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Shield,
  Award,
  Zap,
  Users,
  Globe,
  DollarSign,
  Headphones,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Premium Quality Alloys",
    description:
      "Certified high-grade aluminum alloys meeting international standards with rigorous quality checks at every stage."
  },
  {
    icon: Award,
    title: "ISO Certified Manufacturing",
    description:
      "ISO 9001:2015 certified processes ensuring consistent quality across all product lines."
  },
  {
    icon: Zap,
    title: "Advanced Furnace Technology",
    description:
      "State-of-the-art melting and casting equipment for superior products with minimal wastage."
  },
  {
    icon: Users,
    title: "Expert Technical Team",
    description:
      "Experienced metallurgists and engineers providing technical support and alloy guidance."
  },
  {
    icon: Globe,
    title: "Global Supply Network",
    description:
      "Reliable supply chain serving customers across India and worldwide with consistent delivery."
  },
  {
    icon: CheckCircle,
    title: "On-Time Delivery",
    description:
      "Commitment to meeting delivery schedules with efficient logistics and inventory management."
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description:
      "Round-the-clock assistance for all your technical queries and order tracking."
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Best value pricing without compromising on quality through optimized manufacturing."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" }
  })
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Subtle dot pattern — matching AboutSection */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,31,46,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />
      {/* Accent glows */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — matching AboutSection style */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <div className="h-px w-6 bg-brand-accent/60" />
            <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
              Why Choose Us
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
            The Uday
            <span className="text-brand-accent"> Advantage</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
          >
            Discover what sets us apart as your trusted aluminum solutions
            partner — from raw materials to finished alloys.
          </motion.p>
        </div>

        {/* Feature Grid — 2 col on md, 4 col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={3 + i}
                className="group relative bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/5 transition-all duration-500"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-accent/5 via-transparent to-transparent" />

                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-primary mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
