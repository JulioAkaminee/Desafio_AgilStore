const estiloTerminal = require("../utils/estiloTerminal");

function buscarProduto(rl, produtos, voltarMenu) {
  if (!produtos.length) {
    console.log(
      `${estiloTerminal.fundoVermelho}Não há produtos cadastrados!${estiloTerminal.reset}`
    );
    return voltarMenu();
  }

  console.log(`
Buscar produto por:
1 - ID
2 - Nome
0 - Voltar
`);

  rl.question("Escolha uma opção: ", (opcao) => {
    if (!opcao.trim()) {
      console.log(
        `${estiloTerminal.fundoVermelho}Opção não pode ser vazia!${estiloTerminal.reset}`
      );
      return voltarMenu();
    }

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
        console.log(
          `${estiloTerminal.fundoVermelho}Opção inválida!${estiloTerminal.reset}`
        );
        voltarMenu();
    }
  });
}

function buscarPorId(rl, produtos, voltarMenu) {
  rl.question("Digite o ID do produto: ", (id) => {
    if (!id.trim()) {
      console.log(
        `${estiloTerminal.fundoVermelho}ID não pode ser vazio!${estiloTerminal.reset}`
      );
      return voltarMenu();
    }

    const produto = produtos.find(p => String(p.id) === id.trim());

    if (!produto) {
      console.log(
        `${estiloTerminal.fundoVermelho}Produto não encontrado!${estiloTerminal.reset}`
      );
      return voltarMenu();
    }

    exibirProduto(produto);
    voltarMenu();
  });
}

function buscarPorNome(rl, produtos, voltarMenu) {
  rl.question("Digite o nome do produto: ", (nome) => {
    if (!nome.trim()) {
      console.log(
        `${estiloTerminal.fundoVermelho}Nome não pode ser vazio!${estiloTerminal.reset}`
      );
      return voltarMenu();
    }

    const encontrados = produtos.filter(p =>
      p.nome.toLowerCase().includes(nome.trim().toLowerCase())
    );

    if (!encontrados.length) {
      console.log(
        `${estiloTerminal.fundoVermelho}Nenhum produto encontrado!${estiloTerminal.reset}`
      );
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
Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}
-----------------------------
`);
}

module.exports = buscarProduto;
