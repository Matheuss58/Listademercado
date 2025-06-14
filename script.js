// Dados (seriam importados dos arquivos categories.js e items.js)
// const categories = [...];
// const items = [...];

// Estado global
let state = {
    selectedCategory: null,
    selectedItems: {},
    searchTerm: ''
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
    generatePdf: document.getElementById('generate-pdf')
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
    elements.generatePdf.addEventListener('click', generatePDF);

    // Buscas
    elements.categorySearch.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        renderCategories();
    });

    elements.itemSearch.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        renderItems();
    });
}

// Renderização
function renderCategories() {
    elements.categoriesGrid.innerHTML = '';
    
    const filtered = categories.filter(cat => 
        cat.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    filtered.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <h3>${category.name}</h3>
        `;
        card.addEventListener('click', () => {
            state.selectedCategory = category;
            switchScreen('category');
            elements.categoryTitle.textContent = category.name;
            renderItems();
        });
        elements.categoriesGrid.appendChild(card);
    });
}

function renderItems() {
    elements.itemsList.innerHTML = '';
    
    const filtered = items.filter(item => 
        item.categoryId === state.selectedCategory.id &&
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    filtered.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
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
    });
}

function renderFinalList() {
    elements.finalListContainer.innerHTML = '';
    
    // Agrupar itens por categoria
    const grouped = Object.keys(state.selectedItems)
        .filter(id => state.selectedItems[id] > 0)
        .reduce((acc, id) => {
            const item = items.find(i => i.id.toString() === id);
            if (!acc[item.categoryId]) {
                acc[item.categoryId] = {
                    category: categories.find(c => c.id === item.categoryId),
                    items: []
                };
            }
            acc[item.categoryId].items.push({
                ...item,
                quantity: state.selectedItems[id]
            });
            return acc;
        }, {});
    
    // Renderizar
    for (const categoryId in grouped) {
        const group = grouped[categoryId];
        const section = document.createElement('div');
        section.className = 'category-section';
        
        let itemsHTML = '';
        group.items.forEach(item => {
            itemsHTML += `
                <div class="item-row">
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
    }
}

// Lógica
function updateQuantity(itemId, quantity) {
    state.selectedItems = {
        ...state.selectedItems,
        [itemId]: quantity
    };
    renderItems();
}

function finalizeList() {
    renderFinalList();
    switchScreen('final');
}

function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    switch(screen) {
        case 'home':
            state.searchTerm = '';
            elements.categorySearch.value = '';
            elements.homeScreen.classList.add('active');
            break;
        case 'category':
            state.searchTerm = '';
            elements.itemSearch.value = '';
            elements.categoryScreen.classList.add('active');
            break;
        case 'final':
            elements.finalScreen.classList.add('active');
            break;
    }
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Título
    doc.setFontSize(20);
    doc.text('Lista de Compras', 105, 15, { align: 'center' });
    
    // Conteúdo
    let y = 30;
    const grouped = {};
    
    // Agrupar itens (mesma lógica do renderFinalList)
    Object.keys(state.selectedItems)
        .filter(id => state.selectedItems[id] > 0)
        .forEach(id => {
            const item = items.find(i => i.id.toString() === id);
            if (!grouped[item.categoryId]) {
                grouped[item.categoryId] = {
                    category: categories.find(c => c.id === item.categoryId),
                    items: []
                };
            }
            grouped[item.categoryId].items.push({
                ...item,
                quantity: state.selectedItems[id]
            });
        });
    
    // Adicionar ao PDF
    for (const categoryId in grouped) {
        const group = grouped[categoryId];
        
        // Categoria
        doc.setFontSize(14);
        doc.setTextColor(0, 100, 0);
        doc.text(group.category.name, 14, y);
        y += 10;
        
        // Itens
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        
        group.items.forEach(item => {
            doc.text(`- ${item.name}`, 20, y);
            doc.text(`x ${item.quantity}`, 180, y);
            y += 7;
        });
        
        y += 10;
    }
    
    // Rodapé
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Gerado em ${new Date().toLocaleDateString()}`, 105, 280, { align: 'center' });
    
    // Salvar
    doc.save('lista_de_compras.pdf');
}