// Business card types (Figma category page "Card types"); content from helloprint.com/en-gb product pages.
// Each product has its own option groups, presets and price level; product.html renders any of them (?p=slug).

const SIZES = {
  standard: { id: 'standard', name: 'Standard', sub: '85 x 55 mm', shape: 'width:39px;height:25px', mult: 1, info: 'The standard business-card size, also known as the European format. Fits almost every wallet and card holder.' },
  portrait: { id: 'portrait', name: 'Portrait', sub: '55 x 85 mm', shape: 'width:25px;height:39px', mult: 1, info: 'Same dimensions as 85 x 55 mm, but upright for a striking, vertical design.' },
  'folded-portrait': { id: 'folded-portrait', name: 'Folded Portrait', sub: '110 x 85 mm', img: 'size-folded-portrait.svg', imgSize: 'width:25px;height:45px', mult: 1.6, info: 'Folds to 55 x 85 mm, with four printable panels when opened. Far more room for information than a single card.' },
  'folded-landscape': { id: 'folded-landscape', name: 'Folded Landscape', sub: '170 x 55 mm', img: 'size-folded-landscape.svg', imgSize: 'width:39px;height:31px', mult: 1.6, info: 'Folds to 85 x 55 mm, with four printable panels when opened. Works as a mini-leaflet with extra information.' },
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
  { id: 'saver', name: 'Saver', day: '29', dayName: 'Tue 29 Sep', month: 'September 29', extra: 0, info: 'Best value: included in the price. Your flyers arrive on Tue 29 Sep if your files are approved in time.' },
  { id: 'standard', name: 'Standard', day: '25', dayName: 'Fri 25 Sep', month: 'September 25', extra: 43, info: 'Four days sooner, on Fri 25 Sep.' },
  { id: 'express', name: 'Express', day: '24', dayName: 'Thu 24 Sep', month: 'September 24', extra: 79, info: 'Our fastest option: on Thu 24 Sep, printed with priority.' },
];

// One delivery option (products the live site ships with Standard only)
const STANDARD_ONLY = (dayName, noun, lead = '') => {
  const [, day, mon] = dayName.split(' ');
  const month = { Sep: 'September', Oct: 'October' }[mon];
  return { id: 'standard', name: 'Standard', day, dayName, month: `${month} ${day}`, extra: 0, info: `Included in the price${lead ? ` (${lead})` : ''}. Your ${noun} arrive on ${dayName} if your files are approved in time.` };
};
// Textile colours (live names), shown as colour chips
const TEXTILE = {
  'ecru': ['Ecru', '#efe6d2'], 'natural': ['Natural', '#efe6d2'], 'white': ['White', '#ffffff'], 'black': ['Black', '#1c1c1c'], 'deep-black': ['Deep Black', '#141414'],
  'navy': ['Blue Navy', '#1f2a44'], 'french-navy': ['French Navy', '#1d2540'], 'dark-green': ['Green Dark', '#1f4d36'], 'bottle-green': ['Bottle Green', '#1d4a35'],
  'red': ['Red', '#c8202f'], 'yellow': ['Yellow', '#f4c81f'], 'royal': ['Royal Blue', '#2346a8'], 'grey': ['Grey', '#9a9a9a'], 'grey-melange': ['Grey Melange', '#b5b5b5'],
  'orange': ['Orange', '#ee7a22'], 'pink': ['Pink', '#f2a7c3'], 'sky': ['Sky Blue', '#8fc3ea'], 'sand': ['Sand', '#d8c3a0'], 'burgundy': ['Burgundy', '#6e1f2e'], 'gold': ['Gold', '#f0b323'],
};
const TEXTILE_COLOURS = ids => ids.map((id, i) => ({ id, name: TEXTILE[id][0], sub: '', color: TEXTILE[id][1], mult: 1, info: `Your design on a ${TEXTILE[id][0].toLowerCase()} base.` }));

