# Decision log

Newest on top. Format: **date — decision.** Why / what was rejected.
Add new decisions here when Cornel makes a final call.

## Footer pages (Nov 22, 2026)
- **11-22 — Our promises and Sustainability are marketing pages** (Cornel: "convert to the marketing template, following our guide"): the live en-ie footer pages rebuilt 1:1 (copy, images, order) with only the template's parts, no new CSS. Big figures are icon cards (as about us); a quote is the centred block without a photo (title = the quote, the name under it); live-only targets (the impact report on Flipsnack, the partner site) stay local anchors. The existing `#our-promises` and `#sustainability` links (footer, about us, our culture, VIP) now open them.

## Top 20 products, batch 1 (Nov 22, 2026)
- **2026-11-22 — The prototype gets live's top products: the 10 homepage Bestsellers + the products the homepage category menu links straight to (no sales data
  available). Built in 3 batches; batch 1 = Standard Posters, Stapled Booklets, Perfect Bound Brochures, Half Fold Leaflets.** Steps, option names, quantities,
  prices and delivery as live en-ie (read 11-22; dates one working day earlier for the prototype's approve-by Fri 20 Nov). Long live lists: booklet Pages
  8–64 all as cards; perfect bound shows 12 of the 94 page counts (28–400), the rest named in the info. Batch 2: labels on roll, stickers, envelopes,
  letterheads, notepads, Christmas cards; batch 3: Ebony pen, beach flags, foamex.
- **2026-11-22 — Batch 2 built: Stickers on Roll (labels), Individual Stickers, Standard Envelopes, Letterheads, Standard Notepads, Christmas Cards.**
  Same rules as batch 1; options use the guide's own icons (stickers/, envelopes/, notepads/, printing/ PMS, folds/, materials/ films, metallics,
  kraft …), the poster materials got theirs too (blueback, backlit, dot foil, photo paper, neon). Option names are unique within a step, so the
  summary is clear ("Full colour · single", "1 PMS · double", "Portrait left fold"); live's "Option" steps are named after what they are
  (Dispenser, Envelopes). Live photos for stickers, envelopes, letterheads and notepads in prototype/assets/products/.

## Quantities with a thousands comma (Nov 20, 2026)
- **2026-11-20 — Every quantity reads "1,000 pcs" (1 → "1 pc"), as live and the staging cart: `pcs(n)` in app.js.** Cart (spec line, dropdown,
  upsell, toast, quote), PDP (quantity rows, summary, sticky bar, specs, tiers, related cards), the mini cart and the home cards. Found in the
  staging cart comparison (PR-7476); the strikethrough + "You save" per cart line from staging was not taken over (one price per line stays).

## Search results page (Nov 20, 2026)
- **2026-11-20 — Search results = the PFP with the query (`prototype/search.html?q=…`, sketch B in `sketches/search-sketch.html`).**
  The header field keeps the query (no second search field), title "Results for “pens”", the count in the PFP bar. On top of the right column the
  matching categories as a chip row with photos (`.chip-row` + `.chip-img`, the same chip as See also on the PDP; scrolls, desktop arrows when it
  does not fit). A chip filters this page (Cornel 2026-11-20: not a jump to the category page); while a filter is on the row hides,
  after a reset it comes back. Filters as the PFP with Product type first; Sort with Relevance first (default). No reviews, FAQ or SEO text (noindex).
  No results: popular searches (pills), popular categories (PFP tiles), Request a quote; no emoji. Enter in the header search (mobile and desktop)
  and "View all results for …" open this page. Prototype: only pens match (every word against name, type, brand, material, print, colour; no
  substring hits like live's "pos" → Tony's). Rejected: A (as live: a second big field + Related pages + one Categories filter = two ways to the same
  thing), C (category tiles on top: push the products a screen down).

## Upload & See: close to staging (Nov 20, 2026)
- **2026-11-20 — Upload & See stays close to the staging flow (same screens, order and wording), drawn with UI guide parts only.**
  Basis: `sketches/upload-see-flow.html` (clickable), explained in `sketches/upload-see-map.html` (every interaction + what changed from staging).
  Fine-tuning follows. For now it stays standalone: not linked to the prototype or a product. The A/B/C picks in `upload-see-sketch.html`
  (1C, 2B, 3B) are not the basis; they stay as input for the fine-tuning (the upsells after Approve and the empty back are still P1 in the plan).
- **2026-11-20 — Header: the slim checkout header without “Secure Checkout”** (logo, account, cart). It is not the checkout: the customer is still
  making the product. Rejected: A the shop header (every link a way out mid-task, pushes the flyer down on mobile), C slim + Need help? (help stays the team line in the page).

