// Shared shell and behaviour for every page of the HelloPrint mobile prototype:
// header + USP bar, footer, drill-down menu, search, VAT toggle and local routing.
// Pages mark where the shell goes with <div data-shell="header"> and <footer data-shell="footer">.

const SHELL_HEADER = `
  <header class="header">
    <div class="nav">
      <div class="nav-row">
        <div class="side"><a href="#menu" data-proto="menu" aria-label="Menu"><img class="icon" src="assets/menu.svg" alt=""></a></div>
        <a href="index.html" aria-label="HelloPrint home"><img class="logo" src="assets/logo.svg" alt="HelloPrint"></a>
        <div class="side right">
          <a href="#account" aria-label="Account"><img class="icon" src="assets/account.svg" alt=""></a>
          <a href="#cart" aria-label="Cart"><img class="icon" src="assets/bag.svg" alt=""></a>
        </div>
      </div>
      <form class="search" role="search" data-proto="search" onsubmit="return false">
        <input type="search" placeholder="Search printed products" aria-label="Search" style="cursor:pointer">
        <button type="submit" aria-label="Search"><img src="assets/search.svg" alt=""></button>
      </form>
    </div>
  </header>
  <div class="usp">
    <div class="usp-left"><img src="assets/check.svg" alt="">Best price guaranteed</div>
    <button class="vat" id="vatBtn" aria-haspopup="menu" aria-expanded="false">
      <img class="flag" src="assets/flag.png" alt="">
      <span id="vatLabel">Excl VAT</span>
      <img class="chev" src="assets/chevron-sm.svg" alt="">
    </button>
    <div class="vat-menu" id="vatMenu" role="menu">
      <button role="menuitemradio" aria-checked="true" data-vat="0">Excl VAT</button>
      <button role="menuitemradio" aria-checked="false" data-vat="1">Incl VAT</button>
    </div>
  </div>
`;
const SHELL_FOOTER = `
      <div class="help" style="width:100%">
        <div class="avatars">
          <div class="avatar"><img src="assets/agent.png" alt=""></div>
          <div class="avatar lg"><img src="assets/agent.png" alt=""></div>
          <div class="avatar"><img src="assets/agent.png" alt=""></div>
        </div>
        <h2>Do you need help?</h2>
        <div class="pills">
          <a class="pill" href="#cs">Helpdesk</a>
          <a class="pill" href="#chat">Chat</a>
          <a class="pill" href="#new2contactform">E-mail</a>
        </div>
        <div class="rating"><img class="stars" src="assets/trustpilot.svg" alt="4.5 stars">4.5 out of 5 on Trustpilot</div>
      </div>

      <div class="acc" data-acc="footer"></div>

      <nav class="socials" aria-label="Social media">
        <a href="#facebook" aria-label="Facebook"><img src="assets/s1.svg" alt=""></a>
        <a href="#twitter" class="tw" aria-label="Twitter"><img src="assets/s2.svg" alt=""></a>
        <a href="#youtube" aria-label="YouTube"><img src="assets/s3.svg" alt=""></a>
        <a href="#linkedin" aria-label="LinkedIn"><img src="assets/s4.svg" alt=""></a>
        <a href="#instagram" aria-label="Instagram"><img src="assets/s5.svg" alt=""></a>
        <a href="#whatsapp" aria-label="WhatsApp"><img src="assets/whatsapp.svg" alt=""></a>
      </nav>

      <div class="payments" aria-label="Payment methods">
        <div class="card"><img src="assets/pay-maestro.svg" alt="Maestro"></div>
        <div class="card"><img src="assets/pay-visa.svg" alt="Visa"></div>
        <div class="card"><img src="assets/pay-mastercard.svg" alt="Mastercard"></div>
        <div class="card"><img src="assets/pay-paypal.svg" alt="PayPal"></div>
        <div class="card"><img src="assets/pay-amex.svg" alt="American Express"></div>
        <div class="card"><img src="assets/pay-cardbg.svg" alt=""><img class="mark" src="assets/pay-diners.svg" alt="Diners Club" style="inset:17.64% 22.45% 19.06%;width:55.1%;height:63.3%"></div>
        <div class="card"><img src="assets/pay-cardbg2.svg" alt=""><img class="mark" src="assets/pay-discover.svg" alt="Discover" style="inset:39.7% 7.13% 40.63% 9.18%;width:83.69%;height:19.67%"></div>
        <div class="card"><img src="assets/pay-cardbg.svg" alt=""><img class="mark" src="assets/pay-jcb.svg" alt="JCB" style="inset:17.65% 20.41% 16.92%;width:59.18%;height:65.43%"></div>
      </div>

      <img class="logo" src="assets/logo-dark.svg" alt="HelloPrint">

      <div class="legal">
        <a href="#terms-and-conditions">Terms &amp; Conditions</a>
        <a href="#privacy-policy">Privacy Policy</a>
      </div>
`;
const SHELL_OVERLAYS = `
<div class="menu-layer" id="menu" aria-hidden="true">
  <div class="menu-overlay" data-menu-close></div>
  <nav class="menu-drawer" id="menuDrawer" aria-label="Menu"></nav>
</div>

<div class="search-layer" id="searchLayer" role="dialog" aria-label="Search" aria-hidden="true">
  <div class="search-head">
    <form class="search-field" role="search" id="searchForm">
      <img class="icon-search" src="assets/search/search.svg" alt="">
      <input type="search" id="searchInput" placeholder="Search printed products" aria-label="Search" autocomplete="off" enterkeyhint="search">
      <button type="button" class="clear" id="searchClear" aria-label="Clear search" hidden><img src="assets/search/clear.svg" alt=""></button>
    </form>
    <button class="search-cancel" id="searchCancel">Cancel</button>
  </div>
  <div class="search-body" id="searchResults"></div>
</div>
`;
// Checkout pages use a reduced header: logo + "Secure Checkout" (Figma 15738:4701)
const SHELL_CHECKOUT_HEADER = `
  <header class="header co-header">
    <div class="nav co-nav">
      <a href="index.html" aria-label="HelloPrint home"><img class="logo" src="assets/logo.svg" alt="HelloPrint"></a>
      <span class="co-secure"><img src="assets/checkout/encrypted.svg" alt="">Secure Checkout</span>
    </div>
  </header>`;
