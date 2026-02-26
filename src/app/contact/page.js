"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  Upload,
  CheckCircle,
  AlertCircle,
  Globe,
  Headphones,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { productSeries } from "@/data/productSeries";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().optional(),
  industry: z.string().min(1, "Please select an industry"),
  productInterest: z.string().min(1, "Please select a product interest"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  quantity: z.string().optional(),
  specifications: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.string().min(1, "Please select preferred contact method")
});

const industries = [
  "Aerospace & Defense",
  "Automotive",
  "Marine & Shipbuilding",
  "Construction & Architecture",
  "Electrical & Electronics",
  "Food & Pharmaceutical",
  "Chemical Processing",
  "Sports & Recreation",
  "Other"
];

const inquiryTypes = [
  "Product Inquiry",
  "Quote Request",
  "Technical Support",
  "Partnership Opportunity",
  "Quality Certification",
  "Bulk Order",
  "Custom Requirements",
  "General Information"
];

const contactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
  { value: "both", label: "Both Email & Phone" }
];

const officeLocations = [
  {
    name: "Head Office & Manufacturing",
    address: "Industrial Area, Phase-2\nManufacturing District\nState, PIN - 123456",
    phone: "+91 12345 67890",
    email: "info@udayaluminium.com",
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM"
  },
  {
    name: "Sales & Technical Support",
    address: "Business Complex, Tower A\nCommercial Hub\nState, PIN - 123457",
    phone: "+91 09876 54321",
    email: "sales@udayaluminium.com",
    hours: "Monday - Friday: 8:30 AM - 7:00 PM"
  }
];

function ContactPageInner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productInterest: "",
      inquiryType: "Product Inquiry",
      preferredContact: "email"
    }
  });

  // Pre-fill form based on URL parameters
  useEffect(() => {
    const series = searchParams.get("series");
    if (series) {
      setValue("productInterest", series);
      setValue("inquiryType", "Quote Request");
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form data:", { ...data, file: selectedFile });
      setSubmitStatus("success");
      reset();
      setSelectedFile(null);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-light overflow-hidden py-20 sm:py-28 lg:py-36">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <div className="h-px w-6 bg-brand-accent/60" />
              <span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
                Contact Us
              </span>
              <div className="h-px w-6 bg-brand-accent/60" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight tracking-tight mb-4 sm:mb-6"
            >
              Get in <span className="text-brand-accent">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed font-light max-w-2xl mx-auto"
            >
              Ready to discuss your aluminium requirements? Our technical experts
              are here to help you find the perfect solution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-6">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          {...register("firstName")}
                          className={errors.firstName ? "border-red-500" : ""}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          {...register("lastName")}
                          className={errors.lastName ? "border-red-500" : ""}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                          placeholder="john.doe@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className={errors.phone ? "border-red-500" : ""}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <Input
                          id="company"
                          type="text"
                          {...register("company")}
                          className={errors.company ? "border-red-500" : ""}
                          placeholder="Company Inc."
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <Input
                          id="jobTitle"
                          type="text"
                          {...register("jobTitle")}
                          placeholder="Engineering Manager"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          {...register("industry")}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
                            errors.industry ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select your industry</option>
                          {industries.map(industry => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                        {errors.industry && (
                          <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                          Product Interest *
                        </label>
                        <select
                          id="productInterest"
                          {...register("productInterest")}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
                            errors.productInterest ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select a product series</option>
                          {productSeries.map((series) => (
                            <option key={series.id} value={series.id}>
                              {series.name} - {series.subtitle}
                            </option>
                          ))}
                          <option value="multiple">Multiple Series</option>
                          <option value="custom">Custom Requirements</option>
                          <option value="general">General Inquiry</option>
                        </select>
                        {errors.productInterest && (
                          <p className="text-red-500 text-sm mt-1">{errors.productInterest.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Inquiry Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          {...register("inquiryType")}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
                            errors.inquiryType ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          {inquiryTypes.map(type => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.inquiryType && (
                          <p className="text-red-500 text-sm mt-1">{errors.inquiryType.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Quantity
                        </label>
                        <Input
                          id="quantity"
                          type="text"
                          {...register("quantity")}
                          placeholder="e.g., 500 MT/month"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          {...register("timeline")}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (Within 1 month)</option>
                          <option value="short">Short-term (1-3 months)</option>
                          <option value="medium">Medium-term (3-6 months)</option>
                          <option value="long">Long-term (6+ months)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Contact Method *
                        </label>
                        <select
                          id="preferredContact"
                          {...register("preferredContact")}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
                            errors.preferredContact ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          {contactMethods.map(method => (
                            <option key={method.value} value={method.value}>
                              {method.label}
                            </option>
                          ))}
                        </select>
                        {errors.preferredContact && (
                          <p className="text-red-500 text-sm mt-1">{errors.preferredContact.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="specifications" className="block text-sm font-medium text-gray-700 mb-2">
                        Technical Specifications
                      </label>
                      <textarea
                        id="specifications"
                        rows="3"
                        {...register("specifications")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="Please provide any specific requirements, dimensions, or technical specifications..."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        {...register("message")}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Please describe your requirements, questions, or how we can help you..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Attach Files (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-brand-accent transition-colors duration-300">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF, DOC, XLS, or Image files (Max 10MB)
                          </p>
                        </label>
                        {selectedFile && (
                          <p className="text-sm text-brand-accent mt-2">
                            Selected: {selectedFile.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Status */}
                    {submitStatus === "success" && (
                      <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <p className="text-green-700 text-sm">
                          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                        <p className="text-red-700 text-sm">
                          Sorry, there was an error sending your message. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-brand-accent/10 rounded-lg">
                        <Phone className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-1">Phone</h4>
                        <p className="text-gray-600">+91 12345 67890</p>
                        <p className="text-gray-600">+91 09876 54321</p>
                        <p className="text-sm text-gray-500 mt-1">24/7 Technical Support</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-brand-accent/10 rounded-lg">
                        <Mail className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-1">Email</h4>
                        <p className="text-gray-600">info@udayaluminium.com</p>
                        <p className="text-gray-600">sales@udayaluminium.com</p>
                        <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-brand-accent/10 rounded-lg">
                        <Clock className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-1">Business Hours</h4>
                        <p className="text-gray-600">Monday - Saturday</p>
                        <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-gray-500 mt-1">Sunday: Emergency Support Only</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-brand-accent/10 rounded-lg">
                        <Globe className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-1">Global Reach</h4>
                        <p className="text-gray-600">Serving clients worldwide</p>
                        <p className="text-sm text-gray-500 mt-1">International shipping available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Locations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-6">
                    Office Locations
                  </h3>

                  <div className="space-y-6">
                    {officeLocations.map((office, index) => (
                      <div key={office.name} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-brand-primary mb-2">
                          {office.name}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-gray-500 mr-2" />
                            <p className="text-gray-600">{office.phone}</p>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-gray-500 mr-2" />
                            <p className="text-gray-600">{office.email}</p>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                            <p className="text-gray-600">{office.hours}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-white">
                  <h4 className="text-base font-bold mb-2">Quick Response Promise</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    We understand the urgency of your projects. Our technical team responds
                    to all inquiries within 24 hours with detailed specifications and competitive quotes.
                  </p>
                  <div className="flex items-center mt-4">
                    <CheckCircle className="h-4 w-4 text-brand-accent mr-2" />
                    <span className="text-xs sm:text-sm text-gray-300">Guaranteed response within 24 hours</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageInner />
    </Suspense>
  );
}