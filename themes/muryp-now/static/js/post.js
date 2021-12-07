function pencarianKU(tagName, url) {
  // search
  const search = document.getElementById("search");
  const results = document.getElementById("results");
  let search_term = "";
  // when search bar klick
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const showList = () => {
        results.innerHTML = "";
        data.data_post
          .filter((item) => {
            // if (tagName === "all") {
            //   return item;
            // } else {
            //   return item.tags.toLowerCase().includes(tagName);
            // }
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