const headerSlot = document.querySelector('[data-shell="header"]');
if (headerSlot) headerSlot.outerHTML = SHELL_HEADER;
const checkoutSlot = document.querySelector('[data-shell="checkout-header"]');
if (checkoutSlot) checkoutSlot.outerHTML = SHELL_CHECKOUT_HEADER;
const footerSlot = document.querySelector('[data-shell="footer"]');
if (footerSlot) footerSlot.innerHTML = SHELL_FOOTER;
document.body.insertAdjacentHTML('beforeend', SHELL_OVERLAYS);

// Local routes: #slug links that have a screen in the prototype. Everything else stays an anchor.
const ROUTES = {
  'businesscards-printing': 'business-cards.html',
  // Business card product pages (product.html renders each type from products.js);
  // slugs from the category page, search, menu and the live site
  ...Object.fromEntries([
    ['classic-business-cards', 'classic-business-cards', 'standardbusinesscards'],
    ['eco-friendly-business-cards', 'eco-friendly-business-cards', 'eco-business-cards', 'recycledbusinesscards'],
    ['pvc-cards-white', 'pvc-cards-white', 'plastic-business-cards', 'whiteplasticbusinesscards'],
    ['deluxe-business-cards', 'deluxe-business-cards', 'foilbusinesscards'],
    ['business-cards-special-materials', 'business-cards-special-materials', 'special-materials', 'specialpaperbusinesscards'],
    ['multilayered-business-cards', 'multilayered-business-cards', 'multilayer-business-cards', 'businesscardsmultilayer810'],
  ].flatMap(([p, ...slugs]) => slugs.map(sl => [sl, 'product.html?p=' + p]))),
  'cart': 'cart.html',
  'details-shipping': 'details.html',
  'payment': 'payment.html',
};
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  const page = a && ROUTES[a.getAttribute('href').slice(1)];
  if (page) { e.preventDefault(); location.href = page; }
});

// Prices follow the VAT toggle; the choice is remembered between pages.
let inclVat = false;
try { inclVat = localStorage.getItem('hp-vat') === 'incl'; } catch (e) {}
// Irish VAT (Ireland flag in the header; the Figma cart shows VAT 23%)
const VAT_RATE = 0.23;
const fmt = n => '€' + (inclVat ? n * (1 + VAT_RATE) : n).toFixed(2);
const esc = t => t.replace(/&/g, '&amp;');
function updatePrices() {
  document.querySelectorAll('[data-price]').forEach(el => { el.textContent = fmt(+el.dataset.price); });
}

