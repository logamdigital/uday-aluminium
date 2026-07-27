/*
 * Welding Wire (MIG / TIG) specification data.
 * Source: client-supplied spec update, 2026-07-20.
 */

export const weldingGradesAvailable = "4043, 5356, 4047, 5183, 1100";
export const weldingMaterial = "Bright Shaved";

export const weldingSpecRows = [
  { label: "Grades available", value: weldingGradesAvailable },
  { label: "Material", value: weldingMaterial },
];

export const weldingSizePackagingRows = [
  { label: "Size range — MIG wire", value: "0.80 mm – 1.60 mm" },
  { label: "Size range — TIG wire", value: "1.60 mm – 5.00 mm (Embossed)" },
  { label: "Packaging — MIG wire", value: "5 kg and 7 kg spools (SD-300)" },
  { label: "Packaging — TIG wire", value: "5 kg plastic tube & 10 kg cardboard packing" },
];
