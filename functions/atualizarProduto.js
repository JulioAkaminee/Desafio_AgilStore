const salvarProdutos = require("./salvarProdutos");
const estiloTerminal = require("../utils/estiloTerminal");

function atualizarProduto(rl, produtos, mostrarMenu) {
  if (!produtos.length) {
    console.log(
      `${estiloTerminal.fundoVermelho}Não há produtos cadastrados!${estiloTerminal.reset}`
    );
    return mostrarMenu();
  }

  rl.question("Digite o ID do produto que deseja atualizar: ", (id) => {
    if (!id.trim()) {
      console.log(
        `${estiloTerminal.fundoVermelho}ID não pode ser vazio!${estiloTerminal.reset}`
      );
      return mostrarMenu();
    }

    const produto = produtos.find((p) => String(p.id) === id.trim());

    if (!produto) {
      console.log(
        `${estiloTerminal.fundoVermelho}Produto não encontrado!${estiloTerminal.reset}`
      );
      return mostrarMenu();
    }

    console.log(`
O que deseja atualizar?
1 - Nome
2 - Categoria
3 - Quantidade em estoque
4 - Preço
0 - Cancelar
`);

    rl.question("Escolha uma opção: ", (opcao) => {
      if (!opcao.trim()) {
        console.log(
          `${estiloTerminal.fundoVermelho}Opção não pode ser vazia!${estiloTerminal.reset}`
        );
        return mostrarMenu();
      }

      switch (opcao) {
        case "1":
          rl.question("Novo nome: ", (nome) => {
            if (!nome.trim()) {
              console.log(
                `${estiloTerminal.fundoVermelho}Nome não pode ser vazio!${estiloTerminal.reset}`
              );
              return mostrarMenu();
            }
            produto.nome = nome.trim();
            finalizar(produtos, mostrarMenu);
          });
          break;

        case "2":
          rl.question("Nova categoria: ", (categoria) => {
            if (!categoria.trim()) {
              console.log(
                `${estiloTerminal.fundoVermelho}Categoria não pode ser vazia!${estiloTerminal.reset}`
              );
              return mostrarMenu();
            }
            produto.categoria = categoria.trim();
            finalizar(produtos, mostrarMenu);
          });
          break;

        case "3":
          rl.question("Nova quantidade em estoque: ", (quantidade) => {
            if (!quantidade.trim() || isNaN(quantidade) || quantidade < 0) {
              console.log(
                `${estiloTerminal.fundoVermelho}Quantidade inválida!${estiloTerminal.reset}`
              );
              return mostrarMenu();
            }

            produto.quantidade_em_estoque = Number(quantidade);
            finalizar(produtos, mostrarMenu);
          });
          break;

        case "4":
          rl.question("Novo preço: ", (preco) => {
            if (!preco.trim()) {
              console.log(
                `${estiloTerminal.fundoVermelho}Preço não pode ser vazio!${estiloTerminal.reset}`
              );
              return mostrarMenu();
            }

            const valor = Number(preco.replace(",", "."));
            if (isNaN(valor) || valor <= 0) {
              console.log(
                `${estiloTerminal.fundoVermelho}Preço inválido!${estiloTerminal.reset}`
              );
              return mostrarMenu();
            }

            produto.preco = valor;
            finalizar(produtos, mostrarMenu);
          });
          break;

        case "0":
          mostrarMenu();
          break;

        default:
          console.log(
            `${estiloTerminal.fundoVermelho}Opção inválida!${estiloTerminal.reset}`
          );
          mostrarMenu();
      }
    });
  });
}

function finalizar(produtos, mostrarMenu) {
  salvarProdutos(produtos);
  console.log(
    `${estiloTerminal.fundoVerde}\nProduto atualizado com sucesso!${estiloTerminal.reset}`
  );
  mostrarMenu();
}

module.exports = atualizarProduto;