// Best sellers (home grid) — also used by search
const products = [
  { img: 'p1.png', bg: 'rgba(120,163,175,.1)', name: 'Stapled Booklets', qty: 500, price: 229.94, was: 229.94, badge: 'Great Value' },
  { img: 'p2.png', bg: 'rgba(241,228,195,.5)', name: 'Perfect Bound Brochures', qty: 100, price: 144.89, badge: 'Most Popular' },
  { img: 'p3.png', bg: 'rgba(96,111,115,.1)', name: 'Standard Flyers', qty: 500, price: 18.89 },
  { img: 'p4.png', bg: 'rgba(224,252,180,.5)', name: 'Classic Business Cards', qty: 500, price: 18.89, proto: 'product', href: '#classic-business-cards' },
  { img: 'p5.png', bg: 'rgba(96,111,115,.1)', name: 'Standard Flyers', qty: 500, price: 18.89 },
  { img: 'p6.png', bg: 'rgba(2,105,186,.1)', name: 'Standard Flyers', qty: 500, price: 18.89 },
  { img: 'p7.png', bg: 'rgba(206,5,1,.1)', name: 'Ebony Pens Matte', qty: 500, price: 135.99 },
  { img: 'p8.png', bg: 'rgba(28,162,89,.1)', name: 'Stickers on Roll', qty: 500, price: 54.59 },
];

// Accordions: product categories in "Browse all we offer", site links in the footer.
// Content taken from the helloprint.com/en-gb mega menu and footer. Links stay local
// to the prototype: each becomes #<slug>, ready to point at a local screen later.
const accItems = {
  browse: {
    'Promotional print': [['Booklets', 'brochure-and-booklet-printing'], ['Flyers', 'flyers'], ['Folded Leaflets', 'foldedleaflets'], ['Business Cards', 'businesscards-printing'], ['Cards & Vouchers', 'cards-and-invites'], ['Large Format', 'outdoor'], ['Promotional Gifts', 'goodies']],
    'Stationary': [['Business Cards', 'businesscards-printing'], ['Notes', 'notepad-printing'], ['Envelopes', 'envelopes'], ['Document Organisers', 'printed-folders'], ['Writing Instruments', 'printed-pens'], ['Office Accessories', 'stationery-and-office-supplies'], ['Calendars', 'calendars-printing']],
    'Stickers': [['Stickers on Roll', 'labels'], ['Labels On Roll', 'labels-on-roll'], ['Custom Size', 'customsizestickers'], ['Large Format', 'large-sticker-printing']],
    'Packaging': [['Food Packaging', 'food-packaging']],
    'Outdoor': [['Banners', 'banner-printing'], ['Cafe Barriers', 'cafebarrier'], ['Signs and Panels', 'panels-and-signs'], ['Flags', 'flag-printing'], ['Roller Banner', 'rollupbanners-printing'], ['Beach Flags', 'beachflag-printing'], ['Large Stickers', 'large-sticker-printing'], ['Pavement Signs', 'pavementsigns'], ['Outdoor Furniture', 'outdoor-furniture']],
    'Clothing': [['T-Shirts', 'tshirt-printing'], ['Sweatshirts', 'personalised-sweatshirts'], ['Polos', 'personalised-polo-shirts'], ['Jackets', 'printed-jackets'], ['Headwear', 'headwear-printing'], ['Workwear', 'workwear-printing'], ['Sportswear', 'sportswear'], ['Interior Textiles', 'interior-textiles']],
    'Corporate Gifts': [['Writing Instruments', 'printed-pens'], ['Office Supplies', 'office-supplies'], ['Drinkware', 'drinkware-printing'], ['Tech & Gadgets', 'personalised-gadgets'], ['Giveaways', 'goodies'], ['Outdoor & Leisure', 'promotional-outdoor-products'], ['Home & Living', 'home-living'], ['Food', 'promotional-food-drink']],
    'Hospitality & Events': [['Bar & Restaurant', 'industry/hospitality/restaurant'], ['Event & Festival', 'event-festivals-printing'], ['Exhibition & Trade Show', 'exhibitionmaterial'], ['Wedding', 'industry/wedding'], ['Sport Events', 'sportsproducts']],
  },
  footer: {
    'Who we are': [['About Us', 'about-us'], ['Our culture', 'our-culture'], ['Jobs', 'jobs'], ['Our Promises', 'our-promises'], ['Sustainability', 'sustainability'], ['Newsroom', 'blog/category/company'], ['Blog', 'blog']],
    'Our products': [['Promotional Products', 'promotional-printing'], ['Stationery', 'stationery-and-office-supplies'], ['Signage & Outdoor', 'outdoor'], ['Corporate Gifts', 'corporate-gifts'], ['Clothing & Textiles', 'clothing'], ['Packaging', 'all-packaging'], ['Photo Products', 'photo-printing'], ['Merch by HelloPrint', 'merch']],
    'Work together': [['Business Solutions', 'business-solutions'], ['Reseller Solutions', 'reseller-solutions'], ['Special Projects', 'special-projects'], ['HelloPrint non profit', 'nonprofits'], ['Become a partner', 'become-a-partner'], ['Book a Demo', 'book-a-demo']],
    'Resources and support': [['My Account', 'my-account'], ['Help Centre', 'cs'], ['Contact Us', 'new2contactform'], ['Request a quote', 'new2contactform?type=inquiry'], ['Always a Perfect Design', 'always-a-perfect-design'], ['Payment and Invoice', 'cs/categories/87-payment-and-invoice'], ['Shipping & Delivery', 'cs/categories/86-delivery']],
  },
};
document.querySelectorAll('[data-acc]').forEach(el => {
  el.innerHTML = Object.entries(accItems[el.dataset.acc]).map(([title, links]) => `
    <details>
      <summary>${esc(title)}<img src="assets/chevron.svg" alt=""></summary>
      ${links.length ? `<ul>${links.map(([t, href]) => `<li><a href="#${href}">${esc(t)}</a></li>`).join('')}</ul>` : ''}
    </details>`).join('');
});

