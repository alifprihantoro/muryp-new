const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const { exec } = require('child_process');

mix
// style home
.sass('./assets/scss/home/main.scss', 'public/home.css', {}, [
    tailwindcss('./config/tailwind.home.js')
]).options({
    processCssUrls: false,
})

// main script
  .babel(['./assets/js/icon.js','./assets/js/link.js'], './assets/main.js')

if (mix.inProduction()) {
  exec("hugo --minify --destination public");
}else{
  exec("hugo server --minify --destination public");
}
