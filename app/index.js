import express from "express";

const PORT = 3301;
const app = express();

// we tell express to serve all static files
// from this directory
app.use(express.static("public"));

// see the `res.sendFile()` express API
// https://expressjs.com/en/5x/api.html#res.sendFile
//
// since, we don't use the first parameter, it's marked
// with an underscore character
app.use((_, res) => res.sendFile(`index.html`, { root: "public" }));

app.listen(PORT, () => {
  console.log(`server is up & running at http://localhost:${PORT}`);
});
