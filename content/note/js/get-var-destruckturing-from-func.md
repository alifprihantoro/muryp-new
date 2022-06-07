---
title: "Javascript: Get var from func with destructuring"
slug: get-var-from-func-with-destructuring
date: 2022-06-06T14:57:21+07:00
lastmod: 2022-06-06T14:57:26+07:00
description: "get var from func with destructuring, get var from func more than one, Javascript"
---
## Get more than one var from func
```javascript
const tes =()=>{
  const var1 = 'halo hai'
  const var2 = ['apel','jeruk']
  const var3 = {
    nama : 'alif',
    username : 'muryp'
  }
  return {
    var1 : var1,
    var2 : var2,
    var3 : var3
  }
}
console.log(tes().var1)
console.log(tes().var2)
console.log(tes().var3)
```
