// PFP, Product Filtering Page (Cornel 2026-11-19; pens.html, backpacks.html): the list of a product type with filters, from live data.
// A page sets PFP (its items, quantity, filters, related categories, FAQ) and loads its data file, then this script. Rules (decisions.md, PFP):
// filters in a sticky sidebar (a sheet on mobile), the first group = the product type, Eco only under it, then in decision order; they work at once,
// counts show what you would get, 0 is greyed, the selected ones as soft tags, ?f= in the URL; sort (Most popular, Fastest delivery, price);
// 24 at a time. The card: "8 colours" (on hover a frosted strip with the dots, hover one = that colour's photo), N pcs for + the price each,
// "Fast delivery" as a white label only when it is within 3 working days.
//   PFP = { items, qty, factor, noun, groups: [{ id, k, field, vals? } | { id: 'del' } | { id: 'price', edges } | { id: 'colour' }],
//           open (sidebar groups open at first), openSheet, sib: [[name, image url, href]], faq?: [[question, answer]] }
(() => {
const { items, qty: QTY, factor, noun } = PFP;
const CF = 'https://images.ctfassets.net/wm1n7oady8a5/';
// Prices at one quantity every product of the page offers, so the cards compare: the live from-price is the lowest per piece, × factor (our own numbers)
const pce = p => Math.round(p.pp * factor * 100) / 100, total = p => Math.round(pce(p) * QTY * 100) / 100;
// Delivery: today Thu 19 Nov 2026 + working days of the fastest option
const WD = { '1': 1, '2to3': 3, '4to5': 5, 'moreThan6': 7 }, RANK = { '1': 0, '2to3': 1, '4to5': 2, 'moreThan6': 3 };
const addWd = n => { const d = new Date('2026-11-19T12:00'); while (n) { d.setDate(d.getDate() + 1); if (d.getDay() % 6) n--; } return d; };
// "Fast delivery" (as live) only within 3 working days, a white label. In a row where another card has it, the others keep an invisible one, so the
// prices stay level; a row without it keeps no space (Cornel). Desktop only (4 a row): on mobile the prices do not line up in a row anyway.
const fast = p => RANK[p.d] <= 1, COLS_ROW = 4;
const eta = (p, row) => fast(p) ? '<p class="pf-eta">Fast delivery</p>' : DESK && row.some(fast) ? '<p class="pf-eta none" aria-hidden="true">&nbsp;</p>' : '';
const img = path => `${CF + path}?w=500&fm=webp&q=80`;
const dots = p => p.hex.map((h, i) => `<i style="background:${h}" title="${p.col[i]}"${p.ci[i] ? ` data-c="${i}"` : ''}></i>`).join('');
const card = (p, i, list) => {
  const fc = SEL.colour ? [...SEL.colour].find(c => p.ci[p.col.indexOf(c)]) : '', main = fc ? p.ci[p.col.indexOf(fc)] : p.i, href = `#${p.s}${fc ? '?colour=' + fc.toLowerCase() : ''}`;
  return `<a class="product" href="${href}" data-s="${p.s}" data-href="${href}">
    <div class="thumb" style="background:var(--light-grey)"><img src="${img(main)}" data-main="${img(main)}" alt="" loading="lazy">${badgeHtml(p.b)}${DESK && p.hex.length > 1 ? `<span class="pf-strip">${dots(p)}</span>` : ''}</div>
    <p class="name">${p.n}</p>
    ${p.col.length ? `<span class="pf-ncol">${p.col.length > 1 ? p.col.length + ' colours' : p.col[0]}</span>` : ''}
    <div><p class="from">${QTY} pcs for</p><p class="prices"><span class="price" data-price="${total(p)}">${fmt(total(p))}</span><span class="pf-each">· <span data-price="${pce(p)}">${fmt(pce(p))}</span> each</span></p>
    ${eta(p, list.slice(i - i % COLS_ROW, i - i % COLS_ROW + COLS_ROW))}</div>
  </a>`;
};

// Related categories: grey tiles on desktop, category cards on mobile
const sibEl = document.getElementById('sibCats');
sibEl.innerHTML = PFP.sib.map(([name, src, href]) => DESK
  ? `<a class="dc-card" href="${href}"><span class="dc-t">${name}</span><img class="dc-go" src="assets/desktop/arrow-forward-grey.svg" alt=""><span class="dc-img"><img src="${src}" alt="" loading="lazy"></span></a>`
  : `<a class="cat" href="${href}"><div class="collage"><img src="${src}" alt="" loading="lazy" style="inset:0;object-fit:contain"></div><p class="title">${name}</p></a>`).join('');
if (!DESK) sibEl.classList.add('hscroll', 'cats');

// FILTERS. Within a group any of the ticked values (OR), between groups all (AND); Delivered by is one choice (the later date includes the earlier ones).
// Values the page does not list come from the data, most common first.
const count = f => { const c = {}; items.forEach(p => [].concat(p[f]).forEach(v => { if (v) c[v] = (c[v] || 0) + 1; })); return Object.keys(c).sort((a, b) => c[b] - c[a]); };
const COLS = {}; items.forEach(p => p.col.forEach((c, i) => { COLS[c] = COLS[c] || p.hex[i]; }));
const q = v => String(v).replace(/"/g, '&quot;');   // a value in an attribute (Fits 17" laptop)
const eur = v => '€' + (v < 1 ? v.toFixed(2) : v);
const G = PFP.groups.map(g => {
  if (g.id === 'del') {
    const ranks = [0, 1, 2].filter(r => items.some(p => RANK[p.d] === r)), vals = ranks.map(r => r ? etaShort(addWd(WD[['1', '2to3', '4to5'][r]])) : `${etaShort(addWd(1))} (tomorrow)`);
    return { id: 'del', k: 'Delivered by', one: true, vals, t: (p, v) => RANK[p.d] <= ranks[vals.indexOf(v)] };
  }
  if (g.id === 'price') {
    const e = g.edges, vals = [`Under ${eur(e[0])}`, ...e.slice(1).map((x, i) => `${eur(e[i])} – ${eur(x)}`), `Over ${eur(e[e.length - 1])}`];
    return { id: 'price', k: 'Price per piece', vals, t: (p, v) => { const i = vals.indexOf(v), x = pce(p); return (i === 0 || x >= e[i - 1]) && (i === e.length || x < e[i]); } };
  }
  if (g.id === 'colour') return { id: 'colour', k: 'Colour', sw: true, vals: count('col'), t: (p, v) => p.col.includes(v) };
  return { ...g, vals: g.vals || count(g.field), t: (p, v) => [].concat(p[g.field]).includes(v) };
});
// State: the ticked values per group, eco, and the order they were set in (for "Remove <last>"). In the URL as ?f=type:Laptop backpacks|eco, so back,
// refresh and a copied link keep it (live: a single choice that equals a sub category is that page; other combinations noindex).
const SEL = {}; G.forEach(g => SEL[g.id] = new Set()); let ECO = false, ORDER = [];
(new URLSearchParams(location.search).get('f') || '').split('|').filter(Boolean).forEach(x => { if (x === 'eco') { ECO = true; ORDER.push(['eco']); return; }
  const [id, v] = x.split(':'); if (SEL[id]) { SEL[id].add(v); ORDER.push([id, v]); } });
const ok = (p, skip) => (skip === 'eco' || !ECO || p.eco) && G.every(g => g.id === skip || !SEL[g.id].size || [...SEL[g.id]].some(v => g.t(p, v)));
const n = (g, v) => items.filter(p => ok(p, g.id) && g.t(p, v)).length;   // what you get with this value added
const ecoN = () => items.filter(p => ok(p, 'eco') && p.eco).length;

const opt = (g, v, box) => { const c = n(g, v), on = SEL[g.id].has(v), off = !c && !on;
  return g.sw ? `<button type="button" style="background:${COLS[v]}" title="${q(v)} (${c})" aria-label="${q(v)}, ${c}" aria-pressed="${on}" data-g="${g.id}" data-v="${q(v)}"${off ? ' disabled' : ''}></button>`
    : `<label class="check${off ? ' off' : ''}"><input type="${g.one ? 'radio' : 'checkbox'}" name="${box}-${g.id}" data-g="${g.id}" value="${q(v)}"${on ? ' checked' : ''}${off ? ' disabled' : ''}><span>${v}</span><small>${c}</small></label>`; };
const sum = g => { const s = [...SEL[g.id]]; return s.length ? `<span class="pf-sel">${s.length > 1 ? s.length + ' selected' : s[0]}</span>` : ''; };
// A group with more than 6 values shows 5 and "Show N more" (a ticked one always shows); the colour swatches always all
const MORE = new Set();
const vals = g => !g.sw && g.vals.length > 6 && !MORE.has(g.id) ? g.vals.filter((v, i) => i < 5 || SEL[g.id].has(v)) : g.vals;
const groupsHtml = (open, box) => G.map((g, i) => `<details class="pf-group"${open.has(g.id) ? ' open' : ''} data-id="${g.id}"><summary><span>${g.k}${sum(g)}</span><img src="assets/chevron.svg" alt=""></summary>
    <div class="${g.sw ? 'pf-sw' : 'pf-opts'}">${vals(g).map(v => opt(g, v, box)).join('')}${vals(g).length < g.vals.length ? `<button class="pf-clear pf-more-v" type="button" data-more="${g.id}">Show ${g.vals.length - vals(g).length} more</button>` : ''}</div></details>
    ${i ? '' : `<div class="pf-eco"><span>Eco-friendly only <small>${ecoN()}</small></span><button class="switch" type="button" role="switch" aria-checked="${ECO}" aria-label="Eco-friendly only" data-eco></button></div>`}`).join('');
const label = ([id, v]) => id === 'eco' ? 'Eco-friendly only' : v;
// Sort (live: Most popular, Price: Low to High, Price: High to Low; + Fastest delivery: the soonest first, the most popular first within a date),
// the guide's sort menu (.row-menu, as the lists in My account)
const SORTS = { pop: 'Most popular', fast: 'Fastest delivery', low: 'Price: Low to High', high: 'Price: High to Low' };
let SORT = 'pop', PAGE = 24;   // 24 at a time; a change starts at 24 again (live: the button is a link to ?page=2, so crawlers find every product)
const sortPill = () => `<span class="row-menu"><button class="pill pf-sort" type="button" data-menu aria-expanded="false" aria-label="Sort: ${SORTS[SORT]}">${SORTS[SORT]}</button>
  <span class="menu" hidden>${Object.entries(SORTS).map(([k, t]) => `<button type="button" data-sort="${k}"${k === SORT ? ' class="on"' : ''}>${t}</button>`).join('')}</span></span>`;

// Desktop: a filter works at once (no Apply); the selected ones as soft tags above the grid. Mobile: the same in the sheet, whose button counts along.
const openSide = new Set(PFP.open), openSheetG = new Set(PFP.openSheet);
const render = () => {
  const list = items.filter(p => ok(p)).sort((a, b) => SORT === 'pop' ? 0 : SORT === 'fast' ? RANK[a.d] - RANK[b.d] : (SORT === 'low' ? 1 : -1) * (pce(a) - pce(b))), k = ORDER.length, cnt = list.length, show = list.slice(0, PAGE);
  const keep = (sel, set) => { const el = document.querySelector(sel); if (el.children.length) { set.clear(); el.querySelectorAll('details[open]').forEach(d => set.add(d.dataset.id)); } };
  keep('#side', openSide); keep('#sheetGroups', openSheetG);
  document.getElementById('side').innerHTML = groupsHtml(openSide, 'side');
  document.getElementById('sheetGroups').innerHTML = groupsHtml(openSheetG, 'sheet');
  document.querySelector('.pf-side-h [data-clear]').hidden = !k;
  document.getElementById('main').innerHTML = `
    <div class="pf-bar">${DESK ? `<span class="pf-count"><b>${cnt}</b> products</span>` : `<button class="pill has-icon" type="button" data-open-sheet="filters"><span class="material-symbols-rounded" aria-hidden="true">tune</span>Filters${k ? `<span class="pf-n">${k}</span>` : ''}</button>`}${sortPill()}${DESK ? '' : `<span class="pf-count">${cnt} products</span>`}</div>
    ${k ? `<div class="filter-row pf-active">${ORDER.map(o => `<button class="pill pf-x" type="button" data-x="${q(o.join(':'))}">${label(o)}<span class="material-symbols-rounded" aria-hidden="true">close</span></button>`).join('')}<button class="pf-clear" type="button" data-clear>Clear all</button></div>` : ''}
    ${cnt ? `<div class="types">${show.map(card).join('')}</div>
      <div class="pf-more"><p>Showing ${show.length} of ${cnt} products</p>${cnt > show.length ? `<button class="btn outline" type="button" data-page>Show ${Math.min(24, cnt - show.length)} more</button>` : ''}</div>`
    : `<div class="pf-empty"><b>No ${noun} match all your filters</b><p>Remove the last one, or start again.</p><div class="chips"><button class="pill" type="button" data-x="${q(ORDER[k - 1].join(':'))}">Remove ${label(ORDER[k - 1])}</button><button class="pill" type="button" data-clear>Clear all</button></div></div>`}`;
  document.getElementById('showBtn').textContent = `Show ${cnt} products`;
  const u = new URL(location.href); if (k) u.searchParams.set('f', ORDER.map(o => o.join(':')).join('|')); else u.searchParams.delete('f'); history.replaceState(null, '', u);
};
// After a change on desktop the page glides back to the grid's top when that is above the screen (the products changed under you)
const changed = () => { PAGE = 24; render(); const m = document.getElementById('main'); if (DESK && m.getBoundingClientRect().top < 0) window.scrollTo({ top: m.getBoundingClientRect().top + scrollY - 16, behavior: 'smooth' }); };
const toggle = (id, v) => {
  if (id === 'eco') { ECO = !ECO; ORDER = ECO ? [...ORDER, ['eco']] : ORDER.filter(o => o[0] !== 'eco'); return changed(); }
  const had = SEL[id].has(v);
  if (G.find(g => g.id === id).one) { SEL[id].clear(); ORDER = ORDER.filter(o => o[0] !== id); }
  if (had) { SEL[id].delete(v); ORDER = ORDER.filter(o => !(o[0] === id && o[1] === v)); } else { SEL[id].add(v); ORDER.push([id, v]); }
  changed();
};
document.addEventListener('change', e => { const i = e.target.closest('input[data-g]'); if (i) toggle(i.dataset.g, i.value); });
document.addEventListener('click', e => {
  const sw = e.target.closest('.pf-sw button[data-g]'); if (sw) return toggle(sw.dataset.g, sw.dataset.v);
  if (e.target.closest('[data-eco]')) return toggle('eco');
  const x = e.target.closest('[data-x]'); if (x) { const [id, ...v] = x.dataset.x.split(':'); return toggle(id, v.join(':')); }
  const mb = e.target.closest('[data-menu]'), menu = document.querySelector('.pf-bar .menu');
  if (menu && !menu.hidden) { menu.hidden = true; menu.previousElementSibling.setAttribute('aria-expanded', 'false'); if (mb) return; }
  if (mb) { menu.hidden = false; mb.setAttribute('aria-expanded', 'true'); return; }
  const so = e.target.closest('[data-sort]'); if (so) { SORT = so.dataset.sort; PAGE = 24; return render(); }
  const more = e.target.closest('[data-more]'); if (more) { MORE.add(more.dataset.more); return render(); }
  if (e.target.closest('[data-page]')) { PAGE += 24; return render(); }
  if (e.target.closest('[data-clear]')) { G.forEach(g => SEL[g.id].clear()); ECO = false; ORDER = []; changed(); }
});
render();

// Colours (desktop): hover a dot = that colour's photo and link; leaving the card brings back its photo. The photos load on the first hover.
if (DESK) {
  const grid = document.getElementById('main');
  grid.addEventListener('mouseover', e => {
    const c = e.target.closest('.product'); if (!c) return;
    const p = items.find(x => x.s === c.dataset.s);
    if (!c.dataset.pre) { c.dataset.pre = 1; p.ci.forEach(x => { if (x) new Image().src = img(x); }); }
    const d = e.target.closest('[data-c]'); if (!d) return;
    c.querySelector('.thumb img').src = img(p.ci[d.dataset.c]); c.href = `#${p.s}?colour=${p.col[d.dataset.c].toLowerCase()}`;
    c.querySelectorAll('[data-c]').forEach(x => x.classList.toggle('on', x === d));
  });
  grid.addEventListener('mouseout', e => {
    const c = e.target.closest('.product'); if (!c || c.contains(e.relatedTarget)) return;
    c.querySelector('.thumb img').src = c.querySelector('.thumb img').dataset.main; c.href = c.dataset.href; c.querySelectorAll('.on').forEach(x => x.classList.remove('on'));
  });
}

// Reviews: desktop the reviews row with arrows, mobile the swipe row (as on business cards)
const revs = document.getElementById('reviews');
if (DESK) { revs.insertAdjacentHTML('beforeend', deskReviews()); wireDeskReviews(revs); }
else revs.insertAdjacentHTML('beforeend', `
    <div class="hscroll m-revs">${[0, 1, 2, 3, 4].map(() => `
      <article class="d-rev"><p class="d-rev-top"><img class="stars" src="assets/trustpilot.svg" alt="5 stars"><span><img src="assets/desktop/verified.svg" alt="">Verified</span></p>
        <b>Easy ordering, fast service.</b><p>Easy ordering, fast service. Faster delivery than what was promised.</p><small><b>Rhonda</b>, 3 days ago</small></article>`).join('')}</div>
    <p class="d-rev-note">Rated <b>4.5</b> / 5 based on <u>35,364 reviews</u>.</p>`);

// FAQ (live en-ie, when the page has one): the accordion of the category pages; desktop .d-acc, mobile .acc.oc-faq
const faqEl = document.getElementById('faqList');
if (faqEl && PFP.faq) {
  faqEl.className = DESK ? 'd-acc' : 'acc oc-faq';
  faqEl.innerHTML = PFP.faq.map(([q, a]) => `<details><summary>${q}<img src="assets/chevron.svg" alt=""></summary><p>${a}</p></details>`).join('');
}
})();
