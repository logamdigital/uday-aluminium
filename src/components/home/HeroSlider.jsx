"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Floating particle component
function FloatingParticle({ delay, duration, x, y, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-brand-accent/20 blur-[1px] hidden sm:block"
      style={{ width: size, height: size }}
      initial={{ x, y, opacity: 0 }}
      animate={{
        y: [y, y - 120, y],
        x: [x, x + 30, x - 20, x],
        opacity: [0, 0.6, 0.4, 0],
        scale: [0.5, 1, 0.8, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Slide data
const slides = [
  {
    image: "/images/hero/hero-slide-1.png",
    mobileImage: "/images/hero/image.png",
    alt: "Uday Aluminium Hot Extrusion Process",
    badge: "India\u2019s Premier Aluminium Manufacturer",
    heading: ["Built to Perform.", "Crafted to Last."],
    subtitle: "Premium Aluminium Alloys for Every Industry",
    description:
      "From aerospace-grade billets to precision-engineered extrusions, we supply high-performance aluminium alloys trusted by industries across 50+ countries worldwide.",
    cta: { primary: "Explore Products", secondary: "Request a Quote" },
  },
  {
    image: "/images/hero/hero-slide-2.png",
    mobileImage: "/images/hero/image copy.png",
    alt: "Aluminium Coils Global Delivery",
    badge: "Trusted by 1000+ Global Partners",
    heading: ["Strength in Every", "Alloy We Create."],
    subtitle: "Engineering Excellence Since 1998",
    description:
      "State-of-the-art manufacturing with rigorous quality control at every step. ISO certified processes delivering consistent, world-class aluminium products.",
    cta: { primary: "View Capabilities", secondary: "Contact Us" },
  },
];

const SLIDE_DURATION = 6000;

const particles = [
  { delay: 0, duration: 6, x: "10%", y: "20%", size: 6 },
  { delay: 1.5, duration: 8, x: "80%", y: "30%", size: 8 },
  { delay: 3, duration: 7, x: "20%", y: "70%", size: 5 },
  { delay: 0.5, duration: 9, x: "70%", y: "60%", size: 7 },
  { delay: 2, duration: 6.5, x: "50%", y: "15%", size: 4 },
  { delay: 4, duration: 7.5, x: "90%", y: "80%", size: 6 },
  { delay: 1, duration: 8.5, x: "30%", y: "85%", size: 5 },
  { delay: 2.5, duration: 6, x: "60%", y: "40%", size: 4 },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(springX, [0, 1], [-8, 8]);
  const bgY = useTransform(springY, [0, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const goToSlide = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  // Auto-advance timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => clearInterval(timerRef.current);
  }, [current]);

  // Progress bar animation
  useEffect(() => {
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
      if (elapsed < SLIDE_DURATION) {
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    progressRef.current = requestAnimationFrame(tick);

    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[85svh] sm:min-h-[100svh] -mt-16 pt-16 sm:-mt-20 sm:pt-20 lg:-mt-24 lg:pt-24 flex items-center justify-center overflow-hidden bg-brand-primary"
    >
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 sm:inset-[-20px]"
          style={{ x: bgX, y: bgY }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Mobile image */}
          <Image
            src={slide.mobileImage}
            alt={slide.alt}
            fill
            className="object-cover sm:hidden"
            sizes="100vw"
            priority={current === 0}
            quality={90}
          />
          {/* Desktop image */}
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="hidden sm:block object-cover"
            sizes="100vw"
            priority={current === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] hidden sm:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,53,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Particles — hidden on small screens */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Animated Accent Line - Left */}
      <motion.div
        className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent/50 to-transparent z-[2] hidden sm:block"
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex items-center justify-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6 sm:mb-6 lg:mb-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-brand-accent/30 animate-ping" />
                    <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-accent" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-wider uppercase">
                    {slide.badge}
                  </span>
                </motion.div>

                {/* Heading */}
                <div className="mb-6 sm:mb-6 lg:mb-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                    <motion.span
                      className="block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      {slide.heading[0]}
                    </motion.span>
                    <motion.span
                      className="block mt-1 sm:mt-2"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      <span className="relative inline-block">
                        <span className="text-brand-accent">
                          {slide.heading[1].split(" ")[0]}
                        </span>
                        <motion.span
                          className="absolute -bottom-1 sm:-bottom-2 left-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-brand-accent to-brand-accent/0 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 1.0 }}
                        />
                      </span>{" "}
                      {slide.heading[1].split(" ").slice(1).join(" ")}
                    </motion.span>
                  </h1>

                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-4 lg:mt-6 justify-center"
                  >
                    <div className="h-px w-4 sm:w-8 bg-brand-accent/60" />
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light text-gray-300 tracking-wide">
                      {slide.subtitle}
                    </span>
                    <div className="h-px w-4 sm:w-8 bg-brand-accent/60" />
                  </motion.div>
                </div>

                {/* Description — hidden on very small screens */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="hidden sm:block text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  {slide.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="flex flex-row gap-2 sm:gap-4 justify-center"
                >
                  <Button
                    asChild
                    size="lg"
                    className="group relative bg-brand-accent hover:bg-brand-accent/90 text-white px-4 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-base lg:text-lg font-semibold rounded-xl shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
                  >
                    <Link href="/products" className="flex items-center justify-center">
                      <span className="relative z-10 flex items-center">
                        {slide.cta.primary}
                        <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-brand-primary px-4 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      {slide.cta.secondary}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows — smaller on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full backdrop-blur-md bg-white/8 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-brand-accent/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full backdrop-blur-md bg-white/8 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-brand-accent/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Slide Indicators with Progress */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="w-8 sm:w-10 lg:w-12 h-1 rounded-full bg-white/20 overflow-hidden">
              <motion.div
                className="h-full bg-brand-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: index === current ? `${progress * 100}%` : index < current ? "100%" : "0%",
                }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </button>
        ))}
      </div>

    </section>
  );
}
