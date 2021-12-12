    const showList = (tagName) => {
      results.innerHTML = "";
      dataku.data_post
        .filter((item) => {
          return item.tags.toLowerCase().includes(tagName);
        })
        .filter((item) => {
          return item.judul.toLowerCase().includes(search_term);
        })
        .forEach((e) => {
          const li = document.createElement("li");
          li.innerHTML = `<a class="${e.tags}" href="${e.link}">${e.judul}</a>`;
          results.appendChild(li);
        });
    };
search.addEventListener("input", (event) => {
  // const termux = "termux";
  // search_term = termux.toLowerCase();
  // showList();

  const pencarian = event.target.value;
  const pencarian_lenght = pencarian.length
  // console.log(pencarian_lenght)
  search_term = pencarian.toLowerCase();
  // showList();
  if (pencarian_lenght <3) {
    // hilang
    // console.log("tidak ada")
    results.classList.add("hasil-hilang");
  } else {
    //ada
    // console.log("ada")
    const tag_id_search = document.getElementById("list-tags-search");
    console.log(tag_id_search.value)
    results.classList.remove("hasil-hilang");
  }
});
