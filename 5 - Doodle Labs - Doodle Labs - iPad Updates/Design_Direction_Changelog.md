# Doodle Labs Product Pages — Dark Mode Changelog
**Page:** Nano (direction page for Milestone 1)
**Date:** 2026-05-04
**Baseline:** `stylev12.css` (light mode) + `nano.html` (original)
**Output:** `stylev12-dark.css` + `nano.html` (dark mode, updated copy)

---

## 1. Color system — full inversion

| Token | Original (light) | Dark mode | Role |
|---|---|---|---|
| `--surface-body` | `#E7F4FB` | `#222222` (Gray 4) | Body / alternating section bg |
| `--surface-hero` | `herobkg.png` (gradient image) | `#000000` (Black) | Hero + alternating section bg |
| `--surface-elevated` | `white` | `#222222` | Accordion cards, form container |
| `--surface-spec-pill` | `#F7F7F7` | `#333333` | Spec row title + value blocks, form inputs |
| `--surface-callout` | gradient fill (12% opacity) | `#6A6A6A` (Gray 3) | Category title pills, accordion active state, use case label |
| `--surface-callout-light` | n/a | `#EEEEEE` (Gray 1) | Deployed by section (inverted) |
| `--text-primary` | `#212323` | `#FFFFFF` | All text on dark surfaces |
| `--text-on-light` | n/a | `#000000` | Text on light callout surfaces |
| `--border-subtle` | `#d7d7d7` | `#FFFFFF` | Section dividers (currently unused on cards) |
| `--border-input` | `#d7d7d7` | `#FFFFFF` | Form input borders (currently removed) |

---

## 2. Gradient usage — reduced to 2 moments

| Element | Original | Dark mode |
|---|---|---|
| Hero background | Full gradient image (`herobkg.png`) | Flat `#000000` — no gradient |
| Category pills (`.atributes-title`) | Gradient fill (pink-orange-cyan) | Solid `#6A6A6A` (Gray 3) |
| Accordion active state (`.vantage-background`) | Gradient at 12% opacity | Solid `#6A6A6A` |
| "Commonly used in" box border | 4-side gradient border | **Kept:** 1px gradient `border-top` only |
| Common-line separators | Gradient line | Solid `rgba(255,255,255,0.12)` |
| Form CTA (`.form-btn`) | Gradient fill | **Kept:** gradient fill (conversion point) |

---

## 3. Layout — full bleed sections

| Change | Original | Dark mode |
|---|---|---|
| Section margins | `margin: 65px 35px` (card layout) | `margin: 0` — full bleed edge-to-edge |
| Section padding | `padding: 80px 60px` (inside cards) | `padding: 80px 60px` (content padding only) |
| Section backgrounds | `white` cards on `#E7F4FB` body | Alternating `#000` / `#222` full bleed |
| Section border-radius | `32px` on all section cards | `0` everywhere |
| Section gaps | `65px` margin-top between cards | `0` — flush sections, bg contrast separates |

### Section background alternation

| Section | Background |
|---|---|
| Hero | `#000000` |
| Commonly used in | `#222222` + 1px gradient top border |
| Use case | `#000000` |
| Deployed by | `#EEEEEE` (inverted callout) |
| Doodle advantage | `#000000` |
| Technical features | `#222222` |
| Footer | `#000000` |

---

## 4. Border-radius — all removed

Every `border-radius` value set to `0`. Affected selectors:
- `.hero-holder`, `.commonly`, `.usecase`, `.advantage-section`, `.technical-section`, `.footer` (were `32px`)
- `.use-clip`, `.vantage-video`, `.vantage-video-holder` (were `20px`)
- `.vantage-holder`, `.vantage-background` (were `14px`)
- `.atributes-container`, `.form-container` (were `23px`)
- `.popup` (was `22px`)
- `.atributes-title` (was `200px` pill)
- `.atr-title`, `.atr-value`, `.form-btn` (were `999px` pill)
- `input` (was `10px`)

---

## 5. Typography — prepared for Gotham swap

All `font-family` declarations migrated to CSS custom properties:

| Variable | Current fallback | Target (pending font files) |
|---|---|---|
| `--font-bold` | Segoe700 | Gotham Bold |
| `--font-medium` | Segoe700 | Gotham Medium |
| `--font-book` | Segoe400 | Gotham Book |
| `--font-ui` | Inter400 | Gotham Book |
| `--font-ui-bold` | Inter700 | Gotham Medium |

**Blocked on:** client providing Gotham Book/Medium/Bold .otf or .ttf files.

