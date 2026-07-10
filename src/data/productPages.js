/*
 * Structured content for the six dedicated commercial product pages (Task 2).
 * Real spec numbers are carried over from src/data/productSeries.js wherever
 * they already exist there. Anything not sourced from that data or from
 * CLAUDE.md is marked `null` / "Contact for certified test data" rather than
 * invented — see CLAUDE.md Task 2 acceptance criteria.
 */

import {
  standardsCompliance,
  sizeApplicationRange,
} from "@/data/alloyWireSpecs";

export const productPages = {
  "aluminium-busbars": {
    slug: "aluminium-busbars",
    name: "Aluminium Busbars",
    title: "Aluminium Busbars Manufacturer | Uday Aluminium",
    metaDescription:
      "Manufacturer of high-conductivity aluminium busbars (1xxx / EC grade) for switchgear, panel boards and power distribution. Standards-compliant, mill-certified.",
    tagline:
      "High-conductivity EC-grade aluminium busbars engineered for switchgear and power distribution.",
    image: "/images/series/Archive/1xxx.png",
    applications: [
      "Switchgear & panel boards",
      "Power distribution systems",
      "Transformer connections",
      "Bus duct systems",
      "Electrical substations",
      "Industrial power control panels",
    ],
    standards: standardsCompliance,
    sizeRange: sizeApplicationRange,
    mechanicalProperties: [
      { property: "Ultimate Tensile Strength (UTS)", value: null, note: "Contact for certified test data" },
      { property: "Yield Strength", value: null, note: "Contact for certified test data" },
      { property: "Elongation", value: null, note: "Contact for certified test data" },
    ],
    conductivity: {
      value: "61% IACS (min)",
      note: "EC-grade (1350 / 1050) aluminium, same base conductor grade used for our EC Grade Aluminium Wire.",
    },
    inquiryProductLabel: "Aluminium Busbars",
  },

  "ec-grade-aluminium-wire": {
    slug: "ec-grade-aluminium-wire",
    name: "EC Grade Aluminium Wire",
    title: "EC Grade Aluminium Wire Manufacturer | Uday Aluminium",
    metaDescription:
      "EC1350 electrical conductor grade aluminium wire — minimum 61% IACS conductivity, ultra-low impurity, ASTM B230 / IEC 60889 compliant.",
    tagline:
      "E-Al99.5 electrical conductor grade wire — minimum 61% IACS conductivity for overhead lines and cable manufacture.",
    image: "/images/series/Archive/1xxx.png",
    applications: [
      "Overhead transmission lines",
      "Electrical cable manufacture",
      "Bare conductor stranding",
      "ACSR (Aluminium Conductor Steel Reinforced) cores",
      "Winding & coil applications",
      "General electrical conductors",
    ],
    standards: standardsCompliance,
    sizeRange: sizeApplicationRange,
    mechanicalProperties: [
      { property: "Ultimate Tensile Strength (UTS)", value: null, note: "Contact for certified test data" },
      { property: "Yield Strength", value: null, note: "Contact for certified test data" },
      { property: "Elongation", value: null, note: "Contact for certified test data" },
    ],
    conductivity: {
      value: "61% IACS (min)",
      note: "Ultra-low impurity EC1350 (E-Al99.5) grade — the global standard for overhead transmission lines.",
    },
    inquiryProductLabel: "EC Grade Aluminium Wire",
  },

  "aluminium-alloy-wires": {
    slug: "aluminium-alloy-wires",
    name: "Aluminium Alloy Wires",
    title: "Aluminium Alloy Wires (5052, 5154, 6101, 6201, 6351) | Uday Aluminium",
    metaDescription:
      "Aluminium alloy wire in 5052, 5154, 6101, 6201 and 6351 grades — corrosion-resistant and high-strength options for braiding, mesh, fasteners and conductor stranding.",
    tagline:
      "Multi-alloy aluminium wire — 5052, 5154, 6101, 6201 and 6351 grades for corrosion resistance, strength and conductivity.",
    image: "/images/series/Archive/5154 alloy wire mesh.png",
    applications: [
      "Braiding & cable shielding",
      "Wire mesh & screening",
      "Marine & offshore hardware",
      "Fasteners & rivets",
      "Self-supporting overhead conductors",
      "General engineering wire forms",
    ],
    standards: standardsCompliance,
    sizeRange: sizeApplicationRange,
    alloyVariants: [
      {
        alloy: "5052",
        chemSymbol: "AlMg2.5",
        composition: "Mg 2.2–2.8%, Cr 0.15–0.35%",
        uts: null,
        yield: null,
        elongation: null,
        iacs: null,
        note: "Contact for certified test data",
      },
      {
        alloy: "5154",
        chemSymbol: "AlMg3.5",
        composition: "Mg 3.1–3.9%, Cr 0.15–0.35%",
        uts: null,
        yield: null,
        elongation: null,
        iacs: null,
        note: "Contact for certified test data",
      },
      {
        alloy: "6101",
        chemSymbol: "AlMgSi0.5",
        composition: "Mg 0.35–0.80%, Si 0.30–0.70%",
        uts: null,
        yield: null,
        elongation: null,
        iacs: "55% IACS",
        note: "Conductivity per productSeries.js 6101 Rod data",
      },
      {
        alloy: "6201",
        chemSymbol: "AlMg0.6Si0.9",
        composition: "Mg 0.60–0.90%, Si 0.50–0.90%",
        uts: "300 MPa (T81)",
        yield: null,
        elongation: null,
        iacs: "52% IACS",
        note: "Per productSeries.js 6201 Rod data",
      },
      {
        alloy: "6351",
        chemSymbol: "AlSiMgMn",
        composition: null,
        uts: null,
        yield: null,
        elongation: null,
        iacs: null,
        note: "Contact for certified test data",
      },
    ],
    conductivity: {
      value: "52–55% IACS (alloy dependent)",
      note: "Varies by grade — see per-alloy table above. 6xxx alloys trade some conductivity for higher mechanical strength versus EC grade.",
    },
    inquiryProductLabel: "Aluminium Alloy Wires",
  },

  "aluminium-rods": {
    slug: "aluminium-rods",
    name: "Aluminium Rods",
    title: "Aluminium Wire Rods Manufacturer | Uday Aluminium",
    metaDescription:
      "Aluminium wire rods — EC1350, 6101, 6201, 6061 and AL59 grades for overhead conductors, wire drawing feedstock and cable manufacture.",
    tagline:
      "EC1350, 6101, 6201, 6061 and AL59 wire rods — feedstock for overhead conductors and wire drawing.",
    image: "/images/series/Archive/6201 Aluminium Rod.png",
    applications: [
      "Overhead conductor stranding",
      "Wire drawing feedstock",
      "ACSR & AAAC conductor cores",
      "Distribution line conductors",
      "Self-supporting overhead conductors",
      "Downstream conductor wire drawing",
    ],
    standards: standardsCompliance,
    sizeRange: {
      min: "9.5 mm",
      max: "12.0 mm",
      rows: [
        { diameter: "9.5 mm", application: "Standard drawing feedstock" },
        { diameter: "12.0 mm", application: "Overhead conductor rod" },
      ],
    },
    mechanicalProperties: [
      { property: "Ultimate Tensile Strength (UTS) — 6201 (T81)", value: "300 MPa (min)", note: "Per productSeries.js 6201 Rod data" },
      { property: "Ultimate Tensile Strength (UTS) — AL59", value: "160 MPa (min)", note: "Per productSeries.js AL59 Rod data" },
      { property: "Yield Strength", value: null, note: "Contact for certified test data" },
      { property: "Elongation", value: null, note: "Contact for certified test data" },
    ],
    conductivity: {
      value: "52–61% IACS (grade dependent)",
      note: "EC1350: 61% IACS min · 6101: 55% IACS · 6201: 52% IACS · AL59: 59% IACS min (per productSeries.js).",
    },
    inquiryProductLabel: "Aluminium Rods",
  },

  "aluminium-wire-mesh-fine-wires": {
    slug: "aluminium-wire-mesh-fine-wires",
    name: "Aluminium Wire Mesh & Fine Wires",
    title: "Aluminium Wire Mesh & Fine Wires Manufacturer | Uday Aluminium",
    metaDescription:
      "Aluminium wire mesh and fine wires (5154 alloy) for filtration, screening, braiding and architectural applications — lightweight, corrosion-resistant.",
    tagline:
      "Lightweight 5154 alloy wire mesh and fine wires for filtration, screening and braiding — one-third the weight of steel.",
    image: "/images/series/Archive/5154 alloy wire mesh.png",
    applications: [
      "Filtration & screening",
      "Insect & window mesh",
      "Architectural cladding mesh",
      "Cable braiding & shielding",
      "Marine & offshore screening",
      "Fine wire weaving",
    ],
    standards: standardsCompliance,
    sizeRange: sizeApplicationRange,
    mechanicalProperties: [
      { property: "Ultimate Tensile Strength (UTS)", value: null, note: "Contact for certified test data" },
      { property: "Yield Strength", value: null, note: "Contact for certified test data" },
      { property: "Elongation", value: null, note: "Contact for certified test data" },
    ],
    conductivity: {
      value: null,
      note: "Conductivity is not the primary spec for mesh/fine-wire applications — see Mechanical Properties above.",
    },
    inquiryProductLabel: "Aluminium Wire Mesh & Fine Wires",
    meshNote:
      "Full mesh & wire gauge chart (1–500 mesh count, SWG/mm wire diameter, opening size, open area %) and weave type reference are available on the Aluminium Wire Mesh page. Additional weave patterns beyond Plain Weave are pending further source material.",
    meshNoteLink: "/products/wire-mesh",
  },

  "cable-conductors": {
    slug: "cable-conductors",
    name: "Cable Conductors",
    title: "Aluminium Cable Conductors Manufacturer | Uday Aluminium",
    metaDescription:
      "Aluminium cable conductor wire for ACSR, AAAC and stranded conductor manufacture — EC grade and high-strength alloy options.",
    tagline:
      "EC grade and high-strength alloy wire for ACSR, AAAC and stranded cable conductor manufacture.",
    image: "/images/series/Archive/6201 Aluminium Rod.png",
    applications: [
      "ACSR (Aluminium Conductor Steel Reinforced)",
      "AAAC (All Aluminium Alloy Conductor)",
      "Stranded overhead conductors",
      "Underground & armoured cables",
      "Distribution & transmission cables",
      "Custom conductor stranding",
    ],
    standards: standardsCompliance,
    sizeRange: sizeApplicationRange,
    mechanicalProperties: [
      { property: "Ultimate Tensile Strength (UTS) — AL59/6201 strand (T81)", value: "300 MPa (min)", note: "Per productSeries.js AAAC strand data" },
      { property: "Yield Strength", value: null, note: "Contact for certified test data" },
      { property: "Elongation", value: null, note: "Contact for certified test data" },
    ],
    conductivity: {
      value: "52–61% IACS (grade dependent)",
      note: "EC grade cores: 61% IACS min · AL59/6201 high-strength strand: 52–59% IACS (per productSeries.js).",
    },
    inquiryProductLabel: "Cable Conductors",
  },
};

export const productPageSlugs = Object.keys(productPages);
