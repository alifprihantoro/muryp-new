const url = "/blog/index.json";
const url2 = "/code/index.json";
$get_json(url).then((data) => {
  return data
});
const dataku = fetch(url)
  .then((res) => res.json())
  .then((data) => {
    return data.data_post;
  });

const dataku2 = fetch(url2)
  .then((res) => res.json())
  .then((data) => {
    return data.data_post;
  });

const printDataBlog = async function printData() {
  const a = await dataku;
  console.log(a);
};

const printDataCode = async function printData() {
  const b = await dataku2;
  console.log(b);
};

const printData = async function printData() {
  const a = await dataku;
  const b = await dataku2;
  console.log([...a, ...b]);
};

const dataSection = "blog";

const hasilData = () => {
  if (dataSection === "blog") {
    console.log("ini blog");
    printDataBlog();
  } else if (dataSection === "code") {
    console.log("ini code");
    printDataCode();
  } else {
    console.log("ini all");
    printData();
  }
};

// tes create JS
