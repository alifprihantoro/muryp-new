// get link
const myId = () => {
  // The URL changed...
  let link = window.location.href
  // console.log(link)
  let id = link.split('#')[1]
  // console.log(id)
  document.querySelector(`#${id}`).classList.toggle('hidden')
}
const closeWindow = () => {
  myId()
  window.open('/#', '_self')
}
// samakan kayak klick url
window.addEventListener('popstate', function () {
  myId()
})

myId()
