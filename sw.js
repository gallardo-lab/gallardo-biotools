// Gallardo BioTools — Service Worker v9
const CACHE_NAME = 'gallardo-biotools-v23';

const ASSETS = [
  'index.html',
  './',
  './biolab/index.html',
  './biolab/index_en.html',
  './tools/mapa-misiones.html',
  './tools/competencia-grupal.html',
  './tools/competencia-grupal-replicacion-adn.html',
  './citopolis/index.html',
  './citopolis/main.html',
  './citopolis/parp.html',
  './citopolis/inmuno.html',
  './citopolis/p53.html',
  './citopolis/main_en.html',
  './nanomision/index.html',
  './nanomision/index_en.html',
  './tools/oro-caballo-troya.html',
  './tools/flashcards-lab-bioquimica-P1-P14.html',
  './tools/dna-helix.html',
  './biomol/estructura.html',
  './biomol/replicacion.html',
  './biomol/transcripcion.html',
  './biomol/traduccion.html',
  './biomol/mutaciones.html',
  './biomol/Bioinformatica_Medica/HBB/quiz_HBB.html',
  './biomol/Bioinformatica_Medica/HBB/pipeline_HBB.html',
  './tools/cuestionario_P11-P14.html',
  './tools/flashcards-nanotheranostics.html',
  './tools/cuestionario-nanotheranostics.html',
  './tools/flashcards-np-caso.html',
  './tools/cuestionario-np-caso.html',
  './tools/primer-designer-movil.html',
  './tools/primer-designer.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './Gallardo-Biotools-logo.png'
];

// Install: cache all game files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML (get updates fast), cache-first for assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // HTML files: network first, fall back to cache
  if (event.request.destination === 'document' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Everything else: cache first, fall back to network
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