const PRODUCTS = {
  'classic-business-cards': {
    name: 'Classic Business Cards', cartName: 'Classic business cards', badge: 'Most Popular',
    gallery: ['assets/products/bc-1.png', 'assets/products/bc-2.jpg', 'assets/products/bc-3.jpg', 'assets/products/bc-4.jpg', 'assets/products/bc-5.jpg'],   // Figma 15927:9209
    img: 'assets/pdp/classic.png', thumb: 'assets/category/t-classic.png', bg: 'rgba(224,252,180,.5)', priceMult: 1,
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
    img: 'assets/category/t-eco.png', bg: 'rgba(223,185,144,.3)', priceMult: 1.12,
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
    img: 'assets/category/t-pvc.png', bg: 'rgba(48,89,100,.15)', priceMult: 3.1,
    groups: [
      { key: 'finish', title: 'Finish', items: [
        { id: 'glossy', name: 'Glossy white', sub: '760 μ PVC', swatch: 'paper-glossy.svg', mult: 1, info: 'A shiny, white plastic card as sturdy as a credit card. Colours look bright and crisp.' },
        { id: 'matte', name: 'Matte white', sub: '760 μ PVC', swatch: 'paper-matt.svg', mult: 1, info: 'The same sturdy plastic card with a calm, non-reflective surface. No fingerprints or glare.' },
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
    img: 'assets/category/t-deluxe.png', bg: 'rgba(28,28,28,.1)', priceMult: 2.35,
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
    img: 'assets/category/t-special.png', bg: 'rgba(221,181,77,.2)', priceMult: 1.85,
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
    img: 'assets/category/t-multilayer.png', bg: 'rgba(229,111,36,.2)', priceMult: 1.6,
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
    img: 'assets/flyers/t-classic.webp', bg: 'rgba(96,111,115,.1)', priceMult: 1, defaultQty: 1000,
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
    img: 'assets/flyers/t-eco.webp', bg: 'rgba(223,185,144,.3)', priceMult: 1, defaultQty: 1000,
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
    img: 'assets/flyers/t-special-material.webp', bg: 'rgba(221,181,77,.2)', priceMult: 1, defaultQty: 1000,
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
    img: 'assets/flyers/t-special-finishing.webp', bg: 'rgba(28,28,28,.1)', priceMult: 1, defaultQty: 500,
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
    name: '330 ml Full Colour Ceramic Mug', cartName: '330 ml ceramic mugs', noun: 'mugs', crumbTop: ['Gifts', '#corporate-gifts'], crumb: ['Mugs', '#personalised-mugs'],
    img: 'assets/products/mug.webp', bg: 'rgba(96,111,115,.1)', priceMult: 1, defaultQty: 100,
    qty: [[1, 17.77], [5, 36.01], [10, 61.43], [30, 147.36], [50, 217.90], [100, 412.32], [250, 896.18], [500, 1541.81], [1000, 2879.40], [2000, 4807.11]],
    delivery: [STANDARD_ONLY('Tue 6 Oct', 'mugs')],
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
    name: 'Basic Cotton Bags', cartName: 'Basic cotton bags', noun: 'bags', crumbTop: ['Bags', '#promotional-bags'], crumb: ['Tote Bags', '#printing-cottonbags'],
    img: 'assets/products/cotton-bag.webp', bg: 'rgba(223,185,144,.3)', priceMult: 1, defaultQty: 100,
    qty: [[100, 181.99], [150, 238.32], [200, 294.66], [250, 350.99], [500, 650.99], [1000, 1128.99], [2500, 2488.99], [5000, 4506.99]],
    delivery: [STANDARD_ONLY('Mon 12 Oct', 'bags', '11–15 working days')],
    groups: [
      { key: 'colour', title: 'Colour', items: TEXTILE_COLOURS(['ecru', 'white', 'black', 'navy', 'dark-green', 'red', 'yellow']) },
      { key: 'area', title: 'Print area', items: [
        { id: 'single', name: 'Single-sided', sub: 'Front only', shape: 'width:30px;height:32px', mult: 1, info: 'Your design on the front.' },
        { id: 'double', name: 'Double-sided', sub: 'Same design', shape: 'width:30px;height:32px', mult: 1.45, info: 'The same design on the front and the back.' },
      ]},
      { key: 'inks', title: 'Colours in design', items: [
        { id: '1', name: '1 colour', sub: 'Screen print', mult: 1, info: 'One ink colour. Ideal for a logo; the most affordable choice.' },
        { id: '2', name: '2 colours', sub: 'Screen print', mult: 1.18, info: 'Two ink colours.' },
        { id: '3', name: '3 colours', sub: 'Screen print', mult: 1.34, info: 'Three ink colours.' },
        { id: '4', name: '4 colours', sub: 'Screen print', mult: 1.5, info: 'Four ink colours.' },
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
    name: 'Premium Tote Bags', cartName: 'Premium tote bags', noun: 'tote bags', crumbTop: ['Bags', '#promotional-bags'], crumb: ['Tote Bags', '#printing-cottonbags'],
    img: 'assets/products/premium-tote.webp', bg: 'rgba(241,228,195,.5)', priceMult: 1, defaultQty: 100,
    qty: [[1, 29.99], [10, 89.99], [25, 164.99], [50, 274.99], [100, 477.99], [250, 1224.99]],   // 10–50 ~
    delivery: FLYER_DELIVERY.map((d, i) => ({ ...d, extra: [0, 31, 48][i], info: d.info.replace('flyers', 'bags') })),
    groups: [
      { key: 'colour', title: 'Colour', items: TEXTILE_COLOURS(['natural', 'black', 'white', 'royal', 'grey', 'navy', 'red', 'orange', 'yellow', 'pink']) },
      { key: 'area', title: 'Print area', items: [
        { id: '300-double', name: '300 x 215 mm', sub: 'Double sided', shape: 'width:36px;height:26px', mult: 1, info: 'A landscape print on the front and the back.' },
        { id: '300-single', name: '300 x 215 mm', sub: 'Single sided', shape: 'width:36px;height:26px', mult: .7, info: 'A landscape print on the front.' },
        { id: '280-double', name: '280 x 310 mm', sub: 'Double sided', shape: 'width:30px;height:33px', mult: 1.08, info: 'A large print on the front and the back.' },
        { id: '280-single', name: '280 x 310 mm', sub: 'Single sided', shape: 'width:30px;height:33px', mult: .75, info: 'A large print on the front.' },
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
    name: 'Sol’s Imperial T-shirt', cartName: 'Sol’s Imperial T-shirts', noun: 't-shirts', crumbTop: ['Clothing', '#clothing-printing'], crumb: ['T-Shirts', '#tshirt-printing'], badge: 'Best Seller',
    img: 'assets/products/tshirt.webp', bg: 'rgba(96,111,115,.1)', priceMult: 1, defaultQty: 10,
    // Size mix instead of a quantity list: the total is the quantity (live sizes S–XXL)
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], defaultSizes: { S: 2, M: 4, L: 3, XL: 1, XXL: 0 },
    qty: [[5, 99.99], [10, 164.83], [25, 329.99], [50, 549.99], [100, 899.99], [250, 1849.99], [500, 3249.99]],   // all but 10 ~
    delivery: [STANDARD_ONLY('Tue 6 Oct', 't-shirts')],
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
    img: 'assets/products/banner.webp', bg: 'rgba(2,105,186,.1)', priceMult: 1, defaultQty: 1,
    qty: [[1, 33.36], [2, 61.99], [3, 89.99], [5, 144.99], [10, 279.99], [25, 669.99]],   // 2+ ~
    delivery: FLYER_DELIVERY.map((d, i) => ({ ...d, extra: [0, 58.47, 62.47][i], info: d.info.replace('flyers', 'banners') })),
    groups: [
      { key: 'size', title: 'Size', items: [
        { id: '150x100', name: '150 x 100 cm', sub: 'Landscape', shape: 'width:42px;height:28px', mult: 1, info: 'Our most chosen banner size. On the live site any size up to 20 m wide is possible.' },
        { id: '200x100', name: '200 x 100 cm', sub: 'Landscape', shape: 'width:42px;height:21px', mult: 1.3, info: 'A wider banner for fences and facades.' },
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
        { id: 'trimmed', name: 'Trimmed', sub: 'No rings', shape: 'width:42px;height:28px', mult: .85, info: 'Cut to size, without rings or hems.' },
        { id: 'tunnel-top', name: 'Tunnel top & bottom', sub: '5 cm', shape: 'width:42px;height:28px', mult: 1.1, info: 'A 5 cm tunnel for a pole along the top and bottom.' },
        { id: 'tunnel-sides', name: 'Tunnel both sides', sub: '5 cm', shape: 'width:42px;height:28px', mult: 1.1, info: 'A 5 cm tunnel for a pole along both sides.' },
      ]},
      { key: 'bands', title: 'Elastic bands', items: [
        { id: 'without', name: 'Without', sub: 'Bands', mult: 1, info: 'No elastic bands included.' },
        { id: 'with', name: 'Including', sub: 'Elastic bands', mult: 1.08, info: 'Elastic bands to hang your banner straight away.' },
      ]},
    ],
    presets: [
      { id: 'recommended', name: 'Recommended', icon: 'star.svg', cfg: { size: '150x100', material: 'premium', finishing: 'rings-30', bands: 'without' } },
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
    img: 'assets/products/roller-banner.webp', bg: 'rgba(96,111,115,.1)', priceMult: 1, defaultQty: 1,
    qty: [[1, 38.99], [2, 62.99], [3, 86.99], [5, 132.99], [10, 257.99], [20, 501.99], [50, 1247.99]],
    delivery: FLYER_DELIVERY.filter(d => d.id !== 'express').map((d, i) => ({ ...d, extra: [0, 47][i], info: d.info.replace('flyers', 'roller banners') })),
    groups: [
      { key: 'size', title: 'Size', items: [
        { id: 's', name: 'Small', sub: '85 x 200 cm', shape: 'width:17px;height:40px', mult: 1, info: 'Our most chosen roller banner size. Fits in any car.' },
        { id: 'xs', name: 'Extra Small', sub: '80 x 200 cm', shape: 'width:16px;height:40px', mult: .95, info: 'The narrowest roller banner, for tight spaces.' },
        { id: 'm', name: 'Medium', sub: '100 x 200 cm', shape: 'width:20px;height:40px', mult: 1.25, info: 'A little wider, for more visibility.' },
        { id: 'l', name: 'Large', sub: '120 x 200 cm', shape: 'width:24px;height:40px', mult: 1.55, info: 'The widest standard roller banner.' },
      ]},
      { key: 'stand', title: 'Stand', items: [
        { id: 'silver-budget', name: 'Silver budget stand', sub: 'Basic base', color: 'linear-gradient(135deg,#f4f4f4,#a9adb3 55%,#e6e8ea)', mult: 1, info: 'A light aluminium stand with a free carry bag. Our recommended choice.' },
        { id: 'black-budget', name: 'Black budget stand', sub: 'Basic base', color: '#1c1c1c', mult: 1.05, info: 'The same stand in black.' },
        { id: 'silver-premium', name: 'Silver premium stand', sub: 'Premium base', color: 'linear-gradient(135deg,#fff,#c7cbd0 55%,#f2f3f5)', mult: 1.6, info: 'A heavier, more stable base that lasts for years of events.' },
        { id: 'cardboard', name: 'Cardboard stand', sub: 'Eco-friendly', color: '#b58a5c', mult: 1.4, info: 'A stand made from cardboard: a sustainable, eye-catching alternative.' },
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
};
// More product photos from the live product pages (helloprint.com/en-ie), after the image our category tiles use.
// Files: assets/gallery/<slug>-2.webp … (the live first photo is that same catalog image). Multilayered has no live page.
const LIVE_GALLERY = { 'eco-friendly-business-cards': 7, 'pvc-cards-white': 5, 'deluxe-business-cards': 6, 'business-cards-special-materials': 6, 'standard-flyers': 5, 'eco-flyers': 4, 'special-material-flyers': 5, 'special-finishing-flyers': 5, 'ceramic-mug-330ml': 4, 'basic-cotton-bags': 2, 'premium-tote-bags': 3, 'sols-imperial-tshirt': 7, 'banners': 7, 'roller-banners': 6 };
for (const [slug, n] of Object.entries(LIVE_GALLERY)) PRODUCTS[slug].gallery = [PRODUCTS[slug].img, ...Array.from({ length: n }, (_, i) => `assets/gallery/${slug}-${i + 2}.webp`)];
for (const [slug, p] of Object.entries(PRODUCTS)) { p.slug = slug; p.href = 'product.html?p=' + slug; p.thumb = p.thumb || p.img; }

// Base price per quantity (Figma quantity list); each product scales it with priceMult
const BASE_QTY = [[100, 9.99], [250, 14.49], [500, 18.89], [750, 28.49], [1000, 34.99], [1500, 44.99], [2000, 54.99], [3000, 69.99], [4000, 84.99], [5000, 99.99]];
const productQty = p => (p.qty || BASE_QTY).map(([q, price]) => [q, Math.round(price * p.priceMult * 100) / 100]);   // flyers have their own list
// Price of a configuration at a quantity (delivery not included)
function configPrice(p, cfg, qty) {
  // A quantity between two steps (t-shirt size mix): the unit price of the highest step reached
  const steps = productQty(p), exact = steps.find(([q]) => q === qty);
  const step = exact || [...steps].reverse().find(([q]) => q <= qty) || steps[0];
  const base = exact ? exact[1] : step[1] / step[0] * qty;
  const mult = p.groups.reduce((m, g) => m * (g.items.find(o => o.id === cfg[g.key])?.mult ?? 1), 1);
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
