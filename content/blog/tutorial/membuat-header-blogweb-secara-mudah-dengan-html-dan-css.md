---
author:
  name: MuryP
  uri: https://www.blogger.com/profile/14798613158789333825
blogimport: true
date: '2020-11-28T04:07:00Z'
tags:
  - CSS
  - Web Design
  - Header
  - HTML
  - Front End
title: Membuat Header Blog/Web secara mudah dengan HTML dan CSS
updated: '2020-11-28T04:11:31Z'
---

# Membuat Header Blog/Web secara mudah dengan HTML dan CSS

Hello world!

Kali ini saya akan membagikan **HTML** dan **CSS** sederhana. Namun kita bisa memanfaatkannya untuk web/blog kita nantinya.

## CSS
```css
body {
  padding: 0;
  margin: 0;
}
.myheader {
  text-align: center;
  margin: auto;
  background: #ff1494e9;
  font-weight: bold;
  font-size: 1.5em;
  top: 50%;
  padding: 20px;
  font-family: 'Nerko One', cursive;
}
.myheader a {
  text-decoration: none;
  color: #fff;
}

```

### Keterangan :

- body hanya digunakan untuk mereset CSS(jika template sudah tersedia tak perlu ditambahkan)
- Class myheader bisa kalian ganti Background color dan size sesuai kebutuhan kalian.
- Font : saya disini menggunakan font Nerko One, dan kalian busa ubah sesuai kebutuhan

## HTML

```html
<header class="myheader"><a href="https://murypstudio.my.id/">Muryp</a></header>
````

### Keterangan :

- Silahkan ganti link dan nama sesuai kebutuhan kalian

## Font

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />

<link
  href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap"
  rel="stylesheet"
/>
```

### Keterangan :

- Untuk font sendiri kalian bisa cari di google font atau situs lainnya.

## Full Code

```html
<!DOCTYPE html>

<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />

    <title>Header</title>

    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link
      href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap"
      rel="stylesheet"
    />

    <style type="text/css" media="all">
      body {
        padding: 0;

        margin: 0;
      }

      .myheader {
        text-align: center;

        margin: auto;

        background: #ff1494e9;

        font-weight: bold;

        font-size: 1.5em;

        top: 50%;

        padding: 20px;

        font-family: 'Nerko One', cursive;
      }

      .myheader a {
        text-decoration: none;

        color: #fff;
      }
    </style>
  </head>

  <body>
    <header class="myheader">
      <a href="https://murypstudio.my.id/">Muryp</a>
    </header>
  </body>
</html>
```

## Preview :

.myheader { text-align: center; margin:auto; background:#FF1494E9; font-weight: bold; font-size: 10px; top:50%; padding:20px; font-family: 'Nerko One', cursive; } .myheader a{ text-decoration: none; color: #fff; }

[Muryp](https://murypstudio.my.id/)

## Kesimpulan

Jadi untuk membuat sebuah header kita hanya butuh syntax tersebut saja. Jika kalian ingin bisa ditambahkan tag name agar lebih SEO. Untuk masalah SEO dan lainnya akan saya bahas nantinya.

## Pendapatmu

Apakah membuat header itu mudah? Adakah yang tidak kalian ketahui pada kode tersebut? Jika memang ada yang ingin ditanyakan, mari kita diskusikan dibawah. Atau kalian bisa DM langsung saja. Biasanya saya lebih banyak menggunakan Telegram dan Instagram.

Silahkan beri tanggapan, saran, kritik dan jika berkenan bisa follow media sosial saya. Kalian juga bisa request pembahasan berikutnya dikolom komentar dibawah.

Terimakasih~
