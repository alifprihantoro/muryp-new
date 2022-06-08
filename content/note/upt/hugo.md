---
title: "Pembuatan Tema Hugo dan Catatan Lainnya"
slug: pembuatan-tema-hugo-dan-catatan-lainnya
date: 2021-09-20T13:49:35+07:00
lastmod: 2021-09-20T14:02:09+07:00
description: ""
---

> ini masih dalam pengerjaan dan masih acak

## Pembuatan Tema Hugo dan Catatan Lainnya

### Bassic
- ```pkg update && pkg upgrade && pkg install hugo``` : install
- `hugo new site <nameSite>` : membuat situs baru
- `hugo new <slug>` : membuat konten
- `hugo new theme <nameTheme>` : membuat tema
- `hugo` : membuat file public tanpa konvert
- `hugo --minify` : membuat file public dengan konvert
- `hugo serve` : membuat server hugo tanpa konvert
- `hugo serve --minify` : membuat server hugo dengan konvert
- `hugo new site <nameSite>` : membuat situs baru
- `hugo new <slug>` : membuat konten
- `hugo new theme <nameTheme>` : membuat tema


### Managging Conten
- Menggunakan Vim/NVim
Untuk Menggunakan VIM sendiri, pastikan kalian sudah familiar dengan perintah yang ada di vim. Lalu kalian install aja hugo helper dan kalian bisa lihat beberapa kode yang saya buat di repo [disini]()
- Menggunakan CMS

### Membuat Tema
- html5
- sass
- partial
- script
- if else
- identifier menus harus beda
- params
- related
- nav
- footer
- disqus
- pwa
- rss/xml
- lazy img
- pages
- uotput
- config
- shortcode
- open close
- json
```json
[{{ range $index, $page := .Site.Pages }}
{{- if ne $page.Type "json" -}}
{{- if and $index (gt $index 0) -}},{{- end }}
{
	"link": "{{ $page.Permalink }}",
	"judul": "{{ htmlEscape $page.Title}}",
	"tags": "{{ range $tindex, $tag := $page.Params.tags }}{{ if $tindex }} >{{ end }}{{ $tag| htmlEscape }}>{{ end }}",
	"description": "{{ htmlEscape .Description}}",
}
{{- end -}}
{{- end -}}]
```
- menus front matter
front matter :
```md
---
menu:
  main:
    identifier : "tabout"
    name : " ini ada di hai"
    pre : "<i class='fa fa-heart'></i>"
    url : "/about/"
    weight : -110
---
```
template :
```html
{{ with .Site.GetPage "/menu.md" }}
{{ range .Site.Menus.main }}
haaaaaa {{ .Name }} 
{{ end }}
{{ end }}
```
- get markdown file
```
{{ with .Site.GetPage "/menu.md" }}{{ .Content | safeHTML }}{{ end }}
```
- render image by assets
```
{{/* $src := (resources.Get (printf "\"/img/%s.png\"" (.Destination | safeURL)).Resize "51x50" | fingerprint).RelPermalink */}}
```
- 

### Upload ke Github

### Upload ke Gitlab

### Upload ke Netlify

