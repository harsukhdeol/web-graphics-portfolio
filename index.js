import three from "./imgs/three/three.js";
import css from "./imgs/css/css.js";
import graphic from "./imgs/graphic/graphic.js";
import ui from "./imgs/ui/ui.js";
import motion from "./imgs/motion/motion.js";

import blender from "./imgs/blender/blender.js";

const threeDOM = document.getElementById("three");
renderItems(three, threeDOM, "code");

const cssDOM = document.getElementById("css");
renderItems(css, cssDOM, "code");

const graphicDOM = document.getElementById("graphic");
renderItems(graphic, graphicDOM, "img");

const uiDOM = document.getElementById("ui");
renderItems(ui, uiDOM, "img");

const blenderDOM = document.getElementById("blender");
renderItems(blender, blenderDOM, "vid");

const motionDOM = document.getElementById("motion");
renderItems(motion, motionDOM, "vid");

function renderItems(arr, dom, type) {
  let content = document.createElement("div");
  content.classList.add("content");

  arr.forEach((item) => {
    let link = document.createElement("a");
    link.href = item[type];

    let img = document.createElement("img");
    img.src = item.img;
    link.appendChild(img);
    content.appendChild(link);
  });
  dom.appendChild(content);
}
