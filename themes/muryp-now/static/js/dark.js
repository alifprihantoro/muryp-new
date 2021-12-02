
  if (localStorage.getItem('theme') == 'dark')
  setDarkMode()
function setDarkMode() {
  let isDark = document.body.classList.toggle("dark-mode")
  if (isDark) {
    localStorage.setItem('theme', 'dark')} else {
    localStorage.removeItem('theme')}
  document.getElementById('btn-dark').innerHTML
}