---

## 6. Text alignment — editorial style

| Element | Original | Dark mode |
|---|---|---|
| Section titles | `text-align: center` | `text-align: left` |
| Advantage section | `text-align: center` | `text-align: left` |
| Technical section | `text-align: center` | `text-align: left` |
| Deployed by title | `text-align: center` | `text-align: left` |
| Use case title | `text-align: center` | `text-align: left` |
| Hero title/subtitle | `text-align: center` | `text-align: center` (kept — hero exception) |

---

## 7. Text case — sentence case per brand guidelines

All headings changed from Title Case to sentence case:

| Original | Updated |
|---|---|
| Commonly Used In | Commonly used in |
| Use Case | Use case |
| Deployed By | Deployed by |
| Doodle Advantage | Doodle advantage |
| Technical Features | Technical features |
| Performance Overview | Performance overview |
| Mesh Rider | Mesh rider |
| RF Specifications | RF specifications |
| Hardware Specifications | Hardware specifications |
| Certifications and Compliance | Certifications and compliance |
| Save This Page | Save this page |
| Sign Up To Get In Touch | Sign up to get in touch |
| → Technical Features | → Technical features |

---

## 8. Use case section — restructured

| Change | Original | Dark mode |
|---|---|---|
| Title | Large centered text above video | Floating label overlay (top-left, `#6A6A6A` bg, `18px`) |
| Video | `margin-top: 58px`, padded | Full bleed, `margin: 0`, flush to edges |
| Section padding | `80px 60px` | `0` (video is full bleed, label is positioned absolute) |

---

## 9. Deployed by section — inverted callout

| Change | Original | Dark mode |
|---|---|---|
| Background | No card (on body `#E7F4FB`) | `#EEEEEE` (Gray 1) — inverted moment |
| Title color | `#212323` | `#000000` |
| Logo image filter | None needed (dark logos on light) | `filter: none` (needs original dark logos on light bg) |

---

## 10. Accordion cards (Doodle advantage) — fixes

| Change | Original | Dark mode |
|---|---|---|
| Card background | `white` | `#222222` |
| Card border | `1px solid #d7d7d7` | `none` |
| Active state bg | Gradient at 12% opacity (translucent) | Solid `#6A6A6A` (opaque) |
| Text z-index | Not set (OK with translucent bg) | `position: relative; z-index: 1` on title + desc (required for opaque bg) |
| Plus icon | Black circle, white + (original) | No filter — circle blends into dark bg, white + visible |
| Minus icon | Black dash | `filter: invert(1)` — white dash on dark |

---

## 11. Shadows — removed

| Element | Original | Dark mode |
|---|---|---|
| `.atributes-container` | `box-shadow: 0 4px 20px rgba(0,0,0,0.1)` | `none` (removed — invisible on dark bg) |
| `.form-container` | `box-shadow: 0 4px 20px rgba(0,0,0,0.1)` | `none` |
| `.popup` | `box-shadow: 0 4px 20px rgba(0,0,0,0.1)` | `0 4px 20px rgba(0,0,0,0.4)` (darkened) |

---

## 12. Spec table structure

| Change | Original | Dark mode |
|---|---|---|
| `.atributes-container` padding | `24px` | `0` — rows match category title width |
| `.atributes-container` background | white (implicit) | `transparent` |
| Category title vs rows | Both similar bg | Category: `#6A6A6A`, Rows: `#333333` — two-level hierarchy |

---

## 13. Video overlay

| Element | Original | Dark mode |
|---|---|---|
| `.vantage-video-text` bg | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.3)` |

---

## 14. Form inputs

| Change | Original | Dark mode |
|---|---|---|
| Background | white | `#333333` |
| Border | `1px solid #d7d7d7` | `none` |
| Text color | dark (inherited) | `#FFFFFF` |
| Placeholder color | default | `rgba(255,255,255,0.5)` |

---

## Pending / blocked

| Item | Status | Dependency |
|---|---|---|
| Gotham font files (Book/Medium/Bold) | Blocked | Client to provide .otf/.ttf |
| `NanoBrands.png` dark version on `#EEEEEE` bg | Blocked | Client to provide or rebuild as HTML grid |
| `Logo-Stacked.svg` light version | Verify | Check if SVG is white or dark |
| `certifications.png` on dark bg | Verify | May need transparent/dark version |
| Vehicle SVGs on dark bg | Applied | `filter: brightness(0) invert(1)` |
| Deployed by logo containers with square corners | Blocked | Need individual logos or new composite asset |
