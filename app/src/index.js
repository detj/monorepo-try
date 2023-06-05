import { foo, bar } from "protocol";

const text = document.createElement("p");
text.innerHTML = `value of foo is ${foo} and value of bar is ${JSON.stringify(
  bar
)}`;

document.getElementById("root").append(text);
