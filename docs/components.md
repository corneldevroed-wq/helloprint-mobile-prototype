# Components, pages and switches

What exists, where it lives, and how to switch between variants. Keep this up to date when you add or remove
something.

## Pages
| File | What | Notes |
|---|---|---|
| `index.html` | Home (mobile + desktop) | Promo cards style E, Team + Promises v3, best sellers 5/row (10) desktop |
| `home-promos.html` | Home copy with promo variants A–F | Switch `?promo=a…f`; test page, not the real home |
| `business-cards.html` | Category: business cards (mobile + desktop) | `.plp.clp`. Card types 4/row (last 2 over full width), ticks + real prices; reviews row; sizes (size text + use tick, shapes on one base line); materials as icon tiles; "Make it stand out" as alternating photo/text rows (`.so-rows`); "Ideas beyond business cards" as square `.cat` cards; blogs (en-gb) as `.blog-card` row; FAQ (en-gb) in the PDP accordion; made-up SEO text last |
| `flyers.html` | Category: flyers (mobile + desktop) | `.plp.clp`, order as live: types (4) → folded (5) → reviews → sizes → materials → ideas (product cards, live prices) → "Creative Folds" content row → related (grey tiles, 5 in a row) → made-up SEO text |
| `help-centre.html` | Help Centre hub (mobile = desktop) | Head `.hc-hero` (grey outlined block: title, sub, search with question suggestions, "Can't find it?" + experts online + Chat `.pill.active`; "Popular" chips hidden) → Browse by topic: cards `.hc-card` (material card, icons Material Symbols Rounded (line) on a grey tile, 1 col mobile / 3 desktop) → team strip `.hc-team` (Anna bot first, placeholder team in `assets/help/team/`) → hidden `.hc-contact`. Route `#cs` / `#help-centre` → this page (app.js ROUTES) |
| `help-article.html?q=<slug>` | Help Centre article page (mobile + desktop) | Desktop: sidebar = the hub topic card (sub-topic, every question as a row, current one green, View all) left, full article right (`.ha-*`); mobile: article first. "Was this article helpful?" on the grey outlined block. Content from `help-data.js` (shared: topics, sub-topics, articles, `helpUrl`, `helpFind`); one full article so far (Can I change my order?), others show their short answer |
| `help-topic.html?t=<topic>` | Help Centre topic page (mobile + desktop) | Sidebar = hub card with the 6 topics (current one grey), right: icon tile + h1 + count, sub-topic chips, per sub-topic the questions. Switch Answers: F = the category-page FAQ (`.d-acc` / `.acc.oc-faq`), `#<question>` opens that answer; P = hub question rows to `help-article.html`. Long answers keep their headings/lists (`.ht-long`) |
| `promotional.html` | PLP: Promotional Print (mobile + desktop) | Live block order; Figma wireframes 15997:9636 / 16001:11845. Promo card E + categories (`.plp-feature`), product grid 5/row desktop, `.dc-card` tiles desktop / `.cat` swipe row mobile, paper materials with the icon set |
| `product.html?p=<slug>` | PDP for every product | Data in `products.js`; desktop = flow J |
| `cart.html`, `details.html`, `payment.html`, `confirmed.html` | Checkout | Guest + logged-in states |
| `login.html` | Log in / create account | Prototype: name + email only |
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

**Mobile PDP** (left edge, "Flow"): `?flow=a…j` — A–J versions of the PDP config/CTA (see memory/decisions; H and J are
the leading ones). Remembered in `hp-flow`.

**Desktop PDP** (left edge, `.desk-switch`):
| Switch | Param | Values | Default | What |
|---|---|---|---|---|
| Cards | `desk` | a / b | a | A = Figma cards (image on top, auto-fill grid); B = mobile-style cards 3/row |
| Photos | `photos` | a / b | a | A = thumbnails under the photo; B = thumbnail column left |
| Delivery | `deliv` | d / e | d | Calendar tile left / on top |
| Funnel | `funnel` | old / new | new | Live-style funnel (business cards, flyers); reloads |
| Names | `names` | old / new | new | One thickness scale for all paper; reloads |
| Specs | `specs` | old / new | new | Specs table with option links + See also chips |
| Icons | `icons` | old / new | new | New material icon set vs old swatches |
| Design | `design` | a / b | a | Design cards in "Your selection" / as last config step |
| Rec | `rec` | 0 / c / d | d | Recommended label off / variants |

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
- **Buttons**: `.pill` (white, mid-grey outline, black outline on hover), green CTA rounded.

## Assets
- `assets/icons/materials|printing|corners|bundling|banners` — icon set (SVG, 50×50).
  Generators live in the session scratchpad (`mat_icons.py`, `banner_icons.py`) — ask before regenerating, some
  icons were hand-tweaked afterwards (no-finishing circle, spot UV bevel).
- `assets/home/` — home images (team-experts.webp = Cornel's export). Live Contentful images are hotlinked
  (images.ctfassets.net / contentful.helloprint.com), not copied.
- `assets/logos/` — Cornel's colour logos for the "Trusted by" bar.
- `assets/gallery/<slug>-N.webp` — PDP galleries from the live site.

## Design tokens (styles.css `:root`)
`--dark-green` #022b07, `--light-green` #00a651, `--black` #191919, `--dark-grey` #555, `--mid-grey` #bbb,
`--light-grey` #f0f0f0 (backgrounds), `--line` #e4e4e4 (every line and card outline), `--outline` #cfcfcf. Font Inter.
