const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const { exec } = require('child_process');

// config mix
// mix.webpackConfig({
//     stats: {
//          children: true
//     }
// });

mix
// style home
.sass('./assets/scss/home/main.scss', 'public/home.css', {}, [
    tailwindcss('./config/tailwind.home.js')
]).options({
    processCssUrls: false,
})

// main script
  .babel(['./assets/js/icon.js'], './assets/main.js')
//   .babel(['./assets/js/nav.js'], './assets/post.js')
// // home script
//   .babel(['./assets/js/link.js'], './assets/home.js')

if (mix.inProduction()) {
  exec("hugo --minify --destination public");
}else{
  exec("hugo server --minify --destination public");
}
