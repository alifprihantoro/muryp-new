  const search = document.getElementById("search");
  const results = document.getElementById("results");
// filter
const showList = (data) => {
  results.innerHTML = "";
  console.log(data)
  const filter_judul = data
    .filter((item) => {
      return item.tags.toLowerCase().includes(getTags());
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

// get tags
const getTags = ()=>{ return document.getElementById("list-tags-search").value }
// console.log()etTags())

// section
const getSection = () => {
  // get section
  const url_list = document.getElementById("list-section-search");
  const slug = $chekList(url_list);
  const data1 = $get_json("/blog/index.json").then((data) => {
    return data;
  });
  const data2 = $get_json("/note/index.json").then((data) => {
    return data;
  });
  if (slug === "note") {
    // console.log(data2);
    // olah data
    data2.then((e) => {
      // console.log(e);
      // const tags = "";
      showList(e);
    });
  } else if (slug === "blog") {
    // console.log(data1);
    data1.then((e) => {
      // console.log(e);
      // const tags = "";
      // showList(tags, e);
      showList(e);
    });
  } else {
    // console.log("keduannya");
    const printData = async function printData() {
      const a = await data1;
      const b = await data2;
      const ab = [...a, ...b];
      // console.log(ab);
      // const tags = "";
      showList(ab);
    };
    printData();
  }
};

search.addEventListener("input", (event) => {
  const pencarian = event.target.value;
  const pencarian_lenght = pencarian.length;
  // console.log(pencarian_lenght)
  // showList();
  if (pencarian_lenght <= 2) {
    // console.log("tidak ada")
    results.classList.add("hasil-hilang");
  } else {
    //ada
    // console.log("ada")
    search_term = pencarian.toLowerCase();
    //get section
    getSection();
  }
  if (pencarian_lenght == 3) {
    // console.log("ini tiga");
    results.classList.remove("hasil-hilang");
  }
});