// VAT toggle
const vatBtn = document.getElementById('vatBtn'), vatMenu = document.getElementById('vatMenu');
function setVat(incl) {
  inclVat = incl;
  try { localStorage.setItem('hp-vat', incl ? 'incl' : 'excl'); } catch (e) {}
  if (vatMenu) {
    vatMenu.querySelectorAll('button').forEach(x => x.setAttribute('aria-checked', (x.dataset.vat === '1') === incl));
    document.getElementById('vatLabel').textContent = incl ? 'Incl VAT' : 'Excl VAT';
  }
  updatePrices();
}
vatBtn?.addEventListener('click', e => {
  e.stopPropagation();
  const open = vatMenu.classList.toggle('open');
  vatBtn.setAttribute('aria-expanded', open);
});
vatMenu?.addEventListener('click', e => {
  const b = e.target.closest('button'); if (b) setVat(b.dataset.vat === '1');
});
document.addEventListener('click', () => { vatMenu?.classList.remove('open'); vatBtn?.setAttribute('aria-expanded', false); });
setVat(inclVat);

// Drill-down menu. Level 1 and "All products" come from Figma; the other sub-levels use the
// helloprint.com/en-gb mega menu. Leaf links stay local to the prototype (#slug).
const M = 'assets/menu/';
const menu = {
  root: { title: 'Menu', root: true, items: [
    { label: 'All products', letter: 'A', to: 'all' },
    { label: 'Promotional Prints', img: 'l1-promo.png', fit: 'contain', to: 'promo' },
    { label: 'Booklets', img: 'l1-booklets.png', to: 'booklets' },
    { label: 'Cards', img: 'l1-cards.png', to: 'cards' },
    { label: 'Stationary', img: 'l1-stationary.png', to: 'stationery' },
    { label: 'Banners', img: 'l1-banners.png', to: 'banners' },
    { label: 'Flags', img: 'l1-flags.png', to: 'flags' },
    { label: 'Signs', img: 'l1-signs.png', to: 'signs' },
    { label: 'Stickers', img: 'l1-stickers.png', to: 'stickers' },
    { label: 'Gifts', img: 'l1-promo.png', fit: 'contain', to: 'gifts' },
    { label: 'Bags', img: 'l1-bags.png', to: 'bags' },
    { label: 'Clothing', img: 'l1-clothing.png', to: 'clothing' },
  ]},
  all: { title: 'All Products', items: [
    { label: 'Promotional Prints', img: 'l2-promo.png', pos: 'left:0;top:26.1%;width:100%;height:62.92%', to: 'all-promo' },
    { label: 'Stationary', img: 'l2-stationary.png', pos: 'left:-12.5%;top:5.52%;width:112.51%;height:75.01%', to: 'all-stationery' },
    { label: 'Corporate Gifts', img: 'l2-gifts.png', fit: 'contain', to: 'all-gifts' },
    { label: 'Stickers', img: 'l2-stickers.png', fit: 'contain', to: 'all-stickers' },
    { label: 'Outdoor', img: 'l2-outdoor.png', fit: 'contain', to: 'all-outdoor' },
    { label: 'Packaging', img: 'l2-packaging.png', fit: 'contain', to: 'all-packaging' },
    { label: 'Hospitality', img: 'l2-hospitality.png', fit: 'contain', to: 'all-hospitality' },
    { label: 'Events', img: 'l2-events.png', pos: 'left:-11.25%;top:6.14%;width:122.51%;height:81.67%', to: 'all-events' },
    { label: 'Interior', img: 'l2-interior.png', fit: 'contain', to: 'all-interior' },
  ]},
};
// Text-only sub-levels: [title, [label, slug]...]
const sub = {
  promo: ['Promotional Prints', [['Booklets', 'brochure-and-booklet-printing'], ['Posters', 'poster-printing'], ['Flyers', 'flyers'], ['Books', 'book-printing'], ['Folded Leaflets', 'foldedleaflets'], ['Business Cards', 'businesscards-printing']]],
  booklets: ['Booklets', [['Stapled Booklets', 'booklets'], ['Glued Hardback Books', 'hardcoverbooks'], ['Perfect Bound Brochures', 'perfectboundbrochures'], ['Thread Sewn Hardcover Books', 'threadsewnhardcoverbooks'], ['Wire Bound Brochures', 'wireobooklets'], ['Loop Stitched Brochures', 'loopstitchedbrochures']]],
  cards: ['Cards', [['Business Cards', 'businesscards-printing'], ['Eco Business Cards', 'recycledbusinesscards'], ['Business Cards with Special Paper Materials', 'specialpaperbusinesscards'], ['Greeting Cards', 'greetingcards'], ['Business Cards with Exclusive Finishes', 'foilbusinesscards'], ['Postcards', 'postcards']]],
  stationery: ['Stationary', [['Notepads', 'notepads'], ['Letterheads', 'letterheads'], ['Envelopes', 'envelopes'], ['Pens', 'ballpoint-pens'], ['Folders', 'folders'], ['Notebooks', 'notebook-printing']]],
  banners: ['Banners', [['Custom Banners', 'banners'], ['Cardboard Roller Banners', 'cardboardrollupbanners'], ['Rollup Banners', 'rollupbanners-printing'], ['Fence Banners', 'fencebanners'], ['Construction Fence Banners', 'constructionfencebanners'], ['Banners with X frame', 'xbanners']]],
  flags: ['Flags', [['Custom Flags', 'flagcustomsize'], ['Feather Flags', 'featherflags'], ['Banner Flags', 'bannerflags'], ['Teardrop Flags', 'teardropflags'], ['Facade Flags', 'facadeflags'], ['Bunting Flags', 'buntingflags']]],
  signs: ['Signs', [['Outdoor Signs', 'outdoorsigns'], ['Foamex Signs', 'foamexsigns'], ['Indoor Signs', 'indoorsigns'], ['Aluminium Signs', 'aluminiumsigns'], ['Eco Signs', 'ecosigns'], ['Correx Signs', 'correxsigns']]],
  stickers: ['Stickers', [['Individual Stickers', 'stickers'], ['Stickers on Roll', 'labels'], ['Custom Shape Stickers', 'customsizestickers'], ['Vinyl Stickers', 'vinylstickers'], ['Window Stickers', 'windowstickers'], ['Sticker Sheets', 'stickersonsheet']]],
  gifts: ['Gifts', [['Notebooks', 'notebook-printing'], ['Water Bottles', 'printed-water-bottles'], ['Pens', 'printed-pens'], ['Mugs', 'personalised-mugs'], ['Umbrellas', 'umbrellas'], ['Top Gifts', 'top-gifts']]],
  bags: ['Bags', [['Tote Bags', 'printing-cottonbags'], ['Backpacks', 'printed-backpacks'], ['Drawstring Bags', 'printed-drawstringbags'], ['Shopper Bags', 'printed-shopperbags'], ['Travel bags', 'promotional-travel-bags'], ['Cooler Bags', 'cool-bag']]],
  clothing: ['Clothing', [['T-Shirts', 'tshirt-printing'], ['Hoodies & Sweatshirts', 'personalised-sweatshirts'], ['Polo Shirts', 'personalised-polo-shirts'], ['Caps', 'personalised-caps'], ['Jackets', 'printed-jackets'], ['Workwear', 'workwear-printing']]],
  'all-promo': ['Promotional Prints', [['Booklets', 'brochure-and-booklet-printing'], ['Flyers', 'flyers'], ['Folded Leaflets', 'foldedleaflets'], ['Business Cards', 'businesscards-printing'], ['Cards & Vouchers', 'cards-and-invites'], ['Large Format', 'outdoor'], ['Promotional Gifts', 'goodies']]],
  'all-stationery': ['Stationary', [['Business Cards', 'businesscards-printing'], ['Notes', 'notepad-printing'], ['Envelopes', 'envelopes'], ['Document Organisers', 'printed-folders'], ['Writing Instruments', 'printed-pens'], ['Office Accessories', 'stationery-and-office-supplies'], ['Calendars', 'calendars-printing']]],
  'all-gifts': ['Corporate Gifts', [['Writing Instruments', 'printed-pens'], ['Office Supplies', 'office-supplies'], ['Drinkware', 'drinkware-printing'], ['Tech & Gadgets', 'personalised-gadgets'], ['Giveaways', 'goodies'], ['Outdoor & Leisure', 'promotional-outdoor-products'], ['Home & Living', 'home-living'], ['Food', 'promotional-food-drink']]],
  'all-stickers': ['Stickers', [['Stickers on Roll', 'labels'], ['Labels On Roll', 'labels-on-roll'], ['Custom Size', 'customsizestickers'], ['Large Format', 'large-sticker-printing']]],
  'all-outdoor': ['Outdoor', [['Banners', 'banner-printing'], ['Cafe Barriers', 'cafebarrier'], ['Signs and Panels', 'panels-and-signs'], ['Flags', 'flag-printing'], ['Roller Banner', 'rollupbanners-printing'], ['Beach Flags', 'beachflag-printing'], ['Large Stickers', 'large-sticker-printing'], ['Pavement Signs', 'pavementsigns'], ['Outdoor Furniture', 'outdoor-furniture']]],
  'all-packaging': ['Packaging', [['Food Packaging', 'food-packaging']]],
  'all-hospitality': ['Hospitality', [['Bar & Restaurant', 'industry/hospitality/restaurant'], ['Event & Festival', 'event-festivals-printing']]],
  'all-events': ['Events', [['Festival', 'event-festivals-printing'], ['Wedding', 'industry/wedding'], ['Sport Events', 'sportsproducts'], ['Exhibition & Trade Show', 'exhibitionmaterial']]],
  'all-interior': ['Interior', [['Wall Decoration', 'wall-decoration'], ['Interior Textiles', 'interior-textiles'], ['Home & Living', 'home-living']]],
};
for (const [key, [title, links]] of Object.entries(sub)) {
  menu[key] = { title, items: links.map(([label, slug]) => ({ label, href: '#' + slug })) };
}

