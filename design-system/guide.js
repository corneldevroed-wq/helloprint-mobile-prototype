// The guides' sidebar (UI Style Guide and Brand Guidelines): the current topic follows the scroll; a drawer on mobile.
const links = [...document.querySelectorAll('.ds-side a:not(.soon)')], secs = [...document.querySelectorAll('.ds-sec:not([hidden])')];   // a hidden section has no position, so it never counts
const spy = () => { const end = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;   // at the bottom: the last topic
  const cur = end ? secs[secs.length - 1] : secs.filter(s => s.getBoundingClientRect().top < 120).pop() || secs[0];
  links.forEach(a => a.toggleAttribute('aria-current', a.hash === '#' + cur.id)); };
addEventListener('scroll', spy, { passive: true }); spy();
const side = document.getElementById('dsSide');
document.getElementById('dsMenu').addEventListener('click', () => side.classList.toggle('open'));
side.addEventListener('click', e => { if (e.target.closest('a')) side.classList.remove('open'); });
// A folded chapter opens when the page opens on one of its topics (#hash)
document.querySelector(`.ds-side a[href="${location.hash}"]`)?.closest('details')?.setAttribute('open', '');
