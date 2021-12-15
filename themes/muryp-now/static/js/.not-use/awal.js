// create js script
const tesjs= function(link_js) {
  const tesjsid = document.getelementbyid("footer");
  const s = document.createElement('script');
  s.setattribute("id", "ini-script");
  s.type = 'text/javascript';
  s.src = link_js

  tesjsid.appendchild(s);
}

// if search klick
let searchKlick=0
function btn_result(){  
// console.log("ini di klick")
  searchKlick++
  if (searchKlick===1) {
tesJs("/js/search.js")
    console.log("hello")
}}
// btn_result()
