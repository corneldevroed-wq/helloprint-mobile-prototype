// My account (account.html, orders.html, order.html; Cornel 2026-11-17): the orders, what you did with them (kept in this browser), the popups and actions.
// An order: number, name, your reference, placed, the line under it in the list, its status ([class, label]: act = needs you, go = on its way),
// the tracker step (0 Artwork · 1 Proof · 2 Printing · 3 Delivery · 4 delivered), a payment to do, a complaint, and its products.
// A product: photo, name, specs, price excl. VAT, its delivery date (arrives; delivered: the day it came), its step, err (a fix needed), what happens now (title + line), the buttons (first = primary) and the deadline band.
const ORDER_STEPS = ['Artwork', 'Proof', 'Printing', 'Delivery'];
const KEEP = 'to keep your date: Estimated Tue 24 Nov — latest Wed 25 Nov';
const ORDERS = [
  { no: '8847305', name: 'Launch kit', ref: 'PO-2026-118', placed: 'Mon 16 Nov', sub: '3 products need you', status: ['act', 'Action needed'], step: 0, lines: [
    { img: 'p2.png', name: 'Folded Leaflets', spec: '250 pcs · A4 landscape · 4 pages · Silk', price: 95.93, arrives: 'Tue 24 Nov', step: 1, proof: 'leaflet', title: 'Your proof is ready', text: 'Check it and approve it, or upload a new design on the proof page.', btns: ['Review proof'], foot: `Approve by <b>14:00 on Wed 18 Nov</b> ${KEEP}` },
    { img: 'p3.png', name: 'Standard Flyers', spec: '1,000 pcs · A5 · Gloss', price: 43.90, arrives: 'Tue 24 Nov', step: 0, title: 'Upload your design', text: 'We need your artwork to start.', btns: ['Upload design'], foot: `Upload by <b>14:00 on Wed 18 Nov</b> ${KEEP}` },
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · Matt laminated · Double-sided', price: 25.61, arrives: 'Tue 24 Nov', step: 0, err: true, title: 'Small fix needed', text: 'The text sits too close to the cut edge. Please upload a corrected file.', btns: ['Upload new file'], foot: `Upload by <b>14:00 on Wed 18 Nov</b> ${KEEP}` },
    { img: 'p5.png', name: 'Posters', spec: '50 pcs · A4 · Gloss', price: 17.89, arrives: 'Fri 27 Nov', step: 1, proof: 'poster-a4', title: 'Your proof is ready', text: 'The deadline has passed (14:00 Mon 16 Nov): approve now for Estimated Fri 27 Nov — latest Mon 30 Nov.', btns: ['Review proof'] },
    { img: 'p6.png', name: 'Basic Cotton Bags', spec: '100 pcs · Natural · Full colour', price: 195.12, arrives: 'Thu 26 Nov', step: 2, title: 'Printing has started', text: 'We print it now and ship it as soon as it’s ready' },
  ] },
  { no: '8846210', name: 'Event pack', ref: 'EVENT-NOV', placed: 'Fri 13 Nov', sub: 'Estimated Fri 20 Nov — latest Mon 23 Nov', status: ['go', 'On its way'], step: 3, inv: { no: 'INV-2026-4490', paid: 'Fri 13 Nov' }, lines: [
    { img: 'products/roller-banner.webp', name: 'Roller Banner', spec: '1 pc · 85 × 200 cm · Premium', price: 59.00, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8846210IE', btns: ['Track parcel'] },
    { img: 'p4.png', name: 'Classic Business Cards', spec: '250 pcs · Matt', price: 18.89, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8846210IE', btns: ['Track parcel'] },
    { img: 'p3.png', name: 'Standard Flyers', spec: '500 pcs · A5 · Gloss', price: 26.00, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8846210IE', btns: ['Track parcel'] },
  ] },
  { no: '8842119', name: 'Classic Business Cards', ref: 'PO-77120', placed: 'Mon 9 Nov', sub: '€160.20 to pay · due Tue 24 Nov', status: ['act', 'Payment due'], step: 3, pay: { amount: '€160.20', due: 'Tue 24 Nov', invoice: 'INV-2026-4471' }, inv: { no: 'INV-2026-4471', open: '€160.20', due: 'Tue 24 Nov' }, lines: [
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · Matt laminated · Double-sided', price: 137.56, arrives: 'Thu 19 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · tracking HP8842119IE', btns: ['Track parcel'] },
  ] },
  { no: '8839004', name: 'Classic Business Cards', ref: '', placed: 'Fri 6 Nov', sub: 'Your proof is ready', status: ['act', 'Approve proof'], step: 1, lines: [
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · 85 × 55 mm · Double-sided · Matt', price: 95.93, arrives: 'Mon 23 Nov', step: 1, proof: 'business-cards', title: 'Your proof is ready', text: 'Check it and approve it, or upload a new design on the proof page.', btns: ['Review proof'], foot: 'Approve by <b>14:00 on Wed 18 Nov</b> to keep your date: Estimated Mon 23 Nov — latest Tue 24 Nov' },
  ] },
  { no: '8830771', name: 'Standard Flyers', ref: 'PO-76982', placed: 'Tue 3 Nov', sub: 'Estimated Tue 24 Nov — latest Wed 25 Nov', status: ['go', 'In production'], step: 2, lines: [
    { img: 'p3.png', name: 'Standard Flyers', spec: '2,500 pcs · A5 · Gloss', price: 172.76, arrives: 'Tue 24 Nov', step: 2, title: 'Printing has started', text: 'We print it now and ship it as soon as it’s ready' },
  ] },
  { no: '8825510', name: 'Roller Banner', ref: '', placed: 'Tue 20 Oct', sub: 'Delivered Mon 26 Oct', status: ['', 'Delivered'], step: 4, complaint: 'CMP-1042', inv: { no: 'INV-2026-4188', paid: 'Thu 22 Oct' }, lines: [
    { img: 'products/roller-banner.webp', name: 'Roller Banner', spec: '1 pc · 85 × 200 cm · Premium', price: 78.05, arrives: 'Mon 26 Oct', step: 4, title: 'Delivered Mon 26 Oct', text: 'Complaint CMP-1042 in progress: damaged on arrival.', btns: ['View complaint'] },
  ] },
  { no: '8814402', name: 'Tote bags', ref: 'MERCH-Q4', placed: 'Mon 12 Oct', sub: 'From quote QT-5502 · delivered Thu 22 Oct', status: ['', 'Delivered'], step: 4, inv: { no: 'INV-2026-4120', paid: 'Mon 12 Oct' }, lines: [
    { img: 'p6.png', name: 'Tote bags', spec: '1,000 pcs · Natural cotton · Bespoke print', price: 341.46, arrives: 'Thu 22 Oct', step: 4, title: 'Delivered Thu 22 Oct', text: 'Signed for by L. Pijffers' },
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
// the totals as an invoice (as the checkout): products, the check, shipping free, VAT 23%
const orderSum = o => { const goods = o.lines.reduce((s, l) => s + l.price, 0), check = 12.20, sub = goods + check, vat = Math.round(sub * VAT_RATE * 100) / 100; return { goods, check, sub, vat, total: sub + vat }; };
const proofUrl = (o, i) => `proof.html?o=${o.no}&l=${i}`;
const orderTitle = o => `#${o.no} · ${o.name}${o.lines.length > 1 ? ` (${o.lines.length} products)` : ''}`;
// the first photo, "+N" when the order has more products
const orderPhoto = o => `<span class="img${o.lines.length > 1 ? ' more' : ''}"><img src="assets/${o.lines[0].img}" alt="">${o.lines.length > 1 ? `<span class="art-count">+${o.lines.length - 1}</span>` : ''}</span>`;
const orderTracker = (step, err) => `<ol class="tracker">${ORDER_STEPS.map((s, k) => `<li class="${k < step ? 'done' : k === step ? (err ? 'err' : 'now') : ''}">${s}</li>`).join('')}</ol>`;

// ---------- What you did with your orders (prototype: kept in this browser, 'hp-orders') ----------
// Per order: your reference, paid, cancelled, and per product: approved (the proof) or uploaded (a new file). The orders above are rebuilt from it,
// so the Overview, Orders and the order page always show the same state.
const ORDERS_BASE = JSON.parse(JSON.stringify(ORDERS));
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
    if (d.paid) { o.paid = true; if (o.inv) o.inv = { no: o.inv.no, paid: 'Tue 17 Nov' }; }
    if (d.cancelled) Object.assign(o, { cancelled: true, status: ['', 'Cancelled'], sub: 'Cancelled · nothing to pay' });
    else if (o.pay && !o.paid) {}   // Payment due, as it was
    else if (needs) Object.assign(o, { status: ['act', 'Action needed'], sub: `${needs} product${needs > 1 ? 's need' : ' needs'} you` });
    else if (base.status[0] === 'act') Object.assign(o, { status: ['go', o.step >= 3 ? 'On its way' : 'In production'], sub: (d => `Estimated ${etaShort(etaDate(d))} — latest ${etaShort(etaLatest(d))}`)(o.lines.map(l => l.arrives).sort((a, b) => etaDate(b) - etaDate(a))[0]) });   // the last product's date
    return o;
  }));
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
  if (act === 'invoice') showToast(`Invoice ${o.inv.no} is downloading (PDF, prototype)`);
  if (act === 'ref') { const inp = document.getElementById('refInput'); inp.value = o.ref || ''; openSheet('ref'); setTimeout(() => inp.focus(), 300); }
  if (act === 'ref-save') { const v = document.getElementById('refInput').value.trim(); closeSheet(); orderSave(o.no, d => d.ref = v); showToast(v ? 'Your reference is saved' : 'Your reference is removed'); }
  if (act === 'note') { document.getElementById('noteInput').value = ''; openSheet('note'); setTimeout(() => document.getElementById('noteInput').focus(), 300); }
  if (act === 'note-send') { const v = document.getElementById('noteInput').value.trim(); if (!v) { document.getElementById('noteInput').focus(); return; }
    closeSheet(); showToast('Thanks! Your note is with our team, we reply by email'); }
  if (act === 'reorder') reorder(l ? [l] : o.lines, o.no);   // a product, or the whole order
  if (act === 'soon') showToast(`${b.dataset.what || 'This page'} comes next in the prototype`);
  if (act === 'download') showToast('Your proof is downloading (prototype)');
});

// The account pages still to build: a toast instead of nothing (the account menu, Invoices, Quotes…)
const SOON = { '#invoices': 'The invoices page', '#quotes': 'The quotes page', '#complaints': 'The complaints page', '#personal-details': 'Personal details', '#addresses': 'The addresses page' };
document.addEventListener('click', e => { const a = e.target.closest('a[href^="#"]'), what = a && SOON[a.getAttribute('href')];
  if (what) { e.preventDefault(); showToast(`${what} comes next in the prototype`); } });

// Prototype: back to the start (every to-do open again). The left-edge tab on the account pages (the prototype switches' look), or ?reset in the URL
const resetDemo = () => { try { localStorage.removeItem('hp-orders'); sessionStorage.removeItem('hp-yay'); } catch (e) {} };
if (new URLSearchParams(location.search).has('reset')) { resetDemo(); history.replaceState(null, '', location.pathname + location.search.replace(/[?&]reset(=[^&]*)?/, '').replace(/^&/, '?')); location.reload(); }
document.body.insertAdjacentHTML('beforeend', '<div class="flow-switch demo-reset" role="group" aria-label="Prototype"><span>Demo</span><button type="button" title="Reset the demo: every to-do open again" aria-label="Reset the demo">↺</button></div>');
document.querySelector('.demo-reset button').addEventListener('click', () => { resetDemo(); toastOnNextPage('The demo is back at the start'); location.reload(); });
document.getElementById('cancelReason').addEventListener('change', e => document.querySelector('[data-act="cancel-yes"]').disabled = !e.target.value);   // a reason chosen: Yes works
