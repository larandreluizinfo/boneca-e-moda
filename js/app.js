/* Estado, interface e interações. */

const DEFAULT_STATE = {
  skin: SKIN_TONES[1],
  hairColor: HAIR_COLORS[1],
  eyeColor: EYE_COLORS[0],
  hair: HAIRSTYLES[0],
  top: TOPS[1],
  bottom: BOTTOMS[0],
  coat: COATS[5],
  shoes: SHOES[0],
  necklace: NECKLACES[5],
  earrings: EARRINGS[4],
  makeup: MAKEUP[0],
  headwear: HAIRDECOR[0],
  scene: SCENES[0],
  colors: {
    roupa: "#ff6fb5",
    calca: "#495057",
    casaco: "#7ad7ff",
    sapato: "#ffffff",
    colar: "#ffd43b",
    brinco: "#ffd43b",
    acessorio: "#ff6fb5",
    maquiagem: "#e03131"
  }
};

let state = JSON.parse(JSON.stringify(DEFAULT_STATE));
let tabAtual = "cabelo";

const el = {
  scene: document.getElementById("scene"),
  tabs: document.getElementById("tabs"),
  items: document.getElementById("items"),
  swatches: document.getElementById("swatches"),
  toast: document.getElementById("toast")
};

function salvarEstado(){ localStorage.setItem("boneca_moda", JSON.stringify(state)); }

function carregarEstado(){
  try{
    const s = localStorage.getItem("boneca_moda");
    if(!s) return;
    const d = JSON.parse(s);
    Object.assign(state, d, { colors: Object.assign({}, DEFAULT_STATE.colors, d.colors) });
  }catch(e){ /* estado inválido: ignora */ }
}

function aviso(msg){
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  clearTimeout(aviso._t);
  aviso._t = setTimeout(() => el.toast.classList.remove("show"), 1800);
}

/* ---------------- desenho ---------------- */

function desenhar(){
  el.scene.innerHTML = sceneSVG(state.scene.id) + renderDoll(state);
}

const CROPS = {
  cabelo: "90 80 220 230",
  olhos: "130 110 140 110",
  pele: "140 90 120 120",
  roupa: "80 180 240 300",
  calca: "100 290 200 370",
  casaco: "80 180 240 340",
  sapato: "100 470 200 190",
  colar: "150 190 100 80",
  brinco: "120 150 160 60",
  acessorio: "90 60 220 160",
  maquiagem: "130 120 140 100",
  cenario: "0 0 400 700"
};

function miniatura(catKey, item){
  const base = JSON.parse(JSON.stringify(DEFAULT_STATE));
  base.scene = SCENES.find(s => s.id === "cidade") || SCENES[0];
  base.hair = HAIRSTYLES[0];
  base.top = TOPS[1];
  base.bottom = BOTTOMS[0];
  base.colors = Object.assign({}, state.colors);

  base.headwear = HAIRDECOR[5];

  if(catKey === "cabelo"){ base.hair = item; base.hairColor = state.hairColor; }
  else if(catKey === "pele"){ base.skin = item.id; }
  else if(catKey === "olhos"){ base.eyeColor = item.id; }
  else if(catKey === "cenario"){ base.scene = item; }
  else {
    base[catKey] = item;
    if(catKey !== "casaco") base.coat = COATS[5];
    if(catKey !== "colar") base.necklace = NECKLACES[5];
    if(catKey !== "brinco") base.earrings = EARRINGS[5];
    if(catKey !== "sapato") base.shoes = SHOES[0];
    if(catKey !== "maquiagem") base.makeup = MAKEUP[0];
  }
  if(catKey === "cenario"){
    return `<svg viewBox="${CROPS.cenario}">${sceneSVG(item.id)}${renderDoll(base)}</svg>`;
  }
  if(catKey === "pele"){
    return `<svg viewBox="${CROPS.pele}">${renderDoll(base)}</svg>`;
  }
  if(catKey === "olhos"){
    return `<svg viewBox="${CROPS.olhos}">${renderDoll(base)}</svg>`;
  }
  return `<svg viewBox="${CROPS[catKey] || CROPS.roupa}">${renderDoll(base)}</svg>`;
}

/* ---------------- interface ---------------- */

function itemAtual(cat){
  return state[cat.key];
}

function listaDaCategoria(cat){
  if(cat.type === "skin") return SKIN_TONES.map(t => ({ id:t, nome:t }));
  if(cat.type === "eye")  return EYE_COLORS.map(t => ({ id:t, nome:t }));
  if(cat.key === "cenario") return SCENES;
  return cat.list;
}

function desenharAba(){
  const cat = CATEGORIES.find(c => c.key === tabAtual);
  el.tabs.innerHTML = CATEGORIES.map(c =>
    `<button class="tab ${c.key === tabAtual ? "active" : ""}" data-tab="${c.key}">${c.nome}</button>`
  ).join("");

  const lista = listaDaCategoria(cat);
  el.items.innerHTML = lista.map(it => {
    const sel = cat.type === "multi" || cat.type === "pick"
      ? itemAtual(cat) && itemAtual(cat).id === it.id
      : state[cat.key] === it.id;
    const thumb = (cat.type === "multi" && it.none && !it.art)
      ? `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="none" stroke="#c9a9dd" stroke-width="4" stroke-dasharray="8 8"/></svg>`
      : (cat.key === "cenario"
          ? `<svg viewBox="0 0 100 175">${sceneSVG(it.art)}</svg>`
          : miniatura(cat.key, it));
    return `<div class="item ${sel ? "active" : ""}" data-id="${it.id}">
      <div class="thumb">${thumb}</div><div class="name">${it.nome}</div></div>`;
  }).join("");

  desenharCores(cat);
}

