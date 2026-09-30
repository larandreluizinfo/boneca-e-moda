global.window = {};
global.localStorage = { getItem: () => null, setItem: () => {} };
global.document = {
  getElementById: () => ({ innerHTML: "", addEventListener: () => {}, classList: { add: () => {}, remove: () => {} } }),
  createElement: () => ({}),
  querySelectorAll: () => []
};
const fs = require('fs');
const vm = require('vm');
const code = ['js/data.js', 'js/scenes.js', 'js/doll.js', 'js/app.js'].map(f => fs.readFileSync(f, 'utf8')).join('\n');
vm.runInThisContext(code);

let total = 0;
CATEGORIES.forEach(c => {
  const l = c.type === 'skin' ? SKIN_TONES : c.type === 'eye' ? EYE_COLORS : c.list;
  total += l.length;
  console.log(c.key.padEnd(11), l.length);
});
console.log('total de itens:', total);

const stage = document.getElementById('scene');
function check(label) {
  stage.innerHTML = sceneSVG(state.scene.id) + renderDoll(state);
  if (typeof stage.innerHTML !== 'string' || stage.innerHTML.length < 200) throw new Error('SVG vazio em ' + label);
  if (/undefined|NaN/.test(stage.innerHTML)) throw new Error('valor invalido em ' + label);
}
check('padrao');
['longo','cacheado','coque','maria_chata','rabo','curto','trancas','afro'].forEach(h => { state.hair = HAIRSTYLES.find(x => x.id === h); check('cabelo ' + h); });
TOPS.forEach(t => { state.top = t; check('roupa ' + t.id); });
BOTTOMS.forEach(t => { state.bottom = t; check('calca ' + t.id); });
COATS.forEach(t => { state.coat = t; check('casaco ' + t.id); });
SHOES.forEach(t => { state.shoes = t; check('sapato ' + t.id); });
NECKLACES.forEach(t => { state.necklace = t; check('colar ' + t.id); });
EARRINGS.forEach(t => { state.earrings = t; check('brinco ' + t.id); });
MAKEUP.forEach(t => { state.makeup = t; check('maquiagem ' + t.id); });
HAIRDECOR.forEach(t => { state.headwear = t; check('cabeca ' + t.id); });
SCENES.forEach(s => { stage.innerHTML = sceneSVG(s.art) + renderDoll(state); if (stage.innerHTML.length < 200) throw new Error('cena vazia ' + s.id); });
SKIN_TONES.forEach(s => { state.skin = s; check('pele'); });
HAIR_COLORS.forEach(c => { state.hairColor = c; check('cor cabelo'); });
EYE_COLORS.forEach(c => { state.eyeColor = c; check('olhos'); });
CATEGORIES.forEach(c => { tabAtual = c.key; try { desenharAba(); } catch (e) { throw new Error('aba ' + c.key + ': ' + e.message); } });
console.log('OK - todos os itens, cores, cenas e abas renderizam sem erro');
console.log('tamanho do SVG principal:', stage.innerHTML.length, 'chars');
