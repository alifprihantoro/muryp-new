alias dmb1='
# cp script
source $dmb/params/script.sh
# config
source $dmb/params/config.sh
# head
rm $dmtp/main/head.html
cp $dmtp/main/.online $dmntp/main/head.html
# build
dm
hugo --minify
# back offline
rm $dmtp/main/head.html
cp $dmtp/main/.offline $dmntp/main/head.html
'

alias dmtss1='
dmtss1
sass --watch --style=compressed scss:css
'

alias dmtsj1='
ls $dmtsj/params/* | entr -r $dmnsj/js.sh
'
