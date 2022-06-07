---
title: 'Catatan bash'
slug: catatan-bash
date: 2022-01-28T21:21:27+07:00
lastmod: 2022-01-28T21:21:27+07:00

tag2:
  - cli

image: ''
description: 'catatan bash, pertanyaan seputar bash'
---

## bash

### pertanyaan

- `jobs`, `kill`, `killall`, `-s` or `-number`, get uid jobs before `(foo=$!)` and `ps` to get list
- change name multi file/extention
  example :

```bash
dr=~/
cd $dr.myconf/
echo "#_________start git" >> $dr.myconf/install.zsh
for sumber_dir in $(find **/*.sh -type f -not -path 'bash/*' ! -path "*/ubuntu*" ! -path "web*" ! -path "*/oh_my_bash/*"); do
  echo "source $dr.myconf/$sumber_dir" >> $dr.myconf/install.zsh
done

echo "#_________start git" >> $dr.myconf/install.zsh
```

- rm line first, last, by number, by string on the line

1. only read

```bash
> sed -i '1d' file
```

1. change

```bash
sed '1d' file > newfile
```

1. show file

```bash
> cat file
linux
unix
fedora
debian
ubuntu
```

2. delete first line

```bash
> sed '1d' file
unix
fedora
debian
ubuntu
```

3. Delete last line or footer line or trailer line

```bash
> sed '$d' file
linux
unix
fedora
debian
```

4. Delete particular line

```bash
> sed '2d' file
linux
fedora
debian
ubuntu
```

4. Delete range of lines

```bash
> sed '2,4d' file
linux
ubuntu
```

5. Delete lines other than the first line or header line

```bash
> sed '1!d' file
linux
```

6. Delete lines other than last line or footer line

```bash
> sed '$!d' file
ubuntu
```

7. Delete lines other than the specified range

```bash
> sed '2,4!d' file
unix
fedora
debian
```

8. Delete first and last line

```bash
> sed '1d;$d' file
unix
fedora
debian
```

9. Delete empty lines or blank lines

```bash
> sed '/^$/d' file
```

10. Delete lines that begin with specified character

```bash
> sed '/^u/d' file
linux
fedora
debian
```

11. Delete lines that end with specified character

```bash
> sed '/x$/d' file
fedora
debian
ubuntu
```
12. Delete lines which are in upper case or capital letters

```bash
> sed '/^[A-Z]*$/d' file
```

13. Delete lines that contain a pattern

```bash
> sed '/debian/d' file
linux
unix
fedora
ubuntu
```

14. Delete lines starting from a pattern till the last line

```bash
> sed '/fedora/,$d' file
linux
unix
```

15. Delete last line only if it contains the pattern

```bash
> sed '${/ubuntu/d;}' file
linux
unix
fedora
debian
```
- alias vs func
  - alias for short code command (not advance) or simple command
    example :
  ```bash
  # single line
  alias mkdir='/bin/mkdir -p'
  # multi line
  alias mkdir='
  echo one
  echo two
  echo three
  '
  ```
  - func for advance
    example :
    ```bash
    gapull () {
      gf $1 $2
    }
    ```
- bash regex
