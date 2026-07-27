/*
 * EC Grade Aluminium Wire — full spec-sheet content sourced verbatim from
 * client-supplied reference document (screenshots), 2026-07-22. All
 * technical data — grades, tempers, mechanical/electrical values, sizes
 * and standards — is unchanged from the source document.
 */

export const ecGradeWireOverview = [
  "EC (Electrical Conductivity) Grade Aluminium Wire is a high-conductivity, cold-drawn aluminium conductor manufactured primarily from Aluminium Alloy 1350 (E1E) for electrical and industrial applications. It is widely used where high electrical conductivity, low weight, excellent corrosion resistance, and cost efficiency are essential. EC Grade aluminium wire is extensively used in overhead conductors, earthing systems, power cables, transformer windings, cable shielding, busbar jumpers, electrical equipment, and industrial power distribution.",
  "Manufactured to stringent national and international standards, EC Grade aluminium wire provides a minimum electrical conductivity of 61% IACS, approximately 30% of copper's weight, and excellent formability for drawing, stranding, braiding, weaving, and electrical conductor manufacturing. Compared with copper conductors, EC Grade aluminium wire offers 30–50% lower material cost while significantly reducing the overall weight of electrical systems.",
];

export const ecGradeWireKeyAdvantages = [
  "Electrical Conductivity: 61% IACS (Minimum)",
  "Aluminium Purity: ≥99.50% (AA 1350 / EC Grade)",
  "Density: 2.70 g/cm³ (approximately 70% lighter than copper)",
  "Excellent electrical conductivity with low DC resistance",
  "Superior corrosion and atmospheric oxidation resistance",
  "Excellent ductility, drawability, and formability",
  "Suitable for drawing, stranding, braiding, weaving, and conductor manufacturing",
  "High thermal conductivity for efficient heat dissipation",
  "Fully recyclable with low environmental impact",
  "Available in multiple tempers, diameters, and packaging configurations",
];

export const ecGradeWireGradesIntro =
  "EC Grade aluminium wire is manufactured primarily in high-purity 1xxx series alloys developed specifically for electrical applications.";

export const ecGradeWireGrades = [
  {
    grade: "EC Grade 1350 (E1E)",
    middleValue: "61% IACS (Minimum)",
    applications: "AAC Conductors, Earthing, Cable Conductors, Transformer Connections, Electrical Equipment",
  },
];

export const ecGradeWireTempers =
  "O (Annealed), H12, H14, H16, H18, H24, H26. Custom tempers available on request.";

export const ecGradeWireMechanicalElectrical = [
  { gradeTemper: "1350-O (Annealed)", uts: "59 – 97 (band)", yieldTyp: "~28", elongationMin: "15 – 25%", conductivityMin: "61.8% IACS" },
  { gradeTemper: "1350-H12 (¼ hard)", uts: "83", yieldTyp: "~70", elongationMin: "10%", conductivityMin: "61.5% IACS" },
  { gradeTemper: "1350-H14 (½ hard)", uts: "103", yieldTyp: "~90", elongationMin: "6%", conductivityMin: "61.5% IACS" },
  { gradeTemper: "1350-H16 (¾ hard)", uts: "117", yieldTyp: "~105", elongationMin: "4%", conductivityMin: "61.5% IACS" },
  { gradeTemper: "1350-H18 (full hard)", uts: "124", yieldTyp: "~115", elongationMin: "2 – 3%", conductivityMin: "61.0% IACS" },
  { gradeTemper: "1350-H24 (½ hard, part-annealed)", uts: "103", yieldTyp: "~85", elongationMin: "8%", conductivityMin: "61.5% IACS" },
  { gradeTemper: "1350-H26 (¾ hard, part-annealed)", uts: "117", yieldTyp: "~100", elongationMin: "5 – 6%", conductivityMin: "61.5% IACS" },
];

export const ecGradeWireSizes = {
  min: "0.25 mm",
  max: "9.00 mm",
  rangeLabel: "Diameter Range",
  rows: [
    { label: "Coil Weight", value: "As per customer requirement" },
    { label: "Packaging", value: "Plastic Spools, Steel Spools, Coils, Bundles, Drum Packing" },
    { label: "Custom cut lengths", value: "Custom cut lengths and packaging available" },
  ],
};

export const ecGradeWireStandards = [
  { code: "IS 5484", name: "EC Grade Aluminium Rods for Electrical Purposes" },
  { code: "ASTM B230/B230M", name: "Aluminium 1350 Wire for Electrical Purposes" },
  { code: "ASTM B233", name: "Aluminium 1350 Rods" },
  { code: "ASTM B609", name: "Aluminium 1350 Round Wire" },
  { code: "IEC 60889", name: "Hard-Drawn Aluminium Wire" },
  { code: "EN 573", name: "Aluminium Chemical Composition" },
  { code: "RoHS & REACH", name: "Compliance (where applicable)" },
];

export const ecGradeWireApplications = [
  "AAC (All Aluminium Conductors)",
  "ACSR & AAAC conductor manufacturing",
  "Power cables and electrical conductors",
  "Transformer leads and jumper connections",
  "Earthing and grounding systems",
  "Cable shielding and braiding",
  "Electrical winding and distribution equipment",
  "Wire mesh and woven products (selected diameters)",
  "Automotive and railway electrical systems",
  "Renewable energy and utility power networks",
];
