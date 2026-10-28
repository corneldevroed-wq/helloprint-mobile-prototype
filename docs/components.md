# Components, pages and switches

What exists, where it lives, and how to switch between variants. Keep this up to date when you add or remove
something.

## Pages
| File | What | Notes |
|---|---|---|
| `index.html` | Home (mobile + desktop) | Promo cards style E, Team + Promises v3, best sellers 6/row desktop |
| `home-promos.html` | Home copy with promo variants A–F | Switch `?promo=a…f`; test page, not the real home |
| `business-cards.html` | Category: business cards | Materials/sizes deep-link into the PDP |
| `flyers.html` | Category: flyers | 4 flyer types with own PDP, folded leaflets as tiles |
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
(products as a list), `promotional-desk-sketch.html` (old desktop A–C, rejected), `material-icons.html` (the one clean icon overview — keep it clean, no proposals).

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
`--light-grey` #f0f0f0, `--line` #f0f0f0, `--outline` #cfcfcf. Font Inter.
