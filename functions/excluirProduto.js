const salvarProdutos = require("./salvarProdutos");
const mostrarMenu = require("../index");
const estiloTerminal = require("../utils/estiloTerminal");

function excluirProduto(rl, produtos, mostrarMenu) {
  rl.question("Digite o ID do produto que deseja excluir: ", (id) => {
    const idNumero = Number(id);

    const indice = produtos.findIndex((p) => p.id === idNumero);

    if (indice === -1) {
      console.log(`${estiloTerminal.fundoVermelho}\nProduto não encontrado! ${estiloTerminal.reset}`);
      return mostrarMenu();
    }

    console.log(`
Produto encontrado:
ID: ${produtos[indice].id}
Nome: ${produtos[indice].nome}
Categoria: ${produtos[indice].categoria}
Quantidade em estoque: ${produtos[indice].quantidade_estoque}
Preco: ${produtos[indice].preco}
`);

    rl.question("Tem certeza que deseja excluir? (s/n): ", (confirmacao) => {
      if (confirmacao.toLowerCase() === "s") {
        produtos.splice(indice, 1);
        salvarProdutos(produtos);

        console.log(`${estiloTerminal.fundoVerde}\nProduto excluído com sucesso!${estiloTerminal.reset}`);
      } else {
        console.log("\nExclusão cancelada.");
      }

      mostrarMenu();
    });
  });
}

module.exports = excluirProduto;
