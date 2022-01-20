---
title: "Menampilkan name file"
slug: menampilkan-name-file
date: 2022-01-11T18:51:34+07:00
lastmod: 2022-01-11T18:51:34+07:00
draft: false
show_comments: false

type: post

tags2:
    - js
    - node
    - fs

image: ""
thumbnail : ""

description: "menampilkan nama file, push array"

---
## cara menampilkan file by extention
> beberapa kode belum saya pahami betul, mungkin bisa lebih praktis lagi
```javascript
var path = require('path'), fs=require('fs');

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
            // console.log('-- found: /',filename)
// fs.writeFileSync('./test.txt', filename+"\n");
          mypath.push(`/${filename}`)
        };
    };
};
fromDir('.no','.sh');
// console.log(mypath)
mypath
    .filter((item) => {
      return item.toLowerCase().includes("dida");
    })
  .forEach(e =>{
    console.log(e)
  })
```
