dirNow=$(pwd)
cd dmbs

#main
confMain=config.toml
confMain+=link.toml
confMain+=about.toml
cat $confMain > $dm/config.toml

#nav
confNav=$(ls nav)
cat $confNAv > $dm/config.toml

cd dirNow