const drawer = document.getElementById('menuDrawer'), menuLayer = document.getElementById('menu');
const stack = [];
const thumb = it => it.letter
  ? `<span class="thumb-sm"><span class="letter">${it.letter}</span></span>`
  : it.img ? `<span class="thumb-sm${it.fit === 'contain' ? ' contain' : ''}"><img src="${M + it.img}" alt=""${it.pos ? ` style="${it.pos}"` : ''}></span>` : '';
function renderPanel(key) {
  const lvl = menu[key], el = document.createElement('div');
  el.className = 'panel';
  el.innerHTML = `
    <div class="panel-head">
      ${lvl.root ? `<span class="label">${lvl.title}</span>` : `<button class="back" data-menu-back><img src="${M}back.svg" alt="">${esc(lvl.title)}</button>`}
      <button class="close" data-menu-close aria-label="Close menu"><img src="${M}close.svg" alt=""></button>
    </div>
    <ul class="menu-list">${lvl.items.map(it => `<li>${it.to
      ? `<button class="menu-item" data-menu-to="${it.to}">${thumb(it)}<span class="label">${esc(it.label)}</span><img class="chev" src="${M}arrow.svg" alt=""></button>`
      : `<a class="menu-item text" href="${it.href}" data-menu-close><span class="label">${esc(it.label)}</span></a>`}</li>`).join('')}</ul>
    ${lvl.root ? `<div class="panel-foot">
      <a class="btn primary" href="#login" data-menu-close>Login / Register</a>
      <a class="btn outline" href="#country" data-menu-close><img class="flag" src="assets/flag.png" alt="">Ireland</a>
    </div>` : ''}`;
  return el;
}
function pushPanel(key) {
  const el = renderPanel(key);
  if (stack.length) { el.classList.add('next'); drawer.append(el); el.offsetWidth; stack.at(-1).classList.add('prev'); el.classList.remove('next'); }
  else drawer.append(el);
  stack.push(el);
}
function popPanel() {
  const el = stack.pop();
  stack.at(-1).classList.remove('prev');
  el.classList.add('next');
  el.addEventListener('transitionend', () => el.remove(), { once: true });
}
function openMenu() {
  drawer.innerHTML = ''; stack.length = 0; pushPanel('root');
  menuLayer.classList.add('open'); menuLayer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
}
function closeMenu() {
  menuLayer.classList.remove('open'); menuLayer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}
