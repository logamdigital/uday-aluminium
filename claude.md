## Feature: Aluminium Wire Product Pages Enhancement

### Context
This site sells aluminium wire, busbar, and mesh products to procurement managers and
engineering consultants who buy against exact technical specs and standards compliance.
The current site groups products by alloy series (1xxx, 5xxx, etc.), which is not how
buyers search or think. This work has three parts: (1) add technical trust/spec blocks
to existing wire pages, (2) restructure into dedicated commercial-name product pages for
SEO, (3) enrich the Wire Mesh section with detailed spec data.

---

### Task 1 — Add Technical Blocks to Aluminium Alloy Wire Pages

Add four new content blocks to the Aluminium Alloy Wire page(s). Build each as a reusable
component so they can be dropped into other product pages later (Task 2 needs them again).

**1A. Standards Compliance Table**
Component: `StandardsTable` — columns: Standard Code | Standard Name
| Standard | Description |
|---|---|
| ASTM B230 | EC Aluminium Wire |
| ASTM B398 | Aluminium Alloy Wire |
| ASTM B399 | AAAC Conductors |
| ASTM B941 | Aluminium Alloy Wire |
| IEC 60889 | Hard Drawn Aluminium Wire |

**1B. Wire Size & Application Quick Reference**
Component: `SizeApplicationTable` — full manufacturing range is 0.25 mm – 9.00 mm.
Display this range as a headline stat, then a lookup table:
| Diameter | Common Application |
|---|---|
| 0.25 mm | Fine Mesh |
| 0.30 mm | Cable Shielding |
| 0.50 mm | Braiding |
| 0.80 mm | Weaving |
| 1.20 mm | Welding |
| 2.00 mm | Fasteners |
| 3.50 mm | General Engineering |

**1C. Temper / Hardness Table**
Component: `TemperTable`
| Temper | Description |
|---|---|
| O | Annealed (Soft) |
| H12 | Quarter Hard |
| H14 | Half Hard |
| H18 | Full Hard |
| H19 | Extra Hard |

**1D. Certification & Finish Trust Block**
Component: `CertificationBlock` — three sub-sections:
- **Mill Test Certificate (MTC):** Chemical Composition, Mechanical Properties, Heat Number, Batch Number, Dimensions
- **NABL / Government Lab Certificates:** UTS, Yield Strength, Conductivity, Elongation, Chemical Composition, Hardness
- **Finish & Packaging:** Surface finish is Bright, Clean, Oxidation-Free. Packaging options: Coils, Plastic Reels, DIN Reels, Drums

**Acceptance criteria:**
- All four blocks render on the Aluminium Alloy Wire page in the order A → B → C → D
- Tables are responsive (stack or scroll horizontally on mobile, not truncated)
- Components are built standalone (props-driven, not hardcoded) so they're reusable on the new pages in Task 2
- Match existing site's dark-theme editorial styling — no default/generic table styling

---

### Task 2 — Split Into Dedicated Commercial Product Pages (SEO restructure)

Replace the current alloy-series grouping (1xxx / 5xxx) with individual landing pages
named after commercial product terms, matching actual buyer search intent.

**New pages to create:**
1. `/products/aluminium-busbars`
2. `/products/ec-grade-aluminium-wire`
3. `/products/aluminium-alloy-wires` (covers alloys 5052, 5154, 6101, 6201, 6351 — list each as a variant/spec row, not separate pages)
4. `/products/aluminium-rods`
5. `/products/aluminium-wire-mesh-fine-wires`
6. `/products/cable-conductors`

**Uniform page template — every page above must include, in this order:**
1. Hero: product name + one-line value prop
2. Applications (bullet list or icon grid)
3. Standards Compliance (`StandardsTable` component from Task 1A)
4. Available Sizes (`SizeApplicationTable`-style component from Task 1B, values adjusted per product)
5. Mechanical Properties table (UTS, Yield Strength, Elongation — product-specific values)
6. Conductivity spec (where applicable — e.g., EC Grade, Cable Conductors, Busbars)
7. Technical Data Sheet download section (PDF download button/link)
8. Inquiry Form (direct lead capture, not a generic contact page link)

**Acceptance criteria:**
- Each page targets its own URL slug and `<title>`/meta description around its exact
  commercial name (e.g., "EC Grade Aluminium Wire Manufacturer | [Company]")
- Old alloy-series pages either redirect (301) to the new relevant product pages or are
  removed — confirm with me before deleting/redirecting live URLs
- Navigation menu updated to link to the six new pages instead of/alongside series pages
- All six pages reuse the shared components from Task 1 rather than duplicating markup

---

### Task 3 — Enhance Wire Mesh Section with Technical Spec Data

Source material: three reference PDFs (mesh types, mesh sizes, wire gauge charts) —
**[ATTACH/PROVIDE PDFs HERE — not yet supplied to Claude Code]**.

Once PDFs are provided:
- Extract mesh type classifications, standard mesh size ranges, and wire gauge charts
- Integrate as structured tables/reference charts into the existing Wire Mesh page
  (same visual language as Tasks 1 & 2 — no generic default tables)
- Cross-link to the new `/products/aluminium-wire-mesh-fine-wires` page from Task 2

**Note for Claude Code:** Do not fabricate mesh spec numbers. If the PDFs aren't in the
project yet, flag this task as blocked rather than inventing placeholder data.

---

### Build Notes (apply to all tasks)
- Reuse existing design tokens/typography — don't introduce new colors or fonts
- Keep all new components mobile-responsive
- No placeholder/lorem-ipsum content — use the exact data given above; flag anything missing rather than guessing