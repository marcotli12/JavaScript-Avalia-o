// AVALIAÇÃO MÓDULO 1 - NOME: Marco Túlio Lima Vitor

const readline = require('readline-sync');

const catalogoProdutos = [
  {
    id: 1,
    nome: "Laptop Gamer Nitro 5",
    categoria: "Eletrônicos",
    preco: 5500.00,
    emEstoque: true
  },
  {
    id: 2,
    nome: "Mouse Logitech G203",
    categoria: "Acessórios",
    preco: 149.90,
    emEstoque: true
  },
  {
    id: 3,
    nome: "Monitor Curvo Samsung 27",
    categoria: "Eletrônicos",
    preco: 1800.00,
    emEstoque: false
  },
  {
    id: 4,
    nome: "Cadeira de Escritório Ergonômica",
    categoria: "Móveis",
    preco: 1200.50,
    emEstoque: true
  },
  {
    id: 5,
    nome: "Teclado Mecânico Redragon",
    categoria: "Acessórios",
    preco: 350.00,
    emEstoque: true
  },
  {
    id: 6,
    nome: "SSD Kingston 1TB",
    categoria: "Eletrônicos",
    preco: 450.00,
    emEstoque: false
  },
  {
    id: 7,
    nome: "Webcam Full HD",
    categoria: "Acessórios",
    preco: 280.00,
    emEstoque: true
  },
  {
    id: 8,
    nome: "Mesa de Escritório em L",
    categoria: "Móveis",
    preco: 799.99,
    emEstoque: true
  },
  {
    id: 9,
    nome: "Pacote 500 Folhas Sulfite A4",
    categoria: "Papelaria",
    preco: 29.90,
    emEstoque: true
  },
  {
    id: 10,
    nome: "Kit Canetas Coloridas",
    categoria: "Papelaria",
    preco: 15.50,
    emEstoque: false
  },
  {
    id: 11,
    nome: "Headset Gamer HyperX",
    categoria: "Acessórios",
    preco: 600.00,
    emEstoque: true
  }
];
//----- SEU CÓDIGO COMEÇA AQUI EMBAIXO -----

function listarPorCategoria(categoriaDesejada){
  const produtosFiltrados = catalogoProdutos.filter(produto => {
    return produto.categoria === categoriaDesejada;
  });
  return produtosFiltrados;
};

const eletronicos = listarPorCategoria("Eletrônicos");

console.log(eletronicos);

function encontrarPorId(idDesejado) {
    try {
        const produtoEncontrado = catalogoProdutos.find(produto => produto.id === idDesejado);

        if (produtoEncontrado === undefined) {
            throw new Error("Produto não encontrado.");
        }

        console.log("Produto Encontrado com sucesso:");
        console.log(produtoEncontrado);
        
        return produtoEncontrado; 

    } catch (erro) {

        console.error(`Erro: ${erro.message}`);
        
        return null;
    }
}

const pesquisaid = encontrarPorId(11);
console.log("-------------");
console.log(pesquisaid);
console.log("-------------");


function listarProdutosEmEstoque() {
    const produtosFormatados = catalogoProdutos
        .filter(produto => produto.emEstoque === true)
        .map(produto => `${produto.nome} - R$ ${produto.preco.toFixed(2).replace( ',')}`);
        
    return produtosFormatados;
}

const produtosEmEstoque = listarProdutosEmEstoque();

console.log("---------------------");
console.log("Produtos em Estoque :");
console.log(produtosEmEstoque);
console.log("---------------------");


function calcularValorEstoquePorCategoria(categoriaDesejada) {
    
    const produtosFiltrados = catalogoProdutos.filter(produto => {
        return produto.emEstoque === true && produto.categoria === categoriaDesejada;
    });

    const valorTotal = produtosFiltrados.reduce((soma, produto) => {
        return soma + produto.preco;
    }, 0); 

    const valorFormatado = valorTotal.toFixed(2).replace('.', ',');

    console.log(`O valor total em estoque da categoria '${categoriaDesejada}' é de R$ ${valorFormatado}`);

    return valorTotal;
}

const Valorproduto = calcularValorEstoquePorCategoria("Eletrônicos");

console.log(`Valor retornado : ${Valorproduto}`);



