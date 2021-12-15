// id
const search = document.getElementById("search");
const results = document.getElementById("results");

// search btn google
const btnSearch = ()=>{
  const val = search.value
  // location.href = `https://www.google.com/search?q=site%3Amuryp.my.id+${val}`
  const link = `https://www.google.com/search?q=site%3Amuryp.my.id+${val}`
window.open(link, '_blank');
}
// search enter google
search.addEventListener("keyup", (event)=> {
  if (event.keyCode === 13) {
    btnSearch()
  }
});


