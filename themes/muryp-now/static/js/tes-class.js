const link = (e) => {
  alert(e);
  const nextTitle = "My new page";
  const nextState = { additionalInformation: "Updated the URL with JS" };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, e);

  // This will replace the current entry in the browser's history, without reloading
  window.history.replaceState(nextState, nextTitle, e);
  return false;
};
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
