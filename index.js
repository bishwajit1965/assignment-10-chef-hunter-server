const express = require("express");
const cors = require("cors");
const chefs = require("./data/chef.json");
const recipes = require("./data/recipes.json");
const dishes = require("./data/favRecipes.json");

const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

// Will print hello world
app.get("/", (req, res) => {
  res.send("Hello chef hunter server");
});

// Will fetch all chef data
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

// Id wise specific chef
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const particularChef = chefs.find((chef) => chef.id === id);
  res.send(particularChef);
  console.log(id);
});

// Fetch favourite foods
app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.get("/dishes", (req, res) => {
  res.send(dishes);
});

// Id wise specific recipes will be displayed
app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const particularFood = recipes.find((pFood) => pFood.id === id);
  res.send(particularFood);
  console.log(id);
});

app.listen(port, () => {
  console.log(`Chef hunter server is listening on port: ${port}`);
});
