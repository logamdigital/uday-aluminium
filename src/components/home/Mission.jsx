"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Zap, Users, Award, Check, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const missionData = {
	mission: {
		title: "Our Mission",
		icon: Target,
		description: "",
		points: [
			"Deliver quality products",
			"Ensure customer satisfaction",
			"Invest in technology",
			"Create sustainable growth",
		],
	},
	vision: {
		title: "Our Vision",
		icon: Eye,
		description:
			"To become a trusted manufacturer of aluminum wire rods, serving power and industrial sectors globally.",
	},
	values: [
		{
			title: "Quality",
			icon: Award,
			description: "Precision and consistent quality are central to every product we ship.",
		},
		{
			title: "Integrity",
			icon: Shield,
			description: "Honest communication and ethical operations guide our business every day.",
		},
		{
			title: "Reliability",
			icon: Check,
			description: "Customers can count on dependable delivery and performance from our products.",
		},
		{
			title: "Innovation",
			icon: Zap,
			description: "We modernize processes and products to stay ahead in a competitive industry.",
		},
		{
			title: "Customer First",
			icon: Users,
			description: "Our solutions are built around customer needs and practical results.",
		},
		{
			title: "Sustainability",
			icon: Heart,
			description: "We focus on responsible manufacturing and lasting industry impact.",
		},
	],
};

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
	}),
};

const scaleIn = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: (i = 0) => ({
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
	}),
};

export default function Mission() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-brand-light overflow-hidden"
		>
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full opacity-50 blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
			<div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/5 rounded-full opacity-50 blur-3xl translate-y-1/2 -translate-x-1/4"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={fadeUp}
					className="mb-16 sm:mb-20 text-center"
				>
					<div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
							<div className="h-px w-6 bg-brand-accent/60" />
							<span className="text-xs sm:text-sm font-medium text-brand-accent tracking-widest uppercase">
								What Drives Us
							</span>
							<div className="h-px w-6 bg-brand-accent/60" />
						</div>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary mb-4">
						Our Mission, Vision & Values
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl mx-auto">
						Guided by our core principles, we drive excellence in aluminium
						manufacturing and sustainable innovation.
					</p>
				</motion.div>

				{/* Mission & Vision Cards */}
				<div className="grid md:grid-cols-2 gap-8 mb-16 sm:mb-20">
					{/* Mission Card */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={scaleIn}
						custom={0}
						className="relative group"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary/90 rounded-lg sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
						<div className="relative bg-brand-primary rounded-lg sm:rounded-2xl p-8 sm:p-10 text-white overflow-hidden">
							{/* Icon background */}
							<div className="absolute -right-12 -bottom-12 w-40 h-40 bg-brand-accent/10 rounded-full"></div>

							<div className="relative z-10">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-3 bg-brand-accent/20 rounded-lg">
										<Target className="w-6 h-6 text-brand-accent" />
									</div>
									<h3 className="text-3xl sm:text-4xl font-bold">
										{missionData.mission.title}
									</h3>
								</div>

								<p className="text-slate-200 mb-6 leading-relaxed">
									{missionData.mission.description}
								</p>

								<ul className="space-y-3">
									{missionData.mission.points.map((point, idx) => (
										<li
											key={idx}
											className="flex items-start gap-3 text-slate-300"
										>
											<Check className="w-4 h-4 text-brand-accent mt-1 shrink-0" />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>

					{/* Vision Card */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={scaleIn}
						custom={1}
						className="relative group"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-brand-accent to-brand-accent/90 rounded-lg sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
						<div className="relative bg-gradient-to-br from-brand-accent to-brand-accent/90 rounded-lg sm:rounded-2xl p-8 sm:p-10 text-white overflow-hidden">
							{/* Icon background */}
							<div className="absolute -right-12 -bottom-12 w-40 h-40 bg-brand-accent/20 rounded-full"></div>

							<div className="relative z-10">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-3 bg-white rounded-lg">
										<Eye className="w-6 h-6 text-brand-accent" />
									</div>
									<h3 className="text-3xl sm:text-4xl font-bold">
										{missionData.vision.title}
									</h3>
								</div>

								<p className="text-white/90 leading-relaxed">
									{missionData.vision.description}
								</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Values Section */}
				<motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
					<h3 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-12 sm:mb-16 text-center">
						Our Core Values
					</h3>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{missionData.values.map((value, idx) => {
							const Icon = value.icon;
							return (
								<motion.div
									key={idx}
									initial="hidden"
									animate={isInView ? "visible" : "hidden"}
									variants={scaleIn}
									custom={idx}
									className="group"
								>
									<div className="h-full bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-accent/30">
										<div className="w-14 h-14 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
											<Icon className="w-7 h-7 text-brand-accent" />
										</div>

										<h4 className="text-xl font-semibold text-brand-primary">
											{value.title}
										</h4>
										<p className="text-sm text-slate-600 leading-relaxed mt-2">
											{value.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={fadeUp}
					custom={4}
					className="mt-16 sm:mt-20 text-center"
				>
					<p className="text-gray-500 mb-6">
						Want to learn more about our commitment to excellence?
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-accent transition-all duration-300 font-semibold"
					>
						Get In Touch
						<ArrowRight className="w-4 h-4" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
