# HelloPrint mobile prototype

Clickable HTML prototype of the HelloPrint mobile redesign, built from the Figma file
"HelloPrint – Redesign Center" (mobile frames). Work in progress.

## Flow

Home → Business cards (category) → product page (6 business card types) → Cart → Details & shipping → Payment

Also included: drill-down menu, search, Excl/Incl VAT switch, customise sheet and
design-choice sheet on the product page, file-check and secured-delivery popups in the cart.

## Run it

Open the folder with any static web server, for example:

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765 (best viewed at phone width, ~390 px).

## Notes

- Everything is local: links that don't have a screen yet are anchors (`#slug`), nothing goes to helloprint.com.
- The cart and the VAT choice are kept in the browser's localStorage.
- Payment is a prototype: card details are only format-checked and never stored or sent. Use test card 4242 4242 4242 4242.

## Files

- `index.html`, `business-cards.html`, `product.html`, `cart.html`, `details.html`, `payment.html`: the screens
- `product.html?p=<slug>` shows any business card type; the types, options, prices and texts live in `products.js`
- `classic-business-cards.html`: old address, forwards to the classic product page
- `app.js`: shared header, menu, search, VAT, cart, bottom sheets and toasts
- `styles.css`: all styles
- `assets/`: images and icons exported from Figma
