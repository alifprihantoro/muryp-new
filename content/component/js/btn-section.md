---
title: "Btn Section"
slug: btn-section
date: 2021-12-15T07:30:06+07:00
lastmod: 2021-12-15T07:30:06+07:00
draft: false
show_comments: false

type: post

tags2:
    - js

image: ""
thumbnail : ""

description: ""

---
## script
```js
// if change
const btnSectionSearch = (e)=>{
  const blog_tags = document.getElementById("blog-tags-list-search")
  const note_tags = document.getElementById("note-tags-list-search")
// console.log(e)
  if (e==="all") {
    blog_tags.style.display = "initial";
    note_tags.style.display = "initial";
  }else if(e==="blog"){
    blog_tags.style.display = "initial";
    note_tags.style.display = "none";
  }else{
    blog_tags.style.display = "none";
    note_tags.style.display = "initial";
  }
}
```
## html
```html
<select id="list-section-search" onChange="btnSectionSearch(this.value)">
  <option value="all">All</option>
  <option value="blog">Blog</option>
  <option value="note">Note</option>
</select>
<select id="list-tags-search">
  <option value="">All:</option>
<optgroup id="blog-tags-list-search" label="Blog :">
  <option value="#">All Blog</option>
{{ range $name, $taxonomy1 := .Site.Taxonomies.tags }}
  <option value="#{{ replace .Page.Title " " "_" | lower  }}">{{ .Page.Title }}</option>
{{end}}
</optgroup>
<optgroup id="note-tags-list-search" label="Note :">
  <option value="##">All Note</option>
{{ range $name, $taxonomy1 := .Site.Taxonomies.tags2 }}
  <option value="##{{ replace .Page.Title " " "_" | lower }}">{{ .Page.Title }}</option>
{{end}}
</optgroup>
</select>
```
