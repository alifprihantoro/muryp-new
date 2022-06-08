---
title: "Link Inspirasi Projek Mendatang"
slug: link-inspirasi-projek-mendatang
date: 2021-12-15T07:56:25+07:00
lastmod: 2021-12-15T07:56:25+07:00
description: ""
---
## link repo
- https://github.com/ianfleon/blognitess
## link artikel
- https://iamsorush.com/posts/table-of-content-blog/

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

- get number text search
```javascript
const fs = require("fs");
let file = fs.readFileSync("read.txt", "utf8");
let arr = file.split(/\r?\n/);
arr.forEach((line, idx)=> {
    if(line.includes("keyword")){
    console.log((idx+1)+':'+ line);
    }
});
```
- markdown link : [](/) or [](:)
- server no dependency
```javascript
var fs = require('fs'),
    http = require('http');
 __dirname = './html/'
http.createServer(function (req, res) {
  url=req.url
  const ektensi = url.split('.');
  console.log(ektensi)
  if (ektensi[1] !== undefined) {
   console.log('ini html') 
  fs.readFile(__dirname +  req.url , function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
  }else{
  fs.readFile(__dirname +  req.url +'index.html' , function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
  }
}).listen(8080);
```
