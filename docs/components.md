# Components, pages and switches

Pages live in `prototype/`, the components and the UI Style Guide in `design-system/`, sketch and test pages in `sketches/`.

What exists, where it lives, and how to switch between variants. Keep this up to date when you add or remove
something.

## Pages
| File | What | Notes |
|---|---|---|
| `index.html` | Home (mobile + desktop) | Promo cards style E, Team + Promises v3, best sellers 5/row (10) desktop |
| `about-us.html` | About us (en-ie marketing page, 2026-11-15, test) | The live en-ie/about-us rebuilt with UI library components only (no new CSS), content and images from live, to find the gaps of the marketing page template. Route `#about-us` (footer). Gap list: `sketches/about-us-gaps.html` |
| `our-culture.html` | Our culture (en-ie marketing page, 2026-11-15, test) | As about-us.html: the live en-ie/our-culture with UI library components only. Route `#our-culture`. Gaps in `sketches/about-us-gaps.html` |
| `gaa-club-printing.html` | GAA club printing (en-ie marketing page, 2026-11-15, test) | Board 2 of Niels' IE club pages built with the marketing page parts of about-us / our-culture (hero with image, text cards with icon or number, `.so-row.section`, centred block, Display + 32/40 titles, 64 rhythm), no new CSS. Grey blocks for scene images. Route `#gaa-club-printing` |
| `rugby-club-printing.html` | Rugby club printing (en-ie marketing page, 2026-11-15, template test) | Board 3 of Niels' IE club pages, copied from the GAA page: same parts, new content; the sponsor tiers are the centred block with banner + 3 text cards. No new CSS. Route `#rugby-club-printing` |
| `storm-flags.html` | Storm-damaged flags (en-ie promo page, 2026-11-15, template test) | The storm concept (sketches/promo-concept.html) built from the marketing parts only: hero, 4 icon USPs, 2 product rows with live from-prices, 3 numbered steps, content row, advisor, reviews, FAQ, related. No new CSS. Route `#storm-flags` |
| `category.html?page=<slug>` | Category page from a page spec (2026-11-14, test) | Reads `pages/<slug>.md` (front matter + `## block` sections, blocks can repeat; syntax at the top of `pages/hospitality.md`) and builds it with the category template's blocks, the markup of `promotional.html`: hero (crumbs, h1, intro), section tabs (every block with `tab:` + `id:`), feature (promo card + 6 tiles), products (5 or 10, live prices), categories (4 or 5 tiles), seo (paragraphs + folded questions). No CSS of its own (`main.cat-page.plp.promo-e`). First page: `hospitality` (as live en-ie). Sketch: `sketches/marketing-page-sketch.html` |
| `home-promos.html` | Home copy with promo variants A–F | Switch `?promo=a…f`; test page, not the real home |
| `business-cards.html` | Category: business cards (mobile + desktop) | `.plp.clp`. Card types 4/row (last 2 over full width), ticks + real prices; reviews row; sizes (size text + use tick, shapes on one base line); materials as icon tiles; "Make it stand out" as alternating photo/text rows (`.so-rows`); "Ideas beyond business cards" as square `.cat` cards; blogs (en-gb) as `.blog-card` row; FAQ (en-gb) in the PDP accordion; made-up SEO text last |
| `flyers.html` | Category: flyers (mobile + desktop) | `.plp.clp`, order as live: types (4) → folded (5) → reviews → sizes → materials → ideas (product cards, live prices) → "Creative Folds" content row → related (grey tiles, 5 in a row) → made-up SEO text |
| `help-centre.html` | Help Centre hub (mobile = desktop) | Head `.hc-hero` (grey outlined block: title, sub, search with question suggestions, "Can't find it?" + experts online + Chat `.pill.active`; "Popular" chips hidden) → Browse by topic: cards `.hc-card` (material card, icons Material Symbols Rounded (line) on a grey tile, 1 col mobile / 3 desktop) → team strip `.hc-team` (Anna bot first, placeholder team in `assets/help/team/`) → hidden `.hc-contact`. Route `#cs` / `#help-centre` → this page (app.js ROUTES). Desktop: two slow photo columns a side (`.hc-cols`, square 112px, the inner one staggered and drifting the other way) |
| `help-article.html?q=<slug>` | Help Centre article page (mobile + desktop) | Desktop: sidebar = the hub topic card (sub-topic, every question as a row, current one green, View all) left, full article right (`.ha-*`); mobile: article first. "Was this article helpful?" on the grey outlined block. Content: `help-content.js` (generated from the live en-ie Help Centre 2026-10-29: 5 topics, 23 sub-topics, 146 questions with their live slugs and article text) + logic in `help-data.js` Signed in: `.hc-mine` under the title (your proofs, orders, invoices… on 58 articles, `HELP_MINE` + `HELP_MINE_SLUGS` in help-data.js); signed out: `.hc-mine-out` "Sign in to …" on the 17 "my" questions. Switch "Account" (`?acc=in|out`, localStorage `hp-help-acc`; default = the prototype login `hp-user`). Under every article: `.ha-more` "More help with …", max 3 `.hc-card`s in `.hc-quick` (auto: same sub-topic, then topic; hand-picked: `HELP_MORE`) |
| `help-topic.html?t=<topic>` | Help Centre topic page (mobile + desktop) | Sidebar = hub card with the 6 topics (current one grey), right: icon tile + h1 + count, sub-topic chips, per sub-topic the questions. Questions = rows `.hc-rows` (the FAQ look with the grey arrow right) to `help-article.html` (every answer its own URL) |
| `christmas.html` | Christmas Printing (PLP, 2026-11-16) | The Black Friday recipe with live en-ie /christmas content: title + intro (the last order date for Christmas) → tabs → 2 promo cards (`.pb-duo`) → Cards & invitations (5) → Corporate gifts (5) → Calendars & decorations (5) → Your shop at Christmas (content row) + Packaging & display (5) → reviews → FAQ → SEO. Regular prices. Images: one transparent Christmas cutout per product in `assets/christmas/` (deep pine green, "Merry Christmas" in a hand-lettered white script, one small gold foil star; wood engraved with the same script) on the grey tile; promo cards close-ups on deep green. Routes `#christmas`, `#xmas`, `#christmas-printing` |
| `black-friday.html` | Black Friday Deals (PLP, 2026-11-16) | The PLP of promotional.html, no new blocks or CSS: title + intro (offer + end date) → tabs → 2 promo cards (`.pb.pb-duo`) → Best deals (10) → Christmas (5) → Your own Black Friday (content row + 5) → Gifts & clothing (5) → reviews → FAQ (deal conditions) → SEO. Product card with the price already reduced: `.was` (old price crossed out) + `.price`, the saving as the orange label. Images: one transparent Black Friday cutout per product in `assets/black-friday/` on the grey tile. Routes `#black-friday`, `#deals`. Sketch: `sketches/black-friday-sketch.html` |
| `promotional.html` | PLP: Promotional Print (mobile + desktop) | Live block order; Figma wireframes 15997:9636 / 16001:11845. Promo card E + categories (`.plp-feature`), product grid 5/row desktop, `.dc-card` tiles desktop / `.cat` swipe row mobile, paper materials with the icon set |
| `product.html?p=<slug>` | PDP for every product | Data in `products.js`; desktop = flow J |
| `cart.html`, `details.html`, `payment.html`, `confirmed.html` | Checkout | Guest + logged-in states; desktop (cart, details, payment): the cart grid + `.cart-side` card (`checkoutSide()` in app.js; payment hides its mobile `#payOverview` and bar); details: slim footer `.co-dfoot` (`data-shell="checkout-footer"`). Logged in: address sheet = choose + confirm, "+ New address" in the list (`.ap-add`), billing from the same book (Billing Address block, Change). Confirmed (11-09): one layout for 1+ order lines from `hp-last-order`: `.oc-strip`, `.oc-act` (upload per product with the PDP `.art-drop`, Pay now), `.oc-line` per order line, `.oc-od` order details + Google map, `.oc-team`; uploads and paying are kept on the order (`uploads`, `paid`) |
| `confirmed.html` (order status) | Order confirmed | Design system since 11-10 (`components.css`, style guide "Order status"): `.oc-strip` thank you bar (Track your order when all done), `.oc-acts` / `.oc-act` action blocks (to do: green + number + primary button; `.done`: grey + check + small Change / the pay logo), `.oc-foot` cream band. Page placement stays in `pages.css`. Reuse for My account |
| `account.html` | My account, Account Overview (2026-11-17, sketch A2) | Logged out → login.html. Desktop: `.account-grid` = sticky `.account-side` (`.dash-card`: `.account-who`, `.vip-meter`, `.account-nav` = `ACCOUNT_ROWS`) + `.account-main`; `.account-two` puts two blocks side by side (attention + Order again, Invoices + Quotes). Mobile: one column, `.account-hub` (the account rows) last. Parts in the design system (style guide "My account"): `.dash-card`, `.dash-row` (+ `.text`, `.acts`), `.dash-foot`, `.status` (`.go`, `.act`), `.tracker`, `.account-who`, `.vip-meter`, `.account-nav`; reused: `.oc-act` (to do), `.pill.active` + `.icon-btn` (Reorder), `.xsell .grid` + `.product` (Previously viewed). Page CSS in pages.css ("My account"). Route `#my-account`. Analysis: docs/my-account-analysis.md Under the welcome the quick links (`.quick-links`: Orders, Invoices, Quotes, Help with a live line, 2026-11-18); Needs your attention shows 3, "Show all N" in its heading opens the rest (`#todoSec.all`). |
| `orders.html` | My account, Orders (2026-11-17) | `account.js` (ORDERS, `orderTitle`, `orderPhoto` = photo + `.img.more`/`.art-count` "+N", `orderTracker`). Desktop `.dash-table` in a `.dash-card`, mobile `.dash-row`s (`.orders-table` / `.orders-rows`); `.filter-row` (pills + `.find` search, live); guest orders card (Add my orders → toast). Route `#orders`. `.account-sub`: no side card on mobile |
| `invoices.html` | My account, Invoices (2026-11-17) | As Orders: `invoiceList()` in account.js (every order's `inv` + its `credit` note, newest first), filters All · Open · Paid (+ Credit notes when any), search, desktop `.dash-table` with Amount (`.num`) and a Download PDF `.icon-btn`, mobile `.dash-row.text.go`; empty state for a new customer. |
| `invoice.html?i=<number>` | My account, one invoice or credit note (2026-11-17, the wishes artifact's content) | `invoiceList()` / `invoiceOf()` in account.js (INVOICES: the artifact's six invoices + four credit notes; per order `x` = art, ship + shipLbl, disc + discLbl, method; product `gross` incl. VAT, `price` = net via `vatSplit`; `orderRows`, `sumRows`, `orderSum`, `orderTotals`, `invNote`, `invTerms`). The page: `.od-head`, the pay block while open or the paid / credit state block, Invoice details (`.oc-od` grid: number, issued, due or status, terms or issued for, order, your reference, billed to, shipped to), Items (`.items-table` + `.totals`), team line, questions (`.hc-rows`); side: Payments and credits (`.totals`) + Download PDF, Related (order, credit notes / invoices), Need something?. |
| `quotes.html` | My account, Quotes (2026-11-17) | As Invoices: `quoteList()` in account.js (QUOTES: the artifact's four; `hp-quotes` = accepted / declined here; `quoteNote`, `quoteUrl`), filters + search, `.dash-table` / `.dash-row.text.go` (`.list-table` / `.list-rows`: table on desktop, rows on mobile, shared with Orders and Invoices), Request a quote card, empty state. |
| `quote.html?q=<number>` | My account, one quote (2026-11-17) | Status block (`.oc-act`, the quote's `.tracker`: Requested · Quote ready · Accepted/Expired/Declined; Accept quote + Decline = `data-act="quote-accept"` / `"quote-decline"`), Quote details (`.items-table` + `.totals`), Details (`.oc-od` grid), Ask us a question (`.ask-card`, `data-act="quote-ask"`), team line; side Quote overview (`.totals` + Download PDF), Need something?. An accepted quote shows its order's rows. |
| `complaints.html` | My account, Complaints (2026-11-17) | As Quotes: `complaintList()` in account.js (COMPLAINTS: the artifact's three cases; `hp-complaints` = photos sent; `complaintNote`, `complaintUrl`, `COMPLAINT_STEPS`), filters + search, `.list-table` / `.list-rows` with the product photo, Report a problem card (toast), empty state. |
| `complaint.html?c=<case>` | My account, one complaint (2026-11-17) | Status block (`.oc-act` + `.tracker`, Upload photos = `data-act="complaint-photos"` → `openUpload`), What this is about (`.oc-lead`), Order contents (`.line-item.cart-line` + `.spec-fold` + `.totals`), Case progress (`.dash-row.text`, `.status` Done / Now / Next), Ask us a question (`.ask-card`), team line; side Case details (`.totals`), Need something?. |
| `account.js` + `upload.js` | My account state and actions (2026-11-17) | `account.js`: ORDERS (prototype data) rebuilt from `hp-orders` (`orderSave(no, change)` fires `hp-orders`, pages re-render), the popups `#sheet-proof/-track/-cancel/-ref`, buttons `[data-act][data-o][data-l]` (proof, approve, upload, pay, track, cancel, ref, reorder, download, soon), `#do-<i>` on order.html opens a product's first action, `SOON` anchors toast. `upload.js`: `openUpload({ name, img, files, extra, onClick, onAdd })`, the one Upload your artwork popup (order confirmed and the order page; confirmed adds the check via `extra`/`onClick`) |
| `order.html?o=<number>` | My account, one order (2026-11-17) | From `account.js`. `.od-head` (← All orders, title, your reference + Change), `.od-grid`: `.od-lines` = a pay block if any, order confirmed's block per product (`.oc-act` when it needs you: proof, design, fix; `.oc-act.done` otherwise) with the `.cart-line` and the `.tracker`, then `.oc-sec` Order details (`.oc-od`: Google map + grid) and `.oc-team`; `.od-side` (sticky): Order summary (`.totals`, as an invoice, VAT 23%) + Need something? (menu rows; Cancel only before printing) Order details: Change on the addresses until it ships (`data-act="addr"` opens the address book `.addr-list` = `bookOf()` from the checkout's `hp-addresses`, `book-pick` / `book-use`, `addr-new` + `addr-save` add one; `o.ship`/`o.bill`, `addrLines`); Order overview ends with the invoice (`o.inv`, `button.dash-row.text`, `data-act="invoice"`); Need something? starts with Resend payment link + Change who pays while unpaid (`paylink`, `payer`). Cancel asks a reason (`[data-reason]` radio rows). Per product "All specifications" (`.spec-fold`, `specRows(l)` from `SPECS` in account.js); Order overview with the VIP discount (2%, `VIP_OFF`, in `orderSum`); "Questions about this order" (`.hc-rows`, `orderHelp(o)`: up to 4 Help Centre articles by where the order stands). |
| `proof.html?o=<order>&l=<product>` | My account, a proof (2026-11-17, sketch B) | The PDF (`assets/proofs/<name>.pdf`, `PROOFS` in account.js = the file check) in `.pdf-viewer` (pdf.js via `upPdfJs` from upload.js: page, zoom −/+ from Fit, open, download), `.proof-band` (`.oc-foot`), `.file-check`, Leave a note (`#sheet-note`), `.oc-team`; fixed Approve / Upload new design: desktop `.d-bar.show`, mobile `.cart-bar`. Page CSS in pages.css ("My account: the proof") More proofs in the order: `.tabs.proof-tabs` (one per product with a proof, its state under the name); Approve / a new file goes to the next waiting proof, the last back to the order. |
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

**My account: Grey** (2026-11-18): in the Demo tab on the Overview, A | B (`?grey=a|b`, localStorage `hp-grey`): the light grey box around Needs your attention + Order again (A) or only the quick links (B, default).

**My account: New customer** (2026-11-17): the N under ↺ in the Demo tab (`?new=1|0`, localStorage `hp-new-customer`): no orders, so every block shows its empty state (`.dash-empty`), the account card says customer since Nov 2026 and 0 points; the order and proof pages go to Orders.

**My account: Demo reset** (2026-11-17): the dark tab on the left edge of every account page ("Demo ↺", the switches' look) clears what was done in this browser (`hp-orders`: approved, uploaded, paid, cancelled, references), so every to-do is open again. `?reset` on any account page does the same (and removes itself from the address).

**Mobile PDP**: flow H is the default (Cornel, 2026-11-03). The Flow switch is hidden (`.flow-switch { display: none }`), the
code of flows A–J stays; `?flow=a…j` opens another flow for that visit only (no longer remembered in `hp-flow`).

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

## Marketing page template (the basis, Cornel 2026-11-15)

The page type for about, campaign, club and season pages (Contentful marketingPage). Built and fine-tuned on `about-us.html`,
`our-culture.html` and `gaa-club-printing.html`: copy one of those, keep the blocks, change the content. Only these parts; anything
else goes through a sketch first.

| Part | Markup | Use |
|---|---|---|
| Page type | `<main class="cat-page plp promo-e marketing">` | 64 between sections desktop / 32 mobile, section titles 32/40 desktop, footer 96 below |
| Hero with image | `section.hero.media` (crumbs, `.intro` h1 + p + `.btn-row`, `.hero-img`) | Page head: Display title 48/56 (28/32 mobile), text left, photo right at promo card height (400 / 345) |
| Hero, centred | `section.hero.media.center` | Same, centred text (max 760), photo under it 16:9 |
| Centred block with banner | `section.hero.media.center.banner` + `.hc-topics` cards + `.btn-row` | Lower on a page: short centred head (title + max 2 lines), 3:1 photo, a row of text cards, the button; 32 / 16 apart. Never centred running text with sub-titles |
| Split, photo right | `section.hero.media` with an `h2` (no crumbs) | Story block with the photo right (until a `.flip` on the content row exists) |
| Content row as section | `.so-rows > .so-row.section` (`.so-img`, `.so-txt` h2 + p + pill) | Story block with the photo left; h2 is a section title |
| Text cards | `.hc-topics` (3) / `.hc-topics.plp-cats` (2) / `.hc-topics.plp-cats.four` (4) of `.hc-card` (`.hc-ico` + `.hc-card-h` + `p.hc-quick-p`) | Facts, figures, promises, jobs. Mobile: icon (or number) left as a 40 tile, text beside it; desktop: icon on top (56). Always an icon (Material Symbols Rounded, add the name to the page's font link), or a number in `.hc-ico` when the order matters. **About something you can photograph** (an event, an occasion, a product in use; rugby: teen disco, sponsors' lunch, golf classic)? Then not a text card but the blog card row (`.hscroll.blog-row` of `.blog-card`, as on about us), a missing photo is its grey block; a card links on with one button (`.hscroll.chips > .pill` under the text), not links in the text; no icon twice on a page; 16 icon → title, 4 title → text |
| Products | `.section-head` (h2 + arrow `.link`) + `.types` of `.product` | 5 or 10 per row group; live from-price via `data-price` |
| Others as is | reviews `.d-reviews`, FAQ `.d-acc` / `.acc.oc-faq`, blog cards `.blog-row`, grey tiles `.plp-cats.four`, logo strip `.trusted`, team strip `.hc-team`, section lead `p.cat-lead`, button row `.chips` after cards | |

Images: live photos where they exist; a plain grey block where an image still has to come (never coloured placeholders).
Open: full-width grey bands (`sketches/bands-sketch.html`, A / B not chosen), `.flip` on the content row, the text card into the
design system + guide, prices for products without a live from-price. Gap history: `sketches/about-us-gaps.html`.

## Key components
- **Option cards** (`.opt` in `#jConfig`): desktop Cards A reserves an icon area per row (`--vis-h` = tallest icon,
  set in `deskOverflow()`), icons bottom-aligned. "+N more" tile when a row overflows.
- **Option visuals** (`optVisual()` in product.html): order = `o.icon` (an icon path named in the data) → banner icons → thickness line → material icon (`MAT_ICONS`) →
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
- **Search** (app.js): mobile = the full screen layer `#searchLayer` (`renderSearch`); desktop = `.sd-drop` under the header's `.dsearch` (`deskSearch`, as live en-ie), same data (`searchCats`, `searchProducts`, `popularCats`) and `rank()`.
- **Notification** (app.js `NOTICE`, `.notice` in components.css): a site message as the first layer above the shop and checkout header; the × closes it for the session (`sessionStorage` `hp-notice`). Edit the sentence in `NOTICE`.
- **Drop menu** (`.d-menu`, components.css): PDP bar (upwards) and the desktop header (`.dhead-drop` + `[data-drop]`, hover; `.d-head` = the grey icon tiles): the country (`LANG_MENU`, `.d-lang`), Need help? (`HELP_MENU`) and, logged in, the account (`deskAccount()` = button + `ACCOUNT_MENU`, also in the desktop checkout header next to the bag; mobile: the account icon opens the same rows in `#sheet-account` (`SHEET_ACCOUNT`); rows via `dropRow`, Log out `[data-logout]`).
- **Buttons**: `.pill` (white, mid-grey outline, black outline on hover), green CTA rounded.

## Assets
- `design-system/icons/index.json` lists every non-material icon (guide row → family → file → label); the style guide shows them all from it
  (`materials/index.json` for the materials). A new icon goes into one of the two indexes, same change.
- `design-system/icons/materials|printing|corners|bundling|banners|folds|envelopes|stickers` — icon set (SVG, 50×50). Sticker shapes
  (`stickers/round|oval|square|rounded|contour`) = the shape with its corner peeled; films are materials (`materials/film-white-gloss|white-matt|clear|white-eco|clear-eco`,
  the vinyls and PVC-free reuse them, silver film = `metallic-silver`), choice in `sketches/sticker-icons-sketch.html`.
  Product kits (`sketches/kit-icons-sketch.html`, all A): `rollup/size-80|85|100|120|silver|black|premium|cardboard`, `aboard/a2|a1|b2|b1`,
  `tabletalkers/classic|triangle|triangle-m|triangle-s`, `folders/a4|a5|spine-1|5|10|15`, `notepads/bind-left|bind-top|holes-0|2|4|self-cover`,
  `napkins/white|cream|fold-4|fold-8|print-*`, `materials/airlaid|tissue`. In the data an option names its icon as `icon: 'rollup/silver'`
  (optVisual checks `o.icon` first); roller banners (Size, Stand), the folded business-card sizes and the PVC cards (Finish) use it.
  One-off materials (`sketches/oneoff-icons-sketch.html`): `neon` (yellow) / `neon-green|orange|pink` with a soft glow, `photo-paper`, `dot-foil`,
  `backlit`, `antique-white`, `paperwise-white`, `pvc-card-gloss|matt` (a plastic card, rounded corners).
  Print colours (`sketches/print-colour-icons-sketch.html`, A): `inks/none|1|2|3|4|5|full` (one dot per colour: orange, light green, dark green,
  blue, dark grey; full = the CMYK square), `printing/pms-4-single|black-single|black-double|full-front-black-back`. Basic cotton bags use the inks.
  Print area (`sketches/print-area-icons-sketch.html`, A): `printarea/bag-large|small(-both)`, `notebook-full|large|small`, `pen-barrel|clip`,
  `lanyard-strap|holder(-both)`, `mug-wrap|small`: the product outline, the area grey, both sides = two stacked (lanyard: a small 2); the size stays text.
  Basic cotton bags and premium tote bags use them. Print technique is parked (backlog).
  All-categories gap report (289 products, the waves): `sketches/icon-gaps-all-categories.html`. Option icons (printing, folds, envelopes)
  outline in #191919 like the size shapes; `printing/pms-<1|2|3>-<single|double>` = the printing icon plus one ink dot per PMS colour
  (orange, light green, dark green). Folds = the card opened flat, the fold dashed; envelopes = the card alone / the closed envelope
  (choice in `sketches/fold-envelope-icons-sketch.html`). Not used yet beyond the folded sizes. Missing icons per product:
  `sketches/icon-gaps-promotional.html` (promotional-printing run, 11-16).
  Generators live in the session scratchpad (`mat_icons.py`, `banner_icons.py`) — ask before regenerating, some
  icons were hand-tweaked afterwards (no-finishing circle, spot UV bevel).
- `assets/home/` — home images (team-experts.webp = Cornel's export). Live Contentful images are hotlinked
  (images.ctfassets.net / contentful.helloprint.com), not copied.
- `assets/logos/` — Cornel's colour logos for the "Trusted by" bar.
- `assets/gallery/<slug>-N.webp` — PDP galleries from the live site.

## Design tokens (`design-system/tokens.css`)
`--dark-green` #022b07, `--light-green` #00a651, `--black` #191919, `--dark-grey` #555, `--mid-grey` #bbb,
`--light-grey` #f0f0f0 (backgrounds), `--line` #e4e4e4 (every line and card outline), `--outline` #cfcfcf. Font Inter.
