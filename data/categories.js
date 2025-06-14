const categories = [
  {
    id: 1,
    name: 'Limpeza (lavanderia)',
    color: '#00BCD4',
    icon: '🧼'
  },
  {
    id: 2,
    name: 'Dispensa',
    color: '#8D6E63',
    icon: '🥫'
  },
  {
    id: 3,
    name: 'Armário alto',
    color: '#795548',
    icon: '🧂'
  },
  {
    id: 4,
    name: 'Armário baixo',
    color: '#A1887F',
    icon: '🍝'
  },
  {
    id: 5,
    name: 'Congelador',
    color: '#03A9F4',
    icon: '❄️'
  },
  {
    id: 6,
    name: 'Geladeira',
    color: '#4FC3F7',
    icon: '🧊'
  },
  {
    id: 7,
    name: 'Frutas, Legumes e verduras',
    color: '#4CAF50',
    icon: '🥦'
  },
  {
    id: 8,
    name: 'Base da cozinha',
    color: '#CDDC39',
    icon: '🧄'
  },
  {
    id: 9,
    name: 'Sobremesas',
    color: '#9C27B0',
    icon: '🍫'
  },
  {
    id: 10,
    name: 'Banheiro',
    color: '#E91E63',
    icon: '🚽'
  },
  {
    id: 11,
    name: 'Ração',
    color: '#673AB7',
    icon: '🐕'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = categories;
} else {
  window.categories = categories;
}