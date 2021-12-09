// if funch triger
// add script search and use this funch
function myChoose(sel) {
  const hasil = sel.options[sel.selectedIndex].value;
  return hasil;
}

function triChoose() {
  const url_list = document.getElementById("url-list");
  hasil_url = myChoose(url_list);
  console.log(hasil_url)
  // ----- cara pertama
  // if btn tag klick
  // get all data.tag and merge
  // rm duplicut
  // list into options
  // ---- cara kedua 
  // if url = blog => rm tag other

  const tag_list = document.getElementById("tag-list");
  hasil_tag = myChoose(tag_list);
  console.log(hasil_tag)

// pencarianKU(hasil_tag, hasil_url)
}
triChoose()

// function myChoose(sel) {
//   const hasil = sel.options[sel.selectedIndex].value;
//   return hasil;
// }
// function tagChoose() {
//   const tag_list = document.getElementById("tag-list");
//   myChoose(tag_list);
//   hasil_tag = myChoose(tag_list);
// pencarianKU(hasil_tag, hasil_url)
//   // console.log(hasil_tag);
//   return hasil_tag;
// }
// hasil_tag = tagChoose();
//
// function urlChoose() {
//   const url_list = document.getElementById("url-list");
//   myChoose(url_list);
//   hasil_url = myChoose(url_list);
// pencarianKU(hasil_tag, hasil_url)
//   // console.log(hasil_url);
//   return hasil_url;
// }
// hasil_url = urlChoose();
// // updateTag()
//
// function update() {
//   const select_tag = document.getElementById("tags-list");
//   const option_tag = select_tag.options[select.selectedIndex];
//
//   // const select_url = document.getElementById("list-url");
//   // const option_url = select_url.options[select.selectedIndex];
//
//   const upt_tag  = option_tag.value;
//   // const upt_url  = option_url.value;
// console.log(upt_tag)
// // console.log(upt_url)
//   // update(upt_tag , upt_url)
// }
// const upt_tag = updateTag();
// console.log(`obj tag : ${upt_tag}`);

// function update() {
//   const select_tag = document.getElementById("list-url");
//   const option_tag = select_tag.selectedIndex;
//   const upt_url = option_tag;
//   console.log(upt_tag)
//   if (upt_url === 0) {
//     const url = "/index.json";
//     console.log(url);
//     console.log(upt_tag);
//     pencarianKU(upt_tag, url);
//   } else if (upt_url === 1) {
//     const url = "/blog/index.json";
//     console.log(url);
//     console.log(upt_tag);
//     // pencarianKU(upt_tag, url);
//   } else {
//     const url = "/code/index.json";
//     console.log(url);
//     console.log(upt_tag);
//     // pencarianKU(upt_tag, url);
//   }
// }
