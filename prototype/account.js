// My account (account.html, orders.html, order.html; Cornel 2026-11-17): the orders, what you did with them (kept in this browser), the popups and actions.
// An order: number, name, your reference, placed, the line under it in the list, its status ([class, label]: act = needs you, go = on its way),
// the tracker step (0 Artwork · 1 Proof · 2 Printing · 3 Delivery · 4 delivered), a payment to do, a complaint, and its products.
// x: what is on its invoice besides the products (the wishes artifact, Cornel 2026-11-17): the artwork check, shipping (+ its line), a discount (+ its name), how it is paid.
// A product: photo, name, specs, price incl. VAT (gross, as the artifact; price = excl. VAT, worked out below), its delivery date (arrives; delivered: the day it came), its step, err (a fix needed), what happens now (title + line), the buttons (first = primary) and the deadline band.
const ORDER_STEPS = ['Artwork', 'Proof', 'Printing', 'Delivery'];
const KEEP = 'to keep your date: Estimated Tue 24 Nov — latest Wed 25 Nov';
const ORDERS = [
  { no: '8847305', name: 'Launch kit', ref: 'PO-2026-118', placed: 'Mon 16 Nov', sub: '3 products need you', status: ['act', 'Action needed'], step: 0, x: { art: 15, shipLbl: 'Free delivery (order over €250)', method: 'Pay by invoice · 14 days' }, lines: [
    { img: 'p2.png', name: 'Folded Leaflets', spec: '250 pcs · A4 landscape · 4 pages · Silk', gross: 118.00, arrives: 'Tue 24 Nov', step: 1, proof: 'leaflet', title: 'Your proof is ready', text: 'Check it and approve it, or upload a new design on the proof page.', btns: ['Review proof'], foot: `Approve by <b>14:00 on Wed 18 Nov</b> ${KEEP}` },
    { img: 'p3.png', name: 'Standard Flyers', spec: '1,000 pcs · A5 · Gloss', gross: 54.00, arrives: 'Tue 24 Nov', step: 0, title: 'Upload your design', text: 'We need your artwork to start.', btns: ['Upload design'], foot: `Upload by <b>14:00 on Wed 18 Nov</b> ${KEEP}` },
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · Matt laminated · Double-sided', gross: 31.50, arrives: 'Tue 24 Nov', step: 0, err: true, title: 'Small fix needed', text: 'The text sits too close to the cut edge. Please upload a corrected file.', btns: ['Upload new file'], foot: `Upload by <b>14:00 on Wed 18 Nov</b> ${KEEP}` },
    { img: 'p5.png', name: 'Posters', spec: '50 pcs · A4 · Gloss', gross: 22.00, arrives: 'Fri 27 Nov', step: 1, proof: 'poster-a4', title: 'Your proof is ready', text: 'The deadline has passed (14:00 Mon 16 Nov): approve now for Estimated Fri 27 Nov — latest Mon 30 Nov.', btns: ['Review proof'] },
    { img: 'p6.png', name: 'Basic Cotton Bags', spec: '100 pcs · Natural · Full colour', gross: 240.00, arrives: 'Thu 26 Nov', step: 2, title: 'Printing has started', text: 'We print it now and ship it as soon as it’s ready' },
  ] },
  { no: '8846210', name: 'Event pack', ref: 'EVENT-NOV', placed: 'Fri 13 Nov', sub: 'Estimated Fri 20 Nov — latest Mon 23 Nov', status: ['go', 'On its way'], step: 3, x: { art: 15, ship: 14.90, shipLbl: 'DPD Ireland · standard', disc: 26.25, discLbl: 'Volume discount (10%)', method: 'Card · Visa •••• 4242' }, lines: [
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · Matt laminated · Double-sided', gross: 48.00, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8846210IE', btns: ['Track parcel'] },
    { img: 'p3.png', name: 'Standard Flyers', spec: '2,500 pcs · A5 · Gloss · Full colour', gross: 96.50, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8846210IE', btns: ['Track parcel'] },
    { img: 'products/roller-banner.webp', name: 'Roller Banner', spec: '2 pcs · 85 × 200 cm · Premium', gross: 118.00, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8846210IE', btns: ['Track parcel'] },
  ] },
  { no: '8842119', name: 'Classic Business Cards', ref: 'PO-77120', placed: 'Mon 9 Nov', sub: '', status: ['go', 'On its way'], step: 3, x: { art: 12, ship: 24.20, shipLbl: 'DPD Ireland · standard', disc: 2, discLbl: 'Returning customer discount', method: 'Pay by invoice · 14 days' }, lines: [
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · Matt laminated · Double-sided', gross: 150.00, arrives: 'Thu 19 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8842119IE', btns: ['Track parcel'] },
  ] },
  { no: '8839004', name: 'Classic Business Cards', ref: 'PO-77131', placed: 'Fri 6 Nov', sub: 'Your proof is ready', status: ['act', 'Approve proof'], step: 1, x: { shipLbl: 'Free delivery', method: 'Card · Visa •••• 4242' }, lines: [
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · 85 × 55 mm · Double-sided · Matt', gross: 96.00, arrives: 'Mon 23 Nov', step: 1, proof: 'business-cards', title: 'Your proof is ready', text: 'Check it and approve it, or upload a new design on the proof page.', btns: ['Review proof'], foot: 'Approve by <b>14:00 on Wed 18 Nov</b> to keep your date: Estimated Mon 23 Nov — latest Tue 24 Nov' },
  ] },
  { no: '8830771', name: 'Standard Flyers', ref: 'PO-76982', quote: 'QT-5502', placed: 'Tue 3 Nov', sub: 'Estimated Tue 24 Nov — latest Wed 25 Nov', status: ['go', 'In production'], step: 2, x: { ship: 24.50, shipLbl: 'DPD Ireland · standard', method: 'Pay by invoice · 14 days' }, lines: [
    { img: 'p3.png', name: 'Standard Flyers', spec: '2,500 pcs · A5 · Gloss · Full colour, double-sided', gross: 188.00, arrives: 'Tue 24 Nov', step: 2, title: 'Printing has started', text: 'We print it now and ship it as soon as it’s ready' },
  ] },
  { no: '8825510', name: 'Roller Banner', ref: '', placed: 'Tue 20 Oct', sub: 'Delivered Mon 26 Oct', status: ['', 'Delivered'], step: 4, complaint: 'CMP-1042', x: { shipLbl: 'Free delivery', method: 'Bank transfer (SEPA)' }, lines: [
    { img: 'products/roller-banner.webp', name: 'Roller Banner', spec: '1 pc · 85 × 200 cm · Premium', gross: 96.00, arrives: 'Mon 26 Oct', step: 4, title: 'Delivered Mon 26 Oct', text: 'Complaint CMP-1042 in progress: damaged on arrival.', btns: ['View complaint'] },
  ] },
  { no: '8814402', name: 'Tote bags', ref: 'MERCH-Q4', placed: 'Mon 12 Oct', sub: 'Delivered Thu 22 Oct', status: ['', 'Delivered'], step: 4, x: { shipLbl: 'Included in your quote', method: 'Pay by invoice · due on receipt' }, lines: [
    { img: 'p6.png', name: 'Tote bags', spec: '1,000 pcs · Natural cotton · Bespoke print, 1 colour', gross: 420.00, arrives: 'Thu 22 Oct', step: 4, title: 'Delivered Thu 22 Oct', text: 'Signed for by L. Pijffers' },
  ] },
];
// The proofs (always a PDF, prototype files in assets/proofs/) and what we did with each file (the file check)
const PROOFS = {
  'business-cards': [['ok', 'Colours converted to CMYK', 'Print colours can look a little calmer than on screen.'], ['ok', 'Front and back', 'Page 1 is the front, page 2 the back.'],
    ['ok', 'Bleed and cut marks', 'Everything up to the cut line is printed; the coloured edge is trimmed off.']],
  leaflet: [['ok', 'Colours converted to CMYK', 'Print colours can look a little calmer than on screen.'], ['ok', 'Four pages in the right order', 'Folded in half: page 1 is the cover.'],
    ['warn', 'Text close to the fold', 'On page 2 a line sits 2 mm from the fold. It may disappear into it.']],
  'poster-a4': [['ok', 'Colours converted to CMYK', 'Print colours can look a little calmer than on screen.'], ['ok', 'Resolution is fine', 'Sharp at A4.'], ['ok', 'Bleed and cut marks', 'Everything up to the cut line is printed.']],
};
// The addresses of an order (your saved ones, as on order confirmed); you can change them for one order until it ships
const ADDR = { ship: { name: 'Loraine Pijffers', company: 'Merrion Studio', street: '12 Merrion Square', code: 'D02 X285', town: 'Dublin 2' },
  bill: { name: 'Merrion Studio', vat: 'IE 1234567 X', street: '12 Merrion Square', code: 'D02 X285', town: 'Dublin 2' } };
// Your address book: the checkout's ('hp-addresses', this browser), so a new address here is in the checkout too and back.
// Empty (never at the checkout): the account's demo addresses. Change on the order page picks one of them or adds one.
const bookOf = () => { let b = []; try { b = JSON.parse(localStorage.getItem('hp-addresses')) || []; } catch (e) {}
  return b.length ? b : [{ id: 'a1', label: 'Office', first: 'Loraine', last: 'Pijffers', company: 'Merrion Studio', address1: '12 Merrion Square', eircode: 'D02 X285', town: 'Dublin 2', isDefault: true },
    { id: 'a2', label: 'Warehouse', first: 'Loraine', last: 'Pijffers', company: 'Merrion Studio', address1: 'Unit 4, Park West Business Park', eircode: 'D12 F6X2', town: 'Dublin 12' },
    { id: 'a3', label: 'Home', first: 'Loraine', last: 'Pijffers', address1: '27 Sandymount Avenue', eircode: 'D04 K7P3', town: 'Dublin 4' }]; };
const bookLines = a => [`${a.first || ''} ${a.last || ''}`.trim(), a.company, a.address1, a.address2, `${a.eircode} ${a.town}`.trim()].filter(Boolean);
const bookToOrder = (a, prev) => ({ name: `${a.first || ''} ${a.last || ''}`.trim(), company: a.company, street: [a.address1, a.address2].filter(Boolean).join(', '), code: a.eircode, town: a.town, vat: prev.vat });
const addrLines = a => [[a.name, a.company].filter(Boolean).join(', '), a.vat && 'VAT ' + a.vat, a.street, `${a.town}, ${a.code}`, 'Ireland'].filter(Boolean);
// Money as the wishes artifact counts it: every row has its price incl. VAT (gross); net and VAT per row (vatSplit), the totals add up the rows
const accEur = n => (n < 0 ? '−€' : '€') + Math.abs(n).toFixed(2);
const r2 = n => Math.round(n * 100) / 100;
const vatSplit = g => { const net = r2(g / (1 + VAT_RATE)); return { net, vat: r2(g - net), gross: g }; };
// what is on an order's invoice: the products, the artwork check, shipping (when it costs), the discount
const orderRows = o => [...o.lines.map(l => ({ name: l.name, spec: l.spec, gross: l.gross, img: l.img })),
  ...(o.x.art ? [{ name: 'Premium artwork check', spec: 'Our team checks your file before printing', gross: o.x.art }] : []),
  ...(o.x.ship ? [{ name: 'Shipping', spec: o.x.shipLbl, gross: o.x.ship }] : []),
  ...(o.x.disc ? [{ name: o.x.discLbl, spec: '', gross: -o.x.disc }] : [])];
const sumRows = rows => { const t = rows.reduce((t, r) => { const s = vatSplit(r.gross); return { net: t.net + s.net, vat: t.vat + s.vat, gross: t.gross + s.gross }; }, { net: 0, vat: 0, gross: 0 });
  return { net: r2(t.net), vat: r2(t.vat), gross: r2(t.gross) }; };
const orderSum = o => { const n = g => vatSplit(g).net, products = r2(o.lines.reduce((s, l) => s + l.price, 0)), t = sumRows(orderRows(o));
  return { products, art: o.x.art ? n(o.x.art) : 0, ship: o.x.ship ? n(o.x.ship) : 0, disc: o.x.disc ? n(o.x.disc) : 0, net: t.net, vat: t.vat, total: t.gross }; };
// The totals of an order (the order page): the rows excl. VAT as the checkout, then VAT and the total incl. VAT
const orderTotals = o => { const t = orderSum(o), e = accEur;
  return `<div class="totals"><div><span>Products (${o.lines.length})</span><span>${e(t.products)}</span></div>
      ${t.disc ? `<div><span>${o.x.discLbl}</span><span class="free">${e(-t.disc)}</span></div>` : ''}${t.art ? `<div><span>Premium artwork check</span><span>${e(t.art)}</span></div>` : ''}
      <div><span>Shipping</span>${t.ship ? `<span>${e(t.ship)}</span>` : '<span class="free">Free</span>'}</div><div class="sub"><span>Subtotal <small>(Excl. VAT)</small></span><span>${e(t.net)}</span></div><div><span>VAT 23%</span><span>${e(t.vat)}</span></div>
      <div class="grand"><span>Total <small>(Incl. VAT)</small></span><span>${e(t.total)}</span></div></div>`; };

// ---------- Invoices and credit notes (invoices.html, invoice.html; the wishes artifact's set, dates moved to our November) ----------
// An invoice: its order, issued, due (or paid: pays = [{ date, method }], the rest of the amount). A credit note: lines (gross, negative), the invoice it
// is for, where it is applied (apps: [{ inv, amt, date }]) or refunded. What is open = the order's total − credits applied − payments.
const INVOICES = [
  { no: 'INV-2026-4471', order: '8842119', date: 'Tue 10 Nov', due: 'Tue 24 Nov' },
  { no: 'INV-2026-4302', order: '8830771', date: 'Wed 4 Nov', due: 'Wed 18 Nov' },
  { no: 'INV-2026-4188', order: '8825510', date: 'Tue 20 Oct', pays: [{ date: 'Thu 22 Oct', method: 'Bank transfer (SEPA)' }] },
  { no: 'INV-2026-4490', order: '8846210', date: 'Fri 13 Nov', pays: [{ date: 'Fri 13 Nov', method: 'Card · Visa •••• 4242' }] },
  { no: 'INV-2026-4491', order: '8839004', date: 'Fri 6 Nov', pays: [{ date: 'Fri 6 Nov', method: 'Card · Visa •••• 4242' }] },
  { no: 'INV-2026-4120', order: '8814402', date: 'Mon 12 Oct', due: 'on receipt' },
  { no: 'CN-2026-0071', credit: 'INV-2026-4471', date: 'Tue 10 Nov', lines: [{ name: 'Goodwill credit', spec: 'Goodwill gesture', gross: -24 }], apps: [{ inv: 'INV-2026-4471', amt: 24, date: 'Tue 10 Nov' }] },
  { no: 'CN-2026-0083', credit: 'INV-2026-4302', date: 'Thu 5 Nov', lines: [{ name: 'Late delivery credit', spec: 'Applied across two open invoices', gross: -30 }], apps: [{ inv: 'INV-2026-4302', amt: 18, date: 'Thu 5 Nov' }, { inv: 'INV-2026-4120', amt: 12, date: 'Thu 5 Nov' }] },
  { no: 'CN-2026-0090', credit: 'INV-2026-4188', date: 'Mon 26 Oct', lines: [{ name: 'Price correction', spec: 'Quantity adjusted after dispatch', gross: -15 }], apps: [], refund: { date: 'Thu 29 Oct', method: 'Bank transfer (SEPA)' } },
  { no: 'CN-2026-0096', credit: 'INV-2026-4490', date: 'Mon 16 Nov', lines: [{ name: 'Goodwill credit', spec: 'Goodwill gesture', gross: -20 }], apps: [] },
];
// how it is paid, as the invoice's terms
const invTerms = m => /14 days/.test(m) ? 'On account, 14 days' : /on receipt/.test(m) ? 'Due on receipt' : /^Card/.test(m) ? 'Paid by card' : /Bank/.test(m) ? 'Bank transfer' : m;
// every invoice and credit note worked out (newest first): { no, o, credit, date, rows, sum, credits, pays, open, due, total, status }
function invoiceList() {
  const orderOf = no => ORDERS.find(o => o.no === no);   // (the global orderOf comes after the first applyOrders)
  const all = INVOICES.filter(v => orderOf(v.order || INVOICES.find(i => i.no === v.credit).order)), applied = no => all.flatMap(v => (v.apps || []).filter(a => a.inv === no).map(a => ({ ...a, cn: v.no, date: a.date })));
  return all.map(v => {
    if (v.credit) { const o = orderOf(INVOICES.find(i => i.no === v.credit).order), sum = sumRows(v.lines), used = r2((v.apps || []).reduce((s, a) => s + a.amt, 0));
      const state = v.refund ? 'Refunded' : used >= -sum.gross - .005 ? 'Applied' : 'Available';
      return { ...v, o, rows: v.lines, sum, total: sum.gross, state, status: [state === 'Applied' ? '' : 'ok', state] }; }
    const o = orderOf(v.order), rows = orderRows(o), sum = sumRows(rows), credits = applied(v.no), cr = r2(credits.reduce((s, c) => s + c.amt, 0));
    const before = r2(sum.gross - cr - (v.pays ? sum.gross - cr : 0));   // still to pay before you paid here
    const pays = [...(v.pays || []).map(p => ({ ...p, amt: r2(sum.gross - cr) })), ...(o.paid && before > 0 ? [{ date: 'Tue 17 Nov', method: 'Card · Visa •••• 4242', amt: before }] : [])];
    const open = r2(sum.gross - cr - pays.reduce((s, p) => s + p.amt, 0));
    return { ...v, o, rows, sum, credits, pays, before, open, total: sum.gross, notes: all.filter(c => c.credit === v.no).map(c => c.no), status: open > .005 ? ['', 'Open'] : ['ok', 'Paid'] };
  }).sort((a, b) => etaDate(b.date) - etaDate(a.date));
}
const invoiceOf = no => invoiceList().find(i => i.no === no);
const orderInvoice = o => invoiceList().find(i => !i.credit && i.o === o);
const invoiceUrl = no => `invoice.html?i=${no}`;

// ---------- Quotes (quotes.html, quote.html; the wishes artifact's four, dates moved to our November) ----------
// A quote: the job, your reference, requested / issued / valid until, who handles it, its state (requested · ready · accepted · expired; you: accepted or
// declined, kept in this browser 'hp-quotes'), the order it became, and its lines (the specs as the artifact lists them; gross incl. VAT once priced).
// QT-5502 became order #8830771, so its lines are that order's; QT-5481's price is ours (the artifact only lists it).
const QUOTES = [
  { no: 'QT-5567', job: 'Roll-up banners ×50, custom size', ref: 'PO-77154', requested: 'Mon 16 Nov', issued: 'Mon 16 Nov', valid: 'Mon 30 Nov', by: 'Loraine', state: 'ready',
    lines: [{ name: 'Roll-up banners — custom size', specs: ['Quantity: 50 pcs', 'Size: 85×200cm · premium roll-up base', 'Print: full colour, single-sided', 'Finish: matte laminate', 'Turnaround: 5 working days after approval'], gross: 420 }] },
  { no: 'QT-5540', job: 'Branded tote bags ×1,000', ref: 'MERCH-Q4', requested: 'Thu 12 Nov', by: 'Cathal Byrne', state: 'requested',
    lines: [{ name: 'Branded tote bags', specs: ['Quantity: 1,000 pcs', 'Material: natural cotton, long handles', 'Print: 1 colour, 1 side', 'Turnaround: confirmed with your quote'] }] },
  { no: 'QT-5502', job: 'Standard Flyers ×2,500', ref: 'PO-76982', requested: 'Fri 30 Oct', issued: 'Mon 2 Nov', valid: 'Mon 16 Nov', accepted: 'Tue 3 Nov', order: '8830771', by: 'Loraine', state: 'accepted' },
  { no: 'QT-5481', job: 'Window stickers ×500', ref: '', requested: 'Mon 19 Oct', issued: 'Mon 19 Oct', valid: 'Mon 2 Nov', by: 'Loraine', state: 'expired',
    lines: [{ name: 'Window stickers — custom shape', specs: ['Quantity: 500 pcs', 'Size: 10 × 10 cm · contour cut', 'Material: clear vinyl, for inside the window', 'Print: full colour + white'], gross: 145 }] },
];
let quotesDone = {};
try { quotesDone = JSON.parse(localStorage.getItem('hp-quotes')) || {}; } catch (e) {}
const QUOTE_STATES = { requested: ['go', 'Requested'], ready: ['act', 'Quote ready'], accepted: ['ok', 'Accepted'], expired: ['', 'Expired'], declined: ['', 'Declined'] };
function quoteList() {
  if (NEW_CUSTOMER) return [];
  return QUOTES.map(q => { const d = quotesDone[q.no], v = { ...q, state: d || q.state };
    if (d === 'accepted') v.accepted = 'Tue 17 Nov';
    const o = v.order && ORDERS.find(o => o.no === v.order);
    v.rows = o ? orderRows(o) : (v.lines || []).map(l => ({ name: l.name, spec: l.specs.join(' · '), specs: l.specs, gross: l.gross }));
    v.priced = v.rows.every(r => r.gross !== undefined); v.sum = v.priced ? sumRows(v.rows) : null; v.status = QUOTE_STATES[v.state];
    return v; });
}
const quoteOf = no => quoteList().find(q => q.no === no);
const quoteUrl = no => `quote.html?q=${no}`;
const quoteSave = (no, state) => { quotesDone[no] = state; try { localStorage.setItem('hp-quotes', JSON.stringify(quotesDone)); } catch (e) {} window.dispatchEvent(new Event('hp-orders')); };
// ---------- Complaints (complaints.html, complaint.html; the wishes artifact's three cases, dates moved to our November) ----------
// A case: the order (+ your reference), the issue, submitted, its steps (the progress bar) and what happened (dated), what it is about, the products,
// what we need from you. You: photos sent (kept in this browser, 'hp-complaints').
const COMPLAINTS = [
  { no: 'CMP-1031', order: '8811900', ref: 'PO-76810', issue: 'Print quality', submitted: 'Thu 12 Nov', state: 'info',
    about: 'You reported on Thu 12 Nov that the colours printed duller than your file and some text looked blurry.',
    lines: [{ img: 'p3.png', name: 'Standard Flyers', spec: '1,000 pcs · A5 · Gloss · Full colour, double-sided', gross: 92 }],
    events: [['Complaint submitted', 'Thu 12 Nov · print quality'], ['Reviewed by our team', 'Fri 13 Nov']] },
  { no: 'CMP-1042', order: '8825510', ref: '', issue: 'Damaged on arrival', submitted: 'Tue 27 Oct', state: 'progress',
    about: 'You reported on Tue 27 Oct that the banner base arrived bent, and uploaded photos of the damage.',
    events: [['Complaint submitted', 'Tue 27 Oct · damaged on arrival'], ['Photos received', 'Tue 27 Oct'], ['Case accepted', 'Wed 28 Oct · confirmed valid']] },
  { no: 'CMP-1009', order: '8790233', ref: 'PO-75544', issue: 'Wrong quantity', submitted: 'Mon 19 Oct', state: 'resolved',
    about: 'You reported on Mon 19 Oct that the box held fewer cards than the 1,000 ordered.',
    lines: [{ img: 'p4.png', name: 'Classic Business Cards', spec: '1,000 pcs · Soft-touch · Double-sided', gross: 128 }],
    events: [['Complaint submitted', 'Mon 19 Oct · wrong quantity'], ['Case accepted', 'Tue 20 Oct · confirmed valid'], ['Missing items reprinted', 'Thu 22 Oct'], ['Resolved', 'Mon 26 Oct · delivered']] },
];
let complaintsDone = {};
try { complaintsDone = JSON.parse(localStorage.getItem('hp-complaints')) || {}; } catch (e) {}
const COMPLAINT_STATES = { info: ['act', 'More information needed'], progress: ['go', 'In progress'], resolved: ['ok', 'Resolved'] };
// the case's progress bar: Submitted · In review · Solution · Resolved, and where it is
const COMPLAINT_STEPS = ['Submitted', 'In review', 'Solution', 'Resolved'];
// Report a problem (report.html; the wishes artifact's form 1:1): per area what can go wrong, whether it is about the products (how many), the photos we
// need, and what we can do. A case you send is kept in this browser ('hp-complaints'.created) and shows in Complaints as any other.
const REPORT_AREAS = {
  'Artwork / design': [
    { t: 'The print doesn’t match my file', item: true, evidence: ['A close-up of the problem area', 'A photo of the whole print'], sol: ['reprint', 'refund', 'keep'] },
    { t: 'Colours are wrong / off', item: true, evidence: ['A close-up showing the colour', 'A photo of the whole print'], sol: ['reprint', 'refund', 'keep'] },
    { t: 'Wrong version / old file was printed', item: true, evidence: ['A photo of what was printed'], sol: ['reprint', 'refund'] },
    { t: 'Text or images cut off', item: true, evidence: ['A close-up of the cut-off area', 'A photo of the whole print'], sol: ['reprint', 'refund', 'keep'] }],
  'Product / print quality': [
    { t: 'Product arrived damaged', item: true, evidence: ['A photo of the damaged product', 'A photo of the outer box', 'A photo of the shipping label'], sol: ['reprint', 'refund', 'keep'] },
    { t: 'Poor print quality (blurry, streaks)', item: true, evidence: ['A close-up of the problem', 'A photo of the whole print'], sol: ['reprint', 'refund', 'keep'] },
    { t: 'Wrong product / specification', item: true, evidence: ['A photo of what you received', 'A photo of the shipping label'], sol: ['reprint', 'refund'] },
    { t: 'Wrong quantity received', item: true, evidence: ['A photo of what you received'], sol: ['resend', 'refund'] }],
  Packaging: [
    { t: 'Packaging was damaged (product is fine)', item: false, evidence: ['A photo of the outer box'], sol: ['refund', 'keep'] },
    { t: 'Items badly packed / bent', item: true, evidence: ['A photo of the damaged product', 'A photo of the outer box'], sol: ['reprint', 'refund', 'keep'] }],
  Delivery: [
    { t: 'Order delivered too late', item: false, evidence: ['A screenshot of the tracking or delivery date'], sol: ['refund', 'keep'] },
    { t: 'Order never arrived', item: false, evidence: ['A screenshot of the tracking status'], sol: ['resend', 'refund'] },
    { t: 'Part of my order is missing', item: true, evidence: ['A photo of what you did receive', 'A photo of the shipping label'], sol: ['resend', 'refund'] },
    { t: 'Delivered to the wrong address', item: false, evidence: ['A screenshot of the delivery confirmation', 'A photo of where it was left, if visible'], sol: ['resend', 'refund'] }],
};
// the shipping label is always asked (Cornel 2026-11-18: it tells us the parcel), last; not when the order never arrived (there is no label)
Object.values(REPORT_AREAS).flat().forEach(p => { const l = 'A photo of the shipping label'; if (p.t !== 'Order never arrived') p.evidence = [...p.evidence.filter(t => t !== l), l]; });
const REPORT_FIXES = {
  reprint: { t: 'Reprint it free of charge', s: 'Reprinted and reshipped at no cost.', reprint: true },
  resend: { t: 'Resend the missing items free of charge', s: 'Missing items reshipped at no cost.', reprint: true },
  refund: { t: 'Refund the affected items', s: 'Back on your original payment method in 3 working days.' },
  keep: { t: 'Get a discount code', s: 'Keep your product and get a discount code.' },
};
const reportUrl = no => no ? `report.html?o=${no}` : 'report.html';
function complaintCreate(c) {   // a case you sent: the next number, In progress, the first step done
  const created = complaintsDone.created || [], no = 'CMP-' + (1043 + created.length);
  complaintsDone.created = [...created, { ...c, no, state: 'progress', created: true, submitted: 'Wed 18 Nov', events: [['Complaint submitted', `Wed 18 Nov · ${c.issue.toLowerCase()}`]] }];
  try { localStorage.setItem('hp-complaints', JSON.stringify(complaintsDone)); } catch (e) {}
  return no;
}
function complaintList() {
  if (NEW_CUSTOMER) return [];
  return [...COMPLAINTS, ...(complaintsDone.created || [])].map(c => { const v = { ...c, events: [...c.events] }, o = ORDERS.find(o => o.no === c.order);
    const sent = complaintsDone[c.no];   // your photos (the upload popup's files), as an upload on the order page
    if (Array.isArray(sent)) v.photos = sent;   // also Change on a case you sent from Report a problem
    if (sent && c.state === 'info') { v.photos = Array.isArray(sent) ? sent : []; v.state = 'progress'; v.events.push(['Photos received', 'Tue 17 Nov · thank you']); }
    v.o = o; v.lines = c.lines || (o ? o.lines.map(l => ({ img: l.img, name: l.name, spec: l.spec, gross: l.gross })) : []);
    v.step = { info: 1, progress: v.events.some(e => /accepted/i.test(e[0])) ? 2 : 1, resolved: 4 }[v.state];
    // what is happening now and what comes next (the artifact's case timeline: done · now · still to come)
    v.now = { info: ['Waiting for your photos', 'Needed to assess the issue'], progress: v.step === 2 ? ['Arranging the solution', 'A reprint is being scheduled'] : ['Assessment', 'We decide within 2 working days'], resolved: null }[v.state];
    v.next = { info: [['Assessment', 'We decide once your photos are in'], ['Resolution', 'Reprint, refund or credit']], progress: v.step === 2 ? [['Resolved', 'Replacement dispatched']] : [['Resolution', 'Reprint, refund or credit']], resolved: [] }[v.state];
    if (c.created) { v.now = ['Reviewed by our team', 'Usually within one working day']; v.next = [['Assessment', 'We confirm the solution'], ['Resolved', c.fix || 'Reprint, refund or credit']]; }   // just sent
    v.status = COMPLAINT_STATES[v.state]; return v; });
}
const complaintOf = no => complaintList().find(c => c.no === no);
const complaintUrl = no => `complaint.html?c=${no}`;
const complaintSave = (no, state) => { complaintsDone[no] = state; try { localStorage.setItem('hp-complaints', JSON.stringify(complaintsDone)); } catch (e) {} window.dispatchEvent(new Event('hp-orders')); };
// the grey line of a case in the lists
const complaintNote = c => ({ info: 'We need a few photos from you', progress: c.now?.[0] || 'In progress', resolved: `Resolved ${c.events.at(-1)[1].split(' · ')[0]}` })[c.state];

// the grey line of a quote in the lists
const quoteNote = q => ({ ready: `${accEur(q.sum?.gross || 0)} · valid until ${q.valid}`, requested: 'We email you when it’s ready', accepted: `Became order #${q.order || '—'}`, expired: `Expired ${q.valid}`, declined: 'You declined it' })[q.state];
// the grey line of an invoice in the lists: what is open and when it is due, or when it was paid; a credit note: what it is for and its state
const invNote = v => v.credit ? `Credit note for ${v.credit} · ${v.state}` : v.open > .005 ? `${accEur(v.open)} open · due ${v.due}` : `Paid ${v.pays.at(-1)?.date || ''}`;
// All specifications of a product (the order page's fold): what you chose, as the PDP's option names; the quantity from the line
const SPECS = {
  'Folded Leaflets': [['Size', 'A4 landscape'], ['Pages', '4 (folded in half)'], ['Paper', 'Silk 170 gsm'], ['Printing', 'Double-sided, full colour']],
  'Standard Flyers': [['Size', 'A5 (148 × 210 mm)'], ['Paper', 'Gloss 170 gsm'], ['Printing', 'Double-sided, full colour']],
  'Classic Business Cards': [['Size', '85 × 55 mm'], ['Paper', 'Uncoated 400 gsm'], ['Finish', 'Matt laminated'], ['Printing', 'Double-sided, full colour'], ['Corners', 'Square']],
  'Posters': [['Size', 'A4 (210 × 297 mm)'], ['Paper', 'Gloss 170 gsm'], ['Printing', 'One-sided, full colour']],
  'Basic Cotton Bags': [['Colour', 'Natural'], ['Print area', 'Front, 25 × 30 cm'], ['Print colours', 'Full colour'], ['Handles', 'Long']],
  'Roller Banner': [['Size', '85 × 200 cm'], ['Stand', 'Premium, with carry bag'], ['Material', 'Polyester, blockout']],
  'Tote bags': [['Material', 'Natural cotton, 140 gsm'], ['Print', 'Bespoke, 1 colour']],
};
const specRows = l => [['Quantity', l.spec.split(' · ')[0]], ...(SPECS[l.name] || []), ['Delivery', 'Standard'], ['File check', 'Premium Check + Proof']];
// Questions about this order (the Help Centre's articles), by where it stands: max 4
const orderHelp = o => [
  ...(o.cancelled ? [['I have cancelled my order, why have I not received my refund?', 'i-have-cancelled-my-order-why-have-i-not-received-my-refund']] : []),
  ...(!o.cancelled && o.lines.some(l => l.proof && l.btns && l.step === 1) ? [['How do I approve my proof?', 'how-do-i-approve-my-proof'], ['What happens if I miss my proof approval deadline?', 'what-happens-if-i-miss-my-proof-approval-deadline']] : []),
  ...(!o.cancelled && o.lines.some(l => l.btns && l.step === 0) ? [['What file type should I use when uploading my design?', 'what-file-type-should-i-use-when-uploading-my-design']] : []),
  ...(o.pay && !o.paid ? [['How do I pay on invoice?', 'how-do-i-pay-on-invoice']] : []),
  ...(o.step === 3 ? [['How can I track my order?', 'how-can-i-track-my-order'], ['What should I do if my package hasn’t been delivered?', 'what-should-i-do-if-my-package-hasn-t-been-delivered']] : []),
  ...(o.step === 4 ? [['My order has been delivered damaged. What should I do?', 'my-order-has-been-delivered-damaged-what-should-i-do'], ['Downloading invoices & credit notes', 'how-do-i-download-my-invoices-and-credit-notes']] : []),
  ...(o.step < 2 && !o.cancelled ? [['Can I change my order?', 'can-i-change-my-order']] : []),
].slice(0, 4);
// a to-do's green button carries what to do as an icon (Cornel 2026-11-18: not in front of the block, in the button): € pay, eye proof, upload, wrench fix…
const btnIcon = n => n ? `<span class="material-symbols-rounded" aria-hidden="true">${n}</span>` : '';
const TASK_ICONS = { 'Review proof': 'visibility', 'Upload design': 'upload', 'Upload new design': 'upload', 'Upload new file': 'upload', 'Upload photos': 'photo_camera', 'Accept quote': 'check', 'View quote': 'request_quote' };
const proofUrl = (o, i) => `proof.html?o=${o.no}&l=${i}`;
const orderTitle = o => `#${o.no} · ${o.name}${o.lines.length > 1 ? ` (${o.lines.length} products)` : ''}`;
// the first photo, "+N" when the order has more products
const orderPhoto = o => `<span class="img${o.lines.length > 1 ? ' more' : ''}"><img src="assets/${o.lines[0].img}" alt="">${o.lines.length > 1 ? `<span class="art-count">+${o.lines.length - 1}</span>` : ''}</span>`;
const orderTracker = (step, err) => `<ol class="tracker">${ORDER_STEPS.map((s, k) => `<li class="${k < step ? 'done' : k === step ? (err ? 'err' : 'now') : ''}">${s}</li>`).join('')}</ol>`;

// ---------- What you did with your orders (prototype: kept in this browser, 'hp-orders') ----------
// Per order: your reference, paid, cancelled, and per product: approved (the proof) or uploaded (a new file). The orders above are rebuilt from it,
// so the Overview, Orders and the order page always show the same state.
ORDERS.forEach(o => { o.x = { art: 0, ship: 0, disc: 0, ...o.x }; o.lines.forEach(l => { l.gross = l.gross ?? r2(l.price * (1 + VAT_RATE)); l.price = vatSplit(l.gross).net; }); });   // price = excl. VAT, from the gross
const ORDERS_BASE = JSON.parse(JSON.stringify(ORDERS));
// Prototype switch (the Demo tab, ?new=1|0): a new customer, no orders yet, so every block shows its empty state
const NEW_CUSTOMER = (() => { const v = new URLSearchParams(location.search).get('new');
  try { if (v !== null) localStorage.setItem('hp-new-customer', v === '1' ? '1' : ''); return localStorage.getItem('hp-new-customer') === '1'; } catch (e) { return v === '1'; } })();
let ordersDone = {};
try { ordersDone = JSON.parse(localStorage.getItem('hp-orders')) || {}; } catch (e) {}
function applyOrders() {
  ORDERS.splice(0, ORDERS.length, ...ORDERS_BASE.map(base => {
    const o = JSON.parse(JSON.stringify(base)), d = ordersDone[o.no] || {};
    if (d.ref !== undefined) o.ref = d.ref;
    o.ship = { ...ADDR.ship, ...d.ship }; o.bill = { ...ADDR.bill, ...d.bill }; o.payer = d.payer;
    o.lines.forEach((l, i) => { const done = (d.lines || {})[i];
      if (done === 'approved') Object.assign(l, { step: 2, done: true, title: 'Proof approved', text: 'We print it next, exactly as you saw it.', btns: null, foot: null });
      else if (done) { const files = Array.isArray(done) ? done : [], names = [...new Set(files.map(f => f.name))];   // the uploaded files: the artwork replaces the photo, as in the cart
        Object.assign(l, { step: 1, err: false, done: true, files, title: `We’ve got your file${names.length > 1 ? 's' : ''}`, text: `${names.length > 1 ? names.length + ' files · we check them' : (names[0] || done) + ' · we check it'} and send you a proof`, btns: null,
          foot: 'We’re making your proof. Keep an eye on your email: it’s usually there <b>within 4 working hours</b>' }); } });   // waiting on us: the cream band (as order confirmed)
    const needs = o.lines.filter(l => l.btns && l.step < 2).length;
    o.step = Math.min(...o.lines.map(l => l.step));
    if (d.paid) o.paid = true;
    if (d.cancelled) Object.assign(o, { cancelled: true, status: ['', 'Cancelled'], sub: 'Cancelled · nothing to pay' });
    else if (o.pay && !o.paid) {}   // Payment due, as it was
    else if (needs) Object.assign(o, { status: ['act', 'Action needed'], sub: `${needs} product${needs > 1 ? 's need' : ' needs'} you` });
    else if (base.status[0] === 'act') Object.assign(o, { status: ['go', o.step >= 3 ? 'On its way' : 'In production'], sub: (d => `Estimated ${etaShort(etaDate(d))} — latest ${etaShort(etaLatest(d))}`)(o.lines.map(l => l.arrives).sort((a, b) => etaDate(b) - etaDate(a))[0]) });   // the last product's date
    return o;
  }));
  if (NEW_CUSTOMER) ORDERS.length = 0;
  // an open invoice = a payment to do on its order (Pay, the to-do, Payment due), as long as the order is not cancelled
  ORDERS.forEach(o => { const v = orderInvoice(o); if (!v || v.before < .005 || o.cancelled) return;
    o.pay = { amount: accEur(v.before), due: v.due, invoice: v.no };
    if (!o.paid && o.status[0] !== 'act') Object.assign(o, { status: ['act', 'Payment due'], sub: `${o.pay.amount} to pay · due ${v.due}` }); });
}
// The block that just changed lights up once on the order page (the green glow of order confirmed, .oc-new): set before the save
const flashLine = (no, li) => { try { sessionStorage.setItem('hp-flash', `${no}:${li}`); } catch (e) {} };
// what still waits on you in an order: the payment and every product with a proof, a design or a fix
const openTasks = o => o.cancelled ? 0 : (o.pay && !o.paid ? 1 : 0) + o.lines.filter(l => l.btns && l.step < 2).length;
function orderSave(no, change) {   // change the saved state of one order, rebuild, and let the page draw again (window 'hp-orders')
  const before = openTasks(orderOf(no));
  change(ordersDone[no] = ordersDone[no] || { lines: {} });
  try { localStorage.setItem('hp-orders', JSON.stringify(ordersDone)); } catch (e) {}
  applyOrders();
  if (before && !openTasks(orderOf(no)) && !orderOf(no).cancelled) try { sessionStorage.setItem('hp-yay', no); } catch (e) {}   // the last thing is done: the all-done popup (also after the proof page)
  window.dispatchEvent(new Event('hp-orders'));
}
// All done for an order (as order confirmed, the shared popup in app.js): a big check, confetti and one warm line.
// Only on the order page of that order (Cornel 2026-11-17); the proof page keeps it for the order page it goes to; elsewhere it is dropped.
function orderYay() {
  if (window.yayLater) return;
  let no = null; try { no = sessionStorage.getItem('hp-yay'); sessionStorage.removeItem('hp-yay'); } catch (e) {}
  const o = no && window.yayHere === no && orderOf(no); if (!o) return;
  // Say only what is true (Cornel): a new file is checked first and gets a new proof; the rest goes to print product by product, each when it is ready
  const name = deskUser?.first ? ', ' + deskUser.first.replace(/</g, '&lt;') : '', checking = o.lines.filter(l => l.done && l.step === 1).map(l => l.name);
  const dates = [...new Set(o.lines.map(l => l.arrives))].sort((a, b) => etaDate(a) - etaDate(b)).map(d => etaShort(etaDate(d)));
  const and = a => a.length > 1 ? a.slice(0, -1).join(', ') + ' and ' + a.at(-1) : a[0];
  setTimeout(() => allDonePopup(checking.length
    ? `<h2 id="yayTitle">Thanks${name}!</h2><p>Nothing more to do for now. We check your new file${checking.length > 1 ? 's' : ''} for ${and(checking)} and email you a new proof.</p>
      <button class="btn primary" type="button" data-close-sheet>Great, thanks!</button>`
    : `<h2 id="yayTitle">All done${name}!</h2><p>We’ve got everything we need for order #${o.no}. ${o.lines.length > 1 ? 'Each product goes' : 'It goes'} to print as soon as it’s ready${dates.length > 1 ? `; it all arrives between <b>${dates[0]}</b> and <b>${dates.at(-1)}</b>` : ` and arrives on <b>${dates[0]}</b>`}.</p>
      <button class="btn primary" type="button" data-close-sheet>Great, thanks!</button>`), 400);
}
window.addEventListener('hp-orders', orderYay);
document.addEventListener('DOMContentLoaded', orderYay);
applyOrders();
const orderOf = no => ORDERS.find(o => o.no === no);

// ---------- The popups (the standard sheet: a bottom sheet on mobile, a centred popup on desktop) ----------
const accSheet = (id, title, body, bar, list) => `<div class="sheet-layer" id="sheet-${id}" aria-hidden="true"><div class="sheet-overlay" data-close-sheet></div>
  <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="${id}Title"><div class="grab" data-grab><span></span></div>
    <div class="sheet-head"><h2 id="${id}Title">${title}</h2><button class="close" data-close-sheet aria-label="Close"><img src="assets/pdp/close.svg" alt=""></button></div>
    <div class="sheet-body">${list ? `<ul class="addr-list" id="${id}Body"></ul>` : `<div class="pad" id="${id}Body">${body}</div>`}</div>${bar ? `<div class="sheet-bar"><div class="bar-btns">${bar}</div></div>` : ''}</div></div>`;
document.body.insertAdjacentHTML('beforeend',
  accSheet('cancel', 'Cancel this order?', `<p class="up-intro" id="cancelIntro"></p><p class="q-hint">Why do you want to cancel?</p>
    <label class="field"><select id="cancelReason" required aria-label="Why do you want to cancel?"><option value="" selected disabled>Choose a reason</option>${['I ordered the wrong product or options', 'I need to change my design', 'I don’t need it any more', 'It takes too long', 'Something else']
      .map(r => `<option>${r}</option>`).join('')}</select></label>
    <label class="field"><textarea id="cancelNote" placeholder=" " maxlength="600" aria-label="Anything we can do better"></textarea><span class="fl">Anything we can do better? (optional)</span></label>`,
    '<button class="btn outline" type="button" data-close-sheet>Keep my order</button><button class="btn primary danger" type="button" data-act="cancel-yes" disabled>Yes, cancel it</button>') +
  accSheet('book', 'Your shipping addresses', '', '<button class="btn primary" type="button" data-act="book-use">Use for this order</button>', true) +
  accSheet('addr', 'Add shipping address', '', '<button class="btn primary" type="button" data-act="addr-save">Save and use for this order</button>') +
  accSheet('payer', 'Change who pays', `<p class="up-intro">We email the payment link to your colleague. They can pay without an account; you see it here once it’s paid.</p>
    <label class="field" data-field="payerName"><input name="payerName" placeholder=" " autocomplete="off" aria-label="Their name"><span class="fl">Their name</span></label>
    <label class="field" data-field="payerEmail"><input type="email" name="payerEmail" placeholder=" " autocomplete="off" aria-label="Their email address"><span class="fl">Their email address</span></label>`,
    '<button class="btn primary" type="button" data-act="payer-send">Send payment link</button>') +
  accSheet('note', 'Leave a note for our team', `<p class="up-intro">A question or a change for this proof? Our team reads it and gets back to you by email.</p>
    <label class="field"><textarea id="noteInput" placeholder=" " maxlength="600" aria-label="Your note"></textarea><span class="fl">Your note</span></label>`, '<button class="btn primary" type="button" data-act="note-send">Send note</button>') +
  accSheet('ref', 'Your reference', `<p class="up-intro">Your purchase order number or a name for this order: it shows on the invoice and in your orders.</p>
    <label class="field"><input id="refInput" placeholder=" " maxlength="40" aria-label="Your reference"><span class="fl">Your reference</span></label>`, '<button class="btn primary" type="button" data-act="ref-save">Save</button>'));

// ---------- The actions: a button with data-act + data-o (the order) + data-l (the product) ----------
let accCur = null;   // { o, l } the popup is about
const PRODUCT_PAGES = { 'Classic Business Cards': '#classic-business-cards', 'Standard Flyers': 'product.html?p=standard-flyers', 'Roller Banner': 'product.html?p=roller-banners', 'Basic Cotton Bags': 'product.html?p=basic-cotton-bags' };
function reorder(lines, no) {   // the same products, the same specs and design, in the cart; then to the cart
  setCart([...getCart(), ...lines.map(l => { const qty = parseInt(l.spec.replace(/,/g, '')) || 1;
    return { name: l.name, img: 'assets/' + l.img, bg: 'var(--light-grey)', href: PRODUCT_PAGES[l.name] || '#' + l.name.toLowerCase().replace(/\W+/g, '-'), qty,
      delivery: 'Standard', arrives: 'Tue 24 Nov', options: l.spec.split(' · ').slice(1).join(' · '), design: `Same design as order #${no}`, designType: 'file', price: l.price }; })]);
  toastOnNextPage(lines.length > 1 ? `${lines.length} products of order #${no} are in your cart` : `${lines[0].name} is in your cart`);
  location.href = 'cart.html';
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const act = b.dataset.act, o = b.dataset.o ? orderOf(b.dataset.o) : accCur?.o, li = b.dataset.o ? (b.dataset.l !== undefined ? +b.dataset.l : undefined) : accCur?.l, l = o?.lines[li];
  if (b.dataset.o) accCur = { o, l: li };
  if (act === 'upload') {
    const changed = !!l.files?.length;   // Change: the popup opens with the files already in
    openUpload({ name: l.name, img: 'assets/' + l.img, files: l.files || [], onAdd: files => { flashLine(o.no, li); orderSave(o.no, d => d.lines[li] = files); showToast(changed ? `Your files for ${l.name} are updated` : `Added to your ${l.name}`); } }); }
  if (act === 'art') openArt(l.files?.length ? l.files : [{ thumb: `assets/proofs/${l.proof}.png`, name: `Proof · ${l.name}`, page: l.spec }]);   // your files or the proof big, as in the cart
  if (act === 'pay') { flashLine(o.no, 'pay'); orderSave(o.no, d => d.paid = true); showToast('Payment received, thank you!'); }   // prototype: paying here = the payment link (as order confirmed)
  if (act === 'track') showToast(`Opens DPD’s tracking page for HP${o.no}IE in a new tab (the live shop)`);   // Track parcel = the carrier's own tracking page (Cornel); the prototype keeps links local
  if (act === 'cancel') {   // a reason first (a dropdown, Cornel 11-17), then Yes works; an extra line is optional
    document.getElementById('cancelIntro').textContent = `Order #${o.no}: ${o.lines.length > 1 ? `all ${o.lines.length} products stop` : 'it stops'} before we print. You pay nothing.`;
    document.getElementById('cancelReason').value = ''; document.getElementById('cancelNote').value = '';
    document.querySelector('[data-act="cancel-yes"]').disabled = true; openSheet('cancel'); }
  if (act === 'cancel-yes') { const r = document.getElementById('cancelReason').value; if (!r) return;
    closeSheet(); orderSave(o.no, d => { d.cancelled = true; d.cancelReason = r; });   // no thank-you: the same popup, calm, with our team (Cornel 11-17)
    setTimeout(() => allDonePopup(`<h2 id="yayTitle">Your order is cancelled</h2><p>Sorry to see order #${o.no} go. We stopped it before printing, so you pay nothing.</p>
      <div class="oc-team"><span class="faces"><img src="assets/help/team/saskia.webp" alt=""><img src="assets/help/team/timo.webp" alt=""><img src="assets/help/team/karen.webp" alt=""></span><span>Any questions? Our team is ready to help. <a href="#chat">Start chat</a></span></div>
      <button class="btn primary" type="button" data-close-sheet>Close</button>`, true), 400); }
  if (act === 'addr' || act === 'book-pick') {   // Change: the address book (the checkout's sheet), the order's address chosen; tap = choose, the button confirms
    if (act === 'addr') { accCur.kind = b.dataset.kind; accCur.pick = null; }
    else accCur.pick = b.dataset.pick;
    const k = accCur.kind, cur = o[k], esc = t => String(t || '').replace(/</g, '&lt;');
    const on = a => accCur.pick ? a.id === accCur.pick : a.address1 === cur.street.split(', ')[0] && a.eircode === cur.code;
    document.getElementById('bookTitle').textContent = k === 'ship' ? 'Your shipping addresses' : 'Your billing address';
    document.getElementById('bookBody').innerHTML = bookOf().map(a => `<li class="${on(a) ? 'on' : ''}" aria-checked="${on(a)}"><button type="button" class="ap-pick" data-act="book-pick" data-pick="${a.id}"><span class="radio" aria-hidden="true"></span>
        <span class="t"><b>${esc(a.label)}</b>${bookLines(a).map(l => `<span>${esc(l)}</span>`).join('')}${a.isDefault ? '<span class="badge neutral co-badge">Default</span>' : ''}</span></button></li>`).join('')
      + '<li class="ap-add"><button type="button" class="ap-pick" data-act="addr-new"><span class="material-symbols-rounded" aria-hidden="true">add</span>New address</button></li>';
    if (act === 'addr') openSheet('book'); }
  if (act === 'book-use') { const a = bookOf().find(x => x.id === accCur.pick), k = accCur.kind; closeSheet(); if (!a) return;   // nothing new tapped: as it was
    orderSave(o.no, d => d[k] = bookToOrder(a, o[k])); showToast(k === 'ship' ? `We ship order #${o.no} to ${a.label}` : `${a.label} is on the invoice of order #${o.no}`); }
  if (act === 'addr-new') {   // a new address: into your address book and used for this order
    const k = accCur.kind, f = (name, label, auto, opt) => `<label class="field" data-field="${name}"><input name="${name}" placeholder=" " autocomplete="${auto}" aria-label="${label}"><span class="fl">${label}${opt ? ' (optional)' : ''}</span></label>`;
    document.getElementById('addrTitle').textContent = k === 'ship' ? 'Add shipping address' : 'Add billing address';
    document.getElementById('addrBody').innerHTML = `<p class="up-intro">It’s added to your addresses and used for order #${o.no}.</p>
      ${f('name', 'Full name', 'name')}${f('company', 'Company name', 'organization', 1)}
      <label class="field"><input value="Ireland" readonly aria-label="Country" placeholder=" " tabindex="-1"><span class="fl">Country/Region</span></label>
      ${f('street', 'Address', 'address-line1')}<div class="co-row">${f('code', 'Eircode', 'postal-code')}${f('town', 'Town / city', 'address-level2')}</div>`;
    closeSheet(); setTimeout(() => openSheet('addr'), 300); }
  if (act === 'addr-save') { const body = document.getElementById('addrBody'), v = n => body.querySelector(`[name=${n}]`)?.value.trim();
    const errs = [['name', v('name'), 'Fill in a name'], ['street', v('street'), 'Fill in the address'], ['code', EIRCODE.test(v('code')), 'Enter a valid Eircode'], ['town', v('town'), 'Fill in the town or city']];
    errs.forEach(([n, ok, msg]) => setFieldError(body.querySelector(`[data-field=${n}]`), ok ? '' : msg));
    const bad = errs.find(([, ok]) => !ok); if (bad) { body.querySelector(`[name=${bad[0]}]`).focus(); return; }
    const k = accCur.kind, a = { id: 'a' + Date.now(), label: v('street'), first: v('name'), last: '', company: v('company'), address1: v('street'), eircode: v('code').toUpperCase(), town: v('town') };
    try { localStorage.setItem('hp-addresses', JSON.stringify([...bookOf(), a])); } catch (e) {}   // the checkout's address book
    closeSheet(); orderSave(o.no, d => d[k] = bookToOrder(a, o[k])); showToast(k === 'ship' ? `We ship order #${o.no} to the new address` : `The new billing address is on the invoice of order #${o.no}`); }
  if (act === 'paylink') showToast(`We emailed the payment link again to ${o.payer?.email || deskUser?.email || 'you'}`);
  if (act === 'payer') { document.querySelectorAll('#payerBody input').forEach(i => { i.value = ''; setFieldError(i.closest('.field'), ''); }); openSheet('payer'); setTimeout(() => document.querySelector('[name=payerName]').focus(), 300); }
  if (act === 'payer-send') { const body = document.getElementById('payerBody'), name = body.querySelector('[name=payerName]').value.trim(), email = body.querySelector('[name=payerEmail]').value.trim();
    setFieldError(body.querySelector('[data-field=payerName]'), name ? '' : 'Fill in their name'); setFieldError(body.querySelector('[data-field=payerEmail]'), /^\S+@\S+\.\S+$/.test(email) ? '' : 'Enter a valid email address');
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) return;
    closeSheet(); orderSave(o.no, d => d.payer = { name, email }); showToast(`We emailed the payment link to ${name}`); }
  if (act === 'invoice') showToast(`${b.dataset.doc} is downloading (PDF, prototype)`);
  if (act === 'ref') { const inp = document.getElementById('refInput'); inp.value = o.ref || ''; openSheet('ref'); setTimeout(() => inp.focus(), 300); }
  if (act === 'ref-save') { const v = document.getElementById('refInput').value.trim(); closeSheet(); orderSave(o.no, d => d.ref = v); showToast(v ? 'Your reference is saved' : 'Your reference is removed'); }
  if (act === 'note') { document.getElementById('noteInput').value = ''; openSheet('note'); setTimeout(() => document.getElementById('noteInput').focus(), 300); }
  if (act === 'note-send') { const v = document.getElementById('noteInput').value.trim(); if (!v) { document.getElementById('noteInput').focus(); return; }
    closeSheet(); showToast('Thanks! Your note is with our team, we reply by email'); }
  if (act === 'reorder') reorder(l ? [l] : o.lines, o.no);   // a product, or the whole order
  if (act === 'complaint-photos') { const c = complaintOf(b.dataset.c), changed = !!c.photos?.length;   // the upload popup for the case's photos (Change: the photos already in)
    openUpload({ photo: true, name: `Complaint ${c.no}`, img: 'assets/' + c.lines[0].img, files: c.photos || [], onAdd: files => { complaintSave(c.no, files); showToast(changed ? 'Your photos are updated' : 'Thanks! Your photos are with our team, we assess your case now'); } }); }
  if (act === 'complaint-art') openArt(complaintOf(b.dataset.c).photos);   // your photos big, as the artwork in the cart
  if (act === 'quote-accept') { quoteSave(b.dataset.q, 'accepted'); showToast('Quote accepted: we turn it into an order and email you the confirmation'); }
  if (act === 'quote-decline') { quoteSave(b.dataset.q, 'declined'); showToast('Quote declined'); }
  if (act === 'quote-ask') { const t = document.getElementById('askInput'); if (!t.value.trim()) { t.focus(); return; }   // the confirmation replaces the form (the wishes artifact)
    t.closest('.ask-card').innerHTML = '<p class="dash-empty"><span><b>Message sent to our team.</b> Thanks! One of our agents replies by email, usually within one working day.</span></p>'; }
  if (act === 'soon') showToast(`${b.dataset.what || 'This page'} comes next in the prototype`);
  if (act === 'download') showToast('Your proof is downloading (prototype)');
});

