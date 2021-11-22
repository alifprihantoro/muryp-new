---
authors:
- MuryP
date: "2021-01-19T03:37:52Z"
description: Disini saya akan menjelaskan bagaiamana cara saya menghapus beberapa
  bariis
draft: false
image: img/none.min.png
keywords: cara hapus ptext pada baris tertentu dengan shell
show_comments: true
slug: manipulasi-text-menggunakan-shell
tags:
- termux
- shell
title: Manipulasi Text Menggunakan Shell
type: pages
---
 

disini saya akan menjelaskan bagaiamnaa cara mengatasi saat kita mengimport content dari blogger namun masih menggunakan html.

```
sed -i '2s/^/ authors=["muryp"] \n/' *.md
for file in *.md; do
  echo '{{</* /html */>}}' >> "$file"
done
```

Ket :
- 1s : barii 
