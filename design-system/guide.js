// The guides' sidebar (UI Style Guide and Brand Guidelines): the current topic follows the scroll; a drawer on mobile.
// Folded chapters (Brand Guidelines): the chapter you scroll into opens, the one you leave closes.
const links = [...document.querySelectorAll('.ds-side a:not(.soon)')], secs = [...document.querySelectorAll('.ds-main > section[id]:not([hidden])')];   // a hidden section has no position, so it never counts
let chapter;
const spy = () => { const end = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;   // at the bottom: the last topic
  const cur = end ? secs[secs.length - 1] : secs.filter(s => s.getBoundingClientRect().top < 120).pop() || secs[0];
  links.forEach(a => a.toggleAttribute('aria-current', a.hash === '#' + cur.id));
  const d = links.find(a => a.hash === '#' + cur.id)?.closest('details');
  if (d && d !== chapter) { if (chapter) chapter.open = false; d.open = true; chapter = d; } };
addEventListener('scroll', spy, { passive: true }); spy();
const side = document.getElementById('dsSide');
document.getElementById('dsMenu').addEventListener('click', () => side.classList.toggle('open'));
side.addEventListener('click', e => { if (e.target.closest('a')) side.classList.remove('open'); });
