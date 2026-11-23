# Backlog — parked ideas and open points

Not started unless Cornel says go. Move items to `decisions.md` once decided.

## Parked by Cornel
- **Upload & See: link it to a product** (Cornel, 2026-11-23, "doen we later (morgen)"): the flow (`sketches/upload-see-flow.html`, functional with the
  customer's own file, its Add to cart already writes a prototype cart line) still stands alone with a fixed product (Standard flyers A5, 1,000,
  double-sided, €33.49). Next: the PDP's "Upload your design" opens the flow, and the flow takes the PDP's configuration (size, so the shape and cut-off
  maths no longer assume A5; quantity, paper, sides, delivery, price).
- **Upload & See: skip steps and double info** (Cornel, 2026-11-23, "voor morgen"): some interactions / steps can go and some information is said twice
  (e.g. the sending screen, check result next to approve, the bar's total next to the cards). First look again at staging for animations we don't copy
  (they may carry what now reads double), then propose which steps to merge or skip.
- **Print technique icons** (Cornel, 2026-11-17, "skip, remember for later"): wave 2 of the all-categories run, "Print technique" in 81 products.
  10 new icons (screen print, pad print, full colour, transfer, DTF transfer, screen transfer, laser engraving, hot stamping, embossing, UV print)
  + 4 reused (No imprint = `inks/none`, Screenround = screen print, Engraving = laser, Digital sticker = `stickers/contour`). Three directions in
  `sketches/print-technique-icons-sketch.html` (A the tool, B the result, C a letter badge); my pick A. Not chosen yet.
- **Bands + dark block on marketing pages** (Cornel, 2026-11-16, after the Figma VIP page: "nog niet overtuigd, maar heel goede setup,
  komen we later op terug"): full-width bands in white / `--light-grey` / `--dark-green` (64 white between sections as now + 64 inside,
  32/32 mobile; edge to edge with one `border-image`, no seam on dark) and the help strip `.hc-team` dark inside the column with a team
  cut-out on its bottom edge. A/B/C on the real about us in `sketches/bands-sketch.html` (rhythm map, frames scroll together); my pick B
  (grey + the promises as one dark band + the dark block). Open localhost, not as a file.
- **Labels on roll icons** (Cornel, 2026-11-16, "pakken we later op"): dispenser without/with, core 40/76 and the roll winding 1–4.
  Directions in `sketches/sticker-icons-sketch.html` (A flat roll from the side, the A on one big label turns; B a 3/4 cylinder). My pick was A.
- **Brand Guidelines as PDF** (Cornel, 2026-11-12): once the HTML brand book (`brand-guidelines/`) is done, offer the whole guide
  as a PDF in the right styling too: one 1920×1080 page per slide, same look as the HTML (print CSS / `@page` at 1920×1080, background
  colours and photos printed). Probably next to "Download brand kit". Not started.
- **Brand Guidelines motion** (Cornel, 2026-11-22, "hier maken we later een keuze in"): off for now, the switch is gone; the three
  variants stay in the code and show with ?motion=a|b|c: A fade up, B reveal, C big type. When Cornel picks: make that one the
  default and remove the others. My pick: A with C's line reveal for the statements.
- **Brand Guidelines in 3D** (Cornel, 2026-11-22, "laat 3d maar ff zitten"): parked. Sketch `sketches/brand-3d-sketch.html` on the real
  slides: A tilted wall, B tunnel, C infinite canvas. My pick was A.
- **Brand kit contents** (Cornel, 2026-11-12): "Download brand kit" (top right in the Brand Guidelines) is a link to nothing for now;
  the files (logo master artwork, PNG/SVG variants, colours, fonts) come later.
- **Discount code box** — built on the desktop cart (2026-11-02, "+ Add discount code", also shown on payment).
  Still open: the field on the mobile cart, and the code on the details page.
- **PO / reference number** — built on details (2026-11-06, Business only). Still open: show it (with the company) in the payment
  summary and on confirmed; a field for everyone instead?
- **My account / logged-in pages** beyond checkout (ask for Figma frames first).
- **Team banner photo**: a real photoshoot of experts at work would be stronger long-term (current: Cornel's export).

## Open questions / next steps
- **Help Centre**: hub built (concept D, 2026-10-28). Next: topic page ("View all N articles"), Report a problem form, question page; styling round with Cornel.
- **Help Centre visuals** (Cornel, 2026-10-29): the page needs extra visuals; Cornel doesn't know how yet and will come back to it.
- **Blog photos** on business cards are only 406 × 230 on Contentful (soft on desktop) — swap when Cornel has sharper ones.
- **"Unique Business Card Materials"** (live block repeating 3 card types) left out on purpose; revisit only if asked.
- **VAT switch on mobile**: removed from the USP bar; only on PDP/cart now. Proposal: add it to the menu drawer next to
  Ireland (bottom). Waiting for Cornel.
- **Review count**: 35,364 in the widgets and the reviews rows now; 34,760 may still be in the home trust card and PDP
  review notes. Align when asked.
- **Premium Tote Bags** best-seller uses the same image as Basic Cotton Bags (no own photo yet).
- **Category pages** (business cards, flyers, promotional) still show the grey Trustpilot card on mobile — hide too?
- **Promo cards with text in the image** (booklets "BOOKLETS10", gifts "10% OFF") clash with HTML titles → content rule
  for Contentful: no text in images, one image + focal point, title ±35 chars.

## Niels' feedback (home + navigation, 2026-10-26) — answered in concept, partly built
- Done: Trustpilot crawlable on top (USP ticker / desktop widget), VAT off the mobile home header, leaner promo cards
  (style E, no subtext on hero cards), Team/Promises subtext separate from the CTA, reviews swipe row.
- Open: search results list vs 2-column grid (proposal: list for suggestions, grid for results page; 6 suggestions +
  "See all N results"), "From €2.75 each" in search, homepage chips = top 15 subcategories via Contentful Block BI with
  a mobile chip setting, chip row should end at the last chip + 16px, footer bottom (B Corp, payments, legal) upgrade,
  USPs on product cards (check PLP), labels restyle, help widget text.

## Earlier notes (2026-10-20), done
Menu "Shop all" row per level, images everywhere in the menu, login/Ireland sticky at the drawer bottom, colour logo
marquee, PDP edit button in the sticky bar (H).
