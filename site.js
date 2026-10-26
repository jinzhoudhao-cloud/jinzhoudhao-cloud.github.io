'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const links = [...document.querySelectorAll('nav a')];
function highlight() { const hash = location.hash || '#home'; links.forEach(link => { if (link.getAttribute('href') === hash) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }
window.addEventListener('hashchange', highlight); highlight();
