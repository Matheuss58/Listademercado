// Dados
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

// Estado global
let state = {
    selectedCategory: null,
    selectedItems: {},
    customItems: [],
    searchTerm: '',
    showSearchResults: false
};

// Elementos DOM
const elements = {
    homeScreen: document.getElementById('home-screen'),
    categoryScreen: document.getElementById('category-screen'),
    finalScreen: document.getElementById('final-screen'),
    categoriesGrid: document.getElementById('categories-grid'),
    itemsList: document.getElementById('items-list'),
    categorySearch: document.getElementById('category-search'),
    itemSearch: document.getElementById('item-search'),
    categoryTitle: document.getElementById('category-title'),
    finalListContainer: document.getElementById('final-list-container'),
    backButton: document.getElementById('back-button'),
    backFinalButton: document.getElementById('back-final-button'),
    finalizeButton: document.getElementById('finalize-button'),
    generatePdf: document.getElementById('generate-pdf'),
    customItemInput: document.getElementById('custom-item-input'),
    addCustomItem: document.getElementById('add-custom-item'),
    finalCustomItem: document.getElementById('final-custom-item'),
    addFinalItem: document.getElementById('add-final-item'),
    searchResultsContainer: document.getElementById('search-results-container')
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    setupEventListeners();
});

function setupEventListeners() {
    // Navegação
    elements.backButton.addEventListener('click', () => {
        switchScreen('home');
    });

    elements.backFinalButton.addEventListener('click', () => {
        switchScreen('category');
    });

    elements.finalizeButton.addEventListener('click', finalizeList);
    
    // Evento do botão Gerar PDF corrigido
    elements.generatePdf.addEventListener('click', () => {
        generatePDF();
    });

    // Buscas
    elements.categorySearch.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.trim().toLowerCase();
        
        if (state.searchTerm === '') {
            state.showSearchResults = false;
            renderCategories();
        } else {
            state.showSearchResults = true;
            showGlobalItemSearch();
        }
    });

    elements.itemSearch.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        renderItems();
    });

    // Adicionar itens personalizados
    elements.addCustomItem.addEventListener('click', addCustomItem);
    elements.customItemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addCustomItem();
    });

    elements.addFinalItem.addEventListener('click', addFinalCustomItem);
    elements.finalCustomItem.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addFinalCustomItem();
    });
}

