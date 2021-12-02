dirNow=$(pwd)
rm $dm/config.toml
dmbs
#main
confMain=config.toml
confMain+=' links.toml'
confMain+=' about.toml'
# echo $(cat $confMain) > $dm/config.toml
cat $confMain > $dm/config.toml

#nav
cd $dmbs/nav
# echo $(cat $confNav) >> $dm/config.toml
cat * >> $dm/config.toml

cd $dirNow
