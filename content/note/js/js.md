---
title: "Catatan Java Script"
slug: catatan-java-script
date: 2021-11-30T13:41:16+07:00 
lastmod: 2021-11-30T13:41:16+07:00

type: post

tags2 :
    - Java Script

image: ""
thumbnail : ""

description: ""

---
## Catatan Javascript
- add script
- get json
- event klick
- live search
```js

const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

// default count
let klikCount = 0;
  // when search bar klick
search.addEventListener("click", () => {
  // add +1
  klikCount++;
  // when klick <= 1 do this else nothing
  if (klikCount = 1) {
let url = '/index.json';
fetch(url)
.then(res => res.json())
  .then(data => {
const showList = () => {
  results.innerHTML = "";
  data
    .filter((item) => {
      return (
        item.judul.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${e.url}">${e.judul}</a>`;
      results.appendChild(li);
    });
};

search.addEventListener("input", (event) => {
  const pencarian = event.target.value;
  search_term = pencarian.toLowerCase();
  showList();
  if (pencarian === "") {
    // rm list
    results.classList.add("hasil-hilang");
  } else {
    //add list
    results.classList.remove("hasil-hilang");
  }
});
  })
.catch(err => { throw err });
  }
});
```
- sort !=
```js
if (gewaesser_name1.toLowerCase().indexOf("stream") === -1 && gewaesser_name2.toLowerCase().indexOf("stream") === -1) {
    var a = "..."
}
```

