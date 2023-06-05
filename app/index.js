import express from "express";

const PORT = 3301;
const app = express();

app.use(express.static("public"));
app.use((_, res) => res.sendFile(`public/index.html`, { root: "public" }));

// app.get("/", async (req, res) => {
//   const index = await readFile("./public/index.html", { encoding: "utf-8" });
//   res.send(index);
// });

app.listen(PORT, () => {
  console.log(`server is up & running at http://localhost:${PORT}`);
});
