---
title: "Watch if press any keyboard"
slug: custom slug
date: cpLasmod
lastmod: update

tag2:
    - js
    - nodejs

image: "img-url"
description: "description"
---
## code
```javascript
// process.exit()

console.log('Press any key to exit');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data',function(){
console.log('youre going exit')
process.exit()
// process.exit.bind(process, 0)
} );
```

