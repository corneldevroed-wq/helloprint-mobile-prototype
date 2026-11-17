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
    { img: 'p6.png', name: 'Basic Cotton Bags', spec: '100 pcs · Natural · Full colour', price: 195.12, arrives: 'Thu 26 Nov', step: 2, title: 'Printing has started', text: 'Estimated Thu 26 Nov — latest Fri 27 Nov' },
  ] },
  { no: '8846210', name: 'Event pack', ref: 'EVENT-NOV', placed: 'Fri 13 Nov', sub: 'Estimated Fri 20 Nov — latest Mon 23 Nov', status: ['go', 'On its way'], step: 3, lines: [
    { img: 'products/roller-banner.webp', name: 'Roller Banner', spec: '1 pc · 85 × 200 cm · Premium', price: 59.00, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · estimated Fri 20 Nov — latest Mon 23 Nov', btns: ['Track parcel'] },
    { img: 'p4.png', name: 'Classic Business Cards', spec: '250 pcs · Matt', price: 18.89, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · estimated Fri 20 Nov — latest Mon 23 Nov', btns: ['Track parcel'] },
    { img: 'p3.png', name: 'Standard Flyers', spec: '500 pcs · A5 · Gloss', price: 26.00, arrives: 'Fri 20 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · estimated Fri 20 Nov — latest Mon 23 Nov', btns: ['Track parcel'] },
  ] },
  { no: '8842119', name: 'Classic Business Cards', ref: 'PO-77120', placed: 'Mon 9 Nov', sub: '€160.20 to pay · due Tue 24 Nov', status: ['act', 'Payment due'], step: 3, pay: { amount: '€160.20', due: 'Tue 24 Nov', invoice: 'INV-2026-4471' }, lines: [
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · Matt laminated · Double-sided', price: 137.56, arrives: 'Thu 19 Nov', step: 3, title: 'On its way', text: 'DPD Ireland · estimated Thu 19 Nov — latest Fri 20 Nov', btns: ['Track parcel'] },
  ] },
  { no: '8839004', name: 'Classic Business Cards', ref: '', placed: 'Fri 6 Nov', sub: 'Your proof is ready', status: ['act', 'Approve proof'], step: 1, lines: [
    { img: 'p4.png', name: 'Classic Business Cards', spec: '500 pcs · 85 × 55 mm · Double-sided · Matt', price: 95.93, arrives: 'Mon 23 Nov', step: 1, proof: 'business-cards', title: 'Your proof is ready', text: 'Check it and approve it, or upload a new design on the proof page.', btns: ['Review proof'], foot: 'Approve by <b>14:00 on Wed 18 Nov</b> to keep your date: Estimated Mon 23 Nov — latest Tue 24 Nov' },
  ] },
  { no: '8830771', name: 'Standard Flyers', ref: 'PO-76982', placed: 'Tue 3 Nov', sub: 'Estimated Tue 24 Nov — latest Wed 25 Nov', status: ['go', 'In production'], step: 2, lines: [
    { img: 'p3.png', name: 'Standard Flyers', spec: '2,500 pcs · A5 · Gloss', price: 172.76, arrives: 'Tue 24 Nov', step: 2, title: 'Printing has started', text: 'Estimated Tue 24 Nov — latest Wed 25 Nov' },
  ] },
  { no: '8825510', name: 'Roller Banner', ref: '', placed: 'Tue 20 Oct', sub: 'Delivered Mon 26 Oct', status: ['', 'Delivered'], step: 4, complaint: 'CMP-1042', lines: [
    { img: 'products/roller-banner.webp', name: 'Roller Banner', spec: '1 pc · 85 × 200 cm · Premium', price: 78.05, arrives: 'Mon 26 Oct', step: 4, title: 'Delivered Mon 26 Oct', text: 'Complaint CMP-1042 in progress: damaged on arrival.', btns: ['View complaint'] },
  ] },
  { no: '8814402', name: 'Tote bags', ref: 'MERCH-Q4', placed: 'Mon 12 Oct', sub: 'From quote QT-5502 · delivered Thu 22 Oct', status: ['', 'Delivered'], step: 4, lines: [
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
    o.lines.forEach((l, i) => { const done = (d.lines || {})[i];
      if (done === 'approved') Object.assign(l, { step: 2, done: true, title: 'Proof approved', text: 'We print it next, exactly as you saw it.', btns: null, foot: null });
      else if (done) { const files = Array.isArray(done) ? done : [], names = [...new Set(files.map(f => f.name))];   // the uploaded files: the artwork replaces the photo, as in the cart
        Object.assign(l, { step: 1, err: false, done: true, files, title: `We’ve got your file${names.length > 1 ? 's' : ''}`, text: `${names.length > 1 ? names.length + ' files · we check them' : (names[0] || done) + ' · we check it'} and send you a proof`, btns: null, foot: null }); } });
    const needs = o.lines.filter(l => l.btns && l.step < 2).length;
    o.step = Math.min(...o.lines.map(l => l.step));
    if (d.paid) o.paid = true;
    if (d.cancelled) Object.assign(o, { cancelled: true, status: ['', 'Cancelled'], sub: 'Cancelled · nothing to pay' });
    else if (o.pay && !o.paid) {}   // Payment due, as it was
    else if (needs) Object.assign(o, { status: ['act', 'Action needed'], sub: `${needs} product${needs > 1 ? 's need' : ' needs'} you` });
    else if (base.status[0] === 'act') Object.assign(o, { status: ['go', o.step >= 3 ? 'On its way' : 'In production'], sub: o.lines.find(l => /Estimated/.test(l.text))?.text.replace(/^.*?(Estimated)/, '$1') || 'Estimated Tue 24 Nov — latest Wed 25 Nov' });
    return o;
  }));
}
// what still waits on you in an order: the payment and every product with a proof, a design or a fix
const openTasks = o => o.cancelled ? 0 : (o.pay && !o.paid ? 1 : 0) + o.lines.filter(l => l.btns && l.step < 2).length;
function orderSave(no, change) {   // change the saved state of one order, rebuild, and let the page draw again (window 'hp-orders')
  const before = openTasks(orderOf(no));
  change(ordersDone[no] = ordersDone[no] || { lines: {} });
  try { localStorage.setItem('hp-orders', JSON.stringify(ordersDone)); } catch (e) {}
  applyOrders();
  if (before && !openTasks(orderOf(no))) try { sessionStorage.setItem('hp-yay', no); } catch (e) {}   // the last thing is done: the all-done popup (also after the proof page)
  window.dispatchEvent(new Event('hp-orders'));
}
// All done for an order (as order confirmed, the shared popup in app.js): a big check, confetti and one warm line.
// Only on the order page of that order (Cornel 2026-11-17); the proof page keeps it for the order page it goes to; elsewhere it is dropped.
function orderYay() {
  if (window.yayLater) return;
  let no = null; try { no = sessionStorage.getItem('hp-yay'); sessionStorage.removeItem('hp-yay'); } catch (e) {}
  const o = no && window.yayHere === no && orderOf(no); if (!o) return;
  const dates = [...new Set(o.lines.map(l => l.arrives))].sort((a, b) => etaDate(a) - etaDate(b)).map(d => etaShort(etaDate(d)));
  setTimeout(() => allDonePopup(`<h2 id="yayTitle">All done${deskUser?.first ? ', ' + deskUser.first.replace(/</g, '&lt;') : ''}!</h2>
    <p>We’ve got everything we need for order #${o.no}. It goes into production and arrives ${dates.length > 1 ? `between <b>${dates[0]}</b> and <b>${dates.at(-1)}</b>` : `on <b>${dates[0]}</b>`}.</p>
    <button class="btn primary" type="button" data-close-sheet>Great, thanks!</button>`), 400);
}
window.addEventListener('hp-orders', orderYay);
document.addEventListener('DOMContentLoaded', orderYay);
applyOrders();
const orderOf = no => ORDERS.find(o => o.no === no);

