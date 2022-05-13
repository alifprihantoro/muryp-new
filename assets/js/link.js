const myId = ()=>{
	// The URL changed...
  const link = window.location.href
  // console.log(link)
  const my_id = link.split("#")[1]
  // console.log(my_id)
  const body =  document.getElementsByTagName("BODY")[0]
  // console.log(body)
if (my_id==="" || my_id==undefined) {
  body.id = "home"
}else{
  body.id = my_id
}
}
myId()
// samakan kayak klick url
window.addEventListener('popstate', function () {
myId()
});
