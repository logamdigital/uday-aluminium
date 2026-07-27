/*
 * Aluminium Alloy Anchor Wire (5019 / 5356) — full spec-sheet content
 * sourced verbatim from client-supplied reference document (screenshots),
 * 2026-07-22. All technical data — grades, composition, sizes and
 * standards — is unchanged from the source document.
 */

export const anchorWireMeta = {
  slug: "anchor-wire",
  name: "Aluminium Alloy Anchor Wire",
  title: "Aluminium Alloy Anchor Wire Manufacturer | Uday Aluminium",
  metaDescription:
    "Precision flat aluminium anchor wire in 5019 (AlMg5) and 5356 (AlMg5Cr/Ti) alloy for toothbrush and brush tufting — up to 450 MPa tensile strength, EN 573-3 / EN 1301 / ASTM B211 compliant.",
  tagline: "Precision Flat Wire for Toothbrush & Brush Tufting",
  image: "/images/series/Archive/Aluminium Anchor Wire coil.jpeg",
  inquiryProductLabel: "Aluminium Alloy Anchor Wire",
};

export const anchorWireOverview = [
  "Aluminium Alloy Anchor Wire is a precision flat (rectangular-profile) wire manufactured from high-magnesium aluminium alloys 5019 (AlMg5) and 5356 (AlMg5Cr/Ti) for the brush industry, with toothbrush manufacturing as its primary application. In stapled (anchor) tufting, a U-shaped tuft of bristles is folded around a small staple cut from anchor wire and driven into the tuft hole of the brush head, where it holds the bristles by interference fit for the life of the brush. Anchor wire is supplied in plain flat, single-grooved, or double-grooved profiles — grooved profiles bite into the plastic of the tuft hole for increased tuft retention.",
  "Manufactured from AlMg5-family alloys chosen specifically because approximately 5% magnesium gives the extra tensile strength a tiny staple needs, aluminium anchor wire runs at roughly one-third the weight of traditional nickel-silver and brass anchor wire at significantly lower cost. It is supplied in hard drawn temper with controlled hardness for clean cutting and driving, ultra-clean and degreased to prevent oxide deposits in tuft holes, and is compatible with all standard brush filling machines.",
];

export const anchorWireKeyAdvantages = [
  "High Tensile Strength: up to 400–450 MPa in hard drawn temper — the AlMg5 advantage for staple stiffness and tuft retention",
  "Lightweight: approximately one-third the weight of nickel-silver or brass anchor wire — more staples (more brushes) per kilogram",
  "Cost Efficiency: significant material cost saving over nickel-silver and brass",
  "Excellent corrosion resistance — the AlMg5 family is among the most corrosion-resistant aluminium alloys, suited to wet oral-care service",
  "Ultra-clean, degreased surface finish to prevent black oxide marking in tuft holes and reduce tufting-machine cleaning",
  "Precision profile and tolerance control for consistent staple cutting, driving and retention",
  "Available plain flat, single-grooved, or double-grooved for enhanced tuft retention",
  "Controlled hardness for clean shearing on high-speed tufting machines",
  "Non-magnetic and fully recyclable",
  "Compatible with all standard brush filling machines (Boucherie, Zahoransky and similar)",
];

export const anchorWireGradesIntro =
  "Anchor wire is manufactured in high-magnesium 5xxx series alloys, selected for the strength that magnesium contributes without heat treatment.";

export const anchorWireGrades = [
  {
    grade: "5019 (AlMg5)",
    middleValue: "Aluminium + 5% Magnesium",
    applications:
      "Toothbrush anchor wire (primary), household and cosmetic brush anchors",
  },
  {
    grade: "5356 (AlMg5Cr/Ti)",
    middleValue: "Aluminium + 5% Magnesium + Chromium trace",
    applications:
      "Toothbrush and industrial brush anchor wire; also standard welding filler wire (AWS ER5356)",
  },
];

export const anchorWireSizes = {
  min: "1.2 mm",
  max: "3.5 mm",
  rangeLabel: "Width Range",
  rangeNote: "Toothbrush anchors typically ~1.5 – 1.9 mm width.",
  rows: [
    { label: "Thickness", value: "0.30 mm – 0.80 mm" },
    {
      label: "Custom profiles",
      value: "Rolled to customer drawing and tufting-machine specification",
    },
    {
      label: "Packaging",
      value: "DIN 125 / DIN 200 / DIN 300 spools; coil weight as per customer requirement",
    },
    {
      label: "Profile options",
      value:
        "Ungrooved, single-grooved, double-grooved, and custom profile wire for tuft retention optimization",
    },
  ],
};

export const anchorWireStandards = [
  { code: "EN 573-3", name: "Aluminium alloy chemical composition (EN AW-5019 / EN AW-5356)" },
  { code: "EN 1301", name: "Drawn aluminium wire: dimensions and tolerances" },
  { code: "ASTM B211/B211M", name: "Aluminium-alloy drawn wire (mechanical properties)" },
  { code: "AWS A5.10 / ISO 18273", name: "5356 chemistry classification (ER5356)" },
  { code: "ISO 22254", name: "Toothbrush tuft retention test (application-side performance standard)" },
  { code: "GB/T 3195", name: "Aluminium and aluminium alloy drawn wire" },
  { code: "RoHS & REACH", name: "Compliance (where applicable)" },
];

export const anchorWireApplications = [
  "Toothbrush anchor / staple wire (primary application) — manual and battery toothbrush tufting",
  "Household brush anchors — brooms, cleaning and scrubbing brushes",
  "Cosmetic and personal-care brush tufting",
  "Industrial and technical brush manufacturing",
  "5356: MIG/TIG welding filler wire for 5xxx/6xxx structures (secondary market for the same wire line)",
  "Flat wire for general stapling and fastening applications",
];
