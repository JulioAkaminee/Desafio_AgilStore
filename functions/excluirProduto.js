const salvarProdutos = require("./salvarProdutos");
const estiloTerminal = require("../utils/estiloTerminal");

function excluirProduto(rl, produtos, mostrarMenu) {
  if (!produtos.length) {
    console.log(
      `${estiloTerminal.fundoVermelho}Não há produtos cadastrados!${estiloTerminal.reset}`
    );
    return mostrarMenu();
  }

  rl.question("Digite o ID do produto que deseja excluir: ", (id) => {
    if (!id.trim()) {
      console.log(
        `${estiloTerminal.fundoVermelho}ID não pode ser vazio!${estiloTerminal.reset}`
      );
      return mostrarMenu();
    }

    if (isNaN(id)) {
      console.log(
        `${estiloTerminal.fundoVermelho}ID inválido!${estiloTerminal.reset}`
      );
      return mostrarMenu();
    }

    const idNumero = Number(id);
    const indice = produtos.findIndex(p => p.id === idNumero);

    if (indice === -1) {
      console.log(
        `${estiloTerminal.fundoVermelho}\nProduto não encontrado!${estiloTerminal.reset}`
      );
      return mostrarMenu();
    }

    const produto = produtos[indice];

    console.log(`
Produto encontrado:
ID: ${produto.id}
Nome: ${produto.nome}
Categoria: ${produto.categoria}
Quantidade em estoque: ${produto.quantidade_em_estoque}
Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}
`);

    rl.question("Tem certeza que deseja excluir? (s/n): ", (confirmacao) => {
      if (!confirmacao.trim()) {
        console.log(
          `${estiloTerminal.fundoVermelho}Resposta não pode ser vazia!${estiloTerminal.reset}`
        );
        return mostrarMenu();
      }

      if (confirmacao.toLowerCase() === "s") {
        produtos.splice(indice, 1);
        salvarProdutos(produtos);

        console.log(
          `${estiloTerminal.fundoVerde}\nProduto excluído com sucesso!${estiloTerminal.reset}`
        );
      } else {
        console.log(
          `${estiloTerminal.fundoVermelho}\nExclusão cancelada.${estiloTerminal.reset}`
        );
      }

      mostrarMenu();
    });
  });
}

module.exports = excluirProduto;