document.querySelector('[data-proto="menu"]')?.addEventListener('click', e => { e.preventDefault(); openMenu(); });
document.addEventListener('click', e => {
  const t = e.target.closest('[data-open-menu]'); if (!t) return;
  e.preventDefault(); openMenu(); pushPanel(t.dataset.openMenu);
});
menuLayer.addEventListener('click', e => {
  const to = e.target.closest('[data-menu-to]'), back = e.target.closest('[data-menu-back]'), close = e.target.closest('[data-menu-close]');
  if (to) pushPanel(to.dataset.menuTo);
  else if (back) popPanel();
  else if (close) closeMenu();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menuLayer.classList.contains('open')) closeMenu(); });

// Search. Product rows from the Figma search screen plus the home best sellers; categories
// from the Figma search screen plus the menu. Results stay local to the prototype (#slug).
const slug = t => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const S = 'assets/search/';
const searchProducts = [
  { name: 'Classic business cards', img: S + 'classic.png', bg: 'rgba(224,252,180,.5)', qty: 500, price: 18.89, proto: 'pdp' },
  { name: 'Eco business cards', img: S + 'eco.png', qty: 500, price: 18.89 },
  { name: 'Plastic business cards', img: S + 'plastic.png', qty: 500, price: 18.89 },
  { name: 'Deluxe business cards', img: S + 'deluxe.png', qty: 500, price: 18.89 },
  { name: 'Special materials', img: S + 'special.png', qty: 500, price: 18.89, tags: 'business cards' },
  { name: 'Multilayer business cards', img: S + 'multilayer.png', qty: 500, price: 18.89 },
  ...products.map(p => ({ name: p.name, img: 'assets/' + p.img, bg: p.bg, qty: p.qty, price: p.price })),
].filter((p, i, a) => a.findIndex(q => q.name.toLowerCase() === p.name.toLowerCase()) === i);
const searchCats = (() => {
  const seen = new Map();
  const add = (label, href, proto) => { const k = label.toLowerCase(); if (!seen.has(k)) seen.set(k, { label, href: href || '#' + slug(label), proto }); };
  add('Business cards', '#businesscards-printing', 'category');
  ['Plastic Business Cards', 'Business opening', 'Promotional Products', 'Chopping Boards'].forEach(t => add(t));
  for (const lvl of Object.values(menu)) lvl.items.forEach(it => add(it.label, it.href));
  return [...seen.values()];
})();
const popularCats = ['Booklets', 'Business cards', 'Flyers', 'Banners', 'Posters'];

