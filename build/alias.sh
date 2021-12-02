# config
alias dmbs1='source $dmbs/init.sh'
alias dmtss1='dmts && sass --watch --style=compressed scss:css'
alias dmtsj1='source $dmtsjp/init.sh'
alias dmbs2='ls $dmtsjp/* | entr -r dmbs1'
alias dmtsj2='ls $dmtsjp/* | entr -r dmtsj1'

# deploy
alias dmb1='
# build
dm
dmbs1
dmtss1
dmtsj1
hugo --minify
'
