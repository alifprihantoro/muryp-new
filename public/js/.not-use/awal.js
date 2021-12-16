// create js script
let disqus_count = 0
const disqusTriger= function() {
disqus_count++
  if (disqus_count==1) {
  const tesjsid = document.getelementbyid("footer");
  const s = document.createElement('script');
  s.setattribute("id", "ini-script");
  s.type = 'text/javascript';
  s.src = link_js

  tesjsid.appendchild(s);
  }
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
