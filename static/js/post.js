// disqus triger
document.getElementById('disqus-triger').onclick = function changeContent() {
let disqus_trigger = 0;
  disqus_trigger++
  if (disqus_trigger==1) {
    const script   = document.createElement("script");
script.type  = "text/javascript";
script.src   = "/js/disqus.js";    // use this for linked script
document.body.appendChild(script);
  }
}

