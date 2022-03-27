const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const { exec } = require('child_process');

// config mix
mix.webpackConfig({
    stats: {
         children: true
    }
});

// style post
mix.sass('./assets/scss/post/main.scss', 'public/post.css', {}, [
    tailwindcss('./tailwind.config.post.js')
]).options({
    processCssUrls: false,
})
// style home
.sass('./assets/scss/home/main.scss', 'public/home.css', {}, [
    tailwindcss('./tailwind.config.home.js')
]).options({
    processCssUrls: false,
})
// main script
  .babel(['./assets/js/icon.js','./assets/js/popup.js'], './assets/main.js')
  .babel(['./assets/js/nav.js'], './assets/post.js')
// home script
  .babel(['./assets/js/link.js'], './assets/home.js')

// hugo
exec('hugo server --minify --destination public');
