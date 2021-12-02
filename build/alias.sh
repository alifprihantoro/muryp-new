alias dmb1='
# config
source $dmb/params/config.sh
# build
dm
hugo --minify
'

alias dmtss1='
dmtss1
sass --watch --style=compressed scss:css
'

alias dmtsj1='
ls $dmtsj/params/* | entr -r $dmtsj/params/init.sh
'
