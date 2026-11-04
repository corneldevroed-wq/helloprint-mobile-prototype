// Help Centre logic, shared by help-centre.html (hub), help-topic.html and help-article.html. The content (HELP_SUBS: topics →
// sub-topics → [question, slug]; HELP_ARTICLES: slug → article HTML) is in help-content.js, from the live en-ie Help Centre.

const hslug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Prototype switch "Answers" (left edge, on every help page; URL ?ans= + localStorage, as the other switches):
// F = Getting started as the hub with the topics sidebar; P = the earlier 6 topic cards (answers: always a page, help-article.html)
// P is hidden for now (Cornel, 2026-10-29: stick with F): F always, P only via ?ans=page in the URL (code kept)
const HELP_MODE = new URLSearchParams(location.search).get('ans') === 'page' ? 'page' : 'faq';
const helpTopicUrl = id => id === 'start' ? 'help-centre.html' : 'help-topic.html?t=' + id;   // Getting started = the hub, every other topic its own page
const helpUrl = q => 'help-article.html?q=' + (HELP_SLUG[q] || hslug(q));   // every answer has its own page (isolated article URLs needed, Cornel 2026-10-29)
// Sub-topics (Cornel, 2026-10-29: M): on desktop they unfold under the active topic in the left menu; on mobile no section tabs
// (too noisy, Cornel 2026-10-29): the sub-topic headings in the content do the job. Rejected: tabs above the questions.
const helpSubMenu = () => DESK;
function helpSwitch() {   // the switch is hidden for now (Cornel, 2026-10-29: stick with F); remove `hidden` below to show it
  document.body.insertAdjacentHTML('beforeend', `<div class="desk-switch" role="group" aria-label="Prototype versions" hidden><span>Answers</span>${[['faq', 'F'], ['page', 'P']].map(([v, l]) => `<button data-ans="${v}" aria-pressed="${v === HELP_MODE}" title="${v === 'faq' ? 'FAQ: answers fold open' : 'A page per answer'}"${v === 'page' ? ' hidden' : ''}>${l}</button>`).join('')}</div>`);
  document.querySelector('[data-ans]').parentNode.addEventListener('click', e => {
    const b = e.target.closest('[data-ans]'); if (!b || b.dataset.ans === HELP_MODE) return;
    const u = new URL(location.href); u.searchParams.set('ans', b.dataset.ans); location.href = u.toString();
  });
}

// Topics on the hub: 3 questions each; n = the number of articles (counted from the sub-topics where we have them)
const HELP_TOPICS = [
  { id: 'start', ms: 'home', name: 'Home', n: 0, q: [] },   // the hub (F)
  { id: 'ordering', ms: 'local_mall', name: 'Ordering', q: ['Can I change my order?', 'Can I cancel my order?', 'How do I request a quote?'] },
  { id: 'design', ms: 'upload', name: 'Design & upload', q: ['What file type should I use when uploading my design?', 'What is bleed? And do I need it in my design?', 'I have a very big file, how can I upload this?'] },
  { id: 'payment', ms: 'receipt', name: 'Payment & invoicing', q: ['Which payment methods can I use?', 'Downloading invoices & credit notes', 'How refunds work'] },
  { id: 'delivery', ms: 'delivery_truck_speed', name: 'Delivery & tracking', q: ['How can I track my order?', 'Can my order be delivered urgently?', 'When do I get free shipping?'] },
  { id: 'account', ms: 'account_circle', name: 'Account', q: ['How do I file a complaint?', 'How can I create an account?', 'What you can do in My Account'] },
];   // live has 5 categories; Complaints is a sub-topic of Account there (2026-10-29)
HELP_TOPICS.forEach(t => { if (HELP_SUBS[t.id]) t.n = HELP_SUBS[t.id].reduce((n, s) => n + s.q.length, 0); });
const HELP_SLUG = Object.fromEntries(Object.values(HELP_SUBS).flatMap(subs => subs.flatMap(sub => sub.q)));   // question → live slug

