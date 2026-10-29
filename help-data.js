// Help Centre content, shared by help-centre.html (hub) and help-article.html (article page); the topic listing page will use it too.
// Questions from the live en-ie Help Centre (helloprint.com/en-ie/help-centre); short answers are placeholders for the prototype,
// full articles (HELP_ARTICLES) follow the live text. Naming as the prototype: shipping address, billing address.

const hslug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Prototype switch "Answers" (left edge, on every help page; URL ?ans= + localStorage, as the other switches):
// F = FAQ, answers fold open on the topic page (the PDP / category FAQ accordion); P = a page per answer (help-article.html)
const HELP_MODE = (() => {
  const u = new URLSearchParams(location.search).get('ans');
  if (u === 'faq' || u === 'page') { try { localStorage.setItem('hp-hc-ans', u); } catch (e) {} return u; }
  try { const v = localStorage.getItem('hp-hc-ans'); if (v === 'faq' || v === 'page') return v; } catch (e) {}
  return 'faq';
})();
const helpTopicUrl = id => id === 'start' ? 'help-centre.html' : 'help-topic.html?t=' + id;   // Getting started = the hub (F), every other topic its own page
function helpUrl(q) {   // where a question goes: its answer on the topic page (F, opened via #slug) or its own page (P)
  const s = hslug(q), f = helpFind(s);
  return HELP_MODE === 'page' ? 'help-article.html?q=' + s : helpTopicUrl(f ? f.topic.id : 'ordering') + '#' + s;
}
function helpSwitch() {
  document.body.insertAdjacentHTML('beforeend', `<div class="desk-switch" role="group" aria-label="Prototype versions"><span>Answers</span>${[['faq', 'F'], ['page', 'P']].map(([v, l]) => `<button data-ans="${v}" aria-pressed="${v === HELP_MODE}" title="${v === 'faq' ? 'FAQ: answers fold open' : 'A page per answer'}">${l}</button>`).join('')}</div>`);
  document.querySelector('[data-ans]').parentNode.addEventListener('click', e => {
    const b = e.target.closest('[data-ans]'); if (!b || b.dataset.ans === HELP_MODE) return;
    const u = new URL(location.href); u.searchParams.set('ans', b.dataset.ans); location.href = u.toString();
  });
}

