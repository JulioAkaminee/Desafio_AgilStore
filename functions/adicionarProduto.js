const salvarProdutos = require("./salvarProdutos");
const estiloTerminal = require("../utils/estiloTerminal");
function adicionarProduto(rl, produtos, voltarMenu) {
  rl.question("Nome do produto: ", (nome) => {
    rl.question("Categoria: ", (categoria) => {
      rl.question("Quantidade em estoque: ", (quantidade) => {
        rl.question("Preço: ", (preco) => {

          const precoNumero = Number(preco.replace(",", "."));

          if (isNaN(precoNumero)) {
            console.log(`${estiloTerminal.fundoVermelho}Preço inválido! Use números, ex: 30,5 ou 30.5 ${estiloTerminal.reset}`);
            return voltarMenu();
          }

          const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;

          const novoProduto = {
            id: novoId,
            nome: nome,
            categoria: categoria,
            quantidade_em_estoque: Number(quantidade),
            preco: precoNumero
          };

          produtos.push(novoProduto);
          salvarProdutos(produtos);

          console.log(`${estiloTerminal.fundoVerde}\nProduto cadastrado com sucesso! ${estiloTerminal.reset}`);
          voltarMenu();
         
        });
      });
    });
  });
}

module.exports = adicionarProduto;
