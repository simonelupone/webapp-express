const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 3000;

const movieRouter = require("./routers/movieRouter");

// import middleware
const imagePathMiddleware = require("./middlewares/imagePath");
const errorsHandler = require("./middlewares/errorsHandler");

// static-assets middleware
app.use(express.json("public"));

// body-parser middleware
app.use(express.json());

// image-path middleware
app.use(imagePathMiddleware);

app.get("/", (req, res) => {
  res.send("Movies API Server");
});

app.use(errorsHandler);

app.use("/api/movies", movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
