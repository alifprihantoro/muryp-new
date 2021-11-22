rm content
cp .beta content
hugo --minify --theme=beta
rm deploy/muryp
mv public deploy/
rm content
