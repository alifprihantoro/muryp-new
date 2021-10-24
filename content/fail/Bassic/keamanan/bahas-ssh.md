---
authors:
- MuryP
date: "2021-01-29T14:01:11Z"
description: membahas ssh dasar
draft: false
keywords: membahas ssh dasar
show_comments: true
slug: bahas-ssh
tags:
- Security
- Bassic
title: Membahas Mengenai SSH dan Contoh Penggunaannya
type: pages
---
 

Hello world!
Disini saya tidak akan membahas terlalu dalam mengenai ssh. Saya ahanya akan memberikan gambaran bagi kalian yang belum sama sekali tahu apa itu ssh.
# Membahas Mengenai SSH dan Contoh Penggunaannya

## Penjelasan

Secara singkat padat dan jelas. SSH itu adalah kunci yang biasa digunakan di server, untuk me-remote jarak jauh. 

Ketika kita membuat **SSH** key kita akan mendapat dua buah file, yaitu publick key dan privat key. Privat key biasanya ditandai dengan akhiran **.pub** sedangkan publick key **tidak**. 

Ibarat pintu, **privat key** adalah kunci sedangkan **publick key** adalah lubang kunci. Keduanya harus cocok satu sama lain. Dan seperti kunci pada umumnya privat key tidak boleh kita berikan kepada siapapun. Jika sampai itu terjadi orang yang memiliki privat key bisa saja membobol server anda.

Oh ya, soal keamanannya sendiri. SSH memiliki cara kerja yang unik dimana server dan client akan bertukar key. Apakah keduanya cocok atau tidak. Dan saat bertukar tersebut, jaringan kita harus dipastikan aman, jika tidak **SSH** tidak akan bekerja atau bisa dibilang akan memutus jaringan karena tidak aman. Berbeda dengan **enkripsi**, SSH tidak bisa di **denkryp** dan SSH sendiri memiliki cara unik untuk mengenerate key. 

## Penggunaan SSH 

Vontoh penggunaan ssh yang sering saya gunakan ialah saat mengunggah atau push repo di git dan gitlab. Agar tidak selalu memasukkan terus username dan pasword. Dan untuk jaga-jaga, saya mengganti ssh secara berkala. Untuk cara penggunaannya silahkan klick [disini](menghubungkan-hugo-dengan-git). Penggunaan ssh ini sangat membantu saya, karena dengn ssh saya bisa menghemat waktu yang lumayan. Terlebih lagi saya menggunakan hp untuk coding.

## kesimpulannya 

Jadi kesimpulannya, ssh itu bisa dibilang sangat aman untuk berinteraksi dengan server. Meskipun begitu kita tetap harus waspada. Kita tak tahu apa yang akan terjadi nantinya. Karena sebaik software pasti akan ada celahnya. 

Dan saran saja, untuk ssh sebaiknya kita harus menggantinya berkala dan terus meng update. Dan ssh satu denga lainnya jangan sama. Ditambah lagi penggunaan komputer atau hp harus tidaklah jorok. Jika bisa komputer atau hp yang berisi ssh, dipisahkan. Atau jika hanya punya satu saja, jangan sembarang mengunjungi situs mencurigakan. 

Selain ssh, saya nantinya kemungkinan akan membahas sedikit mengenai keamanan web dan cara lebih aman berinternet. 

## Pendapat Anda

Apakah kamu sudah mencoba menggunakan ssh? Jika ya, digunakan untuk apa? Apakah menurutmu ssh itu aman? Apa yang menyebabkan kalian menggunakan ssh? apakah tutorial diatas ribet atau membantu?

Ikuti terus perkembangan blog ini dengan follow akun media social saya @alifmuryp (IG/FB/Twitter). Dan terimakasih telah mengunjungi blog sederhana saya. Jika ada saran dan kritiknya atau pertanyaan silahkan tulis di kolom komentar dibawah. 