# Decision log

Newest on top. Format: **date — decision.** Why / what was rejected.
Add new decisions here when Cornel makes a final call.


## Checkout desktop (`details.html`, `payment.html`, Nov 5, 2026)
- **11-05 — Desktop checkout = the cart's frame** (checkout-desk-sketch.html A; Cornel: "the sidebar on the right is a must, keep the cart's
  layout and split"). Same grid as the desktop cart (form in the 862 column, the 392 "Order overview" card right, gap 32), the mobile
  form and wording 1:1. The card: products (summary lines), the cart's totals (`totalsHtml()`), the step's button, USPs + payments
  (`SIDE_TRUST`), sticky 24 under the header. Header: only the shop header's 60 top bar (logo in the cart's spot), the checkout steps
  in the middle, Secure Checkout + account + bag right; no search, menu or USP bar. Logged in: the address cards side by side, 3 in a row (no swipe; 4 was too tight once the form became 576).
- **11-06 — Order type at the top of Contact details: pills Personal | Business** (`.pill` / `.pill.active`, Cornel; first built as
  section tabs, order-type-sketch.html D, changed to pills the same day; rejected A toggle, B option cards, C the checkbox moved up). Personal by default; Business opens Company name, VAT number (optional) and
  Reference number (optional, "Shown on your invoice and packing slip"). Guest: under the title, above the email; logged in: above the
  contact card, the fields under it (no business checkbox in the card's Edit any more, no company line in the card). Logged in, the pills sit 16 under the grey description (8 felt cramped). The pills set the
  hidden `#isBusiness` checkbox, so validation and the saved form are unchanged. The business fields sit in a light grey block (8 padding, `--r-m`); the note under the reference 12/18.
- **11-06 — The billing address line uses the shipping card's address style** (dark grey 14/22, mobile and desktop; the 12/18 on desktop
  was undone the same day, Cornel), as a list of lines like the card, not on one line.
- **11-06 — Spacing pass on details (8px grid):** title → grey lead line back to 4 (8 made it hard to read, Cornel: a title and its
  description belong together; now in the style guide), the note under Reference number 8 (was 4), the
  contact card and the Billing Address block 16 in (was 14), the address cards and the address list items 16 in incl. their border
  (was 15). Everything else measured on the grid (sections 32, title → block 8, sidebar 16/8, business block 8).
- **11-06 — Temporary "Log out" link top right in the checkout header** (logged in only, white underlined 14/22, in the place of the account icon) until the account menu exists.
- **11-06 — No Log out on details:** logging out moves to the account menu in the header (to build, see backlog). Removed:
  "Log out" next to Contact Details and "· Log out" after "Logged in as …".
- **11-06 — "Billing Address" is always a section title**, above the checkbox (guest and logged in); the form or the block follows under it.
- **11-06 — Logged in: the "Billing address is the same as shipping address" checkbox is back** (on by default, as for a guest;
  Cornel). Unchecking opens the address sheet for billing; only a confirmed other address unticks it and shows the Billing Address
  block (with Change); ✕ = nothing changed; ticking it again = same as shipping. Replaces the always-visible block of A below.
