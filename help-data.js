// Help Centre logic, shared by help-centre.html (hub), help-topic.html and help-article.html. The content (HELP_SUBS: topics →
// sub-topics → [question, slug]; HELP_ARTICLES: slug → article HTML) is in help-content.js, from the live en-ie Help Centre.

const hslug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Prototype switch "Answers" (left edge, on every help page; URL ?ans= + localStorage, as the other switches):
// F = Getting started as the hub with the topics sidebar; P = the earlier 6 topic cards (answers: always a page, help-article.html)
// P is hidden for now (Cornel, 2026-10-29: stick with F): F always, P only via ?ans=page in the URL (code kept)
const HELP_MODE = new URLSearchParams(location.search).get('ans') === 'page' ? 'page' : 'faq';
const helpTopicUrl = id => id === 'start' ? 'help-centre.html' : 'help-topic.html?t=' + id;   // Getting started = the hub, every other topic its own page
const helpUrl = q => 'help-article.html?q=' + (HELP_SLUG[q] || hslug(q));   // every answer has its own page (isolated article URLs needed, Cornel 2026-10-29)
// Sub-topics (Cornel, 2026-10-29: M): on desktop they unfold under the active topic in the left menu; on mobile the section tabs
// (the menu sits below the content there). Rejected: tabs above the questions on desktop.
const helpSubMenu = () => DESK;
if (helpSubMenu()) document.documentElement.classList.add('hc-submenu');   // CSS: no sticky tabs, so sections land closer under the header
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

// Home (id 'start') = the hub: the most-read articles as cards (icon, title, short explanation, Read more; Cornel 2026-10-29)
// and other common questions as rows; all live articles from help-content.js
const HELP_POPULAR = [
  ['edit', 'Can I change my order?'], ['local_shipping', 'How can I track my order?'], ['task_alt', 'How do I approve my proof?'],
  ['upload', 'What file type should I use when uploading my design?'], ['receipt', 'Downloading invoices & credit notes'], ['error', 'How do I file a complaint?'],
];
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
function helpSide(sideEl, current, subs, base = '', currentSub) {   // all topics, the current one marked; M: its sub-topics underneath
  const sub = t => t === current && subs && subs.length > 1 && helpSubMenu()
    ? `<ul class="ht-subnav">${subs.map((s, i) => `<li><a href="${base}#${hslug(s.name)}"${base ? '' : ` data-tab-link="${hslug(s.name)}"`}${(base ? s === currentSub : !i) ? ' class="active"' : ''}>${s.name}</a></li>`).join('')}</ul>` : '';
  sideEl.innerHTML = `<nav aria-label="Help topics"><ul class="ht-nav">${HELP_TOPICS.map(t => `<li><a href="${helpTopicUrl(t.id)}"${t === current ? ' aria-current="page"' : ''}><span class="material-symbols-rounded" aria-hidden="true">${t.ms}</span>${t.name}</a>${sub(t)}</li>`).join('')}</ul></nav>`;
}
function helpFaq(qs) {   // [[q, slug]] as rows to the article page: the look of the FAQ (lines, question size), an arrow right instead of the fold
  return `<ul class="hc-rows">${qs.map(([q]) => `<li><a href="${helpUrl(q)}">${q}<img class="chev" src="assets/category/arrow.svg" alt=""></a></li>`).join('')}</ul>`;
}
function helpTopicView(sideEl, bodyEl, topic) {   // the topic page: sidebar + head, sub-topic chips, per sub-topic the questions
  const subs = HELP_SUBS[topic.id];
  helpSide(sideEl, topic, subs);
  bodyEl.innerHTML = `
    <h1>${topic.name}</h1>
    <p class="ht-lead">${topic.n} answers about ${topic.name.toLowerCase()}. Can't find yours? Chat with us.</p>
    ${subs.length > 1 && !helpSubMenu() ? `<nav class="tabs" id="tabs" aria-label="Sub-topics">${subs.map((s, i) => `<a href="#${hslug(s.name)}" data-tab-link="${hslug(s.name)}"${i ? '' : ' class="active"'}>${s.name}</a>`).join('')}</nav>` : ''}
    ${subs.map(s => `<section class="ht-sec" id="${hslug(s.name)}" data-tab-target><h2>${s.name}</h2>${helpFaq(s.q)}</section>`).join('')}`;
  helpTabs();
  const h = location.hash && document.getElementById(location.hash.slice(1)); if (h) h.scrollIntoView();   // #sub-topic (from the article page menu)
  setTimeout(() => dispatchEvent(new Event('scroll')), 50);   // mark the right tab / menu sub-topic straight away
}
// The section tabs of the category pages (promotional.html): click scrolls to the section, the active tab follows the scroll
function helpTabs() {
  const links = [...document.querySelectorAll('[data-tab-link]')], targets = [...document.querySelectorAll('[data-tab-target]')];   // the tabs or the menu sub-topics (M)
  if (!links.length) return;
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-tab-link]'); if (!a) return;
    e.preventDefault(); document.getElementById(a.dataset.tabLink).scrollIntoView({ behavior: 'smooth' });
  });
  const sync = () => {
    let cur = targets[0];
    for (const t of targets) if (t.getBoundingClientRect().top <= (DESK ? 200 : 150)) cur = t;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) cur = targets.at(-1);
    links.forEach(a => { const on = a.dataset.tabLink === cur.id; if (on && !a.classList.contains('active') && a.closest('#tabs')) a.scrollIntoView({ block: 'nearest', inline: 'nearest' }); a.classList.toggle('active', on); });
  };
  addEventListener('scroll', sync, { passive: true });
  const bar = document.getElementById('tabs'); if (!bar) return;
  const more = () => bar.classList.toggle('more', bar.scrollLeft + bar.clientWidth < bar.scrollWidth - 2);   // fade while tabs hide on the right
  more(); bar.addEventListener('scroll', more, { passive: true }); addEventListener('resize', more);
}
