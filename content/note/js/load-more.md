---
title: "Load More"
slug: load-more
date: 2021-12-15T07:46:54+07:00
lastmod: 2021-12-15T07:46:54+07:00
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
// get id 
const results = document.getElementById("list-post");
const loadMore = document.getElementById("load-more");
// get slug
// get tags
// sort by tags
// template
// munculkan

let countPost = 5;
// catch json
let url = "/blog/index.json";
function fetchListPost() {
  fetch(url)
    .then((res) => res.json())
    .then((dataJSON) => {
      // pagenation
      const data = dataJSON.slice(0, countPost);
      // result
      results.innerHTML = "";
      data.forEach((e) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="myread">
	      <a href="${e.link}">
      <div class="content">
        <div class="date">
									<span class="day">${e.date}</span>
							<span class="rest">${e.month}</span>
								</div>
        <div class="readMore">
        ${e.judul}
        </div>
     </div>
            </a>
    </div>
`
        results.appendChild(div);
      });
      //end fetch
    });
} //end func

fetchListPost();
// load more
//triger
function triggerLoad() {
  countPost += 5;
  fetchListPost();
}
//end triger
```
### html
```html
<div id="list">
  <h2 class="head blog">My Blog</h2>
  <div id="list-post" class="myread"></div>
  <div class="thisBtn">
    <div class="wrapper">
      <a onclick="triggerLoad()"><span>See More!</span></a>
    </div>
  </div>
</div>
```
### scss
```scss

// pembungkus
.content {
  display: flex;
  border-radius: 5px;
  box-shadow: v.$sd;
  margin: 25px auto !important;
  padding: 15px;
  width: 80%;
}

// .myread {
//   display: grid;
//   width: 100%;
//   grid-template-columns: auto;
//   text-align: left;
// }

// tanggal
.myread .date {
  margin-right: 30px;
  width: 64px;
  text-align: center;
}

.myread .date .day {
  font-weight: 700;
  line-height: 0.45em;
  font-size: 3em;
  display: block;
  margin: 20px auto;
}

// hover
.myread a {
  &:hover {
    transform: translate(10px, -10px);
    color: #333;
  }
  color: v.$bg;
}

```
