alias dmnb1='
# cp script
source $dmnb/params/script.sh
# config
source $dmnb/params/config.sh
# head
rm $dmntp/main/head.html
cp $dmntp/main/.online $dmntp/main/head.html
# build
dmn
hugo --minify
# back offline
rm $dmntp/main/head.html
cp $dmntp/main/.offline $dmntp/main/head.html
'

alias dmntpss='
dmntps
sass --watch --style=compressed scss:css
'

alias dmnsjs='
ls $dmns/js/params/* | entr -r $dmnsj/js.sh
'
