var textArray = [
  "UI UX Oriented",
  "Framework Agnostic",
  "Modular",
  "Scalable",
  "Fully Test Covered",
  "Comprehensive",
  "Development Savvy",
  "Storybook Enabled",
  "Performance Oriented",
  "PWA Ready",
  "Microfrontend Ready",
];
var text = textArray[0];

var chars = text.split("");
var container = document.getElementById("container");

var i = 0;
var x = 1;
setInterval(function () {
  if (i < chars.length) {
    container.innerHTML += chars[i++];
  } else if (i < chars.length + 10) {
    i++;
  } else if (i < chars.length + 20) {
    container.classList.add("type-clear");
    i++;
  } else if (i < chars.length + 25) {
    container.innerHTML = "&nbsp;";
    i++;
  } else {
    container.innerHTML = "&nbsp;";
    if (x >= textArray.length) {
      x = 0;
    }
    text = textArray[x++];
    chars = text.split("");
    container.classList.remove("type-clear");
    i = 0;
  }
}, 100);



const loop = (nodes, callback) => {
  for (let i = 0; i < nodes.length; ++i) {
    callback(nodes[i], i);
  }
};

const onTabSelect = (parentNode, node, i) => {
  node.addEventListener("click", (e) => {
    e.target.classList.add("selected");
    loop(parentNode, (node, j) => i !==j ? node.classList.remove('selected') : null);
  });
};

tabsNodes = document.querySelectorAll(".code-tabs");

loop(tabsNodes, (tabsNode) => {
  nodes = tabsNode.querySelectorAll("p");
  if(nodes.length) {
    nodes[0].classList.add("hide");
    nodes[1].classList.add("selected");
  }
    loop(nodes, (node, i) => onTabSelect(nodes, node, i));
})

