---
title: "Read get by tag change and write to json file"
slug: read-get-by-tag-change-and-write-to-json-file
date: 2022-01-26T14:10:44+07:00
lastmod: 2022-01-26T14:10:44+07:00

tag2:
    - js
    - nodejs
    - json

image: "/"
description: "Read get by tag change and write to json file"
---
## Read get by tag change and write to json file
### code
```javascript

const fs = require("fs");
var path = require("path");
const { exec } = require('child_process');


// add api
// const mypath = []
function fromDir(startPath, filter) {
  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)) {
    // console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    // console.log(stat)
    if (stat.isDirectory()) {
      // console.log(filename)
      fromDir(filename, filter); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      // console.log('-- found: /',filename)
      // mypath.push(`/${filename}`)
      filename.replace(/(.*)\.html/, function (e, name_data) {
        // read file
        data = fs.readFileSync(e, "utf8", function (err, html) {
          if (err) {
            throw err;
          }
          return html;
        });
        // console.log(data)
        // get body
        data.replace(/\<body.*\>\n([\W\w]+?)\<\/body\>/gim, function (e, a) {
          // create json data
          const content =
            '{"content":"' +
            // replace enter and "
            a.replace(/\n/gim, "").replace(/\"/gim, '\\"') +
            '"}';
          console.log(content)
          fs.writeFileSync(`${name_data}.json`, content);
        });
      });
    }
  }
}
fromDir("public", ".html");
```
