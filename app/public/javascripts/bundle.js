// assume this module exports a bunch of stuff
// to be consumed by other modules

const foo = "foo";
const bar = {
  bar: "I am bar",
};
const fn = () => {
  return "You just called a protocol fn";
};

const text = document.createElement("p");
text.innerHTML = `value of foo is <b>${foo}</b> and value of bar is <b>${JSON.stringify(
  bar
)}</b>`;

// we append a DOM node inside the `root` node
// check the `public/index.html` file to see how
// the root node is defined
document.getElementById("root").append(text);

console.log(fn());
//# sourceMappingURL=bundle.js.map
