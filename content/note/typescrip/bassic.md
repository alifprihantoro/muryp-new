---
title: 'Typescript: Bassic'
slug: typescript:-bassic
date: 2022-06-10T07:30:49+07:00
lastmod: 2022-06-10T07:30:55+07:00
description: 'bassic, class, typescript'
---

## Bassic

### type js :

```javascript
/********** Javascript Types ***********/

let a // undefined
let b = true // boolean
let c = 1 // number
let d = 'hello' // string
let e = 100n // big int (starting ES2020)
let f = Symbol('Sym') // symbol  (starting ES2015)
let g = function () {
  // function
  return null
}
let h = null // null ( special primitive )
let i = {} // Object Literal
let j = [] // array

class Product {
  // class
  //...
}
let k = new Product() // function
```

### typescript types

#### bolean

```typescript
let isDone: boolean = false
let isDone: boolean = true
```

#### Number

```typescript
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
let big: bigint = 100n
```

#### string

```typescript
let color: string = 'blue'
color = 'red'
```

#### array

```typescript
// array
let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]
```

#### tuple

```typescript
// Declare a tuple type
let x: [string, number]
// Initialize it
x = ['hello', 10] // OK
// Initialize it incorrectly
x = [10, 'hello'] // Error

// OK
console.log(x[0].substring(1))

console.log(x[1].substring(1))

x[3] = 'world'

console.log(x[5].toString())
```

#### enum

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green

enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2]

// Displays 'Green'
console.log(colorName)
```

#### unkown

```typescript
let notSure: unknown = 4
notSure = 'maybe a string instead'

// OK, definitely a boolean
notSure = false

// @errors: 2322 2322 2322
declare const maybe: unknown
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe
  // So, it cannot be a string
  const aString: string = maybe
}

if (typeof maybe === 'string') {
  // TypeScript knows that maybe is a string
  const aString: string = maybe
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe
}
```

#### any

```typescript
declare function getValue(key: string): any
// OK, return value of 'getValue' is not checked
const str: string = getValue('myString')

let looselyTyped: any = 4
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists()
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed()

let strictlyTyped: unknown = 4
strictlyTyped.toFixed()

let looselyTyped: any = {}
let d = looselyTyped.a.b.c.d
```

#### void

```typescript
function warnUser(): void {
  console.log('This is my warning message')
}

let unusable: void = undefined
// OK if `--strictNullChecks` is not given
unusable = null

// Not much else we can assign to these variables!
let u: undefined = undefined
let n: null = null
```

#### never

```typescript
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message)
}

// Inferred return type is never
function fail() {
  return error('Something failed')
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

// @errors: 2345
declare function create(o: object | null): void

// OK
create({ prop: 0 })
create(null)
create(undefined) // with `--strictNullChecks` flag enabled, undefined is not a subtype of null

create(42)
create('string')
create(false)
```

#### type assertions

```typescript
let someValue: unknown = 'this is a string'

let strLength: number = (someValue as string).length
// or
let someValue: unknown = 'this is a string'

let strLength: number = (<string>someValue).length
Try
```

#### interface
> mirip templating
```typescript
interface article {
  title: string;
  slug: string;
  author: Author;
  tags?: (number | string)[];
}

interface Author {
  name: string;
  username: string;
}

let data: article[] = [
  {
    title: "judul 1",
    slug: "judul1",
    author: {
      name: "alif",
      username: "alif",
    },
    tags: ["beta", "article", "blog"],
  },
  {
    title: "judul 2",
    slug: "judul2",
    author: {
      name: "muryp",
      username: "muryp",
    },
    tags: [1, "article", "blog"],
  },
  {
    title: "judul 2",
    slug: "judul2",
    author: {
      name: "muryp",
      username: "muryp",
    },
  },
];

let data2: article[];
data2 = [
  {
    title: "judul 1",
    slug: "judul1",
    author: {
      name: "alif",
      username: "alif",
    },
    tags: ["beta", "article", "blog"],
  },
  {
    title: "judul 2",
    slug: "judul2",
    author: {
      name: "muryp",
      username: "muryp",
    },
    tags: [1, "article", "blog"],
  },
  {
    title: "judul 2",
    slug: "judul2",
    author: {
      name: "muryp",
      username: "muryp",
    },
  },
];

console.log(data);
console.log(data2);
```
#### Function
```typescript
// init type func slug
type Data = (slug: string) => void;
// add func get
function getData(title: string, slug: Data) {
  return {
    judul: title,
    link: slug,
  };
}
// func slug
const slug = (slug: string) => console.log(slug);
const tes = getData("tes", slug);
console.log(tes);
tes.link("https://muryp.my.id");
// result :
// { judul: 'tes', link: [Function: slug] }
// hai


type Post = {
    title: string,
    slug: string,
    date: number[],
  comment?: boolean
}

function addPost(
  title: string,
  slug: string,
  date: number[],
  comment?: boolean
): Post {
  return {
    title: title,
    slug: slug,
    date: date,
    ...(comment && { comment }),
  };
}

let Data1 = addPost("hai", "/hai", [10, 6, 2022], false);
let Data2 = addPost("hai kedua", "/hai-kedua", [11, 6, 2022]);

console.log(Data1);
console.log(Data2);

// { title: 'hai', slug: '/hai', date: [ 10, 6, 2022 ] }
// { title: 'hai kedua', slug: '/hai-kedua', date: [ 11, 6, 2022 ] }


function Hello<T>(txt: T): T {
  return txt;
}
console.log(Hello("hai"));
console.log(Hello<string>("haibkedua"));
console.log(Hello<number>(10));
console.log(Hello<boolean>(true));
console.log(Hello<string | number>(2));
console.log(Hello<string | number>("hello terakhir"));

// hai
// haibkedua
// 10
// true
// 2
// hello terakhir


```


