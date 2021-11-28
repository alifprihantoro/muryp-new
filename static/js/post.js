const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

const showList = () => {
  results.innerHTML = "";
  data
    .filter((item) => {
      return (
        item.country.toLowerCase().includes(search_term) ||
        item.name.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<i>Name:</i> ${e.name}  || <i>Country:</i> ${e.country}`;
      results.appendChild(li);
    });
};

search.addEventListener("input", (event) => {
  const pencarian = event.target.value;
  search_term = pencarian.toLowerCase();
  showList();
  if (pencarian === "") {
    console.log("ini kosong");
    results.classList.add("hasil-hilang");
  } else {
    console.log("tidak kosong");
    results.classList.remove("hasil-hilang");
  }
});
