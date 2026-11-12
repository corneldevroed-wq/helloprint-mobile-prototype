# Components, pages and switches

Pages live in `prototype/`, the components and the UI Style Guide in `design-system/`, sketch and test pages in `sketches/`.

What exists, where it lives, and how to switch between variants. Keep this up to date when you add or remove
something.

## Pages
| File | What | Notes |
|---|---|---|
| `index.html` | Home (mobile + desktop) | Promo cards style E, Team + Promises v3, best sellers 5/row (10) desktop |
| `home-promos.html` | Home copy with promo variants A–F | Switch `?promo=a…f`; test page, not the real home |
| `business-cards.html` | Category: business cards (mobile + desktop) | `.plp.clp`. Card types 4/row (last 2 over full width), ticks + real prices; reviews row; sizes (size text + use tick, shapes on one base line); materials as icon tiles; "Make it stand out" as alternating photo/text rows (`.so-rows`); "Ideas beyond business cards" as square `.cat` cards; blogs (en-gb) as `.blog-card` row; FAQ (en-gb) in the PDP accordion; made-up SEO text last |
| `flyers.html` | Category: flyers (mobile + desktop) | `.plp.clp`, order as live: types (4) → folded (5) → reviews → sizes → materials → ideas (product cards, live prices) → "Creative Folds" content row → related (grey tiles, 5 in a row) → made-up SEO text |
| `help-centre.html` | Help Centre hub (mobile = desktop) | Head `.hc-hero` (grey outlined block: title, sub, search with question suggestions, "Can't find it?" + experts online + Chat `.pill.active`; "Popular" chips hidden) → Browse by topic: cards `.hc-card` (material card, icons Material Symbols Rounded (line) on a grey tile, 1 col mobile / 3 desktop) → team strip `.hc-team` (Anna bot first, placeholder team in `assets/help/team/`) → hidden `.hc-contact`. Route `#cs` / `#help-centre` → this page (app.js ROUTES). Desktop: two slow photo columns a side (`.hc-cols`, square 112px, the inner one staggered and drifting the other way) |
| `help-article.html?q=<slug>` | Help Centre article page (mobile + desktop) | Desktop: sidebar = the hub topic card (sub-topic, every question as a row, current one green, View all) left, full article right (`.ha-*`); mobile: article first. "Was this article helpful?" on the grey outlined block. Content: `help-content.js` (generated from the live en-ie Help Centre 2026-10-29: 5 topics, 23 sub-topics, 146 questions with their live slugs and article text) + logic in `help-data.js` Signed in: `.hc-mine` under the title (your proofs, orders, invoices… on 58 articles, `HELP_MINE` + `HELP_MINE_SLUGS` in help-data.js); signed out: `.hc-mine-out` "Sign in to …" on the 17 "my" questions. Switch "Account" (`?acc=in|out`, localStorage `hp-help-acc`; default = the prototype login `hp-user`). Under every article: `.ha-more` "More help with …", max 3 `.hc-card`s in `.hc-quick` (auto: same sub-topic, then topic; hand-picked: `HELP_MORE`) |
| `help-topic.html?t=<topic>` | Help Centre topic page (mobile + desktop) | Sidebar = hub card with the 6 topics (current one grey), right: icon tile + h1 + count, sub-topic chips, per sub-topic the questions. Questions = rows `.hc-rows` (the FAQ look with the grey arrow right) to `help-article.html` (every answer its own URL) |
| `promotional.html` | PLP: Promotional Print (mobile + desktop) | Live block order; Figma wireframes 15997:9636 / 16001:11845. Promo card E + categories (`.plp-feature`), product grid 5/row desktop, `.dc-card` tiles desktop / `.cat` swipe row mobile, paper materials with the icon set |
| `product.html?p=<slug>` | PDP for every product | Data in `products.js`; desktop = flow J |
| `cart.html`, `details.html`, `payment.html`, `confirmed.html` | Checkout | Guest + logged-in states; desktop (cart, details, payment): the cart grid + `.cart-side` card (`checkoutSide()` in app.js; payment hides its mobile `#payOverview` and bar); details: slim footer `.co-dfoot` (`data-shell="checkout-footer"`). Logged in: address sheet = choose + confirm, "+ New address" in the list (`.ap-add`), billing from the same book (Billing Address block, Change). Confirmed (11-09): one layout for 1+ order lines from `hp-last-order`: `.oc-strip`, `.oc-act` (upload per product with the PDP `.art-drop`, Pay now), `.oc-line` per order line, `.oc-od` order details + Google map, `.oc-team`; uploads and paying are kept on the order (`uploads`, `paid`) |
| `confirmed.html` (order status) | Order confirmed | Design system since 11-10 (`components.css`, style guide "Order status"): `.oc-strip` thank you bar (Track your order when all done), `.oc-acts` / `.oc-act` action blocks (to do: green + number + primary button; `.done`: grey + check + small Change / the pay logo), `.oc-foot` cream band. Page placement stays in `pages.css`. Reuse for My account |
| `login.html` | Log in / create account | Prototype: name + email only; desktop (11-06): own page without shop chrome (`.auth-head` logo bar), the card 440 in the middle, Back to where you came from |
| `classic-business-cards.html` | Old URL | Forwards to the classic PDP |

