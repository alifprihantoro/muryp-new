---
title: 'Javascript: Get var from func with destructuring'
slug: get-var-from-func-with-destructuring
date: 2022-06-06T14:57:21+07:00
lastmod: 2022-06-09T12:18:12+07:00
description: 'get var from func with destructuring, get var from func more than one, Javascript'
---

## Get more than one var from func

### function

```javascript
const tes = () => {
  const var1 = 'halo hai'
  const var2 = ['apel', 'jeruk']
  const var3 = {
    nama: 'alif',
    username: 'muryp',
    learn: ['js', 'html', 'css'],
    data1: [
      {
        nama: 'none',
        kelas: '1',
      },
    ],
    data2: {
      nama: 'new',
      kelas: '2',
    },
  }
  const Helo = (obj) => {
    console.log(obj)
  }
  return {
    var1: var1,
    var2: var2,
    var3: var3,
    Helo: Helo,
  }
}
```

### get from func

```javascript
const data = tes()
console.log(data)
const batas = '========================='
console.log(batas)
console.log(data.var1)
console.log(batas)
console.log(data.var2)
console.log(batas)
console.log(data.var3)
console.log(batas)
data.Helo('ini function')
```

#### expect

```txt
{
  var1: 'halo hai',
  var2: [ 'apel', 'jeruk' ],
  var3: {
    nama: 'alif',
    username: 'muryp',
    learn: [ 'js', 'html', 'css' ],
    data1: [ [Object] ],
    data2: { nama: 'new', kelas: '2' }
  },
  Helo: [Function: Helo]
}
=========================
halo hai
=========================
[ 'apel', 'jeruk' ]
=========================
{
  nama: 'alif',
  username: 'muryp',
  learn: [ 'js', 'html', 'css' ],
  data1: [ { nama: 'none', kelas: '1' } ],
  data2: { nama: 'new', kelas: '2' }
}
=========================
ini function
```

### get from func and init specific var

> var tes on top

```javascript
const {
  var3: {
    learn,
    data1: [{ nama, kelas }],
    data2,
  },
} = tes()
console.log(learn)
console.log(nama)
console.log(kelas)
console.log(data2)
```

#### expect

```txt
[ 'js', 'html', 'css' ]
none
1
{ nama: 'new', kelas: '2' }
```

### func get var and init default if empety

```javascript
const data = ({
  name = 'unknown',
  content: { data1, data2 } = {
    data1: 0,
    data2: ['none'],
  },
}) => {
  console.log(name, data1, data2)
}

const info1 = {
  name: 'anak',
  content: {
    data1: 1,
    data2: ['bola'],
  },
}
data(info1)

const info2 = {
  name: 'siapa',
  content: {
    data1: 4,
    data2: ['bola', 'renang', 'video'],
  },
}
data(info2)

const info3 = {}
data(info3)
```

#### expect

```txt
anak 1 [ 'bola' ]
siapa 4 [ 'bola', 'renang', 'video' ]
unknown 0 [ 'none' ]
```

### get from array to specific

```javascript
const data = ['html', 'css', 'js']
const [sa, si, su] = data
console.log(sa)
console.log(si)
console.log(su)
```

#### expect

```txt
html
css
js
```

### replace var

```javascript
let data = 'ini data'
let content = 'ini content'

;[content, data] = [data, content]

console.log(data, content)
```

#### expect

```txt
ini content ini data
```

### get sisa

> harus diakhir

```javascript
const data = [
  'content',
  'title',
  'description',
  'slug',
  'date',
  'upt',
  'comment',
]
const [data1, data2, ...etc] = data
console.log(data1, data2, etc)
```

#### expect

```txt
content title [ 'description', 'slug', 'date', 'upt', 'comment' ]
```

### loop

```javascript
const data = [
  {
    nama: 'alif',
    username: 'muryp',
  },
  {
    nama: 'alif-',
    username: 'prihantoro',
  },
  {
    nama: 'alif_',
    username: 'kw',
  },
]
for (const dataku of data) {
  console.log(dataku)
  console.log(dataku.nama)
  console.log(dataku.username)
}
```

#### expect

```txt
{ nama: 'alif', username: 'muryp' }
alif
muryp
{ nama: 'alif-', username: 'prihantoro' }
alif-
prihantoro
{ nama: 'alif_', username: 'kw' }
alif_
kw
```
