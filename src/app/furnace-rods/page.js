"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Factory,
  Settings,
  CheckCircle,
  Thermometer,
  Zap,
  Shield,
  ArrowRight,
  Clock,
  Award,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const processSteps = [
  {
    step: "01",
    title: "Raw Material Preparation",
    description: "Careful selection and preparation of primary aluminum and alloying elements according to series specifications.",
    icon: Settings
  },
  {
    step: "02",
    title: "Furnace Melting",
    description: "High-temperature melting in advanced furnaces with precise temperature control and atmosphere management.",
    icon: Flame
  },
  {
    step: "03",
    title: "Alloy Composition",
    description: "Accurate addition of alloying elements to achieve desired chemical composition and properties.",
    icon: Factory
  },
  {
    step: "04",
    title: "Quality Testing",
    description: "Comprehensive testing of chemical composition, temperature, and melt quality before casting.",
    icon: CheckCircle
  },
  {
    step: "05",
    title: "Rod Casting",
    description: "Continuous casting process to produce high-quality aluminum rods with consistent dimensions.",
    icon: Target
  }
];

const specifications = [
  {
    parameter: "Temperature Range",
    value: "650°C - 750°C",
    icon: Thermometer
  },
  {
    parameter: "Production Capacity",
    value: "500 MT/Month",
    icon: Factory
  },
  {
    parameter: "Rod Diameters",
    value: "6mm - 50mm",
    icon: Settings
  },
  {
    parameter: "Length Options",
    value: "3m - 12m",
    icon: ArrowRight
  },
  {
    parameter: "Cycle Time",
    value: "4-6 Hours",
    icon: Clock
  },
  {
    parameter: "Quality Grade",
    value: "Industrial Premium",
    icon: Award
  }
];

const features = [
  {
    title: "Advanced Furnace Technology",
    description: "State-of-the-art melting furnaces with precise temperature control and energy efficiency.",
    icon: Flame
  },
  {
    title: "Continuous Production",
    description: "24/7 production capability ensuring consistent supply and shorter lead times.",
    icon: Clock
  },
  {
    title: "Quality Assurance",
    description: "Real-time monitoring and testing throughout the production process.",
    icon: Shield
  },
  {
    title: "Custom Specifications",
    description: "Ability to produce rods according to specific customer requirements and standards.",
    icon: Settings
  }
];

export default function FurnaceRodsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-brand-primary to-brand-accent overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/furnace-1.svg"
            alt="Furnace Operations"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Furnace Operations & Rod Production
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              State-of-the-art aluminum melting and casting facilities producing premium quality rods
              across all series with precision and consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-primary hover:bg-gray-100"
              >
                <Factory className="mr-2 h-5 w-5" />
                View Process
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-primary"
                asChild
              >
                <Link href="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Our Production Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive five-step process ensuring the highest quality aluminum rods
              from raw materials to finished products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-accent text-white rounded-lg flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <IconComponent className="h-6 w-6 text-brand-accent mr-2" />
                          <h3 className="text-lg font-semibold text-brand-primary">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our furnace operations meet the highest industry standards with precise
              control and consistent output quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <motion.div
                  key={spec.parameter}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-brand-accent/10 rounded-full">
                        <IconComponent className="h-8 w-8 text-brand-accent" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-brand-primary mb-2">
                      {spec.parameter}
                    </h3>
                    <p className="text-2xl font-bold text-brand-accent mb-1">
                      {spec.value}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Why Choose Our Furnace Operations?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced technology, proven processes, and unwavering commitment to quality
              make us the preferred choice for aluminum rod production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-brand-accent/10 rounded-lg">
                          <IconComponent className="h-8 w-8 text-brand-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-primary mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Our technical team is ready to help you find the perfect aluminum rod solution
              for your specific application and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white"
                asChild
              >
                <Link href="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Technical Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-primary"
                asChild
              >
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}