Products with a PDP (slugs): classic/eco/pvc/deluxe/special-materials/multilayered business cards, standard/eco/
special-material/special-finishing flyers (+ standard-flyers-photos copy), ceramic-mug-330ml, basic-cotton-bags,
premium-tote-bags, sols-imperial-tshirt, banners, roller-banners.

## Sketches (not linked, kept for reference)
`delivery-sketch.html` (delivery A–E), `seealso-sketch.html` (See also A–D), `promo-mobile-sketch.html` (promo cards
with live content), `usp-bar-sketch.html` (mobile USP bar A–D), `banner-icons-sketch.html`, `flyers-list-sketch.html`
(products as a list), `standout-sketch.html` ("Make it stand out" A/A2/B/C, A chosen), `promotional-desk-sketch.html` (old desktop A–C, rejected), `material-icons.html` (the one clean icon overview — keep it clean, no proposals).

## Prototype switches
All switches write their value into the URL and localStorage, so a copied link opens the same version.

**Mobile PDP**: flow H is the default (Cornel, 2026-11-03). The Flow switch is hidden (`.flow-switch { display: none }`), the
code of flows A–J stays; `?flow=a…j` opens another flow for that visit only (no longer remembered in `hp-flow`).

**Home, mobile + desktop: Photos** (`photos` = A / B, `hp-photos-home`, Cornel 2026-11-11): A = the live promo cards, B = only the new
editorial photos (5 cards with their own titles, list in the switch script in index.html), photo = `prototype/assets/home/editorial/<link slug>.webp`.
On desktop B is a full-width grid instead of the carousel: one row of 5 cards, 32 at the edges, no arrows; the welcome heading is hidden in B (`.pb-wrap.ed` in pages.css).
Mobile keeps the carousel.

**Home promo cards** (no switch; decided 2026-11-11): titles 20/24 on mobile and desktop (promo cards + Team + Promises), 24px inside
the card on desktop (16 on mobile). Tried and removed: titles 24 on desktop, the title above the button.

**Desktop PDP**: no switches any more. Decided 2026-11-02: Funnel (live funnels), Names (one thickness scale), Specs (links +
See also), Icons (material icon set), Design (A: cards in Your selection), Rec (D: green bar in the card). Decided 2026-11-03:
Cards A (Figma, image on top), Photos A (thumbnails under the photo), Delivery D (calendar tile left); B / B / E removed.

