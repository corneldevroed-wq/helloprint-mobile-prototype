// Upload your artwork (style guide "Upload your artwork", the PDP / order confirmed popup) for one product, from any page:
// openUpload({ name, img, files, extra, onClick, onAdd }). The files show with progress and a picture (images, the pages of a PDF), then "We've got your file";
// "Add to my order" hands them to onAdd([{ name, size, ext, thumb, page }]). Prototype: the files stay in this browser, nothing is sent.
// files: the files already on the product (Change: they are in, no confetti, the button says Update my order); extra(): html at the end of
// "We've got your file" (order confirmed: the Premium Artwork Check while there is still to pay); onClick(e): clicks in the popup (that switch).
// Used by order confirmed and the order page in My account (one flow since 2026-11-17).
const UP_SHEET = `
<input type="file" id="upInput" multiple hidden>
<div class="sheet-layer" id="sheet-upload" aria-hidden="true">
  <div class="sheet-overlay" data-close-sheet></div>
  <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="upTitle">
    <div class="grab" data-grab><span></span></div>
    <div class="sheet-head">
      <h2 id="upTitle">Upload your artwork</h2>
      <button class="close" data-close-sheet aria-label="Close"><img src="assets/pdp/close.svg" alt=""></button>
    </div>
    <div class="sheet-body"><div class="pad" id="upBody"></div></div>
    <div class="sheet-bar">
      <div class="oc-for" id="upFor"></div>
      <button class="btn primary" id="upAdd" disabled>Add to my order</button>
    </div>
  </div>
</div>`;
document.body.insertAdjacentHTML('beforeend', UP_SHEET);
const upEls = { input: document.getElementById('upInput'), body: document.getElementById('upBody'), add: document.getElementById('upAdd'), sheet: document.getElementById('sheet-upload') };
let upJob = null, upArt = [], upWasDone = false;
const upSize = n => n > 1e6 ? (n / 1e6).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1e3)) + ' KB';
const upEsc = t => String(t).replace(/</g, '&lt;');
const upThumb = f => f.progress === 100 && f.thumb ? `<span class="up-thumb"><img src="${f.thumb}" alt=""></span>` : `<span class="up-ico">${f.ext.toUpperCase().slice(0, 4)}</span>`;
const upRow = (f, i) => `<div class="up-file${f.err ? ' err' : ''}">${upThumb(f)}
    <div class="t"><b>${upEsc(f.name)}</b><small>${f.err ? `Didn’t upload: ${upSize(f.size)}, max 200 MB` : [upSize(f.size), f.progress === 100 && 'uploaded ✓'].filter(Boolean).join(' · ')}</small>
      ${f.err || f.progress === 100 ? '' : `<span class="up-bar"><i style="width:${f.progress}%"></i></span>`}</div>
    ${f.err || f.progress === 100 ? `<button class="up-replace" data-up-remove="${i}">Remove</button>` : ''}</div>`;
