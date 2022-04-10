let disqus_count = 0
const disqusAdd =()=>{
  disqus_count++
  if (disqus_count==1) {
  const dsq = document.createElement("script");
  dsq.type = "text/javascript";
  dsq.async = true;

  dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js";
  (
    document.getElementsByTagName("head")[0] ||
    document.getElementsByTagName("body")[0]
  ).appendChild(dsq);
}}
