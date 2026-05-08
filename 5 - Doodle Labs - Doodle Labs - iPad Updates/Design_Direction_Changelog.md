# Doodle Labs Product Pages — Dark Mode Changelog
**Pages:** All 7 — Boost, Mini, Nano, Nano², Nimble, OEM, Wearable
**Date:** 2026-05-04 → 2026-05-08
**Baseline:** `stylev12.css` (light mode) + 7 original HTML files
**Output:** `stylev12-dark.css` (shared) + 7 dark mode HTML files in `5 - Doodle Labs - Doodle Labs - iPad Updates/`

---

## 1. Color system — full inversion

| Token | Original (light) | Dark mode | Role |
|---|---|---|---|
| `--surface-body` | `#E7F4FB` | `#222222` (Gray 4) | Body / alternating section bg |
| `--surface-hero` | `herobkg.png` (gradient image) | `#000000` (Black) | Hero + alternating section bg |
| `--surface-elevated` | `white` | `#222222` | Advantage cards, form container |
| `--surface-spec-pill` | `#F7F7F7` | `#333333` | Spec row title + value blocks, form inputs |
| `--surface-callout` | gradient fill (12% opacity) | `#6A6A6A` (Gray 3) | Category title pills |
| `--surface-callout-light` | n/a | `#EEEEEE` (Gray 1) | Deployed by section (inverted) |
| `--text-primary` | `#212323` | `#FFFFFF` | All text on dark surfaces |
| `--text-on-light` | n/a | `#000000` | Text on light callout surfaces |
| `--border-subtle` | `#d7d7d7` | `#FFFFFF` | Currently unused (borders removed from cards and inputs) |
| `--border-input` | `#d7d7d7` | `#FFFFFF` | Currently unused (input borders removed) |

---

## 2. Gradient usage — reduced to 1 moment

| Element | Original | Dark mode |
|---|---|---|
| Hero background | Full gradient image (`herobkg.png`) | Flat `#000000` — no gradient |
| Category pills (`.atributes-title`) | Gradient fill (pink-orange-cyan) | Solid `#6A6A6A` (Gray 3) |
| Accordion active state | Gradient at 12% opacity | N/A — accordion removed, replaced by static cards |
| "Commonly used in" box border | 4-side gradient border | N/A — section removed |
| Common-line separators | Gradient line | N/A — section removed |
| Form CTA (`.form-btn`) | Gradient fill (pink-orange-cyan) | **Pechella/Solvyn gradient** (`#EDB950` → `#FFEA9E`) — the only gradient moment |

### CTA states

| State | Treatment |
|---|---|
| Default | `linear-gradient(90deg, #EDB950 0%, #FFEA9E 100%)` with black text |
| Hover / Active | Solid `#FFEA9E` (Solvyn) with black text |

---

## 3. Layout — full bleed sections

| Change | Original | Dark mode |
|---|---|---|
| Section margins | `margin: 65px 35px` (card layout) | `margin: 0` — full bleed edge-to-edge |
| Section padding | `padding: 80px 60px` (inside cards) | `padding: 80px 60px` (content padding only) |
| Section backgrounds | `white` cards on `#E7F4FB` body | Alternating `#000` / `#222` full bleed |
| Section border-radius | `32px` on all section cards | `0` everywhere |
| Section gaps | `65px` margin-top between cards | `0` — flush sections, bg contrast separates |

### Section background alternation (current, post-removal of Commonly Used In and Use Case)

| Section | Background |
|---|---|
| Hero | `#000000` |
| Deployed by | `#EEEEEE` (inverted callout) |
| Doodle advantage | `#000000` |
| Technical features | `#222222` |
| Footer | `#000000` |

---

## 4. Border-radius — all removed

Every `border-radius` value set to `0`. Sharp corners throughout per brand guidelines.

---

## 5. Typography — Gotham implemented

Gotham font files (Book/Medium/Bold) sourced from `05-CreativeOps/Clients/Doodle Labs/Brand/Assets/Font/` and copied to `assets/fonts/`.

| Variable | Value | Role |
|---|---|---|
| `--font-bold` | GothamBold | Hero title, section headings, footer titles |
| `--font-medium` | GothamMedium | Advantage card titles, spec row labels, category pills |
| `--font-book` | GothamBook | Hero subtitle, body text, spec values, form labels, CTA |
| `--font-ui` | GothamBook | Form labels, input text |
| `--font-ui-bold` | GothamMedium | Hero action CTA, popup text |

---

## 6. Text alignment — editorial style

| Element | Original | Dark mode |
|---|---|---|
| Section titles | `text-align: center` | `text-align: left` |
| All content sections | `text-align: center` | `text-align: left` |
| Hero title/subtitle | `text-align: center` | `text-align: center` (kept — hero exception) |

---

## 7. Text case

| Context | Rule |
|---|---|
| Section headings | Sentence case ("Technical features", "Doodle advantage", "Deployed by", etc.) |
| Spec row titles | Title Case ("Operating Range", "Max Data Throughput", "Antenna Connectors", etc.) |
| Hero CTA | Sentence case, arrow removed ("Technical features") |
| Footer titles | Sentence case ("Save this page", "Sign up to get in touch") |

---

## 8. Sections removed (all 7 pages)

| Section | Reason |
|---|---|
| **Commonly used in** | Removed per client direction |
| **Use case** (video section) | Removed per client direction |

