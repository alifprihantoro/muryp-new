---
title: "Search"
slug: search
date: 2021-12-15T07:51:41+07:00
lastmod: 2021-12-15T07:51:41+07:00
draft: false
show_comments: false

type: post

tags2:
    - html
    - css
    - js

image: ""
thumbnail : ""

description: ""

---
## script
```js
// filter
const showList = (data) => {
  results.innerHTML = "";
  console.log(data)
  const filter_judul = data
    .filter((item) => {
      return item.tags.toLowerCase().includes(getTags());
    })
    .filter((item) => {
      return item.judul.toLowerCase().includes(search_term);
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<a class="${e.tags}" href="${e.link}">${e.judul}</a>`;
      results.appendChild(li);
    });
};

// get tags
const getTags = ()=>{ return document.getElementById("list-tags-search").value }
// console.log()etTags())

// section
const getSection = () => {
  // get section
  const url_list = document.getElementById("list-section-search");
  const slug = $chekList(url_list);
  const data1 = $get_json("/blog/index.json").then((data) => {
    return data;
  });
  const data2 = $get_json("/note/index.json").then((data) => {
    return data;
  });
  if (slug === "note") {
    // console.log(data2);
    // olah data
    data2.then((e) => {
      // console.log(e);
      // const tags = "";
      showList(e);
    });
  } else if (slug === "blog") {
    // console.log(data1);
    data1.then((e) => {
      // console.log(e);
      // const tags = "";
      // showList(tags, e);
      showList(e);
    });
  } else {
    // console.log("keduannya");
    const printData = async function printData() {
      const a = await data1;
      const b = await data2;
      const ab = [...a, ...b];
      // console.log(ab);
      // const tags = "";
      showList(ab);
    };
    printData();
  }
};

search.addEventListener("input", (event) => {
  const pencarian = event.target.value;
  const pencarian_lenght = pencarian.length;
  // console.log(pencarian_lenght)
  // showList();
  if (pencarian_lenght <= 2) {
    // console.log("tidak ada")
    results.classList.add("hasil-hilang");
  } else {
    //ada
    // console.log("ada")
    search_term = pencarian.toLowerCase();
    //get section
    getSection();
  }
  if (pencarian_lenght == 3) {
    // console.log("ini tiga");
    results.classList.remove("hasil-hilang");
  }
});
```
## html
```html
<div class="search-baru">
  <input
    autocomplete="off"
    type="search"
    id="search"
    placeholder="Search now!"
  />
  <button onclick="btn_result()" >Search</button>
  <!-- hasil -->
  <ul class="" id="results"></ul>
</div>
```

## SCSS
```
@use "../../var" as v;
// search
.search-baru ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.hasil-hilang {
  display: none !important;
}

// search
input#search,
input#search::placeholder {
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}
input#search {
  background-color: v.$bgl1;
  width: 90%;
  padding: 15px;
  align-items: center;
}

#checked-list input[type="checkbox"] {
  opacity: 100;
}
```
