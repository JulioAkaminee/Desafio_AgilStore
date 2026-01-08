function listarProdutos(produtos) {
  if (!produtos || produtos.length === 0) {
    console.log("Não há produtos cadastrados.");
    return;
  }

  function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
  }

  const produtosFormatados = produtos.map(p => ({
    ...p,
    preco: formatarPreco(p.preco)
  }));

  console.table(produtosFormatados);
}

module.exports = listarProdutos;
