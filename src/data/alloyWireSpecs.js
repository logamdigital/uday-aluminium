/* Shared reference data for Task 1 spec blocks — Aluminium Alloy Wire pages */

export const standardsCompliance = [
  { code: "ASTM B230", name: "EC Aluminium Wire" },
  { code: "ASTM B398", name: "Aluminium Alloy Wire" },
  { code: "ASTM B399", name: "AAAC Conductors" },
  { code: "ASTM B941", name: "Aluminium Alloy Wire" },
  { code: "IEC 60889", name: "Hard Drawn Aluminium Wire" },
];

export const sizeApplicationRange = {
  min: "0.25 mm",
  max: "9.00 mm",
  rows: [
    { diameter: "0.25 mm", application: "Fine Mesh" },
    { diameter: "0.30 mm", application: "Cable Shielding" },
    { diameter: "0.50 mm", application: "Braiding" },
    { diameter: "0.80 mm", application: "Weaving" },
    { diameter: "1.20 mm", application: "Welding" },
    { diameter: "2.00 mm", application: "Fasteners" },
    { diameter: "3.50 mm", application: "General Engineering" },
  ],
};

export const temperGrades = [
  { temper: "O", description: "Annealed (Soft)" },
  { temper: "H12", description: "Quarter Hard" },
  { temper: "H14", description: "Half Hard" },
  { temper: "H18", description: "Full Hard" },
  { temper: "H19", description: "Extra Hard" },
];

export const certificationDetails = {
  mtc: {
    title: "Mill Test Certificate (MTC)",
    items: [
      "Chemical Composition",
      "Mechanical Properties",
      "Heat Number",
      "Batch Number",
      "Dimensions",
    ],
  },
  labCerts: {
    title: "NABL / Government Lab Certificates",
    items: [
      "UTS",
      "Yield Strength",
      "Conductivity",
      "Elongation",
      "Chemical Composition",
      "Hardness",
    ],
  },
  finish: {
    title: "Finish & Packaging",
    surfaceFinish: ["Bright", "Clean", "Oxidation-Free"],
    packagingOptions: ["Coils", "Plastic Reels", "DIN Reels", "Drums"],
  },
};