// ---------- The popups (the standard sheet: a bottom sheet on mobile, a centred popup on desktop) ----------
const accSheet = (id, title, body, bar) => `<div class="sheet-layer" id="sheet-${id}" aria-hidden="true"><div class="sheet-overlay" data-close-sheet></div>
  <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="${id}Title"><div class="grab" data-grab><span></span></div>
    <div class="sheet-head"><h2 id="${id}Title">${title}</h2><button class="close" data-close-sheet aria-label="Close"><img src="assets/pdp/close.svg" alt=""></button></div>
    <div class="sheet-body"><div class="pad" id="${id}Body">${body}</div></div>${bar ? `<div class="sheet-bar"><div class="bar-btns">${bar}</div></div>` : ''}</div></div>`;
document.body.insertAdjacentHTML('beforeend',
  accSheet('track', 'Track your parcel', '') +
  accSheet('cancel', 'Cancel this order?', '', '<button class="btn outline" type="button" data-close-sheet>Keep my order</button><button class="btn primary" type="button" data-act="cancel-yes">Yes, cancel it</button>') +
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
    openUpload({ name: l.name, img: 'assets/' + l.img, files: l.files || [], onAdd: files => { orderSave(o.no, d => d.lines[li] = files); showToast(changed ? `Your files for ${l.name} are updated` : `Added to your ${l.name}`); } }); }
  if (act === 'art') openArt(l.files?.length ? l.files : [{ thumb: `assets/proofs/${l.proof}.png`, name: `Proof · ${l.name}`, page: l.spec }]);   // your files or the proof big, as in the cart
  if (act === 'pay') { orderSave(o.no, d => d.paid = true); showToast('Payment received, thank you!'); }   // prototype: paying here = the payment link (as order confirmed)
  if (act === 'track') {
    document.getElementById('trackBody').innerHTML = `<p class="up-intro"><b>${(t => t ? t[0].toUpperCase() + t.slice(1) : 'On its way')(l.text.split(' · ')[1])}</b><br>DPD Ireland · tracking HP${o.no}IE</p>
      <div class="dash-card">${[['Out for delivery', 'Today · Dublin', 'go'], ['At the DPD depot', 'Wed 18 Nov · 21:40 · Athlone'], ['Picked up by DPD', 'Wed 18 Nov · 16:05 · HelloPrint, Dublin'], ['Packed and labelled', 'Wed 18 Nov · 11:30']]
        .map(([t, s, st]) => `<div class="dash-row text"><span class="t"><b>${t}</b><small>${s}</small></span>${st ? '<span class="status go">Now</span>' : ''}</div>`).join('')}</div>`;
    openSheet('track');
  }
  if (act === 'cancel') { document.getElementById('cancelBody').innerHTML = `<p class="up-intro">Order #${o.no}: ${o.lines.length > 1 ? `all ${o.lines.length} products stop` : 'it stops'} before we print. You pay nothing.</p>`; openSheet('cancel'); }
  if (act === 'cancel-yes') { closeSheet(); orderSave(o.no, d => d.cancelled = true); showToast(`Order #${o.no} is cancelled`); }
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
