const readline = require("readline");

const carregarProdutos = require("./functions/carregarProdutos");
const adicionarProduto = require("./functions/adicionarProduto");
const atualizarProduto = require("./functions/atualizarProduto");
const listarProdutos = require("./functions/listarProdutos");
const excluirProduto = require("./functions/excluirProduto");
const buscarProduto = require("./functions/buscarProduto");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let produtos = carregarProdutos();

function mostrarMenu() {
  console.log(`
=============== MENU AgilStore ===============
1 - Adicionar produto
2 - Listar produtos
3 - Atualizar produto
4 - Excluir produto
5 - Buscar produto
0 - Sair
`);

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionarProduto(rl, produtos, mostrarMenu);
        break;

      case "2":
        listarProdutos(produtos);
        rl.question("Aperte ENTER para voltar ao menu ", mostrarMenu);
        break;

      case "3":
        atualizarProduto(rl, produtos, mostrarMenu);
        break;

      case "4":
        excluirProduto(rl, produtos, mostrarMenu);
        break;
      case "5":
        buscarProduto(rl, produtos, mostrarMenu);
        break;
      case "0":
        console.log("Saindo...");
        rl.close();
        break;

      default:
        console.log("Opção inválida!");
        mostrarMenu();
    }
  });
}

mostrarMenu();
module.exports = mostrarMenu;
