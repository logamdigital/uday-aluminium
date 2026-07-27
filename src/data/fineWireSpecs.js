/*
 * Aluminium Fine Wire — full spec-sheet content sourced verbatim from
 * client-supplied reference document (screenshots), 2026-07-22.
 * Spelling normalised to British "aluminium" for site-wide consistency;
 * all technical data — grades, tempers, mechanical/electrical values,
 * sizes and standards — is unchanged from the source document.
 */

export const fineWireOverview = [
  "Aluminium Fine Wire is precision cold-drawn wire manufactured in diameters from 0.10 mm upward with tight diameter tolerance, produced in EC Grade 1350 for maximum conductivity and Al-Mg alloy 5154 where strength is required. Its primary and fastest-growing application is braided EMI/RFI shielding: fine wires are woven into tubular braids around cable cores, wiring harnesses and sleeves, where the braid protects signal and power conductors by reflecting incoming electromagnetic energy and conducting the remainder to ground. Braided shields provide 70–95% optical coverage depending on weave tightness, offer a low-resistance path to ground, and terminate easily by crimping — making them the preferred shield construction for power, control and data applications, often combined with foil for maximum shielding effectiveness in extremely noisy environments.",
  "Manufactured to stringent national and international standards, aluminium fine wire braid delivers approximately two-thirds weight reduction versus copper braid of the same construction — a shielded automotive or aerospace harness gets the same EMI protection at roughly one-third the shield weight — together with substantial cost savings, natural corrosion resistance from the aluminium oxide layer, and full recyclability. This combination has made aluminium fine wire the material of choice for EV and automotive wiring harness shields, battery module interconnect braids, marine cabling, and lightweight avionic and industrial shielding systems.",
];

export const fineWireKeyAdvantages = [
  "Diameter range from 0.10 mm with tight tolerance (±0.003 – ±0.005 mm) for uniform, high-coverage braids",
  "Weight Advantage: aluminium braid weighs approximately one-third of an equivalent copper braid",
  "Cost Efficiency: substantial saving versus copper braid at equal shielding performance class",
  "EMI/RFI shielding performance: supports 70–95% braid coverage; shield works by reflection plus conduction to ground",
  "Two-alloy programme: EC 1350 for maximum conductivity (61% IACS min) · 5154 Al-Mg for braid strength (up to 450 MPa)",
  "Excellent flexibility for high-speed braiding machines with low wire-break rates",
  "Natural corrosion resistance — suited to automotive, marine and outdoor service",
  "Bright drawn, joint-free continuous lengths for uninterrupted braider runs",
  "Fully recyclable with low life-cycle environmental impact",
  "Supplied on precision spools with Mill Test Certificate every dispatch",
];

export const fineWireGradesIntro =
  "Fine wire is drawn in two alloy families, selected by whether the braid's job is conducting or protecting.";

export const fineWireGrades = [
  {
    grade: "EC Grade 1350 (E1E)",
    middleValue: "61% IACS (Minimum)",
    applications:
      "Conductive braids, grounding braids, screening where conductivity governs",
  },
  {
    grade: "5154 (AlMg3.5)",
    middleValue: "≥ 36% IACS",
    applications:
      "EMI/RFI shield braids, cable sheathing, harness and sleeve braiding where strength and flex-life govern",
  },
];

export const fineWireTempers =
  "O (Annealed — softest, maximum flexibility for tight braids) · H12 / H14 / H16 (intermediate) · H18 / H19 (hard drawn — maximum strength). Temper is matched to braider type and coverage specification.";

export const fineWireMechanicalElectrical = [
  {
    gradeTemper: "1350-O (Annealed)",
    uts: "59 – 97",
    yieldTyp: "~28",
    elongationMin: "15 – 25%",
    conductivityMin: "61.8% IACS",
  },
  {
    gradeTemper: "1350-H14 (½ hard)",
    uts: "103",
    yieldTyp: "~90",
    elongationMin: "6%",
    conductivityMin: "61.5% IACS",
  },
  {
    gradeTemper: "1350-H19 (extra hard)",
    uts: "160 – 200 (dia-dep.)",
    yieldTyp: "~140 – 165",
    elongationMin: "1.5%",
    conductivityMin: "61.0% IACS",
  },
  {
    gradeTemper: "5154-O (Annealed)",
    uts: "230 – 290",
    yieldTyp: "~85 – 115",
    elongationMin: "15%",
    conductivityMin: "36% IACS",
  },
  {
    gradeTemper: "5154-H18 (hard drawn)",
    uts: "380 – 450",
    yieldTyp: "~330+",
    elongationMin: "2 – 3%",
    conductivityMin: "35% IACS",
  },
];

export const fineWireMechanicalFootnote =
  "Wire standards specify tensile, elongation and resistivity — not yield — so yield values are typical, shown for design reference. Certified batch values on the Mill Test Certificate govern every dispatch.";

export const fineWireSizes = {
  min: "0.10 mm",
  max: "1.00 mm",
  rangeLabel: "Standard Fine Wire Range",
  rangeNote:
    "Finer sizes on technical review; heavier sizes up to 3.00 mm on request.",
  rows: [
    {
      label: "Most-ordered braid sizes",
      value: "0.10, 0.12, 0.16, 0.20, 0.25, 0.30 mm (38 – 29 AWG equivalents)",
    },
    {
      label: "Tolerance",
      value: "±0.003 – ±0.005 mm on fine sizes",
    },
    {
      label: "Packaging",
      value:
        "Precision plastic spools 1 / 2 / 3 kg · DIN 105 / 125 / 160 / 250 spools · custom spooling per braider specification",
    },
  ],
};

export const fineWireStandards = [
  { code: "ASTM B230/B230M", name: "Aluminium 1350-H19 wire for electrical purposes" },
  { code: "ASTM B609", name: "Aluminium 1350 round wire, annealed and intermediate tempers" },
  { code: "ASTM B211/B211M", name: "Aluminium-alloy drawn wire (5154 mechanicals)" },
  { code: "ASTM B258", name: "AWG diameter series for braid wire sizing" },
  { code: "IEC 60889", name: "Hard-drawn aluminium wire for electrical conductors" },
  { code: "EN 573-3 / EN 1301", name: "European alloy designation, wire dimensions and tolerances" },
  { code: "IS 739", name: "Wrought aluminium and aluminium alloy wire (India)" },
  {
    code: "UL 444 / MIL-DTL-17 / IEC Cable Standards",
    name: "Cable-side specifications — set the braid coverage (70–95%) that determines wire size selection",
  },
];

export const fineWireApplications = [
  "Braided EMI/RFI cable shields — coaxial, data, control and instrumentation cables (primary application)",
  "EV and automotive wiring harness shield braids and ground straps — the fastest-growing segment",
  "Battery module and energy-storage interconnect braids",
  "Braided sleeves for hose, tube and harness protection with grounding and shielding function",
  "Aerospace and avionic harness shielding, where every gram of shield weight counts",
  "Marine and offshore cabling — corrosion-resistant screening",
  "Fine mesh weaving, filtration screens and specialised industrial wire applications",
];
