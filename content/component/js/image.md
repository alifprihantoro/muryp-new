---
title: "minimize image on folder and subfolder with convert"
slug: minimize-image-on-folder-and-subfolder-with-convert
date: 2022-01-29T17:28:53+07:00
lastmod: 2022-01-29T17:28:53+07:00

tag2:
    - nodejs

image: ""
description: "minimize, image, subfolder, folder"
---
## code
```javascript
var path = require('path')
fs=require('fs');
const { exec } = require('child_process');

const mypath = []
function fromDir(startPath,filter){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
      // console.log(stat)
        if (stat.isDirectory()){
          // console.log(filename)
            fromDir(filename,filter); //recurse
        }
        else if (filename.indexOf(filter)>=0) {
exec(`convert ${filename} -resize 100x100 -quality 50 ${filename.replace('.png', '.min.png')}`)
            console.log(filename)
          console.log(filename.replace('.png', '.min.png'))
// fs.writeFileSync('./test.txt', filename+"\n");
          mypath.push(`/${filename}`)
        };
    };
};
fromDir('../assets/','.png');
// console.log(mypath)
```
