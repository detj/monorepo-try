// assume this module exports a bunch of stuff
// to be consumed by other modules

const foo = "foo";
const bar = {
  bar: "I am bar",
};

const text = document.createElement("p");
text.innerHTML = `value of foo is ${foo} and value of bar is ${JSON.stringify(
  bar
)}`;

document.getElementById("root").append(text);
//# sourceMappingURL=bundle.js.map
