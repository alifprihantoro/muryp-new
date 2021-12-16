const addScript = (e)=>{
    const script   = document.createElement("script");
script.type  = "text/javascript";
script.src   = e;    // use this for linked script
script.appendChild(script);
}
let add_script=0
const add_data = (e)=>{
  add_script++
  if (add_script==1) {
    alert(`hello ${e}`)
  }
}
const shortTag=(e)=>{

}
const addList = (tags)=>{
  //add data blog
  // short by tags
  // inner html
  console.log(tags)
}

const link = (e) => {
  if (e==="/") {
  //addscript(/js/list.js)
  //addscript(/js/list.js)
    // get id
    // template
    // innerhtml blog load more
    // innerhtml note load more
    // te
  }
  // alert(e);
  const nextTitle = "My new page";
  const nextState = { additionalInformation: "Updated the URL with JS" };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, e);

  // This will replace the current entry in the browser's history, without reloading
  window.history.replaceState(nextState, nextTitle, e);
};
// samakan kayak klick url
window.addEventListener('popstate', function (event) {
	// The URL changed...
  alert(`ganti link ${window.location.href}`)
});
// // unnamed
// let Rectangle = class {
//   constructor(height, width, name) {
//     this.height = height;
//     this.name = name;
//     this.width = width;
//   }
// };
// const Rectangle2 = new Rectangle(21,'hello',25)
// console.log(Rectangle2);
// // output: "Rectangle"

// // named
// let Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle2"
