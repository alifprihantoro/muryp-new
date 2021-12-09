# config
alias dmbs1='source $dmbs/init.sh'
alias dmtss1='sass --style=compressed $dmts/scss:$dmts/css'
alias dmtsj1='source $dmtsjp/init.sh'
# watch
alias dmbs2='ls $dmtsjp/* | entr -r dmbs1'
alias dmtss2='sass --watch --style=compressed $dmts/scss:$dmts/css'
alias dmtsj2='ls $dmtsjp/* | entr -r dmtsj1'

# deploy
alias dmb1='
# build
dm
dmbs1
dmtss1
# dmtsj1
hugo --minify
'
