"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  Search,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const filterCategories = [
  { id: "all", label: "All Applications" },
  { id: "electrical", label: "Electrical & Power" },
  { id: "construction", label: "Construction" },
  { id: "automotive", label: "Automotive" },
  { id: "industrial", label: "Industrial" },
];

const applications = [
  {
    id: "overhead-conductors",
    title: "Overhead Power Conductors",
    category: "electrical",
    series: ["1xxx", "6xxx", "8xxx"],
    description:
      "Aluminium alloy wires for ACSR, AAC, and AAAC overhead conductors used in power transmission and distribution networks.",
    benefits: ["High conductivity", "Lightweight", "Corrosion resistant"],
    icon: Zap,
    featured: true,
  },
  {
    id: "electrical-cables",
    title: "Electrical Cables & Wiring",
    category: "electrical",
    series: ["1xxx", "8xxx"],
    description:
      "High-purity aluminium alloy stranded wires for power cables, control cables, and electrical installations.",
    benefits: ["Excellent conductivity", "Flexible stranding", "Long service life"],
    icon: Zap,
    featured: true,
  },
  {
    id: "wire-mesh",
    title: "Structural Wire Mesh",
    category: "construction",
    series: ["5xxx"],
    description:
      "Welded aluminium alloy wire mesh for concrete reinforcement, fencing, safety barriers, and architectural cladding.",
    benefits: ["Corrosion resistant", "Lightweight", "Easy installation"],
    icon: Building,
    featured: true,
  },
  {
    id: "anchor-wires",
    title: "Anchor & Fastening Wires",
    category: "construction",
    series: ["1xxx", "5xxx"],
    description:
      "Precision-drawn aluminium alloy anchor wires for tie-downs, tensioning, and structural fastening in civil engineering.",
    benefits: ["High tensile strength", "Corrosion resistance", "Consistent diameter"],
    icon: Building,
    featured: false,
  },
  {
    id: "welding-wire",
    title: "Automotive Welding Wire",
    category: "automotive",
    series: ["4xxx", "5xxx"],
    description:
      "Aluminium alloy MIG/TIG welding wires for body panels, chassis components, and lightweight vehicle structures.",
    benefits: ["Porosity-free welds", "Low spatter", "High deposition rate"],
    icon: Car,
    featured: false,
  },
  {
    id: "braiding-wire",
    title: "Braiding Wire for Harnesses",
    category: "automotive",
    series: ["1xxx", "6xxx"],
    description:
      "Fine aluminium alloy braiding wires used in cable shielding, automotive harnesses, and flexible conduit applications.",
    benefits: ["Uniform diameter", "Smooth surface", "Excellent flexibility"],
    icon: Car,
    featured: false,
  },
  {
    id: "industrial-mesh",
    title: "Industrial Wire Mesh",
    category: "industrial",
    series: ["5xxx", "3xxx"],
    description:
      "Heavy-duty aluminium alloy mesh for industrial filtration, screening, ventilation grills, and equipment guards.",
    benefits: ["Chemical resistance", "Durable", "Customisable mesh sizes"],
    icon: Trophy,
    featured: false,
  },
  {
    id: "furnace-rods",
    title: "Furnace Rods & Alloy Rods",
    category: "industrial",
    series: ["1xxx", "6xxx", "8xxx"],
    description:
      "Aluminium alloy rods for furnace charging, casting, and raw material feed in downstream processing and re-melting operations.",
    benefits: ["Consistent composition", "Low impurities", "Optimised for melting"],
    icon: FlaskRound,
    featured: false,
  },
];

export default function ApplicationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const allRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuredInView = useInView(featuredRef, { once: true, margin: "-100px" });
  const allInView = useInView(allRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const filteredApplications = applications.filter((app) => {
    const matchesFilter =
      activeFilter === "all" || app.category === activeFilter;
    const matchesSearch =
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredApplications = applications.filter((app) => app.featured);

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
                Applications
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
              Aluminium Alloy{" "}
              <span className="text-brand-accent">Applications</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
            >
              Discover the diverse applications of our aluminium alloy products —
              from electrical power conductors to construction mesh, automotive
              welding wire to industrial rods.
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
                  Discuss Requirements
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-primary/15 text-brand-primary hover:bg-brand-primary hover:text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
                asChild
              >
                <Link href="/products">View Products</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Applications ── */}
      <section ref={featuredRef} className="relative py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={featuredInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <div className="h-px w-6 bg-brand-accent/60" />
              <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
                Featured
              </span>
              <div className="h-px w-6 bg-brand-accent/60" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={featuredInView ? "visible" : "hidden"}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary leading-tight tracking-tight mb-4"
            >
              Featured <span className="text-brand-accent">Applications</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {featuredApplications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={app.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={featuredInView ? "visible" : "hidden"}
                  custom={2 + index}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-[10px] text-gray-400 font-medium">Featured</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-2">
                    {app.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {app.series.map((series) => (
                      <span
                        key={series}
                        className="text-[10px] sm:text-xs bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded font-mono font-medium"
                      >
                        {series}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {app.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-500"
                      >
                        <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
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

      {/* ── All Applications with Filter ── */}
      <section ref={allRef} className="relative py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={allInView ? "visible" : "hidden"}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary leading-tight tracking-tight mb-6"
            >
              All <span className="text-brand-accent">Applications</span>
            </motion.h2>

            {/* Search */}
            <div className="relative max-w-md mx-auto mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-100 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/30 transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {filterCategories.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                    activeFilter === filter.id
                      ? "bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20"
                      : "bg-white text-gray-500 border-gray-100 hover:border-brand-accent/20 hover:text-brand-primary"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredApplications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={app.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={allInView ? "visible" : "hidden"}
                  custom={2 + index}
                  className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-brand-accent/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-brand-accent" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-brand-primary">
                      {app.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {app.series.map((series) => (
                      <span
                        key={series}
                        className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono"
                      >
                        {series}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredApplications.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-300" />
              </div>
              <p className="text-gray-400 text-sm sm:text-base font-light">
                No applications found matching your criteria.
              </p>
            </div>
          )}
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
              Custom Solutions
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
            Don't See Your{" "}
            <span className="text-brand-accent">Application</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Our technical team can help you find the perfect aluminium solution
            for your specific application requirements.
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
                Discuss Your Application
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
              asChild
            >
              <Link href="/products">Browse All Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
