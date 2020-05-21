import three from "./imgs/three/three.js";
console.log(three);

const threeDOM = document.getElementById("#three");
const items = renderItems(three, threeDOM);
threeDOM.appendChild(items);
console.log(threeDOM);
function renderItems(arr, dom) {
  let content = document.createElement("div");
  content.classList.add("content");
  arr.forEach((item) => {
    let link = document.createElement("a");
    link.href = item.code;
    let img = document.createElement("img");
    img.src = item.img;
    link.appendChild(img);
    content.appendChild(link);
  });
  return content;
}
