// togle
const togleWindow = (id)=>{
  // console.log(id)
  document.querySelector(`#${id}`).classList.toggle('hidden');
}
// get link
const myId = ()=>{
	// The URL changed...
  const link = window.location.href
  // console.log(link)
  const my_id = link.split("#")[1]
  // console.log(my_id)
  togleWindow(my_id)
}
// samakan kayak klick url
window.addEventListener('popstate', function () {
myId()
});

myId()
