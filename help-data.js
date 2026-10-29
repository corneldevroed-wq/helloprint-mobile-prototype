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
