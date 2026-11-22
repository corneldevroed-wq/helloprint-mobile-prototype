// Business card types (Figma category page "Card types"); content from helloprint.com/en-gb product pages.
// Each product has its own option groups, presets and price level; product.html renders any of them (?p=slug).

const SIZES = {
  standard: { id: 'standard', name: 'Standard', sub: '85 x 55 mm', shape: 'width:39px;height:25px', mult: 1, info: 'The standard business-card size, also known as the European format. Fits almost every wallet and card holder.' },
  portrait: { id: 'portrait', name: 'Portrait', sub: '55 x 85 mm', shape: 'width:25px;height:39px', mult: 1, info: 'Same dimensions as 85 x 55 mm, but upright for a striking, vertical design.' },
  'folded-portrait': { id: 'folded-portrait', name: 'Folded Portrait', sub: '110 x 85 mm', icon: 'folds/portrait', mult: 1.6, info: 'Folds to 55 x 85 mm, with four printable panels when opened. Far more room for information than a single card.' },
  'folded-landscape': { id: 'folded-landscape', name: 'Folded Landscape', sub: '170 x 55 mm', icon: 'folds/landscape', mult: 1.6, info: 'Folds to 85 x 55 mm, with four printable panels when opened. Works as a mini-leaflet with extra information.' },
  squared: { id: 'squared', name: 'Squared', sub: '55 x 55 mm', shape: 'width:25px;height:25px', mult: .95, info: 'A compact, square card that stands out among standard rectangular cards. Modern and playful, with a little less room for text.' },
  american: { id: 'american', name: 'American', sub: '90 x 50 mm', shape: 'width:39px;height:25px', mult: 1, info: 'Slightly longer and narrower than the standard size. A sleek, modern look that still fits most card holders.' },
};
const sizeGroup = ids => ({ key: 'size', title: 'Size', items: ids.map(id => SIZES[id]) });
const printingGroup = (recommended = 'double') => ({ key: 'printing', title: 'Printing', items: [
  { id: 'single', name: 'Single-sided', sub: 'Front only', shape: 'width:39px;height:25px', mult: .85, info: 'Only the front is printed. The most affordable choice, and the back stays blank for notes.' },
  { id: 'double', name: 'Double-sided', sub: 'Front and back', img: 'size-folded-landscape.svg', imgSize: 'width:39px;height:31px', mult: 1, info: recommended === 'double' ? 'Both sides printed. Room for your logo on one side and your details on the other; our most chosen option.' : 'Both sides printed. Room for your logo on one side and your details on the other.' },
]});
const cornersGroup = (roundedInfo = 'Soft, rounded corners. A friendly, modern look, and the corners don\'t bend or fray.') => ({ key: 'corners', title: 'Corners', items: [
  { id: 'straight', name: 'Straight', sub: 'Classic cut', shape: 'width:39px;height:25px', mult: 1, info: 'Square corners for a classic, business-like look.' },
  { id: 'rounded', name: 'Rounded', sub: 'Soft corners', shape: 'width:39px;height:25px;border-radius:5px', mult: 1.08, info: roundedInfo },
]});
const laminationGroup = ids => ({ key: 'lamination', title: 'Lamination', items: [
  { id: 'matt', name: 'Matt', sub: 'No glare', swatch: 'paper-matt.svg', mult: 1, info: 'A non-reflective layer that feels pleasant to hold and protects the print. Our recommended choice.' },
  { id: 'gloss', name: 'Gloss', sub: 'Shiny', swatch: 'paper-glossy.svg', mult: 1, info: 'A glossy layer that deepens colours and gives a shiny surface.' },
  { id: 'velvet', name: 'Velvet', sub: 'Soft touch', color: 'linear-gradient(135deg,#d9d4cc,#bdb6aa)', mult: 1.12, info: 'A soft, suede-like touch for a premium feel. People notice it the moment they hold your card.' },
].filter(o => ids.includes(o.id)) });

// Flyers: the live sizes (each flyer type offers a selection) and delivery options
const FLYER_SIZES = [
  ['a6', 'A6', '105 x 148 mm', 'width:21px;height:30px', .7, 'Pocket size. Handy for handing out, as a postcard or on a counter.'],
  ['a5', 'A5', '148 x 210 mm', 'width:26px;height:37px', 1, 'Our most popular flyer size: room for a clear message, easy to hand out.'],
  ['a4', 'A4', '210 x 297 mm', 'width:30px;height:42px', 1.6, 'Letter size. Lots of room for text and images, great for price lists or menus.'],
  ['dl', 'DL', '210 x 99 mm', 'width:21px;height:42px', .85, 'The long, slim format that fits a standard envelope and a display rack.'],
  ['a3', 'A3', '420 x 297 mm', 'width:42px;height:30px', 2.9, 'Poster-like size for maximum impact on a wall or notice board.'],
  ['a7', 'A7', '74 x 105 mm', 'width:17px;height:24px', .6, 'Mini flyer, about the size of a large business card.'],
  ['sq-s', 'Small Square', '105 x 105 mm', 'width:24px;height:24px', .75, 'A compact square that stands out from the usual formats.'],
  ['sq-m', 'Medium Square', '148 x 148 mm', 'width:30px;height:30px', .95, 'A playful square format with a bit more room.'],
  ['sq-l', 'Large Square', '210 x 210 mm', 'width:36px;height:36px', 1.4, 'A big square for bold, visual designs.'],
  ['a-long', 'A-Long', '210 x 74 mm', 'width:42px;height:15px', .8, 'A slim strip, popular as a voucher or bookmark.'],
  ['x-long', 'X-Long', '105 x 297 mm', 'width:15px;height:42px', 1.1, 'Tall and narrow, eye-catching on a rack or table.'],
      ].map(([id, name, sub, shape, mult, info]) => ({ id, name, sub, shape, mult, info }));
const flyerSizes = ids => ({ key: 'size', title: 'Size', items: ids ? ids.map(id => FLYER_SIZES.find(s => s.id === id)) : FLYER_SIZES });
const FLYER_DELIVERY = [
  { id: 'saver', name: 'Saver', day: '1', dayName: 'Tue 1 Dec', month: 'December 1', extra: 0, info: 'Best value: included in the price. Your flyers arrive on Tue 1 Dec if you approve your files in time.' },
  { id: 'standard', name: 'Standard', day: '24', dayName: 'Tue 24 Nov', month: 'November 24', extra: 39.22, info: '7 days sooner, on Tue 24 Nov.' },
  { id: 'express', name: 'Express', day: '23', dayName: 'Mon 23 Nov', month: 'November 23', extra: 45.67, info: 'Our fastest option: on Mon 23 Nov, printed with priority.' },
];

// One delivery option (products the live site ships with Standard only)
const STANDARD_ONLY = (dayName, noun, lead = '') => {
  const [, day, mon] = dayName.split(' ');
  const month = { Nov: 'November', Dec: 'December' }[mon];
  return { id: 'standard', name: 'Standard', day, dayName, month: `${month} ${day}`, extra: 0, info: `Included in the price${lead ? ` (${lead})` : ''}. Your ${noun} arrive on ${dayName} if you approve your files in time.` };
};
// The flyer options with a product's own live dates and prices (same ids and names; the text follows the dates)
const withDays = (opts, days, extras, noun) => opts.map((d, i) => {
  const [, day, mon] = days[i].split(' '), month = { Nov: 'November', Dec: 'December' }[mon];
  const sooner = Math.round((new Date(`${days[0]} 2026`) - new Date(`${days[i]} 2026`)) / 864e5);
  const info = i ? (d.id === 'express' ? `Our fastest option: on ${days[i]}, printed with priority.` : `${sooner} days sooner, on ${days[i]}.`) : `Best value: included in the price. Your ${noun} arrive on ${days[i]} if you approve your files in time.`;
  return { ...d, day, dayName: days[i], month: `${month} ${day}`, extra: extras[i], info };
});
// Textile colours (live names), shown as colour chips
const TEXTILE = {
  'ecru': ['Ecru', '#efe6d2'], 'natural': ['Natural', '#efe6d2'], 'white': ['White', '#ffffff'], 'black': ['Black', '#1c1c1c'], 'deep-black': ['Deep Black', '#141414'],
  'navy': ['Blue Navy', '#1f2a44'], 'french-navy': ['French Navy', '#1d2540'], 'dark-green': ['Green Dark', '#1f4d36'], 'bottle-green': ['Bottle Green', '#1d4a35'],
  'red': ['Red', '#c8202f'], 'yellow': ['Yellow', '#f4c81f'], 'royal': ['Royal Blue', '#2346a8'], 'grey': ['Grey', '#9a9a9a'], 'grey-melange': ['Grey Melange', '#b5b5b5'],
  'orange': ['Orange', '#ee7a22'], 'pink': ['Pink', '#f2a7c3'], 'sky': ['Sky Blue', '#8fc3ea'], 'sand': ['Sand', '#d8c3a0'], 'burgundy': ['Burgundy', '#6e1f2e'], 'gold': ['Gold', '#f0b323'],
};
const TEXTILE_COLOURS = ids => ids.map((id, i) => ({ id, name: TEXTILE[id][0], sub: '', color: TEXTILE[id][1], mult: 1, info: `Your design on a ${TEXTILE[id][0].toLowerCase()} base.` }));

