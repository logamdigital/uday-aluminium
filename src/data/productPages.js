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
import { fineWireApplications } from "@/data/fineWireSpecs";
import { busbarApplications } from "@/data/busbarSpecs";
import { alloyWiresApplications } from "@/data/aluminiumAlloyWiresSpecs";

export const productPages = {
  "aluminium-busbars": {
    slug: "aluminium-busbars",
    name: "Aluminium Busbars",
    title: "Aluminium Busbars Manufacturer | Uday Aluminium",
    metaDescription:
      "High-conductivity EC Grade 1350 & Alloy 6101 aluminium busbars for switchgear, panel boards and power distribution — up to 61% IACS, 70% lighter and 50% lower cost than copper. IS 5082 / ASTM B317 compliant.",
    tagline:
      "High-conductivity aluminium busbars — up to 70% lighter and 50% lower cost than copper.",
    image: "/images/series/Archive/busbars.jpeg",
    applications: busbarApplications,
    inquiryProductLabel: "Aluminium Busbars",
  },

  "aluminium-alloy-wires": {
    slug: "aluminium-alloy-wires",
    name: "Aluminium Alloy Wires",
    title: "Aluminium Alloy Wires — EC Grade 1350, 5052, 5154, 6101, 6201, 6351 | Uday Aluminium",
    metaDescription:
      "Aluminium alloy wire range covering EC Grade 1350 (61% IACS min) plus 5052, 5154, 6101, 6201 and 6351 grades — corrosion-resistant and high-strength options for electrical, braiding, mesh, fastener and conductor stranding applications.",
    tagline:
      "EC Grade 1350 plus 5052, 5154, 6101, 6201 and 6351 alloy wire — conductivity, corrosion resistance and strength in one range.",
    image: "/images/series/Archive/5154 alloy wire mesh.png",
    applications: alloyWiresApplications,
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

  "aluminium-wire-mesh": {
    slug: "aluminium-wire-mesh",
    name: "Aluminium Wire Mesh",
    title: "Aluminium Wire Mesh Manufacturer | Uday Aluminium",
    metaDescription:
      "Aluminium wire mesh (5154 alloy) for filtration, screening and architectural applications — lightweight, corrosion-resistant, one-third the weight of steel.",
    tagline:
      "Lightweight 5154 alloy wire mesh for filtration, screening and architectural cladding — one-third the weight of steel.",
    image: "/images/series/Archive/wire mesh.jpeg",
    heroImageFit: "contain",
    applications: [
      "Filtration & screening",
      "Insect & window mesh",
      "Architectural cladding mesh",
      "Marine & offshore screening",
      "Agricultural & food processing mesh",
      "Industrial safety screening",
    ],
    standards: standardsCompliance,
    sizeRange: sizeApplicationRange,
    inquiryProductLabel: "Aluminium Wire Mesh",
    meshNote:
      "Full mesh & wire gauge chart (1–500 mesh count, SWG/mm wire diameter, opening size, open area %) and weave type reference are available on the Aluminium Wire Mesh series page. Additional weave patterns beyond Plain Weave are pending further source material.",
    meshNoteLink: "/products/wire-mesh",
  },

  "fine-wires": {
    slug: "fine-wires",
    name: "Aluminium Fine Wire",
    title: "Aluminium Fine Wire Manufacturer | Uday Aluminium",
    metaDescription:
      "Precision cold-drawn aluminium fine wire in EC Grade 1350 and 5154 alloy for braided EMI/RFI cable shielding — 0.10mm+ diameters, 61% IACS conductivity, ASTM B230/B609/B211 and IEC 60889 compliant.",
    tagline: "Precision Drawn Wire for Braided EMI Shielding",
    image: "/images/series/Archive/fine wire.jpg",
    applications: fineWireApplications,
    inquiryProductLabel: "Aluminium Fine Wire",
  },

  "cable-conductors": {
    slug: "cable-conductors",
    name: "Aluminium Alloy wires for Conductors & Cables Manufacturing",
    title: "Aluminium Alloy Wires for Conductors & Cables Manufacturing | Uday Aluminium",
    metaDescription:
      "Aluminium rods and alloy wires for AAC, AAAC, ACSR, ACAR, AACSR and HTLS conductor manufacture — EC Grade 1350-H19, 6201-T81, AL-59, TAL, STAL, ZTAL and Aged Aluminium Alloy Rods & Wires.",
    tagline:
      "High-conductivity, high-strength aluminium rods and alloy wires for overhead power transmission and distribution conductors.",
    image: "/images/series/Archive/AL59 Aluminium Rod.jpeg",
    introParagraphs: [
      "At Uday Aluminium, we manufacture premium-quality aluminium rods and aluminium alloy wires that form the foundation of modern overhead power transmission and distribution conductors. Our products are engineered to deliver the ideal combination of high electrical conductivity, mechanical strength, corrosion resistance, and long-term reliability, making them the preferred choice for conductor manufacturers, utilities, EPC contractors, and OEMs.",
      "Our conductor-grade materials are used in the manufacture of AAC, AAAC, ACSR, ACAR, AACSR, and High Temperature Low Sag (HTLS) conductors, supporting applications ranging from urban distribution networks to extra-high-voltage transmission lines.",
      "We manufacture a comprehensive range of EC Grade 1350-H19, Aluminium Alloy 6201-T81, AL-59, TAL, STAL, ZTAL, and Aged Aluminium Alloy Rods & Wires, produced under stringent quality controls to ensure consistent electrical and mechanical properties, excellent surface finish, and superior drawability for efficient conductor manufacturing.",
      "For next-generation transmission networks, Uday Aluminium also supplies thermal-resistant aluminium alloys for HTLS conductors capable of continuous operation at 150°C to 210°C, enabling higher current-carrying capacity, reduced thermal sag, and improved transmission efficiency without major infrastructure upgrades.",
      "With advanced manufacturing facilities, rigorous quality assurance, and compliance with national and international standards, Uday Aluminium is your trusted partner for high-performance aluminium conductor materials that power reliable and efficient transmission and distribution networks worldwide.",
    ],
    applications: [
      "LT and 11 kV distribution networks — Mole through Rabbit class conductors",
      "33 kV sub-transmission — Raccoon, Otter, Cat, Dog class",
      "66–220 kV transmission — high-capacity stranded conductors",
      "400 kV EHV backbone — large-section transmission conductors",
      "Coastal and corrosive corridors — AAAC (6201 / AL59) and ACAR designs",
      "River crossings and extra-long spans — ACSR / AACSR high-steel-content designs",
      "Line uprating and re-conductoring — HTLS conductors delivering up to 2× ampacity on existing towers",
      "Railway traction feeders, earthing conductors and messenger wires",
    ],
    extraTables: [
      {
        title: "Uday Aluminium Product Capability",
        icon: "boxes",
        columns: [
          { key: "product", label: "Product" },
          { key: "sizeRange", label: "Size Range" },
          { key: "use", label: "Primary Use" },
        ],
        rows: [
          { product: "Aluminium Rods", sizeRange: "9.5 mm to 1.5 mm", use: "Conductor manufacturing / drawing stock" },
          { product: "Aluminium Alloy 6201 Rod", sizeRange: "9.5 mm to 1.5 mm", use: "AAAC and alloy conductor manufacture" },
          { product: "AL-59 Rod / Wire", sizeRange: "9.5 mm rod to 3.0 mm wire", use: "High-performance alloy conductor applications" },
          { product: "ZTAL / STAL / TAL Rods", sizeRange: "9.5 mm", use: "HTLS conductor inputs" },
          { product: "Aged Aluminium Alloy Rods", sizeRange: "9.5 mm to 3.0 mm", use: "Strengthened conductor rod feedstock" },
          { product: "Aged Aluminium Alloy Wire", sizeRange: "9.5 mm to 1.5 mm", use: "Conductor wire and stranding applications" },
        ],
      },
      {
        title: "Conductor Types",
        icon: "gitCompare",
        columns: [
          { key: "type", label: "Type" },
          { key: "construction", label: "Construction" },
          { key: "wins", label: "Where It Wins" },
        ],
        rows: [
          { type: "AAC — All Aluminium Conductor", construction: "EC 1350-H19 strands only", wins: "Maximum conductivity per kg; urban distribution, short spans, coastal areas where steel corrodes" },
          { type: "AAAC — All Aluminium Alloy Conductor", construction: "6201-T81 / AL59 alloy strands only", wins: "Better strength-to-weight and corrosion resistance than ACSR; coastal and polluted corridors" },
          { type: "ACSR — Aluminium Conductor Steel Reinforced", construction: "1350-H19 strands over galvanized steel core", wins: "Industry workhorse; long spans, river crossings, all transmission classes" },
          { type: "ACAR — Aluminium Conductor Alloy Reinforced", construction: "1350-H19 strands over 6201 alloy core", wins: "ACSR-class strength with no steel; used where core corrosion or weight is a concern" },
          { type: "AACSR — Aluminium Alloy Conductor Steel Reinforced", construction: "Alloy strands over steel core", wins: "Maximum mechanical strength; extra-long spans and heavy ice/wind zones" },
          { type: "HTLS — High Temperature Low Sag", construction: "Thermal-resistant Al / annealed Al over special cores", wins: "Re-conductoring: up to 2× ampacity on existing towers" },
        ],
      },
      {
        title: "HTLS Variants",
        icon: "thermometer",
        columns: [
          { key: "variant", label: "Variant" },
          { key: "core", label: "Core / Aluminium" },
          { key: "temp", label: "Max Continuous Temp" },
          { key: "keyPoint", label: "Key Point" },
        ],
        rows: [
          { variant: "TAL (TACSR)", core: "Steel core + thermal-resistant Al-Zr strands", temp: "150°C", keyPoint: "Uprating standard ACSR lines with same construction and clearances" },
          { variant: "STAL / ZTAL", core: "Steel core + super/extra thermal Al-Zr strands", temp: "210°C", keyPoint: "Higher temperature class of the same concept" },
          { variant: "INVAR (STACIR / ZTACIR)", core: "Aluminium-clad Invar core + ZTAL strands", temp: "210°C", keyPoint: "Lowest sag of all — Invar core barely expands" },
          { variant: "ACCR", core: "Aluminium-matrix composite core", temp: "210°C (240°C short-time)", keyPoint: "Fully metallic-compatible composite design" },
          { variant: "GAP (GTACSR)", core: "High-strength steel core with grease-filled gap + TAL/ZTAL", temp: "210°C", keyPoint: "Steel core moves freely in grease — sag fixed at erection" },
        ],
      },
      {
        title: "Selected ACSR Distribution Conductors",
        icon: "cable",
        intro:
          "The following table highlights some of the most commonly used ACSR conductor sizes in India, along with their typical construction and technical specifications. Uday Aluminium is committed to delivering products that meet the highest standards of quality, consistency, and performance.",
        columns: [
          { key: "conductor", label: "Conductor" },
          { key: "alArea", label: "Al Area (mm²)" },
          { key: "strandingAl", label: "Stranding — Al" },
          { key: "strandingSteel", label: "Stranding — Steel" },
          { key: "overallDia", label: "Overall Ø (mm)" },
          { key: "weight", label: "Weight (kg/km)" },
          { key: "breakingLoad", label: "Breaking Load (kN)" },
          { key: "use", label: "Typical Use" },
        ],
        rows: [
          { conductor: "Mole", alArea: "10", strandingAl: "6 × 1.50", strandingSteel: "1 × 1.50", overallDia: "4.50", weight: "~43", breakingLoad: "~4", use: "LT spurs" },
          { conductor: "Squirrel", alArea: "20", strandingAl: "6 × 2.11", strandingSteel: "1 × 2.11", overallDia: "6.33", weight: "~85", breakingLoad: "~7.7", use: "11 kV distribution" },
          { conductor: "Gopher", alArea: "26", strandingAl: "6 × 2.36", strandingSteel: "1 × 2.36", overallDia: "7.08", weight: "~106", breakingLoad: "~9.6", use: "11 kV" },
          { conductor: "Weasel", alArea: "30", strandingAl: "6 × 2.59", strandingSteel: "1 × 2.59", overallDia: "7.77", weight: "~128", breakingLoad: "~11.1", use: "11 kV distribution, messenger" },
          { conductor: "Ferret", alArea: "42", strandingAl: "6 × 3.00", strandingSteel: "1 × 3.00", overallDia: "9.00", weight: "~171", breakingLoad: "~14.9", use: "11–33 kV" },
          { conductor: "Rabbit", alArea: "50", strandingAl: "6 × 3.35", strandingSteel: "1 × 3.35", overallDia: "10.05", weight: "~214", breakingLoad: "~18.2", use: "11–33 kV" },
          { conductor: "Mink", alArea: "63", strandingAl: "6 × 3.66", strandingSteel: "1 × 3.66", overallDia: "10.98", weight: "~255", breakingLoad: "~21.6", use: "33 kV" },
          { conductor: "Raccoon", alArea: "77", strandingAl: "6 × 4.09", strandingSteel: "1 × 4.09", overallDia: "12.27", weight: "~318", breakingLoad: "~26.9", use: "33 kV sub-transmission" },
          { conductor: "Otter", alArea: "83", strandingAl: "6 × 4.22", strandingSteel: "1 × 4.22", overallDia: "12.66", weight: "~339", breakingLoad: "~28.4", use: "33 kV" },
          { conductor: "Cat", alArea: "95", strandingAl: "6 × 4.50", strandingSteel: "1 × 4.50", overallDia: "13.50", weight: "~385", breakingLoad: "~32.0", use: "33–66 kV" },
          { conductor: "Dog", alArea: "100", strandingAl: "6 × 4.72", strandingSteel: "7 × 1.57", overallDia: "14.15", weight: "~394", breakingLoad: "~32.4", use: "33–66 kV" },
        ],
      },
    ],
    standards: [
      { code: "IS 398 Parts 1–5", name: "Aluminium conductors for overhead transmission" },
      { code: "BS 215 Parts 1 & 2", name: "AAC and ACSR" },
      { code: "ASTM B231", name: "AAC" },
      { code: "ASTM B232", name: "ACSR" },
      { code: "ASTM B399", name: "AAAC (6201-T81)" },
      { code: "IEC 61089", name: "Round wire concentric lay overhead electrical stranded conductors" },
      { code: "EN 50182", name: "Conductors for overhead lines" },
      { code: "DIN 48201 / DIN 48204", name: "German conductor standards" },
      { code: "IS 1778", name: "Reels and drums for conductor supply" },
    ],
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
