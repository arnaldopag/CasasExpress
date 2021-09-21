const dados = require("./dados.json");
const express = require("express");
const app = express();
const port = 3000;

app.get("/casas", function (req, res) {
    let consulta = req.query.consulta;
    let retorno = [];
    if (consulta) {
        retorno = dados.filter(function (item) {
            const name = item.name.toLowerCase();
            return name.includes(consulta.toLowerCase());
        });
    }
    res.json(retorno);
});
app.get("/casas/:slug", function (req, res) {
    let slug = req.params.slug;
    let retorno = [];
    if (slug) {
        retorno = dados.filter(function (item) {
            return item.slug == slug;
        });
    }
    res.json(retorno);
});

app.listen(port, function () {
    console.log(`servidor aberto na porta ${port}`);
});
