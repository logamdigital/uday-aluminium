/*
 * Wire Mesh technical reference data — Task 3.
 * Source: client-supplied "Woven Mesh" catalog pages (01 (2).pdf / 01 (3).pdf,
 * shared 2026-07-10) plus "mechanical properties.png" (wire gauge chart).
 *
 * NOTE: the source gauge-chart image lists "SS 304 / SS 304L / SS 316 / SS 316L
 * & SS 310" as the standard material — that line is generic boilerplate carried
 * over from the source document's stainless-steel mesh catalog and does NOT
 * apply to this site. The mesh-count / wire-diameter / opening relationship is
 * pure weave geometry (independent of alloy), so the chart itself is reused as-is;
 * the material note below has been corrected to Aluminium Alloy 5154 per the
 * "Woven mesh" overview page, which does specify that alloy.
 *
 * Still missing (Task 3 remains partially blocked): weave types beyond "Plain
 * Weave" (e.g. Twill, Dutch weave) — only one weave type was included in what
 * was supplied so far. Do not fabricate additional weave types.
 */

export const meshOverview = {
  meshRange: "1 Mesh to 2300 Mesh",
  openingRange: { min: "0.002 mm (2 micron)", max: "22 mm" },
  material: "Aluminium Alloy 5154",
  orderType: "Ready Stock, Make to Order",
};

export const weaveTypes = [
  {
    name: "Plain Weave",
    description:
      "Each wire passes alternately over and under the wires it crosses, in both directions — the most common and versatile wire mesh weave.",
  },
];