const UP_TEAM = `<div class="art-team"><span class="faces">${['saskia', 'timo', 'karen'].map(n => `<img src="assets/help/team/${n}.webp" alt="">`).join('')}</span><p><b>Any questions?</b>Our team is ready to help</p></div>`;
// the pictures of a file (1200px): an image as it is, a PDF one per page (max 10)
const upPdfJs = () => window.pdfjsLib ? Promise.resolve() : new Promise((ok, no) => { const sc = document.createElement('script');
  sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'; sc.onload = ok; sc.onerror = no; document.head.appendChild(sc); });
async function upPics(file, ext) {
  try {
    const url = URL.createObjectURL(file), out = [];
    if (ext === 'pdf') {
      await upPdfJs(); pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      const doc = await pdfjsLib.getDocument(url).promise;
      for (let n = 1; n <= Math.min(doc.numPages, 10); n++) {
        const page = await doc.getPage(n), v = page.getViewport({ scale: 1 }), vp = page.getViewport({ scale: 1200 / Math.max(v.width, v.height) });
        const cv = document.createElement('canvas'); cv.width = vp.width; cv.height = vp.height;
        await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
        out.push(cv.toDataURL('image/jpeg', .85));
      }
      return out;
    }
    const img = await new Promise((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = url; });
    const cv = document.createElement('canvas'), ctx = cv.getContext('2d'), k = Math.min(1, 1200 / Math.max(img.width, img.height));
    cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height); ctx.drawImage(img, 0, 0, cv.width, cv.height);
    return [cv.toDataURL('image/jpeg', .85)];
  } catch (e) { return []; }
}
function upFiles(list) {
  [...list].forEach(file => {
    const ext = (file.name.split('.').pop() || '').toLowerCase(), f = { name: file.name, size: file.size, ext, progress: 0, err: file.size > 200e6 };
    upArt.push(f);
    if (f.err) return;
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf'].includes(ext)) upPics(file, ext).then(p => { f.pics = p; f.thumb = p[0]; upRender(); });
    const timer = setInterval(() => { f.progress = Math.min(100, f.progress + 20); upRender(); if (f.progress === 100) clearInterval(timer); }, 180);
  });
  upRender();
}
function upConfetti() {
  const block = upEls.body.querySelector('.art-calm'); if (!block || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = block.getBoundingClientRect(), layer = document.createElement('div'), colours = ['--light-green', '--dark-green', '--orange', '--link'];
  layer.className = 'confetti'; Object.assign(layer.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
  layer.innerHTML = Array.from({ length: 28 }, (_, i) => `<i style="left:${Math.random() * 100}%;background:var(${colours[i % 4]});animation-delay:${Math.random() * .3}s;--x:${Math.random() * 60 - 30}px;--r:${Math.random() * 720 - 360}deg"></i>`).join('');
  document.body.appendChild(layer); setTimeout(() => layer.remove(), 1800);
}
function upRender() {
  if (!upJob) return;
  document.getElementById('upFor').innerHTML = `<span class="img"><img src="${upJob.img}" alt=""></span><span><small>For</small><b>${upEsc(upJob.name)}</b></span>`;
  const busy = upArt.some(f => !f.err && f.progress < 100), done = upArt.length && !busy && !upArt.some(f => f.err);
  upEls.add.disabled = !done;
  upEls.add.textContent = busy ? 'Uploading…' : upJob.files?.length ? 'Update my order' : 'Add to my order';
  if (!upArt.length) {
    upEls.body.innerHTML = `<p class="up-intro">Upload your design for your <b>${upEsc(upJob.name)}</b>: one file or several, PDF works best.</p>
      <div class="art-drop"><img src="assets/desktop/upload-cloud.svg" alt=""><button class="btn outline" data-up-pick>Choose files</button><small>or drag them here · as many as you like</small></div>${UP_TEAM}`;
    upWasDone = false;
    return;
  }
  upEls.body.innerHTML = `<div class="up-files">${upArt.map(upRow).join('')}</div><button class="up-add" data-up-pick>+ Add more files</button>
    ${!done ? UP_TEAM : `<div class="art-calm"><b><img src="assets/pdp/check.svg" alt="">We’ve got your file${upArt.length > 1 ? 's' : ''}</b>
      <span>Add ${upArt.length > 1 ? 'them' : 'it'} to your order and we start checking.</span>
      <div class="up-check"><p class="ok"><img src="assets/pdp/check.svg" alt="">Every file gets our free automatic check</p><p class="ok"><img src="assets/pdp/check.svg" alt="">You’ll see a proof before we print</p></div>${upJob.extra ? upJob.extra() : ''}</div>`}`;
  if (done && !upWasDone) setTimeout(upConfetti);
  upWasDone = !!done;
}
function openUpload(job) {
  upJob = job;
  const had = job.files || [];   // the pages of one file come back as one row
  upArt = [...new Set(had.map(f => f.name))].map(name => { const pages = had.filter(f => f.name === name), { size, ext } = pages[0], pics = pages.map(f => f.thumb).filter(Boolean);
    return { name, size, ext, progress: 100, pics, thumb: pics[0] }; });
  upWasDone = upArt.length > 0;   // no confetti for files that were already in
  upRender(); openSheet('upload');
}
upEls.input.addEventListener('change', () => { upFiles(upEls.input.files); upEls.input.value = ''; });
upEls.sheet.addEventListener('click', e => {
  if (e.target.closest('[data-up-pick]')) upEls.input.click();
  const rm = e.target.closest('[data-up-remove]'); if (rm) { upArt.splice(+rm.dataset.upRemove, 1); upRender(); }
  upJob?.onClick?.(e);
});
upEls.sheet.addEventListener('dragover', e => { e.preventDefault(); upEls.sheet.querySelector('.art-drop')?.classList.add('over'); });
upEls.sheet.addEventListener('dragleave', e => { if (!upEls.sheet.contains(e.relatedTarget)) upEls.sheet.querySelector('.art-drop')?.classList.remove('over'); });
upEls.sheet.addEventListener('drop', e => { e.preventDefault(); upFiles(e.dataTransfer.files); });
upEls.add.addEventListener('click', () => {
  const files = upArt.filter(f => !f.err).flatMap(({ name, size, ext, pics = [] }) => pics.length
    ? pics.map((thumb, k) => ({ name, size, ext, thumb, page: pics.length > 1 ? `page ${k + 1} of ${pics.length}` : '' })) : [{ name, size, ext, thumb: null }]);
  closeSheet(); upJob.onAdd(files);
});
