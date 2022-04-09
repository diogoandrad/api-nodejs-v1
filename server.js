const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.listen(3000, function() {
  console.log("Server is running");
});

app.get("/clients", function(req, res) {
  res.json(data);
});

app.get("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("/clients", function(req, res) {
  const client = req.body;

  // salvar

  res.json(client);
});

app.put("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;

  res.json(client);
});

app.delete("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  // deletar

  res.json(client);
});