// A sticker or label size drawn to scale (round = circle, oval = ellipse, rectangle = rounded corners): ids r-50, s-50, rt-45x85, o-40x60, rt-a6 …
const labelShape = (id, sh) => {
  const A = { a8: [52, 74], a7: [74, 105], a6: [105, 148], a5: [148, 210], a4: [210, 297], a3: [297, 420], dl: [99, 210], '55x85': [55, 85], '105x210': [105, 210] };
  const v = id.split('-').slice(1).join('-'), [w, h] = A[v] || (v.includes('x') ? v.split('x').map(Number) : [+v, +v]);
  const k = 42 / Math.max(100, w, h), r = sh === 'round' || sh === 'oval' ? '50%' : sh === 'rectangle' ? '3px' : '1px';
  return `width:${Math.max(6, Math.round(w * k))}px;height:${Math.max(6, Math.round(h * k))}px;border-radius:${r}`;
};
const PRODUCTS = {
  'classic-business-cards': {
    name: 'Classic Business Cards', cartName: 'Classic business cards', badge: 'Most Popular',
    gallery: ['assets/products/bc-1.png', 'assets/products/bc-2.jpg', 'assets/products/bc-3.jpg', 'assets/products/bc-4.jpg', 'assets/products/bc-5.jpg'],   // Figma 15927:9209
    img: 'assets/pdp/classic.png', thumb: 'assets/category/t-classic.png', priceMult: 1,
    groups: [
      sizeGroup(['standard', 'portrait', 'folded-portrait', 'folded-landscape', 'squared', 'american']),
      { key: 'paper', title: 'Paper', items: [
        { id: 'matt', name: 'Silk Matte', sub: 'No glare', swatch: 'paper-matt.svg', mult: 1, info: 'Coated paper with a dull, non-reflective finish. Easy to read, so a good choice for designs with lots of text or muted colours.' },
        { id: 'glossy', name: 'Glossy', sub: 'Shiny', swatch: 'paper-glossy.svg', mult: 1, info: 'A shiny finish that makes colours look vivid and high-contrast. Ideal for photos or lots of colour; less suited to writing on with a pen.' },
        { id: 'eco', name: 'Eco', sub: 'Sustainable', swatch: 'paper-eco.svg', mult: 1.15, info: 'Made with the environment in mind. Some eco papers look almost like standard paper, others have a more natural look and feel.' },
        { id: 'uncoated', name: 'Offset', sub: 'Writable', swatch: 'paper-uncoated.svg', lines: true, mult: 1.05, info: 'Untreated, uncoated paper you can write on with a pen. Handy when people need to fill in or note something on your card.' },
        { id: 'special', name: 'Special', sub: 'Gold and more', swatch: 'paper-special.svg', mult: 1.6, info: 'A shimmering or metallic finish that catches the light. Adds a touch of luxury to your card.' },
      ]},
      { key: 'thickness', title: 'Thickness', items: [
        { id: 'standard', name: 'Standard', sub: 'Flexible, everyday feel', mult: .9, info: 'The lightest option. Flexible, with an everyday feel, and the best price.' },
        { id: 'firm', name: 'Firm', sub: 'Holds its shape', mult: 1, info: 'Our most chosen thickness. Holds its shape in a wallet or card holder.' },
        { id: 'thick', name: 'Thick', sub: 'Solid, quality feel', mult: 1.15, info: 'Noticeably sturdier in the hand. Gives a solid, quality feel.' },
        { id: 'extra-thick', name: 'Extra thick', sub: 'Stiff and substantial', mult: 1.3, info: 'Stiff and substantial. Makes a lasting first impression.' },
      ]},
      cornersGroup(),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'standard', paper: 'matt', thickness: 'firm', corners: 'straight' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'standard', paper: 'matt', thickness: 'standard', corners: 'straight' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'standard', paper: 'eco', thickness: 'firm', corners: 'straight' } },
    ],
    recapExtra: 'Single-sided',
    fixed: [['Printing', 'Single-sided']],   // specs you can't change (spec list in version F)
    about: [
      "Create lasting connections with HelloPrint's affordable and professional business cards. Our extensive range of sizes, papers, and finishes allows you to create custom business cards that reflect your brand identity. Our classic business cards can be printed single or double-sided, with finishes such as gloss, matte, or laminated for added durability. With our high-quality printing process, you can be sure that your personalised business cards will make an impact. With the added benefit of our recycled paper choice, you can make an impact and showcase your brand responsibly. Don't miss out on potential opportunities - take your custom business cards with you wherever you go!",
      '<strong>Note:</strong> We recommend opting for a lamination finish, especially if your file contains darker colours. Without this added protection, the ink can potentially rub off.',
    ],
    specs: [['Material', 'Silk Matte | Glossy | Eco | Offset (writable) | Special'], ['Finishing', 'Gloss | Matte | Velvet | No finishing'], ['Print', 'Full colour'], ['Printing options', 'Single-sided | Double-sided'], ['Cutting', 'Rounded Corners | Square Corners'], ['Print technique', 'High-quality digital print']],
  },

  'eco-friendly-business-cards': {
    name: 'Eco Friendly Business Cards', cartName: 'Eco friendly business cards', badge: 'Eco',
    img: 'assets/category/t-eco.png', priceMult: 1.12,
    groups: [
      sizeGroup(['standard', 'portrait', 'folded-portrait', 'folded-landscape', 'squared', 'american']),
      { key: 'paper', title: 'Paper', items: [
        { id: 'recystar', name: 'RecyStar Nature', sub: '100% recycled', swatch: 'paper-eco.svg', mult: 1, info: 'Made from 100% recycled material and fully recyclable again. A natural, slightly speckled look. 300 gsm.' },
        { id: 'paperwise', name: 'Paperwise Natural', sub: 'Bio-sourced', color: '#e4dcc4', mult: 1.08, info: 'Made from agricultural leftovers: 100% bio-sourced, recyclable and compostable, and chlorine-free. 295 gsm.' },
        { id: 'biotop', name: 'Bio Top', sub: 'Chlorine-free', color: '#f3efe3', mult: .95, info: 'An off-white paper made without chlorine. Clean and calm, and 100% recyclable. 300 gsm.' },
        { id: 'kraft', name: 'Kraft', sub: 'Partially recycled', color: '#b58a5c', mult: 1.05, info: 'Brown kraft paper from recycled pulp, for a raw, natural look. Chlorine-free, recyclable and compostable. 283 gsm.' },
      ]},
      printingGroup(),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'standard', paper: 'recystar', printing: 'double' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'standard', paper: 'biotop', printing: 'single' } },
      { id: 'natural', name: 'Natural look', icon: 'eco.svg', cfg: { size: 'standard', paper: 'kraft', printing: 'double' } },
    ],
    recapExtra: 'Straight corners',
    fixed: [['Corners', 'Straight']],   // specs you can't change (spec list in version F)
    about: [
      "At HelloPrint, we're taking action to change the print industry together. Whether it's paper made from 100% recycled materials, chlorine-free off-white paper, or KraftFold made from recycled pulp: create lasting connections with affordable, professional business cards that are kinder to the planet.",
      'Made from eco-friendly and recycled materials, with unique papers that set you apart, and around 25% lower CO2 emissions than standard paper.',
    ],
    specs: [['Material', 'RecyStar Nature | Paperwise Natural | Bio Top | Kraft'], ['Print', 'Full colour'], ['Printing options', 'Single-sided | Double-sided'], ['Cutting', 'Rounded Corners | Square Corners'], ['CO2', 'Approx. 25% lower than standard paper']],
  },

  'pvc-cards-white': {
    name: 'PVC Cards White', cartName: 'PVC cards white',
    img: 'assets/category/t-pvc.png', priceMult: 3.1,
    groups: [
      { key: 'finish', title: 'Finish', items: [
        { id: 'glossy', name: 'Glossy white', sub: '760 μ PVC', icon: 'materials/pvc-card-gloss', mult: 1, info: 'A shiny, white plastic card as sturdy as a credit card. Colours look bright and crisp.' },
        { id: 'matte', name: 'Matte white', sub: '760 μ PVC', icon: 'materials/pvc-card-matt', mult: 1, info: 'The same sturdy plastic card with a calm, non-reflective surface. No fingerprints or glare.' },
      ]},
      cornersGroup('Rounded corners, just like a bank or loyalty card. Nice in the hand and they don\'t bend.'),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { finish: 'glossy', corners: 'rounded' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { finish: 'glossy', corners: 'straight' } },
    ],
    recapExtra: 'Standard 85 x 55 mm · Double-sided',
    fixed: [['Size', '85 x 55 mm'], ['Printing', 'Double-sided']],   // specs you can't change (spec list in version F)
    about: [
      'Stronger than normal paper business cards and suitable for every design, these high-quality plastic business cards are perfect for long-lasting promotion. They are even water resistant!',
      'As durable as a credit card, they work well as membership, loyalty or access cards too.',
    ],
    specs: [['Material', '760 μ Glossy white PVC | 760 μ Matte white PVC'], ['Print technique', 'Digital | Offset'], ['Format', 'Landscape'], ['Size', '85 x 55 mm'], ['Printing options', 'Double-sided']],
  },

  'deluxe-business-cards': {
    name: 'Deluxe Business Cards', cartName: 'Deluxe business cards',
    img: 'assets/category/t-deluxe.png', priceMult: 2.35,
    groups: [
      sizeGroup(['standard', 'portrait', 'folded-portrait', 'folded-landscape']),
      { key: 'finish', title: 'Exclusive finish', items: [
        { id: 'gold', name: 'Gold foil', sub: 'Warm shine', color: 'linear-gradient(135deg,#f6e27a,#c9a227 55%,#f3dc8a)', mult: 1, info: 'Parts of your design in shiny gold foil, like a logo or your name. The classic choice for a luxurious look.' },
        { id: 'silver', name: 'Silver foil', sub: 'Cool shine', color: 'linear-gradient(135deg,#f4f4f4,#a9adb3 55%,#e6e8ea)', mult: 1, info: 'Shiny silver foil on the parts you choose. Modern and sleek, and works well on dark designs.' },
        { id: 'rosegold', name: 'Rose gold foil', sub: 'Soft shine', color: 'linear-gradient(135deg,#f6d3c6,#c98a78 55%,#f2c9bb)', mult: 1.05, info: 'A warm, pinkish metallic shine. Stylish and a little less expected than gold.' },
        { id: 'spotuv', name: 'Spot UV', sub: 'Glossy accents', color: 'linear-gradient(135deg,#2a2a2a,#555 50%,#2a2a2a)', mult: .85, info: 'A clear, glossy layer on selected parts of your design. Subtle shine you can see and feel.' },
      ]},
      laminationGroup(['matt', 'velvet']),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'standard', finish: 'gold', lamination: 'matt' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'standard', finish: 'spotuv', lamination: 'matt' } },
    ],
    recapExtra: '400 gsm silk · Double-sided',
    fixed: [['Paper', '400 gsm silk'], ['Printing', 'Double-sided']],   // specs you can't change (spec list in version F)
    about: [
      'Enhance your brand\'s image with business cards with foil printing! Take your promotional game up a notch with gold, silver or rose gold foil, or with spot UV that lets specific design elements shine.',
      '<strong>Note:</strong> Foil and spot UV can\'t be applied all-over, and can\'t be used for QR codes.',
    ],
    specs: [['Material', 'Silk MC 400 gsm'], ['Finishing', 'Spot UV | Gold Foil | Silver Foil | Rose Gold Foil'], ['Lamination', 'Matt | Velvet'], ['Format', 'Landscape | Portrait'], ['Printing options', 'Single-sided | Double-sided'], ['Print technique', 'Digital | Offset']],
  },

  'business-cards-special-materials': {
    name: 'Business Cards Special Materials', cartName: 'Business cards special materials',
    img: 'assets/category/t-special.png', priceMult: 1.85,
    groups: [
      sizeGroup(['standard', 'portrait', 'folded-portrait', 'folded-landscape']),
      { key: 'material', title: 'Material', items: [
        { id: 'gold', name: 'Metallic gold', sub: 'Warm shimmer', color: 'linear-gradient(135deg,#f6e27a,#c9a227 55%,#f3dc8a)', mult: 1, info: 'Paper with a glittery gold shimmer all over. A warm, premium look. 300 gsm.' },
        { id: 'silver', name: 'Metallic silver', sub: 'Reflective', color: 'linear-gradient(135deg,#f4f4f4,#a9adb3 55%,#e6e8ea)', mult: 1, info: 'Silver paper that reflects the light for a striking effect. 300 gsm.' },
        { id: 'white', name: 'Metallic white', sub: 'Pearly', color: 'linear-gradient(135deg,#ffffff,#e9e6f0 55%,#fbfaff)', mult: 1, info: 'White with a pearly shimmer. Refined and elegant, and your colours stay true. 300 gsm.' },
        { id: 'pearl', name: 'Pearl marble', sub: 'Rainbow sparkle', color: 'linear-gradient(135deg,#fdfbf6,#e7e0f2 40%,#d8eef0 70%,#fbf3e4)', mult: 1.05, info: 'Very fine glitter that catches the light and sparkles in all colours of the rainbow. 290 gsm.' },
        { id: 'yupo', name: 'Synthetic', sub: 'Tear-resistant', color: '#eef4fa', mult: .9, info: 'Made from polyester fibres: completely tear-resistant and water-resistant. Feels like paper, lasts like plastic. 276 gsm.' },
      ]},
      printingGroup(),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'standard', material: 'gold', printing: 'double' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'standard', material: 'yupo', printing: 'single' } },
    ],
    recapExtra: 'Straight corners',
    fixed: [['Corners', 'Straight']],   // specs you can't change (spec list in version F)
    about: [
      'Deck out your business cards with special materials. Choose metallics in gold, silver or white with a glittery finish for a unique look, or pearl marble with very fine glitter that catches the light to reveal sparkles in all colours of the rainbow.',
      'Need cards that last? Synthetic cards are made from polyester fibres and are completely tear-resistant.',
    ],
    specs: [['Material', 'Metallic gold, silver and white 300 gsm | Pearl marble 290 gsm | Synthetic 276 gsm'], ['Print technique', 'Digital | Offset'], ['Format', 'Landscape | Portrait'], ['Printing options', 'Single-sided | Double-sided']],
  },

  'multilayered-business-cards': {
    name: 'Multilayered Business Cards', cartName: 'Multilayered business cards',
    img: 'assets/category/t-multilayer.png', priceMult: 1.6,
    groups: [
      { key: 'core', title: 'Middle layer colour', items: [
        ['black', 'Black', '#1c1c1c', 'Timeless and bold. A sharp black line around your card.'],
        ['blue', 'Blue', '#2459c9', 'A strong, trustworthy blue edge.'],
        ['green', 'Green', '#16a34a', 'A fresh green edge that stands out.'],
        ['orange', 'Orange', '#f2711c', 'A bright, energetic orange edge.'],
        ['pink', 'Pink', '#ec6fa9', 'A playful pink edge people remember.'],
        ['purple', 'Purple', '#7b4bc4', 'A creative, distinctive purple edge.'],
        ['red', 'Red', '#d62d2d', 'A confident red edge that catches the eye.'],
        ['yellow', 'Yellow', '#f5c518', 'A sunny yellow edge, great with dark designs.'],
      ].map(([id, name, color, info]) => ({ id, name, sub: 'Coloured edge', color, mult: 1, info: info + ' Pick the colour that matches your brand.' }))},
      laminationGroup(['matt', 'gloss', 'velvet']),
      printingGroup(),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { core: 'black', lamination: 'matt', printing: 'double' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { core: 'black', lamination: 'matt', printing: 'single' } },
    ],
    recapExtra: 'Portrait 55 x 85 mm · 810 gsm',
    fixed: [['Size', '55 x 85 mm (portrait)'], ['Thickness', '810 gsm']],   // specs you can't change (spec list in version F)
    about: [
      'Looking to create business cards that are truly unique? Then these multilayered business cards are guaranteed to get you noticed. Three layers are combined into one thick 810 gsm card, with a coloured middle layer you choose to match your brand.',
      'A luxurious look and feel, with high-quality full colour print.',
    ],
    specs: [['Material', '810 gsm card (3 layers)'], ['Middle layer', 'Black | Blue | Green | Orange | Pink | Purple | Red | Yellow'], ['Lamination', 'Matt | Gloss | Velvet'], ['Print technique', 'Digital'], ['Printing options', 'Single-sided | Double-sided']],
  },

  // Flyers (helloprint.com/en-ie/standardflyers): live sizes, materials, thickness, printing, finishing, quantities and prices
  'standard-flyers': {
    name: 'Standard Flyers', cartName: 'Standard flyers', noun: 'flyers', crumb: ['Flyers', '#flyers'],
    img: 'assets/flyers/t-classic.webp', priceMult: 1, defaultQty: 1000,
    qty: [[25, 13.79], [100, 17.79], [250, 23.49], [500, 28.49], [1000, 35.99], [2500, 61.99], [5000, 105.99], [10000, 168.99]],
    delivery: FLYER_DELIVERY,
    groups: [
      flyerSizes(),
      { key: 'paper', title: 'Material', items: [
        { id: 'glossy', name: 'Glossy', sub: 'Shiny, vivid colour', swatch: 'paper-glossy.svg', mult: 1, info: 'Coated paper with a shine. Colours and photos look vivid; our recommended choice for flyers.' },
        { id: 'matte', name: 'Matte', sub: 'No glare', swatch: 'paper-matt.svg', mult: 1, info: 'Coated paper without shine. Calm and easy to read, good for lots of text.' },
        { id: 'uncoated', name: 'Uncoated', sub: 'Writable', swatch: 'paper-uncoated.svg', lines: true, mult: 1, info: 'Untreated paper you can write on, handy for forms or coupons.' },
        { id: 'recycled', name: 'Recycled', sub: '100% recycled', swatch: 'paper-eco.svg', mult: 1.1, info: 'Made from recycled paper, with a natural look.' },
        { id: 'biotop', name: 'Bio Top Natural', sub: 'Chlorine-free', color: '#f3efe3', mult: 1.12, info: 'An off-white paper made without chlorine.' },
        { id: 'seed', name: 'Seed Paper', sub: 'Plant it', color: '#e7e0cf', mult: 2.2, info: 'Paper with seeds in it: plant the flyer and flowers grow.' },
        { id: 'paperwise', name: 'Paperwise Natural', sub: 'Bio-sourced', color: '#e4dcc4', mult: 1.15, info: 'Made from agricultural leftovers, recyclable and compostable.' },
      ]},
      { key: 'thickness', title: 'Paper thickness', items: [
        { id: 'super-budget', name: 'Super Budget', sub: '90 gsm', mult: .8, info: 'Thin, like copier paper. The lowest price for large runs.' },
        { id: 'budget', name: 'Budget', sub: '135 gsm', mult: .9, info: 'A light flyer at a sharp price.' },
        { id: 'standard', name: 'Standard', sub: '170 gsm', mult: 1, info: 'Our recommended thickness: sturdy enough to feel like quality.' },
        { id: 'premium', name: 'Premium', sub: '250 gsm', mult: 1.25, info: 'Thick and firm, close to a postcard.' },
        { id: 'premium-plus', name: 'Premium Plus', sub: '350 gsm', mult: 1.5, info: 'Very thick and stiff, for a luxurious feel.' },
      ]},
      printingGroup(),
      { key: 'finishing', title: 'Finishing', items: [
        { id: 'none', name: 'No finishing', sub: 'As printed', shape: 'width:26px;height:37px', mult: 1, info: 'No extra layer. Our recommended choice for most flyers.' },
        { id: 'matt-lam', name: 'Matte lamination', sub: 'Both sides', swatch: 'paper-matt.svg', mult: 1.35, info: 'A soft, non-reflective layer that protects the print.' },
        { id: 'gloss-lam', name: 'Gloss lamination', sub: 'Both sides', swatch: 'paper-glossy.svg', mult: 1.35, info: 'A shiny protective layer that makes colours pop.' },
        { id: 'velvet-lam', name: 'Velvet lamination', sub: 'Both sides', color: 'linear-gradient(135deg,#d9d4cc,#bdb6aa)', mult: 1.5, info: 'A soft-touch, suede-like layer for a premium feel.' },
        { id: 'uv', name: 'UV Glossy', sub: 'Both sides', color: 'linear-gradient(135deg,#fff,#dfe6ee 50%,#fff)', mult: 1.3, info: 'A high-gloss coating with extra shine.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a5', paper: 'glossy', thickness: 'standard', printing: 'double', finishing: 'none' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a5', paper: 'glossy', thickness: 'budget', printing: 'single', finishing: 'none' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'a5', paper: 'recycled', thickness: 'standard', printing: 'double', finishing: 'none' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: [
      'Use Helloprint’s customisable flyers to help your business, event or charity take flight. Flyers are weightless, durable and easy to distribute. They’re also concise and to the point, making them the perfect tool to capture attention.',
      'Print flyers in high quality and choose from many sizes. Make your flyers online or upload your own design.',
    ],
    specs: [['Material', '135–400 gsm silk/gloss coated · 140–300 gsm offset (writable) · 170 gsm recycled'], ['Finishing', 'Gloss | Matte | Velvet lamination | UV Glossy'], ['Print technique', 'High-quality digital print'], ['Printing options', 'Single-sided | Double-sided'], ['Print colour', 'Full colour']],
  },

  // Eco Flyers (helloprint.com/en-ie/ecoflyers): live sizes, materials, thickness, printing, quantities and prices
  'eco-flyers': {
    name: 'Eco Flyers', cartName: 'Eco flyers', noun: 'flyers', crumb: ['Flyers', '#flyers'], badge: 'Eco',
    img: 'assets/flyers/t-eco.webp', priceMult: 1, defaultQty: 1000,
    qty: [[25, 16.99], [100, 22.99], [250, 34.49], [500, 42.49], [1000, 53.99], [2500, 87.99], [5000, 141.99], [10000, 262.99]],
    delivery: FLYER_DELIVERY,
    groups: [
      flyerSizes(),
      { key: 'paper', title: 'Material', items: [
        { id: 'recycled', name: 'Recycled', sub: '100% recycled', swatch: 'paper-eco.svg', mult: 1, info: 'Made from recycled paper, with a natural look. Our recommended eco choice.' },
        { id: 'biotop', name: 'Bio Top 3® Natural', sub: 'Chlorine-free', color: '#f3efe3', mult: 1.05, info: 'An off-white paper made without chlorine, 100% recyclable.' },
        { id: 'seed', name: 'Seed Paper', sub: 'Plant it', color: '#e7e0cf', mult: 2, info: 'Paper with seeds in it: plant the flyer and flowers grow.' },
        { id: 'paperwise', name: 'Paperwise Natural', sub: 'Bio-sourced', color: '#e4dcc4', mult: 1.1, info: 'Made from agricultural leftovers, recyclable and compostable.' },
      ]},
      { key: 'thickness', title: 'Paper thickness', items: [
        { id: 'super-budget', name: 'Super Budget', sub: '90 gsm', mult: .8, info: 'Thin, like copier paper. The lowest price for large runs.' },
        { id: 'standard', name: 'Standard', sub: '170 gsm', mult: 1, info: 'Our recommended thickness: sturdy enough to feel like quality.' },
        { id: 'premium-plus', name: 'Premium Plus', sub: '300 gsm', mult: 1.45, info: 'Very thick and stiff, close to a postcard.' },
      ]},
      printingGroup(),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a5', paper: 'recycled', thickness: 'standard', printing: 'double' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a5', paper: 'recycled', thickness: 'super-budget', printing: 'single' } },
      { id: 'natural', name: 'Natural look', icon: 'eco.svg', cfg: { size: 'a5', paper: 'paperwise', thickness: 'standard', printing: 'double' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: [
      'Helloprint’s flyers always make a big impact at a small price. With our Eco Flyers you make that same impact while doing your bit for the environment.',
      'With several eco materials and over 10 sizes, you don’t have to sacrifice looks or quality to make the sustainable choice.',
    ],
    specs: [['Material', 'Recycled | Bio Top 3® Natural | Seed Paper | Paperwise Natural'], ['Print technique', 'High-quality digital print'], ['Printing options', 'Single-sided | Double-sided'], ['Print colour', 'Full colour']],
  },

  // Special Material Flyers (helloprint.com/en-ie/specialflyers): live sizes, materials, printing, quantities and prices
  'special-material-flyers': {
    name: 'Special Material Flyers', cartName: 'Special material flyers', noun: 'flyers', crumb: ['Flyers', '#flyers'],
    img: 'assets/flyers/t-special-material.webp', priceMult: 1, defaultQty: 1000,
    qty: [[25, 62.99], [100, 68.99], [250, 83.99], [500, 104.99], [750, 125.99], [1000, 151.99], [2000, 259.99], [2500, 328.99]],
    delivery: FLYER_DELIVERY,
    groups: [
      flyerSizes(['a6', 'a5', 'a4', 'dl', 'sq-m', 'a7']),
      { key: 'material', title: 'Material', items: [
        { id: 'cardboard', name: 'Sulfate Cardboard', sub: '290 gsm', color: '#f6f5f1', mult: 1, info: 'Smooth, sturdy cardboard that lasts. Our recommended special material.' },
        { id: 'gold', name: 'Metallic Gold', sub: '300 gsm', color: 'linear-gradient(135deg,#f6e27a,#c9a227 55%,#f3dc8a)', mult: 1.15, info: 'Paper with a glittery gold shimmer all over, for elegant, original appeal. 100% chlorine-free.' },
        { id: 'silver', name: 'Metallic Silver', sub: '300 gsm', color: 'linear-gradient(135deg,#f4f4f4,#a9adb3 55%,#e6e8ea)', mult: 1.15, info: 'Slightly glittery with a smooth texture, for an extravagant, professional look. 100% chlorine-free.' },
        { id: 'white', name: 'Metallic White', sub: '300 gsm', color: 'linear-gradient(135deg,#ffffff,#e9e6f0 55%,#fbfaff)', mult: 1.15, info: 'White with a pearly shimmer. Refined, and your colours stay true.' },
        { id: 'pearl', name: 'Pearl Marble', sub: '290 gsm', color: 'linear-gradient(135deg,#fdfbf6,#e7e0f2 40%,#d8eef0 70%,#fbf3e4)', mult: 1.2, info: 'A thin pearlescent finish that captures light beautifully.' },
        { id: 'pvc-158', name: 'PVC paper', sub: '158 gsm', color: '#eef4fa', mult: .95, info: 'Synthetic paper: 100% tree free, tear-resistant and waterproof.' },
        { id: 'pvc-234', name: 'PVC paper', sub: '234 gsm', color: '#eef4fa', mult: 1.05, info: 'Thicker synthetic paper: tree free, tear-resistant and waterproof.' },
        { id: 'pvc-276', name: 'PVC paper', sub: '276 gsm', color: '#eef4fa', mult: 1.12, info: 'Our thickest synthetic paper: tree free, tear-resistant and waterproof.' },
      ]},
      printingGroup(),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a5', material: 'cardboard', printing: 'double' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a5', material: 'pvc-158', printing: 'single' } },
      { id: 'shine', name: 'Metallic', icon: 'star.svg', cfg: { size: 'a5', material: 'gold', printing: 'double' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: [
      'Print to impress with Special Material Flyers. Command attention with metallic finishes in white, gold and silver, or a sophisticated pearl marble.',
      'Something more subtle that stands the test of time? Our smooth cardboard flyers are as sturdy as they get. Not a fan of paper? Synthetic PVC flyers are tree free, tear-resistant and even waterproof.',
    ],
    specs: [['Material', 'Sulfate Cardboard | Metallic Gold, Silver, White | Pearl Marble | PVC paper'], ['Print technique', 'High-quality digital print'], ['Printing options', 'Single-sided | Double-sided'], ['Print colour', 'Full colour']],
  },

  // Special Finishing Flyers (helloprint.com/en-ie/flyersexclusivepaperfinish): live sizes, finishes, lamination, material, quantities and prices
  'special-finishing-flyers': {
    name: 'Special Finishing Flyers', cartName: 'Special finishing flyers', noun: 'flyers', crumb: ['Flyers', '#flyers'],
    img: 'assets/flyers/t-special-finishing.webp', priceMult: 1, defaultQty: 500,
    qty: [[25, 27.99], [50, 39.49], [100, 62.99], [250, 128.99], [500, 214.99], [750, 298.99], [1000, 385.99], [2500, 912.99]],
    delivery: FLYER_DELIVERY,
    groups: [
      flyerSizes(['a6', 'a5', 'a4', 'a7']),
      { key: 'finish', title: 'Exclusive finishing', items: [
        { id: 'spot-uv', name: 'Spot UV', sub: 'Glossy relief', color: 'linear-gradient(135deg,#fff,#dfe6ee 50%,#fff)', mult: 1, info: 'A glossy, slightly raised layer on parts of your design (max. 50% of the flyer). Our recommended finish.' },
        { id: 'gold', name: 'Gold Foil', sub: 'Warm shine', color: 'linear-gradient(135deg,#f6e27a,#c9a227 55%,#f3dc8a)', mult: 1.1, info: 'Parts of your design, like a logo or text, in shiny gold foil.' },
        { id: 'silver', name: 'Silver Foil', sub: 'Cool shine', color: 'linear-gradient(135deg,#f4f4f4,#a9adb3 55%,#e6e8ea)', mult: 1.1, info: 'Parts of your design in shiny silver foil.' },
        { id: 'rosegold', name: 'Rose Gold Foil', sub: 'Soft shine', color: 'linear-gradient(135deg,#f6d3c6,#c98a78 55%,#f2c9bb)', mult: 1.12, info: 'A warm, pinkish metallic shine on parts of your design.' },
      ]},
      { key: 'finishSides', title: 'Finishing on', items: [
        { id: 'one', name: 'One side', sub: 'Front only', shape: 'width:26px;height:37px', mult: 1, info: 'The exclusive finish on the front only. Our recommended choice.' },
        { id: 'both', name: 'Both sides', sub: 'Front and back', shape: 'width:26px;height:37px', mult: 1.35, info: 'The exclusive finish on the front and the back.' },
      ]},
      { key: 'lamination', title: 'Lamination', items: [
        { id: 'matt-2', name: 'Matte lamination', sub: 'Both sides', swatch: 'paper-matt.svg', mult: 1, info: 'A soft, non-reflective layer on both sides that protects the print. Recommended.' },
        { id: 'matt-1', name: 'Matte lamination', sub: 'One side', swatch: 'paper-matt.svg', mult: .95, info: 'A soft, non-reflective layer on the front only.' },
        { id: 'velvet', name: 'Velvet lamination', sub: 'Both sides', color: 'linear-gradient(135deg,#d9d4cc,#bdb6aa)', mult: 1.1, info: 'A soft-touch, suede-like layer for a premium feel.' },
        { id: 'none', name: 'No lamination', sub: 'As printed', shape: 'width:26px;height:37px', mult: .9, info: 'No extra protective layer.' },
      ]},
      { key: 'material', title: 'Material', items: [
        { id: 'invercote-g', name: 'Invercote® G', sub: '300 gsm · One side matte', color: '#f7f7f5', mult: 1, info: 'A premium board, matte coated on one side. Our recommended material.' },
        { id: 'creato', name: 'Invercote® Creato', sub: '300 gsm · Both sides matte', color: '#f4f4f2', mult: 1.03, info: 'A premium board, matte coated on both sides.' },
        { id: 'tintoretto', name: 'Tintoretto Touch', sub: '300 gsm · Uncoated', color: '#f3efe6', mult: 1.08, info: 'An uncoated paper with a subtle textured feel.' },
        { id: 'kingboard-300', name: 'Kingboard', sub: '300 gsm · Uncoated', color: '#f1eee8', mult: 1.05, info: 'A sturdy, uncoated board.' },
        { id: 'kingboard-350', name: 'Kingboard', sub: '350 gsm · Uncoated', color: '#efece5', mult: 1.12, info: 'Our thickest uncoated board.' },
      ]},
      // Single-sided is the recommended (live default) here, so the price list is for single-sided
      (g => ({ ...g, items: g.items.map(o => ({ ...o, mult: o.id === 'double' ? 1.15 : 1 })) }))(printingGroup('single')),
      cornersGroup(),
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a5', finish: 'spot-uv', finishSides: 'one', lamination: 'matt-2', material: 'invercote-g', printing: 'single', corners: 'straight' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a6', finish: 'spot-uv', finishSides: 'one', lamination: 'none', material: 'invercote-g', printing: 'single', corners: 'straight' } },
      { id: 'gold', name: 'Gold foil', icon: 'star.svg', cfg: { size: 'a5', finish: 'gold', finishSides: 'one', lamination: 'velvet', material: 'invercote-g', printing: 'single', corners: 'straight' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: [
      'Turn heads with Special Finishing Flyers. A subtle, elegant touch of gold, rose gold or silver foil, or a glossy Spot UV that makes your text and logo pop.',
      'The exclusive finish goes on selected areas, like a logo or headline, up to 50% of the flyer, and needs a special artwork set-up.',
    ],
    specs: [['Exclusive finishing', 'Spot UV | Gold Foil | Silver Foil | Rose Gold Foil'], ['Material', 'Invercote® G | Invercote® Creato | Tintoretto Touch | Kingboard'], ['Lamination', 'Matte | Velvet | None'], ['Printing options', 'Single-sided | Double-sided'], ['Print colour', 'Full colour']],
  },

  // ---------- Gifts, bags, clothing and outdoor (live helloprint.com/en-ie pages; images from the live site) ----------
  // Where the live page only showed some quantity prices, the in-between ones are estimated (marked ~)

  // 330 ml Full Colour Ceramic Mug (helloprint.com/en-ie/basicwhitemug330ml)
  'ceramic-mug-330ml': {
    logo: true, name: '330 ml Full Colour Ceramic Mug', cartName: '330 ml ceramic mugs', noun: 'mugs', crumbTop: ['Gifts', '#corporate-gifts'], crumb: ['Mugs', '#personalised-mugs'],
    img: 'assets/products/mug.webp', priceMult: 1, defaultQty: 100,
    qty: [[1, 17.77], [5, 36.01], [10, 61.43], [30, 147.36], [50, 217.90], [100, 412.32], [250, 896.18], [500, 1541.81], [1000, 2879.40], [2000, 4807.11]],
    delivery: [STANDARD_ONLY('Wed 2 Dec', 'mugs')],
    groups: [
      { key: 'print', title: 'Printing option', items: [
        { id: 'front', name: '190 x 85 mm', sub: 'Front', shape: 'width:42px;height:19px', mult: 1, info: 'A full-colour print of 190 x 85 mm, almost all the way around the mug.' },
      ]},
    ],
    presets: [{ id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { print: 'front' } }],
    recapExtra: 'Sublimation · Full colour',
    fixed: [['Print technique', 'Sublimation'], ['Capacity', '330 ml']],
    about: ['Full-wrap print, so unlimited design possibilities. Great for gifts or promos, and easy to customise.'],
    specs: [['Material', 'Ceramic'], ['Capacity', '330 ml'], ['Size', '95 mm x Ø 82 mm'], ['Weight', '350 gr.'], ['Print technique', 'Sublimation'], ['Dishwasher safe', 'Certified for 2000 cycles']],
  },

  // Basic Cotton Bags (helloprint.com/en-ie/cottonbagslonghandles)
  'basic-cotton-bags': {
    logo: true, name: 'Basic Cotton Bags', cartName: 'Basic cotton bags', noun: 'bags', crumbTop: ['Bags', '#promotional-bags'], crumb: ['Tote Bags', '#printing-cottonbags'],
    img: 'assets/products/cotton-bag.webp', priceMult: 1, defaultQty: 100,
    qty: [[100, 181.99], [150, 238.32], [200, 294.66], [250, 350.99], [500, 650.99], [1000, 1128.99], [2500, 2488.99], [5000, 4506.99]],
    delivery: [STANDARD_ONLY('Mon 7 Dec', 'bags', '11–15 working days')],
    groups: [
      { key: 'colour', title: 'Colour', items: TEXTILE_COLOURS(['ecru', 'white', 'black', 'navy', 'dark-green', 'red', 'yellow']) },
      { key: 'area', title: 'Print area', items: [
        { id: 'single', name: 'Single-sided', sub: 'Front only', icon: 'printarea/bag-large', mult: 1, info: 'Your design on the front.' },
        { id: 'double', name: 'Double-sided', sub: 'Same design', icon: 'printarea/bag-large-both', mult: 1.45, info: 'The same design on the front and the back.' },
      ]},
      { key: 'inks', title: 'Colours in design', items: [
        { id: '1', name: '1 colour', sub: 'Screen print', icon: 'inks/1', mult: 1, info: 'One ink colour. Ideal for a logo; the most affordable choice.' },
        { id: '2', name: '2 colours', sub: 'Screen print', icon: 'inks/2', mult: 1.18, info: 'Two ink colours.' },
        { id: '3', name: '3 colours', sub: 'Screen print', icon: 'inks/3', mult: 1.34, info: 'Three ink colours.' },
        { id: '4', name: '4 colours', sub: 'Screen print', icon: 'inks/4', mult: 1.5, info: 'Four ink colours.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { colour: 'ecru', area: 'single', inks: '1' } },
      { id: 'both', name: 'Both sides', icon: 'star.svg', cfg: { colour: 'ecru', area: 'double', inks: '1' } },
    ],
    recapExtra: 'Screen print',
    fixed: [['Size', '39 x 41 cm'], ['Material', '100% cotton, 136 gsm']],
    about: ['Make your brand unforgettable. These cotton bags are perfect for everyday use: crafted from durable cotton, with long handles and a sustainable charm.'],
    specs: [['Material', '100% cotton'], ['Size', '39 x 41 cm'], ['g/m²', '136 gsm'], ['Print technique', 'Screen printing | 1–4 colours'], ['Print size', '290 x 290 mm'], ['Design', 'Front and back: same print design'], ['More information', 'No reinforced bottom']],
  },

  // Premium Tote Bags (helloprint.com/en-ie/cottonbagslonghandles140gm)
  'premium-tote-bags': {
    logo: true, name: 'Premium Tote Bags', cartName: 'Premium tote bags', noun: 'tote bags', crumbTop: ['Bags', '#promotional-bags'], crumb: ['Tote Bags', '#printing-cottonbags'],
    img: 'assets/products/premium-tote.webp', priceMult: 1, defaultQty: 100,
    qty: [[1, 29.99], [10, 89.99], [25, 164.99], [50, 274.99], [100, 477.99], [250, 1224.99]],   // 10–50 ~
    delivery: withDays(FLYER_DELIVERY, ['Wed 2 Dec', 'Wed 25 Nov', 'Tue 24 Nov'], [0, 135, 162], 'bags'),
    groups: [
      { key: 'colour', title: 'Colour', items: TEXTILE_COLOURS(['natural', 'black', 'white', 'royal', 'grey', 'navy', 'red', 'orange', 'yellow', 'pink']) },
      { key: 'area', title: 'Print area', items: [
        { id: '300-double', name: '300 x 215 mm', sub: 'Double sided', icon: 'printarea/bag-large-both', mult: 1, info: 'A landscape print on the front and the back.' },
        { id: '300-single', name: '300 x 215 mm', sub: 'Single sided', icon: 'printarea/bag-large', mult: .7, info: 'A landscape print on the front.' },
        { id: '280-double', name: '280 x 310 mm', sub: 'Double sided', icon: 'printarea/bag-large-both', mult: 1.08, info: 'A large print on the front and the back.' },
        { id: '280-single', name: '280 x 310 mm', sub: 'Single sided', icon: 'printarea/bag-large', mult: .75, info: 'A large print on the front.' },
      ]},
      { key: 'technique', title: 'Print technique', items: [
        { id: 'dtf', name: 'DTF Transfer', sub: 'Full colour', color: 'linear-gradient(135deg,#00a7e1,#e6007e 50%,#ffed00)', mult: 1, info: 'A full-colour transfer: photos and gradients are possible.' },
        { id: 'screen', name: 'Screen print', sub: '1–3 colours', color: '#1c1c1c', mult: .8, info: 'Solid ink colours that last. Best for logos and text.' },
        { id: 'none', name: 'No imprint', sub: 'Blank', color: '#f1ede4', mult: .35, info: 'The bag without a print.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { colour: 'natural', area: '300-double', technique: 'dtf' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { colour: 'natural', area: '300-single', technique: 'screen' } },
    ],
    recapExtra: '',
    fixed: [['Size', '38 x 42 cm'], ['Material', 'Cotton, 140 g/m²']],
    about: ['Sturdy and reliable, this bag is your perfect shopping companion. With durable cotton and strong shoulder handles it carries your essentials effortlessly, up to 5 kg. Ideal for daily errands or an outing.'],
    specs: [['Material', 'Cotton, 140 g/m²'], ['Size', '38 x 42 cm'], ['Weight', '67 gr'], ['Handle size', '30 cm'], ['Resistance', 'Up to 5 kg']],
  },

  // Sol's Imperial T-shirt (bestseller on helloprint.com/en-ie/tshirt-printing → /tshirtbasicroundneck)
  'sols-imperial-tshirt': {
    logo: true, name: 'Sol’s Imperial T-shirt', cartName: 'Sol’s Imperial T-shirts', noun: 't-shirts', crumbTop: ['Clothing', '#clothing-printing'], crumb: ['T-Shirts', '#tshirt-printing'], badge: 'Best Seller',
    img: 'assets/products/tshirt.webp', priceMult: 1, defaultQty: 10,
    // Size mix instead of a quantity list: the total is the quantity (live sizes S–XXL)
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], defaultSizes: { S: 2, M: 4, L: 3, XL: 1, XXL: 0 },
    qty: [[5, 99.99], [10, 164.83], [25, 329.99], [50, 549.99], [100, 899.99], [250, 1849.99], [500, 3249.99]],   // all but 10 ~
    delivery: withDays(FLYER_DELIVERY.slice(0, 2), ['Thu 3 Dec', 'Mon 23 Nov'], [0, 57.75], 't-shirts'),
    groups: [
      { key: 'colour', title: 'Colour', items: TEXTILE_COLOURS(['deep-black', 'white', 'grey-melange', 'french-navy', 'royal', 'red', 'bottle-green', 'sky', 'sand', 'burgundy', 'orange', 'gold']) },
      { key: 'area', title: 'Print area', items: [
        { id: 'chest-back', name: 'Chest left + Back large', sub: '2 positions', shape: 'width:26px;height:30px', mult: 1, info: 'A small logo on the left chest and a large print on the back. Our most chosen option.' },
        { id: 'chest', name: 'Chest left', sub: '1 position', shape: 'width:26px;height:30px', mult: .62, info: 'A small logo on the left chest.' },
        { id: 'front', name: 'Front large', sub: '1 position', shape: 'width:26px;height:30px', mult: .7, info: 'A large print on the front.' },
        { id: 'back', name: 'Back large', sub: '1 position', shape: 'width:26px;height:30px', mult: .7, info: 'A large print on the back.' },
        { id: 'front-back', name: 'Front & Back large', sub: '2 positions', shape: 'width:26px;height:30px', mult: 1.1, info: 'Large prints on the front and the back.' },
      ]},
      { key: 'technique', title: 'Print technique', items: [
        { id: 'full', name: 'Full colour', sub: 'Any design', color: 'linear-gradient(135deg,#00a7e1,#e6007e 50%,#ffed00)', mult: 1, info: 'Every colour, photos and gradients. Our recommended technique.' },
        { id: 'screen', name: 'Screen print', sub: '1–4 colours', color: '#1c1c1c', mult: .85, info: 'Solid ink colours that last many washes. Best for logos and text.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { colour: 'deep-black', area: 'chest-back', technique: 'full' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { colour: 'white', area: 'chest', technique: 'screen' } },
    ],
    recapExtra: '',
    fixed: [['Material', '100% organic cotton, 190 gsm']],
    about: ['Stand out from the crowd with our Sol’s Imperial T-shirt. Made from 100% cotton, these t-shirts are stylish, comfortable and don’t break the bank.'],
    specs: [['Brand', 'Sol’s'], ['Material', '100% organic cotton'], ['Sizes', 'S–XXL'], ['Fit', 'Regular fit'], ['Weight', '190 gsm'], ['Neckline', 'Round neck'], ['Wash instructions', 'Machine wash inside out, maximum of 30°C']],
  },

  // Banners (helloprint.com/en-ie/banners)
  'banners': {
    name: 'Banners', cartName: 'Banners', noun: 'banners', crumbTop: ['Outdoor', '#outdoor'], crumb: ['Banners', '#banner-printing'],
    img: 'assets/products/banner.webp', priceMult: 1, defaultQty: 1,
    qty: [[1, 33.36], [2, 61.99], [3, 89.99], [5, 144.99], [10, 279.99], [25, 669.99]],   // 2+ ~
    delivery: withDays(FLYER_DELIVERY, ['Tue 1 Dec', 'Wed 25 Nov', 'Tue 24 Nov'], [0, 2, 4], 'banners'),
    groups: [
      { key: 'size', title: 'Size', items: [
        { id: '150x100', name: '150 x 100 cm', sub: 'Landscape', shape: 'width:42px;height:28px', mult: 1, info: 'A compact banner for shop windows, stands and events. On the live site any size up to 20 m wide is possible.' },
        { id: '200x100', name: '200 x 100 cm', sub: 'Landscape', shape: 'width:42px;height:21px', mult: 1.3, info: 'Our recommended banner size: wide enough for fences and facades. On the live site any size up to 20 m wide is possible.' },
        { id: '300x100', name: '300 x 100 cm', sub: 'Wide', shape: 'width:42px;height:14px', mult: 1.85, info: 'Extra wide, readable from a distance.' },
      ]},
      { key: 'material', title: 'Material', items: [
        { id: 'premium', name: 'Premium PVC', sub: 'Durable vinyl 510 gsm', color: '#f4f4f4', mult: 1, info: 'Sturdy, waterproof vinyl that lasts outdoors. Our recommended material.' },
        { id: 'budget', name: 'Budget PVC', sub: 'Single use 450 gsm', color: '#f7f7f7', mult: .85, info: 'A lighter PVC for one event or a short campaign.' },
        { id: 'mesh', name: 'Windproof mesh', sub: 'Perforated 270 gsm', color: 'repeating-linear-gradient(45deg,#eee 0 3px,#cfcfcf 3px 4px)', mult: 1.1, info: 'Lets the wind through, so ideal for fences and scaffolding.' },
        { id: 'rpet', name: 'Recycled RPET', sub: '110 gsm', swatch: 'paper-eco.svg', mult: 1.15, info: 'Made from recycled bottles and PVC-free.' },
        { id: 'blockout', name: 'Blockout PVC', sub: 'Double sided 610 gsm', color: '#e9e9e9', mult: 1.6, info: 'Printed on both sides with a light-blocking core in between.' },
      ]},
      { key: 'finishing', title: 'Finishing', items: [
        { id: 'rings-30', name: 'Rings every 30 cm', sub: 'With hems', shape: 'width:42px;height:28px', mult: 1, info: 'Reinforced hems with metal rings every 30 cm. Our recommended finishing.' },
        { id: 'rings-corners', name: 'Rings in corners', sub: 'With hems', shape: 'width:42px;height:28px', mult: .95, info: 'Reinforced hems with rings in the corners only.' },
        { id: 'rings-30-plain', name: 'Rings every 30 cm', sub: 'No reinforcement', shape: 'width:42px;height:28px', mult: .95, info: 'Metal rings every 30 cm, without reinforced hems. Fine for short use.' },
        { id: 'rings-corners-plain', name: 'Rings in corners', sub: 'No reinforcement', shape: 'width:42px;height:28px', mult: .9, info: 'Rings in the corners only, without reinforced hems.' },
        { id: 'trimmed', name: 'Trimmed', sub: 'No rings', shape: 'width:42px;height:28px', mult: .85, info: 'Cut to size, without rings or hems.' },
        { id: 'tunnel-left', name: 'Tunnel left side', sub: '5 cm', shape: 'width:42px;height:28px', mult: 1.05, info: 'A 5 cm tunnel for a pole along the left side, like a flag.' },
        { id: 'tunnel-sides', name: 'Tunnel both sides', sub: '5 cm', shape: 'width:42px;height:28px', mult: 1.1, info: 'A 5 cm tunnel for a pole along both sides.' },
        { id: 'tunnel-top', name: 'Tunnel top & bottom', sub: '5 cm', shape: 'width:42px;height:28px', mult: 1.1, info: 'A 5 cm tunnel for a pole along the top and bottom.' },
      ]},
      { key: 'bands', title: 'Elastic bands', items: [
        { id: 'without', name: 'Without', sub: 'Bands', mult: 1, info: 'No elastic bands included.' },
        { id: 'with', name: 'Including', sub: 'Elastic bands', mult: 1.08, info: 'Elastic bands to hang your banner straight away.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: '200x100', material: 'premium', finishing: 'rings-30', bands: 'without' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: '150x100', material: 'budget', finishing: 'rings-corners', bands: 'without' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: '150x100', material: 'rpet', finishing: 'rings-30', bands: 'without' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour, UV-print']],
    about: ['Make an impact with Helloprint’s banners: a professional, polished, eye-catching display that is guaranteed to stand out. Customisable up to 20 metres wide.'],
    specs: [['Material', 'Standard PVC | Windproof mesh | Double-sided blockout | Eco PVC-free | Budget PVC'], ['Print', 'Full colour, single-sided or double-sided'], ['Size', 'Custom up to 20 m wide'], ['Print technique', 'UV-print'], ['Weather conditions', 'Waterproof']],
  },

  // Roller Banners (main product on helloprint.com/en-ie/rollupbanners-printing → /budgetrollupbanners)
  'roller-banners': {
    name: 'Roller Banners', cartName: 'Roller banners', noun: 'roller banners', crumbTop: ['Outdoor', '#outdoor'], crumb: ['Roller Banners', '#rollupbanners-printing'],
    img: 'assets/products/roller-banner.webp', priceMult: 1, defaultQty: 1,
    qty: [[1, 38.99], [2, 62.99], [3, 86.99], [5, 132.99], [10, 257.99], [20, 501.99], [50, 1247.99]],
    delivery: withDays(FLYER_DELIVERY.slice(0, 2), ['Tue 1 Dec', 'Wed 25 Nov'], [0, 47], 'roller banners'),
    groups: [
      { key: 'size', title: 'Size', items: [
        { id: 's', name: 'Small', sub: '85 x 200 cm', icon: 'rollup/size-85', mult: 1, info: 'Our most chosen roller banner size. Fits in any car.' },
        { id: 'xs', name: 'Extra Small', sub: '80 x 200 cm', icon: 'rollup/size-80', mult: .95, info: 'The narrowest roller banner, for tight spaces.' },
        { id: 'm', name: 'Medium', sub: '100 x 200 cm', icon: 'rollup/size-100', mult: 1.25, info: 'A little wider, for more visibility.' },
        { id: 'l', name: 'Large', sub: '120 x 200 cm', icon: 'rollup/size-120', mult: 1.55, info: 'The widest standard roller banner.' },
      ]},
      { key: 'stand', title: 'Stand', items: [
        { id: 'silver-budget', name: 'Silver budget stand', sub: 'Basic base', photo: 'assets/live-opts/rollup/stand-silver.webp', mult: 1, info: 'A light aluminium stand with a free carry bag. Our recommended choice.' },
        { id: 'black-budget', name: 'Black budget stand', sub: 'Basic base', photo: 'assets/live-opts/rollup/stand-black.webp', mult: 1.05, info: 'The same stand in black.' },
        { id: 'silver-premium', name: 'Silver premium stand', sub: 'Premium base', photo: 'assets/live-opts/rollup/stand-premium.webp', mult: 1.6, info: 'A heavier, more stable base that lasts for years of events.' },
        { id: 'cardboard', name: 'Cardboard stand', sub: 'Eco-friendly', photo: 'assets/live-opts/rollup/stand-cardboard.webp', mult: 1.4, info: 'A stand made from cardboard: a sustainable, eye-catching alternative.' },
      ]},
      { key: 'material', title: 'Material', items: [
        { id: 'pvc', name: 'Standard PVC', sub: '510 gsm', color: '#f4f4f4', mult: 1, info: 'Sturdy, lies flat and doesn’t curl. Our recommended material.' },
        { id: 'polyester', name: 'Glossy Polyester', sub: '220 mu', swatch: 'paper-glossy.svg', mult: 1.1, info: 'A shiny finish with vivid colours.' },
        { id: 'paper', name: 'Silk Coated Paper', sub: '200 gsm', swatch: 'paper-matt.svg', mult: .95, info: 'A paper print for short use indoors.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 's', stand: 'silver-budget', material: 'pvc' } },
      { id: 'premium', name: 'Premium', icon: 'star.svg', cfg: { size: 'm', stand: 'silver-premium', material: 'pvc' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 's', stand: 'cardboard', material: 'pvc' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour, single-sided'], ['Included', 'Free carry bag']],
    about: ['Roller banners are printed banners rolled into their base: self-standing, portable and set up in seconds. Use them to introduce your business, promote an event or a discount, or share information.'],
    specs: [['Material', '510 gsm PVC | 220 mu polyester | 200 gsm silk paper'], ['Print', 'Single-sided'], ['Print colour', 'Full colour'], ['Print technique', 'UV-print'], ['Weight', '2.8 kg | 3.5 kg | 4.9 kg'], ['Quantity', 'Possible to order from 1 piece']],
  },

  // ===== Top 20, batch 1 (Cornel 2026-11-22): the live bestsellers and category picks, steps, options, quantities and prices as live en-ie
  // (read 2026-11-22, prices ÷ 1.23 = excl. VAT; delivery dates one working day earlier, for the prototype's "approve by Fri 20 Nov").
  // Steps that depend on an earlier choice use group.when / item.when (liveFunnel: a step with one option is hidden). The quantity prices are live's
  // default configuration (mult 1 there); the other option prices (mult) are made up, roughly as live.

  // Standard Posters (helloprint.com/en-ie/posters): Size → Shape → Material appearance → Material → Finishing (Glossy 135/170) → Printing
  'standard-posters': {
    name: 'Standard Posters', cartName: 'Standard posters', noun: 'posters', crumb: ['Posters', '#posters-printing'], liveFunnel: true,
    img: 'assets/p5.png', priceMult: 1, defaultQty: 50,
    qty: [[1, 13.99], [5, 18.79], [10, 20.49], [25, 22.49], [50, 28.49], [100, 37.99], [200, 59.99], [500, 106.99], [1000, 178.99], [2000, 273.59]],
    delivery: withDays(FLYER_DELIVERY, ['Mon 30 Nov', 'Tue 24 Nov', 'Mon 23 Nov'], [0, 38.50, 118.50], 'posters'),
    groups: [
      { key: 'size', title: 'Size', items: [
        ['a2', 'A2', '420 x 594 mm', 28, 1, 'Our recommended poster size: big enough to be seen across a room.'],
        ['a1', 'A1', '594 x 841 mm', 33, 1.7, 'A large poster for walls, windows and events.'],
        ['a3', 'A3', '297 x 420 mm', 22, .6, 'A compact poster for notice boards and shop windows.'],
        ['a0', 'A0', '841 x 1189 mm', 40, 3, 'The largest A-size: maximum impact from a distance.'],
        ['a4', 'A4', '210 x 297 mm', 18, .45, 'Letter size, for small notices and frames.'],
        ['b1', 'B1', '700 x 1000 mm', 37, 2.6, 'A large format between A1 and A0, common for cinema and event posters.'],
        ['b2', 'B2', '500 x 700 mm', 31, 1.5, 'Between A2 and A1, a popular size for shop posters.'],
        ['abri', 'Abri', '1189 x 1750 mm', 42, 4.5, 'The bus shelter format: for street furniture and big displays.'],
        ['40x60', '400 x 600 mm', 'Custom size', 28, 1, 'A popular photo poster size.'],
        ['60x80', '600 x 800 mm', 'Custom size', 32, 1.7, 'A larger photo poster size.'],
        ['80x120', '800 x 1200 mm', 'Custom size', 38, 3, 'A big poster for halls and events.'],
        ['120x160', '1200 x 1600 mm', 'Custom size', 42, 5, 'A very large poster, close to a banner.'],
      ].map(([id, name, sub, h, mult, info]) => ({ id, name, sub, shape: `width:${Math.round(h * (id === 'abri' ? .68 : ['60x80', '120x160'].includes(id) ? .75 : /x/.test(id) ? .67 : .71))}px;height:${h}px`, mult, info })) },
      { key: 'shape', title: 'Shape', items: [
        { id: 'portrait', name: 'Portrait', sub: 'Upright', shape: 'width:21px;height:30px', mult: 1, info: 'Upright: the most common poster shape. Our recommended choice.' },
        { id: 'landscape', name: 'Landscape', sub: 'Wide', shape: 'width:30px;height:21px', mult: 1, info: 'Wide: for panoramas, timelines and wide shop windows.' },
      ]},
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'matt', name: 'Matte', sub: 'No glare', mult: 1, info: 'Silk paper without shine: calm and easy to read under any light. Our recommended choice.' },
        { id: 'glossy', name: 'Glossy', sub: 'Shiny, vivid colour', mult: 1, info: 'Coated paper with a shine. Photos and colours look vivid.' },
        { id: 'outdoor', name: 'Outdoor', sub: 'Weatherproof', icon: 'materials/pvc', mult: 1.6, info: 'Materials that can take rain and wind. Heavy weather may still fade the colours over time.' },
        { id: 'eco', name: 'Eco', sub: 'Recycled', mult: 1.05, info: 'Recycled paper with a natural look.' },
        { id: 'uncoated', name: 'Writable', sub: 'Uncoated', mult: 1, info: 'Untreated paper you can write on, for planners and notices.' },
        { id: 'special', name: 'Special', sub: 'Photo, foil, backlit', mult: 1.6, info: 'Photo paper, a removable sticky foil or a backlit film for light boxes.' },
        { id: 'neon', name: 'Neon', sub: 'Fluorescent paper', icon: 'materials/neon', mult: 1.4, info: 'Fluorescent paper in yellow, green, orange or pink. Impossible to miss.' },
      ]},
      { key: 'material', title: 'Material', prefer: c => ({ matt: 'matt-170', glossy: 'glossy-170', outdoor: 'blueback', eco: 'eco-170', uncoated: 'offset-120', special: 'photo', neon: 'neon-yellow' })[c.appearance],
        specText: 'Matte / Glossy: 135, 170 or 250 gsm · Outdoor: 115 gsm Blueback, 170 gsm PVC Waterproof, 500 gsm PVC Canvas · Eco: 135 or 170 gsm recycled · Writable: 120 or 250 gsm offset · Special: 190 gsm photo paper, Sticky DOT foil, 275 gsm backlit polyester · Neon: yellow, green, orange, pink',
        items: [
          ...[['matt', 135, .9], ['matt', 170, 1], ['matt', 250, 1.2], ['glossy', 135, .9], ['glossy', 170, 1], ['glossy', 250, 1.2], ['eco', 135, .9], ['eco', 170, 1]].map(([app, gsm, mult]) =>
            ({ id: `${app}-${gsm}`, name: '', sub: `${gsm} gsm`, thick: 0, mult, info: { 135: 'Light paper at a sharp price.', 170: 'Sturdy enough to hang flat. Our recommended thickness.', 250: 'Thick, card-like paper that stays flat on the wall.' }[gsm], when: c => c.appearance === app })),
          { id: 'offset-120', name: 'Offset', sub: '120 gsm', thick: 0, mult: .95, info: 'Uncoated paper, easy to write on with any pen.', when: c => c.appearance === 'uncoated' },
          { id: 'offset-250', name: 'Offset', sub: '250 gsm', thick: 3, mult: 1.2, info: 'A thick uncoated paper that stays flat.', when: c => c.appearance === 'uncoated' },
          { id: 'blueback', name: 'Blueback', sub: '115 gsm', icon: 'materials/blueback', mult: 1, info: 'Paper with a blue back, so nothing shows through when you paste it on a wall. Made for outdoor billboards.', when: c => c.appearance === 'outdoor' },
          { id: 'pvc-170', name: 'PVC Waterproof', sub: '170 gsm', icon: 'materials/pvc', mult: 1.4, info: 'A thin, waterproof plastic: tear-proof for outdoor use.', when: c => c.appearance === 'outdoor' },
          { id: 'canvas', name: 'PVC Canvas', sub: '500 gsm', icon: 'materials/blockout-pvc', mult: 1.9, info: 'A heavy, banner-like material for long outdoor use.', when: c => c.appearance === 'outdoor' },
          { id: 'photo', name: 'Photo paper', sub: '190 gsm', icon: 'materials/photo-paper', mult: 1, info: 'Real photo paper for sharp, deep colours.', when: c => c.appearance === 'special' },
          { id: 'sticky', name: 'Sticky DOT foil', sub: 'Removable', icon: 'materials/dot-foil', mult: 1.6, info: 'A foil with tiny adhesive dots: sticks to walls and glass, and comes off without marks.', when: c => c.appearance === 'special' },
          { id: 'backlit', name: 'Backlit Polyester', sub: '275 gsm', icon: 'materials/backlit', mult: 1.8, info: 'A translucent film for light boxes: your poster lights up.', when: c => c.appearance === 'special' },
          ...[['yellow', 'neon'], ['green', 'neon-green'], ['orange', 'neon-orange'], ['pink', 'neon-pink']].map(([n, ic]) =>
            ({ id: `neon-${n}`, name: `Neon ${n[0].toUpperCase() + n.slice(1)}`, sub: '80 gsm', icon: `materials/${ic}`, mult: 1, info: `Fluorescent ${n} paper.`, when: c => c.appearance === 'neon' })),
        ]},
      { key: 'finishing', title: 'Finishing', when: c => c.appearance === 'glossy' && ['glossy-135', 'glossy-170'].includes(c.material), prefer: () => 'none', items: [
        { id: 'none', name: 'No finishing', sub: 'As printed', mult: 1, info: 'No extra layer. Our recommended choice for most posters.' },
        { id: 'gloss-1', name: 'Gloss lamination', sub: 'Front only', mult: 1.3, info: 'A shiny protective layer on the front that makes colours pop.' },
        { id: 'matt-1', name: 'Matte lamination', sub: 'Front only', mult: 1.3, info: 'A non-reflective protective layer on the front.' },
      ]},
      { key: 'printing', title: 'Printing', items: [
        { id: 'single', name: 'Single-sided', sub: 'Front only', mult: 1, info: 'Only the front is printed: the usual choice for posters.' },
        { id: 'double', name: 'Double-sided', sub: 'Front and back', mult: 1.4, info: 'Both sides printed, for posters that hang free in a window or from a ceiling.', when: c => !['neon', 'outdoor'].includes(c.appearance) },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a2', shape: 'portrait', appearance: 'matt', material: 'matt-170', printing: 'single' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a3', shape: 'portrait', appearance: 'glossy', material: 'glossy-135', finishing: 'none', printing: 'single' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'a2', shape: 'portrait', appearance: 'eco', material: 'eco-170', printing: 'single' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: ['Make a statement with HelloPrint’s posters: available from just one piece, in sizes from A4 to Abri, on indoor and outdoor materials. Heavy weather conditions may impact the colours.'],
    specs: [['Size', 'A4 to A0, B1, B2, Abri and custom photo sizes'], ['Material', 'Matte, glossy, recycled, writable, outdoor, special and neon papers'], ['Print colour', 'Full colour'], ['Quantity', 'Possible to order from 1 piece']],
  },

  // Stapled Booklets (helloprint.com/en-ie/booklets): Size → Material appearance → Paper type → Cover → Cover finishing (250/300 gsm cover) → Pages
  'stapled-booklets': {
    name: 'Stapled Booklets', cartName: 'Stapled booklets', noun: 'booklets', crumb: ['Booklets', '#booklets-printing'], liveFunnel: true, badge: 'Great Value',
    img: 'assets/p1.png', priceMult: 1, defaultQty: 500,
    qty: [[1, 14.87], [20, 22.35], [50, 27.63], [100, 37.80], [250, 73.98], [500, 121.13], [750, 160.97], [1000, 183.65], [2500, 322.67], [5000, 529.02]],
    delivery: withDays(FLYER_DELIVERY, ['Fri 27 Nov', 'Tue 24 Nov', 'Mon 23 Nov'], [0, 41.46, 49.59], 'booklets'),
    groups: [
      { key: 'size', title: 'Size', items: [
        ['a4', 'A4', '210 x 297 mm', 'width:26px;height:37px', 1, 'Our recommended booklet size: room for text and big photos.'],
        ['a5', 'A5', '148 x 210 mm', 'width:21px;height:30px', .65, 'A handy, pocket-friendly booklet. Popular for programmes and menus.'],
        ['a6', 'A6', '105 x 148 mm', 'width:15px;height:21px', .45, 'A mini booklet, for guides and small catalogues.'],
        ['sq-l', 'Large square', '210 x 210 mm', 'width:30px;height:30px', .85, 'A big square for visual, photo-led booklets.'],
        ['sq-m', 'Medium square', '148 x 148 mm', 'width:22px;height:22px', .55, 'A compact square, playful and different.'],
        ['a4-land', 'A4 Landscape', '297 x 210 mm', 'width:37px;height:26px', 1.05, 'Wide pages, for portfolios and photo books.'],
        ['a5-land', 'A5 Landscape', '210 x 148 mm', 'width:30px;height:21px', .7, 'A wide A5, for calendars-style layouts and lookbooks.'],
        ['dl', 'DL', '210 x 99 mm', 'width:15px;height:31px', .55, 'The slim format that fits a standard envelope and a display rack.'],
      ].map(([id, name, sub, shape, mult, info]) => ({ id, name, sub, shape, mult, info })) },
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'glossy', name: 'Gloss Coated', sub: 'Shiny, vivid colour', mult: 1, info: 'Shiny paper that makes photos stand out: the most popular and cost-effective booklet paper. Our recommended choice.' },
        { id: 'matt', name: 'Silk Coated', sub: 'Matte, no glare', mult: 1, info: 'A subtle, matte look for designs with a lot of text.' },
        { id: 'uncoated', name: 'Woodfree Offset', sub: 'Writable', mult: 1, info: 'Uncoated paper you can write on: for workbooks, forms and notes.' },
        { id: 'recycled', name: 'Recycled', sub: '100% recycled', mult: 1.08, info: '100% recycled, sustainably produced paper with a natural white look.' },
      ]},
      { key: 'paper', title: 'Paper type', prefer: c => `${c.appearance}-170`,
        specText: 'Gloss / Silk: 90, 130, 170 or 250 gsm · Offset: 90, 120 or 170 gsm · Recycled: 90, 110, 170 or 250 gsm',
        items: [['glossy', [90, 130, 170, 250]], ['matt', [90, 130, 170, 250]], ['uncoated', [90, 120, 170]], ['recycled', [90, 110, 170, 250]]].flatMap(([app, list]) => list.map(gsm =>
          ({ id: `${app}-${gsm}`, name: '', sub: `${gsm} gsm`, thick: 0, mult: { 90: .92, 110: .97, 120: .97, 130: 1, 170: 1.08, 250: 1.35 }[gsm],
             info: { 90: 'Thin and light, like a letter. The lowest price for thick booklets.', 110: 'Light paper with a little more body.', 120: 'Light paper with a little more body.', 130: 'A light page at a sharp price.', 170: 'Sturdy pages that feel like quality. Our recommended choice.', 250: 'Thick, card-like pages for a premium booklet.' }[gsm],
             when: c => c.appearance === app }))) },
      { key: 'cover', title: 'Cover', prefer: () => 'cover-250',
        items: [
          { id: 'self', name: 'Selfcover', sub: 'Same paper as the pages', icon: 'notepads/self-cover', mult: 1, info: 'The cover is printed on the same paper as the pages. The most affordable choice.' },
          { id: 'cover-135', name: '', sub: '135 gsm', thick: 0, mult: 1.04, info: 'A thin cover, a touch firmer than the pages.', when: c => c.appearance === 'matt' },
          { id: 'cover-120', name: '', sub: '120 gsm', thick: 0, mult: 1.04, info: 'A thin uncoated cover.', when: c => c.appearance === 'uncoated' },
          { id: 'cover-170', name: '', sub: '170 gsm', thick: 0, mult: 1.06, info: 'A medium cover that holds its shape.' },
          { id: 'cover-250', name: '', sub: '250 gsm', thick: 0, mult: 1.1, info: 'A thick cover that protects your booklet. Our recommended choice.' },
          { id: 'cover-300', name: '', sub: '300 gsm', thick: 0, mult: 1.14, info: 'An extra thick cover for a premium feel.', when: c => ['glossy', 'matt'].includes(c.appearance) },
        ]},
      { key: 'finishing', title: 'Cover finishing', when: c => ['cover-250', 'cover-300'].includes(c.cover), prefer: () => 'none', items: [
        { id: 'none', name: 'No finishing', sub: 'As printed', mult: 1, info: 'No extra layer on the cover.' },
        { id: 'matt-1', name: 'Matte lamination', sub: 'Cover', mult: 1.06, info: 'A non-reflective layer that protects the cover from scratches and fingerprints.' },
        { id: 'gloss-1', name: 'Gloss lamination', sub: 'Cover', mult: 1.06, info: 'A shiny protective layer that makes the cover colours pop.' },
      ]},
      { key: 'pages', title: 'Pages', specText: '8 to 64 pages, per 4', items: Array.from({ length: 15 }, (_, i) => 8 + i * 4).map(n =>
        ({ id: String(n), name: `${n} pages`, sub: `${n / 4} sheets`, mult: Math.round((n / 8) ** .75 * 100) / 100, info: n === 8 ? 'The thinnest booklet: two sheets folded and stapled. Stapled booklets go per 4 pages, because every sheet folds into 4 pages.' : `${n / 4} sheets folded and stapled in the middle.${n === 64 ? ' The maximum for a stapled booklet; more pages: Perfect Bound Brochures.' : ''}` })) },
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a4', appearance: 'glossy', paper: 'glossy-170', cover: 'cover-250', finishing: 'none', pages: '8' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a5', appearance: 'glossy', paper: 'glossy-130', cover: 'self', pages: '8' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'a4', appearance: 'recycled', paper: 'recycled-170', cover: 'cover-250', finishing: 'none', pages: '8' } },
    ],
    recapExtra: 'Full colour · Stapled',
    fixed: [['Binding', 'Stapled (saddle stitched)'], ['Print', 'Full colour']],
    about: ['HelloPrint’s staple-bound booklets are perfect for menus, promotions, introducing your business and much more. Elegant gloss for images, understated matte for text and uncoated for writing.'],
    specs: [['Binding', 'Saddle stitched, 2 staples'], ['Pages', '8 to 64, per 4'], ['Material', 'Gloss coated | Silk coated | Woodfree offset | Recycled'], ['Print colour', 'Full colour']],
  },

  // Perfect Bound Brochures (helloprint.com/en-ie/perfectboundbrochures): Size → Pages → Material appearance → Paper type → Cover → Cover finishing
  'perfect-bound-brochures': {
    name: 'Perfect Bound Brochures', cartName: 'Perfect bound brochures', noun: 'brochures', crumb: ['Booklets', '#booklets-printing'], liveFunnel: true, badge: 'Most Popular',
    img: 'assets/p2.png', priceMult: 1, defaultQty: 100,
    qty: [[1, 35.99], [20, 67.99], [50, 120.99], [100, 212.99], [150, 260.09], [250, 414.89], [500, 809.99], [750, 1118.99], [1000, 1478.99], [1500, 2299.99]],
    delivery: withDays(FLYER_DELIVERY.slice(0, 2), ['Wed 2 Dec', 'Wed 25 Nov'], [0, 82], 'brochures'),
    groups: [
      { key: 'size', title: 'Size', items: [
        ['a4', 'A4', '210 x 297 mm', 'width:26px;height:37px', 1, 'Our recommended size: the classic brochure and report format.'],
        ['a5', 'A5', '148 x 210 mm', 'width:21px;height:30px', .65, 'A handy book size, for catalogues and novels.'],
        ['a6', 'A6', '105 x 148 mm', 'width:15px;height:21px', .45, 'Pocket size, for guides and small books.'],
        ['thesis', 'Thesis', '170 x 240 mm', 'width:24px;height:34px', .8, 'The usual size for a thesis or dissertation.'],
        ['a4-land', 'A4 Landscape', '297 x 210 mm', 'width:37px;height:26px', 1.05, 'Wide pages, for portfolios and photo books.'],
        ['a5-land', 'A5 Landscape', '210 x 148 mm', 'width:30px;height:21px', .7, 'A wide A5, for lookbooks.'],
        ['a6-land', 'A6 Landscape', '148 x 105 mm', 'width:21px;height:15px', .5, 'A small, wide book.'],
        ['sq-m', 'Medium square', '148 x 148 mm', 'width:22px;height:22px', .55, 'A compact square book.'],
        ['sq-l', 'Large square', '210 x 210 mm', 'width:30px;height:30px', .85, 'A big square, for photo and art books.'],
      ].map(([id, name, sub, shape, mult, info]) => ({ id, name, sub, shape, mult, info })) },
      { key: 'pages', title: 'Pages', specText: '28 to 400 pages, per 4 (live: any of them)', items: [28, 32, 40, 48, 64, 80, 100, 120, 160, 200, 300, 400].map(n =>
        ({ id: String(n), name: `${n} pages`, sub: `${n / 2} sheets`, mult: Math.round((n / 32) ** .8 * 100) / 100, info: `${n / 2} sheets glued at the spine.${n === 400 ? ' The maximum, depending on size and paper.' : ''} On the live site every step of 4 pages from 28 to 400 is possible.` })) },
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'matt', name: 'Silk Coated', sub: 'Matte, no glare', mult: 1, info: 'A subtle, matte look that reads well. Our recommended choice.' },
        { id: 'glossy', name: 'Gloss Coated', sub: 'Shiny, vivid colour', mult: 1, info: 'Shiny paper that makes photos stand out.' },
        { id: 'uncoated', name: 'Woodfree Offset', sub: 'Writable', mult: .95, info: 'Uncoated paper you can write on, like a notebook.' },
      ]},
      { key: 'paper', title: 'Paper type', prefer: c => ({ matt: 'matt-130', glossy: 'glossy-130', uncoated: 'uncoated-90' })[c.appearance],
        specText: 'Silk: 115, 130 or 170 gsm · Gloss: 130 or 170 gsm · Offset: 90 gsm',
        items: [['matt', [115, 130, 170]], ['glossy', [130, 170]], ['uncoated', [90]]].flatMap(([app, list]) => list.map(gsm =>
          ({ id: `${app}-${gsm}`, name: '', sub: `${gsm} gsm`, thick: 0, mult: { 90: .9, 115: .95, 130: 1, 170: 1.12 }[gsm],
             info: { 90: 'Light, writable pages.', 115: 'Light pages: good for books with many pages.', 130: 'A light page with body. The live default.', 170: 'Sturdy pages that feel like quality.' }[gsm], when: c => c.appearance === app }))) },
      { key: 'cover', title: 'Cover', prefer: c => c.appearance === 'glossy' ? 'gloss-300' : 'silk-300', items: [
        { id: 'silk-300', name: 'Silk Coated', sub: '300 gsm', icon: 'materials/silk-matte', mult: 1, info: 'A firm matte cover. Our recommended choice.', when: c => c.appearance !== 'glossy' },
        { id: 'gloss-300', name: 'Gloss Coated', sub: '300 gsm', icon: 'materials/glossy', mult: 1, info: 'A firm, shiny cover.', when: c => c.appearance === 'glossy' },
        { id: 'sbs-300', name: 'SBS Paperboard', sub: '300 gsm', icon: 'materials/sulfate-cardboard', mult: 1.05, info: 'A bright white, stiff board for a premium cover.' },
      ]},
      { key: 'finishing', title: 'Cover finishing', items: [
        { id: 'gloss-1', name: 'Gloss lamination', sub: 'Cover', mult: 1, info: 'A shiny layer that protects the cover. Our recommended choice.' },
        { id: 'matt-1', name: 'Matte lamination', sub: 'Cover', mult: 1, info: 'A non-reflective layer that protects the cover from scratches and fingerprints.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a4', pages: '32', appearance: 'matt', paper: 'matt-130', cover: 'silk-300', finishing: 'gloss-1' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a5', pages: '32', appearance: 'matt', paper: 'matt-115', cover: 'silk-300', finishing: 'gloss-1' } },
      { id: 'premium', name: 'Premium', icon: 'star.svg', cfg: { size: 'a4', pages: '32', appearance: 'glossy', paper: 'glossy-170', cover: 'sbs-300', finishing: 'matt-1' } },
    ],
    recapExtra: 'Full colour · Glued spine',
    fixed: [['Binding', 'Perfect bound (glued spine)'], ['Print', 'Full colour']],
    about: ['HelloPrint’s perfect bound books are glued at the spine to create a secure, soft-cover book with a deluxe look and feel, and a laminated cover for extra protection. Print up to 396 pages, depending on size and paper type.'],
    specs: [['Binding', 'Perfect bound, glued spine'], ['Pages', '28 to 400, per 4'], ['Material', 'Silk coated | Gloss coated | Woodfree offset'], ['Cover', '300 gsm, gloss or matt lamination'], ['Print colour', 'Full colour']],
  },

  // Half Fold Leaflets (helloprint.com/en-ie/halffoldleaflets): Shape → Size (per shape) → Material appearance → Material → Finishing (250 gsm and up)
  'half-fold-leaflets': {
    name: 'Half Fold Leaflets', cartName: 'Half fold leaflets', noun: 'leaflets', crumb: ['Folded Leaflets', '#folded-leaflets'], liveFunnel: true,
    img: 'assets/flyers/fold-half.webp', priceMult: 1, defaultQty: 500,
    qty: [[25, 19.37], [100, 24.45], [250, 32.75], [500, 39.67], [1000, 53.51], [2500, 96.88], [5000, 156.86], [10000, 247.48]],
    delivery: withDays(FLYER_DELIVERY, ['Mon 30 Nov', 'Tue 24 Nov', 'Mon 23 Nov'], [0, 35.07, 81.20], 'leaflets'),
    groups: [
      { key: 'shape', title: 'Shape', items: [
        { id: 'portrait', name: 'Portrait', sub: 'Upright', icon: 'folds/portrait', mult: 1, info: 'Opens like a book. Our recommended choice.' },
        { id: 'landscape', name: 'Landscape', sub: 'Wide', icon: 'folds/landscape', mult: 1, info: 'Opens upwards, like a calendar or a menu.' },
        { id: 'square', name: 'Square', sub: 'Square', icon: 'folds/square', mult: 1.05, info: 'A square leaflet that stands out.' },
      ]},
      { key: 'size', title: 'Size', prefer: c => ({ portrait: 'a4-a5', landscape: 'l-a4', square: 'sq-210' })[c.shape], items: [
        ['a4-a5', 'A4 folded to A5', '4 pages', 'width:21px;height:30px', 1, 'portrait', 'Our recommended size: an A4 sheet folded to A5.'],
        ['a3-a4', 'A3 folded to A4', '4 pages', 'width:26px;height:37px', 1.7, 'portrait', 'Big pages: room for a menu, a price list or a programme.'],
        ['a5-a6', 'A5 folded to A6', '4 pages', 'width:15px;height:21px', .7, 'portrait', 'A small leaflet, handy for invitations and tickets.'],
        ['dl', '198 x 210 mm folded to DL', '4 pages', 'width:15px;height:31px', .85, 'portrait', 'Folds to DL: fits a standard envelope and a display rack.'],
        ['x-long', 'A4 folded to X-Long', '4 pages', 'width:13px;height:37px', .95, 'portrait', 'A tall, narrow leaflet that catches the eye on a rack.'],
        ['l-a4', '594 x 210 mm folded to A4', '4 pages', 'width:37px;height:26px', 1.4, 'landscape', 'A wide sheet folded to A4 landscape.'],
        ['l-a5', '420 x 148 mm folded to A5', '4 pages', 'width:30px;height:21px', .9, 'landscape', 'A wide sheet folded to A5 landscape.'],
        ['sq-210', '420 x 210 mm folded to 210 x 210 mm', '4 pages', 'width:30px;height:30px', 1.3, 'square', 'A large square leaflet.'],
        ['sq-148', '296 x 148 mm folded to 148 x 148 mm', '4 pages', 'width:22px;height:22px', .8, 'square', 'A medium square leaflet.'],
        ['sq-105', '210 x 105 mm folded to 105 x 105 mm', '4 pages', 'width:16px;height:16px', .6, 'square', 'A small square leaflet.'],
      ].map(([id, name, sub, shape, mult, sh, info]) => ({ id, name, sub, shape, mult, info, when: c => c.shape === sh })) },
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'glossy', name: 'Glossy', sub: 'Shiny, vivid colour', mult: 1, info: 'Coated paper with a shine. Colours and photos look vivid; our recommended choice.' },
        { id: 'matte', name: 'Matte', sub: 'No glare', mult: 1, info: 'Coated paper without shine. Calm and easy to read.' },
        { id: 'uncoated', name: 'Uncoated', sub: 'Writable', mult: 1.02, info: 'Untreated paper you can write on.' },
        { id: 'recycled', name: 'Recycled', sub: '100% recycled', mult: 1.1, info: 'Made from recycled paper, with a natural look.' },
        { id: 'biotop', name: 'Bio Top 3 Natural', sub: 'Chlorine-free', mult: 1.15, info: 'Chlorine-free paper with a soft, natural white.' },
        { id: 'paperwise', name: 'Paperwise Natural', sub: 'From plant waste', mult: 1.15, info: 'Made from agricultural waste. A warm, natural tone.' },
      ]},
      { key: 'material', title: 'Material', prefer: c => ({ glossy: 'glossy-170', matte: 'matte-170', uncoated: 'uncoated-170', recycled: 'recycled-170', biotop: 'biotop-160', paperwise: 'paperwise-150' })[c.appearance],
        specText: 'Glossy / Matte: 90, 115, 135, 170, 250, 300, 350 or 400 gsm · Uncoated: 90, 120, 150, 170, 250 or 300 gsm · Recycled: 80, 90, 170 or 300 gsm · Bio Top: 90, 160 or 300 gsm · Paperwise: 150 or 295 gsm',
        items: [['glossy', [90, 115, 135, 170, 250, 300, 350, 400]], ['matte', [90, 115, 130, 170, 250, 300, 350, 400]], ['uncoated', [90, 120, 150, 170, 250, 300]], ['recycled', [80, 90, 170, 300]], ['biotop', [90, 160, 300]], ['paperwise', [150, 295]]]
          .flatMap(([app, list]) => list.map(gsm => ({ id: `${app}-${gsm}`, name: '', sub: `${gsm} gsm`, thick: 0, mult: gsm < 120 ? .92 : gsm < 150 ? 1 : gsm <= 170 ? 1.08 : gsm <= 250 ? 1.47 : gsm <= 300 ? 1.6 : gsm <= 350 ? 1.75 : 1.9,
            info: gsm < 120 ? 'Thin and light: the lowest price for large runs.' : gsm <= 170 ? (gsm >= 150 ? 'Sturdy enough to feel like quality. Our recommended thickness.' : 'A light leaflet at a sharp price.') : 'Thick, card-like paper. From 250 gsm the leaflet is creased before folding, so it arrives without cracks; dark ink on the fold may still show a thin white line.',
            when: c => c.appearance === app }))) },
      { key: 'finishing', title: 'Finishing', when: c => ['glossy', 'matte'].includes(c.appearance) && +c.material.split('-')[1] >= 250, prefer: () => 'none', items: [
        { id: 'none', name: 'No finishing', sub: 'As printed', mult: 1, info: 'No extra layer. Our recommended choice.' },
        { id: 'gloss-2', name: 'Gloss lamination', sub: 'Both sides', mult: 1.3, info: 'A shiny layer on both sides that protects the print and makes colours pop.', when: c => c.appearance === 'glossy' },
        { id: 'matt-2', name: 'Matte lamination', sub: 'Both sides', mult: 1.3, info: 'A non-reflective layer on both sides that protects the print.', when: c => c.appearance === 'matte' },
        { id: 'uv-2', name: 'UV Glossy', sub: 'Both sides', mult: 1.35, info: 'A high-gloss varnish on both sides for a striking shine.', when: c => c.appearance === 'glossy' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { shape: 'portrait', size: 'a4-a5', appearance: 'glossy', material: 'glossy-170' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { shape: 'portrait', size: 'a5-a6', appearance: 'glossy', material: 'glossy-135' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { shape: 'portrait', size: 'a4-a5', appearance: 'recycled', material: 'recycled-170' } },
    ],
    recapExtra: 'Full colour · Double-sided',
    fixed: [['Print', 'Full colour, double-sided'], ['Fold', 'Half fold, 4 pages']],
    about: ['HelloPrint’s Half Fold Leaflets are a print classic that never goes out of style: for trade shows, events, or as inserts in newspapers and magazines. Up to 170 gsm they arrive folded; from 250 gsm creased, so they arrive without cracks.'],
    specs: [['Fold', 'Half fold, 4 pages'], ['Material', 'Glossy | Matte | Uncoated | Recycled | Bio Top 3 | Paperwise'], ['Finishing', 'Gloss or matte lamination, UV glossy (250 gsm and up)'], ['Print colour', 'Full colour, double-sided']],
  },

  // ===== Top 20, batch 2 (Cornel 2026-11-22): stickers and stationery, read on live en-ie the same day, same rules as batch 1.
  // Icons from the guide (stickers/, envelopes/, notepads/, printing/, folds/, materials/) where the option has one.

  // Labels on Roll (helloprint.com/en-ie/labels): Shape → Size (per shape) → Material appearance → Material → Dispenser → Roll winding → Core
  'labels-on-roll': {
    name: 'Stickers on Roll', cartName: 'Stickers on roll', noun: 'labels', crumbTop: ['Labels & Stickers', '#all-stickers'], crumb: ['Labels on Roll', '#labels-printing'], liveFunnel: true,
    img: 'assets/p8.png', priceMult: 1, defaultQty: 1000,
    qty: [[100, 44.49], [250, 48.49], [500, 52.99], [1000, 63.99], [2000, 86.99], [5000, 133.99], [10000, 207.99], [15000, 268.20], [20000, 333.89], [30000, 467.09], [50000, 711.89], [100000, 1418.99]],
    delivery: withDays(FLYER_DELIVERY, ['Tue 1 Dec', 'Thu 26 Nov', 'Mon 23 Nov'], [0, 6.50, 37.50], 'labels'),
    groups: [
      { key: 'shape', title: 'Shape', items: [
        { id: 'round', name: 'Round', sub: 'Circle', icon: 'stickers/round', mult: 1, info: 'A round label: our most chosen shape, for lids, jars and packaging.' },
        { id: 'square', name: 'Square', sub: 'Straight sides', icon: 'stickers/square', mult: 1, info: 'A square label with a clean, modern look.' },
        { id: 'rectangle', name: 'Rectangle', sub: 'Portrait or landscape', icon: 'stickers/rounded', mult: 1, info: 'A rectangular label: room for a product name, ingredients or an address.' },
        { id: 'oval', name: 'Oval', sub: 'Ellipse', icon: 'stickers/oval', mult: 1.05, info: 'An oval label, classic on bottles and jars.' },
      ]},
      { key: 'size', title: 'Size', prefer: c => ({ round: 'r-50', square: 's-50', rectangle: 'rt-45x85', oval: 'o-40x60' })[c.shape], items: [
        ...[10, 20, 30, 40, 50, 60, 70, 75, 80, 100].map(d => ({ id: `r-${d}`, name: `${d} mm`, sub: 'Diameter', d, sh: 'round' })),
        ...[20, 30, 40, 45, 50, 60, 80, 100].map(d => ({ id: `s-${d}`, name: `${d} x ${d} mm`, sub: 'Square', d, sh: 'square' })),
        ...[[25, 50], [30, 40], [30, 75], [35, 60], [40, 75], [45, 85], [50, 100], [55, 85], [60, 100], [70, 100]].map(([w, h]) => ({ id: `rt-${w}x${h}`, name: `${w} x ${h} mm`, sub: 'Rectangle', d: Math.sqrt(w * h), sh: 'rectangle' })),
        ...[[30, 50], [40, 60], [48, 70], [50, 80], [75, 100]].map(([w, h]) => ({ id: `o-${w}x${h}`, name: `${w} x ${h} mm`, sub: 'Oval', d: Math.sqrt(w * h), sh: 'oval' })),
      ].map(({ id, name, sub, d, sh }) => ({ id, name, sub, shape: labelShape(id, sh), mult: Math.round(Math.max(.75, d / 50) * 100) / 100, info: d <= 20 ? 'A small label, for pens, sample jars and seals.' : d >= 80 ? 'A large label, for boxes, buckets and bottles.' : 'A handy size for jars, bags and packaging.', when: c => c.shape === sh })) },
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'white', name: 'White film', sub: 'Plastic, white', icon: 'materials/film-white-gloss', mult: 1, info: 'A white plastic film: water-resistant and strong. Our recommended choice.' },
        { id: 'clear', name: 'Transparent', sub: 'Plastic, clear', icon: 'materials/film-clear', mult: 1.05, info: 'A clear film, so the product or the glass shows through.' },
        { id: 'paper', name: 'Paper', sub: 'Glossy, matt or Paperwise', icon: 'materials/glossy', mult: .95, info: 'Paper labels, for dry products and writable labels.' },
        { id: 'special', name: 'Special', sub: 'Off-white, kraft, silver', icon: 'materials/special', mult: 1.15, info: 'Off-white, kraft or silver labels for a premium or natural look.' },
      ]},
      { key: 'material', title: 'Material', prefer: c => ({ white: 'pp-gloss', clear: 'pp-clear', paper: 'paper-gloss', special: 'offwhite' })[c.appearance], items: [
        { id: 'pp-gloss', name: 'Gloss Polypropylene', sub: 'Eco-friendly alternative', icon: 'materials/film-white-gloss', mult: 1, info: 'A glossy white film, an eco-friendlier alternative to PVC. Our recommended choice.', when: c => c.appearance === 'white' },
        { id: 'pp-matt', name: 'Matt Polypropylene', sub: 'Subtle look', icon: 'materials/film-white-matt', mult: 1, info: 'A white film without shine, for a calm, subtle look.', when: c => c.appearance === 'white' },
        { id: 'natureflex-white', name: 'Natureflex White', sub: 'Biodegradable', icon: 'materials/film-white-eco', mult: 1.25, info: 'A white film made from wood pulp: compostable and biodegradable.', when: c => c.appearance === 'white' },
        { id: 'pp-clear', name: 'Transparent Polypropylene', sub: 'Eco-friendly alternative', icon: 'materials/film-clear', mult: 1, info: 'A clear film: your design floats on the product.', when: c => c.appearance === 'clear' },
        { id: 'natureflex-clear', name: 'Natureflex Transparent', sub: 'Biodegradable', icon: 'materials/film-clear-eco', mult: 1.25, info: 'A clear, compostable film made from wood pulp.', when: c => c.appearance === 'clear' },
        { id: 'paper-gloss', name: 'Glossy Paper', sub: 'Recycled', icon: 'materials/glossy', mult: 1, info: 'Glossy recycled paper: vivid colours at a sharp price.', when: c => c.appearance === 'paper' },
        { id: 'paper-matt', name: 'Matt Paper', sub: 'Writable', icon: 'materials/uncoated', mult: 1, info: 'Matt paper you can write on, for dates, prices and names.', when: c => c.appearance === 'paper' },
        { id: 'paperwise', name: 'Paperwise Paper', sub: 'Agricultural waste', icon: 'materials/paperwise', mult: 1.1, info: 'Paper made from agricultural waste, with a natural tone.', when: c => c.appearance === 'paper' },
        { id: 'offwhite', name: 'Off-white Paper', sub: 'Luxurious look', icon: 'materials/antique-white', mult: 1, info: 'A textured off-white paper for wine, cosmetics and gifts.', when: c => c.appearance === 'special' },
        { id: 'kraft', name: 'Kraft Paper', sub: 'Natural look', icon: 'materials/kraft', mult: 1, info: 'Brown kraft paper: natural and honest.', when: c => c.appearance === 'special' },
        { id: 'silver', name: 'Silver Polypropylene', sub: 'Luxurious look', icon: 'materials/metallic-silver', mult: 1.1, info: 'A shiny silver film that catches the light.', when: c => c.appearance === 'special' },
      ]},
      { key: 'dispenser', title: 'Dispenser', items: [
        { id: 'none', name: 'No dispenser', sub: 'Roll only', mult: 1, info: 'Your labels come on a roll, without a box.' },
        { id: 'dispenser', name: 'Dispenser per roll', sub: 'Cardboard box', mult: 1.1, info: 'Each roll in a cardboard dispenser box, so you tear off one label at a time. Our recommended choice.' },
      ]},
      { key: 'winding', title: 'Roll winding', items: [
        { id: '2', name: 'Rollwinding 2', sub: '0°', mult: 1, info: 'The label comes off the roll upright, top first. Our recommended choice, and the usual one for hand application.' },
        { id: '1', name: 'Rollwinding 1', sub: '180°', mult: 1, info: 'The label comes off upside down, bottom first.' },
        { id: '3', name: 'Rollwinding 3', sub: '90°', mult: 1, info: 'The label comes off sideways, its right side first.' },
        { id: '4', name: 'Rollwinding 4', sub: '270°', mult: 1, info: 'The label comes off sideways, its left side first. Check which one your labelling machine needs.' },
      ]},
      { key: 'core', title: 'Core diameter', items: [
        { id: '40', name: '40 mm core', sub: 'Hand and small dispensers', mult: 1, info: 'The usual core for applying by hand. Our recommended choice.' },
        { id: '76', name: '76 mm core', sub: 'Labelling machines', mult: 1, info: 'The standard core for most labelling machines.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { shape: 'round', size: 'r-50', appearance: 'white', material: 'pp-gloss', dispenser: 'none', winding: '2', core: '40' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { shape: 'round', size: 'r-40', appearance: 'paper', material: 'paper-gloss', dispenser: 'none', winding: '2', core: '40' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { shape: 'round', size: 'r-50', appearance: 'white', material: 'natureflex-white', dispenser: 'none', winding: '2', core: '40' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: ['Labels on a roll are easy to peel off, by hand or with a labelling machine, in a range of materials to suit every product. Small cutting deviations are possible.'],
    specs: [['Shape', 'Round | Square | Rectangle | Oval'], ['Material', 'White or transparent film, paper, Natureflex, off-white, kraft, silver'], ['Print colour', 'Full colour'], ['Core', '40 or 76 mm']],
  },

  // Individual Stickers (helloprint.com/en-ie/stickers): Shape → Size (per shape) → Material appearance → Material → Finishing (films)
  'individual-stickers': {
    name: 'Individual Stickers', cartName: 'Individual stickers', noun: 'stickers', crumbTop: ['Labels & Stickers', '#all-stickers'], crumb: ['Stickers', '#stickers-printing'], liveFunnel: true,
    img: 'assets/products/stickers.webp', priceMult: 1, defaultQty: 500,
    qty: [[25, 21.99], [50, 23.99], [100, 26.99], [250, 36.99], [500, 50.99], [1000, 61.99], [1500, 71.99], [2000, 87.99], [2500, 96.99], [3000, 117.99], [4000, 128.99], [5000, 147.99]],
    delivery: withDays(FLYER_DELIVERY.slice(0, 2), ['Thu 3 Dec', 'Thu 26 Nov'], [0, 29], 'stickers'),
    groups: [
      { key: 'shape', title: 'Shape', items: [
        { id: 'round', name: 'Round', sub: 'Circle', icon: 'stickers/round', mult: 1, info: 'A round sticker: our most chosen shape.' },
        { id: 'square', name: 'Square', sub: 'Straight sides', icon: 'stickers/square', mult: 1, info: 'A square sticker with a clean, modern look.' },
        { id: 'rectangle', name: 'Rectangle', sub: 'Portrait or landscape', icon: 'stickers/rounded', mult: 1, info: 'A rectangle, from business-card size to A3.' },
      ]},
      { key: 'size', title: 'Size', prefer: c => ({ round: 'r-50', square: 's-50', rectangle: 'rt-55x85' })[c.shape], items: [
        ...[20, 30, 40, 50, 60, 70, 80, 95, 148].map(d => ({ id: `r-${d}`, name: `${d} mm`, sub: 'Diameter', d, sh: 'round' })),
        ...[20, 30, 40, 50, 52, 74, 98, 105, 120, 148, 210].map(d => ({ id: `s-${d}`, name: `${d} x ${d} mm`, sub: 'Square', d, sh: 'square' })),
        ...[['55x85', 55, 85, ''], ['105x210', 105, 210, ''], ['dl', 99, 210, 'DL'], ['a8', 52, 74, 'A8'], ['a7', 74, 105, 'A7'], ['a6', 105, 148, 'A6'], ['a5', 148, 210, 'A5'], ['a4', 210, 297, 'A4'], ['a3', 297, 420, 'A3']]
          .map(([id, w, h, a]) => ({ id: `rt-${id}`, name: `${w} x ${h} mm`, sub: a || 'Rectangle', d: Math.sqrt(w * h), sh: 'rectangle' })),
      ].map(({ id, name, sub, d, sh }) => ({ id, name, sub, shape: labelShape(id, sh), mult: Math.round(Math.max(.8, (d / 50) ** 1.3) * 100) / 100, info: d <= 30 ? 'A small sticker, for laptops, envelopes and seals.' : d >= 100 ? 'A big sticker, for windows, boxes and walls.' : 'A handy size to hand out, on packaging or laptops.', when: c => c.shape === sh })) },
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'white', name: 'White film', sub: 'Plastic, white', icon: 'materials/film-white-gloss', mult: 1, info: 'A white plastic film: water-resistant and strong. Our recommended choice.' },
        { id: 'clear', name: 'Transparent', sub: 'Plastic, clear', icon: 'materials/film-clear', mult: 1.05, info: 'A clear film, for windows and glass.' },
        { id: 'paper', name: 'Paper', sub: 'Writable', icon: 'materials/uncoated', mult: .95, info: 'Matt paper you can write on.' },
        { id: 'special', name: 'Special', sub: 'Kraft', icon: 'materials/kraft', mult: 1.1, info: 'Brown kraft paper for a natural look.' },
      ]},
      { key: 'material', title: 'Material', prefer: c => ({ white: 'pp-gloss', clear: 'pp-clear', paper: 'paper-matt', special: 'kraft' })[c.appearance], items: [
        { id: 'pp-gloss', name: 'Gloss Polypropylene', sub: 'Eco-friendly alternative', icon: 'materials/film-white-gloss', mult: 1, info: 'A glossy white film, an eco-friendlier alternative to PVC. Our recommended choice.', when: c => c.appearance === 'white' },
        { id: 'pvc-gloss', name: 'Gloss PVC', sub: 'Vibrant & sturdy', icon: 'materials/pvc', mult: 1.1, info: 'A sturdy, glossy vinyl with vivid colours. Lasts outdoors.', when: c => c.appearance === 'white' },
        { id: 'pp-clear', name: 'Transparent Polypropylene', sub: 'Eco-friendly alternative', icon: 'materials/film-clear', mult: 1, info: 'A clear film: your design floats on the glass.', when: c => c.appearance === 'clear' },
        { id: 'pvc-clear', name: 'Transparent PVC', sub: 'Bright background', icon: 'materials/film-clear', mult: 1.1, info: 'A clear vinyl that stays bright on any background.', when: c => c.appearance === 'clear' },
        { id: 'paper-matt', name: 'Matt Paper', sub: 'Writable', icon: 'materials/uncoated', mult: 1, info: 'Matt paper you can write on.', when: c => c.appearance === 'paper' },
        { id: 'kraft', name: 'Kraft Paper', sub: 'Natural look', icon: 'materials/kraft', mult: 1, info: 'Brown kraft paper: natural and honest.', when: c => c.appearance === 'special' },
      ]},
      { key: 'finishing', title: 'Finishing', when: c => ['white', 'clear'].includes(c.appearance), prefer: () => 'none', items: [
        { id: 'none', name: 'No finish', sub: 'As printed', mult: 1, info: 'No extra layer.' },
        { id: 'gloss-1', name: 'Gloss lamination', sub: 'Front only', mult: 1.15, info: 'A shiny protective layer: colours pop and the print lasts longer outdoors. Our recommended choice.' },
        { id: 'matt-1', name: 'Matte lamination', sub: 'Front only', mult: 1.15, info: 'A non-reflective protective layer.' },
        { id: 'velvet-1', name: 'Velvet lamination', sub: 'Front only', mult: 1.3, info: 'A soft, suede-like touch for a premium feel.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { shape: 'round', size: 'r-50', appearance: 'white', material: 'pp-gloss', finishing: 'gloss-1' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { shape: 'round', size: 'r-40', appearance: 'white', material: 'pp-gloss', finishing: 'none' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { shape: 'round', size: 'r-50', appearance: 'special', material: 'kraft' } },
    ],
    recapExtra: 'Full colour · Cut one by one',
    fixed: [['Print', 'Full colour'], ['Cut', 'Each sticker cut out and packed loose']],
    about: ['Every one of your individual stickers is cut out and packed loose, so you can start giving them away the day they arrive. These stickers are laser cut, which can leave a thin white border around the edge.'],
    specs: [['Shape', 'Round | Square | Rectangle'], ['Material', 'White or transparent polypropylene or PVC, matt paper, kraft'], ['Finishing', 'Gloss, matte or velvet lamination (films)'], ['Print colour', 'Full colour']],
  },

  // Standard Envelopes (helloprint.com/en-ie/standardenvelopes): Size → Window → Colours → Closure. Standard delivery only.
  'standard-envelopes': {
    name: 'Standard Envelopes', cartName: 'Standard envelopes', noun: 'envelopes', crumbTop: ['Stationery', '#stationery-and-office-supplies'], crumb: ['Envelopes', '#envelopes-printing'],
    img: 'assets/products/envelopes.webp', priceMult: 1, defaultQty: 1000,
    qty: [[500, 96.99], [1000, 101.99], [2000, 144.99], [3000, 191.99], [4000, 239.39], [5000, 279.89], [6000, 312.29], [7000, 352.79], [8000, 395.09], [9000, 440.99], [10000, 475.20], [15000, 644.39]],
    delivery: [STANDARD_ONLY('Tue 1 Dec', 'envelopes')],
    groups: [
      { key: 'size', title: 'Size', items: [
        ['c5', 'C5', '162 × 229 mm', 'width:37px;height:26px', 1, 'Our recommended size: fits A5 or a folded A4. Common for flyers and brochures.'],
        ['c6', 'C6', '114 × 162 mm', 'width:31px;height:22px', .75, 'Fits A6 or a folded A5: cards and invitations.'],
        ['dl', 'DL', '110 × 220 mm', 'width:40px;height:20px', .9, 'The most common business envelope: an A4 letter folded in three.'],
        ['ea5', 'EA5', '156 × 220 mm', 'width:37px;height:26px', 1, 'Fits A4 folded twice: invoices and tickets.'],
        ['c56', 'C5/6', '114 × 229 mm', 'width:40px;height:20px', .95, 'A4 folded twice or A5 folded once.'],
        ['ea4', 'EA4', '220 × 312 mm', 'width:40px;height:28px', 1.7, 'An A4 envelope with a little extra room.'],
        ['c4', 'C4', '229 × 324 mm', 'width:40px;height:28px', 1.8, 'Fits A4 without folding: business documents and brochures.'],
      ].map(([id, name, sub, shape, mult, info]) => ({ id, name, sub, shape, mult, info })) },
      { key: 'window', title: 'Window', items: [
        { id: 'none', name: 'Without window', sub: 'Closed front', icon: 'envelopes/window-none', mult: 1, info: 'A closed envelope: the address is printed or written on it. Our recommended choice.' },
        { id: 'left', name: 'Window left', sub: 'Address shows through', icon: 'envelopes/window-left', mult: 1.05, info: 'A window on the left: the address on your letter shows through.' },
        { id: 'right', name: 'Window right', sub: 'Address shows through', icon: 'envelopes/window-right', mult: 1.05, info: 'A window on the right: the address on your letter shows through.' },
      ]},
      { key: 'colours', title: 'Colours', items: [
        { id: 'full', name: 'Full colour', sub: 'On one side', icon: 'inks/full', mult: 1, info: 'Your logo or design in full colour on the front. All-over print is not possible. Our recommended choice.' },
        { id: 'unprinted', name: 'Unprinted', sub: 'Blank', icon: 'inks/none', mult: .6, info: 'Plain envelopes, without print.' },
      ]},
      { key: 'closure', title: 'Finishing', items: [
        { id: 'strip', name: 'Self-adhesive strip', sub: 'Peel and seal', icon: 'envelopes/closure-strip', mult: 1, info: 'Peel off the strip and press: easy and clean. Our recommended choice.' },
        { id: 'gummed', name: 'Gummed', sub: 'Moisten to seal', icon: 'envelopes/closure-gummed', mult: .97, info: 'A classic gummed flap you moisten to seal; the fastest for machines.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'c5', window: 'none', colours: 'full', closure: 'strip' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'dl', window: 'none', colours: 'full', closure: 'gummed' } },
      { id: 'window', name: 'With window', icon: 'star.svg', cfg: { size: 'dl', window: 'left', colours: 'full', closure: 'strip' } },
    ],
    recapExtra: 'Printed on one side',
    fixed: [['Inside', 'Grey security print, for privacy']],
    about: ['Make sure your message arrives in style: standard envelopes with your logo or design in full colour, with a self-adhesive strip for easy closure. The inside is grey to keep your post private. Envelopes cannot be printed all-over.'],
    specs: [['Size', 'C6 | DL | EA5 | C5/6 | C5 | EA4 | C4'], ['Window', 'None, left or right'], ['Print', 'Full colour on one side, or unprinted'], ['Closure', 'Self-adhesive strip or gummed']],
  },

  // Letterheads (helloprint.com/en-ie/letterheads): Size → Paper type → Weight (per paper) → Printing → Folding (A4)
  'letterheads': {
    name: 'Letterheads', cartName: 'Letterheads', noun: 'letterheads', crumbTop: ['Stationery', '#stationery-and-office-supplies'], crumb: ['Letterheads', '#letterheads-printing'], liveFunnel: true,
    img: 'assets/products/letterheads.webp', priceMult: 1, defaultQty: 1000,
    qty: [[100, 21.99], [250, 31.99], [500, 50.99], [1000, 62.99], [2000, 87.99], [2500, 100.99], [5000, 163.99], [10000, 264.59]],
    delivery: withDays(FLYER_DELIVERY, ['Wed 2 Dec', 'Wed 25 Nov', 'Mon 23 Nov'], [0, 50, 70], 'letterheads'),
    groups: [
      { key: 'size', title: 'Size', items: [
        { id: 'a4', name: 'A4', sub: '210 x 297 mm', shape: 'width:26px;height:37px', mult: 1, info: 'The standard letter size. Our recommended choice.' },
        { id: 'a5', name: 'A5', sub: '148 x 210 mm', shape: 'width:21px;height:30px', mult: .7, info: 'A half-size letter, for short notes and compliment slips.' },
      ]},
      { key: 'paper', title: 'Paper type', items: [
        { id: 'white', name: 'Standard White', sub: 'Uncoated', icon: 'materials/uncoated', mult: 1, info: 'Bright white uncoated paper, safe in any inkjet or laser printer. Our recommended choice.' },
        { id: 'recycled', name: 'White Recycled', sub: '100% recycled', icon: 'materials/recycled', mult: 1.08, info: 'Recycled paper with a white look.' },
        { id: 'biotop', name: 'Biotop Off-white', sub: 'Chlorine-free', icon: 'materials/bio-top', mult: 1.12, info: 'A chlorine-free paper with a soft, natural white.' },
      ]},
      { key: 'weight', title: 'Type', prefer: c => ({ white: 'white-100', recycled: 'recycled-80', biotop: 'biotop-90' })[c.paper], items: [['white', [80, 90, 100, 120]], ['recycled', [80, 120]], ['biotop', [90, 120]]]
        .flatMap(([pa, list]) => list.map(gsm => ({ id: `${pa}-${gsm}`, name: '', sub: `${gsm} gsm`, thick: 0, mult: { 80: .9, 90: .95, 100: 1, 120: 1.1 }[gsm], info: { 80: 'Light, like copier paper.', 90: 'A touch firmer than copier paper.', 100: 'A quality feel that still runs through any printer. Our recommended choice.', 120: 'Thick paper for a premium letter.' }[gsm], when: c => c.paper === pa }))) },
      { key: 'printing', title: 'Printing', items: [
        { id: 'single', name: 'Full colour · single', sub: 'Single-sided', icon: 'printing/e-single', mult: 1, info: 'Your letterhead in full colour on the front. Our recommended choice.' },
        { id: 'double', name: 'Full colour · double', sub: 'Double-sided', icon: 'printing/e-double', mult: 1.35, info: 'Full colour on both sides, for terms or a design on the back.' },
        ...[1, 2, 3].flatMap(n => ['single', 'double'].map(s => ({ id: `pms${n}-${s}`, name: `${n} PMS · ${s}`, sub: `${n} Pantone colour${n > 1 ? 's' : ''}`, icon: `printing/pms-${n}-${s}`, mult: 1.1 + n * .15 + (s === 'double' ? .3 : 0), info: `Your house colour${n > 1 ? 's' : ''} as exact Pantone ink${n > 1 ? 's' : ''}, on ${s === 'single' ? 'one side' : 'both sides'}.` }))),
      ]},
      { key: 'folding', title: 'Folding', when: c => c.size === 'a4', prefer: () => 'none', items: [
        { id: 'none', name: 'Unfolded', sub: 'Flat', shape: 'width:26px;height:37px', mult: 1, info: 'Delivered flat, ready for your printer. Our recommended choice.' },
        { id: 'a5', name: 'Folded to A5', sub: 'Half fold', icon: 'folds/portrait', mult: 1.08, info: 'Folded once, to A5.' },
        { id: 'tri', name: 'DL tri-fold', sub: 'Folded in three', icon: 'folds/tri-fold', mult: 1.1, info: 'Folded in three, ready for a DL envelope.' },
        { id: 'z', name: 'DL Z-fold', sub: 'Folded like a Z', icon: 'folds/z-fold', mult: 1.1, info: 'Folded like a Z, ready for a window envelope.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a4', paper: 'white', weight: 'white-100', printing: 'single', folding: 'none' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a4', paper: 'white', weight: 'white-80', printing: 'single', folding: 'none' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'a4', paper: 'recycled', weight: 'recycled-80', printing: 'single', folding: 'none' } },
    ],
    recapExtra: 'Printer-safe',
    fixed: [['Use', 'Safe to print on any inkjet or laser printer']],
    about: ['Letterheads with your logo and details, on paper that is safe to print on any inkjet or laser printer. Single or double-sided, in full colour or your exact Pantone colours.'],
    specs: [['Size', 'A4 | A5'], ['Paper', 'Standard white 80–120 gsm | White recycled | Biotop off-white'], ['Print', 'Full colour or 1–3 PMS colours, single or double-sided'], ['Folding', 'Unfolded | A5 | DL tri-fold | DL Z-fold']],
  },

  // Standard Notepads (helloprint.com/en-ie/notepads): Size → Material → Cover → Bind → Printing → Boreholes → Sheets
  'standard-notepads': {
    name: 'Standard Notepads', cartName: 'Standard notepads', noun: 'notepads', crumbTop: ['Stationery', '#stationery-and-office-supplies'], crumb: ['Notepads', '#notepad-printing'],
    img: 'assets/products/notepads.webp', priceMult: 1, defaultQty: 100,
    qty: [[50, 171.99], [100, 253.79], [200, 438.29], [300, 619.20], [500, 1072.99], [1000, 1906.99], [2500, 4524.99], [5000, 7788.99]],
    delivery: withDays(FLYER_DELIVERY.slice(0, 2), ['Thu 3 Dec', 'Wed 25 Nov'], [0, 121], 'notepads'),
    groups: [
      { key: 'size', title: 'Size', items: [
        ['a4', 'A4 Portrait', '210 x 297 mm', 'width:26px;height:37px', 1, 'A big pad for meetings and plans. Our recommended choice.'],
        ['a5', 'A5 Portrait', '148 x 210 mm', 'width:21px;height:30px', .65, 'The handy desk size.'],
        ['a6', 'A6 Portrait', '105 x 148 mm', 'width:15px;height:21px', .45, 'A pocket pad for quick notes.'],
        ['a7', 'A7 Portrait', '74 x 105 mm', 'width:11px;height:15px', .35, 'A mini pad, for the till or a giveaway.'],
        ['a4-l', 'A4 Landscape', '297 x 210 mm', 'width:37px;height:26px', 1, 'Wide pages for plans and lists.'],
        ['a5-l', 'A5 Landscape', '210 x 148 mm', 'width:30px;height:21px', .65, 'A wide desk pad.'],
        ['a6-l', 'A6 Landscape', '148 x 105 mm', 'width:21px;height:15px', .45, 'A small, wide pad.'],
        ['a7-l', 'A7 Landscape', '105 x 74 mm', 'width:15px;height:11px', .35, 'A mini, wide pad.'],
        ['98', '98 x 98 mm', 'Square', 'width:14px;height:14px', .38, 'A small square pad.'],
        ['148', '148 x 148 mm', 'Square', 'width:21px;height:21px', .55, 'A medium square pad.'],
        ['210', '210 x 210 mm', 'Square', 'width:30px;height:30px', .8, 'A large square pad.'],
        ['62x148', '62 x 148 mm', 'Long', 'width:9px;height:21px', .4, 'A slim list pad, for shopping and to-do lists.'],
      ].map(([id, name, sub, shape, mult, info]) => ({ id, name, sub, shape, mult, info })) },
      { key: 'material', title: 'Material', items: [
        { id: 'offset-80', name: 'Offset', sub: '80 gsm', icon: 'materials/uncoated', mult: 1, info: 'Writable paper, like a classic notepad. Our recommended choice.' },
        { id: 'offset-90', name: 'Offset', sub: '90 gsm', icon: 'materials/uncoated', mult: 1.05, info: 'A touch firmer writable paper.' },
        { id: 'offset-120', name: 'Offset', sub: '120 gsm', icon: 'materials/uncoated', mult: 1.2, info: 'Thick writable paper: no ink shows through.' },
        { id: 'recycled-80', name: 'Recycled', sub: '80 gsm', icon: 'materials/recycled', mult: 1.05, info: 'Writable recycled paper.' },
      ]},
      { key: 'cover', title: 'Cover', items: [
        { id: 'none', name: 'Without cover', sub: 'Grey cardboard back', icon: 'notepads/self-cover', mult: 1, info: 'The pad has a grey cardboard back and no cover.' },
        { id: 'silk-170', name: 'Silk', sub: '170 gsm', icon: 'materials/silk-matte', mult: 1.08, info: 'A printed cover that protects the first page. Our recommended choice.' },
        { id: 'silk-250', name: 'Silk', sub: '250 gsm', icon: 'materials/silk-matte', mult: 1.12, info: 'A thick printed cover for a premium pad.' },
      ]},
      { key: 'bind', title: 'Bind', items: [
        { id: 'top', name: 'Upper bound', sub: 'Glued at the top', icon: 'notepads/bind-top', mult: 1, info: 'Glued along the top: tear off a sheet downwards. Our recommended choice.' },
        { id: 'left', name: 'Left bound', sub: 'Glued at the left', icon: 'notepads/bind-left', mult: 1, info: 'Glued along the left side, like a book.' },
      ]},
      { key: 'printing', title: 'Printing', items: [
        { id: 'single', name: 'Full colour · single', sub: 'Single-sided', icon: 'printing/e-single', mult: 1, info: 'Your design on every sheet in full colour. Our recommended choice.' },
        { id: 'double', name: 'Full colour · double', sub: 'Double-sided', icon: 'printing/e-double', mult: 1.4, info: 'Full colour on both sides of every sheet.' },
        ...[1, 2, 3].map(n => ({ id: `pms${n}`, name: `${n} PMS · single`, sub: `${n} Pantone colour${n > 1 ? 's' : ''}`, icon: `printing/pms-${n}-single`, mult: 1.05 + n * .12, info: `Your house colour${n > 1 ? 's' : ''} as exact Pantone ink${n > 1 ? 's' : ''}.` })),
      ]},
      { key: 'holes', title: 'Boreholes', items: [
        { id: '0', name: 'No holes', sub: 'Plain', icon: 'notepads/holes-0', mult: 1, info: 'Plain sheets. Our recommended choice.' },
        { id: '2', name: '2 holes', sub: 'For a ring binder', icon: 'notepads/holes-2', mult: 1.05, info: 'Two holes, so the sheets go straight into a ring binder.' },
        { id: '4', name: '4 holes', sub: 'For a ring binder', icon: 'notepads/holes-4', mult: 1.06, info: 'Four holes, for a four-ring binder.' },
      ]},
      { key: 'sheets', title: 'Number of sheets', items: [
        { id: '100', name: '100 sheets', sub: 'Per pad', mult: 1, info: 'A thick pad that lasts. Our recommended choice.' },
        { id: '50', name: '50 sheets', sub: 'Per pad', mult: .62, info: 'A medium pad.' },
        { id: '25', name: '25 sheets', sub: 'Per pad', mult: .42, info: 'A thin pad, ideal as a giveaway.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a4', material: 'offset-80', cover: 'none', bind: 'top', printing: 'single', holes: '0', sheets: '100' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a6', material: 'offset-80', cover: 'none', bind: 'top', printing: 'single', holes: '0', sheets: '50' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'a5', material: 'recycled-80', cover: 'none', bind: 'top', printing: 'single', holes: '0', sheets: '100' } },
    ],
    recapExtra: 'Glued',
    fixed: [['Binding', 'Glued, on a grey cardboard back']],
    about: ['Custom notepads printed with your own design on every inner sheet: a practical promotional tool for desks, tills and trade shows, on a grey cardboard back in 12 sizes.'],
    specs: [['Size', '12 sizes, A7 to A4, square and long'], ['Paper', '80, 90 or 120 gsm offset | 80 gsm recycled'], ['Sheets', '25, 50 or 100 per pad'], ['Print', 'Full colour or 1–3 PMS colours']],
  },

  // Christmas Cards (helloprint.com/en-ie/christmascards): Shape → Size (per shape) → Printing → Material appearance → Material → Finishing → Envelopes
  'christmas-cards': {
    name: 'Christmas Cards', cartName: 'Christmas cards', noun: 'cards', crumbTop: ['Christmas', 'christmas.html'], crumb: ['Christmas Cards', '#christmas-cards'], liveFunnel: true,
    img: 'assets/christmas/christmas-cards.webp', priceMult: 1, defaultQty: 100,
    qty: [[10, 22.99], [50, 28.99], [100, 36.49], [150, 44.49], [250, 60.99], [500, 97.99], [1000, 170.99], [2500, 353.69]],
    delivery: withDays(FLYER_DELIVERY, ['Mon 30 Nov', 'Wed 25 Nov', 'Mon 23 Nov'], [0, 24.50, 39.50], 'cards'),
    groups: [
      { key: 'shape', title: 'Shape', items: [
        { id: 'portrait-fold', name: 'Portrait left fold', sub: 'Folded card', icon: 'folds/portrait', mult: 1, info: 'A folded card that opens like a book. Our recommended choice.' },
        { id: 'portrait', name: 'Portrait', sub: 'Flat card', shape: 'width:21px;height:30px', mult: .7, info: 'A flat, upright card.' },
        { id: 'landscape-fold', name: 'Landscape left fold', sub: 'Folded card', icon: 'folds/landscape', mult: 1, info: 'A wide folded card.' },
        { id: 'tent', name: 'Landscape tent fold', sub: 'Stands up', icon: 'folds/tent', mult: 1, info: 'Folded at the top, so it stands on a desk or a mantelpiece.' },
        { id: 'landscape', name: 'Landscape', sub: 'Flat card', shape: 'width:30px;height:21px', mult: .7, info: 'A flat, wide card.' },
        { id: 'square-fold', name: 'Square folded', sub: 'Folded card', icon: 'folds/square', mult: 1.05, info: 'A folded square card that stands out.' },
        { id: 'square', name: 'Square', sub: 'Flat card', shape: 'width:26px;height:26px', mult: .75, info: 'A flat square card.' },
      ]},
      { key: 'size', title: 'Size', prefer: c => /square/.test(c.shape) ? 'sq-148' : 'a6', items: [
        { id: 'a6', name: 'A6', sub: '105 x 148 mm', shape: 'width:15px;height:21px', mult: 1, info: 'The classic Christmas card size. Our recommended choice.', when: c => !/square/.test(c.shape) },
        { id: 'a5', name: 'A5', sub: '148 x 210 mm', shape: 'width:21px;height:30px', mult: 1.5, info: 'A big card with room for a photo and a message.', when: c => !/square/.test(c.shape) },
        { id: 'a4', name: 'A4', sub: '210 x 297 mm', shape: 'width:30px;height:42px', mult: 2.6, info: 'An extra large card.', when: c => /^portrait/.test(c.shape) },
        { id: 'a7', name: 'A7', sub: '74 x 105 mm', shape: 'width:11px;height:15px', mult: .75, info: 'A mini card, for gifts and parcels.', when: c => /^portrait/.test(c.shape) },
        { id: 'along', name: 'A-Long', sub: '210 x 74 mm', shape: 'width:30px;height:11px', mult: .9, info: 'A slim, wide card.', when: c => /^landscape/.test(c.shape) },
        { id: 'dl', name: 'DL', sub: '210 x 99 mm', shape: 'width:30px;height:14px', mult: 1, info: 'Fits a DL envelope.', when: c => /^landscape/.test(c.shape) },
        ...[105, 132, 148, 152, 210].map(d => ({ id: `sq-${d}`, name: `${d} x ${d} mm`, sub: 'Square', shape: `width:${Math.round(d * .15)}px;height:${Math.round(d * .15)}px`, mult: Math.round((d / 125) ** 2 * 100) / 100, info: d === 148 ? 'A popular square card size.' : 'A square card.', when: c => /square/.test(c.shape) })),
      ]},
      { key: 'printing', title: 'Printing', items: [
        { id: 'double', name: 'Double-sided', sub: 'Front and back', mult: 1.15, info: 'Printed outside and inside: room for your greeting. Our recommended choice.' },
        { id: 'single', name: 'Single-sided', sub: 'Outside only', mult: 1, info: 'Only the outside is printed; you write your greeting inside.' },
      ]},
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'uncoated', name: 'Writable', sub: 'Uncoated', mult: 1, info: 'Card you can write on with any pen: for a personal greeting. Our recommended choice.' },
        { id: 'matt', name: 'Matt', sub: 'Silk', mult: 1, info: 'A smooth matt card for photos and colour.' },
        { id: 'eco', name: 'Eco', sub: 'Recycled and natural', mult: 1.1, info: 'Recycled, Paperwise or Bio Top card.' },
        { id: 'seed', name: 'Seed Paper', sub: 'Plant it', mult: 1.8, info: 'Card with seeds in it: plant it after Christmas and wildflowers grow.' },
        { id: 'special', name: 'Special', sub: 'Metallic and marble', mult: 1.6, info: 'Gold, silver, white metallic or deluxe marble card. White ink is not possible on these.' },
      ]},
      { key: 'material', title: 'Material', prefer: c => ({ uncoated: 'sulfate', matt: 'silk-300', eco: 'recycled', seed: 'seed-200', special: 'gold' })[c.appearance], items: [
        { id: 'sulfate', name: 'Sulfate cardboard', sub: '300 gsm', icon: 'materials/sulfate-cardboard', mult: 1, info: 'A bright white, firm card you can write on. Our recommended choice.', when: c => c.appearance === 'uncoated' },
        { id: 'offset', name: 'White offset paper', sub: '340 gsm', icon: 'materials/uncoated', mult: 1.05, info: 'A thick, uncoated card with a natural feel.', when: c => c.appearance === 'uncoated' },
        { id: 'silk-300', name: 'Silk', sub: '300 gsm', icon: 'materials/silk-matte', mult: 1, info: 'A smooth matt card.', when: c => c.appearance === 'matt' },
        { id: 'silk-350', name: 'Silk', sub: '350 gsm', icon: 'materials/silk-matte', mult: 1.06, info: 'A thicker matt card.', when: c => c.appearance === 'matt' },
        { id: 'recycled', name: 'Recycled', sub: '300 gsm', icon: 'materials/recycled', mult: 1, info: '100% recycled card.', when: c => c.appearance === 'eco' },
        { id: 'paperwise', name: 'Paperwise Natural', sub: '295 gsm', icon: 'materials/paperwise', mult: 1.05, info: 'Card made from agricultural waste.', when: c => c.appearance === 'eco' },
        { id: 'biotop', name: 'Bio Top', sub: '300 gsm', icon: 'materials/bio-top', mult: 1.05, info: 'A chlorine-free card with a soft white.', when: c => c.appearance === 'eco' },
        { id: 'seed-80', name: 'Seed Paper', sub: '80 gsm', icon: 'materials/seed-paper', mult: .8, info: 'Thin seed paper.', when: c => c.appearance === 'seed' },
        { id: 'seed-200', name: 'Seed Paper', sub: '200 gsm', icon: 'materials/seed-paper', mult: 1, info: 'Firm seed paper that feels like a card.', when: c => c.appearance === 'seed' },
        { id: 'gold', name: 'Metallic Gold', sub: '300 gsm', icon: 'materials/metallic-gold', mult: 1, info: 'A shimmering gold card.', when: c => c.appearance === 'special' },
        { id: 'silver', name: 'Metallic Silver', sub: '300 gsm', icon: 'materials/metallic-silver', mult: 1, info: 'A cool silver card.', when: c => c.appearance === 'special' },
        { id: 'white', name: 'Metallic White', sub: '300 gsm', icon: 'materials/metallic-white', mult: 1, info: 'White with a subtle metallic glow.', when: c => c.appearance === 'special' },
        { id: 'marble', name: 'Deluxe marble', sub: '300 gsm', icon: 'materials/pearl-marble', mult: 1.05, info: 'A pearly marble card that changes with the light.', when: c => c.appearance === 'special' },
      ]},
      { key: 'finishing', title: 'Finishing', when: c => ['uncoated', 'matt'].includes(c.appearance), prefer: () => 'none', items: [
        { id: 'none', name: 'No finishing', sub: 'As printed', mult: 1, info: 'No extra layer: the card stays writable.' },
        { id: 'gloss-1', name: 'Gloss lamination', sub: 'Front only', mult: 1.2, info: 'A shiny layer on the outside that makes colours pop. Our recommended choice.' },
        { id: 'uv-1', name: 'UV Glossy', sub: 'Front only', mult: 1.25, info: 'A high-gloss varnish on the outside.' },
        { id: 'matt-1', name: 'Matte lamination', sub: 'Front only', mult: 1.2, info: 'A soft, non-reflective layer on the outside.' },
        { id: 'velvet-1', name: 'Velvet lamination', sub: 'Front only', mult: 1.35, info: 'A suede-like touch for a premium card.' },
      ]},
      { key: 'envelopes', title: 'Envelopes', items: [
        { id: 'without', name: 'Without envelopes', sub: 'Cards only', icon: 'envelopes/without', mult: 1, info: 'Only the cards.' },
        { id: 'with', name: 'With white envelopes', sub: 'One per card', icon: 'envelopes/with', mult: 1.3, info: 'A white envelope with every card, ready to post. Our recommended choice.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { shape: 'portrait-fold', size: 'a6', printing: 'double', appearance: 'uncoated', material: 'sulfate', finishing: 'gloss-1', envelopes: 'with' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { shape: 'portrait', size: 'a6', printing: 'single', appearance: 'uncoated', material: 'sulfate', finishing: 'none', envelopes: 'without' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { shape: 'portrait-fold', size: 'a6', printing: 'double', appearance: 'eco', material: 'recycled', envelopes: 'with' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: ['Christmas cards with your own design, on writable, matt, eco, seed or metallic card, with white envelopes if you like. White ink is not possible on metallic white, gold, silver or pearl paper.'],
    specs: [['Shape', 'Portrait, landscape or square; flat, left fold or tent fold'], ['Material', 'Writable | Silk | Recycled | Paperwise | Bio Top | Seed paper | Metallic | Marble'], ['Finishing', 'Gloss, matte or velvet lamination, UV glossy'], ['Option', 'With or without white envelopes']],
  },

  // ===== Top 20, batch 3 (Cornel 2026-11-22): promo and outdoor, read on live en-ie the same day, same rules as batch 1 and 2.

  // Ebony Pens Matte (helloprint.com/en-ie/ebonymattepen): Colour → Print. Print area 60 x 5 mm and blue ink are fixed (one choice on live).
  'ebony-pens-matte': {
    name: 'Ebony Pens Matte', cartName: 'Ebony pens matte', noun: 'pens', crumbTop: ['Corporate Gifts', '#corporate-gifts'], crumb: ['Pens', 'pens.html'],
    img: 'assets/products/ebony-pen.webp', priceMult: 1, defaultQty: 500, badge: 'Most Popular',
    qty: [[50, 97.15], [100, 118.70], [150, 157.32], [250, 199.19], [500, 292.68], [700, 404.07], [1000, 495.93], [2500, 1158.54], [5000, 2276.42]],
    delivery: [STANDARD_ONLY('Wed 9 Dec', 'pens')],
    groups: [
      { key: 'colour', title: 'Colour', items: [['black', 'Black', '#1c1c1c'], ['blue', 'Blue', '#1f3fae'], ['red', 'Red', '#c8202f'], ['green', 'Green', '#1d7a3a'], ['yellow', 'Yellow', '#f4c81f'], ['orange', 'Orange', '#ee7a22'],
        ['silver', 'Silver', '#c4c6c8'], ['light-green', 'Light Green', '#8fcf6a'], ['purple', 'Purple', '#6b3fa0'], ['light-blue', 'Light Blue', '#7fbbe8'], ['anthracite', 'Anthracite', '#3d4045'], ['white', 'White', '#ffffff']]
        .map(([id, name, color]) => ({ id, name, sub: '', color, mult: 1, info: id === 'black' ? 'A matte black barrel with silver details and a metal clip. Our recommended colour.' : `A matte ${name.toLowerCase()} barrel with silver details and a metal clip.` })) },
      { key: 'print', title: 'Print', items: [
        { id: 'engraving', name: 'Laser engraving', sub: 'Silver on the barrel', mult: 1, info: 'Your logo engraved into the barrel: the silver metal shows through and never wears off. Our recommended choice.' },
        { id: 'full', name: 'Full colour', sub: 'Any colours', icon: 'inks/full', mult: 1.3, info: 'Your design in full colour, photos and gradients included.' },
        ...[1, 2, 3, 4].map(n => ({ id: `c${n}`, name: `${n} colour${n > 1 ? 's' : ''}`, sub: 'Pad print', icon: `inks/${n}`, mult: 1 + n * .08, info: `A logo in ${n} solid colour${n > 1 ? 's' : ''}, printed on the barrel.` })),
        { id: 'unprinted', name: 'Unprinted', sub: 'Blank', icon: 'inks/none', mult: .8, info: 'The pen without print.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { colour: 'black', print: 'engraving' } },
      { id: 'colour', name: 'Full colour', icon: 'star.svg', cfg: { colour: 'white', print: 'full' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { colour: 'blue', print: 'c1' } },
    ],
    recapExtra: 'Print area 60 x 5 mm · Blue ink',
    fixed: [['Print area', '60 x 5 mm'], ['Writing colour', 'Blue']],
    about: ['A luxurious pen with a matte finish, silver details and a stylish metal clip. Laser engraving makes your logo shine in silver and never wears off. Order any quantity from 25 to 5,000.'],
    specs: [['Colours', '12 matte colours'], ['Print', 'Laser engraving | Full colour | 1–4 colours | Unprinted'], ['Print area', '60 x 5 mm'], ['Writing colour', 'Blue']],
  },

  // Beach Flags (helloprint.com/en-ie/featherflags, live "Feather Flags"): Type → Size (per type) → Material → Colour → Base (with pole)
  'beach-flags': {
    name: 'Beach Flags', cartName: 'Beach flags', noun: 'flags', crumbTop: ['Outdoor', '#outdoor'], crumb: ['Flags', '#flag-printing'], liveFunnel: true,
    img: 'assets/products/beach-flag.webp', priceMult: 1, defaultQty: 1,
    qty: [[1, 54.99], [2, 90.99], [3, 125.99], [4, 158.99], [5, 192.99], [10, 341.09], [15, 511.20], [20, 681.29], [25, 851.39], [50, 1772.99]],
    delivery: withDays(FLYER_DELIVERY, ['Mon 30 Nov', 'Wed 25 Nov', 'Mon 23 Nov'], [0, 57, 65], 'flags'),
    groups: [
      { key: 'type', title: 'Type', items: [
        { id: 'pole', name: 'Flag with pole', sub: 'Fiberglass pole and bag', icon: 'flags/flag-with-pole', mult: 1, info: 'The flag with a fiberglass pole system and a carry bag: ready to set up. Our recommended choice.' },
        { id: 'flag', name: 'Only the flag', sub: 'To replace a print', icon: 'flags/flag-only', mult: .55, info: 'Only the printed flag, for a pole you already have.' },
      ]},
      { key: 'size', title: 'Size', prefer: c => c.type === 'pole' ? 'p-65' : 'f-65', items: [
        ['p-40', '40 x 290 cm', 'Small', .75, 'pole'], ['p-65', '65 x 365 cm', 'Medium', 1, 'pole'], ['p-90', '90 x 450 cm', 'Large', 1.45, 'pole'],
        ['f-40', '40 x 240 cm', 'Small', .75, 'flag'], ['f-65', '65 x 315 cm', 'Medium', 1, 'flag'], ['f-90', '90 x 400 cm', 'Large', 1.45, 'flag'],
      ].map(([id, name, sub, mult, t]) => ({ id, name, sub, shape: `width:${Math.round(+name.split(' x ')[0] / 9)}px;height:${Math.round(parseInt(name.split(' x ')[1]) / 450 * 42)}px;border-radius:0 12px 0 0`, mult, info: sub === 'Medium' ? 'Our recommended size: visible from a distance and easy to carry.' : sub === 'Small' ? 'A compact flag for stands and shop entrances.' : 'A tall flag that stands out above crowds.', when: c => c.type === t })) },
      { key: 'material', title: 'Material', items: [
        { id: 'rpet', name: 'Recycled RPET', sub: '110 gsm', icon: 'materials/rpet', mult: 1, info: 'A washable fabric made from recycled bottles. Weatherproof and durable. Our recommended choice.' },
        { id: 'mesh', name: 'Mesh fabric', sub: '115 gsm', icon: 'materials/mesh', mult: 1.05, info: 'An open fabric that lets the wind through: for windy spots.' },
      ]},
      { key: 'colour', title: 'Colour', items: [
        { id: 'black', name: 'Black', sub: 'Pole and bag', color: '#1c1c1c', mult: 1, info: 'A black pole system. Our recommended choice.' },
        { id: 'white', name: 'White', sub: 'Pole and bag', color: '#ffffff', mult: 1, info: 'A white pole system.' },
      ]},
      { key: 'base', title: 'Base', when: c => c.type === 'pole', prefer: () => 'none', items: [
        { id: 'none', name: 'No flag base', sub: 'Pole only', icon: 'inks/none', mult: 1, info: 'No base: for when you already have one.' },
        { id: 'cross', name: 'Cross Foot', sub: 'Hard floors', photo: 'assets/live-opts/flags/base-cross.png', mult: 1.25, info: 'A cross foot for hard floors indoors and on terraces.' },
        { id: 'cross-water', name: 'Cross Foot + Waterbag', sub: 'Extra stable', photo: 'assets/live-opts/flags/base-cross-water.png', mult: 1.35, info: 'A cross foot with a water bag that keeps the flag up in the wind. Our recommended choice.' },
        { id: 'parasol', name: 'Parasol Base + Rotator', sub: 'Heavy base', photo: 'assets/live-opts/flags/base-parasol.png', mult: 1.45, info: 'A heavy parasol base; the rotator lets the flag turn with the wind.' },
        { id: 'spike', name: 'Metal Ground Spike', sub: 'Grass and sand', photo: 'assets/live-opts/flags/base-spike.png', mult: 1.15, info: 'A spike you push into grass or sand: ideal for beaches and fields.' },
        { id: 'screw', name: 'Plastic Screw Base + Rotator', sub: 'Soft ground', photo: 'assets/live-opts/flags/base-screw.png', mult: 1.2, info: 'A screw base for soft ground, with a rotator.' },
        ...[0, 45, 90].map(a => ({ id: `wall-${a}`, name: `Wall suspension ${a}°`, sub: 'On a wall', photo: `assets/live-opts/flags/wall-${a}.png`, mult: 1.2, info: `A wall bracket that holds the flag at ${a}°.` })),
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { type: 'pole', size: 'p-65', material: 'rpet', colour: 'black', base: 'cross-water' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { type: 'pole', size: 'p-40', material: 'rpet', colour: 'black', base: 'none' } },
      { id: 'beach', name: 'Beach', icon: 'star.svg', cfg: { type: 'pole', size: 'p-65', material: 'rpet', colour: 'black', base: 'spike' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour, washable']],
    about: ['Feather flags that catch every eye at events, beaches and shop entrances: washable, weatherproof and durable for outdoor use, with a fiberglass pole system and carry bag.'],
    specs: [['Size', '40 x 290, 65 x 365 or 90 x 450 cm (with pole)'], ['Material', 'Recycled RPET 110 gsm | Mesh 115 gsm'], ['Base', 'Cross foot, water bag, parasol base, ground spike, screw base, wall suspension'], ['Use', 'Indoor and outdoor, washable']],
  },

  // Foamex Signs (helloprint.com/en-ie/foamexsigns): Size → Material → Thickness → Type → Printing → Holes. Standard delivery only.
  'foamex-signs': {
    name: 'Foamex Signs', cartName: 'Foamex signs', noun: 'signs', crumbTop: ['Outdoor', '#outdoor'], crumb: ['Signage & Panels', '#foamex-boards'],
    img: 'assets/products/foamex.webp', priceMult: 1, defaultQty: 1,
    qty: [[1, 25.63], [2, 33.78], [5, 58.23], [10, 98.98], [25, 223.88], [50, 538.96], [100, 908.45]],
    delivery: [STANDARD_ONLY('Wed 2 Dec', 'signs')],
    groups: [
      { key: 'size', title: 'Size', items: [
        ['60x80', '60 x 80 cm', 60, 80, 'Our recommended size: a clear sign for walls, counters and events.'], ['40x60', '40 x 60 cm', 40, 60, ''], ['50x70', '50 x 70 cm', 50, 70, ''], ['60x90', '60 x 90 cm', 60, 90, ''],
        ['70x100', '70 x 100 cm', 70, 100, ''], ['100x150', '100 x 150 cm', 100, 150, 'A big board for facades and fences.'], ['a0', 'A0', 84, 119, ''], ['a1', 'A1', 59, 84, ''], ['a2', 'A2', 42, 59, ''], ['a3', 'A3', 30, 42, 'A small sign for doors and counters.'], ['b1', 'B1', 70, 100, ''],
      ].map(([id, name, w, h, info]) => ({ id, name, sub: /x/.test(id) ? 'Portrait or landscape' : `${w} x ${h} cm`, shape: `width:${Math.round(w * .28)}px;height:${Math.round(h * .28)}px`, mult: Math.round(Math.max(.4, (w * h / 4800) ** .85) * 100) / 100, info: info || 'A rigid board in this size; any custom size is possible on the live site.' })) },
      { key: 'material', title: 'Material', items: [
        { id: 'forex', name: 'Forex', sub: 'PVC foam board', icon: 'panels/forex', mult: 1, info: 'A light, rigid PVC foam board: the classic foamex. Our recommended choice.' },
        { id: 'easyprint', name: 'Easyprint', sub: 'Smooth PVC foam', icon: 'panels/easyprint', mult: .95, info: 'A smooth foam board at a sharp price, for indoor signs.' },
        { id: 'pvc-free', name: 'PVC-free', sub: 'Eco board', icon: 'materials/eco', mult: 1.2, info: 'A rigid board without PVC: the eco-friendlier choice.' },
      ]},
      { key: 'thickness', title: 'Thickness', items: [
        { id: '3', name: '3 mm', sub: 'Light', mult: 1, info: 'Light and easy to hang. Our recommended choice.' },
        { id: '5', name: '5 mm', sub: 'Sturdy', mult: 1.25, info: 'Stiffer, stays flat in bigger sizes.' },
        { id: '10', name: '10 mm', sub: 'Extra rigid', mult: 1.8, info: 'Very rigid: free-standing displays and big boards.' },
      ]},
      { key: 'cut', title: 'Type', items: [
        { id: 'clean', name: 'Clean cutting', sub: 'Straight edges', shape: 'width:30px;height:40px', mult: 1, info: 'Cut straight to size. Our recommended choice.' },
        { id: 'contour', name: 'Contour cut', sub: 'Any shape', icon: 'stickers/contour', mult: 1.4, info: 'Cut along the outline of your design, to any shape.' },
      ]},
      { key: 'printing', title: 'Printing', items: [
        { id: 'single', name: 'Single-sided', sub: 'Front only', mult: 1, info: 'Only the front is printed: for signs on a wall. Our recommended choice.' },
        { id: 'double', name: 'Double-sided', sub: 'Front and back', mult: 1.5, info: 'Both sides printed: for hanging signs and displays.' },
      ]},
      { key: 'holes', title: 'Holes', items: [
        { id: 'none', name: 'No holes', sub: 'Plain', mult: 1, info: 'No holes: for glue, tape or a frame. Our recommended choice.' },
        { id: '2', name: '2 holes', sub: 'Upper corners, 5 mm', mult: 1.04, info: 'Two holes in the upper corners, to hang the sign.' },
        { id: '4', name: '4 holes', sub: 'In the corners, 5 mm', mult: 1.06, info: 'Four holes in the corners, to screw the sign on a wall or fence.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: '60x80', material: 'forex', thickness: '3', cut: 'clean', printing: 'single', holes: 'none' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a2', material: 'easyprint', thickness: '3', cut: 'clean', printing: 'single', holes: 'none' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: '60x80', material: 'pvc-free', thickness: '3', cut: 'clean', printing: 'single', holes: 'none' } },
    ],
    recapExtra: 'Full colour',
    fixed: [['Print', 'Full colour']],
    about: ['Lightweight, rigid foamex boards for signs and displays, indoors and out, possible with holes in the corners. Any custom size is possible on the live site.'],
    specs: [['Material', 'Forex | Easyprint | PVC-free'], ['Thickness', '3, 5 or 10 mm'], ['Cut', 'Straight or contour cut to any shape'], ['Holes', 'None, 2 or 4 (5 mm)']],
  },
};
// More product photos from the live product pages (helloprint.com/en-ie), after the image our category tiles use.
// Files: assets/gallery/<slug>-2.webp … (the live first photo is that same catalog image). Multilayered has no live page.
const LIVE_GALLERY = { 'eco-friendly-business-cards': 7, 'pvc-cards-white': 5, 'deluxe-business-cards': 6, 'business-cards-special-materials': 6, 'standard-flyers': 5, 'eco-flyers': 4, 'special-material-flyers': 5, 'special-finishing-flyers': 5, 'ceramic-mug-330ml': 4, 'basic-cotton-bags': 2, 'premium-tote-bags': 3, 'sols-imperial-tshirt': 7, 'banners': 7, 'roller-banners': 6 };
for (const [slug, n] of Object.entries(LIVE_GALLERY)) PRODUCTS[slug].gallery = [PRODUCTS[slug].img, ...Array.from({ length: n }, (_, i) => `assets/gallery/${slug}-${i + 2}.webp`)];
// Our own photo first (Cornel, 2026-11-04): first in the desktop gallery and the one photo on mobile (`photo`, fills the frame);
// the catalog image stays the image of tiles and cart
PRODUCTS['premium-tote-bags'].photo = 'assets/gallery/premium-tote-bags-street.webp';
PRODUCTS['premium-tote-bags'].gallery.unshift(PRODUCTS['premium-tote-bags'].photo);
// One neutral photo background for every product (Cornel, 2026-10-21: no coloured backgrounds per product)
for (const [slug, p] of Object.entries(PRODUCTS)) { p.slug = slug; p.href = 'product.html?p=' + slug; p.thumb = p.thumb || p.img; p.bg = 'var(--light-grey)'; }

// Base price per quantity (Figma quantity list); each product scales it with priceMult
const BASE_QTY = [[100, 9.99], [250, 14.49], [500, 18.89], [750, 28.49], [1000, 34.99], [1500, 44.99], [2000, 54.99], [3000, 69.99], [4000, 84.99], [5000, 99.99]];
const productQty = p => (p.qty || BASE_QTY).map(([q, price]) => [q, Math.round(price * p.priceMult * 100) / 100]);   // flyers have their own list
// Price of a configuration at a quantity (delivery not included)
function configPrice(p, cfg, qty) {
  // A quantity between two steps (t-shirt size mix): the unit price of the highest step reached
  const steps = productQty(p), exact = steps.find(([q]) => q === qty);
  const step = exact || [...steps].reverse().find(([q]) => q <= qty) || steps[0];
  const base = exact ? exact[1] : step[1] / step[0] * qty;
  const mult = p.groups.reduce((m, g) => g.when && !g.when(cfg) ? m : m * (g.items.find(o => o.id === cfg[g.key])?.mult ?? 1), 1);   // steps that don't apply (live funnel) don't count
  return Math.round(base * mult * 100) / 100;
}
// "500 pcs from" price on the category page: the cheapest preset at 500 pcs
const fromPrice = p => Math.min(...p.presets.map(pr => configPrice(p, pr.cfg, p.defaultQty || 500)));

// Materials on the category page (text from helloprint.com/en-ie/businesscards-printing).
// Each opens the product that offers it, with that material already chosen (product.html?p=…&group=option).
const MATERIALS = [
  { name: 'Silk - Matte', points: ['Most cost-effective option', 'Professional appearance', 'Variety of finishes available'], badge: 'Most Popular', groups: ['everyday'], p: 'classic-business-cards', set: { paper: 'matt' }, tint: '#f1f1f1' },
  { name: 'Offset - Writable', points: ['Economical option', 'Simple look', 'Writable paper'], groups: ['everyday'], p: 'classic-business-cards', set: { paper: 'uncoated' }, tint: '#fbfbf8' },
  { name: 'Recystar Nature - Recycled', points: ['Economical eco alternative', 'Off-white look', '100% recycled materials'], groups: ['eco'], p: 'eco-friendly-business-cards', set: { paper: 'recystar' }, tint: '#e9e2cf' },
  { name: 'Bio Top - Chlorine free', points: ['Chlorine-free', 'Off-white look', 'White printing not possible'], groups: ['eco'], p: 'eco-friendly-business-cards', set: { paper: 'biotop' }, tint: '#f3efe3' },
  { name: 'Kraft - Partially recycled', points: ['Made from recycled pulp', 'Natural look and feel', 'White printing not possible'], groups: ['eco'], p: 'eco-friendly-business-cards', set: { paper: 'kraft' }, tint: '#b58a5c' },
  { name: 'Multilayer - Coloured layer', points: ['Coloured layer', 'Luxurious look and feel', 'Thick paper'], groups: ['luxury', 'durable'], p: 'multilayered-business-cards', set: {}, tint: 'linear-gradient(180deg,#fff 0 42%,#f2711c 42% 58%,#fff 58%)' },
  { name: 'Pearl marble - Luxury', points: ['Captures light beautifully', 'Luxurious appearance', 'White printing not possible'], groups: ['luxury'], p: 'business-cards-special-materials', set: { material: 'pearl' }, tint: 'linear-gradient(135deg,#fdfbf6,#e7e0f2 40%,#d8eef0 70%,#fbf3e4)' },
  { name: 'Metallic - Gold, Silver or White', points: ['Gold, silver or white', 'Chlorine-free', 'White printing not possible'], groups: ['luxury'], p: 'business-cards-special-materials', set: { material: 'gold' }, tint: 'linear-gradient(135deg,#f6e27a,#c9a227 55%,#f3dc8a)' },
  { name: 'White PVC - Glossy or Matte', points: ['Durable material', 'Cost-effective PVC option', 'Creditcard size'], groups: ['durable'], p: 'pvc-cards-white', set: {}, tint: '#ffffff' },
  // No product page for wood cards in the prototype yet: stays a local anchor
  { name: 'Wood - Recycled', points: ['Recycled wood', 'Unique appearance', 'Rounded corners'], groups: ['eco', 'durable'], href: '#businesscardswood', tint: '#c49a6c' },
];
for (const m of MATERIALS) if (m.p) m.href = PRODUCTS[m.p].href + Object.entries(m.set).map(([k, v]) => `&${k}=${v}`).join('');

// Copy of Standard Flyers with the live site's option photos (helloprint.com/en-ie/standardflyers), so the icon version stays as it is.
// Same options, prices and presets; every option gets photo: assets/live-opts/flyers/<group>-<option>.webp
{
  const sf = PRODUCTS['standard-flyers'];
  PRODUCTS['standard-flyers-photos'] = { ...sf, slug: 'standard-flyers-photos', href: 'product.html?p=standard-flyers-photos', copyOf: 'standard-flyers',
    groups: sf.groups.map(g => ({ ...g, items: g.items.map(o => ({ ...o, photo: `assets/live-opts/flyers/${g.key}-${o.id}.webp` })) })) };
}

// Classic Business Cards as on the live site (helloprint.com/en-ie/standardbusinesscards, checked 2026-10-26):
// Size → Material appearance → Paper type (its list depends on the appearance) → Finishing (Matt/Glossy only) → Corners → Printing.
// Steps that don't apply are hidden (group.when), options that don't apply too (item.when). Prices are made up, roughly as live.
// product.html uses it for ?p=classic-business-cards unless the prototype switch Funnel is on Old.
{
  const folded = c => /^folded/.test(c.size);
  const T = { standard: ['Standard', 'Flexible, everyday feel'], firm: ['Firm', 'Holds its shape'], thick: ['Thick', 'Solid, quality feel'], xthick: ['Extra thick', 'Stiff and substantial'] };
  // thick = the step on the thickness scale (0–3): these paper types are about thickness, so they show the thickness line icon
  const coated = (app, gsm, t, mult, info, extra = {}) => ({ id: `${app}-${gsm}`, name: T[t][0], sub: `${gsm} gsm · ${T[t][1]}`, thick: Object.keys(T).indexOf(t), mult, info, when: c => c.appearance === app, ...extra });
  const paper = (app, id, name, sub, mult, info, extra = {}) => ({ id, name, sub, mult, info, when: c => c.appearance === app, ...extra });
  const base = PRODUCTS['classic-business-cards'];
  base.live = { ...base, slug: 'classic-business-cards', live: undefined, liveFunnel: true,
    groups: [
      { ...sizeGroup(['standard', 'portrait', 'folded-portrait', 'folded-landscape', 'squared', 'american']) },
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'matt', name: 'Matt', sub: 'No glare', swatch: 'paper-matt.svg', mult: 1, info: 'Coated paper with a dull, non-reflective finish. Easy to read; our most chosen paper.' },
        { id: 'glossy', name: 'Glossy', sub: 'Shiny', swatch: 'paper-glossy.svg', mult: 1, info: 'Coated paper with a shine. Colours and photos look vivid.' },
        { id: 'eco', name: 'Eco', sub: 'Sustainable', swatch: 'paper-eco.svg', mult: 1, info: 'Recycled and natural papers, made with the environment in mind.' },
        { id: 'uncoated', name: 'Uncoated', sub: 'Writable', swatch: 'paper-uncoated.svg', lines: true, mult: 1, info: 'Untreated paper you can write on with any pen.' },
        { id: 'special', name: 'Special', sub: 'Gold, silver and more', swatch: 'paper-special.svg', mult: 1, info: 'Metallic, pearl and plastic papers that catch the eye.' },
        { id: 'seed', name: 'Seed Paper', sub: 'Plant it', color: '#ebe3d0', mult: 2, info: 'Paper with seeds in it: plant the card and wildflowers grow. Single-sided, no finishing or rounded corners.', when: c => !folded(c) },
      ]},
      { key: 'ptype', title: 'Paper type', when: c => c.appearance !== 'seed',
        specText: 'Matt: 300, 350, 400 or 450 gsm · Glossy: 300, 350 or 400 gsm · Eco: RecyStar Nature, Paperwise Natural, Kraft, Bio Top · Uncoated: Offset 300 or 340 gsm, Sulfate Cardboard · Special: PVC paper, Pearl Marble, Metallic Gold, Silver or White',
        prefer: c => ({ matt: 'matt-400', glossy: 'glossy-350', eco: 'recystar', uncoated: 'offset-300', special: 'gold' })[c.appearance],
        items: [
          coated('matt', 300, 'standard', .9, 'The lightest option, with an everyday feel and the best price.'),
          coated('matt', 350, 'firm', .95, 'Holds its shape in a wallet or card holder.'),
          coated('matt', 400, 'thick', 1, 'Our recommended thickness: noticeably sturdier, a quality feel.'),
          coated('matt', 450, 'xthick', 1.1, 'Stiff and substantial. Makes a lasting first impression.', { when: c => c.appearance === 'matt' && !folded(c) }),
          coated('glossy', 300, 'standard', .9, 'The lightest option, with an everyday feel and the best price.'),
          coated('glossy', 350, 'firm', .95, 'Holds its shape in a wallet or card holder.'),
          coated('glossy', 400, 'thick', 1, 'Noticeably sturdier, a quality feel.'),
          paper('eco', 'recystar', 'RecyStar Nature', '300 gsm · Recycled', 1.1, '100% recycled paper with a natural, slightly grey look.'),
          paper('eco', 'paperwise', 'Paperwise Natural', '295 gsm · From plant waste', 1.15, 'Made from agricultural waste. A warm, natural tone.'),
          paper('eco', 'kraft', 'Kraft', '283 gsm · Brown', 1.1, 'Brown kraft board with visible fibres. Rustic and honest.'),
          paper('eco', 'biotop', 'Bio Top', '300 gsm · Chlorine-free', 1.12, 'Chlorine-free paper with a soft, natural white.'),
          paper('uncoated', 'offset-300', 'Offset', '300 gsm · Writable', .95, 'Uncoated paper you can write on with any pen.'),
          paper('uncoated', 'offset-340', 'Offset', '340 gsm · Writable', 1, 'A thicker uncoated card, still easy to write on.'),
          paper('uncoated', 'cardboard', 'Sulfate Cardboard', '290 gsm · Bright white', 1.05, 'A bright white, firm card with a matt surface.'),
          paper('special', 'pvc', 'PVC paper', '276 gsm · Water-resistant', 2.4, 'Plastic paper: water-resistant and hard to tear.'),
          paper('special', 'pearl', 'Pearl Marble', '290 gsm · Iridescent', 2.3, 'A soft, pearly shine that changes with the light.'),
          paper('special', 'gold', 'Metallic Gold', '300 gsm', 2.4, 'A shimmering gold card. Adds a touch of luxury.'),
          paper('special', 'silver', 'Metallic Silver', '300 gsm', 2.4, 'A cool, shimmering silver card.'),
          paper('special', 'white', 'Metallic White', '300 gsm', 2.3, 'White with a subtle metallic glow.'),
        ]},
      { key: 'finishing', title: 'Finishing', when: c => ['matt', 'glossy'].includes(c.appearance), prefer: () => 'matt-lam', items: [
        { id: 'none', name: 'No finishing', sub: 'As printed', shape: 'width:39px;height:25px', mult: .9, info: 'No extra layer. Fine for light designs.' },
        { id: 'matt-lam', name: 'Matte lamination', sub: 'Both sides', swatch: 'paper-matt.svg', mult: 1, info: 'A non-reflective layer on both sides that protects the print. Our recommended choice.' },
        { id: 'gloss-lam', name: 'Gloss lamination', sub: 'Both sides', swatch: 'paper-glossy.svg', mult: 1, info: 'A glossy layer on both sides that deepens colours.' },
        { id: 'uv', name: 'UV Glossy', sub: 'Both sides', color: 'linear-gradient(135deg,#fff,#dfe6ee 50%,#fff)', mult: 1.05, info: 'A high-gloss varnish for a striking shine.' },
        { id: 'velvet-lam', name: 'Velvet lamination', sub: 'Both sides', color: 'linear-gradient(135deg,#d9d4cc,#bdb6aa)', mult: 1.15, info: 'A soft, suede-like touch for a premium feel.', when: c => !folded(c) },
      ]},
      { ...cornersGroup(), when: c => !folded(c) && c.appearance !== 'seed' },
      { key: 'printing', title: 'Printing', items: [
        { id: 'double', name: 'Double-sided', sub: 'Front and back', img: 'size-folded-landscape.svg', imgSize: 'width:39px;height:31px', mult: 1, info: 'Both sides printed. Room for your logo on one side and your details on the other; our recommended choice.', when: c => c.appearance !== 'seed' },
        { id: 'single', name: 'Single-sided', sub: 'Front only', shape: 'width:39px;height:25px', mult: .9, info: 'Only the front is printed; the back stays blank for notes.', when: c => !folded(c) },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'standard', appearance: 'matt', ptype: 'matt-400', finishing: 'matt-lam', corners: 'straight', printing: 'double' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'standard', appearance: 'matt', ptype: 'matt-300', finishing: 'none', corners: 'straight', printing: 'single' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'standard', appearance: 'eco', ptype: 'recystar', corners: 'straight', printing: 'double' } },
    ],
    fixed: [],
  };
}

// Standard Flyers as on the live site (helloprint.com/en-ie/standardflyers, checked 2026-10-26):
// Size → Material appearance → Paper thickness (its list depends on the appearance) → Printing → Finishing (Glossy/Matte from 250 gsm) → Bundling.
// Same mechanics as Classic Business Cards .live (group.when / item.when, hidden steps; a step with one option is hidden). Prices made up.
{
  const sf = PRODUCTS['standard-flyers'];
  const LVL = { 80: 0, 90: 0, 115: 1, 120: 1, 135: 1, 150: 2, 160: 2, 170: 2, 200: 3, 250: 3, 295: 4, 300: 4, 350: 5, 400: 6 };
  const MULT = { 80: .8, 90: .8, 115: .88, 120: .9, 135: .92, 150: .97, 160: .98, 170: 1, 200: 1.2, 250: 1.25, 295: 1.4, 300: 1.4, 350: 1.55, 400: 1.7 };
  const INFO = { 'Super Budget': 'Thin and light, like a letter. The lowest price for large runs.', Budget: 'Light paper with a little more body. Good for big handouts.',
    Standard: 'Our recommended thickness: sturdy enough to feel like quality.', Premium: 'Card-like paper with a premium feel.', 'Premium Plus': 'Thick and stiff, close to a postcard.',
    Light: 'Thin seed paper, easy to post.', Thick: 'Firm seed paper that feels like a card.' };
  const th = (app, name, gsm) => ({ id: `${app}-${gsm}`, name, sub: `${gsm} gsm`, thick: Math.min(LVL[gsm], 6) * .8, mult: MULT[gsm], info: INFO[name], when: c => c.appearance === app });
  const T = (app, list) => list.map(([n, g]) => th(app, n, g));
  const heavy = c => ['glossy', 'matte'].includes(c.appearance) && +String(c.thickness).split('-').pop() >= 250;
  sf.live = { ...sf, slug: 'standard-flyers', live: undefined, liveFunnel: true,
    groups: [
      sf.groups.find(g => g.key === 'size'),
      { key: 'appearance', title: 'Material appearance', items: [
        { id: 'glossy', name: 'Glossy', sub: 'Shiny, vivid colour', mult: 1, info: 'Coated paper with a shine. Colours and photos look vivid; our recommended choice for flyers.' },
        { id: 'matte', name: 'Matte', sub: 'No glare', mult: 1, info: 'Coated paper without shine. Calm and easy to read.' },
        { id: 'uncoated', name: 'Uncoated', sub: 'Writable', mult: 1.02, info: 'Untreated paper you can write on, like a letter.' },
        { id: 'recycled', name: 'Recycled', sub: '100% recycled', mult: 1.1, info: 'Made from recycled paper, with a natural look.' },
        { id: 'biotop', name: 'Bio Top 3 Natural', sub: 'Chlorine-free', mult: 1.15, info: 'Chlorine-free paper with a soft, natural white.' },
        { id: 'seed', name: 'Seed Paper', sub: 'Plant it', mult: 2.2, info: 'Paper with seeds in it: plant the flyer and wildflowers grow.' },
        { id: 'paperwise', name: 'Paperwise Natural', sub: 'From plant waste', mult: 1.15, info: 'Made from agricultural waste. A warm, natural tone.' },
      ]},
      { key: 'thickness', title: 'Paper thickness', prefer: c => ({ glossy: 'glossy-170', matte: 'matte-170', uncoated: 'uncoated-170', recycled: 'recycled-170', biotop: 'biotop-160', seed: 'seed-80', paperwise: 'paperwise-150' })[c.appearance],
        specText: 'Glossy / Matte: 90, 115, 135, 170, 250, 300, 350 or 400 gsm · Uncoated: 90, 120, 150, 170, 250 or 300 gsm · Recycled: 170 or 300 gsm · Bio Top: 90, 160 or 300 gsm · Seed Paper: 80 or 200 gsm · Paperwise: 90, 150 or 295 gsm',
        items: [
          ...T('glossy', [['Super Budget', 90], ['Budget', 115], ['Budget', 135], ['Standard', 170], ['Premium', 250], ['Premium Plus', 300], ['Premium Plus', 350], ['Premium Plus', 400]]),
          ...T('matte', [['Super Budget', 90], ['Budget', 115], ['Budget', 135], ['Standard', 170], ['Premium', 250], ['Premium Plus', 300], ['Premium Plus', 350], ['Premium Plus', 400]]),
          ...T('uncoated', [['Super Budget', 90], ['Budget', 120], ['Standard', 150], ['Standard', 170], ['Premium', 250], ['Premium Plus', 300]]),
          ...T('recycled', [['Standard', 170], ['Premium Plus', 300]]),
          ...T('biotop', [['Super Budget', 90], ['Standard', 160], ['Premium Plus', 300]]),
          ...T('seed', [['Light', 80], ['Thick', 200]]),
          ...T('paperwise', [['Super Budget', 90], ['Standard', 150], ['Premium Plus', 295]]),
        ]},
      { key: 'printing', title: 'Printing', items: [
        { id: 'double', name: 'Double-sided', sub: 'Front and back', img: 'size-folded-landscape.svg', imgSize: 'width:39px;height:31px', mult: 1, info: 'Both sides printed: more room for your message; our most chosen option.' },
        { id: 'single', name: 'Single-sided', sub: 'Front only', shape: 'width:26px;height:37px', mult: .85, info: 'Only the front is printed. The most affordable choice.' },
      ]},
      { key: 'finishing', title: 'Finishing', when: heavy, prefer: () => 'none', items: [
        { id: 'none', name: 'No finishing', sub: 'As printed', shape: 'width:26px;height:37px', mult: 1, info: 'No extra layer. Our recommended choice for most flyers.' },
        { id: 'matt-2', name: 'Matte lamination', sub: 'Both sides', mult: 1.3, info: 'A non-reflective layer on both sides that protects the print.' },
        { id: 'gloss-2', name: 'Gloss lamination', sub: 'Both sides', mult: 1.3, info: 'A glossy layer on both sides that deepens colours.' },
        { id: 'velvet-2', name: 'Velvet lamination', sub: 'Both sides', mult: 1.45, info: 'A soft, suede-like touch on both sides.' },
        { id: 'uv-2', name: 'UV Glossy', sub: 'Both sides', mult: 1.35, info: 'A high-gloss varnish on both sides for a striking shine.' },
        { id: 'matt-1', name: 'Matte lamination', sub: 'Front only', mult: 1.18, info: 'A non-reflective layer on the front.' },
        { id: 'gloss-1', name: 'Gloss lamination', sub: 'Front only', mult: 1.18, info: 'A glossy layer on the front.' },
        { id: 'velvet-1', name: 'Velvet lamination', sub: 'Front only', mult: 1.28, info: 'A soft, suede-like touch on the front.' },
        { id: 'uv-1', name: 'UV Glossy', sub: 'Front only', mult: 1.22, info: 'A high-gloss varnish on the front.' },
      ]},
      { key: 'bundling', title: 'Bundling', items: [
        { id: 'none', name: 'Not bundled', sub: 'Loose in the box', mult: 1, info: 'Your flyers arrive loose in the box.' },
        { id: '250', name: 'Per 250', sub: 'Bundled with a band', mult: 1.02, info: 'Bundled per 250: easy to hand out in batches.', when: c => !['seed', 'paperwise'].includes(c.appearance) },
        { id: '100', name: 'Per 100', sub: 'Bundled with a band', mult: 1.03, info: 'Bundled per 100.', when: c => !['seed', 'paperwise'].includes(c.appearance) },
        { id: '50', name: 'Per 50', sub: 'Bundled with a band', mult: 1.05, info: 'Bundled per 50.', when: c => !['seed', 'paperwise'].includes(c.appearance) },
        { id: '25', name: 'Per 25', sub: 'Bundled with a band', mult: 1.08, info: 'Bundled per 25: handy for small handouts.', when: c => !['seed', 'paperwise'].includes(c.appearance) },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: 'a5', appearance: 'glossy', thickness: 'glossy-170', printing: 'double', bundling: 'none' } },
      { id: 'budget', name: 'Budget', icon: 'budget.svg', cfg: { size: 'a5', appearance: 'glossy', thickness: 'glossy-135', printing: 'single', bundling: 'none' } },
      { id: 'eco', name: 'Eco', icon: 'eco.svg', cfg: { size: 'a5', appearance: 'recycled', thickness: 'recycled-170', printing: 'double', bundling: 'none' } },
    ],
    fixed: [],
  };
}
