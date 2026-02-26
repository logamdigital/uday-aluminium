"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Plane,
  Car,
  Ship,
  Building,
  Zap,
  Utensils,
  FlaskRound,
  Trophy,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Globe,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/productSeries";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const industryStats = [
  { number: "50+", label: "Industries Served" },
  { number: "30+", label: "Countries Served" },
  { number: "25+", label: "Years Experience" },
  { number: "99.8%", label: "Client Satisfaction" },
];

const caseStudies = [
  {
    industry: "Aerospace",
    title: "Commercial Aircraft Fuselage Components",
    challenge:
      "Lightweight, high-strength materials for next-generation aircraft design",
    solution:
      "7xxx series aluminum with specialized heat treatment for optimal strength-to-weight ratio",
    results: [
      "30% weight reduction",
      "25% improved fuel efficiency",
      "Enhanced safety margins",
    ],
    series: ["7075", "7050"],
  },
  {
    industry: "Automotive",
    title: "Electric Vehicle Body Panels",
    challenge: "Sustainable, lightweight materials for EV manufacturing",
    solution:
      "6xxx series aluminum with enhanced formability and crash performance",
    results: [
      "40% lighter than steel",
      "100% recyclable",
      "Improved range efficiency",
    ],
    series: ["6061", "6082"],
  },
  {
    industry: "Marine",
    title: "Naval Vessel Hull Construction",
    challenge: "Corrosion-resistant materials for harsh marine environments",
    solution:
      "5xxx series aluminum with superior saltwater corrosion resistance",
    results: [
      "50-year service life",
      "Reduced maintenance costs",
      "Enhanced durability",
    ],
    series: ["5083", "5086"],
  },
];

const iconMap = {
  Plane,
  Car,
  Ship,
  Building,
  Zap,
  Utensils,
  FlaskRound,
  Trophy,
};

export default function IndustriesPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const gridRef = useRef(null);
  const caseRef = useRef(null);
  const whyRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const caseInView = useInView(caseRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section
        ref={heroRef}
        className="relative bg-brand-light overflow-hidden py-20 sm:py-28 lg:py-36"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,31,46,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,31,46,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <div className="h-px w-6 bg-brand-accent/60" />
              <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
                Industries
              </span>
              <div className="h-px w-6 bg-brand-accent/60" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight tracking-tight mb-4 sm:mb-6"
            >
              Industries We{" "}
              <span className="text-brand-accent">Serve</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
            >
              Trusted aluminium solutions across diverse industries, from
              aerospace and automotive to marine and construction. Decades of
              expertise delivering excellence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={3}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Button
                size="lg"
                className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl border-0 shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Discuss Your Industry
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-primary/15 text-brand-primary hover:bg-brand-primary hover:text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
                asChild
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section ref={statsRef} className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                custom={index}
                className="text-center p-4 sm:p-6 bg-gray-50 border border-gray-100 rounded-2xl"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-accent mb-1">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Grid ── */}
      <section ref={gridRef} className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight mb-4"
            >
              Key <span className="text-brand-accent">Industries</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
            >
              Specialized aluminium solutions tailored for each industry sector.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon];
              return (
                <motion.div
                  key={industry.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={gridInView ? "visible" : "hidden"}
                  custom={3 + index}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-brand-primary mb-2">
                    {industry.name}
                  </h3>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {industry.relevantSeries.map((series) => (
                      <span
                        key={series}
                        className="text-[10px] sm:text-xs bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded font-mono font-medium"
                      >
                        {series}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {industry.keyBenefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-gray-500"
                      >
                        <CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-brand-accent font-semibold text-xs sm:text-sm group-hover:gap-2.5 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section ref={caseRef} className="relative py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={caseInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <div className="h-px w-6 bg-brand-accent/60" />
              <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
                Success Stories
              </span>
              <div className="h-px w-6 bg-brand-accent/60" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={caseInView ? "visible" : "hidden"}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary leading-tight tracking-tight mb-4"
            >
              Real-World <span className="text-brand-accent">Results</span>
            </motion.h2>
          </div>

          <div className="space-y-5">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                variants={fadeUp}
                initial="hidden"
                animate={caseInView ? "visible" : "hidden"}
                custom={2 + index}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="bg-brand-accent text-white px-3 py-1 rounded-lg text-xs font-bold">
                        {study.industry}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-brand-primary">
                        {study.title}
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold text-brand-primary">Challenge: </span>
                        {study.challenge}
                      </p>
                      <p>
                        <span className="font-semibold text-brand-primary">Solution: </span>
                        {study.solution}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {study.series.map((s) => (
                          <span
                            key={s}
                            className="bg-gray-900 text-white px-3 py-1 rounded-lg font-mono text-xs font-semibold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-primary mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-accent" />
                      Results
                    </h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Award className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section ref={whyRef} className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={whyInView ? "visible" : "hidden"}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary leading-tight tracking-tight mb-4"
            >
              Why Industries <span className="text-brand-accent">Choose Us</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { title: "Industry-Specific Expertise", description: "Deep understanding of each industry's unique requirements, standards, and challenges.", icon: Users },
              { title: "Custom Solutions", description: "Tailored aluminum alloys and specifications designed for your specific applications.", icon: Trophy },
              { title: "Quality Assurance", description: "Rigorous testing and certification processes ensuring compliance with industry standards.", icon: Award },
              { title: "Technical Support", description: "Dedicated engineering support throughout the project lifecycle and beyond.", icon: Zap },
              { title: "Global Supply Chain", description: "Reliable supply network serving customers worldwide with consistent delivery.", icon: Globe },
              { title: "Innovation Partnership", description: "Collaborative approach to developing next-generation aluminum solutions.", icon: TrendingUp },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate={whyInView ? "visible" : "hidden"}
                  custom={2 + index}
                  className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 hover:bg-white hover:border-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/5 transition-all duration-500"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-primary mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        ref={ctaRef}
        className="relative bg-gray-900 overflow-hidden py-16 sm:py-20 lg:py-28"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <div className="h-px w-6 bg-brand-accent/60" />
            <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
              Get Started
            </span>
            <div className="h-px w-6 bg-brand-accent/60" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={1}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Ready to <span className="text-brand-accent">Partner</span> with Us?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Join the growing number of industry leaders who trust Uday Aluminium
            for their critical aluminum alloy requirements.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={3}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl border-0 shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
              asChild
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