// The account pages still to build: a toast instead of nothing (the account menu, Invoices, Quotes…)
const SOON = { '#addresses': 'The addresses page' };
document.addEventListener('click', e => { const a = e.target.closest('a[href^="#"]'), what = a && SOON[a.getAttribute('href')];
  if (what) { e.preventDefault(); showToast(`${what} comes next in the prototype`); } });

// Prototype: back to the start (every to-do open again). The left-edge tab on the account pages (the prototype switches' look), or ?reset in the URL
const resetDemo = () => { try { localStorage.removeItem('hp-orders'); localStorage.removeItem('hp-quotes'); localStorage.removeItem('hp-complaints'); sessionStorage.removeItem('hp-yay'); } catch (e) {} };
if (new URLSearchParams(location.search).has('reset')) { resetDemo(); history.replaceState(null, '', location.pathname + location.search.replace(/[?&]reset(=[^&]*)?/, '').replace(/^&/, '?')); location.reload(); }
document.body.insertAdjacentHTML('beforeend', `<div class="flow-switch demo-reset" role="group" aria-label="Prototype"><span>Demo</span><button type="button" data-demo="reset" title="Reset the demo: every to-do open again" aria-label="Reset the demo">↺</button>
  <button type="button" data-demo="new" aria-pressed="${NEW_CUSTOMER}" title="New customer: no orders yet (the empty states)" aria-label="New customer">N</button></div>`);
document.querySelector('[data-demo=reset]').addEventListener('click', () => { resetDemo(); toastOnNextPage('The demo is back at the start'); location.reload(); });
document.querySelector('[data-demo=new]').addEventListener('click', () => { const u = new URL(location.href); u.searchParams.set('new', NEW_CUSTOMER ? '0' : '1');   // in the URL too: a copied link opens this version
  toastOnNextPage(NEW_CUSTOMER ? 'Back to a customer with orders' : 'A new customer: no orders yet'); location.href = (/order\.html|proof\.html/.test(u.pathname) && !NEW_CUSTOMER) ? 'orders.html?new=1' : u.href; });
document.getElementById('cancelReason').addEventListener('change', e => document.querySelector('[data-act="cancel-yes"]').disabled = !e.target.value);   // a reason chosen: Yes works