/* Mesh | Wire Dia (SWG) | Wire Dia (mm) | Opening (mm) | Approx Open Area % */
export const meshGaugeChart = [
  { mesh: "1", swg: "-", wireMm: 3, opening: 22.40, openArea: 77 },
  { mesh: "1", swg: "-", wireMm: 2.5, opening: 22.90, openArea: 81 },
  { mesh: "2", swg: "-", wireMm: 3, opening: 9.70, openArea: 58 },
  { mesh: "2", swg: "-", wireMm: 2.5, opening: 10.20, openArea: 64 },
  { mesh: "2", swg: "14", wireMm: 2, opening: 10.70, openArea: 70 },
  { mesh: "3", swg: "-", wireMm: 2.5, opening: 5.96, openArea: 49 },
  { mesh: "3", swg: "14", wireMm: 2, opening: 6.46, openArea: 58 },
  { mesh: "3", swg: "-", wireMm: 1.5, opening: 6.96, openArea: 67 },
  { mesh: "4", swg: "14", wireMm: 2, opening: 4.35, openArea: 46 },
  { mesh: "4", swg: "-", wireMm: 1.5, opening: 4.85, openArea: 58 },
  { mesh: "4", swg: "18", wireMm: 1.2, opening: 5.15, openArea: 65 },
  { mesh: "4", swg: "20", wireMm: 0.9, opening: 5.45, openArea: 73 },
  { mesh: "5", swg: "14", wireMm: 2, opening: 3.08, openArea: 36 },
  { mesh: "5", swg: "-", wireMm: 1.5, opening: 3.58, openArea: 49 },
  { mesh: "5", swg: "18", wireMm: 1.2, opening: 3.88, openArea: 58 },
  { mesh: "6", swg: "-", wireMm: 1.5, opening: 2.73, openArea: 41 },
  { mesh: "6", swg: "18", wireMm: 1.2, opening: 3.03, openArea: 51 },
  { mesh: "6", swg: "20", wireMm: 0.9, opening: 3.33, openArea: 62 },
  { mesh: "8", swg: "-", wireMm: 1.5, opening: 1.67, openArea: 27 },
  { mesh: "8", swg: "18", wireMm: 1.2, opening: 1.97, openArea: 38 },
  { mesh: "8", swg: "19", wireMm: 1, opening: 2.17, openArea: 46 },
  { mesh: "8", swg: "20", wireMm: 0.9, opening: 2.27, openArea: 51 },
  { mesh: "8", swg: "21", wireMm: 0.8, opening: 2.37, openArea: 55 },
  { mesh: "8", swg: "22", wireMm: 0.7, opening: 2.47, openArea: 60 },
  { mesh: "8", swg: "23", wireMm: 0.6, opening: 2.57, openArea: 65 },
  { mesh: "8", swg: "24", wireMm: 0.55, opening: 2.62, openArea: 68 },
  { mesh: "8", swg: "25", wireMm: 0.5, opening: 2.67, openArea: 70 },
  { mesh: "10", swg: "20", wireMm: 0.9, opening: 1.64, openArea: 41 },
  { mesh: "10", swg: "21", wireMm: 0.8, opening: 1.74, openArea: 46 },
  { mesh: "10", swg: "22", wireMm: 0.7, opening: 1.84, openArea: 52 },
  { mesh: "10", swg: "23", wireMm: 0.6, opening: 1.94, openArea: 58 },
  { mesh: "10", swg: "24", wireMm: 0.55, opening: 1.99, openArea: 61 },
  { mesh: "10", swg: "25", wireMm: 0.5, opening: 2.04, openArea: 64 },
  { mesh: "12", swg: "22", wireMm: 0.7, opening: 1.41, openArea: 44 },
  { mesh: "12", swg: "23", wireMm: 0.6, opening: 1.51, openArea: 51 },
  { mesh: "12", swg: "24", wireMm: 0.55, opening: 1.56, openArea: 54 },
  { mesh: "12", swg: "25", wireMm: 0.5, opening: 1.61, openArea: 58 },
  { mesh: "12", swg: "26", wireMm: 0.45, opening: 1.66, openArea: 62 },
  { mesh: "14", swg: "24", wireMm: 0.55, opening: 1.26, openArea: 48 },
  { mesh: "14", swg: "25", wireMm: 0.5, opening: 1.31, openArea: 52 },
  { mesh: "14", swg: "26", wireMm: 0.45, opening: 1.36, openArea: 56 },
  { mesh: "14", swg: "27", wireMm: 0.4, opening: 1.41, openArea: 60 },
  { mesh: "16", swg: "23", wireMm: 0.6, opening: 0.98, openArea: 38 },
  { mesh: "16", swg: "24", wireMm: 0.55, opening: 1.03, openArea: 42 },
  { mesh: "16", swg: "25", wireMm: 0.5, opening: 1.08, openArea: 46 },
  { mesh: "16", swg: "26", wireMm: 0.45, opening: 1.13, openArea: 51 },
  { mesh: "16", swg: "27", wireMm: 0.4, opening: 1.18, openArea: 55 },
  { mesh: "16", swg: "28", wireMm: 0.37, opening: 1.21, openArea: 58 },
  { mesh: "16", swg: "30", wireMm: 0.3, opening: 1.28, openArea: 65 },
  { mesh: "16", swg: "32", wireMm: 0.27, opening: 1.31, openArea: 68 },
  { mesh: "16", swg: "33", wireMm: 0.25, opening: 1.33, openArea: 70 },
  { mesh: "16", swg: "34", wireMm: 0.22, opening: 1.36, openArea: 74 },
  { mesh: "18", swg: "24", wireMm: 0.55, opening: 0.86, openArea: 37 },
  { mesh: "18", swg: "25", wireMm: 0.5, opening: 0.91, openArea: 41 },
  { mesh: "18", swg: "26", wireMm: 0.45, opening: 0.96, openArea: 46 },
  { mesh: "18", swg: "27", wireMm: 0.4, opening: 1.01, openArea: 51 },
  { mesh: "18", swg: "28", wireMm: 0.37, opening: 1.04, openArea: 54 },
  { mesh: "18", swg: "30", wireMm: 0.3, opening: 1.11, openArea: 62 },
  { mesh: "18", swg: "32", wireMm: 0.27, opening: 1.14, openArea: 65 },
  { mesh: "18", swg: "33", wireMm: 0.25, opening: 1.16, openArea: 67 },
  { mesh: "20", swg: "24", wireMm: 0.55, opening: 0.72, openArea: 32 },
  { mesh: "20", swg: "25", wireMm: 0.5, opening: 0.77, openArea: 36 },
  { mesh: "20", swg: "26", wireMm: 0.45, opening: 0.82, openArea: 41 },
  { mesh: "20", swg: "27", wireMm: 0.4, opening: 0.87, openArea: 46 },
  { mesh: "20", swg: "28", wireMm: 0.37, opening: 0.90, openArea: 50 },
  { mesh: "20", swg: "30", wireMm: 0.3, opening: 0.97, openArea: 58 },
  { mesh: "20", swg: "32", wireMm: 0.27, opening: 1.00, openArea: 62 },
  { mesh: "20", swg: "33", wireMm: 0.25, opening: 1.02, openArea: 64 },
  { mesh: "20", swg: "36", wireMm: 0.19, opening: 1.08, openArea: 72 },
  { mesh: "24", swg: "27", wireMm: 0.4, opening: 0.65, openArea: 38 },
  { mesh: "24", swg: "28", wireMm: 0.37, opening: 0.68, openArea: 42 },
  { mesh: "24", swg: "30", wireMm: 0.3, opening: 0.75, openArea: 51 },
  { mesh: "24", swg: "32", wireMm: 0.27, opening: 0.78, openArea: 55 },
  { mesh: "30", swg: "28", wireMm: 0.37, opening: 0.47, openArea: 31 },
  { mesh: "30", swg: "30", wireMm: 0.3, opening: 0.54, openArea: 41 },
  { mesh: "30", swg: "32", wireMm: 0.27, opening: 0.57, openArea: 46 },
  { mesh: "30", swg: "33", wireMm: 0.25, opening: 0.59, openArea: 49 },
  { mesh: "30", swg: "34", wireMm: 0.22, opening: 0.62, openArea: 54 },
  { mesh: "30", swg: "36", wireMm: 0.19, opening: 0.65, openArea: 60 },
  { mesh: "36", swg: "33", wireMm: 0.25, opening: 0.45, openArea: 41 },
  { mesh: "36", swg: "34", wireMm: 0.22, opening: 0.48, openArea: 47 },
  { mesh: "36", swg: "36", wireMm: 0.19, opening: 0.51, openArea: 53 },
  { mesh: "40", swg: "32", wireMm: 0.27, opening: 0.36, openArea: 33 },
  { mesh: "40", swg: "33", wireMm: 0.25, opening: 0.38, openArea: 36 },
  { mesh: "40", swg: "34", wireMm: 0.22, opening: 0.41, openArea: 42 },
  { mesh: "40", swg: "36", wireMm: 0.19, opening: 0.44, openArea: 49 },
  { mesh: "50", swg: "34", wireMm: 0.22, opening: 0.28, openArea: 32 },
  { mesh: "50", swg: "36", wireMm: 0.19, opening: 0.31, openArea: 39 },
  { mesh: "50", swg: "38", wireMm: 0.15, opening: 0.35, openArea: 49 },
  { mesh: "60", swg: "36", wireMm: 0.19, opening: 0.23, openArea: 30 },
  { mesh: "60", swg: "38", wireMm: 0.15, opening: 0.27, openArea: 41 },
  { mesh: "80", swg: "40", wireMm: 0.12, opening: 0.19, openArea: 38 },
  { mesh: "80", swg: "42", wireMm: 0.1, opening: 0.21, openArea: 46 },
  { mesh: "100", swg: "42", wireMm: 0.1, opening: 0.15, openArea: 36 },
  { mesh: "100", swg: "44", wireMm: 0.08, opening: 0.17, openArea: 46 },
  { mesh: "120", swg: "44", wireMm: 0.08, opening: 0.13, openArea: 38 },
  { mesh: "150", swg: "45", wireMm: 0.07, opening: 0.09, openArea: 34 },
  { mesh: "150", swg: "46", wireMm: 0.06, opening: 0.10, openArea: 41 },
  { mesh: "200", swg: "47", wireMm: 0.05, opening: 0.077, openArea: 36 },
  { mesh: "250", swg: "48", wireMm: 0.04, opening: 0.061, openArea: 36 },
  { mesh: "300", swg: "48", wireMm: 0.04, opening: 0.044, openArea: 27 },
  { mesh: "325", swg: "-", wireMm: 0.035, opening: 0.043, openArea: 30 },
  { mesh: "400", swg: "49", wireMm: 0.03, opening: 0.033, openArea: 27 },
  { mesh: "500", swg: "50", wireMm: 0.025, opening: 0.025, openArea: 25 },
];
