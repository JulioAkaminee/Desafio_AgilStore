const fs = require("fs");
const path = require("path")

function carregarProdutos() {
    const caminho = path.resolve(__dirname, "../data/produtos.json");
  if (fs.existsSync(caminho)) {
    try {
      return JSON.parse(fs.readFileSync(caminho, "utf-8"));
    } catch (err) {
      console.error("Erro ao ler produtos.json:", err.message);
      return [];
  
    }
  } else {
    console.log("Não há nenhum produto cadastrado.");
    return [];

  }
}

module.exports = carregarProdutos;
