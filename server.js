const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hi there, Welcome to Akorede server");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.get("/product", (req, res) => {
  res.send([
    { id: 1, name: "laptop", Price: 2000 },
    { id: 2, name: "mouse", Price: 1000 },
  ]);
});

app.get("/product/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = [
    { id: 1, name: "laptop", Price: 2000 },
    { id: 2, name: "mouse", Price: 1000 },
  ];

  const requestedProduct = product.find((product) => product.id === id)
  res.json(requestedProduct)
});

app.get('/message', (req, res) => {
  res.json({message: 'Hello from korede server'})
})

app.listen(PORT, () => {
  console.log(`Server is running on port`,PORT);
});