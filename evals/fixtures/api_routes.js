// SOLO PARA PRUEBAS: código intencionalmente vulnerable. No usar en producción.
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

// BOLA: no comprueba que el pedido pertenezca al usuario
app.get("/api/orders/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// Mass assignment: acepta campos como role o isAdmin
app.post("/api/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// JWT: no fija el algoritmo esperado
app.use((req, res, next) => {
  req.user = jwt.decode(req.headers.authorization, { complete: false });
  next();
});

app.listen(3000);
