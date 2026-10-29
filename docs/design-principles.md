# Design principles — how Cornel thinks

Distilled from ~6 weeks of building the prototype together (Oct 2026) and the design-system work before it
(Aug–Sep 2026). Each principle has the reason and real examples, so a new session can apply the thinking,
not just copy the result.

## 1. Calm over loud ("geen kermis")
Every label, colour, line or badge has to earn its place. When in doubt, leave it out.
- Recommended labels: only where there really is a recommended path, in the prototype's own style
  (orange "Most Popular" badge type, or a calm green bar at the bottom of the card) — never copied uppercase
  tinted tags from the live site. A star icon was rejected.
- Separator lines between options: not needed; hover states instead.
- Grey info box + icon under the options: "too much, back to basic".
- Delivery: no labels on the date tiles, no extra deadline line under the step (the deadline is in the summary).

## 2. One style per row, consistent everywhere
- Icons in one row must be of one kind (all paper sheets, or all banners) — mixing a material sheet with a
  different icon type is "niet lekker en inconsequent".
- Same option card, same outline colour (`--outline` #cfcfcf), same radio style (the quantity radio) everywhere.
- Same terminology everywhere (shipping/billing address; one thickness scale for all paper products).
- One promo-card component for every banner on the home, mobile and desktop.

## 3. The 8px grid
Spacing is 8/16/24/32. Applied to gaps between steps, icon–text distance (16px), card gaps.
Note: he tests it and sometimes reverts (e.g. a full 8px-grid pass on promo cards was reverted; promo gap went
8 → 16 → 8 → 16). Apply it, show it, accept his eye as final.

## 4. Product is the hero, images must be honest
- Material icons look like paper: square corners, a crisp 1px border, subtle fluid gradients, a folded corner.
  Not rounded, not too soft, not too hard.
- Icons show what you get: double-sided finishing = two stacked sheets; "Special" = three overlapping sheets
  (several materials); no finishing = subtle crossed circle; banners have no eyelets on size/material icons
  (rings come only with the finishing option).
- Product mockups (Weave work): the product must be 100% the real product — the AI may not hallucinate details.
- No text baked into banner images (it clashes with HTML titles and breaks on other crops). Offers/codes go in the
  title field — also crawlable.

## 5. Separate "what you buy" from "how you deliver your design"
The PDP journey is: configure the product → then the design choice (Upload later / Design online (Canva) /
Upload your design). He wants a clear split between product selection and design options; the CTA wording
follows the real next step ("Add your design", "Continue", "Start designing").

## 6. SEO and crawlability are design requirements
- Options visible on the page (flow J), not hidden in a sheet, because it's better for SEO.
- Trustpilot score as real HTML text, not an image ("See our 35,364 reviews on ★ Trustpilot").
- Specs table built from all configuration options, with cross-links only where people actually choose
  (size, material appearance) — not paper thickness ("link-feest").

## 7. Conversion: keep the CTA in view, make upsell visible
- The add-to-cart / continue CTA is always reachable (sticky bar on mobile, fixed order bar on desktop).
- Quantity in 2 columns so low→high runs and price advantage are visible at a glance (Niels).
- Delivery side by side with a calendar-tile date, to make faster turnaround an upsell.
- Heatmaps showed users click gallery arrows instead of CTAs → on mobile only the main photo, no arrows/dots.

## 8. Mobile first, desktop reuses it
Desktop shows everything that's new on mobile, 1:1 in content and wording. Reuse assets and components;
only the layout changes (configuration directly visible next to the gallery).

## 9. Real content over lorem ipsum
Pull option names, texts, images, promos from the live site (en-ie; en-gb as extra). Invented values are fine
for prices/reviews in the prototype but should look plausible and be consistent across the site.

## 10. Readability details he always checks
- Equal text sizes in comparable blocks (left card is the base).
- Titles semibold (600), dates bold, labels in black when they carry info.
- Sub text under a title is dark grey (`--dark-grey`), never black, so title and sub read apart (review cards, card texts).
- Equal spacing above and below; things aligned to the content edge ("in het lood").
- Lines: one colour everywhere, `--line` #e4e4e4 (dividers, tab lines, accordions, footer, card outlines). Control
  outlines (pills, buttons, option cards) keep their own outline colour.
- Buttons: rounded pills; white pill with grey outline for secondary; arrow buttons in the same pill style.

## 11. How he likes to work with Claude
- Sketch first for anything new; give 3 options with a recommendation; build behind a switch; he picks; clean up.
- He iterates fast with tiny follow-ups ("iets lichter", "4px ipv 8px"); each one is a real request.
- He wants the honest senior UX/UI opinion ("zet je ux bril op"), including pushback.
- Shareable state: a copied URL must open the same version (switch values in the URL).

## 12. The system for category pages (CLP/PLP), Oct 28 2026 — apply to every new page
Built on promotional.html (PLP), business-cards.html and flyers.html (CLP). Shared CSS: `.plp` (+ `.clp` for CLPs).
- **Structure and order follow the live page** (en-ie). Content comes from live; check the live page section by section
  before building. Products are shown as product cards, categories as category cards — never mix them up.
- **No Trustpilot rating line under the intro** (it's in the header). A reviews row (home component) after the products.
- **SEO text is always last** (on pages that have one). A content block (photo + text) is not SEO text: keep it where
  live has it, in the "Make it stand out" row style (`.so-row`), photo on the 50% grid column.
- **Spacing (desktop):** 32px between blocks, 8px from a section title (or lead line) to its block, 8px from the intro to
  the tab bar, 16px inside grids. **Mobile:** 16px between blocks, 32px around a promo-card block.
- **Grey category tiles are 120px tall everywhere** (also in rows of their own). A promo card + categories block: the
  card stops in the middle (50/50, same edge as the 4-column rows), 3 tile rows = 392px.
- **Rows never leave an orphan:** 4 or 5 items stay one row on desktop; 6 → 3×2. Edges line up with the content edge
  and with the columns of the blocks above/below.
- **Text scale (one line height per size):** body 12/18 mobile, 14/22 desktop (intro, selling points, materials,
  content text, SEO text, lead lines); labels 12/17; card titles 16/22 desktop, 14 mobile (semibold, black); section
  titles 24/32 desktop, 20/24 mobile; titles on a photo card on mobile = section title size (20/24).
- **Headings never end with a full stop.**
- **Cards on desktop:** outline `--line`, soft shadow only on hover (0 2px 8px, 8%). FAQ questions = card titles on
  category pages (16/22), 14px on the PDP (in line with its specs/templates).
  Exception: the Help Centre question lists (long lists of 20–40 questions) use the PDP size, 14/20 (Cornel, 2026-10-29).
- **Colours:** sub text under a title dark grey; titles black; inline links green underlined (as breadcrumbs).
- **Cards:** category cards always square (152 home / 184 category pages on mobile; desktop fills the row, image fills
  the card above the title, title 16/22). Grey tiles (`.dc-card`: title top left, image right, grey arrow) for
  "related"/bottom category rows and next to promo cards. Product cards: green ticks (#00ad4c, 2.2 stroke) for the
  selling points, "N pieces for" + a real price (never "Configure & see price"). Ticks only for selling points,
  never for product facts: size cards keep their small centred card, the size as plain text, the use as a tick.
- **Shared UI:** tabs semibold everywhere, light tab line (`--line` #e4e4e4); review/promo arrows = round white 40px button with
  grey outline, floating on the row edge; USP bar light grey; material icons everywhere instead of swatches.
- **Rejected, don't retry:** tinted tiles next to promo cards (fixed or photo colour).