// Home (id 'start') = the hub: the most-read articles as cards (topic label, title, short explanation, Read more; Cornel 2026-10-29;
// the icons are no longer shown)
// and other common questions as rows; all live articles from help-content.js
const HELP_POPULAR = ['Can I change my order?', 'How can I track my order?', 'How do I approve my proof?', 'What file type should I use when uploading my design?', 'Downloading invoices & credit notes', 'How do I file a complaint?'];
const HELP_COMMON = ['Can I cancel my order?', 'Which payment methods can I use?', 'Do I need to have an account to place an order?', 'Can my order be delivered urgently?', 'What is bleed? And do I need it in my design?', 'How do I request a quote?'];
const helpExcerpt = q => { const d = document.createElement('div'); d.innerHTML = HELP_ARTICLES[HELP_SLUG[q]] || ''; const p = d.querySelector('p'); return (p || d).textContent.trim(); };   // the first paragraph

function helpFind(slug) {   // { q, topic, sub } for a live slug
  for (const [tid, subs] of Object.entries(HELP_SUBS)) for (const sub of subs) for (const [q, s] of sub.q)
    if (s === slug) return { q, topic: HELP_TOPICS.find(t => t.id === tid), sub };
  return null;
}

// The topic view (F on the hub, the topic page): sidebar = all topics (the current one marked), body = head, sub-topic chips,
// per sub-topic the questions: F = the category-page FAQ (#<question> opens one), P = the hub rows to the article page.
// opts.h = 'h1' (topic page) or 'h2' (hub, under "How can we help?"); opts.back = a "Help Centre" row on top of the sidebar.
// "Can't find it?" + the experts + Chat with us: the block under the hub search, reused under the menu (Cornel, 2026-10-29)
const HELP_ALT = `<div class="hc-alt"><span class="or">Can't find it?</span><span class="hc-online"><span class="faces"><img src="assets/help/team/niamh.webp" alt=""><img src="assets/help/team/conor.webp" alt=""><img src="assets/help/team/aoife.webp" alt=""></span><span class="txt"><b><span class="dot"></span>Our print experts are online</b><span>Usually reply within minutes</span></span></span><a class="pill active" href="#chat">Chat with us</a></div>`;
function helpSide(sideEl, current, subs, base = '', currentSub) {   // all topics (+ number of articles), the current one marked; M: its sub-topics underneath
  const sub = t => t === current && subs && subs.length > 1 && helpSubMenu()
    ? `<ul class="ht-subnav">${subs.map((s, i) => `<li><a href="${base}#${hslug(s.name)}"${base ? '' : ` data-tab-link="${hslug(s.name)}"`}${(base ? s === currentSub : !i) ? ' class="active"' : ''}>${s.name}</a></li>`).join('')}</ul>` : '';
  sideEl.innerHTML = `<nav aria-label="Help topics"><ul class="ht-nav">${HELP_TOPICS.map(t => `<li><a href="${helpTopicUrl(t.id)}"${t === current ? ' aria-current="page"' : ''}><span class="material-symbols-rounded" aria-hidden="true">${t.ms}</span>${t.name}${t.n ? `<span class="ht-n">${t.n}</span>` : ''}</a>${sub(t)}</li>`).join('')}</ul></nav>`
    + (current.id === 'start' ? '' : HELP_ALT);   // topic + article pages: "Can't find it?" under the menu (the hub has it in the hero)
}
function helpFaq(qs, label) {   // [[q, slug]] as rows to the article page: the look of the FAQ (lines, question size), an arrow right instead of the fold; label(q) = a small line under it
  return `<ul class="hc-rows">${qs.map(([q]) => `<li data-q="${q.toLowerCase().replace(/"/g, '&quot;')}"><a href="${helpUrl(q)}"><span>${q}${label ? `<small>${label(q)}</small>` : ''}</span><img class="chev" src="assets/category/arrow.svg" alt=""></a></li>`).join('')}</ul>`;
}
function helpTopicView(sideEl, bodyEl, topic) {   // the topic page: sidebar + head, sub-topic chips, per sub-topic the questions
  const subs = HELP_SUBS[topic.id];
  helpSide(sideEl, topic, subs);
  bodyEl.innerHTML = `
    <h1>${topic.name}</h1>
    <p class="ht-lead">${topic.n} answers about ${topic.name.toLowerCase()}.</p>
    <form class="hc-search ht-search" role="search" onsubmit="return false"><input type="search" placeholder="Search in ${topic.name}" aria-label="Search in ${topic.name}" autocomplete="off"><button type="submit" aria-label="Search"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg></button></form>
    <div class="ht-res" aria-live="polite"></div>
    ${subs.map(s => `<section class="ht-sec" id="${hslug(s.name)}" data-tab-target><h2>${s.name}</h2>${helpFaq(s.q)}</section>`).join('')}
    <section class="ht-sec ht-other" hidden></section>`;
  helpTabs();
  helpFilter(bodyEl, topic);
  const h = location.hash && document.getElementById(location.hash.slice(1)); if (h) h.scrollIntoView();   // #sub-topic (from the article page menu)
  setTimeout(() => dispatchEvent(new Event('scroll')), 50);   // mark the right menu sub-topic straight away
}
// Search on the topic page (Cornel, 2026-10-29: B of help-search-sketch.html): typing filters the questions here (match marked),
// matches in other topics follow under "In other topics"; nothing anywhere = try other words or chat
function helpFilter(bodyEl, topic) {
  const inp = bodyEl.querySelector('.ht-search input'), res = bodyEl.querySelector('.ht-res'), other = bodyEl.querySelector('.ht-other');
  const rows = [...bodyEl.querySelectorAll('.ht-sec:not(.ht-other) li')];
  const all = Object.entries(HELP_SUBS).filter(([id]) => id !== topic.id).flatMap(([id, subs]) => subs.flatMap(sub => sub.q.map(([q, s]) => [q, s, id])));
  const name = id => HELP_TOPICS.find(t => t.id === id).name;
  const mark = (q, v) => { const i = q.toLowerCase().indexOf(v), h = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;'); return i < 0 ? h(q) : h(q.slice(0, i)) + '<mark>' + h(q.slice(i, i + v.length)) + '</mark>' + h(q.slice(i + v.length)); };
  inp.addEventListener('input', () => {
    const v = inp.value.trim().toLowerCase(), on = v.length > 1;
    let here = 0;
    rows.forEach(li => {
      const hit = !on || li.dataset.q.includes(v); li.hidden = !hit; if (hit && on) here++;
      const q = li.querySelector('span'); q.innerHTML = on && hit ? mark(q.textContent, v) : q.textContent;
    });
    bodyEl.querySelectorAll('.ht-sec:not(.ht-other)').forEach(sec => sec.hidden = !sec.querySelector('li:not([hidden])'));
    const hits = on ? all.filter(([q]) => q.toLowerCase().includes(v)) : [];
    other.hidden = !hits.length;
    other.innerHTML = hits.length ? `<h2>In other topics</h2>${helpFaq(hits.slice(0, 5), q => name(hits.find(h => h[0] === q)[2]))}` : '';
    other.querySelectorAll('li span').forEach(q => { const t = q.firstChild; t.replaceWith(document.createRange().createContextualFragment(mark(t.textContent, v))); });
    const shown = Math.min(hits.length, 5);
    res.innerHTML = !on ? '' : here || shown
      ? `<p class="ht-count"><b>${here}</b> in ${topic.name}${shown ? ` · ${shown} in other topics` : ''}</p>`
      : `<div class="ht-empty"><p>No answers for "${inp.value.trim().replace(/&/g, '&amp;').replace(/</g, '&lt;')}" yet. Try other words, or ask one of our print experts.</p><a class="pill active" href="#chat">Chat with us</a></div>`;
    dispatchEvent(new Event('scroll'));   // the menu sub-topic follows
  });
}

// The menu sub-topics (desktop, M): click scrolls to the section, the active one follows the scroll (as the promotional.html tabs)
function helpTabs() {
  const links = [...document.querySelectorAll('[data-tab-link]')], targets = [...document.querySelectorAll('[data-tab-target]')];
  if (!links.length) return;
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-tab-link]'); if (!a) return;
    e.preventDefault(); document.getElementById(a.dataset.tabLink).scrollIntoView({ behavior: 'smooth' });
  });
  const sync = () => {
    let cur = targets[0];
    for (const t of targets) if (!t.hidden && t.getBoundingClientRect().top <= (DESK ? 200 : 150)) cur = t;   // hidden = filtered out by the search
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) cur = targets.at(-1);
    links.forEach(a => a.classList.toggle('active', a.dataset.tabLink === cur.id));
  };
  addEventListener('scroll', sync, { passive: true });
}

