export const productSeries = [
  {
    id: "1xxx",
    name: "1xxx Series",
    subtitle: "≥99% Pure Aluminum",
    mainProperty: "Excellent corrosion resistance, high electrical & thermal conductivity, very soft",
    examples: ["1050", "1060", "1100"],
    applications: [
      "Electrical conductors & bus bars",
      "Chemical equipment",
      "Heat exchangers",
      "Food & pharmaceutical containers",
      "Reflectors, lighting",
      "Decorative sheets"
    ],
    image: "/images/series/1.jpeg",
    warnings: null,
    strength: "Low",
    corrosion: "Excellent",
    weldability: "Excellent",
    heatTreatable: false,
    process: [
      { step: 1, title: "Raw Material Intake", description: "High-purity aluminum ingots (≥99% Al) are sourced, certified, and inspected against chemical specifications." },
      { step: 2, title: "Melting & Refining", description: "Ingots are melted in an induction furnace at 700–750 °C. Hydrogen degassing removes gas pockets; dross is skimmed off." },
      { step: 3, title: "DC Casting", description: "Molten aluminum is Direct Chill (DC) cast into large rolling slabs, ensuring a fine, uniform grain structure." },
      { step: 4, title: "Hot & Cold Rolling", description: "Slabs are hot-rolled at 450–500 °C to intermediate gauge, then cold-rolled to precise final thickness and flatness." },
      { step: 5, title: "Annealing", description: "O-temper anneal at 340–380 °C fully recrystallises the structure, delivering maximum softness and formability." },
      { step: 6, title: "Quality Inspection", description: "Chemical analysis (OES), tensile testing, and dimensional verification confirm the product meets standards before dispatch." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "1050", chemSymbol: "Al99.5",  si: "0.25", fe: "0.40", cu: "0.05", mn: "0.05", mg: "0.05", cr: "—",  zn: "0.05", ti: "0.03" },
        { alloy: "1060", chemSymbol: "Al99.6",  si: "0.25", fe: "0.35", cu: "0.05", mn: "0.03", mg: "0.03", cr: "—",  zn: "0.05", ti: "0.03" },
        { alloy: "1100", chemSymbol: "Al99.0",  si: "Si+Fe: 0.95", fe: "—", cu: "0.05–0.20", mn: "0.05", mg: "—",  cr: "—",  zn: "0.10", ti: "—"  }
      ]
    }
  },
  {
    id: "2xxx",
    name: "2xxx Series",
    subtitle: "Aluminum-Copper Alloys",
    mainProperty: "High strength-to-weight ratio, good machinability, heat treatable",
    examples: ["2014", "2017", "2024"],
    applications: [
      "Aircraft structures",
      "Automotive components",
      "Military equipment",
      "Truck frames",
      "Suspension components"
    ],
    image: "/images/series/2.jpeg",
    warnings: "Requires surface protection in corrosive environments",
    strength: "High",
    corrosion: "Poor",
    weldability: "Poor",
    heatTreatable: true,
    process: [
      { step: 1, title: "Material Preparation", description: "Primary aluminum and copper/magnesium master alloys are weighed to hit precise target compositions (Cu 3.5–5.0%)." },
      { step: 2, title: "Melting & Alloying", description: "Elements dissolved in sequence at 720–760 °C. Ti-B grain refiner and flux treatments ensure a clean melt." },
      { step: 3, title: "DC Casting", description: "Direct Chill casting into billets or rolling ingots; homogenisation soak at 480–500 °C for 12–24 h equalises composition." },
      { step: 4, title: "Hot Working", description: "Billets are rolled or forged at 400–450 °C through multiple reduction passes to the required shape and gauge." },
      { step: 5, title: "Solution Heat Treatment", description: "Rapid heating to 490–503 °C fully dissolves alloying elements, followed immediately by cold-water quench to lock the supersaturated state." },
      { step: 6, title: "Precipitation Hardening", description: "Artificial aging at 120–130 °C (T6 temper) precipitates fine CuAl₂ particles for peak strength. Final tensile and hardness inspection." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "2014", chemSymbol: "AlCu4SiMg",  si: "0.50–1.2", fe: "0.70", cu: "3.9–5.0", mn: "0.40–1.2", mg: "0.20–0.80", cr: "0.10", zn: "0.25", ti: "0.15" },
        { alloy: "2017", chemSymbol: "AlCu4MgSi",  si: "0.20–0.80", fe: "0.70", cu: "3.5–4.5", mn: "0.40–1.0", mg: "0.40–0.80", cr: "0.10", zn: "0.25", ti: "0.15" },
        { alloy: "2024", chemSymbol: "AlCu4Mg1",   si: "0.50",      fe: "0.50", cu: "3.8–4.9", mn: "0.30–0.9", mg: "1.2–1.8",    cr: "0.10", zn: "0.25", ti: "0.15" }
      ]
    }
  },
  {
    id: "3xxx",
    name: "3xxx Series",
    subtitle: "Aluminum-Manganese Alloys",
    mainProperty: "Good corrosion resistance, moderate strength, excellent formability",
    examples: ["3003", "3004", "3105"],
    applications: [
      "Cooking utensils",
      "Heat exchangers",
      "Storage tanks",
      "Roofing & siding",
      "Beverage cans",
      "HVAC systems"
    ],
    image: "/images/series/3.jpeg",
    warnings: null,
    strength: "Low-Medium",
    corrosion: "Good",
    weldability: "Excellent",
    heatTreatable: false,
    process: [
      { step: 1, title: "Raw Material", description: "Aluminum ingots and manganese master alloy additions (1.0–1.8 % Mn) are prepared and weighed to specification." },
      { step: 2, title: "Melting & Alloying", description: "Mn is dissolved into the melt at 720–760 °C, providing solid-solution strengthening without sacrificing corrosion resistance." },
      { step: 3, title: "DC Casting", description: "Molten alloy is cast into large rolling slabs via Direct Chill process with careful cooling rate control." },
      { step: 4, title: "Hot Rolling", description: "Multi-pass hot rolling at 450–500 °C breaks down the cast structure and forms Al₆Mn dispersoid particles that control grain growth." },
      { step: 5, title: "Cold Rolling", description: "Further rolling at room temperature achieves precise final thickness, improved surface quality, and H-temper work hardening." },
      { step: 6, title: "Final Anneal & Inspection", description: "Controlled annealing for O-temper products delivers peak formability. Chemical, mechanical, and surface inspection complete the process." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "3003", chemSymbol: "AlMn1Cu",   si: "0.60", fe: "0.70", cu: "0.05–0.20", mn: "1.0–1.5",   mg: "—",       cr: "—", zn: "0.10", ti: "—"   },
        { alloy: "3004", chemSymbol: "AlMn1Mg1",  si: "0.30", fe: "0.70", cu: "0.25",       mn: "1.0–1.5",   mg: "0.8–1.3", cr: "—", zn: "0.25", ti: "—"   },
        { alloy: "3105", chemSymbol: "AlMn0.5Mg0.5", si: "0.60", fe: "0.70", cu: "0.30",    mn: "0.30–0.80", mg: "0.20–0.80", cr: "0.20", zn: "0.40", ti: "0.10" }
      ]
    }
  },
  {
    id: "4xxx",
    name: "4xxx Series",
    subtitle: "Aluminum-Silicon Alloys",
    mainProperty: "Low melting point, good flow characteristics, welding filler",
    examples: ["4032", "4043", "4047"],
    applications: [
      "Welding rods & wire",
      "Brazing applications",
      "Piston alloys",
      "Architectural panels",
      "Forging applications"
    ],
    image: "/images/series/4.jpeg",
    warnings: null,
    strength: "Medium",
    corrosion: "Good",
    weldability: "Excellent",
    heatTreatable: true,
    process: [
      { step: 1, title: "Material Preparation", description: "Aluminium ingots and silicon (4–14 %) plus minor alloying elements are weighed and charged into the furnace." },
      { step: 2, title: "Melting & Alloying", description: "Silicon dissolves into the melt at 650–720 °C, lowering the liquidus to 577–600 °C range and improving fluidity." },
      { step: 3, title: "Continuous Casting", description: "Melt is continuously cast or DC cast into rod or slab form; rapid solidification refines the Si eutectic structure." },
      { step: 4, title: "Extrusion / Rolling", description: "Cast billets are extruded or hot-rolled at 350–450 °C using precision tooling to achieve the required rod or wire blank diameter." },
      { step: 5, title: "Wire Drawing", description: "Multiple cold-drawing passes through tungsten-carbide dies progressively reduce the diameter to final welding wire or brazing rod size." },
      { step: 6, title: "Inspection & Packaging", description: "Chemical composition verified by OES; tensile and bend tests performed. Wire spooled or rods cut to length and labelled." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "4032", chemSymbol: "AlSi12.5MgCuNi", si: "11.0–13.5", fe: "1.0",  cu: "0.50–1.3", mn: "—",    mg: "0.8–1.3", cr: "—", zn: "0.25", ti: "—"   },
        { alloy: "4043", chemSymbol: "AlSi5",            si: "4.5–6.0",  fe: "0.80", cu: "0.30",     mn: "0.05", mg: "0.05",    cr: "—", zn: "0.10", ti: "0.20" },
        { alloy: "4047", chemSymbol: "AlSi12",           si: "11.0–13.0", fe: "0.80", cu: "0.30",    mn: "0.15", mg: "0.10",    cr: "—", zn: "0.20", ti: "—"   }
      ]
    }
  },
  {
    id: "5xxx",
    name: "5xxx Series",
    subtitle: "Aluminum-Magnesium Alloys",
    mainProperty: "Excellent corrosion resistance, good strength, excellent weldability",
    examples: ["5052", "5083", "5086", "5454"],
    applications: [
      "Marine applications",
      "Pressure vessels",
      "Transportation",
      "Architectural trim",
      "Storage tanks",
      "Shipbuilding"
    ],
    image: "/images/series/5.jpeg",
    warnings: "Work hardening can occur during fabrication",
    strength: "Medium-High",
    corrosion: "Excellent",
    weldability: "Excellent",
    heatTreatable: false,
    process: [
      { step: 1, title: "Raw Material", description: "High-purity aluminum ingots and magnesium additions (2–5 % Mg) plus trace elements are sourced and weighed." },
      { step: 2, title: "Melting & Alloying", description: "Mg is plunged below the melt surface at 720 °C to prevent oxidation. Careful flux treatment controls the MgO inclusion level." },
      { step: 3, title: "DC Casting", description: "Alloy is DC cast into rolling slabs with strict hydrogen control (≤0.10 ml/100g) to prevent porosity." },
      { step: 4, title: "Homogenisation", description: "Slabs soaked at 480–520 °C for 6–10 h to dissolve Mg-rich phases and equalise composition across the cross-section." },
      { step: 5, title: "Hot & Cold Rolling", description: "Hot rolling at 450 °C followed by cold rolling delivers H-temper work hardening or is interrupted for O-temper anneal." },
      { step: 6, title: "Final Treatment & Inspection", description: "Stabilisation anneal (H116/H321) for marine-grade tempers. Intergranular corrosion (IGC) and sensitisation tests confirm compliance." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "5052", chemSymbol: "AlMg2.5",  si: "0.25", fe: "0.40", cu: "0.10", mn: "0.10",      mg: "2.2–2.8", cr: "0.15–0.35", zn: "0.10", ti: "—"   },
        { alloy: "5083", chemSymbol: "AlMg4.5Mn0.7", si: "0.40", fe: "0.40", cu: "0.10", mn: "0.40–1.0", mg: "4.0–4.9", cr: "0.05–0.25", zn: "0.25", ti: "0.15" },
        { alloy: "5086", chemSymbol: "AlMg4",    si: "0.40", fe: "0.50", cu: "0.10", mn: "0.20–0.70", mg: "3.5–4.5", cr: "0.05–0.25", zn: "0.25", ti: "0.15" },
        { alloy: "5454", chemSymbol: "AlMg3Mn",  si: "0.25", fe: "0.40", cu: "0.10", mn: "0.50–1.0",  mg: "2.4–3.0", cr: "0.05–0.20", zn: "0.25", ti: "0.20" }
      ]
    }
  },
  {
    id: "6xxx",
    name: "6xxx Series",
    subtitle: "Aluminum-Magnesium-Silicon Alloys",
    mainProperty: "Good strength, excellent corrosion resistance, heat treatable, extrudable",
    examples: ["6061", "6063", "6082"],
    applications: [
      "Structural applications",
      "Architectural extrusions",
      "Automotive parts",
      "Bicycle frames",
      "Pipe & tubing",
      "Machine parts"
    ],
    image: "/images/series/6.jpeg",
    warnings: null,
    strength: "Medium-High",
    corrosion: "Good",
    weldability: "Good",
    heatTreatable: true,
    process: [
      { step: 1, title: "Material Preparation", description: "Mg and Si additions are balanced to target Mg₂Si phase (Mg:Si = 1.73:1) for maximum precipitation hardening response." },
      { step: 2, title: "Melting & Alloying", description: "Elements dissolved at 720–750 °C. Ti-B grain refiner added; rotary degasser removes hydrogen to ≤0.08 ml/100g." },
      { step: 3, title: "Billet Casting", description: "DC cast into cylindrical billets sized for the extrusion press; homogenisation at 570–580 °C for 4–6 h." },
      { step: 4, title: "Hot Extrusion", description: "Billets preheated to 480–530 °C and pushed through precision dies at 5–30 m/min to produce complex cross-sectional profiles." },
      { step: 5, title: "Solution Treatment & Quench", description: "Exit temperature controlled so quench from the press (T5) or separate solution furnace (T6) locks Mg and Si in solid solution." },
      { step: 6, title: "Artificial Aging (T6)", description: "Aged at 160–175 °C for 6–10 h; Mg₂Si precipitates deliver peak strength. Tensile, hardness, and profile dimension checks complete the process." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "6061", chemSymbol: "AlMg1SiCu",   si: "0.40–0.80", fe: "0.70", cu: "0.15–0.40", mn: "0.15", mg: "0.80–1.2",  cr: "0.04–0.35", zn: "0.25", ti: "0.15" },
        { alloy: "6063", chemSymbol: "AlMg0.7Si",    si: "0.20–0.60", fe: "0.35", cu: "0.10",       mn: "0.10", mg: "0.45–0.90", cr: "0.10",       zn: "0.10", ti: "0.10" },
        { alloy: "6082", chemSymbol: "AlSi1MgMn",   si: "0.70–1.3",  fe: "0.50", cu: "0.10",       mn: "0.40–1.0", mg: "0.60–1.2", cr: "0.25",    zn: "0.20", ti: "0.10" }
      ]
    }
  },
  {
    id: "7xxx",
    name: "7xxx Series",
    subtitle: "Aluminum-Zinc Alloys",
    mainProperty: "Highest strength aluminum alloys, heat treatable, aerospace grade",
    examples: ["7075", "7050", "7068"],
    applications: [
      "Aircraft structures",
      "Aerospace components",
      "High-stress applications",
      "Sports equipment",
      "Military applications",
      "Mold tooling"
    ],
    image: "/images/series/7.jpeg",
    warnings: "Stress corrosion cracking susceptible, requires proper heat treatment",
    strength: "Very High",
    corrosion: "Fair",
    weldability: "Poor",
    heatTreatable: true,
    process: [
      { step: 1, title: "Material Preparation", description: "High-purity Al combined with Zn (5–8 %), Mg, and Cu master alloys; all materials certified to aerospace traceability requirements." },
      { step: 2, title: "Melting & Alloying", description: "Sequential element additions at 730–760 °C; multi-stage rotary degassing reduces hydrogen to ≤0.06 ml/100g for porosity-free material." },
      { step: 3, title: "DC Casting & Homogenisation", description: "Cast into thick-section billets; 24+ h homogenisation soak at 460–480 °C dissolves Zn-Mg-Cu phases and reduces segregation." },
      { step: 4, title: "Hot Working", description: "Rolled or forged at 380–440 °C through carefully controlled reduction ratios to develop the required wrought microstructure." },
      { step: 5, title: "Solution Treatment & Quench", description: "Solution treatment at 465–475 °C followed by immediate cold-water or polymer quench — quench rate is critical to final strength." },
      { step: 6, title: "Multi-Stage Aging (T73/T76)", description: "Two-step overaging (100 °C + 165 °C) provides resistance to stress corrosion cracking. Extensive tensile, fracture toughness, and SCC testing." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "7050", chemSymbol: "AlZn6CuMgZr",  si: "0.12", fe: "0.15", cu: "2.0–2.6", mn: "0.10", mg: "1.9–2.6", cr: "0.04", zn: "5.7–6.7", ti: "0.06" },
        { alloy: "7068", chemSymbol: "AlZn7.5MgCu",  si: "0.12", fe: "0.15", cu: "1.6–2.4", mn: "0.10", mg: "2.2–3.0", cr: "0.05", zn: "7.2–8.2", ti: "0.10" },
        { alloy: "7075", chemSymbol: "AlZn5.5MgCu",  si: "0.40", fe: "0.50", cu: "1.2–2.0", mn: "0.30", mg: "2.1–2.9", cr: "0.18–0.28", zn: "5.1–6.1", ti: "0.20" }
      ]
    }
  },
  {
    id: "8xxx",
    name: "8xxx Series",
    subtitle: "Other Elements (Li, Fe, etc.)",
    mainProperty: "Specialized properties depending on alloying elements",
    examples: ["8011", "8079", "8176"],
    applications: [
      "Foil applications",
      "Electrical conductors",
      "Heat sinks",
      "Lithium alloys (aerospace)",
      "Specialized industrial uses"
    ],
    image: "/images/series/8.jpeg",
    warnings: "Properties vary significantly based on specific alloy",
    strength: "Varies",
    corrosion: "Varies",
    weldability: "Varies",
    heatTreatable: "Varies",
    process: [
      { step: 1, title: "Material Preparation", description: "Specialty alloying elements (Fe, Si, Li, etc.) are precisely weighed; ultra-high-purity base aluminum used for foil-grade products." },
      { step: 2, title: "Melting & Alloying", description: "Fine alloying at 700–740 °C with precise composition control; inline melt filtration removes inclusions critical for foil rolling." },
      { step: 3, title: "DC Casting", description: "Cast into thin rolling slabs (300–500 mm thick); rapid solidification creates fine intermetallic dispersoids needed for foil rollability." },
      { step: 4, title: "Hot Rolling", description: "Initial breakdown rolling at 450–500 °C reduces slab to 4–6 mm coil; rolling schedule optimised to avoid surface cracking." },
      { step: 5, title: "Cold Rolling & Foil Rolling", description: "Sequential cold rolling passes with intermediate anneals reduce gauge down to final thickness (as thin as 6 μm for foil products)." },
      { step: 6, title: "Annealing & Inspection", description: "Final soft anneal at 220–260 °C; pin-hole detection, thickness verification by X-ray gauge, and foil integrity tests confirm quality." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "8011", chemSymbol: "AlFeSi",  si: "0.50–0.90", fe: "0.60–1.0", cu: "0.10", mn: "0.20", mg: "0.05", cr: "—", zn: "0.10", ti: "0.08" },
        { alloy: "8079", chemSymbol: "AlFe1.2Si", si: "0.05",    fe: "0.70–1.3", cu: "0.05", mn: "0.05", mg: "0.05", cr: "—", zn: "0.10", ti: "—"   },
        { alloy: "8176", chemSymbol: "AlFe1Si",   si: "0.03–0.15", fe: "0.40–1.0", cu: "0.05", mn: "—",   mg: "—",   cr: "—", zn: "—",   ti: "—"   }
      ]
    }
  },
  {
    id: "wire-mesh",
    name: "Aluminium Wire Mesh",
    subtitle: "Woven & Welded Mesh Solutions",
    mainProperty: "Lightweight woven aluminium mesh with excellent corrosion resistance, high electrical conductivity, and easy formability — one-third the weight of steel",
    examples: ["5052 Mesh", "5056 Mesh", "6061 Mesh", "1350 Mesh"],
    applications: [
      "Window & door insect screens",
      "Air & water filtration systems",
      "Aerospace heat exchangers",
      "Marine boat & dock panels",
      "Architectural facades & ventilation",
      "Industrial sieving & separation"
    ],
    image: "/images/series/wire-mesh.jpeg",
    warnings: "Will corrode in contact with alkaline solutions and hydrochloric or hydrofluoric acids",
    strength: "Medium",
    corrosion: "Good",
    weldability: "Good",
    heatTreatable: false,
    process: [
      { step: 1, title: "Wire Drawing", description: "5052/5056/6061 rods are drawn through progressive tungsten-carbide dies, reducing diameter in stages to the specified wire size (0.1–5 mm)." },
      { step: 2, title: "Annealing", description: "Drawn wire is annealed to relieve work hardening, improve flexibility for weaving, and achieve a bright, oxide-free surface finish." },
      { step: 3, title: "Weaving / Welding", description: "For woven mesh: warp and weft wires are interlaced on a mechanical loom to the specified aperture. For welded mesh: wires are resistance-welded at intersections." },
      { step: 4, title: "Tensioning & Flattening", description: "Mesh is stretched on a tensioning frame to ensure flat, uniform aperture dimensions and eliminate any waviness from the weaving process." },
      { step: 5, title: "Cutting & Edge Finishing", description: "Rolls are slit to standard widths on rotary shears; edges trimmed and selvedged or bound to prevent wire unravelling." },
      { step: 6, title: "QC & Packaging", description: "Aperture, wire diameter, and mesh count verified by optical measurement; salt-spray corrosion test samples taken; rolls labelled and packaged." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "5052", chemSymbol: "AlMg2.5",     si: "0.25", fe: "0.40", cu: "0.10", mn: "0.10",      mg: "2.2–2.8", cr: "0.15–0.35", zn: "0.10", ti: "—"   },
        { alloy: "5056", chemSymbol: "AlMg5Cr",     si: "0.30", fe: "0.40", cu: "0.10", mn: "0.05–0.20", mg: "4.5–5.6", cr: "0.05–0.20", zn: "0.10", ti: "—"   },
        { alloy: "6061", chemSymbol: "AlMg1SiCu",   si: "0.40–0.80", fe: "0.70", cu: "0.15–0.40", mn: "0.15", mg: "0.80–1.2", cr: "0.04–0.35", zn: "0.25", ti: "0.15" },
        { alloy: "1350", chemSymbol: "E-Al99.5",    si: "0.10", fe: "0.40", cu: "0.05", mn: "0.01",      mg: "—",       cr: "—",          zn: "0.05", ti: "0.03" }
      ]
    }
  },
  {
    id: "wire-rod",
    name: "Wire Rod 6–12 mm",
    subtitle: "Aluminium Wire Rod for Electrical & Industrial Use",
    mainProperty: "High electrical conductivity (up to 63% IACS), lightweight at 2.71 g/cm³, excellent surface finish with natural oxide protection — ideal for power transmission and downstream wire drawing",
    examples: ["EC1350 Rod", "6101 Rod", "6201 Rod"],
    applications: [
      "Electrical cables & conductors",
      "Overhead transmission lines",
      "Automotive wiring harnesses",
      "Fasteners & rivets manufacturing",
      "Cold heading & forging stock",
      "Downstream wire drawing"
    ],
    image: "/images/series/wire-rod.jpeg",
    warnings: "Diameter tolerance of ±0.5 mm — verify specifications for precision applications",
    strength: "Medium",
    corrosion: "Good",
    weldability: "Good",
    heatTreatable: true,
    process: [
      { step: 1, title: "Billet Preparation", description: "EC1350/6101 aluminium billets are preheated in a gas-fired tunnel furnace to 450–500 °C for uniform temperature distribution." },
      { step: 2, title: "Continuous Casting & Rolling (CCR)", description: "Molten metal is cast via a twin-belt caster and immediately hot-rolled in-line (Properzi/CCR process) for energy-efficient rod production." },
      { step: 3, title: "Hot Rolling", description: "A continuous multi-stand rolling mill reduces the rod diameter from the cast cross-section to 6–12 mm in multiple passes at 400–480 °C." },
      { step: 4, title: "Quench & Temper", description: "Water quench immediately after the final roll pass achieves T1 temper, locking in conductivity and providing a clean, bright surface." },
      { step: 5, title: "Coiling", description: "Rod is coiled on a Stelmor-type cooling conveyor; controlled air cooling prevents surface oxidation and ensures uniform temper along the coil length." },
      { step: 6, title: "Inspection & Dispatch", description: "Electrical conductivity (% IACS) measured per coil; surface, dimensional, and tensile tests performed. Coils tagged with full traceability data." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "EC1350", chemSymbol: "E-Al99.5",   si: "0.10", fe: "0.40", cu: "0.05", mn: "0.01",       mg: "—",        cr: "—",   zn: "0.05", ti: "0.03" },
        { alloy: "6101",   chemSymbol: "AlMgSi0.5",  si: "0.30–0.70", fe: "0.50", cu: "0.10", mn: "0.03", mg: "0.35–0.80", cr: "0.03", zn: "0.10", ti: "—"   },
        { alloy: "6201",   chemSymbol: "AlMg0.6Si0.9", si: "0.50–0.90", fe: "0.50", cu: "0.10", mn: "0.03", mg: "0.60–0.90", cr: "0.03", zn: "0.10", ti: "—" }
      ]
    },
    packagingSpecs: [
      {
        style: "Wire Rod — Alignment Rolling",
        description: "Large industrial coils for high-volume wire drawing and downstream processing.",
        specs: [
          { size: "7.0 ~ 35Φ", intDia: "750", extDia: "1,450", width: "950", weight: "2,000 kg" },
          { size: "7.0 ~ 35Φ", intDia: "750", extDia: "1,100", width: "950", weight: "1,000 kg" }
        ]
      },
      {
        style: "Coil Style",
        description: "Open coils for general industrial use and downstream processing lines.",
        specs: [
          { size: "0.8 ~ 1.8Φ",  intDia: "280",       extDia: "450",         width: "—", weight: "MAX 20 kg" },
          { size: "1.3 ~ 3.0Φ",  intDia: "320",       extDia: "600",         width: "—", weight: "MAX 40 kg" },
          { size: "1.9 ~ 6.5Φ",  intDia: "450",       extDia: "700",         width: "—", weight: "MAX 50 kg" },
          { size: "6.4 ~ 25Φ ①", intDia: "600",       extDia: "1,100",       width: "—", weight: "50–200 kg" },
          { size: "6.4 ~ 25Φ ②", intDia: "850",       extDia: "1,300",       width: "—", weight: "MAX 300 kg" },
          { size: "22 ~ 30Φ",    intDia: "800–1,000", extDia: "1,100–1,400", width: "—", weight: "MAX 500 kg" },
          { size: "7.0 ~ 30Φ",   intDia: "750",       extDia: "1,450",       width: "920", weight: "1,000–2,000 kg" }
        ]
      },
      {
        style: "Carrier Style",
        description: "Precision spools for automated processing, CNC machines, and controlled pay-off systems.",
        specs: [
          { size: "0.8 ~ 1.8Φ",  intDia: "260",   extDia: "450",   width: "—", weight: "MAX 80 kg" },
          { size: "1.3 ~ 3.0Φ",  intDia: "320",   extDia: "600",   width: "—", weight: "MAX 200 kg" },
          { size: "1.9 ~ 6.5Φ",  intDia: "400",   extDia: "700",   width: "—", weight: "MAX 200 kg" },
          { size: "6.4 ~ 25Φ ①", intDia: "600",   extDia: "1,100", width: "—", weight: "MAX 500 kg" },
          { size: "6.4 ~ 25Φ ②", intDia: "850",   extDia: "1,300", width: "—", weight: "MAX 500 kg" },
          { size: "22 ~ 30Φ",    intDia: "1,100", extDia: "1,200", width: "—", weight: "MAX 500 kg" }
        ]
      }
    ]
  },

  /* ── Individual Wire Mesh Products ── */
  {
    id: "5052-mesh",
    name: "5052 Mesh",
    subtitle: "AlMg2.5 — General Purpose Wire Mesh",
    mainProperty: "Excellent corrosion resistance in marine and atmospheric environments, good formability, and high fatigue strength — the most widely used aluminium mesh alloy",
    examples: ["5052"],
    applications: [
      "Window & door insect screens",
      "Air & water filtration",
      "Marine boat panels",
      "Architectural facades",
      "HVAC ventilation grilles",
      "General industrial mesh"
    ],
    image: "/images/series/wire-mesh.jpeg",
    warnings: null,
    strength: "Medium",
    corrosion: "Excellent",
    weldability: "Good",
    heatTreatable: false,
    process: [
      { step: 1, title: "Wire Drawing", description: "5052 rods drawn through progressive tungsten-carbide dies, reducing diameter in stages to the specified wire size (0.1–5 mm)." },
      { step: 2, title: "Annealing", description: "Drawn wire is annealed to relieve work hardening, improve flexibility for weaving, and achieve a bright, oxide-free surface finish." },
      { step: 3, title: "Weaving / Welding", description: "For woven mesh: warp and weft wires interlaced on a mechanical loom. For welded mesh: wires resistance-welded at intersections." },
      { step: 4, title: "Tensioning & Flattening", description: "Mesh stretched on a tensioning frame to ensure flat, uniform aperture dimensions and eliminate waviness from the weaving process." },
      { step: 5, title: "Cutting & Edge Finishing", description: "Rolls slit to standard widths on rotary shears; edges trimmed and selvedged or bound to prevent wire unravelling." },
      { step: 6, title: "QC & Packaging", description: "Aperture, wire diameter, and mesh count verified by optical measurement; salt-spray corrosion test samples taken; rolls labelled and packaged." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "5052", chemSymbol: "AlMg2.5", si: "0.25", fe: "0.40", cu: "0.10", mn: "0.10", mg: "2.2–2.8", cr: "0.15–0.35", zn: "0.10", ti: "—" }
      ]
    }
  },
  {
    id: "5056-mesh",
    name: "5056 Mesh",
    subtitle: "AlMg5Cr — High-Magnesium Wire Mesh",
    mainProperty: "Highest strength among non-heat-treatable aluminium mesh alloys, with excellent corrosion resistance — ideal for heavy-duty industrial and marine mesh applications",
    examples: ["5056"],
    applications: [
      "Heavy-duty industrial sieving",
      "Offshore & marine structures",
      "Aerospace heat exchangers",
      "Chemical processing screens",
      "Security mesh panels",
      "High-load filtration systems"
    ],
    image: "/images/series/wire-mesh.jpeg",
    warnings: null,
    strength: "Medium-High",
    corrosion: "Excellent",
    weldability: "Good",
    heatTreatable: false,
    process: [
      { step: 1, title: "Wire Drawing", description: "5056 rods drawn through progressive tungsten-carbide dies, reducing diameter in stages to the specified wire size (0.1–5 mm)." },
      { step: 2, title: "Annealing", description: "Drawn wire is annealed to relieve work hardening, improve flexibility for weaving, and achieve a bright, oxide-free surface finish." },
      { step: 3, title: "Weaving / Welding", description: "For woven mesh: warp and weft wires interlaced on a mechanical loom. For welded mesh: wires resistance-welded at intersections." },
      { step: 4, title: "Tensioning & Flattening", description: "Mesh stretched on a tensioning frame to ensure flat, uniform aperture dimensions and eliminate waviness from the weaving process." },
      { step: 5, title: "Cutting & Edge Finishing", description: "Rolls slit to standard widths on rotary shears; edges trimmed and selvedged or bound to prevent wire unravelling." },
      { step: 6, title: "QC & Packaging", description: "Aperture, wire diameter, and mesh count verified by optical measurement; salt-spray corrosion test samples taken; rolls labelled and packaged." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "5056", chemSymbol: "AlMg5Cr", si: "0.30", fe: "0.40", cu: "0.10", mn: "0.05–0.20", mg: "4.5–5.6", cr: "0.05–0.20", zn: "0.10", ti: "—" }
      ]
    }
  },
  {
    id: "6061-mesh",
    name: "6061 Mesh",
    subtitle: "AlMg1SiCu — Heat-Treatable Structural Mesh",
    mainProperty: "Good strength and corrosion resistance with heat-treatable response — versatile structural mesh suitable for welded assemblies and demanding mechanical applications",
    examples: ["6061"],
    applications: [
      "Structural mesh panels",
      "Aerospace enclosures",
      "Welded industrial frames",
      "Architectural screens",
      "Automotive grilles",
      "Defence & security panels"
    ],
    image: "/images/series/wire-mesh.jpeg",
    warnings: null,
    strength: "Medium-High",
    corrosion: "Good",
    weldability: "Good",
    heatTreatable: true,
    process: [
      { step: 1, title: "Wire Drawing", description: "6061 rods drawn through progressive tungsten-carbide dies, reducing diameter in stages to the specified wire size (0.1–5 mm)." },
      { step: 2, title: "Annealing", description: "Drawn wire is annealed to relieve work hardening, improve flexibility for weaving, and achieve a bright, oxide-free surface finish." },
      { step: 3, title: "Weaving / Welding", description: "For woven mesh: warp and weft wires interlaced on a mechanical loom. For welded mesh: wires resistance-welded at intersections." },
      { step: 4, title: "Tensioning & Flattening", description: "Mesh stretched on a tensioning frame to ensure flat, uniform aperture dimensions and eliminate waviness from the weaving process." },
      { step: 5, title: "Cutting & Edge Finishing", description: "Rolls slit to standard widths on rotary shears; edges trimmed and selvedged or bound to prevent wire unravelling." },
      { step: 6, title: "QC & Packaging", description: "Aperture, wire diameter, and mesh count verified by optical measurement; salt-spray corrosion test samples taken; rolls labelled and packaged." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "6061", chemSymbol: "AlMg1SiCu", si: "0.40–0.80", fe: "0.70", cu: "0.15–0.40", mn: "0.15", mg: "0.80–1.2", cr: "0.04–0.35", zn: "0.25", ti: "0.15" }
      ]
    }
  },
  {
    id: "1350-mesh",
    name: "1350 Mesh",
    subtitle: "E-Al99.5 — High-Conductivity Electrical Mesh",
    mainProperty: "Highest electrical conductivity of all aluminium mesh grades (61% IACS), excellent corrosion resistance and formability — the standard choice for electrical and EMI shielding mesh",
    examples: ["1350"],
    applications: [
      "EMI & RF shielding screens",
      "Electrical enclosure vents",
      "Heat exchanger mesh",
      "Window screens",
      "Decorative & lighting panels",
      "Food & pharmaceutical screens"
    ],
    image: "/images/series/wire-mesh.jpeg",
    warnings: null,
    strength: "Low",
    corrosion: "Excellent",
    weldability: "Excellent",
    heatTreatable: false,
    process: [
      { step: 1, title: "Wire Drawing", description: "1350 rods drawn through progressive tungsten-carbide dies, reducing diameter in stages to the specified wire size (0.1–5 mm)." },
      { step: 2, title: "Annealing", description: "Drawn wire is annealed to relieve work hardening, improve flexibility for weaving, and achieve a bright, oxide-free surface finish." },
      { step: 3, title: "Weaving / Welding", description: "For woven mesh: warp and weft wires interlaced on a mechanical loom. For welded mesh: wires resistance-welded at intersections." },
      { step: 4, title: "Tensioning & Flattening", description: "Mesh stretched on a tensioning frame to ensure flat, uniform aperture dimensions and eliminate waviness from the weaving process." },
      { step: 5, title: "Cutting & Edge Finishing", description: "Rolls slit to standard widths on rotary shears; edges trimmed and selvedged or bound to prevent wire unravelling." },
      { step: 6, title: "QC & Packaging", description: "Aperture, wire diameter, and mesh count verified by optical measurement; salt-spray corrosion test samples taken; rolls labelled and packaged." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "1350", chemSymbol: "E-Al99.5", si: "0.10", fe: "0.40", cu: "0.05", mn: "0.01", mg: "—", cr: "—", zn: "0.05", ti: "0.03" }
      ]
    }
  },

  /* ── Individual Wire Rod Products ── */
  {
    id: "ec1350-rod",
    name: "EC1350 Rod",
    subtitle: "E-Al99.5 — Electrical Conductor Grade Wire Rod",
    mainProperty: "Minimum 61% IACS electrical conductivity, ultra-low impurity levels, and excellent drawability — the global standard for overhead transmission lines and electrical cable manufacture",
    examples: ["EC1350"],
    applications: [
      "Overhead transmission lines",
      "Electrical cables & conductors",
      "Power distribution networks",
      "Bus bars & connectors",
      "EMI shielding wire",
      "Downstream wire drawing"
    ],
    image: "/images/series/wire-rod.jpeg",
    warnings: null,
    strength: "Low",
    corrosion: "Excellent",
    weldability: "Excellent",
    heatTreatable: false,
    process: [
      { step: 1, title: "Billet Preparation", description: "EC1350 aluminium billets preheated in a gas-fired tunnel furnace to 450–500 °C for uniform temperature distribution." },
      { step: 2, title: "Continuous Casting & Rolling (CCR)", description: "Molten metal cast via twin-belt caster and immediately hot-rolled in-line (Properzi/CCR process) for energy-efficient rod production." },
      { step: 3, title: "Hot Rolling", description: "Continuous multi-stand rolling mill reduces rod diameter to 6–12 mm in multiple passes at 400–480 °C." },
      { step: 4, title: "Quench & Temper", description: "Water quench after the final roll pass achieves T1 temper, locking in conductivity and providing a clean, bright surface." },
      { step: 5, title: "Coiling", description: "Rod coiled on a Stelmor-type cooling conveyor; controlled air cooling prevents surface oxidation and ensures uniform temper." },
      { step: 6, title: "Inspection & Dispatch", description: "Electrical conductivity (% IACS) measured per coil; surface, dimensional, and tensile tests performed. Coils tagged with full traceability data." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "EC1350", chemSymbol: "E-Al99.5", si: "0.10", fe: "0.40", cu: "0.05", mn: "0.01", mg: "—", cr: "—", zn: "0.05", ti: "0.03" }
      ]
    }
  },
  {
    id: "6101-rod",
    name: "6101 Rod",
    subtitle: "AlMgSi0.5 — Heat-Treated Conductor Wire Rod",
    mainProperty: "Combines high electrical conductivity (55% IACS) with significantly better strength than EC1350 through Mg₂Si precipitation hardening — ideal for self-supporting overhead conductors",
    examples: ["6101"],
    applications: [
      "Self-supporting overhead conductors",
      "Electrical bus bars",
      "High-strength conductor cables",
      "Railway electrification wire",
      "Industrial power distribution",
      "Alloy conductor steel reinforced (ACSR)"
    ],
    image: "/images/series/wire-rod.jpeg",
    warnings: null,
    strength: "Medium",
    corrosion: "Good",
    weldability: "Good",
    heatTreatable: true,
    process: [
      { step: 1, title: "Billet Preparation", description: "6101 aluminium billets preheated to 480–510 °C, optimised for Mg₂Si dissolution prior to extrusion or rolling." },
      { step: 2, title: "Continuous Casting & Rolling (CCR)", description: "Molten metal cast via twin-belt caster and hot-rolled in-line; alloying elements remain in solid solution through rapid processing." },
      { step: 3, title: "Hot Rolling", description: "Multi-stand rolling mill reduces diameter to 6–12 mm at 420–480 °C, maintaining a fine grain structure for optimum conductivity." },
      { step: 4, title: "Quench & Temper", description: "Controlled water quench immediately after rolling locks Mg and Si in solid solution; T1 or T3 temper achieved." },
      { step: 5, title: "Artificial Aging (T6)", description: "Aged at 160–175 °C to precipitate Mg₂Si particles, delivering the target balance of strength and electrical conductivity." },
      { step: 6, title: "Inspection & Dispatch", description: "Conductivity, tensile strength, and elongation verified per coil. Coils labelled with heat number, temper, and conductivity data." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "6101", chemSymbol: "AlMgSi0.5", si: "0.30–0.70", fe: "0.50", cu: "0.10", mn: "0.03", mg: "0.35–0.80", cr: "0.03", zn: "0.10", ti: "—" }
      ]
    }
  },
  {
    id: "6201-rod",
    name: "6201 Rod",
    subtitle: "AlMg0.6Si0.9 — High-Strength Conductor Wire Rod",
    mainProperty: "Higher Mg and Si content than 6101 delivers greater tensile strength (300 MPa T81) at 52% IACS — used where long-span overhead lines demand superior mechanical performance",
    examples: ["6201"],
    applications: [
      "Long-span overhead transmission lines",
      "Automotive wiring harnesses",
      "Compact conductor cables",
      "Aerial bundled cables (ABC)",
      "High-tension power lines",
      "Downstream fine wire drawing"
    ],
    image: "/images/series/wire-rod.jpeg",
    warnings: "Stress corrosion sensitivity in T8 temper — follow recommended storage and installation guidelines",
    strength: "Medium-High",
    corrosion: "Good",
    weldability: "Good",
    heatTreatable: true,
    process: [
      { step: 1, title: "Billet Preparation", description: "6201 billets preheated to 490–520 °C; higher Si and Mg content requires careful temperature control to fully dissolve Mg₂Si phase." },
      { step: 2, title: "Continuous Casting & Rolling (CCR)", description: "Molten metal cast and hot-rolled in-line via the Properzi/CCR process; rapid solidification achieves fine grain and retained solid solution." },
      { step: 3, title: "Hot Rolling", description: "Multi-stand rolling reduces diameter to 6–12 mm at 400–460 °C; reduction schedule balances grain refinement and surface quality." },
      { step: 4, title: "Quench & Temper", description: "Immediate water quench after final pass achieves T1 temper; solution treatment ensures maximum precipitation hardening response." },
      { step: 5, title: "Artificial Aging (T81)", description: "Two-step aging cycle achieves T81 temper with peak tensile strength (300 MPa) and 52% IACS conductivity." },
      { step: 6, title: "Inspection & Dispatch", description: "Tensile, elongation, and conductivity measured per coil to IEC 60889 / ASTM B399. Full traceability certificates issued." }
    ],
    chemicalComposition: {
      standard: "EN 573-3 / AA",
      note: "Max % unless range shown. Balance: Al.",
      columns: ["Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti"],
      alloys: [
        { alloy: "6201", chemSymbol: "AlMg0.6Si0.9", si: "0.50–0.90", fe: "0.50", cu: "0.10", mn: "0.03", mg: "0.60–0.90", cr: "0.03", zn: "0.10", ti: "—" }
      ]
    }
  }
];

