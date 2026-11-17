# My account — analysis of the wishes prototype (2026-11-17)

Source: Claude artifact "My Account prototype" (JVuRcuJ2en87wu2GTbf3yS), local copy in `ref/my-account/wishes.html`
(git-ignored; open via http://localhost:8765/ref/my-account/wishes.html). Help Centre + My account in one click-through,
15 views, demo controls (Guest/Customer · Normal/High value · Returning/New customer = empty states).

**Desktop only.** At 390px it is not designed: the sidebar stacks above the content and the page scrolls sideways (444px).
The mobile model is ours to design.

## 1. What is in it (account part)

| Area | Content |
|---|---|
| **Shell** | Left sidebar: initials avatar, name, company; **VIP score** progress bar ("€1,876 of €2,000 · €124 to 4% off"); nav groups Overview (Account Overview) · Activity (Order History, Invoices, My Quotes, Complaints) · Account settings (Personal Details, Addresses) · Logout. Breadcrumb Help Centre › My account. |
| **Overview (dashboard)** | Welcome back, <name> · **Needs your attention** (inbox: 1 proof, 1 quote, 1 complaint needs info, 1 payment due) · **Need to restock?** (3 order rows: thumb, Reorder, Reorder with new configuration, Download proof) · Quotes card (Request a quote / View your quotes) · Previously viewed (5 product cards, from €) · Recent orders + Recent invoices (folding lists with status chips). New customer: empty states with Start an order. |
| **Order History** | Table Order · Customer reference · Placed · Type · Status; search + Status filter (Action needed, In production, Shipped, Delivered, With a complaint) + Type (Standard / Quote); complaint icon on a row; **Orders placed as guest → Claim my orders**. |
| **Order detail** | Title + editable customer reference; banner Payment required (Pay now); **per product line**: price excl. VAT, All specifications fold, **4-step tracker Artwork · Proof · Printing · Delivery** (with error state), a status message with deadline ("Approve by Fri 22 Aug, 14:00 to keep your delivery date"), deadline missed → new date, actions (Review proof, Upload new design/artwork, Track parcel). Addresses (Change), Payment & invoices, Order summary, **Need something?** (Reorder, Cancel order, Report an issue, Contact support, Resend payment link, Change who pays) + 3 help links. |
| **Proof approval** | PDF viewer (zoom, pages), Open / Download PDF, Approve · Upload new design · Leave a note; popup "Actions taken on your file" (Colours, Quality, Safety area). |
| **Complaints** | Table Case · Order · Issue · Submitted · Status + Report a problem banner. Case detail: status message with action (Upload photos), what it is about, order contents, **vertical case progress** (5 steps), case details, Need something?. |
| **Quotes** | Table Quote · Job · Requested · Status · PDF. Quote detail: "Your quote is ready — €420", Review & approve / Decline, 3-step progress, details, addresses, **Ask us a question** (message + up to 5 files), summary (valid until), contact person by name. |
| **Invoices** | Header "€762.70 open across 3 invoices" + Settle all + Export CSV; filters status (7) / type (invoices, credit notes, collective) / sort; table incl. credit notes, partly paid, pagination. Invoice detail: the document (line items net / VAT % / VAT / total), amount due + Pay, payments and credits, related order and credit note. |
| **Personal details** | Profile and Email (inline edit), communication switches (marketing, SMS), password (via email link), company info (name, VAT number, invoice email), **e-invoicing per country** (7 countries). |
| **Addresses** | Default delivery + Billing cards, More addresses table with edit, Add an address. |

## 2. What our style guide can already do

| Wish | Existing component (guide row) |
|---|---|
| Titles, body, breadcrumbs | Page / Section / Card title, Body, Breadcrumbs |
| Buttons, links, icon actions | Primary, Secondary, Pill, Icon button + Tooltip, Text link, Arrow link |
| Forms (details, reply, address) | Text field (floating labels), Error, Select, Checkbox, **Switch** (= their pd-sw), Segmented control, Search |
| Needs your attention | **Action block: to do / done** (`.oc-act`): number + title + button, made for exactly this |
| Payment due / deadline banner | Thank you bar (`.oc-strip`), Notification |
| Order line in the detail | **Product line** + All specifications fold (`.sum-toggle`) |
| Order summary, payment block | **Order overview** (checkout sidebar) |
| Addresses | **Address card** + Edit / Add address popup (checkout) |
| Upload new design / evidence / attach | **Upload your artwork** sheet |
| Previously viewed | Product card |
| Proof warnings, cancel, confirm | Sheet (desktop = centred dialog), Toast |
| Account navigation | **Account menu** (header dropdown + mobile sheet already list these exact pages) |
| Labels | Commercial / Eco / Information (`badgeHtml`) |
| Status per line | Partly: the hidden `.oc-line` steps (Check · Print · Ship · Delivered) and `.co-steps` (pages.css) |
| Side navigation | Partly: the Help Centre sidebar (`.ha-side`, pages.css) |

## 3. What is new (dashboard elements we don't have)

1. **Account layout**: desktop sidebar + content; mobile without a sidebar (proposal: Account Overview is the hub, the account sheet is the menu, every sub page gets ← Account).
2. **Status chip**: one set for orders, invoices, quotes, cases. Our labels are commercial (orange/eco/neutral), not status. Proposal: few meanings (*action needed* · *in progress* · *done* · *problem*), only "action" with colour, the rest grey text with a dot (no kermis).
3. **Data list**: orders, invoices, quotes, complaints, addresses. Desktop a table, mobile rows (title, sub line, chip right). Plus **toolbar** (search + filter) and **pager**.
4. **Progress tracker**: one component with two forms. Horizontal per order line (Artwork · Proof · Printing · Delivery, with error/missed state) and vertical for a case or quote (timeline with dates). Merges `.oc-line .steps` and `.co-steps`.
5. **Reorder row**: thumb + name + spec + Reorder + icon buttons (close to Product line / search product row).
6. **Summary header / KPI**: "€762.70 open across 3 invoices" + Settle all.
7. **Loyalty progress (VIP score)**: new; does it exist in the business?
8. **Document view**: invoice (and quote) as a document with line items.
9. **Proof viewer**: PDF with zoom + approve bar.
10. **Message thread + reply box**: case/quote conversation with attachments.
11. **Settings card with inline edit** (view ↔ edit, Cancel / Save).
12. **Empty state**: generalise Empty cart (icon, line, button) for no orders / quotes / invoices.

## 4. What to improve in the wishes

- **Mobile is missing**: the biggest gap; every new element needs its mobile form.
- **Dashboard repeats itself**: the roll-up proof is in Needs attention *and* Recent orders; unpaid invoices in Needs attention *and* Recent invoices; the same orders in Restock *and* Recent orders. Proposal: Needs attention → orders in progress → Reorder; Recent invoices and Previously viewed out (or at the bottom). The Quotes card with two outline buttons fits better under Quotes.
- **Too many status words** (Action needed, Awaiting approval, Payment required, More information needed, Quote ready, Unpaid, Open…): define one vocabulary per object.
- **Quote and complaint share one template** ("case"): keep it that way, one detail template (status message → progress → details → conversation → summary).
- **Credit notes as separate rows** in the invoice table make it busy: show them under their invoice.
- **E-invoicing**: 7 countries for an Irish customer; show Ireland, the rest behind "Other countries".
- **House rules broken in the copy**: "Default delivery" / "delivery address" → *shipping address*; "Helloprint" → *HelloPrint*; delivery "Tue 26 – Thu 28 Aug" → *Estimated <day> — latest <date>*; VAT 0% on quotes/complaints → Irish 23%; inconsistent capitals (Order History, Personal Details, My Quotes vs Quotes).
- **Breadcrumb** starts at Help Centre (built from there) → Home › My account.
- Strong ideas to keep: customer reference (PO) everywhere, deadline + consequence per line, claim guest orders, Change who pays, contact person by name on a quote, Export CSV.

## 5. Proposed order

0. Decide: mobile model, round-1 pages, VIP yes/no.
1. **Sketch** `sketches/account-sketch.html`: shell + Overview, A/B/C, 390 + 1512.
2. Build the new components in the design system with a guide row each: status chip, data list (+ toolbar, pager), progress tracker, empty state.
3. Pages: Orders → Order detail (+ proof) → Invoices (+ document) → Quotes & Complaints (one case template) → Personal details → Addresses.
