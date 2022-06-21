const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const { exec } = require('child_process')

mix
  // style home
  .sass('./assets/scss/home/main.scss', 'public/home.css', {}, [
    tailwindcss('./config/tailwind.home.js'),
  ])
  .options({
    processCssUrls: false,
  })
  // style post
  .sass('./assets/scss/post/main.scss', 'public/post.css', {}, [
    tailwindcss('./config/tailwind.post.js'),
  ])
  .options({
    processCssUrls: false,
  })

  // home script
  .babel(
    [
      './assets/js/icon.js',
      './assets/js/search.js',
      './assets/js/popup.js',
    ],
    './public/main.js'
  )
  .babel(
    [
      './assets/js/link.js',
      './assets/js/drag.js',
    ],
    './public/home.js'
  )

if (mix.inProduction()) {
  exec('hugo --minify --destination public')
}
// else {
//   exec('hugo server --minify --destination public')
// }
