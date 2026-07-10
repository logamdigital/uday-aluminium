"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  quantity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Direct product-page inquiry form (lead capture) — not a link to the
 * generic /contact page.
 * @param {{ productName: string }} props
 */
export default function ProductInquiryForm({ productName }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Product inquiry:", { product: productName, ...data });
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
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
        Request a Quote for {productName}
      </h2>

      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="inq-name" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5">
                Full Name *
              </label>
              <Input
                id="inq-name"
                type="text"
                {...register("name")}
                className={`rounded-xl border-gray-200 focus:border-brand-accent/30 focus:ring-brand-accent/30 ${errors.name ? "border-red-400" : ""}`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="inq-phone" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5">
                Phone Number *
              </label>
              <Input
                id="inq-phone"
                type="tel"
                {...register("phone")}
                className={`rounded-xl border-gray-200 focus:border-brand-accent/30 focus:ring-brand-accent/30 ${errors.phone ? "border-red-400" : ""}`}
                placeholder="+91 12345 67890"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="inq-email" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5">
              Email Address *
            </label>
            <Input
              id="inq-email"
              type="email"
              {...register("email")}
              className={`rounded-xl border-gray-200 focus:border-brand-accent/30 focus:ring-brand-accent/30 ${errors.email ? "border-red-400" : ""}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="inq-quantity" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5">
              Estimated Quantity
            </label>
            <Input
              id="inq-quantity"
              type="text"
              {...register("quantity")}
              className="rounded-xl border-gray-200 focus:border-brand-accent/30 focus:ring-brand-accent/30"
              placeholder="e.g. 500 kg / month"
            />
          </div>

          <div>
            <label htmlFor="inq-message" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5">
              Requirement Details *
            </label>
            <textarea
              id="inq-message"
              rows="4"
              {...register("message")}
              className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/30 transition-all ${errors.message ? "border-red-400" : "border-gray-200"}`}
              placeholder={`Diameter, temper, standard, quantity for ${productName}...`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <p className="text-emerald-700 text-xs sm:text-sm">
                Thank you! Your inquiry has been received. We&apos;ll respond within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
              <p className="text-red-600 text-xs sm:text-sm">
                Sorry, there was an error. Please try again or contact us directly.
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-white py-5 px-8 text-sm sm:text-base font-semibold rounded-xl border-0 shadow-[0_0_20px_rgba(255,107,53,0.2)] hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] transition-all duration-300"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <span className="flex items-center justify-center">
                <Send className="mr-2 h-4 w-4" />
                Send Inquiry
              </span>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