function desenharCores(cat){
  if(cat.type === "skin"){
    el.swatches.innerHTML = `<span class="lbl">Tom de pele</span>` + SKIN_TONES.map(t =>
      `<div class="swatch ${state.skin === t ? "active" : ""}" data-swatch="skin" data-color="${t}" style="background:${t}"></div>`
    ).join("");
  } else if(cat.type === "eye"){
    el.swatches.innerHTML = `<span class="lbl">Cor dos olhos</span>` + EYE_COLORS.map(t =>
      `<div class="swatch ${state.eyeColor === t ? "active" : ""}" data-swatch="eye" data-color="${t}" style="background:${t}"></div>`
    ).join("");
  } else if(cat.type === "multi" && cat.colors){
    const atual = state.colors[tabAtual] || cat.colors[0];
    el.swatches.innerHTML = `<span class="lbl">${cat.colorLabel}</span>` + cat.colors.map(t =>
      `<div class="swatch ${atual === t ? "active" : ""}" data-swatch="item" data-color="${t}" style="background:${t}"></div>`
    ).join("");
  } else if(cat.type === "pick"){
    el.swatches.innerHTML = `<span class="lbl">${cat.colorLabel}</span>` + cat.colors.map(t =>
      `<div class="swatch ${state.hairColor === t ? "active" : ""}" data-swatch="hair" data-color="${t}" style="background:${t}"></div>`
    ).join("");
  } else {
    el.swatches.innerHTML = "";
  }
}

/* ---------------- eventos ---------------- */

el.tabs.addEventListener("click", e => {
  const b = e.target.closest(".tab");
  if(!b) return;
  tabAtual = b.dataset.tab;
  desenharAba();
});

el.items.addEventListener("click", e => {
  const card = e.target.closest(".item");
  if(!card) return;
  const cat = CATEGORIES.find(c => c.key === tabAtual);
  const lista = listaDaCategoria(cat);
  const it = lista.find(x => x.id === card.dataset.id);
  if(!it) return;

  if(cat.type === "skin") state.skin = it.id;
  else if(cat.type === "eye") state.eyeColor = it.id;
  else state[cat.key] = it;

  desenhar();
  desenharAba();
  salvarEstado();
});

el.swatches.addEventListener("click", e => {
  const s = e.target.closest(".swatch");
  if(!s) return;
  const cor = s.dataset.color;
  if(s.dataset.swatch === "skin") state.skin = cor;
  else if(s.dataset.swatch === "eye") state.eyeColor = cor;
  else if(s.dataset.swatch === "hair") state.hairColor = cor;
  else state.colors[tabAtual] = cor;
  desenhar();
  desenharAba();
  salvarEstado();
});

function sorteio(a){ return a[Math.floor(Math.random() * a.length)]; }

document.getElementById("btnRandom").addEventListener("click", () => {
  state.skin = sorteio(SKIN_TONES);
  state.hairColor = sorteio(HAIR_COLORS);
  state.eyeColor = sorteio(EYE_COLORS);
  state.hair = sorteio(HAIRSTYLES);
  state.top = sorteio(TOPS);
  state.bottom = sorteio(BOTTOMS);
  state.coat = sorteio(COATS);
  state.shoes = sorteio(SHOES);
  state.necklace = sorteio(NECKLACES);
  state.earrings = sorteio(EARRINGS);
  state.makeup = sorteio(MAKEUP);
  state.headwear = sorteio(HAIRDECOR);
  state.scene = sorteio(SCENES);
  Object.keys(state.colors).forEach(k => state.colors[k] = sorteio(CLOTH_COLORS));
  desenhar(); desenharAba(); salvarEstado();
  aviso("Look novo!");
});

document.getElementById("btnReset").addEventListener("click", () => {
  state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  desenhar(); desenharAba(); salvarEstado();
  aviso("Boneca sem roupas");
});

document.getElementById("btnSave").addEventListener("click", () => {
  salvarEstado(); aviso("Look salvo!");
});

document.getElementById("btnLoad").addEventListener("click", () => {
  carregarEstado(); desenhar(); desenharAba();
  aviso("Look carregado!");
});

document.getElementById("btnPose").addEventListener("click", () => {
  const svg = el.scene;
  const dados = new XMLSerializer().serializeToString(svg);
  const img = new Image();
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 400 700">' + dados + '</svg>'
  );
  img.onload = () => {
    const cv = document.createElement("canvas");
    cv.width = 800; cv.height = 1400;
    const ctx = cv.getContext("2d");
    ctx.drawImage(img, 0, 0, 800, 1400);
    const a = document.createElement("a");
    a.download = "minha-boneca.png";
    a.href = cv.toDataURL("image/png");
    a.click();
    aviso("Foto salva!");
  };
  img.src = url;
});

/* ---------------- início ---------------- */
carregarEstado();
desenhar();
desenharAba();