- **11-06 — "Change shipping address" is a text link** (`.link`, the default link colour) under the address cards, was a pill button.
- **11-06 — A popup over a popup has a back arrow** (`.sheet-back`, top left, the menu's arrow): Edit / Add address opened from the
  address list shows ← (back to the list); ✕ and a tap outside close both. Opened from the page itself: only ✕.
- **11-06 — Guest billing starts as "same as shipping" (checked)**: a billing choice made while logged in no longer carries over
  into the guest form after logging out. A guest's own unchecking is still remembered.
- **11-06 — "Log in" on details (guest) is a `.link`** (the default text link; tried as a `.pill` the same day, Cornel: a link after all).
- **11-06 — Choosing an address: choose, then confirm (address-flow-sketch.html A).** In the address sheet a tap only moves the radio;
  one primary button confirms (**Use this address** / **Use as billing address**); ✕ = nothing changed. "+ New address" is the last item
  of the list (dashed); a new address comes back chosen in the list, the button confirms it (from the card row on the page it is used at
  once). Billing = the same address book: no "Same as shipping address" card and no checkbox any more; the shipping address has a grey
  "Shipping address" label. On the page a Billing Address block (`.co-summary`: name, the address on one line, "Same as shipping
  address", Change). Rejected: B (two buttons in the footer, the shipping address twice in billing), C (a tap chooses and closes).
- **11-06 — A popup over a popup gets one dim:** the lower popup hides its own overlay, the top one dims the page and the
  popup under it once (was twice, almost black). E.g. Edit address over Your shipping addresses.
- **11-06 — A chosen card is white with the 2px light green border, never tinted** (the design-system rule: Radio row, Option
  card, Payment methods). Tint removed from the address card, Pay by Link (payment), the T-shirt size tiles and the recommended file
  check. `--selected` stays only for the upload field while a file is dragged over it.
- **11-06 — Logged in (desktop details):** the address cards 240 wide (New address 160) in one row that scrolls sideways, with
  the round arrows of the reviews row (`.d-rev-nav`, `wireRowArrows()` in app.js; hidden at the start/end); the address 14/22 under
  the 16 name (was 12/18, back to the default 11-06). The address popups (list + add/edit) are as high as their content, mobile and desktop (no `.tall`). Mobile unchanged (swipe row).
- **11-06 — Login trust line with Material Symbols:** verified_user (Secure), lock (Encrypted), credit_card (Safe checkout), 16px dark grey
  (were an SVG and two empty CSS squares).
- **11-06 — The address cards on details get the card hover** of the material / product cards (desktop: soft shadow 0 2px 8px).
- **11-06 — Login / register: its own page, reachable from every flow** (login-desk-sketch.html A; Cornel: no header, menu or footer).
  Only a slim dark green bar with the logo (to home), "Back" (to the page before, or "Back to checkout" from details) and the mobile card;
  desktop: the card 440 wide in the middle. Signing in returns to where you came from. Spacing on the 8px grid (16 between blocks,
  24 card padding, 16 in the form, 8 label → field). Rejected: B (three paths side by side), C (card + why an account).
- **11-06 — "+ New address" uses the Material Symbols "add" icon in light green** (card row and address sheet; was a text "+").
- **11-06 — Guest Contact Details gets the same description line** as logged in ("Who’s placing this order — …"), and the same title case.
- **11-06 — The VAT switch changes the Total** (Cornel): excl. VAT (default) = rows excl., **Total (Excl. VAT)** = the subtotal, under it
  "Incl. VAT (23%)" with the amount to pay; incl. VAT = rows incl., **Total (Incl. VAT)**, under it "Of which VAT (23%)". The rows
  always add up to the Total; the Subtotal and VAT rows are gone. Replaces the entry below.
- **11-06 — The VAT switch works in the totals (cart + checkout):** excl. VAT (default) = Products, Check, Shipping, Subtotal (Excl.
  VAT), VAT 23%, Total. Incl. VAT = the same rows with VAT, no Subtotal, "VAT 23% (included)" above the line, the same Total, so it
  still adds up. The checkout sidebar re-renders on the switch (the products list keeps its open/closed state).
- **11-06 — A cleaner Order overview in the checkout:** the product lines are folded away; "Products (n)" in the totals is a link
  with a chevron that opens them under that row (50px photos, 8 · line · 8 between and after the last). Each product with its own
  "Estimated <day> — latest <date>": the date can differ per product, so no single date for the order (Cornel, 11-06). No line under the title. The cart keeps its own card (products
  are on the page there). `totalsHtml(…, fold)`; `.totals` rows are now `.totals > div`.
- **11-06 — Checkout footer (desktop):** the shop footer slimmed down, as Cornel's screenshot without the lists: help row (team
  faces, Ask our print experts, Trustpilot), certificates + payments + Show VAT, logo + legal. No newsletter, no link columns or social;
  a line on top, 1064 wide like the checkout, 96 above it. Thinner than the shop footer (11-06): help row 16/16, 24 to the logos row,
  legal 24/24 (245 high instead of 341). Built from the same parts (`FOOT_HELP`, `FOOT_END`, `PAYMENTS` in app.js).
- **11-06 — Desktop steps = numbered (was switch Steps B; A, the mobile bars, removed on desktop):** Cornel's reference: a circle with
  the number, the name, a line to the next. The mobile steps and words; Cart is the way back, so a round back button (the mobile back
  arrow in a 32 circle, outlined) and Details is 1 · Payment 2 · Confirmed 3. The row is centred on the page. Mobile keeps the bars.
- **11-06 — Steps out of the header, Secure Checkout left:** the checkout steps on top of the page across both columns (14/22,
  32 to the form); the header's top bar = logo, Secure Checkout next to it, account and bag right.
- **11-06 — A dedicated, narrower checkout:** container 1064 (the form 544, fields in pairs 268; 128 between the columns so the fields stay easy to scan;
  the cart's 392 sidebar unchanged); the checkout header's top bar lines up with it (logo above the form). The shop pages stay 1286.
- **11-06 — Fine-tuning details (desktop):** checkbox labels 14/22 on every desktop page (design system, desktop body text); 96 under the
  page (no footer). Tried a "Checkout" page title in the cart's spot: removed, two 24 titles in a row (Checkout + Contact details) and the steps already say it.
  Rejected: B (mobile column centred, button under the fold), C (details + payment on one page: the flow would differ from mobile).
  Done: details. Next: payment, confirmed, login.

## Type weights (all pages, Nov 4, 2026)
- **11-04 — 16px titles are semibold (600), never bold:** bold (700) only for prices and dates, as the UI Style Guide says.
  Fixed: PDP option titles on desktop, "Your selection" (mobile PDP), "Estimated delivery date", the upsell check title,
  the name on the address card and in the checkout contact block, the Trustpilot title. Two dead duplicate rules removed.
- **11-04 — Letter spacing only on big titles** (800 weight, 20px and up: page, section, promo and display titles). Removed from
  badges, prices, totals, dates, the review score, the letter avatar and the calendar month; small h2s (card-title style) get 0.
  Kept: the Trustpilot wordmark (it copies the logo) and the prototype switches.

## PDP switches (`product.html`, Nov 3, 2026)
- **11-05 — Upload: D is the upload flow, the Upload switch is removed.** "Upload your artwork" (one upload field for every product,
  upload-sketch.html D) is always the third design option, mobile and desktop. The Off variant (only Upload later + Design online) is gone.
- **11-03 — Desktop PDP: Cards A, Photos A, Delivery D; the switches are gone.** Cards B (mobile card, 3 per row), Photos B
  (thumbnail column) and Delivery E (calendar tile on top) removed with their CSS. Page identical to before with A / A / D (measured).
- **11-03 — Mobile PDP: flow H is the default.** The Flow switch is hidden, not removed: flows A–J stay in the code and open
  with `?flow=…` for that visit only (no localStorage memory, so testers who had another flow stored now land on H).
## Cart desktop (`cart.html`, Nov 2, 2026)
- **11-06 — 16 between the cart cards on desktop** (was 8), the grid rule from the style guide. Mobile keeps 16 · line · 16.
- **11-06 — One switch everywhere:** the VAT switches (footer Show VAT, PDP Incl VAT) are the cart's `.switch` (36 × 20, grey / light
  green); the black ON/OFF footer toggle and the PDP copy (`.d-vat-switch`) are removed.
- **11-05 — Uploaded artwork in the cart line** (cart-artwork-sketch.html C): the first file replaces the product photo, "+N" for the others;
  a click / tap or View artwork opens it big in a popup / sheet with the others as thumbnails to switch. The hover preview was built and removed
  the same day (confusing next to the popup).
  The PDP keeps an 800px JPEG per picture on the cart line (`art: [{name, ext, thumb, page}]`): a PDF gives one per page (max 10, via pdf.js
  from cdnjs, loaded only then), shown as "card.pdf · page 2 of 2" and in the Design line "(1 file · 2 pages)". Not drawn within 8 s, or no picture (EPS, AI, DOCX): light grey with its type (tile, thumbnails) or its name (popup); no icons.
  The popup is our standard one (560 desktop), the artwork the full width; mobile the full width of the sheet.
  Rejected: A (a pile with edges peeking out), B (split tile). C also nudges people not to upload many files.
- **11-05 — Edit a cart line:** the cart's Edit opens `product.html?p=…&edit=<line>`: the line's choices (`cfg`, kept on every new line),
  its design way and its uploaded files (thumbnails, "+N") are back; the button says Update cart and replaces that line (toast "Your cart is
  updated"). Lines from before `cfg` was kept open with the default choices.
- **11-05 — Shipping (Ireland):** €6.00, free when the products (after a discount code) are €60.00 or more excl. VAT (`FREE_SHIPPING_FROM`,
  `SHIPPING` in app.js, `cartTotals().shipping`). Shown with an ⓘ + popup on cart and payment, a row in the quote popup and on confirmed.
- **11-05 — `--cream` (#FEF0DF)** is a token: only the reassurance block after an upload. **Upload your artwork is selected** as soon as files are in.
- **11-05 — Desktop PDP bar: split button with a drop-up** (design-dropup-sketch.html A): the green button stays one click for the chosen way,
  a chevron segment opens Upload later / Design online with Canva / Upload your artwork above it; picking one changes the button and the card.
  The chosen row only gets the tick, no coloured row. Rejected: B (a "Design: …" chooser pill), C (the button always opens the menu).
- **11-05 — Design check upsell in general words** (cart, mobile + desktop, and the PDP upload popup): "Add Premium Artwork Check" /
  "For extra peace of mind with your files." Never "an expert checks your files" as a promise; the upload popup's promises are only
  "Every file gets our free automatic check" and "You'll see a proof before we print".
- **11-05 — Tooltips on the icon buttons** (`data-tip`): dark green bubble 12 above, white 12/18 semibold: Change options, Duplicate product, Remove from cart.
- **11-03 — Empty cart and the quote popup** (cart-empty-quote-sketch.html B for both): empty = the live message (the header's bag icon in a grey
  circle, "Your cart is empty", Browse products) + "Our best sellers" (4 product cards, Add to cart on desktop). Request a free quote = our popup
  with the cart lines, extras and total excl. VAT first, then email + name (phone, company, notes, files optional); logged in "Sending to … · Change";
  Eircode + town optional (added later the same day, for the shipping costs). Also on mobile, under the totals. Rejected: empty A (as live only), C (categories); quote A (live's two columns + address).
  The Cart prototype switch (demo carts 1 / 4 / 0) is removed.
- **11-03 — Green text that is not a link = `--link`** (#008539, 4.8:1 on white), not light green (3.2:1, too low for small text): Free and
  discounts in the totals, the saving under a crossed-out price, the quantity hint; then site-wide (26 rules: delivery dates, social proof,
  done steps, focused field label, arrow links, older links). Light green stays for areas (CTA, switch, outlines, icons) and the 20px thumbnail letter.
- **11-03 — "Often ordered with" hidden on mobile** (`.desk-only`, the code stays): desktop only for now.
- **11-03 — Mobile cart = the desktop line and blocks** (cart-lines-mobile-sketch.html A): the order line is one component for both screens
  (`lineHtml`, `.cart-line`): photo | text | price, the delivery per line between two lines, the quantity dropdown + Edit / Duplicate / Remove
  on one row, the hint under it (mobile). Icon buttons 40 on mobile (the height of the dropdown), 32 on desktop. The order-level delivery block
  under the totals on mobile is gone (each line has its own). The upsells on mobile are the desktop light grey blocks (`.sum-up`), on top of the
  cart; the white card with the arrow is removed. Rejected: B (quantity on the price row, text links), C (actions behind ⋯ in a sheet).
- **11-03 — "Request a free quote"** (as live) under Continue to checkout in the desktop summary: outline button, 8 under the CTA.
- **11-03 — "Often ordered with <group>" in the cart** (as bol's "Vaak samen gekocht"): 4 products from other groups than the first cart item,
  not already in the cart, the home / PLP product card; the photo and name open the product page. Desktop only: an "Add to cart" pill that adds
  the Recommended preset at the product's own quantity ("Upload after checkout", delivery as the first cart line); the card shows that price.
  Desktop: under the order lines, before Continue shopping (4 in a row); mobile: before Continue shopping (2 × 2), no pill. List: `XSELL` in cart.html.
- **11-03 — Lines B and Upsells D, the other variants removed:** order lines = photo | label, name, options, Design (+ View artwork / Edit in
  Canva) | price, the delivery (etaHtml, "(Saver)" after the date) between two lines, one row with the quantity dropdown + hint and the round
  icon buttons. Upsells on desktop (Cornel's design) = light grey blocks inside the Order summary card (switch · title · price; short line +
  link to the popup), a line across the card, then the totals; mobile keeps its cards on top. Rejected: Lines A (pills + quantity tip), Upsells
  O (old-site cards under the lines), R (a question + radio list), S (switches in a grey block), C (level pills); #FEF0DF / #FFFFE3 tints.
  Cart cards (lines, summary) use --outline. The demo carts (1 / 4 / 0) stay as a switch. Next: the empty cart.
- **11-02 — Richer product lines on desktop, A and B behind the switch Lines (`cart-lines-sketch.html`):** label from the product, file deadline
  and delivery date per line (each product has its own deadline; the sidebar delivery box is gone on desktop), Edit / Duplicate / Remove with
  icons, a quantity upsell (only a step that is ≥5% cheaper per piece, price from the product's price list), discount code closed by default
  under the totals. Continue shopping under the products. C (quiet text links) rejected: upsell easy to miss.
- **11-02 — Direction A from `cart-desk-sketch.html`:** mobile order on the left (design check, then the products as outlined cards; no title above them on desktop, Cornel 11-02),
  a sticky sidebar like live on the right ("Order summary": totals, Continue to checkout, delivery date, Continue shopping, USPs, payments).
  The mobile checkout bar is hidden on desktop. Rejected: B (whole mobile order summary in the sidebar: the button drops under the fold with
  3+ products) and C (products first like live: different order than mobile, design check under the fold).
- **11-02 — Upsells on desktop in the sidebar (option C of `upsell-desk-sketch.html`, keep that file for reference):** design check and
  secured delivery as option cards under "Order summary", right above the totals they change: switch, title + price, a short line
  ("An expert checks your file." / "Priority support and reprint.") and a text link to the popup ("See our 3 options" / "More info").
  Left column = products only. Mobile unchanged (cards on top, arrow to the popup). Rejected: A (three checks on the page) and B (one card, two rows).
- **11-02 — Cart parts on the 8px grid, mobile and desktop:** upsell card (16 padding, 8 switch → text, title 16/22, no gaps between
  text lines), product line (8 before Remove, 8 · line · 8 between products), totals (8 between rows and around the Total line),
  delivery box (8 above the tick line). "Your Cart" → content 8 on desktop. The upsell card CSS is one block now; the switch's on
  state lives on `.switch` (cart + PDP).
- **11-02 — Desktop PDP "Your selection" on the 8px grid:** option rows, delivery box and price lines all line · 8 · text · 8 · text …
  · 8 · line (rows keep a 4px padding for the hover background, so text to text is 8). Block 27px taller.
- **11-02 — Footer under the desktop cart** (the shared desktop footer, 96 above it as on the other pages). Mobile cart keeps no footer:
  the checkout bar sits at the bottom. A footer slot with `data-desk-only` is removed on mobile (app.js).
- **11-02 — Cart count on the desktop bag icon too** (was mobile only).
- **11-02 — `.link` = the style guide's text link:** `--link` green (#008539), underlined, 14/22 (was `--light-green`). The arrow links
  ("All categories →", "View all … articles", Help Centre "Read more") keep light green, matching their green arrow icon.

## Design system / UI kit (`design-system/index.html`, Oct 30, 2026)
- **11-05 — Split into `design-system/` + `prototype/` (`sketches/split-sketch.html`, option B):** the design system stands on its own
  (`tokens.css`, `components.css`, `components.js`, `icons/`, the guide), the prototype builds on it (`pages.css`, `app.js`, data, photos).
  Names: "prototype", not "website" (developers would read that as production code). One repo, not two: the guide's live cut-outs need
  the pages on the same address. Rule: reusable → design system + a row in the guide; one page → `pages.css`. Old addresses forward.
  Mirrored to `Helloprint/helloprint-design` (every push goes to both repos). Checked: 110 pages/variants at 390 + 1512 (all products,
  mobile flows A–J, cart pages empty + filled) have identical computed styles and positions before/after. Shared rules that list page contexts
  (card border/hover, desktop h1/h2, FAQ summary, tooltip) live in `components.css` because the guide uses them; turning them into plain
  component classes is a later simplify round. Breadcrumb spacing (`.desk .crumbs` padding) is page layout now (`pages.css`).
- **11-02 — Decided PDP switches removed (`unused-js-sketch.html`):** Funnel → live funnels, Names → one thickness scale, Specs → links +
  See also, Icons → material icon set, Design → A (cards in Your selection), Rec → D (green bar, now `.desk span.rec`). Code, CSS and switch
  buttons gone; the PDP is identical before/after (8 checks). Cards A/B, Photos A/B, Delivery D/E and the mobile flows stay until Cornel picks.
- **11-02 — Unused JS removed:** the old mobile VAT dropdown code and `TP_STAR` (app.js).
- **10-30 — Dead code removed (`deadcode-sketch.html`):** 98 CSS rules + 3 dead selectors (old desktop hero tiles, folded-leaflet row,
  stand-out swipe cards, old design cards, old checkout bits, mobile VAT dropdown) and 31 unused images. Every page identical before/after.
  Hidden variants, URL-only flows and sketch pages stay. Unused JS not checked yet.
- **10-30 — One line height per size (`lineheight-sketch.html`):** tokens `--lh-12` 18, `--lh-14` 22, `--lh-16` 22, `--lh-20` 24 for text
  that can wrap, `--lh-tight` 1.2 for single-line controls, 1 for icons/counters/numbers; 24/28/48 keep 28 or 32 / 32 / 56.
  The 20/32 checkout headings are 24 + 4px padding (same height). Pages 0–49px longer, nothing clipped.
- **10-30 — Type scale (Check 12, `type-sketch.html`):** tokens `--t-10` 12 14 16 20 24 28 32 48; every font size is a token
  (icons and the Flow switch stay px). 13 → 14 for links, buttons, rows and → 12 for notes/meta; 15 → 16 desktop card titles,
  buttons, inputs (no iOS zoom) and → 14 mobile card titles; 17 → 16; 18 → 20 (sheet/checkout titles); 11 → 12. Dead CSS of the
  old Flash Sale banner, banner row, catalogs and expert banners removed.
- **10-30 — Corner scale (Check 11, `radius-sketch.html`):** tokens `--r-s` 4 (badges, checkbox, flags, tiles inside a card),
  `--r-m` 8 (fields, option cards, quantity rows, delivery cards, menus), `--r-l` 10 (cards, photos), `--r-xl` 16 (sheet),
  `--r-pill` 100px (buttons, pills, toggles, toast); 50% round, 0 for photos square on purpose. Every radius in styles.css is a
  token (was 20 values). Visible: option/quantity/delivery cards 5 → 8, badges 3 → 4. New radius = one of these tokens.
- **10-30 — No full stop after the PDP product name** (product.html added one in code).
- **10-30 — Page title on desktop back to 24/32 = the section title size** (Cornel: 32/40 was way too big; the PDP title is 24 too).
  The h1 tag makes it the page title, not its size. Replaces the 32/40 below.
- **10-30 — (replaced) Page title 32/40 on desktop (Check 10):** home, category pages and Help Centre topic + article pages (one rule);
  mobile stays 24/28. The PDP title stays 24/28 (narrow column next to the configuration, Figma PDP).
- **10-30 — One breadcrumb (Check 9):** 12/17 dark grey with `--link` links, mobile = desktop (desktop was 14/24 black, mobile
  links were light green). Desktop crumbs 7px lower, spacing around unchanged.
- **10-30 — No separate Edit button (Check 8):** `.btn-edit` removed; Edit (flow I) and Choose (option guide) are a normal
  `.pill`, the PDP summary Edit with the pencil is `.pill.has-icon` (dark green outline + text). 34px → 31/32px high.
- **10-30 — One secondary button (Check 7):** `.btn.outline` (white, grey outline, dark green text). `.btn.ghost` (black text,
  only on the cart's Secured Delivery "No thanks") and the unused `.btn.ghost.dark` removed.
- **10-30 — UI kit = layout B** of `design-system-sketch.html` (example left, spec right, one row per item; A spec sheet and
  C gallery rejected). One page with a sidebar (Foundations + Components), Mobile/Desktop switch on top; it loads the real
  `styles.css` and reads colours, type sizes and the material icon list live. Grey "Check" label = an inconsistency to clean up.
- **10-30 — Colour tokens (Check 1–6), N chosen, switch removed:** `--link` #008539 (inline links, breadcrumbs, link hover),
  `--error` #c90e2e (one red for every error: also login, was #d0021b, and the text in an invalid field, was #d74a62),
  `--selected` #eefaf3 (background of a chosen card), `--control` #9f9f9f (checkbox/radio outline). Selling-point ticks use
  `--light-green` (was #00ad4c), grey tile titles `--black` (was #333). No hex values for these in the CSS any more.

## Labels (all pages, Oct 29, 2026)
- **10-30 — Three tones:** orange = commercial (Most Popular, Best Seller, Great Value, Recommended, **Free design templates**),
  light green `.badge.eco` = eco (solid `--light-green`, white text, as every green button), grey `.badge.neutral` = information
  (Default, Help Centre topics). `BADGE_TONE` in app.js. Rejected: a light green tint with dark green text.
- **10-29 — One label component, two tones:** `.badge` orange = commercial highlight (Most Popular, Best Seller, Great Value,
  Recommended), `.badge.neutral` grey = information (Eco, Free design templates, Default, Help Centre topic). One helper in app.js
  (`badgeHtml` / `badgeTone`, list `BADGE_INFO`). The cart's green uppercase RECOMMENDED tag now uses the badge. Rejected: a colour per label.

## Help Centre (`help-centre.html`, Oct 28, 2026)
- **11-04 — Enriched articles with what we have:** the draft content (artifact "How can I create an account?") built with the
  article's own elements only: p, h2, ol, ul, strong, links; the table "What we ask for and why" became a list ("**Field**
  (required): why"). "More help with your account" = the home's article cards (`.hc-card` in `.hc-quick`, 3 in a row
  as on the home, title + one line + Read more), data in `HELP_MORE` (help-data.js). The artifact's "Still stuck?" line
  is left out: the helpful block and "Can't find it?" + chat already close the page.
- **11-04 — Relinking under every article (max 3, one row; 6 was kermis):** "More help with <topic>" (Account: "your account") with 3 article cards on all
  146 articles: the next questions of the same sub-topic first, then the rest of the topic; card line = the article's first
  sentence (2 lines max, as on the home), card title one step smaller than on the home (14 on desktop). A hand-picked list in
  `HELP_MORE` wins (create-account, its first 3).
- **11-04 — One text style for all 146 articles (UI Style Guide):** every heading in an article is an h2, 20/24 extra bold dark green
  on mobile and desktop, as "Order overview" in the cart (24/32 above, 8 to its text); was a mix of h2 (24px, as big as the page
  title), h3, h4 and bold-only paragraphs. Body 12/18 · 14/22 black, emphasis semibold (600), no trailing colon in headings,
  no empty headings, list items without an inner <p>. Done in help-content.js by a script (16 articles changed).
  Numbered steps (ol) 16px apart, as paragraphs (long steps ran together at 8); bullet lists (ul) stay 8.
- **11-04 — Signed in: your own data in the article (A of help-personal-sketch.html):** one block under the title for 12 kinds
  (proofs, changeable orders, status, shipments, recently delivered, past orders, quotes, invoices, refunds, cases, shipping
  address, billing): grey block, small dark green label (no count), rows = white cards with the card outline, the product photo (`.thumb-sm`), number 14 semibold, the urgent part
  semibold, one small action (the header's light green `.dbtn`, quiet = white `.pill`; `.btn` was too big), View all top right to My Account (not built yet). Nothing
  relevant = no block. Signed out: one "Sign in to …" line in the same grey block, on the "my" questions only. Not on the Help Centre home.
  Rejected: a white outlined block with a dark green pill, a big title, a yellow status label, light green background.
- **10-29 — Search on the topic pages (B of help-search-sketch.html):** the hub search field under the title filters this
  topic's questions live (match marked light green, "5 in Ordering · 1 in other topics"), up to 5 matches from other topics under
  "In other topics", nothing anywhere = try other words + Chat with us. Not on article pages. Rejected: A (sidebar), C (band).
- **10-29 — Sidebar round:** article count per topic in the menu (grey, right; active semibold black); no section tabs on
  mobile (too noisy); "Can't find it?" + experts + Chat with us under the menu on topic/article pages (not in the lead text).
  Fix: an in-page anchor wins over the prototype ROUTES (sub-topic "Payment" opened the checkout).
- **10-29 — Sub-topics in the left menu (desktop):** under the active topic, regular grey, the one you are in semibold black
  (follows the scroll); mobile keeps the section tabs. Topic + article pages keep the 760px reading width, the hub the full column.
  Rejected: tabs above the questions on desktop.
- **10-29 — Detail round:** question rows 14/20 as the PDP FAQ (exception to §12, long lists); Home = the hub with Popular
  articles (6 material-style cards: icon, title, 2-line excerpt, Read more) + Common questions; menu without card frame, active =
  light grey; article page: topics menu as sidebar, green "Back to <topic>" link, body text black, white "helpful" block; topic
  pages full column width; section tabs scroll with a fade when they don't fit (shared .tabs: the grey line is now an inset
  shadow so the active 2px line sits inside the bar). Rejected: green icon / 3px left line for the active menu item.
- **10-29 — Live content:** all topics, sub-topics, questions and article texts from helloprint.com/en-ie/help-centre in
  `help-content.js` (146 articles, live slugs as URL). Menu = Home + the 5 live categories (Complaints is a sub-topic of Account on
  live, so the separate Complaints topic is gone). Naming rule applied (shipping/billing address); links kept local.
- **10-29 — Every answer has its own URL** (internal requirement): no fold-open answers on the overview pages; every question is
  a row with the grey arrow right (the FAQ look: lines, question size, hover) to `help-article.html?q=…`. Structure stays F
  (Getting started hub + topics sidebar, topic pages with section tabs); the switch is hidden.
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
