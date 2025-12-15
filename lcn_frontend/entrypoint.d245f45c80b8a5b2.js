
function loadES5() {
  var el = document.createElement('script');
  el.src = '/lcn_static/frontend_es5/entrypoint.a2e8c596d22f3cdb.js';
  document.body.appendChild(el);
}
if (/.*Version\/(?:11|12)(?:\.\d+)*.*Safari\//.test(navigator.userAgent)) {
    loadES5();
} else {
  try {
    new Function("import('/lcn_static/frontend_latest/entrypoint.d245f45c80b8a5b2.js')")();
  } catch (err) {
    loadES5();
  }
}
  