// Sub-topics with all their questions [question, short answer] (live: Ordering; the other topics follow when we build them)
const HELP_SUBS = {
  start: [
    { name: 'How HelloPrint works', q: [
      ['How does ordering at HelloPrint work?', 'Choose your product and options, add your design (upload, Canva or later) and pay. We check your file, print it and ship it to your door.'],
      ['Do I need an account to order?', 'No, you can order as a guest. With an account you can track your orders, reorder in two clicks and download your invoices.'],
      ['Are your prices including VAT?', 'You choose: switch between prices with and without Irish VAT (23%) on the product page and in the cart.'],
      ['How long does delivery take?', 'Every delivery option shows an estimated day and a latest date. Saver is the cheapest, Express the fastest.'] ] },
    { name: 'Your design', q: [
      ['Which file formats can I upload?', 'PDF works best; we also accept AI, JPG and PNG. Use 300 dpi and 3 mm bleed on every side.'],
      ["I don't have a design yet, can you help?", 'Yes: design online with Canva templates, or let our designers make it for you.'],
      ['Will someone check my file?', 'Every file gets a free basic check before printing. With the Premium check our designers also fix small issues.'] ] },
  ],
  ordering: [
    { name: 'Artwork check & digital proof', q: [
      ['What is a digital proof?', 'A digital proof is a PDF of your file as it will be printed. You check it and approve it before we start production.'],
      ['What is and what is not included in a Premium/Deluxe Artwork Check?', 'Our designers check resolution, bleed, fonts and colours and fix small issues. Design changes are not included.'],
      ['How long does an artwork check take?', 'Usually within one working day. You get an e-mail as soon as your proof is ready.'],
      ['Can I make changes to my file?', 'Yes, until you approve the proof. Upload a new file from My Account → Orders.'],
      ["I don't see all my designs on the print proof?", 'Each design gets its own proof. Check the other proofs in the same e-mail, or contact us.'],
      ['How do I approve my proof?', 'Open the proof from the e-mail or My Account, check every page and click Approve.'],
      ['What happens if I miss my proof approval deadline?', 'Your delivery date moves with the days you approve later. We send a reminder before the deadline.'] ] },
    { name: 'Before ordering', q: [
      ["I can't find the product I'm looking for, what can I do?", 'Search the site or request a quote: our specialists can print most things that are not in the catalogue.'],
      ['Is my order guaranteed to be delivered on the chosen date?', 'We show an estimated day and a latest date for every delivery option; if we miss the latest date, we make it right.'],
      ['What is Secured Delivery?', "An option that guarantees your delivery date. If it's late, you get the delivery costs back."],
      ['Can I have products packaged separately or in a special way?', 'Yes, ask for it in a quote request. Extra packaging costs depend on the product.'],
      ['Can I request a sample?', 'For most papers you can order a free sample pack from the product page.'],
      ['How do I order printed products with multiple designs?', 'Choose the number of designs in the configurator and upload one file per design.'],
      ['How do I upload my multi-page or double-sided artwork?', 'Upload one PDF with the pages in order: front first, then back.'],
      ['When do I upload my artwork?', 'Right after ordering, or later from My Account. Production starts when your file is approved.'],
      ['How do I add a discount voucher to my order?', 'Enter the code in the cart, under the order summary, and click Apply.'],
      ['Why is my discount voucher not working?', "Check the end date and the minimum order value. Codes can't be combined."],
      ['Can I see a proof before paying for my order?', 'Yes, with the Premium artwork check you see a proof first, then you pay.'],
      ['What does the status assigned to my order mean?', 'Every status is explained in My Account → Orders; tap the status to see what happens next.'],
      ['What is the biggest file size I can upload?', 'Up to 1 GB per file. For larger files, use a download link in a quote request.'],
      ['How do I request a quote?', 'Use Request a quote: tell us what, how many and when. You get a price within a few hours.'],
      ["Printing something that isn't in our catalogue?", 'Request a quote. Our specialists find the right production partner for you.'],
      ['Ordering a custom size', 'Choose "Custom size" in the configurator, or request a quote for very large or small formats.'] ] },
    { name: 'After ordering', q: [
      ['Why have I not received my order confirmation?', 'Check your spam folder. You also see every order in My Account → Orders.'],
      ['What is the deadline for submitting my design?', 'Upload your design before the deadline shown in your order; after that the delivery date moves.'],
      ['Can I change my order?', 'Yes, until it goes into production: open the order in My Account and choose Change order.'],
      ['Can I repeat a previous order?', 'Yes: My Account → Orders → Reorder. Your file and options are filled in.'],
      ['Can I cancel my order?', 'Free of charge until your artwork is approved. After that, production has started.'],
      ['Can I return my order?', "Printed products are made for you, so we can't take them back. Something wrong? Report a problem."],
      ['Where can I find my order status?', 'In My Account → Orders, with track & trace once it ships.'],
      ["Why can't I make any modifications to my order once it has gone into production?", 'Once printing has started, the press and the paper are already set up for your order.'],
      ['How do I change my artwork file after uploading?', "Upload a new file from My Account → Orders, as long as you haven't approved the proof."],
      ['Can I change the quantity of my order after I placed it?', 'Until production starts: contact us and we change it for you.'],
      ["I'm missing the accessory I ordered with my purchase. What now?", 'Accessories are sometimes shipped separately. Check your track & trace, or report a problem.'],
      ['How do I cancel a specific product instead of my entire order?', 'Open the order in My Account and cancel the product, as long as its artwork is not approved.'],
      ['How can I download designs from my previous orders?', 'My Account → Orders → open the order → Download design.'],
      ['Why did the delivery date change since I placed the order?', 'Usually because the proof was approved later than planned. The new date is in My Account.'],
      ['Why is my order "On hold"?', 'We need something from you: usually a file or a payment. Check your e-mail or My Account.'] ] },
  ],
};

