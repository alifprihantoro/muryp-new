const $chekList = (sel)=> {
  const hasil = sel.options[sel.selectedIndex].value;
  return hasil;
}
// penggunaan :
// const list_section = ()=>{
//   const url_list = document.getElementById("list-section-search");
//   const hasil_url = $chekList(url_list);
//   return hasil_url
// }
// console.log(list_section())