const searchLayer = document.getElementById('searchLayer'), searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults'), searchClear = document.getElementById('searchClear');
const each = p => '€' + ((inclVat ? p.price * (1 + VAT_RATE) : p.price) / p.qty).toFixed(3) + ' each';
const catRow = c => `<a class="s-cat" href="${c.href}"${c.proto ? ` data-proto="${c.proto}"` : ''} data-search-go><span>${esc(c.label)}</span><img src="${S}arrow.svg" alt=""></a>`;
const prodRow = p => `
  <a class="s-prod" href="#${slug(p.name)}"${p.proto ? ` data-proto="${p.proto}"` : ''} data-search-go>
    <span class="img"${p.bg ? ` style="background:${p.bg}"` : ''}><img src="${p.img}" alt=""></span>
    <span class="info"><strong>${esc(p.name)}</strong><small>${each(p)}</small></span>
    <span class="price"><small>${p.qty} pcs</small><b data-price="${p.price}">${fmt(p.price)}</b></span>
  </a>`;
const section = (label, html) => `<section class="search-section"><p class="label">${label}</p>${html}</section>`;
function rank(text, q) { const t = text.toLowerCase(); return t.startsWith(q) ? 0 : t.split(/\s+/).some(w => w.startsWith(q)) ? 1 : t.includes(q) ? 2 : -1; }
function renderSearch() {
  const q = searchInput.value.trim().toLowerCase();
  searchClear.hidden = !searchInput.value;
  if (!q) {
    searchResults.innerHTML =
      section('Popular categories', popularCats.map(l => catRow(searchCats.find(c => c.label.toLowerCase() === l.toLowerCase()) || { label: l, href: '#' + slug(l) })).join('')) +
      section('Best Sellers', `<div class="s-products">${searchProducts.slice(6, 10).map(prodRow).join('')}</div>`);
    return;
  }
  const hit = (items, key) => items.map(it => ({ it, r: rank(key(it), q) })).filter(x => x.r >= 0).sort((a, b) => a.r - b.r).map(x => x.it);
  const cats = hit(searchCats, c => c.label).slice(0, 5);
  const prods = hit(searchProducts, p => p.name + ' ' + (p.tags || '')).slice(0, 8);
  searchResults.innerHTML = (cats.length || prods.length)
    ? (cats.length ? section('Categories', cats.map(catRow).join('')) : '') +
      (prods.length ? section('Products', `<div class="s-products">${prods.map(prodRow).join('')}</div>`) : '')
    : `<p class="search-empty">No results for <strong>“${esc(searchInput.value.trim()).replace(/</g, '&lt;')}”</strong>. Try another word, like “flyers” or “stickers”.</p>`;
}
function openSearch() {
  renderSearch();
  searchLayer.classList.add('open'); searchLayer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
  searchInput.focus();
}
function closeSearch() {
  searchLayer.classList.remove('open'); searchLayer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
  searchInput.blur();
}
const homeSearch = document.querySelector('[data-proto="search"]');
if (homeSearch) {
  homeSearch.querySelector('input').readOnly = true;
  homeSearch.addEventListener('click', e => { e.preventDefault(); openSearch(); });
}
searchInput.addEventListener('input', renderSearch);
searchClear.addEventListener('click', () => { searchInput.value = ''; renderSearch(); searchInput.focus(); });
document.getElementById('searchCancel').addEventListener('click', () => { searchInput.value = ''; closeSearch(); });
document.getElementById('searchForm').addEventListener('submit', e => { e.preventDefault(); searchResults.querySelector('[data-search-go]')?.click(); });
searchResults.addEventListener('click', e => { if (e.target.closest('[data-search-go]')) closeSearch(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && searchLayer.classList.contains('open')) closeSearch(); });