// Topics on the hub: 3 questions each; n = the number of articles (counted from the sub-topics where we have them)
const HELP_TOPICS = [
  { id: 'start', ms: 'rocket_launch', name: 'Getting started', n: 0, q: ['How does ordering at HelloPrint work?', 'Do I need an account to order?', 'Which file formats can I upload?'] },   // F: the first topic on the hub (Cornel, 2026-10-29)
  { id: 'ordering', ms: 'local_mall', name: 'Ordering', n: 16, q: ['Can I change my order?', 'Can I cancel my order?', 'How do I request a quote?'] },
  { id: 'design', ms: 'upload', name: 'Design & upload', n: 12, q: ['How do I upload my artwork?', 'How do I approve my proof?', 'What is the biggest file size I can upload?'] },
  { id: 'payment', ms: 'receipt', name: 'Payment & invoicing', n: 8, q: ['Where do I download my invoice?', 'What payment methods do you accept?', 'Can I pay on account?'] },
  { id: 'delivery', ms: 'delivery_truck_speed', name: 'Delivery & tracking', n: 7, q: ['Where can I find my order status?', 'Is my order guaranteed to be delivered on the chosen date?', 'Why did the delivery date change?'] },
  { id: 'account', ms: 'account_circle', name: 'Account', n: 9, q: ['Where do I see all my orders?', 'Can I repeat a previous order?', 'How do I update my details?'] },
  { id: 'complaints', ms: 'error', name: 'Complaints', n: 5, q: ['How do I report a problem with my order?', 'Can I return my order?', 'What can I get if my print is wrong or damaged?'] },
];
HELP_TOPICS.forEach(t => { if (HELP_SUBS[t.id]) t.n = HELP_SUBS[t.id].reduce((n, s) => n + s.q.length, 0); });

// Getting started = the hub (F): quick links to the things people come to do, and the most common questions
const HELP_QUICK = [
  ['local_shipping', 'Track my order', '#my-account-orders'], ['error', 'Report a problem', '#report-a-problem'], ['request_quote', 'Request a quote', '#new2contactform?type=inquiry'],
  ['upload', 'Upload my artwork', '#my-account-orders'], ['receipt', 'Download an invoice', '#my-account-invoices'], ['edit', 'Change my order', '#my-account-orders'],
];
const HELP_COMMON = ['How does ordering at HelloPrint work?', 'Can I change my order?', 'Where can I find my order status?', 'Which file formats can I upload?', 'How long does delivery take?', 'Do I need an account to order?'];

// Full articles (live text, our naming); every other question shows its short answer
const HELP_ARTICLES = {
  'can-i-change-my-order': `
    <p>If your order is unpaid or the file(s) haven't been uploaded yet, you can still make changes. However, once the order enters production, modifications or cancellations are no longer possible. Once your order is paid for and the artwork is approved, it goes into production, and you can no longer make any modifications.</p>
    <p>You can easily check the status of your order and make the following changes on the <a href="#my-account-orders">Orders</a> page in <a href="login.html">My Account</a>.</p>
    <h2>How do I make changes to my order?</h2>
    <p>There are several changes you can make to your order.</p>
    <h3>I want to make changes to my file</h3>
    <ol>
      <li>If you haven't reviewed your digital proof yet but you already know you want to make changes to your current file, open the upload and proof page and choose "There is a mistake in my file / I would like to upload a new file". This takes you to a page where you can upload a new file.</li>
      <li>If you have already approved the digital proof, you will find a button "Change the submitted file(s)". This takes you to a page where you can upload your files again.</li>
    </ol>
    <h3>I want to change my shipping address</h3>
    <p>You can change the shipping address yourself before payment and proofing. Go to the Orders page in My Account and select the order. The shipping address for this order is at the top of the page, under the order number. Click Edit to open your address book: choose an address that is already in your account, or add a new one.</p>
    <h3>I want to change my billing address</h3>
    <p>To change the billing address of your order, please contact our <a href="#new2contactform">customer experience team</a>.</p>
    <h3>I can't find any buttons on my page anymore</h3>
    <p>This most likely means you have already approved your artwork and paid for your order. After that, no changes can be made to the order. If something isn't working or you can't find the right page, our <a href="#new2contactform">customer experience team</a> is happy to help.</p>`,
};

// Find a question by its slug: { q, a, topic, sub } (sub = the sub-topic it belongs to, if we have the sub-topics of its topic)
function helpFind(slug) {
  for (const [tid, subs] of Object.entries(HELP_SUBS)) for (const sub of subs) for (const [q, a] of sub.q)
    if (hslug(q) === slug) return { q, a, topic: HELP_TOPICS.find(t => t.id === tid), sub };
  for (const t of HELP_TOPICS) for (const q of t.q) if (hslug(q) === slug) return { q, a: '', topic: t, sub: null };
  return null;
}

