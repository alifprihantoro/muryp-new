---
title: 'Persiapan Vim plug'
slug: persiapan-vim-plug
date: 2022-01-01T09:40:46+07:00
lastmod: 2022-01-01T09:40:46+07:00
description: ''
---

## Persiapan Vim Plug

- [get name file](https://vim.fandom.com/wiki/Get_the_name_of_the_current_file)
-

## ide

- buat file untuk kode (dipisah pisah)
- function ditaruh di plug
- if else hugo :
- get file path
- search content
- bvE
-

## help

- v/foo
- $^0
- 20gg
- :20
- t _\w|\W_ or f use ;
- ctrl+d scroll down
- ctrl+u scroll up
- shift-\` uppercase | lowerchase

## vimplug tailwind

- let dirnow
- let cp="!cp"
- let fileConfigTailwind=Cdg."tailwind.config.js"
- let plugTailwindMuryP=plug_home."nama-plug"
- execute cp fileConfigTailwind plugTailwindMuryP
- cd \`=plug_home."/nvim-conf"\`
- !node app
- cd \`=dirnow\`

## vim dir

- dir hugo project : partial, layout, asset
- next :
- all on bash

## hugo starter markdown

## vimhelp

- help plugin
- help

## regex

- regex count match
  `:%s/some-word//gn`
- regex count match into var
  `:let n=[0] | bufdo %s/pattern\zs/\=map(n,'v:val+1')[1:]/ge`
- regex search
  `/\[.*\]`
- use `gn` to visual
- -

## if else

```vim
if 0
    echom "if"
elseif "nope!"
    echom "elseif"
else
    echom "finally!"
endif
```

## hugo get dir/file

```vim
:echo @%
" def/my.txt
" directory/name of file (relative to the current working directory of /abc)
:echo expand('%:t')
" my.txt
" name of file ('tail')
:echo expand('%:p')
" /abc/def/my.txt
" full path
:echo expand('%:p:h')
" /abc/def
" directory containing file ('head')
:echo expand('%:p:h:t')
" def
" First get the full path with :p (/abc/def/my.txt), then get the head of that with :h (/abc/def), then get the tail of that with :t (def)
:echo expand('%:r')
" def/my
" name of file less one extension ('root')
:echo expand('%:e')
" txt
" name of file's extension ('extension')
```