// Signed in: the user's own orders, proofs, invoices… right under the article title (Cornel, 2026-11-04; help-personal-sketch.html, A).
// One block for 12 kinds of data, linked to the article by its slug. Rows: [title, detail (the urgent part in <em>), action, primary?, product image].
// The action: the small light green button of the header (.dbtn) to act, the white .pill for a quiet one (Cornel, 2026-11-04: .btn was too big).
// Prototype data (from Cornel's Help Centre artifact); links go to #my-account-… (My Account doesn't exist yet).
// Signed out: one quiet "Sign in to …" line, only on the "my" questions (out). Switch "Account" (left edge): I = signed in, O = signed out.
const HELP_MINE = {
  proofs: { h: 'Waiting for your approval', all: 'View all orders', out: 'to see the proofs waiting for your approval.',
    rows: [['Order #8839004', 'Roll-up banner ×2 · approve before Fri 6 Nov, 09:00 · <em>2 days left</em>', 'Review proof', 1, 'rollupbanners-printing']] },
  change: { h: 'Orders you can still change', all: 'View all orders', out: 'to see which orders you can still change.',
    rows: [['Order #8851022', 'Flyers A5 · 1,000 pcs · changes possible until <em>today, 18:00</em>', 'Change order', 1, 'flyers'], ['Order #8849910', 'Stickers · 250 pcs · <em>waiting for your file</em>', 'Upload file', 1, 'customsizestickers']] },
  status: { h: 'Your open orders', all: 'View all orders', out: 'to see the status of your orders.',
    rows: [['Order #8839004', 'Roll-up banner ×2 · <em>proof ready</em>', 'View order', 0, 'rollupbanners-printing'], ['Order #8851022', 'Flyers A5 · 1,000 pcs · in production', 'View order', 0, 'flyers'], ['Order #8842119', 'Business Cards · 500 pcs · on its way', 'View order', 0, 'businesscards-printing']] },
  shipments: { h: 'Your orders on the way', all: 'View all orders', out: 'to track your orders here.',
    rows: [['Order #8842119', 'Business Cards · 500 pcs · Estimated Thursday 5 Nov — latest Fri 6 Nov', 'Track', 1, 'businesscards-printing'], ['Order #8846210', 'Event pack · 3 items · 2 of 3 parcels on the way', 'Track', 1, 'banner-printing']] },
  delivered: { h: 'Recently delivered', all: 'View all orders', out: 'to pick the order it\'s about.',
    rows: [['Order #8825510', 'Roller Banner · 1 pc · delivered 2 Nov', 'Report a problem', 1, 'rollupbanners-printing'], ['Order #8814402', 'Tote bags · 100 pcs · delivered 28 Oct', 'Report a problem', 0, 'printing-cottonbags']] },
  past: { h: 'Your previous orders', all: 'View all orders', out: 'to reorder from your previous orders.',
    rows: [['Order #8842119', 'Business Cards · 500 pcs · placed 28 Oct', 'Reorder', 1, 'businesscards-printing'], ['Order #8830771', 'Flyers A5 · 2,500 pcs · placed 24 Oct', 'Reorder', 1, 'flyers']] },
  quotes: { h: 'Your quotes', all: 'View all quotes', out: 'to see the quotes you requested.',
    rows: [['Quote QT-5567', 'Roll-up banners ×50, custom size · <em>quote ready</em>, valid until 18 Nov', 'View quote', 1, 'rollupbanners-printing'], ['Quote QT-5540', 'Branded tote bags ×1,000 · requested 3 Nov, we usually reply within a few hours', '', 0, 'printing-cottonbags']] },
  invoices: { h: 'Your recent invoices', all: 'View all invoices', out: 'to see, pay and download your invoices.',
    rows: [['INV-2026-4302', 'Order #8830771 · €212.50 · <em>unpaid, due 18 Nov</em>', 'Pay now', 1, 'flyers'], ['INV-2026-4471', 'Order #8842119 · €184.20 · paid', 'Download PDF', 0, 'businesscards-printing']] },
  refunds: { h: 'Your refunds', all: 'View all orders', out: 'to see the status of your refund.',
    rows: [['Order #8851877', 'Posters A2 · 10 pcs · €48.60 · <em>refund on its way</em>, expected by 9 Nov', 'View order', 0, 'posters']] },
  cases: { h: 'Your open cases', all: 'View all cases', out: 'to see the status of your cases.',
    rows: [['Case C-10432', 'Business Cards, order #8842119 · we replied on 3 Nov · <em>waiting for you</em>', 'View case', 1, 'businesscards-printing']] },
  address: { h: 'Your default shipping address', all: 'Manage addresses',
    rows: [['Loraine Pijffers · HelloPrint', '12 Merrion Square, Dublin 2, Ireland', 'Edit', 0]] },
  billing: { h: 'Your billing details', all: 'Go to My Account',
    rows: [['HelloPrint · VAT IE 1234567 X', '12 Merrion Square, Dublin 2, Ireland · invoices to hello@helloprint.com', 'Edit', 0]] },
};
const HELP_MINE_SLUGS = {   // ~60 of the 146 articles
  proofs: 'what-is-a-digital-proof how-do-i-approve-my-proof* what-happens-if-i-miss-my-proof-approval-deadline* can-i-make-changes-to-my-file i-don-t-see-all-my-designs-on-the-print-proof what-are-the-pre-flight-notes-on-my-proof how-long-does-an-artwork-check-take',
  change: 'can-i-cancel-my-order* can-i-change-the-quantity-of-my-order-after-i-placed-it how-do-i-cancel-a-specific-product-instead-of-my-entire-order how-do-i-change-my-artwork-file-after-uploading can-i-change-my-delivery-date can-i-change-my-delivery-address can-i-change-my-delivery-address-when-i-have-already-placed-my-order how-do-i-change-my-delivery-address-after-ordering can-i-speed-up-my-order-that-is-already-in-production',
  status: 'where-can-i-find-my-order-status* what-does-the-status-assigned-to-my-order-mean why-is-my-order-on-hold why-did-the-delivery-date-change-since-i-placed-the-order why-can-t-i-make-any-modifications-to-my-order-once-it-has-gone-into-production why-have-i-not-received-my-order-confirmation',
  shipments: 'how-can-i-track-my-order* my-track-and-trace-code-is-not-working-what-can-i-do* how-do-i-track-a-multi-parcel-order* what-should-i-do-if-my-package-hasn-t-been-delivered what-happens-when-the-delivery-attempts-were-unsuccessful what-will-happen-if-i-m-not-at-the-delivery-address',
  delivered: 'my-order-arrived-incomplete-what-should-i-do my-order-has-been-delivered-damaged-what-should-i-do i-m-missing-the-accessory-i-ordered-with-my-purchase-what-now can-i-return-my-order how-do-i-file-a-complaint*',
  past: 'can-i-repeat-a-previous-order* how-can-i-download-designs-from-my-previous-orders how-can-i-find-my-previous-canva-designs',
  quotes: 'how-do-i-request-a-quote* how-do-i-get-a-quote-for-a-bespoke-product how-do-i-order-a-custom-size',
  invoices: 'how-do-i-download-my-invoices-and-credit-notes* where-can-i-find-my-credit-invoice* i-have-not-received-my-invoice-now-what* when-will-i-receive-my-invoice how-do-i-pay-on-invoice why-did-i-receive-a-payment-reminder* my-payment-has-failed-what-should-i-do',
  refunds: 'i-have-cancelled-my-order-why-have-i-not-received-my-refund* i-have-overpaid-my-order-how-can-this-be-resolved how-do-refunds-work',
  cases: 'what-is-the-status-of-my-complaint* how-long-does-a-reply-usually-take how-do-i-attach-files-to-my-message',
  address: 'can-i-change-my-default-delivery-address-that-is-used-for-all-orders how-do-i-manage-my-addresses',
  billing: 'how-can-i-change-my-invoice-address how-do-i-update-my-company-and-vat-details how-can-i-change-the-email-address-where-i-receive-my-invoices',
};   // * = a "my" question: signed out it gets the "Sign in to …" line
// Not on can-i-change-my-order (Cornel, 2026-11-04): a shortcut to your orders there invites cancelling
const helpSignedIn = (() => {   // the switch (URL ?acc= + localStorage) wins; without a choice: the prototype login (hp-user)
  let v = new URLSearchParams(location.search).get('acc');
  try { if (v) localStorage.setItem('hp-help-acc', v); else v = localStorage.getItem('hp-help-acc'); } catch (e) {}
  if (v === 'in' || v === 'out') return v === 'in';
  try { return !!localStorage.getItem('hp-user'); } catch (e) { return false; }
})();
function helpMine(afterEl, slug) {   // the block (signed in) or the sign-in line (signed out, "my" questions only) under the title
  const hit = Object.entries(HELP_MINE_SLUGS).map(([k, s]) => [k, s.split(' ').find(x => x.replace('*', '') === slug)]).find(([, x]) => x);
  if (!hit) return;
  const d = HELP_MINE[hit[0]];
  if (!helpSignedIn) {
    if (hit[1].endsWith('*')) afterEl.insertAdjacentHTML('afterend', `<p class="hc-mine-out"><span class="material-symbols-rounded" aria-hidden="true">account_circle</span><span><a class="link" href="login.html">Sign in</a> ${d.out}</span></p>`);
    return;
  }
  afterEl.insertAdjacentHTML('afterend', `<section class="hc-mine" aria-label="${d.h}"><div class="hc-mine-h"><h2>${d.h}</h2><a class="link" href="#my-account-${hit[0]}">${d.all}</a></div>
    <ul>${d.rows.map(([t, s, a, p, img]) => `<li>${img ? `<span class="thumb-sm"><img src="assets/menu/sub/${img}.webp" alt=""></span>` : ''}<div><b>${t}</b><span>${s}</span></div>${a ? `<a class="${p ? 'dbtn' : 'pill'}" href="#my-account-${hit[0]}">${a}</a>` : ''}</li>`).join('')}</ul></section>`);
}
function helpAccSwitch() {   // prototype switch "Account": I = signed in (the block), O = signed out (the sign-in line)
  document.body.insertAdjacentHTML('beforeend', `<div class="desk-switch" role="group" aria-label="Prototype versions"><span>Account</span>${[['in', 'I', 'Signed in'], ['out', 'O', 'Signed out']].map(([v, l, t]) => `<button data-acc="${v}" aria-pressed="${(v === 'in') === helpSignedIn}" title="${t}">${l}</button>`).join('')}</div>`);
  document.querySelector('[data-acc]').parentNode.addEventListener('click', e => {
    const b = e.target.closest('[data-acc]'); if (!b) return;
    const u = new URL(location.href); u.searchParams.set('acc', b.dataset.acc); location.href = u.toString();
  });
}