## My account: nothing needs you (Nov 20, 2026)
- **2026-11-20 — When nothing needs your attention, that block is hidden and Order again takes the full width** (desktop: Reorder and its
  icons right of each row, one line instead of under the text; mobile: Order again simply moves up). Cornel: an empty "Nothing needs you right now"
  card is noise when there is re-ordering to do. The empty-state text is removed (a new customer sees only Order again's own empty state).

## PDP delivery dates in November (Nov 19, 2026)
- **2026-11-19 — The prototype's "today" is Thu 19 Nov; every delivery date is the live date of that day** (en-ie PDPs read on 11-19):
  business cards Saver Mon 30 Nov / Express Mon 23 Nov; flyers Tue 1 Dec / Tue 24 Nov / Mon 23 Nov; mug Wed 2 Dec; Basic Cotton Bags
  Mon 7 Dec; Premium Tote Bags Wed 2 Dec / Wed 25 Nov / Tue 24 Nov; banners Tue 1 Dec / Wed 25 Nov / Tue 24 Nov; roller banners
  Tue 1 Dec / Wed 25 Nov. The t-shirt now has Saver (Thu 3 Dec, included) + Standard (Mon 23 Nov, +€57.75), as live (was Standard only).
  "Approve by" is one date for every option, as live ("Upload file by" Fri 20 Nov 10:30): `etaApprove()` in app.js.
  Delivery surcharges excl. VAT as live for the default configuration: business cards Express +€36.50; flyers Standard +€39.22, Express +€45.67;
  Premium Tote Bags +€135 / +€162; banners +€2 / +€4; roller banners +€47 (was already). Fixed per product (live varies them with the quantity).
  Past orders in My Account keep their October dates (they are history).

## PDP design options for logo products (Nov 19, 2026)
- **2026-11-19 — Logo products get two design options, as live: "I want to upload my design later" and "Upload & customise your logo".**
  `logo: true` in products.js (330 ml mug, Basic Cotton Bags, Premium Tote Bags, Sol's Imperial T-shirt; pens have no PDP yet).
  Upload later first, the same order as print. No Canva, no artwork upload. Desktop cards, the bar drop-up and the mobile design
  sheet all follow it; the CTA reads "Customise your logo" and only shows the toast "Opening the logo editor…" (like Canva; the editor
  itself is not in the prototype).

## PDP delivery (Nov 19, 2026)
- **11-19 — T-shirts: sizes first, the price steps under them** (Cornel, sketches/tshirt-qty-sketch.html A over B quantity-first and C a price table): per size a text field (the checkout's `.field`) with the size under it, the field and the size apart so you see where to type (Cornel, as live); a size with pieces gets the green outline. Under them the steps (5+, 10+, 25+ … pcs with the price each, yours green) and one line: "25 pcs: €329.99 · €13.20 each · 25 more for €11.00 each". Before: tiles with the size and the number in one, and only "€16.48 each now, €13.20 each at 25 pcs"; live shows "Price per piece" only.
- **11-19 — Two dates wherever the delivery shows** (Cornel, sketches/delivery-dates-sketch.html B): desktop delivery tiles keep the big calendar date and get "latest …" in grey under the option name; "Our best value" green as "N days sooner"; the desktop order bar shows the option with "Estimated Tue 29 Sep — latest Wed 30 Sep" under it (was "Saver · arrives Tue 29 Sep"). Mobile: no date in the sticky bar (Cornel); its delivery list already had both dates. Rejected: A (bars only), C (the range in the calendar, "25–28" reads as a four-day delivery).

## Headings (Nov 19, 2026)
- **11-19 — Headings the same on every page (an audit of 768 headings on 39 pages)** (Cornel: "all as you propose"): the PDP's section titles 24/32 (were 24/28); card titles (blog cards, content rows) 14/22 on mobile (were 14/16.8); every 20px heading −0.4 letter spacing (sheets, cart side, checkout head were −0.36); a title inside a card (the empty cart) 20/24, now in the guide. Kept: a content row that is a section of its own has an h2 (Black Friday, Christmas, Flyers), rows under a section title an h3 (business cards, our culture); the help strip keeps 24/32 on marketing pages (decided 11-15); help articles 20/24 (narrow column).
- **11-19 — The page title (H1) is bigger than the section titles on desktop: 28/32** (Cornel, sketches/h1-sketch.html A over B 32/40 and C smaller H2s): was 24/32, the same as the H2. Mobile stays 24 (now always 24/28; the line height was 27.84 / 28 / 32 per page), the H2 20. The Display titles (Help Centre, marketing heroes, 48) stay. 32/40 was already too big on 10-30.

## Product cards (Nov 19, 2026)
- **11-19 — Fast delivery on every product card before the cart** (Cornel: as on the PFP; live shows a green "Delivery Wed, 25 Nov" pill on fast products): live checked on /flyers, /promotional-printing, /catering-and-hospitality-printing, /deals (home, business cards, Christmas: none). Those products (Classic/Standard/Eco Flyers, the five folded leaflets, (Standard) Posters, Letterheads, Greeting Cards, Stapled Booklets, Placemats, Notepads, A-board Sign, (Custom) Banners, Beach Flags) get our white "Fast delivery" label under the price everywhere, matched by name (`FAST_DELIVERY` in app.js), not the date (a date per card was tried and dropped on the PFP). Not the cart's cross-sell or My Account; the PFPs keep their own from live data. Live is inconsistent on Greeting Cards (fast on /flyers, not on /promotional-printing): we show it.
- **11-19 — The price on a product card is as big as its title** (Cornel, sketches/card-price-sketch.html): desktop 16/22 extra bold (was 14), on every product card before the cart (home, PLP, CLP, PFP, the PDP's Other …, marketing pages); mobile stays 14, the size of its title there. The cart's cross-sell and My Account keep 14. Tried: 16 mobile / 20 desktop (the PDP total's size): mobile then as big as the title for no reason, desktop too big; 18 is not on our type scale.
## PFP, Product Filtering Page (Nov 19, 2026)
- **11-19 — Mugs as a PFP** (Cornel): the first filter is the product type; for mugs live has none (all "Mugs"), so the type comes from its material (Ceramic 60, Stainless steel 10, Glass 3, Enamel 2, Plastic 1) and there is no separate Material group. Capacity is the mug's own group. Related tiles: only categories with products (Shakers, Bottled Drinks, Paper Cups, Bottles & Jugs are empty on live), the six small glass pages as one Glassware tile, so 8 = 4 × 2. Live's intro says "across the UK" on the Irish site: we say Ireland. Live's "types of mugs" (6 big photo cards with long texts, Cornel: way too much space) is SEO text, so it becomes the SEO block at the end (title, lead, a fold per type), without the photos.
- **11-19 — Live's category tree on a PFP: filters or tiles** (Cornel: "I see many more kinds of backpacks on live"): live lists the whole parent tree in its filter column (links that leave the page). A sub category that is a filter of this page becomes a filter value (and its URL opens the page with it); every other category of the tree is a grey tile under the products: backpacks "More in Bags" (16, 4 × 4, Wallets left out: an RFID card), pens the 4 of Pens & Pencils. Brands come from live's brand pages (pens: BIC 30, Parker 14, Marksman 8, Waterman 5, Senator 3, Stilolinea 1), not from the names.
- **11-19 — The filter sidebar has no scroll of its own** (Cornel: scroll bars in it are ugly): it sticks under the header while it fits on the screen; taller (groups open), it scrolls along with the page and sticks with its bottom 24 above the screen's bottom (pfp.js sets its sticky top, again on open/close, change, resize).
- **11-19 — PFP through the design system** (Cornel: "Filters" did not follow it): "Filters" is a card title (16/22; first a section title of 24/32, Cornel: one step smaller all round); the group titles and Eco only 14/22 semibold (as big as the product titles was too much); a closed group's choice 4 under its title; the count, "Showing N of M" and the empty state are body (12/18 mobile, 14/22 desktop); the colour dot rings use --outline instead of a raw rgba. A value with a quote (Fits 17" laptop) is escaped in its attributes.
- **11-19 — The PFP is a template: pfp.js + a page config** (Cornel: backpacks "with all the rules we agreed"): pens.html and backpacks.html share one script; a page gives its items (a data file from live), the quantity on the cards (one every product of the page offers: pens 500, backpacks 50), its filter groups (the product type first, then Eco only, Delivered by, Price per piece with its own edges, the groups that matter for that product, e.g. Laptop size, then Print, Colour, Material, Brand) and the related categories. Delivered by, the price ranges, the colours and unlisted values come from the data. Blocks under the products follow live (backpacks: related categories, reviews, SEO text; pens: related, reviews, FAQ). The invisible Fast delivery label (to keep the prices level) only in a row that has a fast product; a row without one keeps no space (Cornel: lost height).
- **11-19 — The estimated delivery on the PFP card: quiet, and only when it is fast** (Cornel, A of the Delivery switch "het rustigste", smaller): "Fast delivery" (as live; Cornel, after "Estimated tomorrow / Tue 24 Nov") as a white label (12, regular, bold was too hard; --outline as the cards, no shadow, as big as the orange label; 8 under the price; Cornel, after a light grey tag at body size) only on the products delivered within 3 working days (as live's Fast delivery); the rest nothing (an invisible tag keeps the prices level). Rejected: B a band at the card bottom (outlined, cream, light grey: on every card nothing is special), C / E a Fast delivery label on the photo (white, then yellow: stacked under Most Popular / Eco it became a fair, "kermis"), D / F a dark green line with a truck.
- **11-19 — Colours on the PFP card: "8 colours", the dots on hover** (Cornel: C of the Colours switch, "fantastisch"): at rest the number of colours as grey text; on hover (desktop) a frosted strip (white 60% + backdrop blur, so the pen shows through; Cornel) with the dots slides up over the photo, hover a dot = the live photo of that colour, the link takes it along; a colour filter shows that colour on every card. Rejected: A, dots as information only; B, dots always with the swap. Mobile: no hover, the text only.
- **11-19 — A new page type: PFP, built as pens.html** (Cornel, sketches/pfp-sketch.html C over A sidebar only and B dropdown pills): for any list of products you filter (live /ballpoint-pens: 181 pens). Filters in a sidebar on desktop (3–4 filters at once over many products stay visible with their counts; B hid each behind a click), a sheet on mobile; the card shows the price at 500 pcs + the price each + the estimated delivery, so cards compare (live: "from €0.26" without a quantity).
- **11-19 — No sub category pills on top** (Cornel: there are many): a sub category that is a filter becomes a filter value (Eco Pens = Eco only, Luxury / Stylus Pens = Pen type, BIC … Pens = Brand) and its URL opens the page with it on; the other categories (Pencils, Highlighters …) are grey tiles under the products.
- **11-19 — No "Prices for 100 · 250 · 500 …" bar** (Cornel: invented): one fixed quantity on every card (500, must be one every product of the page offers).
- **11-19 — Pen type first in the filters** (Cornel), Eco only under it; then Delivered by (real dates), Price per piece, Print, Colour, Material, Brand. Live's Design online and delivery labels leave the card; one label at most.
- **11-19 — Filters work at once, the selected ones as soft tags** (Cornel: "zacht", the dark green active pills were too hard): light grey, regular, a grey ×, Clear all; on mobile Filters gets a small dark green number and the sheet button counts along. 0-result values greyed, an empty state with "Remove <last>".
## My account (Nov 17, 2026)
- **11-19 — The quantity dropdown and the upgrade hint are always on a cart line, a reorder too** (Cornel): a reorder line now links to its product (Classic Business Cards was `#classic-business-cards`, so the cart had no price list); an older `#slug` line is found too, and a quantity that isn't a step (a reorder, a quote) gets its own place in the list, priced between its neighbours.
- **11-19 — Vouchers: the list page (sketch A)** (Cornel chose A over my pick B, cards): Vouchers is its own menu item under Complaints (a tag icon, `sell.svg`, drawn in the icon style) and the same list page as Orders, Invoices and Quotes: filters, search, a table (rows on mobile) with what you get, valid until / used on which order, the status and Copy while you can use it. A code from a complaint gets one grey line, “From complaint CMP-1042 · damaged on arrival”, linking to the case. Available is the light green dot (as Paid); used and expired grey. VIP (−4%) is automatic and not a voucher. You still add a code in the cart under “Add discount code”.
- **11-19 — My Account V4, batch 2** (Cornel, sketches/account-v4-sketch.html: 8A, 9A, 10A, 11B, 12A): **Orders** Export CSV with the title and the sort as an outline button after the filters (Cornel: "a button with an outline too"); on mobile both in one ⋮ menu next to the title (the address book's menu, now `rowMenu` in account.js), so they never fight with the scrolling filters; older orders = one quiet grey line under the list. **Invoices** the same Export (⋮ on mobile); Settle all as a pay block between the title and the filters, only with 2+ open (a green "Settle all €…" by the title was too pushy, as Pay now with the €). **Proof** Approve asks first (we print exactly this, one tick makes Yes work) with the note for the artwork team in that popup; the separate "Leave a note" link and its popup are gone. The deadline passed = the same cream band, saying so (Cornel: cream, not grey; Posters in #8847305). **Report** Which order? is a search with the header search's dropdown: focus shows your latest orders, typing searches all (Cornel: "both"); "Another order, or can't find it?" goes to chat. Rejected: the orders as radio cards (A). **Complaint** six steps, the photo steps only when we asked; on mobile and desktop only the bars + "Step 3 of 6 · Waiting for your photos" (Cornel: compact and readable, Case progress below has every step): `.tracker.compact` + `.tracker-now`.
- **11-19 — My Account V4, batch 1** (the team's V4 plan, Cornel: "batch 1"): orders have six statuses (Action needed, Payment due, In production, On its way, Delivered, Cancelled): a proof to approve is Action needed, no "Approve proof". Cancel says "You pay nothing" only while the order is unpaid; paid by card = "we refund the full amount to your card within 5 working days", a paid invoice = a credit note (`cancelMoney` in account.js). A new file's proof is "usually there within 1 working hour" (was 4). Quotes: the pill is "Quote ready"; a new state Cancelled (by us, with the reason, QT-5466), grey, Cancelled as the tracker's last step; Decline opens a reason popup as Cancel order does (one `reasonBody` for both). Complaints: no "within 2 working days" promise. Report form: an order not delivered yet only gets Delivery; 3 days or fewer left = "Only N days left." bold at the start of the cream band (no extra colour: the band already stands out). Orders: "Add my orders" sits between the intro and the filters. Two delivered demo orders added (#8836650, 5 days left; #8833518, 1 day left).
- **11-18 — No "Ask us a question" on the quote page either** (Cornel; the artifact had it only on quotes): the team line and Need something? cover it, as on the complaint page; the form, its CSS and the quote-ask action are gone.
- **11-18 — One card outline: --outline** (Cornel: "sometimes a different border colour, on purpose?" No: two tokens both said card outline): every card's outline is --outline (#cfcfcf): the account cards (.dash-card), quick links / help cards (.hc-card), product, material and blog cards, the help centre cards, as the cart, blocks and address cards already were. --line is for lines inside (dividers, table rows) and small edges.
- **11-18 — My account through the design system (an independent audit, Cornel: "fix everything")**: a section title is 8 from its block everywhere (was 16 on the sub pages); no number on the invoice's pay block; Order details shows the order's real delivery (DPD · €14.90, or Free); a link in the cream band and in a 12px note takes its line's size; the grey 12/18 line is one rule again; the green dot only for paid (Accepted, Resolved, Done, a credit note: grey); the Orders card uses the small primary button; choice cards carry aria-pressed on their button, filter and report pills too; `.co-row` and the list's table/rows switch moved into the design system; the Questions rows hover --light-grey, the search match --selected; guide rows Lead line and Back link; the card under a list is 14 on mobile; an edit popup has only Save (× closes); gaps on the grid (12 → 16, 6 → 4/8, −10 → −8); radii as calc of --r-l; inline grey tile backgrounds into CSS; `teamLine()` and `DONE_TICK` shared in account.js; dead code out. Kept: the menu's Title Case (all rows), the two chevron assets, the PDF viewer's rgba.
- **11-18 — The detail pages on mobile: help last** (Cornel: "FAQ and help in between looks odd"): on the order, invoice, quote and complaint page the team line and the Questions rows come after the side cards (overview, payments, Related, Need something?) on mobile; desktop keeps them under the content on the left.
- **11-18 — Addresses: the checkout's address cards, the two defaults on top** (Cornel: "the address cards of the customer journey, so it's all the same", then sketch C, "not one selected with a green border"): addresses.html (the account menu, Personal details and the help articles link here). On top two `.addr-card`s side by side: Default shipping address and Default billing address ("shipping", never delivery), the address's name as a grey label; each with Edit (Cornel, after first showing only): the address book's radio cards in the popup, Use this address confirms, as at the checkout; under them the h2 Address book as the lists' table (Cornel: "the table form is nice"): Name (bold, who grey under it, as Invoices) · Address · edit, make default shipping (the star), use on my invoices (the receipt; where it is set the button is light green with a white icon (Cornel: friendlier than dark green)) and delete as icon buttons with a tooltip, only they react (the row itself doesn't, no hand; the hover grey stays: every table row has it, Cornel); on mobile the rows with the roles as grey labels (Default shipping / Default billing) and one ⋮ with Edit · Make default shipping address · Use on my invoices · Delete (Cornel: four buttons didn't fit; the menu as the checkout's address list); Add an address under it. No green border: nothing is chosen on this page. Edit opens the checkout's address form in the popup, without the default checkboxes (one way per role: the star and the receipt); delete only with the bin in the address book (Cornel: not in Edit; not the last address). One address book with the checkout and the order page ('hp-addresses', billing 'hp-invoice-sel'). Rejected: A (settings list as Personal details).
- **11-18 — Pay now without the € icon** (Cornel: "it looks push-push, we want your money"): on the order page, order confirmed and wherever a to-do asks to pay, the button just says Pay now; the other to-do buttons keep their icon.
- **11-18 — The Overview's to-dos: "Go to order" without an icon** (Cornel): in Needs your attention the green button only takes you to the order, so no task icon in it; on the order page itself the buttons keep theirs (eye proof, upload…).
- **11-18 — Personal details: a settings list, Edit opens the popup** (Cornel: sketch A, "password part of Profile, icons as everywhere in the UI"): personal-details.html (the account menu links here). The wishes artifact's content: Profile (Name, Phone, Email, Password), Communication preferences (Marketing emails, Order updates by text: switches that work right away; texts on shows the mobile number under it, the checkout's country code + number, saved as you leave the field), Company info (Company name, VAT number, Invoice email; an address can have its own in Addresses), E-invoicing per country (Peppol ID). Every setting a row with its icon in the grey tile (.hc-ico at 40, at the top of the row), what it is now ("Not set" mid grey) and one small button (Edit, Add, Change, Set up) that opens the standard popup, with a field error when it is wrong. What you fill in at once shares one popup (Cornel): Name + Phone = one row "Name and phone" with one Edit ("Your details"), the three company fields = one row "Company" with one Edit ("Company info"): one button, one popup; Email and Password each their own (sign-in, a check). Kept in this browser ('hp-profile'; the name and email also in 'hp-user', so the account card and header follow); a password is never stored, only "last changed". Rejected: B (Order details cards, edit in place: the page jumps) and C (one form, one Save: a switch that works right away next to fields that wait is confusing).
- **11-18 — Report a problem: a page of its own, one form that grows as you answer** (Cornel: sketch A, "but a dedicated page, the sidebar can go, and a way back"): report.html (?o=<order> from the order page), no account card, one centred column (720), "Back to order #…" or "Back to Complaints" on top. The wishes artifact's form 1:1: which order (shipped or delivered) with the 10-day window from delivery in a cream band (the date first, "Add the photos…" on its own line; "Why 10 days?" folds open under the band exactly as "Not sure which one to pick?" (.spec-fold, no popup), both as a light table (.fold-table: term semibold, explanation grey, a line between the rows; guide row Fold table); delivered longer ago: chat with an agent, the rest hidden), which products (ours, the order has more), the area (pills, Not sure which one?), what happened, how many (only for problems with the products), a sentence, the photos asked per problem (each its own Upload, the upload popup), what we should do (the address book's radio cards), and for a reprint or resend the need-by date with the check (earliest = 4 working days: good news / won't make it, chat with Anna). Send creates the case (CMP-1043…, kept in this browser) and opens it: "We've got your report", your photos, your preferred fix and the date in Case details. The order page's Report a problem and the Complaints card link here.
- **11-18 — The lists: title, filters and the list 16 apart** (Cornel: the gaps were too big): on Orders, Invoices, Quotes and Complaints the line under the title, the filter pills and the list card sit 16 apart (were 32 desktop / 24 mobile, the page gap).
- **11-18 — The icon goes in the green button, not in front** (Cornel, after trying it in the small circle: "veel beter idee"): a to-do block has nothing in front (no number, no icon), a done block keeps its grey tick; its green button carries what to do as an icon: € Pay / Go to order (pay), eye Review proof, upload Upload design and Upload new file (a fix is an upload too, Cornel), list (several products), camera Upload photos, check Accept quote, quote View quote (`btnIcon()` + `TASK_ICONS` in account.js). On mobile a to-do's button(s) take the full width. On the order page, the Overview, order confirmed (€ Pay now; its upload button had its icon already), quotes and complaints.
- **11-18 — No numbers on the to-do blocks** (Cornel; first only from 2 up, then none at all): the tasks are separate, any order works, and "1, 2, 3" promised an order that isn't there. The green outline says it needs you, the cream band how urgent; a done block keeps its grey tick. How many: once, in the heading (order confirmed "2 things to start printing", the Overview's Show all N) or the line under the order title ("4 things to do"). On the order page, the Overview, order confirmed, quotes and complaints.
- **11-18 — Hover on every row that opens a page** (Cornel: "add the hovers everywhere"): on desktop a link row (`a.dash-row`: the Overview's Orders in progress, Invoices, Quotes) gets the table rows' light grey hover, 8 past the text on every side; the text stays where it was. Mobile has no hover, so its lines stay as they were.
- **11-18 — The search inside the list’s card, full width** (Cornel: next to the pills it got cut off once there were more filters): on Orders, Invoices, Quotes and Complaints the filters stay above, the search is the first row of the list card (`.list-card > .find`), full width, 16 above the column heads (mobile: above the rows); "No … match" in the card under it. One card holds the search, the desktop table and the mobile rows.
- **11-18 — Quick links: the icon beside the name on mobile too** (Cornel): 2 × 2 with the icon left of the name and its line; on mobile the icon tile is 40 and the card 12 inside, so the lines fit (Orders and Invoices on one line, Quotes and Help on two).
- **11-18 — Show all opens in place, so its arrow points down** (Cornel): a heading link that opens more on the same page (Needs your attention's Show all N) gets the link arrow turned down, Show less up (`.link.fold`, `.open`); a link to another page keeps the arrow right.
- **11-18 — The light grey box goes around Needs your attention + Order again** (Cornel: switch Grey, "A, that works better"): `.account-two.feature`; the quick links stand on white. The switch and B are removed.
- **11-18 — The light grey box: around the quick links, or around Needs your attention + Order again (switch Grey A|B)** (Cornel: "of juist om orders invoices quotes"): B (default, my pick) = only the four tiles on light grey (Cornel: without the title and line), as mijn bol: one start point, the white tiles read as a panel; the green to-dos stand out on white by themselves. A = the earlier box around the pair. Not decided yet.
- **11-18 — Needs your attention + Order again in a light grey box, 4 each** (Cornel: "belangrijk voor ons"): the two blocks together on --light-grey (--r-l, 16 inside, 24 desktop; `.account-two.feature`), the to-dos white on it; Needs your attention shows 4 (Show all N for the rest), Order again 4 products (+ the tote bags). (A light grey Order again alone was tried on 11-17 and dropped; the whole pair is different.)
- **11-18 — Quick links on the Overview + Needs your attention at max 3** (Cornel, as mijn bol; sketches/account-quick-sketch.html, B + A): under the welcome four big buttons, Orders · Invoices · Quotes · Help (was Customer Service, Cornel 11-18), as the icon card with one live line (5 in progress, €762.70 open, 1 ready to accept, Chat or the Help Centre); desktop 4 in a row, mobile 2 × 2 (`.quick-links`, new in the design system + guide row). Needs your attention shows the first 3 and "Show all 7" right in its heading, as All orders; it opens in place, then Show less. The icon card (`.hc-card`, `.hc-ico`, `.hc-card-h`) moved from pages.css into the design system (Help Centre, about us and the account share it; checked: nothing moved).
- **11-17 — Two buttons in a block share the width on mobile** (Cornel, the quote's Decline · Accept quote): `.oc-act .row .btns` with two buttons takes the full width and splits it; one button stays small on the right.
- **11-17 — Complaints: an overview and a page per case, as Orders, Invoices and Quotes** (Cornel: "volgens zelfde workflow"; the wishes artifact's three cases, dates in our November): complaints.html = the list (filters All · Needs you · In progress · Resolved, search, the table with the product photo, Your reference, Submitted, Status; rows on mobile; "Something wrong with an order?" + Report a problem). complaint.html = the order page's layout: the status block with the case's progress bar (Submitted · In review · Solution · Resolved) and what we need from you (CMP-1031: Upload photos = the upload popup; after it the case is In progress and the to-do leaves the Overview, kept in `hp-complaints`), What this is about, "Order #… · contents" as the order page's products (photo, specs, All specifications, price excl. VAT) with Subtotal · VAT · Total, Case progress (Done · Now · Next: what happened, what happens now, what comes), Ask us a question (after Send the confirmation replaces the form), team line; right Case details and Need something? (Chat with Anna about this complaint, View the order, Invoice & receipt). The photos we need are an upload as everywhere else (Cornel: as order confirmed and the order page): 1 · Upload your photos + Upload photos; once in, "We’ve got your photos" with them on the tile (+N, a click shows them big) and Change. No Ask Anna in the block (it is in Need something?). The order page's View complaint and the Overview's photos to-do link here. Not built yet: the artifact's Report a problem form (order → area → problem → how many → evidence → what we should do → need-by date and the reprint check); Report a problem shows a toast for now.
- **11-17 — Quotes: an overview and a page per quote, as Orders and Invoices** (Cornel: "volgens zelfde workflow"; the wishes artifact's four quotes, dates in our November): quotes.html = the list (filters All · Ready · Requested · Accepted · Expired, Declined when any; search; Quote · Your reference · Requested · Amount · Status · PDF; mobile rows; "Need a new quotation?" + Request a quote). quote.html = the order page's layout (the status only in Quote overview, not also in the line under the title: Cornel): the status block with the quote's progress bar (Requested · Quote ready · Accepted / Expired / Declined), Accept quote + Decline while ready (kept in this browser, `hp-quotes`), Quote details as the invoice's Items (net · VAT % · VAT · total per line, the specs as the artifact lists them; "Awaiting quote" while requested), Details (dates, your reference, handled by, both addresses), Ask us a question (field, files line, Attach files + Send), team line; right Quote overview (status, dates, items, total, Download PDF) and Need something?. Choices: QT-5502 became order #8830771, so it shows that order's lines (the artifact's own "foamboard signs" did not match its order); the tote bags order is no longer "from a quote"; QT-5481's price and specs are ours (the artifact only lists it); prices incl. VAT 23% as the invoices (the artifact showed VAT 0%). The Overview's quote to-do and Quotes block, and the account menu, link here.
- **11-17 — The invoices are the wishes artifact's, exactly** (Cornel: "exact die details", for every invoice; dates moved to our November): six invoices and four credit notes (INV-2026-4471/4302/4188/4490/4491/4120; CN-2026-0071 goodwill applied, 0083 late delivery applied across two invoices, 0090 price correction refunded, 0096 goodwill available), the artifact's prices incl. VAT per product, the Premium artwork check, shipping with its line, the order's discount (Volume discount 10%, Returning customer discount) and how it is paid (card, on account 14 days, due on receipt, SEPA). Everything is counted per row incl. VAT, net and VAT worked out per row, as the artifact: the order page, the invoice and the lists show the same totals (€266.15 for INV-2026-4490; €762.70 open across 3 invoices). An open invoice is the order's payment to do (Pay, the to-do, Payment due). The blanket 2% VIP discount on every order is gone again (it clashed with the per-order discounts); 2% stays in the VIP block. The invoice page follows the artifact: Invoice details with Terms and Billed to + Shipped to, Items as a table with Net · VAT % · VAT · Total per row (`.items-table`, mobile: net and VAT under the description), Payments and credits (total, credit notes, payments with date and method, still to pay), Related (the order, the credit notes) and Need something?. Our product names, photos and order dates stay; the references with a month in them stay ours (EVENT-NOV, MERCH-Q4).
- **11-17 — Invoices: an overview and a page per invoice, as Orders and the order page** (Cornel: "zo dichtbij mogelijk order details, altijd de UI guide"; content from the wishes artifact): invoices.html = Orders' layout (filters All · Open · Paid · Credit notes, search, the table with Your reference, Date, Amount and a PDF button; rows on mobile). invoice.html = the order page's layout: the pay block while open (paying here = the order's payment, the same state everywhere), the products, Invoice details as Order details without the map, the team line and help questions; right the Invoice overview (the order's totals, then Payments and credits with what's still to pay, Download invoice) and Need something?. A credit note (CN-2026-0310, the damaged roller banner back incl. VAT) is its own row and page, linked both ways with its invoice. Not built from the artifact: Settle all / Export CSV, Overdue / Partially paid / Collective filters, sort and paging (few invoices in the prototype). The account menu, the Overview's Invoices block and the order page's invoice link here.
- **11-17 — The VIP meter as the cart's VIP score** (Cornel: "waarom doen we niet hetzelfde"; after two tries with the info in parts): the layout only, our fonts (Cornel): VIP status, the tier label (Member, eco) right; the 8px bar; one line: "18,760 of 25,000 points · 6,240 to 4% off"; How VIP works under it.
- **11-17 — Gap list 5–9 done** (Cornel: "doe maar"): (5) every product on the order page has "All specifications" under its specs, a link that folds open the full list (quantity, the options as on the PDP, delivery, file check); (6) Order overview shows the VIP discount: Member = 2% off the products, in green as the cart's discounts, and in every total and invoice; (7) "Questions about this order" under Order details: up to 4 Help Centre questions as the FAQ rows, chosen by where the order stands (proof, upload, pay, on its way, delivered, cancelled); (8) Orders filters: Complaint, Quote and Cancelled after All · To do · In progress · Delivered, only when there are any; short labels so they fit next to the search on desktop (Cornel: the search on its own row was ugly); (9) a new customer (Demo tab: N, `?new=1`): every block says in one calm line what will show up there (`.dash-empty`), Start shopping where it helps, "Welcome, Loraine", the account card at 0 points. (10) VIP priority contact: parked until Cornel knows what VIP promises.
- **11-17 — Yes, cancel it is red** (Cornel): `.btn.primary.danger` = --error (the UI guide's colour), for an action you cannot undo, next to Keep my order. New row in the guide (Buttons).
- **11-17 — A cancelled order gets the popup, not a thank-you** (Cornel): after Yes, cancel it the all-done popup without the check and the confetti (`allDonePopup(html, true)`): "Your order is cancelled", sorry to see it go, nothing to pay, our team line (the faces, Start chat) and Close. Cancelling never fires the all-done popup.
- **11-17 — A cancelled product: no progress bar** (Cornel; a grey or dimmed photo and hiding the details were tried and dropped): on the order page each line of a cancelled order keeps its photo and details, without the tracker; instead of the number or the check a cross in a mid grey circle (`.oc-act .n.x`, softer than dark grey: Cornel); the head row says Cancelled · Stopped before printing.
- **11-17 — Paying starts on the order page** (Cornel: first the order, then pay): the Overview's Pay block and the Invoices foot say "Go to order" (as the product to-dos) and open `order.html?o=…#pay`, where the pay block lights up and comes into view; Pay now is there.
- **11-17 — More proofs in one order: tabs on the proof page** (Cornel: "do them in one go"): when an order has more than one product with a proof, the proof page shows the section tabs (`.tabs.proof-tabs`, in the page, not sticky), one per product with its state under the name (To approve / Proof approved / We’ve got your file). Approve or a new file goes straight to the next proof that waits (the toast: "One more: Posters"); the last one back to the order.
- **11-17 — Cancel asks why** (gap list 1): the reasons in a dropdown (`.field select`, "Choose a reason" in grey until one is chosen; Cornel 11-17, were radio rows), Yes, cancel it works once one is chosen; an optional line "Anything we can do better?". Saved as `cancelReason` (for our team; not shown to the customer).
- **11-17 — Change the shipping or billing address for one order, until it ships** (gap list 2; Cornel: "I'd expect the address book"): a Change link next to the heading in Order details while the order is not shipped (step < 3) and not cancelled. It opens the checkout's address book (`.addr-list`, the same saved addresses `hp-addresses`; demo addresses when empty): the order's address chosen, tap another + Use for this order; "+ New address" = the address fields, saved into the book and used for this order. The map follows. `.addr-list` moved from pages.css into the design system (one rule set, was twice) + a guide row "Address book".
- **11-17 — The invoice on the order page** (gap list 3): under the totals in Order overview, the Overview's invoice row (number, open/due or paid, the status) and under it a small outline button with the download icon, Download invoice, 8 under the row (Cornel: an icon, a small button; was a clickable row) (toast). The status: Paid with a light green dot (`.status.ok`, new), Open grey (Cornel: a grey dot before Paid looked wrong), here and on the Overview. Before it ships: "Your invoice appears here once your order ships". The Overview's Invoices block now comes from the same data (open first, the foot = what is open + Pay now), so both always agree.
- **11-17 — Still to pay: Resend payment link and Change who pays** (gap list 4): the first two rows of Need something? while an order is unpaid. Change who pays = a popup with their name and email; the link goes to them, Payment in Order details says "link sent to …" and Resend goes to them.
- **11-17 — The delivery date once per product** (Cornel): only in the product line ("Estimated delivery date"); the head row says what happens (DPD Ireland · tracking …, We print it now…). The order's line in the lists takes the last product's date.
- **11-17 — Track parcel goes to the carrier** (Cornel): the button opens the carrier's own tracking page (DPD, with the tracking number) in a new tab; no tracking popup of our own (removed). In the prototype a toast says so (links stay local).
- **11-17 — The changed block lights up, and the band shows what we are doing** (Cornel): after Approve (back from the proof page), a new file or Pay, that block on the order page gets order confirmed's green glow once (`.oc-new`) and comes into view. A product that waits on us (a new file: we make the proof) shows the cream band: "We’re making your proof. Keep an eye on your email: it’s usually there within 4 working hours".
- **11-17 — The all-done popup says what is true** (Cornel: products go to print one by one): a new file = "Thanks! Nothing more to do for now. We check your new file … and email you a new proof"; everything approved = "All done! … Each product goes to print as soon as it’s ready" (one product: "It goes").
- **11-17 — Card hover on the account blocks** (Cornel): the white blocks of the account pages get the cards' hover shadow on desktop (as the to-dos, the cart lines); the side card not.
- **11-17 — Proof page: title, deadline, the proof, the file check and the buttons 16 apart (one block); the file check without its title; 8 between the buttons, 16 to Leave a note** (Cornel): the checks speak for themselves.
- **11-17 — Order rows get the arrow, not next to a tracker** (Cornel): the mobile Orders list has the account menu's arrow on the right (`.dash-row.go` + `.chev`); on the Overview's Orders in progress (with the tracker) it was tried and removed ("not such a good idea").
- **11-17 — Overview on mobile: Needs your attention first, then Order again** (Cornel; was Order again first). Desktop unchanged: side by side.
- **11-17 — 8 between the page title and the line under it on every account page** (Cornel: too close), as the heroes and the Help Centre (`.account-page h1 + .oc-lead`).
- **11-17 — The PDF viewer bar = the browser's own PDF viewer, lightweight** (Cornel): flat white icons without a circle (`.pdf-btn`, a light hover), ‹ 1 / 4 › left, − 100% + in the middle (page and zoom in a dark field), right download (and open in a new tab on desktop). Nothing else (no rotate, print or menu). 100% = the page fits.
- **11-17 — The proofs are Cornel's test PDFs** (HP_Test_*, in prototype/assets/proofs/ with a PNG of page 1 for the thumbnail): business-cards.pdf (85 × 55, 2 pages: front and back) on order #8839004 (now Classic Business Cards), leaflet.pdf (A4 landscape, 4 pages) and poster-a4.pdf (A4) on Launch kit (the roller banner and stickers there became Folded Leaflets and Posters). The roller banner proof and the self-made stickers proof are gone. The viewer pages through a proof (‹ 1 of 4 ›, no arrows for one page); on mobile no "open in a new tab" (download does it), so the bar fits.
- **11-17 — Proof page: the actions in the page, the bar only while they are out of view** (Cornel, as the PDP): Approve proof, Upload new design and Leave a note under the file check; the fixed bar (desktop `.d-bar` with the proof as thumbnail, mobile the PDP's `.buy-bar` with the note as its link row) shows while those are further down and goes when they are in view. "← Back to order #…" above the title (`.ha-back`, now in the design system). On the order page a proof line only has Review proof (Upload new design is on the proof page). If the PDF does not load (e.g. a page opened from disk), the viewer shows the proof as a picture. The account icon is an image (`icons/account-grey.svg`), not a CSS mask (a mask does not load from disk either).
- **11-17 — The proof page, B** (Cornel: "technically it can't be otherwise"; prototype/proof.html?o=&l=): the title + order, the deadline band, the PDF viewer (pdf.js; low: 320 mobile / 400 desktop), What we did with your file, Leave a note (a popup with a text field and Send note), our team. Approve proof and Upload new design fixed at the bottom, as the PDP (desktop the white `.d-bar` with the product and the deadline, mobile the sticky bar). Approve or a new file → back to the order with a toast. Every Review proof (order page, Overview) goes here; the proof popup is gone. Not logged in (from the reminder email): the login page brings you back to the proof.
- **11-17 — The proof on the thumbnail** (Cornel): a product with a proof shows it on its photo tile (assets/proofs/*.png, the first PDF page); a click opens it in the artwork popup. Tall artwork now centres in any art tile (also the cart).
- **11-17 — All done = the Tikkie popup in My account too** (Cornel): when the last thing of an order is done (pay, proof, file), the order confirmed popup (check, confetti, "All done, Loraine! … arrives on …", Great, thanks!). One shared `allDonePopup()` in app.js for order confirmed and My account. Only on the order page of that order (Cornel: not on the Overview); after the proof page it shows on the order page it goes to.
- **11-17 — Order page: the side card titles are section titles** (Cornel): "Order overview" (order confirmed's name, was Order summary) and "Need something?" as h2 (24/32 desktop, 20 mobile), as order confirmed's overview.
- **11-17 — Breadcrumb spacing on the account pages by the rule** (Cornel): desktop the breadcrumb's own 16 above / 24 to the page (`.desk .crumbs`), mobile 16 / 16 as the other pages (were 32 / 48 desktop, 16 / 24 mobile).
- **11-17 — The proof is always a PDF** (Cornel): the proof page shows it in a PDF viewer (pdf.js, a dark toolbar and canvas, the white page), with prototype proofs in prototype/assets/proofs/ (roller banner, stickers: the cut line magenta, the safe area cyan). Proof page sketch: sketches/proof-sketch.html (to choose).
- **11-17 — The order lines in My account are order confirmed's blocks, with the progress bar** (Cornel, screenshot of order confirmed): per product an `.oc-act` (needs you: number, green) or `.oc-act.done` (nothing to do: check, grey) with the head row (title + grey line, the small buttons on the right), the cart line (photo or the uploaded artwork +N, specs, price, Estimated delivery date; delivered: the day), the tracker, the deadline in the cream band. Replaces the separate `.order-line` card (removed). The block title gets 200 min before its button wraps under it (mobile: the button on its own line, right). Every product has its own delivery date (`arrives`).
- **11-17 — Orders on mobile = the desktop table's view** (Cornel): the same content as rows (photo +N, title, the line, your reference · placed, the status), no tracker in the list (the order page has it).
- **11-17 — The desktop choices on mobile too** (Cornel: "op mobile heb je onze keuzes voor desktop niet doorgevoerd"): `.btn.small` (32, 14/22) on mobile as well, right in the row of its block (was a full-width 40 under it; order confirmed's Pay / Upload design keep their big button). The Overview on mobile: Order again directly under the title, then Needs your attention (side by side on desktop; Order again was at y 1460, now 321), and the account card (who, VIP, the account pages) at the bottom as the hub instead of above the title; the separate hub copy of the menu is gone.
- **11-17 — An uploaded file shows on the product, as everywhere** (Cornel): on the order page the first file replaces the product photo (`.art-tile`, as the cart and order confirmed), "+N" for the others, a click opens the artwork popup; Change opens the upload popup with the files in (Update my order).
- **11-17 — One upload popup: order confirmed uses upload.js too** (Cornel: "ja doe maar"): its own copy (the markup and ~90 lines) is gone. `openUpload` got three options for it: `files` (Change: the files already in, no confetti, Update my order), `extra()` (the Premium Artwork Check while there is still to pay) and `onClick` (that switch). Checked against a baseline taken before the change: the same popup text, totals with the check on/off, block, toast and Change; plus Update, no check once paid and the all-done popup.
- **11-17 — My account works** (Cornel: "functioneel maken"): what you do is kept in this browser (`hp-orders`, prototype/account.js) and the Overview, Orders and the order page show the same state. Review proof = a popup with the proof big (the artwork viewer) + Approve / Upload new design; Upload = the order confirmed upload popup (now shared: prototype/upload.js); Pay now = paid at once (the payment link, as order confirmed); Track parcel = the DPD steps; Cancel = a confirm popup (only before printing); Your reference = a popup with a text field; Order again / Reorder = the same products, specs and design in the cart, then the cart. A done to-do turns grey in place (`.oc-act.done`), as order confirmed. Pages still to build (Invoices, Quotes, Complaints, Personal details, Addresses) give a toast "… comes next in the prototype".
- **11-17 — Needs your attention: one block per order** (too many with one per product): one product = its action (Review proof opens it on the order page), more = "4 products need you · Go to order".
- **11-17 — Style guide pass on My account** (independent audit): section titles 24/32 desktop as everywhere, arrow links in the section heads, one small button (`.btn.small`, 32 / 14, desktop; the to-dos and order lines), duplicate rules joined (sticky side cards, the grey 12/18 lines, the in-page menu, the to-do text, "+N" at -8 as the other counts, sheet bar buttons into the design system), the tracker's coming steps readable (dark grey text), focus on the search, roles fixed, the account menu links to the real pages, delivery always "Estimated … — latest …", the customer's company fictional (Merrion Studio). Open for Cornel: several primary buttons in the to-do blocks (as order confirmed) vs "one primary per screen"; the grey lead 14/22 on mobile (as `.oc-lead`) vs body 12/18.
- **11-17 — Orders + the order page built as the combo** (Cornel; sketches/orders-sketch.html, orders.html + order.html): Orders = B's table on desktop (Order · Your reference · Placed · Status) with the photo before each order and **+N** on it for more products (mobile: the rows with the tracker), filters All · Action needed · In progress · Delivered + search, guest orders to add. The order page = A's card per product (a product that needs you is a to-do block, the deadline in the cream band; a fix = a red step), and under them, as on order confirmed, **Order details with the Google map** + the team line; right the order summary and Need something?. Payment and Addresses are not repeated on the right (they are in Order details). Rejected: the rows on desktop (A), to-dos on top + one product card (B), the whole order confirmed layout with the dark green strip (C), the overview next to the details at the bottom.
- **11-17 — The account side card only on the Overview on mobile**: a sub page (Orders, an order) starts with its own title, the breadcrumb leads back. One helper builds the card on every account page (`accountSide()` in app.js).
- **11-17 — Order confirmed's Order details, team line and section title moved into the design system** (`.oc-sec`, `.oc-lead`, `.oc-od`, `.oc-team`; now on two pages), unchanged.
- **11-17 — Account Overview built as sketch A2** (Cornel; sketches/account-sketch.html, account.html): desktop = the account card left (who, VIP, the account pages; sticky, 288) and the Overview right; mobile = one column with the account pages last (the account menu rows; no sidebar on a phone). Order on the page: **Needs your attention + Order again side by side** (desktop; re-orders matter most, only what has a deadline goes before them), Orders in progress (status + tracker), Invoices + Quotes side by side, Previously viewed. Rejected: B (tabs: 7 pages too many, scrolling tabs on mobile), C (tiles: a click more to your orders), A with the blocks under each other (Order again too low), Order again on light grey ("is niks"), Recent invoices / Previously viewed left out (Cornel missed them).
- **11-17 — Desktop to-do buttons one step smaller on the account page** (Cornel, UI guide: the primary is one per screen): `.oc-act .btn` at the size of the header's `.dbtn` (14/22, 30 high), scoped to `.account-page`; mobile keeps the full-width 40. Order confirmed unchanged.
- **11-17 — The account icon before the name is grey** (Cornel: "we hebben al zoveel groen"): the header's account icon in --dark-grey on a --light-grey circle of 40.
- **11-18 — VIP in the account follows the VIP marketing doc** (replaces 11-17 "Member 2% · Premium 4% · Elite 6%, €1 = 10 points"): the tier as an eco label (VIP1–3; a new customer gets a neutral "Not VIP yet" and "Given automatically to our most loyal customers"), one line with what the tier gives (demo VIP2: 4% off your products · free delivery · 50% off Premium Design Check), How VIP works → vip.html. No points. Progress to the next tier back on Cornel's word (11-18, "zet die progress bar er maar bij"): the 8px bar + one line in euros of orders (€1,876 of €2,500 · €624 to VIP3 (6% off); new customer €0 of €1,000 to VIP1). The amounts are placeholders: the doc allows progress live only once the criteria are published.
- **11-17 — Account menu: Complaints in place of Support** (Support stays under Need help?); Account Overview (#my-account) opens account.html. The other account pages are anchors until built.
- **11-17 — My account starts from Cornel's wishes artifact** (analysis in docs/my-account-analysis.md, local copy ref/my-account/wishes.html): turned into what our style guide can do, new dashboard elements where needed. Round 1 = the shell + Account Overview, then Orders and Order detail. The sketch of the shell: sketches/account-sketch.html (A sidebar, B tabs, C tiles; to choose).
- **11-17 — The VIP score is part of My account** (Cornel): the tier, the progress to the next one and its discount ("€124 more for 4% off").
- **11-17 — Complaints is its own account page** (Cornel, as in the artifact): its own list and case detail, not folded into the orders.


## Funnel icons (Nov 16, 2026)
- **11-20 — The tail (wave 8)** (Cornel, sketches/tail-icons-sketch.html): tri-fold and z-fold as the leaflet standing half open, seen from the front left as the live brochure folds (the inner face grey; flat, their two folds look the same; my pick, the profile from above, was rejected); balloons with or without their ribbon (the set rule; not the dashed circle). By the rules we have: entrance tickets (the perforation dashed, the serial "001" on the ticket and the stub), NCR numbered, binders (the spine U, 50 / 70 mm), notebook paper (plain, ruled, grid, dotted), paper cup lids (none, white, black), bamboo cutlery, the tablecloth hem, the sunglasses arm print area (left / right mirrored, both stacked), stickers on sheet, rainbow foil. Office stamps and vboard tape / suction cups are the live photo. About 20 options map to icons we have; calendar sheets, sets per pad, song titles, lip balm print sizes and pole materials stay text. With this the all-categories run is done: only print technique and labels on roll (parked) are left.
- **11-20 — Posters and displays** (Cornel, sketches/poster-icons-sketch.html, my pick): a set or its print only is the product front-on with or without the part you don't get (X-banner: the canvas with the X frame dashed behind it and the feet / the canvas with its eyelets / the X with hub and feet; wall banner: between two rods with end caps / the banner alone), sizes the same icon scaled (wall banner 60 / 80 the width, poster hangers 31 / 51 / 71 the whole poster with wooden rails), the poster frame profile (25 / 32 mm) as its corner close up (`icons/posters/`); the gazebo print area (roof, back, high sides) grey (`printarea/gazebo-*`). The live photo for the cardboard roll-up (complete set = the stand photo, print only = the rolled print) and the tie wraps, "Banner only" the dashed circle (`prototype/assets/live-opts/posters/`). Rejected: our old cardboard kit drawing (A: brings back the icon the stand photo replaced), the whole poster frame (B: 25 and 32 mm differ by a pixel at 40), drawn tie wraps (white on a white banner disappears).
- **11-19 — Roller banner stands: the live photo** (Cornel): the stand options (silver budget, black budget, silver premium, cardboard) are the live close-up photos of the base on the light grey tile (`prototype/assets/live-opts/rollup/stand-*.webp`, `photo` in products.js), not the kit icons of 11-16: a stand is hardware you recognise by its look (the photo rule of the flag bases), and our icons invented the budget/premium difference (a slanted foot; the real premium has a rounded end cap). The sizes stay icons. The four `rollup/silver|black|premium|cardboard.svg` are removed. A live photo among icons has the icon's size on desktop too (50, Cornel: the full-width photo made the stand row 70px taller than the size row); only the photo copy of the flyers (`copyOf`, class `.ph.big`) keeps the photo filling the card.
- **11-19 — Envelopes and window stickers: as live, in our line** (Cornel, sketches/envelope-icons-sketch.html: window A, closure B, window stickers A): the window is the envelope front with the flap peeking over the top (its slants start at the body's corners) and the window in grey (`envelopes/window-none|left|right`); the closure is the flap corner close up, as live, the gum band grey, the strip with its liner peeling up from where it still sticks (`closure-gummed|strip`); a window sticker is the window front-on with frame and sill, the glare over the sticker when it is stuck on the inside (`sticker-inside|outside`). Rejected: our closed envelope with the V for "without window" (a back view in a row of fronts), the open flap from the back for the closure (my pick: Cornel liked the close-up), the cut through the window for the stickers (my pick).
- **11-18 — Sign panels: the live photo redrawn as an icon** (Cornel, sketches/sign-icons-sketch.html, D): a rigid panel (Dibond, brushed aluminium, Forex, Easyprint, Sign Again coated / uncoated, Akylite, cardboard, Reboard, Correx, plexiglass bright / opal / blockout) is its corner seen from above with the corner towards you, as the live corner photos, both front edges showing the core (the Dibond core, the Correx flutes, the Reboard honeycomb, the plexi glass) and the thickness per material; no print on the face, our light outline and the material textures (`icons/panels/`). It is the one icon at an angle: for a panel the edge and the thickness are the choice. Flexible materials stay the sheet with the folded corner (new: structured polyester, cotton feel, one way vision, privacy). Hanging plates, the spacer, the ground plates and the whiteboard kit are the live photo (the flag rule). Rejected: the folded sheet for panels (A: says paper, seven white sheets in one row), the flat panel with an edge strip (B, my first pick: no thickness), the live photos themselves (C: each a different crop with a different printed design, loud; the edges vanish at 44).
- **11-18 — Flags: icons for the flag, the live photos for bases and wall mounts** (Cornel, sketches/flag-icons-sketch.html, C): bases (cross foot, + waterbag, parasol base + rotator, ground spike, screw base) and wall mounts 0°/45°/90° are the live photos, cut out on our light grey tile, the whole option row photos (no base = the dashed none circle). Rule: hardware you recognise by its look gets the photo; a shape, side or angle gets an icon. The other 27 are icons (`icons/flags/`): beach flag types drawn true to the real flags (Cornel: "a drop is not round": a round top with a straight taper; the feather with the pole bending over and a concave cut; the rectangle with the bent top arm), the pole a heavier line than the fabric; facade poles with the orange or white top (the flag's bottom edge parallel to the pole), sway sides, boat flag sides, bunting hanging from the rope (its top edge is the rope), hooks and bands white (hollow) or black, window flags with the suction cup. Rejected: the bases as a whole light flag with the base dark (A: too small at 40), the part alone as an icon (B, my first pick), photos for the bases + icons for the mounts (D, my second pick: the mount photos are front-on, the angle does not show), photos for poles and hooks (too thin or muddy small; on live their files do not even match the options).
- **11-17 — Print area: the product outline with the area in grey** (Cornel, sketches/print-area-icons-sketch.html, A): one drawing per product type (bag large/small, notebook full cover/large/small, pen barrel/clip, lanyard strap/holder, mug wrap/one side), the print area grey as the napkin print areas; both sides = two stacked (the lanyard a small 2); the size stays text, so one icon covers every size. Unprinted = `inks/none`. Rejected: a dashed print zone on a light outline (B), a generic surface without the product (C). Print technique (wave 2) parked by Cornel for later (backlog).
- **11-17 — Print colours for merchandise: the ink dots** (Cornel, sketches/print-colour-icons-sketch.html, A): "Amount of colours in your design" (111 products) = one round dot per colour, the PMS colours (orange, light green, dark green) then blue and dark grey; full colour = the four CMYK dots in a square; unprinted = an empty dashed dot. No sheet: a pen or a bag is not paper. Print products add black (one black dot), PMS 4 and full colour front + black back (the black dot on the back sheet) to the printing icons. Rejected: the dots on a sheet (B), a logo in N colours (C, confetti at 32 px). First wave of the all-categories run (sketches/icon-gaps-all-categories.html: 279 products, 67% covered, ≈ 130 icons in 8 waves).
- **11-16 — One-off material icons** (Cornel, sketches/oneoff-icons-sketch.html): neon with a soft glow around the sheet (B; the existing neon yellow got it too), photo paper with a small photo on it (A), DOT foil as a fine dot grid and backlit lit from behind (A, with photo paper), antique white and Paperwise white as shown, the white PVC cards as a plastic card with rounded corners (A, replaces glossy / silk-matte on the PVC cards PDP). Rejected: flat neon (A, my pick), photo paper as gloss only, DOT foil with big dots, backlit with rays, reusing glossy / silk-matte for the PVC cards (B, my pick).
- **11-16 — The style guide shows every icon** (Cornel: "a lot of icons in the design system are hidden right?", 51 of 98 were): `icons/index.json` lists every family; the rows Option icons, Product kit icons, Banner icons (new) and Interface icons (new) read it, so a new icon shows up without editing the guide.
- **11-16 — Product kit icons** (Cornel, sketches/kit-icons-sketch.html, A for every kit): the product flat and front-on, one dark line, colour only where it is the choice. Roller banner = the whole roll-up, the stand in its colour (silver, black, premium, cardboard), sizes scaled; A-board = the poster in a thin silver frame, scaled so B1 fills the box (Cornel: B1 was cut off, the frame thinner); table talkers from the side (open tent, closed triangle); folder opened with the pocket grey, the spine width as a U from above; notepads one sheet with the glued edge black, 0/2/4 holes; napkins with a turned corner, folds opened flat and dashed, print areas grey; airlaid and tissue join the materials. Rejected: B for every kit (close-ups, side views, 3/4, stacks, folded results). Type on the roller banner reuses the stands; Without cover is the bare pad (bind-top). The roller banner PDP uses them (Size, Stand) through a new `icon` field in the data, which also replaces `fold`.
- **11-16 — Sticker shapes and films** (Cornel, sketches/sticker-icons-sketch.html: shapes B, films A): a sticker shape (round, oval, square/rectangle, rounded corners, custom contour) is the shape with its corner peeled, the back grey; also for the round and oval label sizes, scaled. Films are materials (sheet with the folded corner): white gloss (cool white with the streak), white matt, transparent as a checkerboard; eco (Natureflex, PVC-free vinyl) = a small light-green leaf. The vinyls are the same films; the silver film is metallic-silver. Rejected: the flat shape (A, my pick), the shape on its backing sheet (C, small at 40), transparent as a dark shape behind (B, a stain at 40). Labels-on-roll parts parked (backlog).
- **11-16 — Option icons: folds, envelopes, PMS printing** (Cornel, sketches/fold-envelope-icons-sketch.html, folds A + envelopes B): a fold = the card opened flat as its size shape with the fold as a dashed line (portrait, landscape, square, tent); envelopes = the card alone (Without) or the closed envelope (With). PMS = the printing icon (1 / 2 stacked) with one ink dot per PMS colour under the number. Rejected: skewed open panels with a grey inside and a card poking out of the envelope (first version, not nice), the card standing as a V (B, stands out in a row of flat shapes), the cover lifted (C, busy at 40), envelope stacked behind the card (A, busy) or open (C, clip art). The folded business-card sizes use them (`o.fold`). Missing icons per product: sketches/icon-gaps-promotional.html.

## VIP (Nov 17, 2026)

- **11-18 — VIP follows the marketing doc, not the Figma** (Cornel: "rewrite, fun for a reseller, a story"): the source is Sebastiaan's "Helloprint VIP — overview for marketing" (Claude Doc, 2026-11-18). VIP1 2% · VIP2 4% + free delivery + Premium Design Check 50% off · VIP3 6% + free delivery + free Design Check; no points, tiers given automatically from order history, applies signed in only, off the products before VAT and delivery, stacks with one promotion (both from the original product total), no paid-search discount, IE + IT (ES next). Its copy guardrails hold: "up to 6%", "off your products", no thresholds or "how to qualify" until confirmed, no "join" (VIP is given). The page tells it as a reseller's story: promise → three steps → tiers → it stacks (one €300 VIP3 order: −€30 promotion, −€18 VIP, −€48) → the small print → "Not VIP yet? Keep printing." The bonus points, welcome pack and status dashboard are gone.
- **11-17 — Anchors scroll smoothly, always** (Cornel): `html { scroll-behavior: smooth }` in the design system (off for reduced motion), so every link to a section on the same page glides instead of jumping. Sections of a marketing page land under the sticky header + 16 (`scroll-margin-top` 104 / 124 desktop, joined with the help article sections); PLP tab targets keep their own margin under the tabs.
- **11-17 — The VIP page is a marketing page** (Cornel: "choose the right template, build it with our modules, in English"): it explains a programme and sells no products, so the about-us / GAA template, not a PLP or CLP. Built from the Figma VIP page with only the template's parts; the Figma's own colours, type, eyebrow label, gradient panel and avatars are not taken. The tier table became the text of the three tier cards; the closing dark block became the centred hero (dark band and block parked with `sketches/bands-sketch.html`). The Figma FAQ was the Non-Profit one: new VIP questions from the page's own content.

## Rugby club printing (Nov 20, 2026)
- **11-20 — The other six boards built the same way** (Cornel: "all six, in order"): soccer, camps, school, student societies, the education hub and the sports hub, each a marketing page from Niels' board copy with only the template's parts (no new CSS). Every audience its own fictional identity, so no page looks like another: Glenarra AFC (navy and sky blue), Glenarra Summer Camp (yellow and teal), Scoil Ghleann Ara (royal blue and gold), Glenarra College (deep purple and coral). Moments you can photograph are photo cards; ideas, places and choices stay icon cards; sequences keep the number (in the title on a photo card). Each board's 8-product block becomes one row of 5 (as GAA). The hubs reuse the child pages' photos and cutouts (the sports hub shows the three clubs side by side). From-prices excl. VAT as live en-ie on 2026-11-20; the kids hoodie is not on live (the regular hoodie instead). Links between the pages are real (`soccer-club-printing.html#season`…); the 6 routes in app.js.
- **11-20 — The GAA page gets the same treatment** (Cornel: "doe hetzelfde voor de GAA-pagina"): its own fictional club, Glenarra GAA (the same village as Glenarra RFC), in maroon and white with a crest of two crossed hurleys, so the two club pages don't look like one club. All 10 grey image slots are Higgsfield scenes (hero, county-final bunting, lotto poster, pitch-side banners, hurling helmet, Féile gate + 3 Féile cards, Cúl Camp) in `assets/gaa`; the 10 product cards are cutouts in the club's design (`assets/gaa/products`); live en-ie from-prices excl. VAT (paper hand flags €447.29 for 1,000). No icon card became a photo card: the road to the final is numbered steps (order matters), the rest are ideas.
- **11-20 — The rugby page's products carry the club, the Black Friday recipe** (Cornel: "convert the mockups, so the page gets one feel"): every product card a new transparent cutout in the fictional club's own design (Glenarra RFC: deep dark green, the white shamrock-in-a-shield crest, the name in a classic serif; tickets "TEEN DISCO", table card "Sponsors' Lunch", vouchers "DRINK VOUCHER", poster "HOME GAME"), on our grey tile, 600 × 600 webp with the product at about 88% (`assets/rugby/products`). Higgsfield gpt_image_2_6 with the live product photo as reference; apparel without the model (ghost mannequin), one beanie instead of three. The sponsor packages became photo cards (photo or icon rule): programme, fence banner, clubhouse board.

## Christmas (Nov 16, 2026)
- **11-16 — Christmas is the Black Friday recipe** (Cornel: "exactly the same"): a PLP from promotional.html's blocks with live /christmas content; the intro carries the last order date for Christmas (the deadline is what Christmas buyers need), regular prices. One product design for every cutout, in our green and warm (Cornel chose A in sketches/christmas-style-sketch.html: "a more written typography, no bright green line"): deep pine green, "Merry Christmas" in a hand-lettered white script, one small gold foil star (wood and bamboo engraved with the same script); promo cards as close-ups on deep green, as Black Friday's on black. Rejected: capitals with a --light-green bar (too much campaign), cream (loses its edges on the light grey tile), kraft (a material, the line breaks on mugs, calendars and baubles).

## Black Friday (Nov 16, 2026)
- **11-16 — Black Friday is a PLP** (Cornel, black-friday-sketch A; "you may not combine page types"): the PLP of promotional.html, one page for live /black-friday and /deals. Rejected: CLP (one product family), marketing page (made for reading, products halfway down), a marketing hero on a PLP (mixing types).
- **11-16 — The deal is in the price, no code** (conversion): the card shows the reduced price with the old one crossed out and the saving as the orange label; the end date is one line in the intro, no countdown. Conditions are FAQ questions.
- **11-16 — The products carry Black Friday** (Cornel: "the products need a Black Friday feel"): every product a new transparent cutout with one design (matte black, white "BLACK FRIDAY", one --orange bar; Christmas products: black with a white star), on our grey tile. Rejected: black tiles (the black products melt into them), black-stage photos baked in (not reusable), a printed "-30%" on the product (clashed with the label). Two promo cards on top (`.pb-duo`, part of the template): desktop 2 columns, mobile a swipe row of 300px cards on the 16px gutter (the Help Centre row rule, now also `.plp > .pb`); the full-width mobile promo card stays only beside the categories (`.plp-feature .pc`).

## Marketing pages (Nov 15, 2026)
- **11-15 — Marketing pages are rebuilt from live first** (Cornel): about-us and our-culture (en-ie, the template the IE club pages are based on) in the prototype with UI library components only; the gaps measured on them (sketches/about-us-gaps.html) are filled with as few new things as possible. Never coloured placeholder pictures: a grey block where an image goes.
- **11-15 — Hero with image `.hero.media`** (Cornel, template-gaps-sketch A): breadcrumbs on top over the full width, then title, intro and `.btn-row` (`.btn primary` + `.btn outline`), then the photo at the promo card height (345 mobile / 400 desktop); desktop text left / photo right 32 apart, mobile the photo under the buttons. In the design system + guide. First on about-us.
- **11-15 — Centred hero `.hero.media.center`** (Cornel): title, intro (max 760) and buttons centred, the photo under them over the full container width, 16:9 on desktop (Cornel: higher when everything is centred; 2:1 tried first), 345 on mobile; crumbs top left. On our-culture; about-us keeps text left / photo right.
- **11-15 — Centred block with a banner `.hero.media.center.banner`** (Cornel, feile-block-sketch A): lower on a page, a short centred head (title + 2 lines), the photo as a 3:1 banner (IE image brief), the jobs as a row of text cards (left-aligned inside), the button centred; 32 apart on desktop, 16 on mobile. Rejected: centred running text with sub-titles (no steady left edge), B split (a fourth split in a row), C no photo. Applied everywhere: GAA Féile and the about-us story; centred running text with sub-titles is not used anywhere (its rules are removed).
- **11-15 — Marketing pages: 64 between sections on desktop, 32 on mobile** (Cornel: more space on this page type; the guide's big page rhythm). The shop keeps 32 / 16.
- **11-15 — Marketing page section titles 32/40 on desktop** (Cornel): `main.marketing` (about us, our culture) sets every h2 one step up, next to the 48 display title; mobile stays 20/24. The shop keeps 24/32.
- **11-15 — Marketing page title = Display** (Cornel: much bigger, only on this page type): `.hero.media h1` joins the Help Centre display title, 28/32 mobile, 48/56 desktop. Categories, PDP and checkout keep the page title (24/32).
- **11-16 — Photo or icon: "can you photograph what the card is about?"** (Cornel): an event, occasion or product in use gets a photo, and then it is the blog card (photo edge to edge, 16:9, title, text; mobile a swipe row), as on about us, no new card. An idea, benefit or step stays a text card with an icon. Never mixed in one row; no photo yet = grey block. First use: rugby, the clubhouse nights. (A square photo inside the text card was built first and dropped for the reuse.) A card links on with **one outline button** (`.pill`), not with links in its text (blog card: its own pill; text card: `.hscroll.chips` as in the quote cards). Applied to all five marketing pages: rugby clubhouse nights, age grades and GAA Féile became blog cards; the rugby sponsor tiers (a package is an idea) keep the icon and got one button each. The figures, promises, values, story and numbered steps stay text cards with an icon or number.
- **11-15 — Text cards on marketing pages, mobile: icon left** (Cornel, switch Cards S over T): the icon or number as a 40 tile left, title, text and buttons beside it, 16 apart; cards half as high (our culture: 8 cards 1254 → 696). Desktop keeps the icon on top (cards side by side, no height to win).
- **11-15 — Text card with an icon on top**: 16 from the icon to the title, 4 from the title to its text (guide spacing). Every text card on a marketing page has an icon, figures included (Cornel: one grid reads better); no icon twice on a page.

## Pages from a spec (Nov 14, 2026)
- **11-14 — A category page from an md spec: `category.html?page=<slug>` + `pages/<slug>.md`** (Cornel): the generator writes only the md (blocks, copy, live products and images); the renderer builds it with the category template's blocks (the markup of `promotional.html`, no CSS of its own). First page: Hospitality, structure and content as live en-ie. Rejected: the home as template for this (Cornel: "niet slim", the category template holds much more: features, product rows and tile rows can repeat) and calling it a marketing page (it is an ordinary category page). The special marketing page comes next, from a Figma design, with another subject. Sketch: `sketches/marketing-page-sketch.html`.

## Notification (Nov 13, 2026)
- **11-13 — Site notification above the header** (Cornel, notification-sketch A): the first layer, above the header on every shop and checkout page; read first, the header stays one block and the mega menu and search dropdown don't open over it. Rejected: B under the header (splits it, in the way of the drop menus), C under the USP bar (reads as a promo), the bottom as live en-gb (missed, clashes with the sticky bars). --light-green with white text (Cornel: light green, not the darker --link green, accepting 3.2:1 contrast); desktop 14/22 centred, mobile 12/18 left (smaller on mobile, Cornel). Scrolls away, × closes it for the session.

## Home (Nov 13, 2026)
- **11-13 — Home promo row: the live photos (Photos A), the switch removed** (Cornel): the editorial photos (B: a full-width grid of 5 with their own titles, welcome heading hidden; C: the same cards in the carousel) are not taken; their code and CSS are gone. The 5 photos are removed from the repo (the PNG originals stay outside it, in helloprint-editorial-originals).
- **11-12 — Blogs on the home** (Cornel): the blog block of business cards (title + All blogs, 3 cards: the newest en-ie posts) above "Browse all we offer"; the blog card is now a design-system component.

## Search engines (Nov 12, 2026)
- **11-12 — Every page noindex, nofollow** (Cornel): the GitHub Pages sites are public, so all 81 HTML pages (prototype, style guide, Brand Guidelines, sketches, the forwarding pages) carry `<meta name="robots" content="noindex, nofollow">` after the charset; new pages too (CLAUDE.md). A robots.txt would not work (it must sit at the domain root, which is not ours).

## Menu desktop (Nov 10, 2026)
- **11-13 — Every dark layer blurs the page under it** (Cornel: "ja doe maar overal die blur"): `--overlay` (black 60%) plus `backdrop-filter: blur(4px)` under the popups/sheets, the mobile menu drawer, the mega menu and the search dropdown (`.menu-overlay, .sheet-overlay, .mega-dim`).
- **11-13 — While searching, the rest of the header is out of play** (Cornel): logo, category bar, country, account, Need help? and bag blur 4px at 40% and take no hover or click, so no other drop menu opens over the search.
- **11-13 — Search: at most 6 product results** (Cornel, a rule; mobile and desktop, `SEARCH_MAX`): the dropdown has to fit the window; the rest is behind View all results.
- **11-13 — Mobile search, empty: the popular categories as pills** (Cornel; as the desktop dropdown), then Best Sellers as before. Typing keeps the category rows with arrow.
- **11-13 — No coloured backgrounds behind product photos** (Cornel): every photo on light grey; the search rows use the cut-out category photos (assets/category/t-*.png) instead of the tinted Figma search images.
- **11-13 — Desktop search: a dropdown under the field, as live en-ie** (Cornel: "as close to the IE menu on live"; sketches/search-desk-sketch.html, A over B (mega panel) and C (mobile in a popup)): empty Popular searches (pills) and under it Best Sellers (the name and the 4 products of mobile) as rows with lines between (Cornel, after thebrandingclub.com); typing categories (only categories, no products: the menu's top categories + the groups and sub groups of All products; mobile keeps its own list) left as the mega menu's side list (white, grey 14, a line right, hover light grey semibold; Cornel: not on a grey background; `.mega-side` moved into components.css, joined with `.sd-cats`), products right as the mobile search's product rows with only "From €…" under the name, as live en-ie, and the arrow at the end (Cornel; mobile the same rows); the field gets a static 2px light green ring; the page under the header gets the dark layer of the mega menu (.mega-dim), with a 4px background blur; every dark layer has it (popups/sheets, the mobile menu, the mega menu; Cornel). Tried and removed: a light running around the ring (after thebrandingclub.com; Cornel: not smooth, maybe a bad idea for us), the count, View all results at the bottom. Mobile keeps its full screen layer.
- **11-12 — Country menu in the desktop header** (Cornel, the countries of live, the account menu's style): the flag + IE (was EN: the country code, as in the menu) opens on hover: Choose your country, 11 rows (round flag, the country in its own language, the code right), Ireland semibold with the tick. The links are local anchors. Flags: flag-icons 1x1 SVGs in prototype/assets/flags.
- **11-12 — Header drop menus (Need help?, account) without delay** (Cornel: it has to be fast): they open and close at once on hover; an invisible 8px bridge over the gap keeps the menu open on the way down.
- **11-12 — Mobile account: a bottom sheet** (Cornel): logged in, the account icon (green dot) opens the account menu rows in a sheet (title Hi, <name>, welcome back!, rows of 48, Log out in red), in the shop header and the checkout header alike. Replaces the temporary Log out text link in the mobile checkout (11-06). Logged out: the icon goes to the login page.
- **11-12 — The small green header button (.dbtn: Log in / the name, Search) gets the hover of the green buttons** (Cornel): brightness .97, as .btn.
- **11-12 — Desktop checkout header: the account as in the shop header** (Cornel): next to the bag the light green Log in (to the login page, back to details) or, logged in, the name with the account menu (`deskAccount()`, shared). Replaces the temporary Log out link of 11-06 on desktop; mobile keeps the account icon / Log out.
- **11-12 — Account menu rows: regular weight with an arrow at the end** (Cornel: bold not needed): only the title is semibold; a row without a sub line (the account pages) gets the arrow of the mobile menu, Log out none. Need help? keeps semibold titles over its grey sub lines.
- **11-12 — A line under the title of the header drop menus** (Cornel): 1px --line, 8 under the title, 4 above the first row (as the line above Log out); Need help? and the account menu alike.
- **11-12 — The account icon before the name (logged in) and before Log in (logged out)** (Cornel): the white account_circle of the mobile header (20, without its green dot) in the light green pill. A photo avatar was tried and dropped (no real profile photos).
- **11-12 — The header drop menus are compact** (Cornel: they felt too big as a dropdown): .d-head 320 wide (was 360; 304 wrapped the Help sub lines), rows of 40 (was 56; the tick column dropped), the icon 18 without a tile (was a 40 tile, grey, then 32; Cornel: the grey tile out), the title 14 (was 16). The PDP bar menu keeps its size.
- **11-12 — Thank-you strip: the grid of a cutting mat** (cutting-mat-sketch.html A, Cornel: "only the grid"): a thin white line every 8 (4%) and a clearer one every 40 (10%) behind the dark green, CSS only. The registration marks in the corners are removed (print-mark.svg deleted); the ruler (B) and the angle lines (C) not taken.
- **11-12 — Account menu in the header (logged in), the Need help? style** (Cornel; content as live en-ie): the name opens on hover: Hi, <name>, welcome back! then Account Overview, Orders, Invoices, Quotes, Support, Personal Details, Addresses (no sub lines, as live), a line, Log out in red. Logged out: Log in goes straight to the login page, no dropdown (Cornel 2026-11-12: one step, the login page already offers Log in and Create an account). The base: to fine-tune.
- **11-11 — A season link right in the green bar: "Christmas", white with a light green tree** (Cornel; where Help Centre was; light green text looked dull on the dark green, then a dot, then the Material "park" tree, filled (outlined tried), 18 as the All products icon), to #christmas, with its own dropdown as live "Xmas": 6 tiles (Christmas Cards, Calendars, Advent Calendars, Christmas Hats, Christmas Decorations, Christmas Gift Bags; images from live), without the live promo card. On mobile a Christmas row in the drawer, under All products. Change the word and the tiles per season (`sub.xmas`).
- **11-11 — "Instant" at Chat with Anna is the orange label** (Cornel; was grey).
- **11-11 — The Help menu icons are dark grey** (Cornel: green did not look good there): chat, help, mail, call in --dark-grey (#555), the colour of the sub lines, 20 instead of 24 (.d-head, was .d-help; they looked too big), on a light grey tile without outline (no change on hover).
- **11-11 — The header Help button says "Need help?"** (Cornel).
- **11-11 — The tile names in the category menu are one step smaller** (Cornel): 14 semibold (the base .cat title), 16 on the category pages. The menu title stays the 20/24 section title.
- **11-11 — No chevron at language and Help in the header** (Cornel; hidden in CSS, the markup stays): the pills get 8px on both sides.
- **11-11 — Help in the header is a drop menu, opened on hover** (Cornel; closes 200 ms after the mouse leaves, a click still toggles for touch): the drop menu of the PDP bar (moved to components.css), opening downwards: How can we help? Chat with Anna (Instant), Help Centre, Send a message, Prefer to call? (live en-ie). Help Centre left the green category bar.
- **11-11 — Promo cards: title 20/24 and 24px inside on desktop** (Cornel): the promo card and Team + Promises titles are 20/24 everywhere (one size,
  as mobile; was 24 on desktop), 24px from the card edge on desktop (16 on mobile), 8px between the cards. Titles stay at the top (above the button tried, rejected).
- **11-11 — No ad or promo tile in the menu** (Cornel: "dat is niks"): the live photo card with a slogan and our square promo tile (built, then removed) are both rejected. The menu shows products only.
- **11-11 — Every Help option has a sub line** (Cornel): Chat with Anna (Typically replies within a minute), Help Centre (Answers about orders, files and delivery), Send a message (Our print experts reply by email), Prefer to call? (+353 818 882 249 · Mon–Fri 9:00–17:00).
- **11-11 — One dark layer: `--overlay` (black 60%)** under every popup, the mobile menu drawer (was 20%) and the desktop mega menu (new: over the page below the header, the header stays clear, a click on it closes). Fades in 0.25 s everywhere (Cornel: consistent).
- **11-11 — The menu is smaller than the page lists** (Cornel: too tall for smaller screens): sub group names 14 semibold, products 12/18, 4 apart (the mobile sizes of the UI guide). The photos 64 (was 96). Tallest group (Occasions & Events) 907 → 817 → 753 (most groups now 400–640). Home and the footer keep 16 / 14.
- **11-10 — One list style: Browse all we offer** (Cornel: "consistent"): the mega menu and the desktop footer columns use the home rules: title 16/1.2 semibold black, 12 to the list, links 14/1.3 grey 8 apart (the footer was 16/22 + 14/22; its columns 370 → 325 high). The All products groups (left): a standard list too (14, 26 a line, no chevron; was 16 in rows of 48).
- **11-10 — All products = the live mega menu, 1:1** (Cornel, screenshots of live en-ie): 12 groups left, hover shows the group's sub groups
  right (photo, name, Popular, the products), "Shop all <group>". Content read from the live page (83 sub groups, 496 links), photos in
  `assets/menu/all/`. Mobile follows (same content in the drawer); the old 9-group All products tree and its l2 images are gone.
  Popular is our orange commercial label (live: green). Wording "Shop all" (live: "View all"), as everywhere in our menu.
- **11-10 — The mobile menu on desktop as a mega menu** (menu-desk-sketch.html B; Cornel: "this is the base", to extend and fine-tune).
  Hover a category in the green bar: its 6 products as the category page cards (6 in a row, 201) + "Shop all …"; hover or click
  All products: the 9 groups as link columns. Content and words 1:1 from the mobile drawer (one data source). No promo card (live
  has one: calmer without). Rejected: A (the mobile drawer on desktop: repeats the bar, feels like a phone), C (the mobile panel as
  a small dropdown: tall and narrow, needs an All products page).

## Checkout desktop (`details.html`, `payment.html`, Nov 5, 2026)
- **11-10 — Order confirmed: a registration mark in the four corners of the thank you bar** (print-marks-sketch.html A; Cornel's print mark,
  `design-system/icons/print-mark.svg`, 24, 12 in, white 30%). Rejected: 32 (too big), 16 (barely visible), two corners (B), light green (C, too busy next to the check).
- **11-10 — Checkout desktop: 64 between the columns** (Cornel; details, payment, order confirmed): 128 (11-06) was too much, the
  cart's 32 too tight. The page stays 1064 (the header lines up): the left column 608, the sidebar 392.
- **11-10 — Order status blocks are design system** (Cornel): the thank you bar, the action blocks (to do / done) and the cream band
  moved from pages.css to components.css, with a style guide section "Order status", so My account can reuse them. "Track your
  order" is a calm white outline (not filled) on the dark green.
- **11-10 — Order confirmed, all done: "Track your order" in the thank you bar** (Cornel): white outline button (40, centred) under
  "Everything's in", to the order in My account; only when nothing is left to do (a to-do's button comes first). No All done popup on
  opening an order that was complete at checkout: the bar already says it; the popup stays the reward for finishing on this page.
  Open: guests have no account (then e.g. "Create an account to track your order").
- **11-10 — Order confirmed: "Payment received" also when paid at checkout** (Cornel): a done block with the amount and the logo of
  the method (card, Apple Pay, Google Pay, PayPal, Revolut Pay), with the done blocks. After a redirect the customer's question is "did
  it work?"; payment is now always a block (to do with Pay later, else done). Payment in Order details stays (the record).
- **11-10 — Order confirmed, mobile: no checkout steps** (Cornel): every step is done and there is no way back; the thank you says it
  and the first to-do comes ~40px higher. Desktop keeps the steps (all checked). Mobile also gets the Order overview (the totals with
  the shipping ⓘ) as its own section after Order details; desktop has it as the card on the right.
- **11-10 — Order confirmed: Pay is always the first to-do** (Cornel): number 1, then the uploads still to do, then what's done
  (uploads, Payment received). Nothing goes to print unpaid and one payment covers the whole order; its deadline is the earliest.
  The order is fixed once per visit: a block that gets done (upload, payment) changes where it is, no auto scroll, so the page
  doesn't jump; the next visit sorts again (Cornel: "door de auto scroll gaat de pagina zo heen en weer").
- **11-10 — Order confirmed: a done upload has one small outline button "Change"** (Cornel, switch Change B): right in its head
  row (32 high, 14px, also on mobile), in the place of the to-do's green Upload button; the artwork tile opens the artwork popup, so no
  separate View. Rejected: View · Change as links (small tap targets) and a full-width button (too heavy for a done block). Same day:
  the blocks have the cart's hover shadow on desktop; "More info about your order in My account" under Order details.
- **11-10 — Order confirmed: the thank you stays dark green, over both columns on desktop** (Cornel, switch Thanks A): tried
  light grey in the first column (B) because the green felt busy, but A won; switch and B removed. Same day: the h1 and the section
  h2s are the standard sizes (desktop 24/32, mobile 24/28 and 20/24); the upload bands (deadline and check in progress) both cream,
  the pay logos stay light grey; "Payment received" shows the logo of the method it was paid with on the right (prototype: PayPal).
- **11-09 — PDP: the uploaded file stays clickable** (Cornel): once files are uploaded and the popup is closed, on the "Upload your
  artwork" option (mobile list, desktop card, the bar's drop-up) the thumbnail opens the big artwork popup (as the cart and order
  confirmed) and the rest of the option opens the upload popup with the files (change, remove, add). Without files it only selects.
- **11-09 — The artwork check grows with the order** (Cornel): 1 order line = the tier's price (Premium €10.99, Deluxe €21.00), +50% of
  it for every extra line (2 lines €16.49, 3 lines €21.98). One function `checkPrice()` in app.js (`CHECK_EXTRA_LINE = .5`), used by the
  totals, the cart switch, the "See our 3 options" popup, the PDP upload popup (counting the product being added) and order confirmed.
- **11-09 — Order confirmed: the upload deadline in a band the green of the border** (deadline-band-sketch.html A, Cornel): "Upload by
  10:30 on … to keep this date" in white on `--light-green` under each upload still to do, as the grey "We check your file" band under a
  done one. Chosen knowing white on light green is less readable (about 3:1). Rejected: B (`--link`, a shade darker), C (`--tint`, dark text).
  Later the same day: the band is `--cream` with black text (Cornel), the border stays 2px green. Also: what still needs to be done
  sits on top (uploads, then pay), done blocks under it; files uploaded on the PDP get a done block too (View / Change).
- **11-09 — Order confirmed: the action blocks show what's done; "Your products" hidden** (Cornel): after an upload its block stays
  and refreshes ("Upload successful", the artwork instead of the product photo, which opens the artwork popup, plus View); after paying
  the pay block says "Payment received". Done: grey outline and a check, to-do: green outline and a number. All done: the title becomes
  "Your design(s)". Each upload block holds its order line as the cart line (photo 75 / 120 on desktop, or the artwork as the cart's
  tile; pieces · options, price, its own delivery date and its own deadline "Upload by 10:30 on …"), because those differ per line;
  the pay block has the earliest deadline. Change (as the PDP) reopens the upload popup with the files already added: remove, replace or add more, then
  "Update my order". The per-line product cards (status bar Check · Print · Ship · Delivered) are hidden, kept for My account later.
- **11-09 — The cart's product cards say what they add** (cart-presets-sketch.html A): under the name one grey line with the Recommended
  preset's first 4 choices ("85 x 55 mm · Matt · Thick · Matte lamination"), on "Our best sellers" (empty cart) and "Often ordered with",
  mobile and desktop. Rejected: B (the choices as a ticked list), C (one line + "What you get" link).
- **11-09 — Order confirmed: one layout for one or more order lines** (confirmed-combo-sketch.html, Cornel: "hier word ik wel vrolijk van"):
  a combo of what we need and what Shopify does well. Top to bottom: (1) a dark green strip with a check that draws itself ("Thank you,
  Anna! Your order is in." / "Everything's in."), (2) the actions with the most attention: green-outlined, numbered blocks, one upload per
  product that still needs a file (the PDP's drop field) and the payment for Pay later (amount, Pay now, the payment logos), with the
  earliest deadline in the lead line, (3) the products always per order line (photo, specs, price, a 4-part bar Check · Print · Ship ·
  Delivered, the state in words, "Upload ↑", the date), (4) order details as Shopify's grid with a Google map of the shipping address,
  (5) our print experts, B Corp/FSC, Continue shopping. Desktop: the checkout frame, the totals card on the right. No way back to the cart:
  every step is done. Paying or uploading on the page updates it (prototype). Mobile has no totals block yet (to fine-tune). Same day: the upload is the PDP's "Upload your artwork" popup (progress, thumbnails, "We've got your file", confetti), opened per product;
  its bar says which product the files go to ("For Classic business cards", button "Add to my order"); no upsell, except the Premium
  Artwork Check while the order is still to be paid (it changes the amount). After adding, the files show in that product's card ("Your
  design", added to this product ✓), the card lights up once and the toast says where they went. "Upload ↑" in a product card scrolls smoothly to its action, which lights up once. The Check part of the status bar is light green while it waits for the file, full green once the file is in (Cornel). "Your design" sits on a light grey band attached to the bottom of the product card (as the payment logos), the file rows white on it. The uploaded files in the card open the cart's artwork popup (big, swipeable, a picture per PDF page, 1200px so it is sharp on retina, PDP and confirmed alike; the popup is shared now: SHEET_ART in app.js). The team faces on light green. The strip: "Thank you, Anna!" and "Your order is in." on two lines, the check aligned to the top; the actions always one under the other (also on desktop: easier to scan). Each action one compact row: number, product photo, "Upload your design" + product, the button on the right (Pay: "Pay €…" + the link note, Pay now right, the logos under it, smaller (22) and secondary, centred on a light grey band attached to the bottom of the block); the proof promise moved to the lead line. On mobile the buttons (Upload design, Pay now) are the standard 40 button over the full width under the row (as the cart's; 48 was tried, too heavy); desktop keeps them on the right. When the last action is done (not on opening the page): an "All done" popup, Tikkie style: a big check that pops in and draws, confetti over the whole screen, "All done, Anna!" + "We've got everything we need. Your print goes into production and arrives on …", one button "Great, thanks!"; on the standard popup (the same dim overlay, ✕, Esc, swipe as every popup; Cornel).
- **11-06 — The pills (Personal | Business, Pay now | Pay later) are a block of their own:** 16 under the description and 16 to the email field / the payment methods (was 8).
- **11-06 — Desktop steps: "Details & Shipping"** instead of "Details" (desktop only, mobile keeps "Details": its steps have no room).
- **11-06 — Total: the word semibold (600), the amount extra bold (800)**, as on the PDP (Your selection), so the amount stands out
  (it was 700 next to 800, hardly different). The UI Style Guide weights now say so: 800 for the big amount (20) and the desktop
  card prices; no 900 anywhere (Inter is loaded up to 800, three 900s became 800, nothing changed on screen).
- **11-06 — Payment version B rejected** (the four wallets as big buttons 2 × 2 under the card and an OR line): removed, a strip per method stays.
- **11-06 — Contact labels on payment 96 wide** (was 136): the widest label is 81, so the values sit closer.
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
- **11-06 — Payment on desktop = the details frame:** the same steps, 544 form + 128 + the 392 sidebar card (folded products,
  totals, the VAT switch, the button: Pay now / Place order for a payment link), slim footer. The mobile Order overview block and
  the sticky bar are hidden on desktop; the delivery block stays under the payment methods (32 above it). Spacing on the 8px grid
  (card box and its fields 8, content 16 in; the card box stays a plain outlined block when chosen, no green line; its "Credit card" title as the product card titles (semibold, 14 mobile / 16 desktop); Pay by Link blocks 16; note under the toggle 8).
- **11-06 — Login trust line with Material Symbols:** verified_user (Secure), lock (Encrypted), credit_card (Safe checkout), 16px dark grey
  (were an SVG and two empty CSS squares).
- **11-06 — The address cards on details get the card hover** of the material / product cards (desktop: soft shadow 0 2px 8px).
- **11-06 — Login / register: its own page, reachable from every flow** (login-desk-sketch.html A; Cornel: no header, menu or footer).
  Only a slim dark green bar with the logo (to home), "Back" (to the page before, or "Back to checkout" from details) and the mobile card;
  desktop: the card 440 wide in the middle. Signing in returns to where you came from. Spacing on the 8px grid (16 between blocks,
  24 card padding, 16 in the form, 8 label → field). Rejected: B (three paths side by side), C (card + why an account).
- **11-06 — "+ New address" uses the Material Symbols "add" icon in light green** (card row and address sheet; was a text "+").
- **11-06 — Guest Contact Details gets the same description line** as logged in ("Who’s placing this order — …"), and the same title case.
- **11-06 — Pay by Link in the payment strip** (Cornel): Pay later shows the same strip as a Pay now method (.pm-item, chosen: green outline, name 14/16), its panel has the line (14 dark grey), the share checkbox (14 black) and the recipient fields; the separate green card and share box are gone. A light grey background on the chosen strip was tried and removed again: white inside.
- **11-06 — Mobile payment: the order overview as on desktop** (Cornel): the same totals (totalsHtml): Products (n) as a plain row without the fold-out and without product lines, Check, Shipping, Subtotal (Excl. VAT), VAT 23%, Total (Incl. VAT).
- **11-06 — Desktop steps smaller** (Cornel): circles 24 (were 32, number 12), names 14/22 (were 16), Cart back button 24; the light grey band 56 high.
- **11-06 — Checkout mini footer** (Cornel): the Need help bar goes; only the line, the certificates + payment logos + Show VAT row and the legal row.
- **11-06 — Payment: title, description, pills, options** (Cornel): the order of Contact details on details; the title also stays for Pay later. 16 from the pills to the methods; the panel (card fields, wallet line) left with the radio, not indented under the name. A light green Material "lock" (16) before "All payments are secure and encrypted." Under the last method, centred: "SSL Encrypted · PCI DSS Compliant" (the login trust row, grey). The method logos 30 high with round corners (--r-s); "+2" in the same frame (Cornel). The wallets as their brand buttons (64 × 30): PayPal wordmark on yellow, Apple Pay dark, Google Pay black with the G and a white "Pay", Revolut Pay black.
- **11-06 — Revolut Pay added** (Cornel: "we bieden deze methoden aan"): Credit card, Apple Pay, Google Pay, PayPal, Revolut Pay, as the live Ireland checkout.
- **11-06 — Your details on payment** (Cornel): first B as its own card under the Order overview (payment-details-sketch.html), the same day moved under the payment methods in the main column ("iets meer ruimte") as the FAQ collapsibles (.d-acc): Contact, Shipping address, Billing address; closed a one-line summary (name / label, town / "Same as shipping address"), open the full details (Contact as a list with labels: Name, Email, Company, VAT number, Ref. number; no other abbreviations) and a Change link to details. Then (Cornel) under the order overview: desktop under the sidebar card (sticking with it), mobile after the order overview. Hidden when nothing was filled in.
- **11-06 — Every wallet gets its own pay button** (Cornel): the sidebar and mobile bar button become the brand button: PayPal yellow with its wordmark, Apple Pay / Google Pay / Revolut Pay black with their white mark. Card: "Pay now", Pay later: "Place order" (both green).
- **11-06 — The pay button follows the method** (Cornel): "Pay now" for the card, "Pay with Apple Pay / Google Pay / PayPal" for a wallet, on the sidebar button and the mobile bar; our own green button, no brand buttons (calm). Pay later stays "Place order". Same day: the method logos bigger, 48 × 32 tiles (were 40 × 24): that is what people look for. No extra frame around the method logos (they have their own). The payment logos leave the Order overview on payment (the method list shows them); cart and details keep them.
- **11-06 — The chosen payment strip gets an outline** (Cornel): 2px light green (tried the black hover outline the same day, back to green), white inside; desktop hover on the others: the black outline.
- **11-06 — Payment methods as one list** (payment-methods-sketch.html B; Cornel's reference): `.pm`, a radio row per method (Credit
  card, Apple Pay, Google Pay, PayPal) with small logos; the chosen one opens under its name (the card fields, or "You'll pay in the
  … window"). Not one box (the left column stays open as on cart and details): a strip per method, outlined as the contact card, 8 apart (Cornel);
  the radio shows the choice, no green border. Replaces the three wallet buttons, the OR line and the card box (their CSS removed). Rejected: C (a card per method).
- **11-06 — Payment starts with the Pay now | Pay later pills:** the title "When do you want to pay?" and the note "Fastest option…" are gone.
- **11-06 — No "Estimated delivery date" block on payment** (Cornel): the date can differ per order line, so one date for the order is wrong;
  each line shows its own (cart lines, the folded products in the sidebar).
- **11-06 — Payment tidy-up (Cornel: 1–5):** Pay now | Pay later as pills (as Personal | Business, was the `.seg` toggle); a
  **Payment** section title (first "Payment method", shortened the same day) with "All payments are secure and encrypted." as its description (was the "Secure payment" line,
  a double of the header), 32 above it on desktop; tokens instead of raw colours (`--outline`, `--line`, `--cream` for the test
  note); desktop body text 14 for the note under the pills and the Pay by Link text; the "Pay on Invoice isn't available" line removed.
- **11-06 — "or" line between the wallets and the credit card on payment**, the same as on login: now one design-system component `.or-line`
  (was `.auth-or`), `--line` rules, 16 to the word; "OR" in body text size 14/22, in capitals.
- **11-06 (later) — The order summary is always an invoice** (Cornel): rows excl. VAT, Subtotal (Excl. VAT), VAT 23%, Total (Incl. VAT),
  whatever the VAT switch says (the switch changes the prices on the pages). Replaces the two VAT-switch entries below.
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
