---
title: "Link Inspirasi Projek Mendatang"
slug: link-inspirasi-projek-mendatang
date: 2021-12-15T07:56:25+07:00
lastmod: 2021-12-15T07:56:25+07:00
draft: false
show_comments: false

type: post

tags2:
    - link

image: ""
thumbnail : ""

description: ""

---
## link repo
- https://github.com/ianfleon/blognitess
## link artikel

## npm
- markdownit/hugo
- sass
- uglyfy.js
- node-watch@0.7.2
- express js
- bash :
 - merger js
- 

## step
- dev :
  - parse content
  - copy content
- watch + server:
 - code (masih bisa diperbaiki)
```javascript
var watch = require('node-watch');
 
"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 5005;
// https://expressjs.com/en/4x/api.html#express.static

let options = {
  dotfiles: "ignore", //allow, deny, ignore
  etag: true,
  extensions: ["htm", "html"],
  index: false, //to disable directory indexing
  maxAge: "7d",
  redirect: false,
  setHeaders: function(res, path, stat) {
    //add this header to all static responses
    res.set("x-timestamp", Date.now());
  }
};

app.use(express.static("tes"));
//you can use https://favicon.io/favicon-generator/ to create the favicon.ico
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});
watch('./tes', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
console.log(`eksekusi di dalam ${name}`)

});
 ```
- read and write
```javascript

var fs = require("fs");

const $write = (data,file)=>{
fs.writeFile(file, data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
}
fs.readFile("temp.txt", function(err, buf) {
  // console.log(buf.toString());
  const data =buf.toString()
  $write(data,'tes.txt')
});
// console.log(`ini diluar ${testing()}`)

```

