const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hi there, Welcome to my Server.");
});

app.get("/korede", (req, res) => {
  res.send("Here is my personal blog page");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 2500 },
    { id: 2, name: "Bag", price: 1000 },
  ]);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const products = [
    { id: 1, name: "Laptop", price: 2500 },
    { id: 2, name: "Bag", price: 1000 },
    { id: 3, name: "mouse", price: 500 },
  ];

  const requestedProduct = products.find((product) => product.id === id);
  res.json(requestedProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}.`);
});
