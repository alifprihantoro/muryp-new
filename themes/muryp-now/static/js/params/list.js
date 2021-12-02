const results = document.getElementById("list-post");
const loadMore = document.getElementById("load-more");
let countPost = 5;
// catch json
let url = "/index.json";
function fetchListPost() {
  fetch(url)
    .then((res) => res.json())
    .then((dataJSON) => {
      // pagenation
      const data = dataJSON.slice(0, countPost);
      // result
      results.innerHTML = "";
      data.forEach((e) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${e.url}">${e.judul}</a>`;
        results.appendChild(li);
      });
      //end fetch
    });
} //end func

fetchListPost();
// load more
//triger
function triggerLoad() {
  countPost += 5;
  fetchListPost();
}
//end triger
