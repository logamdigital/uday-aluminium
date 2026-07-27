/*
 * Aluminium Alloy Wires — merged page combining the EC Grade 1350 spec
 * sheet (src/data/ecGradeWireSpecs.js, sourced from client-supplied
 * reference images, 2026-07-22) with the existing 5052/5154/6101/6201/6351
 * alloy variant data already vetted in this codebase. Per user request,
 * /products/ec-grade-aluminium-wire is retired (301 redirect) in favour
 * of this single combined page.
 *
 * Nothing here is invented: the EC-specific sections are carried over
 * unchanged from ecGradeWireSpecs.js; the alloy variant table is carried
 * over unchanged from the prior productPages.js entry; Standards and
 * Applications are a deduped union of both existing sources; the Overview
 * and Grades intro paragraphs are lightly reframed to introduce the
 * combined scope, without adding any new technical claim.
 */

import {
  ecGradeWireOverview,
  ecGradeWireKeyAdvantages,
  ecGradeWireGrades,
  ecGradeWireTempers,
  ecGradeWireMechanicalElectrical,
  ecGradeWireSizes,
  ecGradeWireStandards,
  ecGradeWireApplications,
} from "@/data/ecGradeWireSpecs";

export const alloyWiresOverview = [
  "Aluminium Alloy Wire is a high-conductivity, cold-drawn aluminium conductor range manufactured primarily from Aluminium Alloy 1350 (E1E / EC Grade) for electrical and industrial applications, and extended into 5052, 5154, 6101, 6201 and 6351 alloy grades for applications needing greater mechanical strength or corrosion resistance. EC Grade wire is widely used where high electrical conductivity, low weight, excellent corrosion resistance, and cost efficiency are essential — in overhead conductors, earthing systems, power cables, transformer windings, cable shielding, busbar jumpers, electrical equipment, and industrial power distribution.",
  ecGradeWireOverview[1],
  "Beyond EC grade, the range extends to 5xxx series Al-Mg alloys (5052, 5154) for corrosion resistance, formability and braiding/mesh performance, and 6xxx series Al-Mg-Si alloys (6101, 6201, 6351) that trade some conductivity for higher mechanical strength — suited to fasteners, marine hardware and self-supporting overhead conductors. See the Alloy Variants table below for grade-by-grade composition and mechanical data.",
];

export const alloyWiresKeyAdvantages = ecGradeWireKeyAdvantages;

export const alloyWiresGradesIntro =
  "This range covers six grades across three alloy families: high-purity EC Grade 1350 (E1E) for maximum conductivity, 5xxx series Al-Mg alloys (5052, 5154) for corrosion resistance and formability, and heat-treatable 6xxx series Al-Mg-Si alloys (6101, 6201, 6351) for higher mechanical strength.";

export const alloyWiresEcGradeRow = ecGradeWireGrades;

export const alloyVariants = [
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
];

export const alloyWiresTempers = ecGradeWireTempers;
export const alloyWiresMechanicalElectrical = ecGradeWireMechanicalElectrical;
export const alloyWiresSizes = ecGradeWireSizes;

/* Union of EC Grade's own standards plus the alloy-wire standards already
   established for the 5xxx/6xxx side, deduped (IEC 60889 appeared in both). */
export const alloyWiresStandards = [
  ...ecGradeWireStandards,
  { code: "ASTM B398", name: "Aluminium Alloy Wire" },
  { code: "ASTM B399", name: "AAAC Conductors" },
  { code: "ASTM B941", name: "Aluminium Alloy Wire" },
];

/* Union of EC Grade's applications plus the distinct 5xxx/6xxx-side
   applications already established for this page, deduped. */
export const alloyWiresApplications = [
  ...ecGradeWireApplications,
  "Marine & offshore hardware",
  "Fasteners & rivets",
  "Self-supporting overhead conductors",
  "General engineering wire forms",
];
