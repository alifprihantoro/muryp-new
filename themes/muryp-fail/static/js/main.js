if (localStorage.getItem('theme') == 'dark')
  setDarkMode()
function setDarkMode() {
  let isDark = document.body.classList.toggle("dark-mode")
  if (isDark) {
    localStorage.setItem('theme', 'dark')} else {
    localStorage.removeItem('theme')}
  document.getElementById('darkBtn').innerHTML
};


!function() {
  let e = document; e.addEventListener("dblclick", t=> {
    let n = function(e, t) {
      if (!(t = t && t.toUpperCase())||!e)return null; do {
        if (e.nodeName === t)return e
      }while (e = e.parentNode); return null
    }(t.target, "PRE"); if (n) {
      let t = new Range; t.setStart(n, 0),
      t.setEnd(n, 1),
      e.getSelection().removeAllRanges(),
      e.getSelection().addRange(t)}})}();