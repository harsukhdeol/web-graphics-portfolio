import three from "./imgs/three/three.js";
import css from "./imgs/css/css.js";

const threeDOM = document.getElementById("three");
renderItems(three, threeDOM);

const cssDOM = document.getElementById("css");
renderItems(css, cssDOM);

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
  dom.appendChild(content);
}
