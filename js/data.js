/* Catálogo de itens da boneca.
   Cada item tem: id, nome, grupo de cores (palette) e chave de arte usada pelo renderizador. */

const SKIN_TONES = [
  "#f7d9c4", "#efc3a4", "#e0a97f", "#c98a5f", "#a8663f", "#7d4a2c"
];

const HAIR_COLORS = [
  "#1b1410", "#3d2418", "#6b3a1c", "#a5611f", "#d9a441", "#e8d3a0",
  "#b23a48", "#e05a8a", "#7a4bd0", "#3aa8d9", "#3fbf7f", "#d9d9e3", "#f2f2f7"
];

const EYE_COLORS = ["#4a2c1a", "#6b4a2a", "#2f6b3f", "#3a6fb5", "#7a4bd0", "#3a3a4a"];

const CLOTH_COLORS = [
  "#ff6fb5", "#ff9f68", "#ffe066", "#8ce99a", "#7ad7ff", "#b197fc",
  "#ffffff", "#f2f2f7", "#cbd5e1", "#495057", "#1f2933", "#e03131",
  "#f76707", "#2f9e44", "#1098ad", "#7048e8", "#c2255c", "#a61e4d"
];

const METAL_COLORS = ["#ffd43b", "#f8f9fa", "#d4af37", "#c0c6cc", "#e599f7", "#63e6be"];

const SCARVES = ["#e03131", "#1c7ed6", "#2f9e44", "#f76707", "#7048e8", "#f2f2f7"];

const SCENES = [
  { id: "quarto",  nome: "Quarto",     art: "quarto" },
  { id: "praia",   nome: "Praia",      art: "praia" },
  { id: "cidade",  nome: "Cidade",     art: "cidade" },
  { id: "festa",   nome: "Festa",      art: "festa" },
  { id: "escola",  nome: "Escola",     art: "escola" },
  { id: "floresta",nome: "Floresta",   art: "floresta" },
  { id: "casa",    nome: "Cozinha",    art: "casa" },
  { id: "nave",    nome: "Espaço",     art: "nave" }
];

const HAIRSTYLES = [
  { id: "longo",      nome: "Longo reto",     art: "longo" },
  { id: "cacheado",   nome: "Cacheado",       art: "cacheado" },
  { id: "coque",      nome: "Coque",          art: "coque" },
  { id: "maria_chata",nome: "Maria chata",    art: "maria_chata" },
  { id: "rabo",       nome: "Rabo de cavalo", art: "rabo" },
  { id: "curto",      nome: "Curto",          art: "curto" },
  { id: "trancas",    nome: "Tranças",        art: "trancas" },
  { id: "afro",       nome: "Afro",           art: "afro" }
];

const TOPS = [
  { id: "regata",   nome: "Regata",        art: "regata" },
  { id: "camiseta", nome: "Camiseta",      art: "camiseta" },
  { id: "blusa",    nome: "Blusa",         art: "blusa" },
  { id: "crop",     nome: "Crop",          art: "crop" },
  { id: "gola_alta",nome: "Gola alta",     art: "gola_alta" },
  { id: "saia_midi",nome: "Vestido midi",  art: "saia_midi", dress: true },
  { id: "vestido_curto", nome: "Vestido curto", art: "vestido_curto", dress: true },
  { id: "terno",    nome: "Terninho",      art: "terninho" }
];

const BOTTOMS = [
  { id: "saia",    nome: "Saia plissada", art: "saia" },
  { id: "calca",   nome: "Calça",         art: "calca" },
  { id: "jeans",   nome: "Jeans",         art: "jeans" },
  { id: "bermuda", nome: "Bermuda",       art: "bermuda" },
  { id: "short",   nome: "Short",         art: "short" },
  { id: "saia_longa", nome: "Saia longa", art: "saia_longa" }
];

const COATS = [
  { id: "jaqueta",  nome: "Jaqueta jeans",  art: "jaqueta" },
  { id: "trench",   nome: "Trench coat",    art: "trench" },
  { id: "blazer",   nome: "Blazer",         art: "blazer" },
  { id: "casaco_longo", nome: "Casaco longo", art: "casaco_longo" },
  { id: "cardigan", nome: "Cardigan",       art: "cardigan" },
  { id: "nenhuma",  nome: "Sem casaco",     art: null, none: true }
];

