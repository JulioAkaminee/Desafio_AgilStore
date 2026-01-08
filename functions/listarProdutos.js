
function listarProdutos(produtos) {
  if (!produtos || produtos.length === 0) {
    console.log("Não há produtos cadastrados.");
    
    return;
  }

  const produtosFormatados = produtos.map(p => ({
    ...p,
    preco: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.preco)
  
  }));

  console.table(produtosFormatados);

}

module.exports = listarProdutos;
