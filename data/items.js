const items = [
  // Limpeza (lavanderia) - ID 1
  { id: 101, name: 'Sabão em pó', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 102, name: 'Amaciante', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 103, name: 'Água sanitária', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 104, name: 'Desengordurante', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 105, name: 'Multiuso', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 106, name: 'Lustra móveis', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 107, name: 'Desinfetante', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 108, name: 'Detergente', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 109, name: 'Bombril', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 110, name: 'Bucha', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 111, name: 'Saco de lixo', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 112, name: 'Limpa vidros', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 113, name: 'Álcool', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 114, name: 'Sabonete líquido', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },
  { id: 115, name: 'Sabão barra', categoryId: 1, categoryName: 'Limpeza (lavanderia)' },

  // Dispensa - ID 2
  { id: 201, name: 'Leite', categoryId: 2, categoryName: 'Dispensa' },
  { id: 202, name: 'Refrigerante', categoryId: 2, categoryName: 'Dispensa' },
  { id: 203, name: 'Gatorade', categoryId: 2, categoryName: 'Dispensa' },

  // Armário alto - ID 3
  { id: 301, name: 'Arroz', categoryId: 3, categoryName: 'Armário alto' },
  { id: 302, name: 'Feijão', categoryId: 3, categoryName: 'Armário alto' },
  { id: 303, name: 'Açúcar', categoryId: 3, categoryName: 'Armário alto' },
  { id: 304, name: 'Sázon carnes', categoryId: 3, categoryName: 'Armário alto' },
  { id: 305, name: 'Sázon arroz', categoryId: 3, categoryName: 'Armário alto' },
  { id: 306, name: 'Sázon feijão', categoryId: 3, categoryName: 'Armário alto' },
  { id: 307, name: 'Sázon salada', categoryId: 3, categoryName: 'Armário alto' },
  { id: 308, name: 'Açafrão', categoryId: 3, categoryName: 'Armário alto' },
  { id: 309, name: 'Orégano', categoryId: 3, categoryName: 'Armário alto' },
  { id: 310, name: 'Pimenta do reino', categoryId: 3, categoryName: 'Armário alto' },
  { id: 311, name: 'Colorau', categoryId: 3, categoryName: 'Armário alto' },
  { id: 312, name: 'Páprica', categoryId: 3, categoryName: 'Armário alto' },
  { id: 313, name: 'Páprica doce', categoryId: 3, categoryName: 'Armário alto' },
  { id: 314, name: 'Chimichurri', categoryId: 3, categoryName: 'Armário alto' },
  { id: 315, name: 'Palito de dente', categoryId: 3, categoryName: 'Armário alto' },

  // Armário baixo - ID 4
  { id: 401, name: 'Miojo', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 402, name: 'Farinha de trigo', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 403, name: 'Toddy', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 404, name: 'Café', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 405, name: 'Salgadinho', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 406, name: 'Sucrilhos', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 407, name: 'Creme de leite', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 408, name: 'Molho de tomate', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 409, name: 'Milho', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 410, name: 'Milho de pipoca', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 411, name: 'Feijoada', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 412, name: 'Macarrão', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 413, name: 'Suco de caixinha', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 414, name: 'Tapioca', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 415, name: 'Sardinha', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 416, name: 'Bolacha Doce', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 417, name: 'Bolacha Salgada', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 418, name: 'Leite condensado', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 419, name: 'Farofa', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 420, name: 'Batata Palha', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 421, name: 'Filtro de café', categoryId: 4, categoryName: 'Armário baixo' },
  { id: 422, name: 'Fermento', categoryId: 4, categoryName: 'Armário baixo' },

  // Congelador - ID 5
  { id: 501, name: 'Carne', categoryId: 5, categoryName: 'Congelador' },
  { id: 502, name: 'Carne moída', categoryId: 5, categoryName: 'Congelador' },
  { id: 503, name: 'Peixe', categoryId: 5, categoryName: 'Congelador' },
  { id: 504, name: 'Frango', categoryId: 5, categoryName: 'Congelador' },
  { id: 505, name: 'Lanche micro-ondas', categoryId: 5, categoryName: 'Congelador' },
  { id: 506, name: 'Pizza micro-ondas', categoryId: 5, categoryName: 'Congelador' },
  { id: 507, name: 'Hambúrguer', categoryId: 5, categoryName: 'Congelador' },
  { id: 508, name: 'Salsicha', categoryId: 5, categoryName: 'Congelador' },
  { id: 509, name: 'Linguiça', categoryId: 5, categoryName: 'Congelador' },
  { id: 510, name: 'Calabresa', categoryId: 5, categoryName: 'Congelador' },
  { id: 511, name: 'Bacon', categoryId: 5, categoryName: 'Congelador' },
  { id: 512, name: 'Batata frita', categoryId: 5, categoryName: 'Congelador' },
  { id: 513, name: 'Batata com carinha', categoryId: 5, categoryName: 'Congelador' },

  // Geladeira - ID 6
  { id: 601, name: 'Yakult', categoryId: 6, categoryName: 'Geladeira' },
  { id: 602, name: 'Danone', categoryId: 6, categoryName: 'Geladeira' },
  { id: 603, name: 'Queijo', categoryId: 6, categoryName: 'Geladeira' },
  { id: 604, name: 'Presunto', categoryId: 6, categoryName: 'Geladeira' },
  { id: 605, name: 'Mortadela', categoryId: 6, categoryName: 'Geladeira' },
  { id: 606, name: 'Ovo', categoryId: 6, categoryName: 'Geladeira' },
  { id: 607, name: 'Ketchup', categoryId: 6, categoryName: 'Geladeira' },
  { id: 608, name: 'Suco natural de uva', categoryId: 6, categoryName: 'Geladeira' },
  { id: 609, name: 'Suco natural de laranja', categoryId: 6, categoryName: 'Geladeira' },
  { id: 610, name: 'Banha', categoryId: 6, categoryName: 'Geladeira' },
  { id: 611, name: 'Manteiga', categoryId: 6, categoryName: 'Geladeira' },
  { id: 612, name: 'Requeijão', categoryId: 6, categoryName: 'Geladeira' },
  { id: 613, name: 'Mostarda', categoryId: 6, categoryName: 'Geladeira' },

  // Frutas, Legumes e verduras - ID 7
  { id: 701, name: 'Maçã', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 702, name: 'Banana', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 703, name: 'Melancia', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 704, name: 'Batata', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 705, name: 'Limão', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 706, name: 'Uva verde', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 707, name: 'Mexerica', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 708, name: 'Laranja', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 709, name: 'Pimentão', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 710, name: 'Alface', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 711, name: 'Tomate', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },
  { id: 712, name: 'Batata doce', categoryId: 7, categoryName: 'Frutas, Legumes e verduras' },

  // Base da cozinha - ID 8
  { id: 801, name: 'Óleo', categoryId: 8, categoryName: 'Base da cozinha' },
  { id: 802, name: 'Sal', categoryId: 8, categoryName: 'Base da cozinha' },
  { id: 803, name: 'Alho', categoryId: 8, categoryName: 'Base da cozinha' },
  { id: 804, name: 'Cebola', categoryId: 8, categoryName: 'Base da cozinha' },
  { id: 805, name: 'Alho e sal', categoryId: 8, categoryName: 'Base da cozinha' },
  { id: 806, name: 'Azeite', categoryId: 8, categoryName: 'Base da cozinha' },
  { id: 807, name: 'Vinagre', categoryId: 8, categoryName: 'Base da cozinha' },

  // Sobremesas - ID 9
  { id: 901, name: 'Chocolate', categoryId: 9, categoryName: 'Sobremesas' },
  { id: 902, name: 'Bis', categoryId: 9, categoryName: 'Sobremesas' },
  { id: 903, name: 'Nutella', categoryId: 9, categoryName: 'Sobremesas' },
  { id: 904, name: 'Bala', categoryId: 9, categoryName: 'Sobremesas' },
  { id: 905, name: 'Paçoca', categoryId: 9, categoryName: 'Sobremesas' },

  // Banheiro - ID 10
  { id: 1001, name: 'Papel Higiênico', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1002, name: 'Sabonete', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1003, name: 'Cotonete', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1004, name: 'Pasta adulto', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1005, name: 'Pasta criança', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1006, name: 'Escova de dente', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1007, name: 'Xampu adulto', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1008, name: 'Condicionador adulto', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1009, name: 'Xampu anticaspa', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1010, name: 'Xampu criança', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1011, name: 'Condicionador criança', categoryId: 10, categoryName: 'Banheiro' },
  { id: 1012, name: 'Enxaguante bucal', categoryId: 10, categoryName: 'Banheiro' },

  // Ração - ID 11
  { id: 1101, name: 'Ração Marley', categoryId: 11, categoryName: 'Ração' }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = items;
} else {
  window.items = items;
}