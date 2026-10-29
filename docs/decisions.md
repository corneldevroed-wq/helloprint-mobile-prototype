# Decision log

Newest on top. Format: **date — decision.** Why / what was rejected.
Add new decisions here when Cornel makes a final call.

## Help Centre (`help-centre.html`, Oct 28, 2026)
- **10-29 — Answers: switch F/P for colleagues** (Cornel prefers FAQ-style answers, no page per answer; to be decided internally).
  F = Getting started is the hub: under the head the topics sidebar + Quick links (grey cards) + Common questions (FAQ); a topic
  opens `help-topic.html` (no head, same sidebar, section tabs as Promotional Print, answers fold open, `#question` opens one).
  P = the 6 topic cards, topic page with rows, `help-article.html` per answer. Content shared in `help-data.js`.
- **10-29 — Head:** eyebrow "Help Centre" (grey, FAQ-question size); desktop: 2 columns of team photos per side, staggered,
  drifting slowly (80s), fading into the grey, 8px from every edge (Cornel's wire).
- **10-29 — Topic card, final:** one full-width light line under icon + title; questions as rows of the PDP specs height
  (8px 16px), no lines, no stripes, the grey list arrow (20px, as the View all arrow) right after the text. Mobile team strip:
  avatars first, then the text. Rejected: lines between/around every question, arrows at the far right, bullets, zebra rows.
- **10-29 — Topic card top = one link row** (icon tile + title side by side, hover: title green), no arrow. Questions as
  rows with full-width light lines and the grey list arrow; "View all N articles" = the green home link. Rejected: A (icon
  above the title), B with a big arrow on the right.
- **10-29 — Newsletter bar on mobile too** (was desktop only, a gap from building the footers from different Figma frames):
  one markup `SHELL_NEWS` in app.js for both footers; on mobile a green card on top of the footer, stacked (text, email field).
  It also splits the Help Centre team strip from the footer "Do you need help?" block.
- **10-29 — Topic icons = Google Material Symbols Rounded, line, 24px weight 400 (the stroke of the header cart icon)**, dark green
  on a 56px grey outlined tile (`--light-grey` + `--line`). Icons picked by Cornel: local_mall, upload, receipt,
  delivery_truck_speed, account_circle, error. Rejected: paper-style SVG icons (removed), sketch A/B/C in `help-icons-sketch.html`.
- **10-29 — Mobile = desktop:** no photo strip; the same grey outlined head block, and all topics written out as cards (one
  per row, a longer scroll) instead of the accordion. Strip and accordion code removed.
- **10-29 — Desktop head = T:** centred title, sub, search and "Can't find it?" + experts + Chat in a light grey block with the
  card outline, content width. Mobile keeps the photo strip on top (white). Rejected and removed with the switch: G (text left +
  photo grid), I (text left + one photo), S (full-width strip + centred), P (full-width band with a 3-2-1 photo pyramid each side).
- **10-29 — Head: chat with the experts = concept C** of `help-head-sketch.html`: title → sub → search, then a light line,
  "Can't find it?" + experts online (avatars 40/32, two lines) + "Chat with us". Rejected: A (pill next to the line on top),
  B (white capsule, built and replaced). "Popular" chips hidden (CSS), not removed. Desktop head switch G/I/S/T stays.
- **10-28 — Task tiles removed** (Track my order / Report a problem / Request a quote); the hero goes straight to the topics.
  Hero: no grey block, the photo strip runs full width, 8px between photos.
- **10-28 — Help Centre hub = concept D** of `help-centre-sketch.html` (start: Cornel's artifact). Centred search in a light
  grey hero with real team photos (human, "oplossend"), task tiles first (Track my order / Report a problem / Request a
  quote), then topics 3×2 and contact. Photos as one strip on top on mobile and desktop.
  Rejected: photo columns on both sides on desktop (CSS kept in the sketch), the artifact's green hero with product photos,
  "HELP CENTRE" uppercase tag, green card titles, "N articles" badges. A (1:1 artifact), B (no hero photos), C (questions
  first) stay in the sketch. Open: is "usually reply within minutes" a promise we can make?

## Promotional Print page (`promotional.html`, Oct 28, 2026)
- **10-28 — Business cards: FAQ from en-gb** (7 questions, live answers) after the blogs, before the SEO text, in the PDP
  accordion (desktop `.d-acc`, mobile `.acc.oc-faq`); answers as body text.
- **10-28 — Business cards: blogs block from en-gb** ("Get inspired by our blogs…", not on en-ie) after "Ideas beyond",
  before the SEO text: heading + "Get inspired" link + intro, the 3 articles as cards (photo, title, text, Read more):
  3 in a row on desktop, a swipe row on mobile (concept C of standout-sketch.html without the fold).
- **10-28 — No full stop after headings, anywhere** (h1/h2/h3, also the Team + Promises titles and the PDP
  "Customise your …" title).
- **10-28 — Titles on a photo card on mobile = the section title size (20/24)**, on every page: promo cards (home,
  promotional) and Team + Promises. Desktop stays 24px. A promo block on mobile sits 32px from the blocks around it.
- **10-28 — Rejected: tinted category tiles next to a promo card** (fixed accent per block, and the colour most visible in
  the photo via script). Tiles stay our grey.
- **10-28 — SEO text is always the last block** before the footer, on pages that have one (mobile + desktop). A content
  block (photo + text) is not SEO text and stays where live has it.
- **10-28 — Flyers order as live:** types → folded leaflets → reviews (ours, after the products) → sizes → materials →
  ideas (products, as product cards) → "Creative Folds" content block (photo + text, as live) → related → SEO text (made up for the
  prototype; live has none); section titles as live. Material texts and prices on the types stay ours.
- **10-28 — Flyers page = the business cards setup** (desktop + mobile): ticks on product cards, reviews row, icon materials,
  ideas as square category cards. Rows with 4 or 5 items stay one row on desktop (no orphans).
- **10-28 — One body text size on category pages:** 14/22 desktop, 12/18 mobile, dark grey (intro, selling points,
  materials, "Make it stand out"). Titles in cards = the material title (16/22 desktop, 14 mobile, semibold).
- **10-28 — Business cards "Make it stand out" = concept A** (`standout-sketch.html`): the full live text per finish
  (Multi-Layer, Eco, Spot-UV, title + 2 paragraphs), photo and text side by side on desktop switching sides, stacked on
  mobile. Rejected: A2 (mobile "Read more"), B (tabs), C (cards + Read more).
- **10-28 — Spacing on desktop category pages:** 32px between blocks, 8px from a section title to its block, 16px inside
  grids, 8px from the intro to the tab bar. 8px-grid pass on shared components (product card 8px, crumbs 16/24, reviews row 16px, category card 152×152 with
  16px padding).
- **10-28 — No Trustpilot rating line under the intro on category pages** (promotional, business cards, flyers):
  the review count is already in the header (desktop widget / mobile USP ticker).
- **10-28 — Business cards page desktop = the Promotional Print blocks.** Card types 4 per row, the last 2 each over 2 columns (full width, photo at the height of the row above);
  3 per row made the cards too big; materials use the icon
  set on mobile and desktop (new icons Multilayer, Wood); reviews row as on the home instead of the grey Trustpilot card (desktop arrows, mobile swipe row);
  "Ideas beyond business cards" = title + one row of the small square category cards (desktop 6 across, mobile swipe row).
- **10-28 — Category cards stay square everywhere** (the home "Our Top Categories" card, 149×149 on mobile). Never stretch
  them taller for a bigger image; reuse the card as is.
- **10-28 — Follow the live structure and block order 1:1, mobile and desktop**
  (https://www.helloprint.com/en-ie/promotional-printing): title + intro + 7 chips (Bestsellers, Outdoor, Stationery,
  Cards & Vouchers, Hospitality, Promotion Materials, Paper Materials) → hero (promo card + 6 categories: Booklets,
  Leaflet Printing & Flyers, Folded Leaflets, Business Cards, Posters, Cards & Invitations) → Our most popular
  promotional products (8) → Promote your Business Outdoors (4) → Everyday Print Items for Your Brand (promo card +
  6) → Cards & Vouchers (5 products) → Print Ideas Made for Hospitality (promo card + 6) → Find the Perfect Paper for
  Your Project (15 materials) → Other Promotion Materials (5) → SEO text.
  Cornel designs the layout for mobile + desktop in Figma; wait for his setup before building.
  Rejected: desktop sketch A/B/C in `promotional-desk-sketch.html` (built on the old, non-live structure).

## Homepage (Oct 21–29, 2026)
- **10-29 — Team + Promises (bottom promo row) = Figma v3 only.** Team: Cornel's export (`assets/home/team-experts.webp`,
  1278×798, the full card incl. green, Jolien & Benji with handwritten names), only "Request a quote".
  Promises: full photo with white text and white check circles. Setup 1 (text panel + inset photo) and setup 2
  (full photo) stay as CSS (`.tb-1/.tb-2`) but the switch is removed. Mobile uses the same, as a 300×400 swipe row.
  Body text equal on both cards (left = base). Export images with straight corners; the card rounds them.
- **10-28 — Mobile USP bar = one ticker over the full width; the Trustpilot review count is the first line**
  ("See our 35,364 reviews on ★ Trustpilot"), then the 4 USPs. Replaced: VAT switch (removed from the mobile
  header; VAT stays on PDP/cart), and the earlier variant A (stars + 4.5 on the right). Rejected: B/C/D in
  `usp-bar-sketch.html`.
- **10-28 — Trustpilot widget as the live site:** "See our 35,364 reviews on ★ Trustpilot" (desktop header + footer).
- **10-28 — Home order (mobile = desktop):** welcome heading (+ quick-link chips on mobile) → promo row →
  Our Top Categories → logo bar → Best Sellers → Team + Promises → reviews → Browse all we offer → SEO text → footer.
- **10-28 — Heading = "Welcome to Ireland's Leading Online Printing Service"** (as live), also shown on desktop.
- **10-28 — "Discover our categories" (grey cards, image right, grey arrow) built as alternative, hidden on desktop**
  (CSS only; delete the `.d-cats2 { display:none }` line to show it).
- **10-27 — Promo cards = style E:** title top-left on the photo (white, soft top gradient), only the live
  "Shop X" pill button (6px vertical padding), no white bar. Hover: image scales 4%. Desktop: first card spans
  2 columns, 4 visible + a peek, round arrow buttons in Shop-pill style when there are more than 4; gap 16px
  desktop / 8px mobile. Live content (en-ie promos + en-gb Gifts/Merch). Variants A–F remain on `home-promos.html`.
  Rejected: white bar (A/D/F), text below (B), gradient bottom (C), Gifts as the wide card.
- **10-28 — Best sellers 5 per row on desktop, 10 in total** (2 full rows). Was 6 per row with Premium Tote Bags + Banners
  as extra desktop items (10-27), removed.
- **10-28 — Mobile home:** reviews as a swipe row (as on the mobile PDP); grey Trustpilot card hidden.
- **10-28 — Desktop logo bar animated** like mobile. Footer "Need help" line subtle (#f0f0f0), 32px above/below.
- **10-21 — Desktop home from Figma 15848:4159:** 3 hero tiles with white overlay bar (later replaced by promo E),
  green banner row hidden on desktop (kept in code), browse accordion as open columns, full SEO text.

## PDP — desktop (Oct 20–26, 2026)
- **10-29 — Option icons stay 50px on desktop** (40px mobile). 56/64 tried via a switch, rejected.
- **10-26 — Specs table cross-links only Size and Material appearance**; all values black; "See also" as chips with a
  round product photo (no arrow, 4px gap). Thickness never linked.
- **10-26 — One thickness scale for all paper products** (Super Budget … Luxury Plus, "Name · gsm") behind switch Names.
- **10-26 — Live-style funnels** for Classic Business Cards and Standard Flyers (hide steps that don't apply; seed
  paper: no paper type/finishing/corners). Thickness options use line icons.
- **10-26 — Material icon set** (assets/icons, overview `material-icons.html` = one big clean overview, no proposals):
  sheet with folded corner, 1px crisp border, 50px. Printing = E (one square "1", two stacked "2", black border).
  Corners = black L corner. Bundling = stack with paper band. Banner set = landscape banner, rings only on finishing.
- **10-26 — Cards A: icon area per row = height of the tallest icon, icons bottom-aligned**, titles on one line.
- **10-26 — ⓘ guide: 16px between icon and text.**
- **10-23 — Delivery = side by side with a calendar tile** (D = tile left, default; E = tile on top). Chosen tile: green
  header + green outline; others white header. No labels, no deadline line under the step.
- **10-23 — Quantity in 2 columns** (Niels). Recommended label: green bar at the bottom of the card (Rec D), not on cards B.
- **10-23 — Design choice:** two selectable cards in "Your selection" (Upload later / Canva), one green CTA following the
  choice; switch Design A (in summary) | B (as last config step).
- **10-23 — Trustpilot product reviews** mini widget under the title + reviews section at the bottom (made-up content).
- **10-23 — Options that don't fit one row:** "+N more … options" tile (variant A — shows how many there are).
- **10-21 — Desktop PDP from Figma 15927:9040:** configuration always visible (flow J), gallery left, fixed order bar,
  sticky green header + sticky anchor tabs (USP bar not sticky). Product photo background: neutral light grey for all.
  Rejected: specs table as a reference-style funnel ("not a full funnel").

## PDP — mobile (Oct 7–20, 2026)
- **Flows A–J kept as switch**; Cornel leans to H (product selection → "Continue" → separate design step with E's
  sheet) and J (all options on the page, for SEO). Edit button in the sticky bar (H).
- Design options = the three live ones only: Upload later / Design online / Upload your design. AI/designer ideas removed.
  "Upload your design" hidden on mobile (code kept).
- PAC upsell (design check) on by default; secured delivery off.
- Mobile gallery: only the main photo (no arrows/dots — heatmaps).
- Add-to-cart interstitial ("added to basket" + upsell): sketched, thrown away.

## Checkout, account, other pages (Oct 6–16, 2026)
- Cart: only the toggle is clickable on upsell rows; arrow opens the popup; neutral "No thanks" copy (no confirmshaming).
- Details: floating labels; errors right under the field; form remembers input; "ordering as a business" collapsed;
  address cards with the quantity-radio style; shipping address sheet with green "New shipping address" CTA;
  billing address shown as a list.
- Payment: tabs Pay now | Pay later; Pay later = Pay by Link (+ send to a colleague); Apple/Google/PayPal side by side.
- Order confirmed page built (own design, address as a list).
- Login: no duplicate logo, dark active tab, headings left aligned, rounded green CTA.
- Hub/landing pages (promotional.html): products as a 2-column grid with from-price, categories as horizontal rows
  of the home category card. Flyers list view kept as sketch only.
