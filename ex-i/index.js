const dados = require("./dados.json");
const express = require("express");
const app = express();
const port = 3000;

app.get("/casas", function (req, res) {
    res.json(dados);
});

app.listen(port, function () {
    console.log(`servidor aberto na porta ${port}`);
});
