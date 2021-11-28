const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

// default count
let klikCount = 0;
  // when search bar klick
search.addEventListener("click", () => {
  // add +1
  klikCount++;
  // when klick <= 1 do this else nothing
  if (klikCount <= 1) {
    const my_awesome_script = document.createElement("script");
    my_awesome_script.setAttribute("src", "/js/data.js");

    document.head.appendChild(my_awesome_script);
    console.log('ini berhasil')
  }
});

const showList = () => {
  results.innerHTML = "";
  data
    .filter((item) => {
      return (
        item.url.toLowerCase().includes(search_term) ||
        item.judul.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${e.url}">${e.judul}</a>`;
      results.appendChild(li);
    });
};

search.addEventListener("input", (event) => {
  const pencarian = event.target.value;
  search_term = pencarian.toLowerCase();
  showList();
  if (pencarian === "") {
    // rm list
    results.classList.add("hasil-hilang");
  } else {
    //add list
    results.classList.remove("hasil-hilang");
  }
});
