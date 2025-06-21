const CACHE_NAME = 'lista-compras-cache-v2';

// Arquivos estáticos essenciais do seu app da lista de compras
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/data/categories.js',
  '/data/items.js',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

// Evento de instalação do Service Worker, cacheando arquivos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Cacheando arquivos da lista de compras');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Evento de ativação do Service Worker, removendo caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keyList => Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

// Evento fetch para interceptar requisições e responder do cache quando possível
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Retorna arquivo do cache
          return response;
        }
        // Caso não esteja no cache, busca da rede
        return fetch(event.request);
      })
  );
});
