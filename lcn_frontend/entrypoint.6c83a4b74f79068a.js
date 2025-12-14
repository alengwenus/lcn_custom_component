
function loadES5() {
  var el = document.createElement('script');
  el.src = '/lcn_static/frontend_es5/entrypoint.3b5719c120a41ef8.js';
  document.body.appendChild(el);
}
if (/.*Version\/(?:11|12)(?:\.\d+)*.*Safari\//.test(navigator.userAgent)) {
    loadES5();
} else {
  try {
    new Function("import('/lcn_static/frontend_latest/entrypoint.6c83a4b74f79068a.js')")();
  } catch (err) {
    loadES5();
  }
}
  