---

## 9. Deployed by section — inverted callout

| Change | Original | Dark mode |
|---|---|---|
| Background | No card (on body `#E7F4FB`) | `#EEEEEE` (Gray 1) — inverted moment |
| Title color | `#212323` | `#000000` |
| Logo image filter | None needed | `filter: none` |

---

## 10. Doodle advantage — redesigned (all 7 pages)

The entire accordion + video layout was replaced with a static card grid.

| Change | Original | Dark mode |
|---|---|---|
| Structure | 3 video groups × 3 accordion cards = 9 items | 6 static cards in 2-column grid |
| Videos | 3 looping videos (Performance, Scalability, Platform) | Removed |
| Accordion behavior | Expand/collapse with +/- icons | Removed — all cards always visible |
| Card background | `white` (collapsed) / gradient tint (expanded) | `#222222` (`--surface-elevated`) |
| Card borders | `1px solid #d7d7d7` | `none` |
| Layout | Video (42%) + cards (58%) side by side | 2-column grid, `20px` gap |

### Card content (shared across all 7 pages)

| Card | Description |
|---|---|
| EW Resilience | Frequency agility in under 100 ms |
| Multiband | Up to 9 bands in a single radio |
| Long Range | Field-proven over 330 km/200 miles |
| Mesh Network | 100 nodes, self-healing mesh |
| Scalable | +200k radios annual capacity and 2 week lead times |
| High Throughput | 80 Mbps single-radio · 150 Mbps dual |

---

## 11. Shadows — removed

| Element | Original | Dark mode |
|---|---|---|
| `.atributes-container` | `box-shadow: 0 4px 20px rgba(0,0,0,0.1)` | `none` |
| `.form-container` | `box-shadow: 0 4px 20px rgba(0,0,0,0.1)` | `none` |
| `.popup` | `box-shadow: 0 4px 20px rgba(0,0,0,0.1)` | `0 4px 20px rgba(0,0,0,0.4)` |

---

## 12. Spec table structure

| Change | Original | Dark mode |
|---|---|---|
| `.atributes-container` padding | `24px` | `0` — rows match category title width |
| `.atributes-container` background | white (implicit) | `transparent` |
| Category title vs rows | Both similar bg | Category: `#6A6A6A`, Rows: `#333333` — two-level hierarchy |
| Row height matching | Independent | `align-items: stretch` — both columns always match height |
| Spec row titles | Mixed case | Title Case enforced across all 7 pages |
| Frequencies row | Combined Multiband/Single Band in one cell | Split into two rows: "Frequencies (Multiband)" + "Frequencies (Single Band)" |
| "Max Data Throughout" typo | Present in 4 pages | Corrected to "Max Data Throughput" |

---

## 13. Hero CTA

| Change | Original | Dark mode |
|---|---|---|
| Text | "→ Technical Features" | "Technical features" (arrow removed, sentence case) |
| Style | Plain text link | `1px solid white` outline box with padding |
| Hover/Active | None | Border thickens to `3px` (padding compensated to prevent layout shift) |

---

## 14. Form section

| Change | Original | Dark mode |
|---|---|---|
| "Sign up to get in touch" | Outside `.form-container` | Moved inside `.form-container` |
| Footer divider | `1px solid` vertical line between QR and form | Removed |
| Input background | white | `#333333` |
| Input border | `1px solid #d7d7d7` | `none` |
| Input text color | dark (inherited) | `#FFFFFF` |
| Placeholder color | default | `rgba(255,255,255,0.5)` |
| Required asterisks | `color: red` | `color: white` |
| CTA gradient | pink-orange-cyan | Pechella → Solvyn (`#EDB950` → `#FFEA9E`) |
| CTA text color | white | black (`--text-on-light`) |
| "Save this page" spacing | Tight to QR | `margin-bottom: 32px` added |

---

## 15. Asset updates

| Asset | Change |
|---|---|
| `certifications.png` | Replaced with dark-bg-friendly version (CE, FCC, ICC, Blue UAS, NDAA) |
| `NanoBrands.png` | Replaced with updated partner logos (Teal, Agility Robotics, Good Friday Robotics, Darkhive, +1) |
| Gotham fonts | `Gotham-Bold.otf`, `Gotham-Medium.otf`, `Gotham-Book.otf` added to `assets/fonts/` |
| `boostgif.gif` | Replaced with optimized version (<100MB for GitHub) |

---

## 16. Content updates (Milestone 2 — 5 pages with spec changes)

Spec values updated per CSV files in `Updated specs/` for: Boost, Mini, Nano², OEM, Wearable. Nano and Nimble had no content changes. Full diff documented in `Spec_diff_report.md`.

---

## Pending / verify

| Item | Status | Notes |
|---|---|---|
| `Logo-Stacked.svg` | Verify | Check if SVG renders white on `#000` hero across all pages |
| `nimbleCerts.png`, `oemCerts.png`, `WeareableCerts.png` | Verify | May need dark-bg-friendly replacements like `certifications.png` |
| Deployed by logos (all pages except Nano) | Verify | `MiniBrands.png`, `nimbleBrands.png`, `OEMbrands.png`, `weareableBrands.png` — check rendering on `#EEEEEE` |
| Deployed by logo containers | Pending | Client requested square corners — requires individual logo assets or new composites |