// get id 
const results = document.getElementById("list-post");
const loadMore = document.getElementById("load-more");
// get slug
// get tags
// sort by tags
// template
// munculkan









let countPost = 5;
// catch json
let url = "/blog/index.json";
function fetchListPost() {
  fetch(url)
    .then((res) => res.json())
    .then((dataJSON) => {
      // pagenation
      const data = dataJSON.slice(0, countPost);
      // result
      results.innerHTML = "";
      data.forEach((e) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="myread">
	      <a href="${e.link}">
      <div class="content">
        <div class="date">
									<span class="day">${e.date}</span>
							<span class="rest">${e.month}</span>
								</div>
        <div class="readMore">
        ${e.judul}
        </div>
     </div>
            </a>
    </div>
`
        results.appendChild(div);
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
