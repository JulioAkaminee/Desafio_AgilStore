#  AgilStore – Gerenciamento de Produtos 

Aplicação em Node.js desenvolvida para gerenciamento de produtos de uma loja fictícia chamada **AgilStore**.  

O sistema permite cadastrar, listar, atualizar, excluir e buscar produtos através de comandos no terminal, com persistência de dados em arquivo JSON.

Este projeto foi desenvolvido como exercício de programação, seguindo os requisitos propostos no enunciado.



## Funcionalidades

O sistema oferece as seguintes operações:

| Funcionalidade | Descrição | Detalhes |
|----------------|-----------|----------|
| **Adicionar Produto** | Cadastre novos produtos no sistema | Nome, Categoria, Quantidade em estoque, Preço, ID gerado automaticamente |
| **Listar Produtos** | Visualize todos os produtos cadastrados | Exibição organizada de todos os itens do sistema |
| **Atualizar Produto** | Modifique informações de produtos existentes | Atualize Nome, Categoria, Quantidade ou Preço através do ID |
| **Excluir Produto** | Remova produtos do sistema | Exclusão através do ID do produto |
| **Buscar Produto** | Encontre produtos específicos | Busca por ID ou nome do produto |
| **Persistência de Dados** | Salvamento automático das informações | Todos os dados são salvos em arquivo JSON |




## Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **JavaScript** | Linguagem de programação principal |
| **Node.js** | Ambiente de execução JavaScript |
| **readline** | Módulo para interação via terminal |
| **fs** | Módulo para manipulação de arquivos |



## Estrutura do Projeto
```
Desafio_AgilStore/
├── data/
│   └── produtos.json
├── functions/
│   ├── adicionarProduto.js
│   ├── atualizarProduto.js
│   ├── buscarProduto.js
│   ├── carregarProdutos.js
│   ├── excluirProduto.js
│   ├── listarProdutos.js
│   └── salvarProdutos.js
├── utils/
│   └── estiloTerminal.js
├── index.js
└── README.md
```

## Descrição dos Diretórios

| Diretório | Descrição |
|-----------|-----------|
| **data/** | Armazena o arquivo JSON com os dados dos produtos |
| **functions/** | Contém os módulos de lógica de negócio para cada operação |
| **utils/** | Utilitários auxiliares, como formatação de terminal |
| **index.js** | Arquivo principal que inicia a aplicação |


## Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina.

> **Download Node.js:** https://nodejs.org/en  
> **Versão recomendada:** 12 ou superior

### Passos para Instalação

**1.** Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

**2.** Entre na pasta do projeto:
```bash
cd Desafio_AgilStore
```

**3.** Execute a aplicação:
```bash
node index.js
```



## Como Usar o Menu Interativo

Ao iniciar a aplicação, você verá o seguinte menu:
```
=============== MENU AgilStore ===============
1 - Adicionar produto
2 - Listar produtos
3 - Atualizar produto
4 - Excluir produto
5 - Buscar produto
0 - Sair

Escolha uma opção:
```

### Exemplo de Fluxo

1. **Adicionar produto:** Escolha a opção `1` e preencha os dados solicitados
2. **Listar produtos:** Escolha a opção `2` e visualize todos os itens cadastrados
3. **Atualizar produto:** Escolha a opção `3`, informe o ID e selecione o campo a modificar
4. **Excluir produto:** Escolha a opção `4` e informe o ID do produto
5. **Buscar produto** Escolha a opção `5` e escolha buscar por nome ou ID.
6. **Sair:** Escolha a opção `0` para encerrar a aplicação

> O sistema guiará você através de cada operação com instruções claras e mensagens de confirmação.



## Observações Técnicas

- Os dados são salvos automaticamente no arquivo `data/produtos.json` após cada operação
- Os IDs são gerados sequencialmente de forma automática
- O sistema valida entradas de dados para garantir a integridade das informações
- Todas as operações fornecem feedback visual no terminal


