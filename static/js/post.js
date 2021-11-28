const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

// i=0
// i++
// i=<1 add js
// always checking if the element is clicked, if so, do alert('hello')
search.addEventListener("click", () => {
  const my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src','/js/data.js');

document.head.appendChild(my_awesome_script);
  console.log('testing')
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