// "More help with …" under every article (Cornel, 2026-11-04): related articles as the Help Centre home cards
// (.hc-quick .hc-card: title, one line why, Read more), 3 in a row as on the home. Per article: heading + [slug, line].
const HELP_MORE = {
  'how-can-i-create-an-account': { h: 'More help with your account', items: [
    ['what-can-i-do-in-my-account', 'Orders, invoices, addresses and settings'],
    ['how-do-i-reset-my-password', 'If you cannot sign in'],
    ['company-account-how-it-works', 'Invite colleagues to order and share invoices'],
    ['how-do-i-update-my-company-and-vat-details', 'Company info and per-address details'],
    ['do-i-need-to-have-an-account-to-place-an-order', 'Why an account is required'],
    ['can-i-delete-my-account', 'What happens to your orders and details'],
  ] },
};
// Every other article (Cornel, 2026-11-04: relinking everywhere, max 3): the next questions of its own sub-topic first, then the rest
// of the topic; the card line = the article's first sentence. A hand-picked HELP_MORE entry always wins.
const helpLine = slug => { const d = document.createElement('div'); d.innerHTML = HELP_ARTICLES[slug] || ''; const t = (d.querySelector('p') || d).textContent.trim(); return (t.match(/^.*?[.?!](\s|$)/) || [t])[0].trim(); };
function helpMoreAuto(slug) {
  const hit = helpFind(slug); if (!hit) return null;
  const own = hit.sub.q.map(([, s]) => s), i = own.indexOf(slug);
  const rest = HELP_SUBS[hit.topic.id].filter(sub => sub !== hit.sub).flatMap(sub => sub.q.map(([, s]) => s));
  const pick = [...own.slice(i + 1), ...own.slice(0, i), ...rest].slice(0, 3);
  return { h: 'More help with ' + (hit.topic.id === 'account' ? 'your account' : hit.topic.name.toLowerCase()), items: pick.map(s => [s, helpLine(s)]) };
}
function helpMore(afterEl, slug) {
  const m = HELP_MORE[slug] || helpMoreAuto(slug); if (!m || !m.items.length) return;
  const items = m.items.slice(0, 3);   // max 3: one calm row (Cornel, 2026-11-04: 6 was kermis)
  afterEl.insertAdjacentHTML('afterend', `<section class="ha-more"><h2>${m.h}</h2><div class="hc-quick">${items.map(([s, line]) =>
    `<a class="hc-card" href="help-article.html?q=${s}"><span class="hc-card-h">${helpFind(s).q}</span>${line ? `<span class="hc-quick-p">${line}</span>` : ''}<span class="link">Read more</span></a>`).join('')}</div></section>`);
}
