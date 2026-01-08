const salvarProdutos = require("./salvarProdutos");
const estiloTerminal = require("../utils/estiloTerminal");

function adicionarProduto(rl, produtos, voltarMenu) {
  rl.question("Nome do produto: ", (nome) => {
    if (!nome.trim()) {
      console.log(`${estiloTerminal.fundoVermelho}Nome não pode ser vazio!${estiloTerminal.reset}`);
      return voltarMenu();
    }

    rl.question("Categoria: ", (categoria) => {
      if (!categoria.trim()) {
        console.log(`${estiloTerminal.fundoVermelho}Categoria não pode ser vazia!${estiloTerminal.reset}`);
        return voltarMenu();
      }

      rl.question("Quantidade em estoque: ", (quantidade) => {
        if (isNaN(quantidade) || quantidade < 0) {
          console.log(`${estiloTerminal.fundoVermelho}Quantidade inválida!${estiloTerminal.reset}`);
          return voltarMenu();
        }

        rl.question("Preço: ", (preco) => {
          if (!preco.trim()) {
            console.log(`${estiloTerminal.fundoVermelho}Preço não pode ser vazio!${estiloTerminal.reset}`);
            return voltarMenu();
          }

          const precoNumero = Number(preco.replace(",", "."));

          if (isNaN(precoNumero) || precoNumero <= 0) {
            console.log(`${estiloTerminal.fundoVermelho}Preço inválido! Use números, ex: 30,5 ou 30.5${estiloTerminal.reset}`);
            return voltarMenu();
          }

          const novoId = produtos.length > 0
            ? produtos[produtos.length - 1].id + 1
            : 1;

          const novoProduto = {
            id: novoId,
            nome: nome.trim(),
            categoria: categoria.trim(),
            quantidade_em_estoque: Number(quantidade),
            preco: precoNumero
          };

          produtos.push(novoProduto);
          salvarProdutos(produtos);

          console.log(`${estiloTerminal.fundoVerde}\nProduto cadastrado com sucesso!${estiloTerminal.reset}`);
          voltarMenu();
        });
      });
    });
  });
}

module.exports = adicionarProduto;