export const industries = [
  {
    id: "aerospace",
    name: "Aerospace & Defense",
    icon: "Plane",
    relevantSeries: ["2xxx", "7xxx", "6xxx"],
    keyBenefits: ["High strength-to-weight ratio", "Fatigue resistance", "Precision manufacturing"],
    image: "/images/industries/aerospace.jpg"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: "Car",
    relevantSeries: ["5xxx", "6xxx", "2xxx"],
    keyBenefits: ["Weight reduction", "Crash performance", "Corrosion resistance"],
    image: "/images/industries/automotive.jpg"
  },
  {
    id: "marine",
    name: "Marine & Shipbuilding",
    icon: "Ship",
    relevantSeries: ["5xxx", "6xxx"],
    keyBenefits: ["Saltwater corrosion resistance", "Weldability", "Durability"],
    image: "/images/industries/marine.jpg"
  },
  {
    id: "construction",
    name: "Construction & Architecture",
    icon: "Building",
    relevantSeries: ["6xxx", "3xxx", "1xxx"],
    keyBenefits: ["Weather resistance", "Design flexibility", "Low maintenance"],
    image: "/images/industries/construction.jpg"
  },
  {
    id: "electrical",
    name: "Electrical & Electronics",
    icon: "Zap",
    relevantSeries: ["1xxx", "8xxx", "6xxx"],
    keyBenefits: ["High conductivity", "Heat dissipation", "EMI shielding"],
    image: "/images/industries/electrical.jpg"
  },
  {
    id: "food",
    name: "Food & Pharmaceutical",
    icon: "Utensils",
    relevantSeries: ["1xxx", "3xxx", "5xxx"],
    keyBenefits: ["FDA compliance", "Easy cleaning", "Non-toxic properties"],
    image: "/images/industries/food.jpg"
  },
  {
    id: "chemical",
    name: "Chemical Processing",
    icon: "FlaskRound",
    relevantSeries: ["1xxx", "3xxx", "5xxx"],
    keyBenefits: ["Chemical resistance", "Temperature stability", "Process compatibility"],
    image: "/images/industries/chemical.jpg"
  },
  {
    id: "sports",
    name: "Sports & Recreation",
    icon: "Trophy",
    relevantSeries: ["6xxx", "7xxx", "2xxx"],
    keyBenefits: ["Lightweight performance", "Durability", "Design flexibility"],
    image: "/images/industries/sports.jpg"
  }
];

export const heroSlides = [
  {
    id: 1,
    title: "Premium Aluminum Alloys for Every Industry",
    subtitle: "Leading supplier of high-quality aluminum products across 8 different series",
    ctaText: "Explore Products",
    ctaLink: "/products",
    backgroundImage: "/images/hero/hero-slide-1.png"
  },
  {
    id: 2,
    title: "From 1xxx to 8xxx Series - Complete Range",
    subtitle: "Comprehensive aluminum solutions from pure aluminum to high-strength aerospace alloys",
    ctaText: "View Catalog",
    ctaLink: "/products",
    backgroundImage: "/images/hero/hero-slide-2.png"
  },
  {
    id: 3,
    title: "Certified Quality & Global Standards",
    subtitle: "ISO certified manufacturing with rigorous quality control and testing procedures",
    ctaText: "Learn More",
    ctaLink: "/contact",
    backgroundImage: "/images/hero/real-furnace.jpg"
  }
];

export const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management Systems",
    logo: "/images/certifications/iso-9001.svg"
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management",
    logo: "/images/certifications/iso-14001.svg"
  },
  {
    name: "AS9100D",
    description: "Aerospace Quality Standard",
    logo: "/images/certifications/as9100.svg"
  }
];
