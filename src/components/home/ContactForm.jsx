"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { productSeries } from "@/data/productSeries";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  productInterest: z.string().min(1, "Please select a product interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,31,46,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
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
              Contact Us
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
            Get in <span className="text-brand-accent">Touch</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light"
          >
            Ready to discuss your aluminium requirements? Contact us for expert
            consultation and competitive quotes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`rounded-xl border-gray-200 focus:border-brand-accent/30 focus:ring-brand-accent/30 ${
                      errors.name ? "border-red-400" : ""
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`rounded-xl border-gray-200 focus:border-brand-accent/30 focus:ring-brand-accent/30 ${
                      errors.email ? "border-red-400" : ""
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`rounded-xl border-gray-200 focus:border-brand-accent/30 focus:ring-brand-accent/30 ${
                      errors.phone ? "border-red-400" : ""
                    }`}
                    placeholder="+91 12345 67890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5"
                  >
                    Product Interest *
                  </label>
                  <select
                    id="productInterest"
                    {...register("productInterest")}
                    className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/30 transition-all ${
                      errors.productInterest
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  >
                    <option value="">Select a product series</option>
                    {productSeries.map((series) => (
                      <option key={series.id} value={series.id}>
                        {series.name} - {series.subtitle}
                      </option>
                    ))}
                    <option value="custom">Custom Requirements</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.productInterest && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.productInterest.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register("message")}
                    className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/30 transition-all ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="Please describe your requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <p className="text-emerald-700 text-xs sm:text-sm">
                      Thank you! Your message has been sent. We'll respond
                      within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                    <p className="text-red-600 text-xs sm:text-sm">
                      Sorry, there was an error. Please try again or contact us
                      directly.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white py-5 text-sm sm:text-base font-semibold rounded-xl border-0 shadow-[0_0_20px_rgba(255,107,53,0.2)] hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={4}
            className="space-y-5"
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    lines: [
                      "Industrial Area, Phase-2",
                      "Manufacturing District",
                      "State, PIN - 123456",
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+91 12345 67890", "+91 09876 54321"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: [
                      "info@udayaluminium.com",
                      "sales@udayaluminium.com",
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    lines: [
                      "Monday - Saturday: 9:00 AM - 6:00 PM",
                      "Sunday: Closed",
                    ],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-brand-primary mb-0.5">
                        {item.title}
                      </h4>
                      {item.lines.map((line, idx) => (
                        <p
                          key={idx}
                          className="text-xs sm:text-sm text-gray-500"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-white">
              <h4 className="text-base font-bold mb-2">
                Quick Response Promise
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Our technical team responds to all inquiries within 24 hours
                with detailed specifications and competitive quotes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
