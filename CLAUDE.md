# HelloPrint redesign prototype — read this first

A clickable HTML prototype of the HelloPrint redesign (mobile + desktop), built with Cornel de Vroed
(Creative/UX lead, Helloprint). It is used to test ideas, share them with the team (Niels, Derk, …) and
hand over to development. Live for testers via GitHub Pages:
https://corneldevroed-wq.github.io/helloprint-mobile-prototype/ (private repo `corneldevroed-wq/helloprint-mobile-prototype`).

Before building anything, also read:
- `docs/design-principles.md` — how Cornel thinks about design (the "why" behind every choice)
- `docs/decisions.md` — what was decided, rejected and why (newest on top)
- `docs/components.md` — what exists, where it lives, which prototype switches there are
- `docs/backlog.md` — parked ideas and open points
- `design-system.html` — the UI Style Guide: every token and component with its rule, live from styles.css

## How Cornel works (non-negotiable)

- **Push only when Cornel says "push" / "git push".** Never push on your own initiative, also not "to make it live".
  Commit + push together, attribution line as instructed by the harness.
- **Propose / sketch first for anything bigger.** "Eerst schetsen, niet bouwen": make a separate HTML sketch file
  (not linked from the prototype, e.g. `delivery-sketch.html`) with options A/B/C side by side, give a recommendation
  ("my pick"), then build what he picks.
- **Keep it reversible.** New variants go behind a prototype switch (left edge) so he can compare and go back.
  When he chooses, remove the losing variants (or hide them, if he says "hide, don't remove").
  "Hide" means CSS/`hidden`, never delete the code.
- **Step by step.** Small changes, verify, report. He often sends several quick follow-ups; handle each.
- **Language:** he writes Dutch or English; answer in the language he used.
- **Honest UX opinion is welcome.** He asks "wat denk je?" — give a clear recommendation with the reason, not a survey.
- He dislikes "kermis" (loud, busy UI): labels, colours, lines only when they add meaning.

## Hard rules for the prototype

- **Links stay local.** Never link to helloprint.com; unknown targets become `#slug` anchors or local pages.
  Content and images may be taken from the live site (en-ie is the market we build for, en-gb as extra source).
- **No live-site cart/checkout actions** without asking. Decline non-essential cookies on live pages.
- **Prototype data only:** login keeps name + email (never the password); card data is never stored.
- **Ireland**: prices in EUR, Irish VAT 23% (`VAT_RATE` in app.js).
- **Naming:** "shipping address" (never delivery address), "billing address" (never invoice address);
  "Delivery" is the delivery option (Saver / Standard / Express). Delivery is shown as "Estimated <day> — latest <date>".
- **8px grid** for spacing (8/16/24/32…). Gaps between config steps 32px on desktop.
- **Verify every change in the browser** at 390px (mobile) and 1512px (desktop, `html.desk` from 1024px)
  before reporting. Use measurements (getBoundingClientRect) when screenshots aren't possible, and say so.
- **Reuse** existing components and styles; mobile and desktop share content and wording 1:1.
- **Keep HTML and CSS dead simple** (Cornel, 2026-10-29, "very important"). Before writing a new rule, look for one that
  already does it and add your selector to it (e.g. the card border/hover rules, `.desk .plp` layout, `.pill.active` for a
  dark green pill) instead of copying it. One rule per thing: no duplicate selectors, no repeated sizes per block, one body
  text rule. Remove dead code and unused icons/fields when a choice is final (hidden variants stay only when Cornel says
  "hide"). After a bigger round, do a simplify pass and check before/after with measurements that nothing moved.
- **Use the tokens, never raw values** (`:root` in styles.css): colours (`--dark-green`, `--light-green`, `--orange`, greys,
  `--line`, `--outline`, `--link`, `--error`, `--selected`, `--control`), corners (`--r-s` 4 · `--r-m` 8 · `--r-l` 10 · `--r-xl` 16 ·
  `--r-pill`), type sizes (`--t-10` … `--t-48`), line heights (`--lh-12` 18 · `--lh-14` 22 · `--lh-16` 22 · `--lh-20` 24 ·
  `--lh-tight` 1.2). Labels: `badgeHtml()` (orange commercial, `.eco` light green, `.neutral` grey information).
- **The UI Style Guide is a living doc** (`design-system.html`, Cornel, 2026-10-30). When you add a component, change one, or change a
  token or rule, update the style guide in the same change: its row (live example with the real classes + the rule), the markup copied
  1:1 from the page that renders it. A choice that makes a "Check" label obsolete removes that label. New tokens go in the
  Foundations sections. Verify the style guide at 390 and 1512 like any page.

## Tech in 60 seconds

- Static HTML/CSS/JS, no build step. Serve with `python3 -m http.server 8765` → http://localhost:8765
- `app.js`: shared shells (mobile header + USP ticker, desktop header/footer `SHELL_HEADER_DESK`), menu, search,
  VAT (`setVat` fires `hp-vat`), cart, sheets, toasts, home best sellers (`products`), `deskReviews()`.
- `products.js`: all product data (`PRODUCTS[slug]`: groups/options/presets/prices/specs, `.live` funnels).
- `product.html?p=<slug>`: the PDP (mobile flows A–J, desktop always J = options on the page).
- `styles.css`: everything. Desktop rules start with `.desk`. Page-specific test pages may have inline `<style>`.
- Desktop opt-in: `<body data-desktop>` → `html.desk` at ≥1024px (reload when crossing).
- **Cache busting:** every page links `styles.css?v=…`, `app.js?v=…`, `products.js?v=…`. After changing CSS/JS,
  bump the version in all `*.html` with one sed (e.g. `sed -i '' 's/v=20261029e/v=20261029f/g' *.html`).
  Images have no version → tell Cornel to hard refresh (Cmd+Shift+R) when an image changed.
- Prototype switches write their value into the URL (`?desk=a&photos=a…`) and localStorage, so a copied link
  opens exactly that version. See `docs/components.md` for the list.
- GitHub Pages sometimes queues a deploy for a long time; check with
  `gh api repos/corneldevroed-wq/helloprint-mobile-prototype/pages/builds` before assuming the push failed.

## Sources

- Figma "HelloPrint – Redesign Center" (file `xedVazT67lXrPKQnYgIMc1`): mobile frames page `14790:520`
  (home `15599:4120`), desktop PDP `15927:9040`, desktop home `15848:4159`. The Figma MCP can screenshot nodes;
  `get_metadata` on whole pages is too big — ask Cornel for the node or an export when you need a clean asset.
- Live: https://www.helloprint.com/en-ie (content, option names, prices structure), en-gb for extra promos.
- Design system repo + Figma→repo sync is a separate project (see memory "design-system-sync").

## Working in parallel

One session per topic (PDP, homepage, checkout, icons…). When several sessions run at the same time, each works in
its own git worktree/branch; `styles.css`, `app.js` and the cache version are shared hot spots, so merge carefully
and bump the cache version once after merging. Write new decisions into `docs/decisions.md` when Cornel says so
(or when a choice is clearly final), so the next session knows.
