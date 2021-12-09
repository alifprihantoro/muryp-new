//get json
const $get_json=function(url){
  const get_json = fetch(url)
    .then((res) => res.json())
  return get_json
}
// how use it :
// const url = "/index.json"
// $get_json(url)
//  .then((data)=>{
//  console.log(data)
//  })