// The topic view (F on the hub, the topic page): sidebar = all topics (the current one marked), body = head, sub-topic chips,
// per sub-topic the questions: F = the category-page FAQ (#<question> opens one), P = the hub rows to the article page.
// opts.h = 'h1' (topic page) or 'h2' (hub, under "How can we help?"); opts.back = a "Help Centre" row on top of the sidebar.
function helpSide(sideEl, current) {   // all topics, the current one marked; Getting started = back to the hub
  sideEl.innerHTML = `<div class="hc-card"><ul class="ht-nav">${HELP_TOPICS.map(t => `<li><a href="${helpTopicUrl(t.id)}"${t === current ? ' aria-current="page"' : ''}><span class="material-symbols-rounded" aria-hidden="true">${t.ms}</span>${t.name}</a></li>`).join('')}</ul></div>`;
}
const helpAnswer = (q, a) => HELP_ARTICLES[hslug(q)] ? `<div class="ha-text ht-long">${HELP_ARTICLES[hslug(q)]}</div>` : `<p>${a}</p>`;
function helpFaq(qs) {   // [[q, a]]: F = the category-page FAQ (#<question> opens one), P = the hub rows to the article page
  return HELP_MODE === 'page'
    ? `<ul class="hc-qlist">${qs.map(([q]) => `<li><a href="${helpUrl(q)}">${q}<img class="chev" src="assets/category/arrow.svg" alt=""></a></li>`).join('')}</ul>`
    : `<div class="${DESK ? 'd-acc' : 'acc oc-faq'}">${qs.map(([q, a]) => `<details id="${hslug(q)}"><summary>${q}<img src="assets/chevron.svg" alt=""></summary>${helpAnswer(q, a)}</details>`).join('')}</div>`;
}
function helpTopicView(sideEl, bodyEl, topic) {   // the topic page: sidebar + head, sub-topic chips, per sub-topic the questions
  const subs = HELP_SUBS[topic.id] || [{ name: 'Popular questions', q: topic.q.map(q => [q, (helpFind(hslug(q)) || {}).a || 'The full answer comes from the live Help Centre.']) }];
  helpSide(sideEl, topic);
  bodyEl.innerHTML = `
    <div class="ht-head"><span class="hc-ico material-symbols-rounded" aria-hidden="true">${topic.ms}</span><h1>${topic.name}</h1></div>
    <p class="ht-lead">${topic.n} answers about ${topic.name.toLowerCase()}. Can't find yours? Chat with us.</p>
    ${subs.length > 1 ? `<nav class="tabs" id="tabs" aria-label="Sub-topics">${subs.map((s, i) => `<a href="#${hslug(s.name)}" data-tab-link="${hslug(s.name)}"${i ? '' : ' class="active"'}>${s.name}</a>`).join('')}</nav>` : ''}
    ${subs.map(s => `<section class="ht-sec" id="${hslug(s.name)}" data-tab-target><h2>${s.name}</h2>${helpFaq(s.q)}</section>`).join('')}`;
  helpTabs();
}
// The section tabs of the category pages (promotional.html): click scrolls to the section, the active tab follows the scroll
function helpTabs() {
  const links = [...document.querySelectorAll('#tabs a')], targets = [...document.querySelectorAll('[data-tab-target]')];
  if (!links.length) return;
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-tab-link]'); if (!a) return;
    e.preventDefault(); document.getElementById(a.dataset.tabLink).scrollIntoView({ behavior: 'smooth' });
  });
  const sync = () => {
    let cur = targets[0];
    for (const t of targets) if (t.getBoundingClientRect().top <= (DESK ? 200 : 150)) cur = t;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) cur = targets.at(-1);
    links.forEach(a => { const on = a.dataset.tabLink === cur.id; if (on && !a.classList.contains('active')) a.scrollIntoView({ block: 'nearest', inline: 'nearest' }); a.classList.toggle('active', on); });
  };
  addEventListener('scroll', sync, { passive: true });
}
// #<question>: open that answer and scroll to it
function helpOpenHash() {
  const d = location.hash && document.getElementById(location.hash.slice(1));
  if (d && d.tagName === 'DETAILS') { d.open = true; d.scrollIntoView({ block: 'start' }); }
}