function renderCategories() {
    elements.categoriesGrid.innerHTML = '';
    elements.searchResultsContainer.style.display = 'none';
    elements.categoriesGrid.style.display = 'grid';
    
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.setProperty('--category-color', category.color);
        card.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h3>${category.name}</h3>
        `;
        
        card.addEventListener('click', () => {
            state.selectedCategory = category;
            elements.categoryTitle.textContent = category.name;
            state.searchTerm = '';
            elements.itemSearch.value = '';
            renderItems();
            switchScreen('category');
        });
        
        elements.categoriesGrid.appendChild(card);
    });
}

function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    
    switch(screen) {
        case 'home':
            elements.homeScreen.classList.add('active');
            renderCategories();
            break;
        case 'category':
            elements.categoryScreen.classList.add('active');
            break;
        case 'final':
            elements.finalScreen.classList.add('active');
            renderFinalList();
            break;
    }
}

function showGlobalItemSearch() {
    elements.categoriesGrid.style.display = 'none';
    elements.searchResultsContainer.style.display = 'block';
    elements.searchResultsContainer.innerHTML = '<h3>Resultados da Busca</h3>';
    
    if (state.searchTerm === '') {
        elements.searchResultsContainer.innerHTML += '<p>Digite para buscar itens</p>';
        return;
    }
    
    const allItems = [...items, ...state.customItems];
    const filteredItems = allItems.filter(item => 
        item.name.toLowerCase().includes(state.searchTerm)
    );
    
    if (filteredItems.length === 0) {
        elements.searchResultsContainer.innerHTML += '<p>Nenhum item encontrado</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const category = categories.find(c => c.id === item.categoryId) || {};
        const itemElement = document.createElement('div');
        itemElement.className = 'search-result-item';
        itemElement.innerHTML = `
            <div>${item.name}</div>
            <div class="category-name">${category.name || 'Sem categoria'}</div>
        `;
        itemElement.addEventListener('click', () => {
            if (item.categoryId) {
                state.selectedCategory = category;
                switchScreen('category');
                elements.categoryTitle.textContent = category.name;
                elements.itemSearch.value = state.searchTerm;
                state.searchTerm = '';
                elements.categorySearch.value = '';
                renderItems();
            }
        });
        elements.searchResultsContainer.appendChild(itemElement);
    });
}

function renderItems() {
    elements.itemsList.innerHTML = '';
    
    if (!state.selectedCategory) return;
    
    const filtered = items.filter(item => 
        item.categoryId === state.selectedCategory.id &&
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    filtered.forEach(item => {
        createItemCard(item);
    });

    state.customItems
        .filter(item => item.categoryId === state.selectedCategory.id)
        .forEach(item => {
            createItemCard(item, true);
        });
}

function createItemCard(item, isCustom = false) {
    const itemCard = document.createElement('div');
    itemCard.className = `item-card ${isCustom ? 'custom-item' : ''}`;
    
    const quantity = state.selectedItems[item.id] || 0;
    
    itemCard.innerHTML = `
        <span>${item.name}</span>
        <div class="quantity-controls">
            <button class="decrease">-</button>
            <span>${quantity}</span>
            <button class="increase">+</button>
        </div>
    `;
    
    const increaseBtn = itemCard.querySelector('.increase');
    const decreaseBtn = itemCard.querySelector('.decrease');
    
    increaseBtn.addEventListener('click', () => updateQuantity(item.id, quantity + 1));
    decreaseBtn.addEventListener('click', () => updateQuantity(item.id, Math.max(0, quantity - 1)));
    
    elements.itemsList.appendChild(itemCard);
}

function updateQuantity(itemId, quantity) {
    state.selectedItems = {
        ...state.selectedItems,
        [itemId]: quantity
    };
    renderItems();
}

function addCustomItem() {
    const itemName = elements.customItemInput.value.trim();
    if (!itemName) return;
    
    const newItem = {
        id: `custom-${Date.now()}`,
        name: itemName,
        categoryId: state.selectedCategory.id,
        categoryName: state.selectedCategory.name
    };
    
    state.customItems.push(newItem);
    state.selectedItems[newItem.id] = 1;
    
    elements.customItemInput.value = '';
    renderItems();
}

function finalizeList() {
    switchScreen('final');
}

function renderFinalList() {
    elements.finalListContainer.innerHTML = '';
    
    const grouped = {};
    
    Object.keys(state.selectedItems)
        .filter(id => state.selectedItems[id] > 0)
        .forEach(id => {
            const item = [...items, ...state.customItems].find(i => i.id.toString() === id);
            if (!item) return;
            
            const categoryId = item.categoryId || 'extra';
            
            if (!grouped[categoryId]) {
                grouped[categoryId] = {
                    category: categories.find(c => c.id === item.categoryId) || { 
                        id: 'extra', 
                        name: 'Itens Extras', 
                        color: '#9E9E9E' 
                    },
                    items: []
                };
            }
            grouped[categoryId].items.push({
                ...item,
                quantity: state.selectedItems[id]
            });
        });
    
    const sortedCategories = Object.keys(grouped).sort((a, b) => {
        if (a === 'extra') return 1;
        if (b === 'extra') return -1;
        return 0;
    });
    
    sortedCategories.forEach(categoryId => {
        const group = grouped[categoryId];
        const section = document.createElement('div');
        section.className = 'category-section';
        section.style.setProperty('--category-color', group.category.color);
        
        let itemsHTML = '';
        group.items.forEach(item => {
            const isCustom = state.customItems.some(ci => ci.id === item.id);
            itemsHTML += `
                <div class="item-row ${isCustom ? 'custom-item' : ''}">
                    <span>${item.name}</span>
                    <span>x ${item.quantity}</span>
                </div>
            `;
        });
        
        section.innerHTML = `
            <div class="category-title">${group.category.name}</div>
            ${itemsHTML}
        `;
        
        elements.finalListContainer.appendChild(section);
    });
}

function addFinalCustomItem() {
    const itemName = elements.finalCustomItem.value.trim();
    if (!itemName) return;
    
    const newItem = {
        id: `extra-${Date.now()}`,
        name: itemName,
        categoryId: 'extra'
    };
    
    state.customItems.push(newItem);
    state.selectedItems[newItem.id] = 1;
    elements.finalCustomItem.value = '';
    renderFinalList();
}

function generatePDF() {
    try {
        if (typeof window.jspdf === 'undefined') {
            alert('A biblioteca jsPDF não foi carregada corretamente.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // 📏 Configurações gerais
        const margin = 10;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const maxWidth = pageWidth - 2 * margin;
        const columnGap = 8;
        let yStart = 35;
        let currentColumn = 0;

        // 🔥 Cabeçalho
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        doc.text('LISTA DE COMPRAS', pageWidth / 2, 18, { align: 'center' });

        const date = new Date();
        const dateStr = date.toLocaleDateString('pt-BR');
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(`Data: ${dateStr}`, pageWidth / 2, 25, { align: 'center' });

        // 🔍 Ordenar itens na ordem das categorias
        const categoriesOrder = categories.map(c => c.id);
        const allItems = [...items, ...state.customItems];

        const itemsOrdered = allItems
            .filter(item => state.selectedItems[item.id] > 0)
            .sort((a, b) => {
                const aIndex = categoriesOrder.indexOf(a.categoryId);
                const bIndex = categoriesOrder.indexOf(b.categoryId);
                return (aIndex - bIndex) || a.name.localeCompare(b.name);
            });

        if (itemsOrdered.length === 0) {
            doc.text('Nenhum item selecionado na lista.', margin, yStart);
            doc.save('lista_vazia.pdf');
            return;
        }

        const totalItems = itemsOrdered.length;

        // 🧠 🔢 Cálculo inteligente de colunas e tamanhos
        let columnCount = 1;
        let fontSize = 14;
        let checkboxSize = 5.5;
        let lineHeight = 10;

        if (totalItems > 25) {
            columnCount = 2;
            fontSize = 12;
            checkboxSize = 5;
            lineHeight = 9;
        }
        if (totalItems > 50) {
            columnCount = 3;
            fontSize = 10.5;
            checkboxSize = 4.5;
            lineHeight = 8;
        }
        if (totalItems > 85) {
            columnCount = 4;
            fontSize = 9.5;
            checkboxSize = 4;
            lineHeight = 7.5;
        }

        const columnWidth = (maxWidth - (columnGap * (columnCount - 1))) / columnCount;

        let columnX = margin;
        let yPosition = yStart;

        doc.setFontSize(fontSize);

        // 🖍️ Renderizar itens
        for (const item of itemsOrdered) {
            if (yPosition + lineHeight > pageHeight - 15) {
                currentColumn++;
                if (currentColumn >= columnCount) {
                    doc.addPage();
                    currentColumn = 0;
                    yPosition = yStart;
                } else {
                    yPosition = yStart;
                }
                columnX = margin + currentColumn * (columnWidth + columnGap);
            }

            // ✅ Checkbox
            const checkboxY = yPosition - checkboxSize / 2 + 1.5;
            doc.setDrawColor(80);
            doc.rect(columnX, checkboxY, checkboxSize, checkboxSize, 'S');

            // ✍️ Texto alinhado
            const itemText = `${item.name} (x${state.selectedItems[item.id]})`;
            const maxTextWidth = columnWidth - checkboxSize - 4;
            const text = truncateText(doc, itemText, maxTextWidth);

            if (item.id.toString().startsWith('custom') || item.id.toString().startsWith('extra')) {
                doc.setTextColor(120, 80, 0);
            } else {
                doc.setTextColor(0);
            }

            const textY = yPosition + (checkboxSize / 2) - 0.5;
            doc.text(text, columnX + checkboxSize + 3, textY);

            yPosition += lineHeight;
        }

        // 🔻 Rodapé
        doc.setFontSize(8);
        doc.setTextColor(100);
        doc.text('Marque os itens comprados com um X nos quadrados',
            pageWidth / 2, pageHeight - 7, { align: 'center' });

        doc.save(`lista_compras_${dateStr.replace(/\//g, '-')}.pdf`);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        alert('Erro ao gerar PDF: ' + error.message);
    }
}


// 🔧 Função HEX para RGB (opcional, mas útil se quiser colorir futuramente)
function hexToRgb(hex) {
    if (!hex || typeof hex !== 'string') return null;
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
}


// 🔧 Truncar texto que ultrapassa a largura da coluna
function truncateText(doc, text, maxWidth) {
    const textWidth = doc.getTextWidth(text);
    if (textWidth <= maxWidth) return text;
    while (doc.getTextWidth(text + '...') > maxWidth && text.length > 0) {
        text = text.slice(0, -1);
    }
    return text.trim() + '...';
}
