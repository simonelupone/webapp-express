const express = require("express");
const app = express();
const port = 3000;

const movieRouter = require("./routers/movie");

// body-parser middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
