// HelloPrint design system: the JavaScript the components need (labels, bottom sheets, toast, field errors).
// Loads after the page shell (app.js), so the sheets in the shell are there when the swipe handles are wired.

// Labels (Cornel, 2026-10-30): orange = commercial (Most Popular, Best Seller, Great Value, Recommended, Free design templates),
// light green = eco, grey (neutral) = information (Default, Help Centre topics)
const BADGE_TONE = { 'Eco': ' eco', 'Default': ' neutral' };
const badgeTone = t => BADGE_TONE[t] || '';
const badgeHtml = t => t ? `<span class="badge${badgeTone(t)}">${t}</span>` : '';

// Bottom sheets (any page): [data-open-sheet="name"] opens #sheet-name, [data-close-sheet] closes.
// Close also on handle tap / swipe down / Esc. Pages can prepare a sheet via sheetHooks[name].
const sheetHooks = {};
// Sheets can stack (e.g. an info guide over the customise sheet); openSheetEl is the top one
const sheetStack = [];
let openSheetEl = null;
function openSheet(name) {
  if (sheetHooks[name]) sheetHooks[name]();
  document.getElementById('toast')?.classList.remove('show');
  const el = document.getElementById('sheet-' + name);
  if (sheetStack.includes(el)) return;
  sheetStack.push(el); openSheetEl = el;
  el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
}
function closeSheet() {
  const el = sheetStack.pop(); if (!el) return;
  el.classList.remove('open'); el.setAttribute('aria-hidden', 'true');
  el.querySelector('.sheet').style.removeProperty('--drag');
  openSheetEl = sheetStack.at(-1) || null;
  if (!openSheetEl) document.body.classList.remove('menu-open');
}
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open-sheet]'); if (o) { e.preventDefault(); openSheet(o.dataset.openSheet); }
  if (e.target.closest('[data-close-sheet]')) closeSheet();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
document.querySelectorAll('[data-grab]').forEach(grab => {
  const sheet = grab.closest('.sheet');
  let y0 = null, dy = 0;
  grab.addEventListener('pointerdown', e => { y0 = e.clientY; dy = 0; sheet.classList.add('dragging'); grab.setPointerCapture(e.pointerId); });
  grab.addEventListener('pointermove', e => { if (y0 === null) return; dy = Math.max(0, e.clientY - y0); sheet.style.setProperty('--drag', dy + 'px'); });
  grab.addEventListener('pointerup', () => {
    sheet.classList.remove('dragging');
    if (dy > 90 || dy < 4) closeSheet(); else sheet.style.removeProperty('--drag');
    y0 = null;
  });
});

// Toast message (any page)
let toastTimer;
function showToast(text) {
  let t = document.getElementById('toast');
  if (!t) { t = Object.assign(document.createElement('div'), { id: 'toast', className: 'toast' }); t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = text; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// A toast that survives a page change (e.g. "Added to cart" shown on the cart page)
function toastOnNextPage(text) { try { sessionStorage.setItem('hp-toast', text); } catch (e) {} }
try { const t = sessionStorage.getItem('hp-toast'); if (t) { sessionStorage.removeItem('hp-toast'); setTimeout(() => showToast(t), 300); } } catch (e) {}

// An Irish postcode (details, the quote popup)
const EIRCODE = /^[A-Z]\d[\dW]\s?[A-Z\d]{4}$/i;

// Form errors (checkout): the message sits directly below its own input, inside the field's column
function setFieldError(field, msg) {
  const input = field.querySelector('input, select');
  field.classList.toggle('invalid', !!msg);
  input.setAttribute('aria-invalid', String(!!msg));
  let err = field.querySelector('.field-error');
  if (!msg) { err?.remove(); input.removeAttribute('aria-describedby'); return; }
  if (!err) { err = document.createElement('span'); err.className = 'field-error'; err.id = 'err-' + input.name; field.appendChild(err); }
  err.textContent = msg;
  input.setAttribute('aria-describedby', err.id);
}
