
function loadES5() {
  var el = document.createElement('script');
  el.src = '/lcn_static/frontend_es5/entrypoint-9xD187NX.js';
  document.body.appendChild(el);
}
if (/.*Version\/(?:11|12)(?:\.\d+)*.*Safari\//.test(navigator.userAgent)) {
    loadES5();
} else {
  try {
    new Function("import('/lcn_static/frontend_latest/entrypoint-6lqG534V.js')")();
  } catch (err) {
    loadES5();
  }
}
  