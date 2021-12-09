dirNow=$(pwd)
dmtsjp
# var
var=
var+=./var/json.js
var+=./var/checklist.js


#main
jsMain=
jsMain+=
# jsMain=post.js
# jsMain+=disqus.js
cat $jsMain > ../main.js

#post
# jsPost=
# cat $jsPost >> main.js

cd $dirNow
