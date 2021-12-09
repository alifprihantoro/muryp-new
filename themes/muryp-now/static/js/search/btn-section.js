// get section
const url_list = document.getElementById("list-section-search");
const hasil_url = $chekList(url_list);
// $chekList(url_list)

// list section nanti di minimize
const btn_list_section = ()=>{
  if (hasil_url === "all") {
const dataku=$get_json("/index.json")
    dataku.then((dataku)=>{
      // console.log(dataku.tags_code)
      const a = dataku.tags_blog
      const b = dataku.tags_code
      const tagName = [...a,...b]
      console.log(tagName)

      // showList(tagName)
    })
  }else{
    const dataku=$get_json(hasil_url)
    dataku.then((dataku)=>{
      console.log(dataku)

      // showList(tagName)

    })
  }
  //end
}







// function btn_tags_search() {
//   const url_list = document.getElementById("list-tags-search");
//   hasil_url = myChoose(url_list);
//   console.log(hasil_url)
//   // ----- cara pertama
//   // if btn tag klick
//   // get all data.tag and merge
//   // rm duplicut
//   // list into options
//   // ---- cara kedua
//   // if url = blog => rm tag other
//
//   const tag_list = document.getElementById("tag-list");
//   hasil_tag = myChoose(tag_list);
//   console.log(hasil_tag)
//
// // pencarianKU(hasil_tag, hasil_url)
// }
// btn_tags_search()
// function btn_section_search() {
//   const url_list = document.getElementById("list-section-search");
//   hasil_url = myChoose(url_list);
//   console.log(hasil_url)
//   // ----- cara pertama
//   // if btn tag klick
//   // get all data.tag and merge
//   // rm duplicut
//   // list into options
//   // ---- cara kedua
//   // if url = blog => rm tag other
//
//   const tag_list = document.getElementById("tag-list");
//   hasil_tag = myChoose(tag_list);
//   console.log(hasil_tag)
//
// // pencarianKU(hasil_tag, hasil_url)
// }
// btn_section_search()
