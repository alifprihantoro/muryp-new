function pencarianKU(tagName, url) {
  // search
  const search = document.getElementById("search");
  const results = document.getElementById("results");
  let search_term = "";
  // when search bar klick
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      search.addEventListener("input", (event) => {
        const termux = "termux";
        search_term = termux.toLowerCase();
        showList();

        const pencarian = event.target.value;
        search_term = pencarian.toLowerCase();
        showList();
        if (pencarian === "") {
          // add list
          results.classList.add("hasil-hilang");
        } else {
          //rm list
          results.classList.remove("hasil-hilang");
        }
      });
    });
}
