import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "public/javascripts/bundle.js",
  },
  plugins: [nodeResolve()],
};
