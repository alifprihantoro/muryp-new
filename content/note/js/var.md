---
title: "Daftar variable JS"
slug: daftar-variable-js
date: 2021-12-15T08:08:50+07:00
lastmod: 2021-12-15T08:08:50+07:00
draft: false
show_comments: false

type: post

tags2:
    - js

image: ""
thumbnail : ""

description: ""

---
## checklist
```javascript
const $chekList = (sel)=> {
  const hasil = sel.options[sel.selectedIndex].value;
  return hasil;
}
// penggunaan :
// const list_section = ()=>{
//   const url_list = document.getElementById("list-section-search");
//   const hasil_url = $chekList(url_list);
//   return hasil_url
// }
// console.log(list_section())
```
## get json
```javascript
//get json
const $get_json=function(url){
  const get_json = fetch(url)
    .then((res) => res.json())
  return get_json
}
// how use it :
// const url = "/index.json"
// $get_json(url)
//  .then((data)=>{
//  console.log(data)
//  })
```

