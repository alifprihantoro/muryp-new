---
title: "Get Link, Url management"
slug: slug
date: 2021-12-15T08:03:56+07:00
lastmod: 2021-12-15T08:03:56+07:00
draft: false
show_comments: false

type: post

tags2:
    - js

image: ""
thumbnail : ""

description: ""

---
## get link
```js
const link = (e) => {
  if (e==="/") {
  //addscript(/js/list.js)
  //addscript(/js/list.js)
    // get id
    // template
    // innerhtml blog load more
    // innerhtml note load more
    // te
  }
  // alert(e);
  const nextTitle = "My new page";
  const nextState = { additionalInformation: "Updated the URL with JS" };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, e);

  // This will replace the current entry in the browser's history, without reloading
  window.history.replaceState(nextState, nextTitle, e);
};
```

## listening change url
```js

// samakan kayak klick url
window.addEventListener('popstate', function (event) {
	// The URL changed...
  alert(`ganti link ${window.location.href}`)
});

```
