alias dmnb1='
# cp script
source $dmnb/params/script.sh
# config
source $dmnb/params/config.sh
# build
dmn
hugo --minify
'

alias dmntpss='
dmntps
sass --watch --style=compressed scss:css
'
