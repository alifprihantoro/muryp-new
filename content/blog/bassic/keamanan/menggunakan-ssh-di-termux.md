---
authors:
- MuryP
date: "2021-01-16T02:06:04Z"
description: Bagaimana cara kita bisa memasang ssh melalui termux? Dan manfaatnya
  apa?
draft: false
keywords: Bagaimana cara kita bisa memasang ssh melalui termux? Dan manfaatnya apa?
show_comments: true
slug: menggunakan-ssh-di-termux
tags:
- Security
- Bassic
- Termux
title: Menggunakan SSH Di Termux
type: pages
---
 
1. Buat folder **.ssh** jika tidak ada, lalu masuk dan buat key
```
$ mkdir .ssh
$ cd ~/.ssh/
$ ssh-keygen -t rsa -C "yourmail@domain.com" -b 4096
```

exam :
```
ssh-keygen -t rsa -C "alifmuryp@gmail.com-b 409696
Generating public/private rsa key pair.
Enter file in which to save the key (/data/data/com.termux/files/home/.ssh/id_rsa): github
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in github
Your public key has been saved in github.pub
The key fingerprint is:
SHA256:Sr1U/dm1jDiuxixtsyE+PebMECXQyTuuWmrjhYtIscI alifmuryp@gmail.com
The key's randomart image is:
+---[RSA 4096]----+
|     .o .        |
|      .+   .     |
|       .... .   .|
|       +o.  ..ooo|
| .    o.S  o .oo.|
|. o .. +... .    |
|.E . ooo*. .     |
|+ .o=..o=@o      |
|..o=o  .B*+      |
+----[SHA256]-----+
```

## tambah ssh key
```
ssh-add ~/.ssh/id_rsa 
```

jika error dengan pesan :
```
ssh-add ~/.ssh/github
Could not open a connection to your authentication agent.
```
gunakan :
```
$ eval "$(ssh-agent -s)"
Agent pid 59566
```
## lalu tambah lagi

```
$ ssh-add ~/.ssh/id_rsa
Identity added: /data/data/com.termux/files/home/.ssh/your_id (yourmail@domain.com)
```
## copy publick key ke github/gitlab 
1. copy code dengan cara ``` cat your_id.pub ```
2. copy kode tersebut di github/gitlab, pada menu setting ada menu ssh 
3. tambah ssh 
4. pastekan disitu
5. kembali ke comand line

## Lalu cek apakah sudah terhubung
```
ssh -T git@gitlab.com 
```

> jika ada yang belum paham atau ada kesalahan silanhkan kunjungi refrensi dibawah.

source :
- mytrashcode.com/open-connection-authentication-agent
- petanikode.com/gitlab-ssh/