**PDP, mobile + desktop: Upload your artwork** (version D, Cornel 2026-11-04; the Upload switch was removed 2026-11-05, D is the upload flow):
a third design option "Upload your artwork" (mobile design sheet + a third `.d-dcard` on desktop, button "Upload artwork") that opens
`#sheet-artwork`: one upload field for every product (`artFiles`, `renderArt` in product.html; sketch: `upload-sketch.html` D). No questions,
no file check (the promise under the field with the faces of our print experts, `.art-team` + the Help Centre `.faces`): after uploading every file as a row with its thumbnail (no animated preview, 2026-11-04); a PDF shows its page count in the row ("8.2 MB · uploaded ✓ · 16 pages", read from the file, left out when it can't be counted), always "+ Add more files", then reassurance (`.art-calm`);
only a failed upload (over 200 MB) blocks. Cart line: "Artwork uploaded (n files)" with View artwork (`designType: 'art'`).
Sketch concepts A, B, C (and the parked page turn D5b) live only in upload-sketch.html.

**Desktop checkout**: no switches. Steps (since 2026-11-06, was switch Steps B): `.co-steps-n`, centred: Cart = a round back button,
then 1 Details & Shipping (desktop only; mobile says Details) · 2 Payment · 3 Confirmed (numbered circles, current + done light green, 16/22, 96 line, 24 around it). Built in app.js.

**Cart** (no switch since 2026-11-03; the demo carts 1 / 4 / 0 were removed): `?secured=off` = no secured delivery offered (one upsell block).
Empty = the live message + "Our best sellers" (`BEST`, `cardsHtml`); "Request a free quote" opens `#sheet-quote` (cart lines, extras, total excl. VAT,
contact or "Sending to" when logged in via `hp-user`, Eircode + town optional; `EIRCODE` lives in design-system/components.js). Decided 2026-11-03 and removed: Lines (B), Upsells (D).

**Help Centre** (left edge, `.desk-switch`, every help page): Answers `ans` = faq / page (default faq). F = the hub is Getting started: under the head the
sidebar with all topics + Quick links (`.hc-quick`) + Common questions (FAQ); another topic opens `help-topic.html` (no head, same
sidebar, Getting started = back). P = the 6 topic cards, topic page with rows, a page per answer (`help-article.html`).
Shared in help-data.js: `helpSide`, `helpFaq`, `helpTopicView`, `HELP_QUICK`, `HELP_COMMON`. Shared via `help-data.js` (`HELP_MODE`, `helpUrl`, `helpSwitch`);
remembered in `hp-hc-ans`.

**Home test page**: `home-promos.html?promo=a…f`.

## Key components
- **Option cards** (`.opt` in `#jConfig`): desktop Cards A reserves an icon area per row (`--vis-h` = tallest icon,
  set in `deskOverflow()`), icons bottom-aligned. "+N more" tile when a row overflows.
- **Option visuals** (`optVisual()` in product.html): order = thickness line → material icon (`MAT_ICONS`) →
  printing E → corners → bundling → banner icons (`BANNER_ICONS`) → photo/shape/swatch/chip.
  `.mi.two` = two stacked sheets (finishing both sides), `.mi.three` = Special (three sheets).
- **ⓘ guide** (`.guide-item`, `.gi-vis`): option visual left, 16px to the text.
- **Specs table** (`renderSpecs`, `specValue`, `specLink`, `XLINKS`): links only for size + material appearance.
- **Delivery tiles**, **quantity 2 columns**, **Your selection** box + fixed desktop order bar.
- **Promo card E** (home, `.promo-e .pc`, `.pb-hero` / `.pb-wrap` arrows): title top-left, "Shop X" pill.
- **Team + Promises** (`.tb`, `.tb-team`, `.tb-prom`; v3 = `html.tb-3` on desktop, mobile CSS without switch).
- **Trustpilot**: `DTRUST` widget (desktop header/footer), mobile USP ticker line `.usp-tp`, reviews row
  (`deskReviews()` desktop with arrows, `.m-revs` swipe row on mobile).
- **Category cards**: `.cat` + `.collage` (home "Our Top Categories"), alternative `.d-cats2` (hidden).
- **Menu**: one data source in app.js (`menu`, `sub`, `subAll`). Mobile: the drill-down drawer (`#menu`, `openMenu`, `pushPanel`).
  Desktop: the mega menu `.mega` under `.dhead-nav` (2026-11-10, menu-desk-sketch B): hover a bar category = its products as `.cat`
  cards + Shop all; All products (hover/click, and home "All categories" via `data-open-menu`) = the two-pane panel below
  (the Browse all we offer list style). `?menu=<key>` (`all`, `promo`, `cards`…) opens it on load. Hover intent 150 ms, close 200 ms.
  All products (11-10): `ALL_PRODUCTS` in app.js (the live en-ie mega menu: group → sub group → products) drives both the desktop
  panel (`.mega-all`: `.mega-side` groups + `.mega-main` with `.mega-cols`) and the mobile drawer levels `g-<slug>` / `s-<slug>-<i>`.
  Photos `assets/menu/all/<group slug>/<sub group name>.webp`.
  Dark layer `.mega-dim` (--overlay).
- **Drop menu** (`.d-menu`, components.css): PDP bar (upwards) and the desktop header Help (`HELP_MENU`, `[data-help]`, downwards).
- **Buttons**: `.pill` (white, mid-grey outline, black outline on hover), green CTA rounded.

## Assets
- `design-system/icons/materials|printing|corners|bundling|banners` — icon set (SVG, 50×50).
  Generators live in the session scratchpad (`mat_icons.py`, `banner_icons.py`) — ask before regenerating, some
  icons were hand-tweaked afterwards (no-finishing circle, spot UV bevel).
- `assets/home/` — home images (team-experts.webp = Cornel's export). Live Contentful images are hotlinked
  (images.ctfassets.net / contentful.helloprint.com), not copied.
- `assets/logos/` — Cornel's colour logos for the "Trusted by" bar.
- `assets/gallery/<slug>-N.webp` — PDP galleries from the live site.

## Design tokens (`design-system/tokens.css`)
`--dark-green` #022b07, `--light-green` #00a651, `--black` #191919, `--dark-grey` #555, `--mid-grey` #bbb,
`--light-grey` #f0f0f0 (backgrounds), `--line` #e4e4e4 (every line and card outline), `--outline` #cfcfcf. Font Inter.
