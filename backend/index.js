const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res, nest) => {
  res.json({message:"Hello World!!!"})
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})