const SHOES = [
  { id: "tenis",     nome: "Tênis",       art: "tenis" },
  { id: "sapatilha", nome: "Sapatilha",   art: "sapatilha" },
  { id: "sandalia",  nome: "Sandália",    art: "sandalia" },
  { id: "bota",      nome: "Bota",        art: "bota" },
  { id: "taco",      nome: "Taco alto",   art: "taco" },
  { id: "nenhum",    nome: "Descalça",    art: null, none: true }
];

const NECKLACES = [
  { id: "colar_perolas", nome: "Colar de pérolas", art: "colar_perolas" },
  { id: "pingente",     nome: "Pingente",         art: "pingente" },
  { id: "choker",       nome: "Choker",           art: "choker" },
  { id: "corrente",     nome: "Corrente fina",   art: "corrente" },
  { id: "gola_pedra",   nome: "Gola de pedra",    art: "gola_pedra" },
  { id: "nenhum",       nome: "Sem colar",       art: null, none: true }
];

const EARRINGS = [
  { id: "argola",   nome: "Argolas",        art: "argola" },
  { id: "pendente", nome: "Pendentes",      art: "pendente" },
  { id: "cravo",    nome: "Cravos",         art: "cravo" },
  { id: "festa",    nome: "Brinco festa",   art: "festa" },
  { id: "gota",     nome: "Gota de cristal", art: "gota" },
  { id: "nenhum",   nome: "Sem brinco",     art: null, none: true }
];

const MAKEUP = [
  { id: "nenhuma",  nome: "Natural",     art: null, none: true },
  { id: "labial",   nome: "Batom",       art: "labial" },
  { id: "base",     nome: "Base",        art: "base" },
  { id: "blush",    nome: "Blush",       art: "blush" },
  { id: "delineado",nome: "Delineado",   art: "delineado" },
  { id: "espiral",  nome: "Maquiagem artistic", art: "espiral" }
];

const HAIRDECOR = [
  { id: "laço",    nome: "Laço",      art: "laco" },
  { id: "flor",    nome: "Florzinha",  art: "flor" },
  { id: "coroa",   nome: "Coroa",     art: "coroa" },
  { id: "chapeu",  nome: "Chapéu",    art: "chapeu" },
  { id: "oculos",  nome: "Óculos",    art: "oculos" },
  { id: "nenhum",  nome: "Nada",      art: null, none: true }
];

const CATEGORIES = [
  { key: "cabelo",    nome: "Cabelo",     type: "pick",  list: HAIRSTYLES, colors: HAIR_COLORS,  colorLabel: "Cor do cabelo" },
  { key: "pele",      nome: "Pele",       type: "skin" },
  { key: "olhos",     nome: "Olhos",      type: "eye"   },
  { key: "roupa",     nome: "Roupa",      type: "multi", list: TOPS,       colors: CLOTH_COLORS, colorLabel: "Cor da roupa" },
  { key: "calca",     nome: "Calça / Saia", type: "multi", list: BOTTOMS,  colors: CLOTH_COLORS, colorLabel: "Cor" },
  { key: "casaco",    nome: "Casaco",     type: "multi", list: COATS,      colors: CLOTH_COLORS, colorLabel: "Cor do casaco" },
  { key: "sapato",    nome: "Sapato",     type: "multi", list: SHOES,      colors: CLOTH_COLORS, colorLabel: "Cor" },
  { key: "colar",     nome: "Colar",      type: "multi", list: NECKLACES,  colors: METAL_COLORS, colorLabel: "Metal" },
  { key: "brinco",    nome: "Brinco",     type: "multi", list: EARRINGS,   colors: METAL_COLORS, colorLabel: "Metal" },
  { key: "maquiagem", nome: "Maquiagem",  type: "multi", list: MAKEUP,     colors: CLOTH_COLORS, colorLabel: "Cor" },
  { key: "acessorio", nome: "Cabeça",     type: "multi", list: HAIRDECOR,  colors: HAIR_COLORS, colorLabel: "Cor" },
  { key: "cenario",   nome: "Cenário",    type: "multi", list: SCENES,     colors: null }
];
