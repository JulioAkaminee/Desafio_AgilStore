const fs = require("fs");
const path = require("path");

function salvarProdutos(produtos) {
  const caminho = path.resolve(__dirname, "../data/produtos.json");
  fs.writeFileSync(caminho, JSON.stringify(produtos, null, 2));
}

module.exports = salvarProdutos;
