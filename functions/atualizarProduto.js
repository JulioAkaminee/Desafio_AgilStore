const salvarProdutos = require("./salvarProdutos");
const mostrarMenu = require("../index");
const estiloTerminal = require("../utils/estiloTerminal");

function atualizarProduto(rl, produtos, mostrarMenu) {
  if (!produtos.length) {
    console.log(
      ` ${estiloTerminal.fundoVermelho}Não há produtos cadastrados! ${estiloTerminal.reset} `
    );
    return mostrarMenu();
  }

  rl.question("Digite o ID do produto que deseja atualizar: ", (id) => {
    const produto = produtos.find((p) => String(p.id) === id);

    if (!produto) {
      console.log(
        `${estiloTerminal.fundoVermelho} Produto não encontrado! ${estiloTerminal.reset}`
      );
      return mostrarMenu();
    }

    console.log(`
O que deseja atualizar?
1 - Nome
2 - Categoria
3 - Quantidade
4 - Preço
0 - Cancelar
    `);

    rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          rl.question("Novo nome: ", (nome) => {
            if (!nome.trim()) {
              console.log(`${estiloTerminal.fundoVermelho}Nome inválido!`);
              return mostrarMenu();
            }
            produto.nome = nome;
            finalizar(produtos, mostrarMenu);
          });
          break;

        case "2":
          rl.question("Nova categoria: ", (categoria) => {
            if (!categoria.trim()) {
              console.log(`${estiloTerminal.fundoVermelho}Categoria inválida!`);
              return mostrarMenu();
            }
            produto.categoria = categoria;
            finalizar(produtos, mostrarMenu);
          });
          break;

        case "3":
          rl.question("Nova quantidade: ", (quantidade) => {
            if (isNaN(quantidade) || quantidade < 0) {
              console.log(
                `${estiloTerminal.fundoVermelho}Quantidade inválida!`
              );
              return mostrarMenu();
            }
            produto.quantidade = Number(quantidade);
            finalizar(produtos, mostrarMenu);
          });
          break;

        case "4":
          rl.question("Novo preço: ", (preco) => {
            const valor = Number(preco.replace(",", "."));
            if (isNaN(valor) || valor <= 0) {
              console.log(`${estiloTerminal.fundoVermelho}Preço inválido!`);
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
            `${estiloTerminal.fundoVermelho}Opção inválida! ${estiloTerminal.reset}`
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
