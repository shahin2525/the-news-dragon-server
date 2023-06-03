const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const catagories = require("./data/catagories.json");
const news = require("./data/news.json");
app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});
app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedId = news.find((n) => n._id === id);
  res.send(selectedId);
});

app.get("/catagories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  console.log(id);
  if (id == 0) {
    res.send(news);
  } else {
    const catagoriNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(catagoriNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running port: ${port}`);
});