// Order add-ons (cart). Design check is off (Basic, free) by default; euro tiers from Figma 15722:5390.
const CHECK_TIERS = [
  { id: 'basic', name: 'Basic Check + Proof', price: 0, line: 'Design Check',
    perks: ['Print proof before production', 'Automated checks on resolution, size & colour settings'] },
  { id: 'premium', name: 'Premium Check + Proof', price: 10.99, line: 'Premium Check + Proof', recommended: true, social: '80% of our customers choose this option',
    lead: 'Everything in Basic, plus:', perks: ['All file formats accepted', 'Design support from our experts', 'AI-powered optimisation'] },
  { id: 'deluxe', name: 'Deluxe', price: 21.00, line: 'Deluxe check',
    lead: 'Everything in Premium, plus:', perks: ['Perfect design guaranteed', 'Personal extra file-check, prioritised by our experts'] },
];
const SECURED = { id: 'secured', name: 'Add secured delivery', sub: 'Ensure priority support, fast reprint and delivery guarantees for your order', price: 5.99, line: 'Secured delivery' };
function getAddons() {
  let a = { check: 'basic', secured: false };
  try { a = { ...a, ...JSON.parse(localStorage.getItem('hp-cart-addons')) }; } catch (e) {}
  if (typeof a.check !== 'string') a.check = a.check ? 'premium' : 'basic';
  return a;
}
function cartTotals(items = getCart(), addons = getAddons()) {
  const check = CHECK_TIERS.find(t => t.id === addons.check);
  const subtotal = items.reduce((s, it) => s + it.price, 0) + check.price + (addons.secured ? SECURED.price : 0);
  const vat = Math.round(subtotal * VAT_RATE * 100) / 100;
  return { check, subtotal, vat, total: subtotal + vat };
}

// Cart: kept in this browser only (localStorage), so it survives moving between prototype pages.
function getCart() { try { return JSON.parse(localStorage.getItem('hp-cart')) || []; } catch (e) { return []; } }
function setCart(items) { try { localStorage.setItem('hp-cart', JSON.stringify(items)); } catch (e) {} renderCartBadge(); }
function renderCartBadge() {
  const bag = document.querySelector('.header a[aria-label="Cart"]'); if (!bag) return;
  const n = getCart().length;
  let badge = bag.querySelector('.cart-count');
  if (!n) { badge && badge.remove(); return; }
  if (!badge) { badge = document.createElement('span'); badge.className = 'cart-count'; bag.appendChild(badge); }
  badge.textContent = n;
}
renderCartBadge();


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
