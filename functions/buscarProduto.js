const voltarMenu = require("../index");

function buscarProduto(rl, produtos, voltarMenu) {
  if (!produtos.length) {
    console.log("Não há produtos cadastrados!");
    return voltarMenu();
  }

  console.log(`
Buscar produto por:
1 - ID
2 - Nome
0 - Voltar
`);

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        buscarPorId(rl, produtos, voltarMenu);
        break;

      case "2":
        buscarPorNome(rl, produtos, voltarMenu);
        break;

      case "0":
        voltarMenu();
        break;

      default:
        console.log("Opção inválida!");
        voltarMenu();
    }
  });
}

function buscarPorId(rl, produtos, voltarMenu) {
  rl.question("Digite o ID do produto: ", (id) => {
    const produto = produtos.find(p => String(p.id) === id);

    if (!produto) {
      console.log("Produto não encontrado!");
      return voltarMenu();
    }

    exibirProduto(produto);
    voltarMenu();
  });
}

function buscarPorNome(rl, produtos, voltarMenu) {
  rl.question("Digite o nome do produto: ", (nome) => {
    const encontrados = produtos.filter(p =>
      p.nome.toLowerCase().includes(nome.toLowerCase())
    );

    if (!encontrados.length) {
      console.log("Nenhum produto encontrado!");
      return voltarMenu();
    }

    encontrados.forEach(exibirProduto);
    voltarMenu();
  });
}

function exibirProduto(produto) {
  console.log(`
-----------------------------
ID: ${produto.id}
Nome: ${produto.nome}
Categoria: ${produto.categoria}
Quantidade: ${produto.quantidade}
Preço: R$ ${produto.preco.toFixed(2)}
-----------------------------
`);
}

module.exports = buscarProduto;
