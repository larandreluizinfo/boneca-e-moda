/* Renderizador da boneca em SVG.
   Altura da cena: 700. Cabeça em y≈150, corpo até y≈520, pés em y≈630. */

const SK = { /* silhuetas do corpo */
  torso: "M118 232 C118 216 138 206 160 204 L240 204 C262 206 282 216 282 232 L272 300 C268 330 264 350 266 366 L134 366 C136 350 132 330 128 300 Z",
  legL:  "M146 358 C142 430 140 500 142 566",
  legR:  "M254 358 C258 430 260 500 258 566",
  armL:  "M126 230 C112 268 108 312 118 348",
  armR:  "M274 230 C288 268 292 312 282 348",
  neck:  "M182 186 L182 208 C182 216 218 216 218 208 L218 186 Z"
};

const FACE_POS = { eyeL: 178, eyeR: 222, eyeY: 158, mouthY: 196, blushY: 180 };

/* ---------- cabelo ---------- */
const P = (...ds) => ds.map(d => `<path d="${d}"/>`).join("");
const C = (...cs) => cs.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join("");

const HAIR_ART = {
  longo: {
    back: c => P(
      "M200 96 C130 96 96 152 100 214 C103 268 96 300 84 336 C128 322 272 322 316 336 C304 300 297 268 300 214 C304 152 270 96 200 96Z",
      "M96 236 C74 268 72 312 84 344 L104 336 C92 306 92 268 104 240Z",
      "M304 236 C326 268 328 312 316 344 L296 336 C308 306 308 268 296 240Z"
    ),
    front: c => P(
      "M200 100 C146 100 116 128 110 172 C128 144 152 132 172 140 C186 124 214 124 228 140 C250 130 274 144 290 172 C284 128 254 100 200 100Z",
      "M108 168 C100 208 100 250 108 286 C118 246 120 206 122 176Z",
      "M292 168 C300 208 300 250 292 286 C282 246 280 206 278 176Z"
    )
  },
  cacheado: {
    back: c => C([200,104,58],[150,130,44],[250,130,44],[130,186,42],[270,186,42],
                 [142,240,44],[258,240,44],[168,286,40],[232,286,40],[200,116,60]),
    front: c => P("M200 98 C150 98 118 128 112 168 C132 142 156 132 176 142 C190 126 210 126 224 142 C246 132 270 142 288 168 C282 128 250 98 200 98Z")
      + C([150,124,26],[200,112,30],[250,124,26],[126,152,20],[274,152,20])
  },
  coque: {
    back: c => C([200,70,30]) + P("M200 96 C140 96 108 132 106 178 C130 146 158 132 200 132 C242 132 270 146 294 178 C292 132 260 96 200 96Z"),
    front: c => P("M200 96 C150 96 116 124 110 164 C132 140 158 130 180 138 C192 124 208 124 220 138 C242 130 268 140 290 164 C284 124 250 96 200 96Z")
  },
  maria_chata: {
    back: c => P(
      "M200 96 C136 96 104 134 104 186 C104 232 100 282 96 330 C128 320 272 320 304 330 C300 282 296 232 296 186 C296 134 264 96 200 96Z",
      "M110 214 C86 260 84 316 96 356 L118 350 C106 314 106 262 122 220Z",
      "M290 214 C314 260 316 316 304 356 L282 350 C294 314 294 262 278 220Z"
    ) + C([100,360,10],[300,360,10]),
    front: c => P("M200 96 C148 96 114 126 108 170 C132 140 160 130 182 140 C194 122 214 122 226 140 C250 130 276 140 292 170 C286 126 252 96 200 96Z")
  },
  rabo: {
    back: c => P(
      "M200 96 C138 96 108 134 108 186 C108 218 104 240 100 258 C132 246 268 246 300 258 C296 240 292 218 292 186 C292 134 262 96 200 96Z",
      "M292 180 C330 196 336 280 312 330 C330 268 314 216 286 202Z"
    ),
    front: c => P("M200 96 C148 96 116 126 110 166 C134 138 160 130 182 140 C194 122 212 122 222 138 C246 128 272 138 290 166 C284 126 252 96 200 96Z")
  },
  curto: {
    back: c => P("M200 96 C140 96 108 132 108 180 C108 208 112 224 116 236 C130 208 270 208 284 236 C288 224 292 208 292 180 C292 132 260 96 200 96Z"),
    front: c => P("M200 94 C146 94 112 126 108 172 C136 140 164 128 186 140 C200 122 220 124 232 140 C256 132 278 142 292 172 C288 126 254 94 200 94Z")
  },
  trancas: {
    back: c => P(
      "M200 96 C140 96 108 134 108 186 C108 230 104 280 100 326 C130 316 270 316 300 326 C296 280 292 230 292 186 C292 134 260 96 200 96Z",
      "M112 230 C92 280 92 340 104 386 L128 380 C116 336 116 282 130 236Z",
      "M288 230 C308 280 308 340 296 386 L272 380 C284 336 284 282 270 236Z"
    ) + C([116,392,9],[284,392,9]),
    front: c => P("M200 96 C150 96 118 124 112 166 C136 140 160 130 180 140 C192 124 210 124 220 140 C244 130 268 140 288 166 C282 124 250 96 200 96Z")
  },
  afro: {
    back: c => C([200,164,86],[150,150,44],[250,150,44]),
    front: c => P("M200 110 C160 110 132 132 126 168 C146 146 170 138 190 144 C204 130 222 132 232 144 C256 138 278 148 292 172 C288 132 254 110 200 110Z")
  }
};

/* ---------- roupas de cima / vestidos ---------- */
const TOP_ART = {
  regata: c => `<path d="M148 208 C156 200 168 204 176 216 C186 222 214 222 224 216 C232 204 244 200 252 208 C258 232 256 280 250 314 C224 322 176 322 150 314 C144 280 142 232 148 208Z"/>`,
  camiseta: c => `<path d="M136 216 C146 204 160 200 172 206 C184 214 216 214 228 206 C240 200 254 204 264 216 C272 240 272 284 266 320 C240 330 160 330 134 320 C128 284 128 240 136 216Z"/>`+
    `<path d="M136 216 C130 234 128 250 130 262 L146 258 C146 244 148 230 152 220Z"/>`+
    `<path d="M264 216 C270 234 272 250 270 262 L254 258 C254 244 252 230 248 220Z"/>`,
  blusa: c => `<path d="M132 214 C146 200 162 198 174 208 C188 220 212 220 226 208 C238 198 254 200 268 214 C280 244 278 300 270 330 C246 342 154 342 130 330 C122 300 120 244 132 214Z"/>`+
    `<path d="M170 210 C182 226 218 226 230 210" stroke="#ffffff" stroke-width="4" fill="none" opacity=".6"/>`,
  crop: c => `<path d="M152 212 C160 206 170 208 178 218 C188 224 212 224 222 218 C230 208 240 206 248 212 C252 234 250 272 246 300 C222 308 178 308 154 300 C150 272 148 234 152 212Z"/>`,
  gola_alta: c => `<path d="M140 218 C150 200 172 190 200 190 C228 190 250 200 260 218 C272 250 270 300 262 330 C238 340 162 340 138 330 C130 300 128 250 140 218Z"/>`+
    `<path d="M170 192 C182 208 218 208 230 192 L236 206 C222 222 178 222 164 206Z" opacity=".7"/>`,
  saia_midi: c => `<path d="M138 214 C150 202 164 200 176 210 C190 220 210 220 224 210 C236 200 250 202 262 214 C272 250 268 300 258 348 C282 400 296 470 300 520 C240 540 160 540 100 520 C104 470 118 400 142 348 C132 300 128 250 138 214Z"/>`,
  vestido_curto: c => `<path d="M138 214 C150 202 164 200 176 210 C190 220 210 220 224 210 C236 200 250 202 262 214 C272 244 268 288 258 330 C290 380 300 430 302 462 C240 482 160 482 98 462 C100 430 110 380 142 330 C132 288 128 244 138 214Z"/>`,
  terninho: c => `<path d="M130 218 C144 202 162 198 176 210 C190 222 210 222 224 210 C238 198 256 202 270 218 C280 250 276 292 266 322 C290 370 302 430 304 470 C242 488 158 488 96 470 C98 430 110 370 134 322 C124 292 120 250 130 218Z"/>`+
    `<path d="M176 206 C186 240 186 300 170 356 C186 330 200 268 200 214Z" fill="#ffffff" opacity=".35"/>`+
    `<path d="M224 206 C214 240 214 300 230 356 C214 330 200 268 200 214Z" fill="#ffffff" opacity=".35"/>`
};

const BOTTOM_ART = {
  saia: c => `<path d="M136 314 C168 306 232 306 264 314 C276 372 288 432 296 468 C240 488 160 488 104 468 C112 432 124 372 136 314Z"/>`,
  saia_longa: c => `<path d="M136 314 C168 306 232 306 264 314 C278 430 300 570 310 640 C250 654 150 654 90 640 C100 570 122 430 136 314Z"/>`,
  calca: c => `<path d="M140 312 C172 304 228 304 260 312 L262 372 L254 596 L216 596 L208 430 L192 430 L184 596 L146 596 L138 372 Z"/>`,
  jeans: c => `<path d="M140 312 C172 304 228 304 260 312 L262 372 L254 596 L216 596 L208 430 L192 430 L184 596 L146 596 L138 372 Z"/>`+
    `<path d="M200 430 L200 596" stroke="#ffffff" stroke-width="2" opacity=".35"/>`,
  bermuda: c => `<path d="M140 312 C172 304 228 304 260 312 L266 370 C240 380 160 380 134 370 Z"/>`+
    `<path d="M140 370 L138 452 L192 452 L196 378 Z"/><path d="M260 370 L262 452 L208 452 L204 378 Z"/>`,
  short: c => `<path d="M140 312 C172 304 228 304 260 312 L266 354 C240 364 160 364 134 354 Z"/>`+
    `<path d="M140 354 L138 416 L190 416 L194 362 Z"/><path d="M260 354 L262 416 L210 416 L206 362 Z"/>`
};

const COAT_ART = {
  jaqueta: c => `<path d="M126 220 C140 202 160 198 176 210 C190 222 210 222 224 210 C240 198 260 202 274 220 C288 250 292 300 288 340 L250 350 C252 300 250 256 244 230 C228 244 172 244 156 230 C150 256 148 300 150 350 L112 340 C108 300 112 250 126 220Z"/>`,
  trench: c => `<path d="M124 220 C140 200 162 196 178 210 C192 224 208 224 222 210 C238 196 260 200 276 220 C292 260 298 340 300 430 C280 444 260 448 246 446 C248 340 244 258 238 228 C224 244 176 244 162 228 C156 258 152 340 154 446 C140 448 120 444 100 430 C102 340 108 260 124 220Z"/>`+
    `<path d="M150 340 h100 v16 h-100 Z" opacity=".55"/>`,
  blazer: c => `<path d="M128 220 C142 202 162 198 178 212 C192 226 208 226 222 212 C238 198 258 202 272 220 C284 252 288 300 284 344 L248 352 C250 300 248 258 242 232 C226 246 174 246 158 232 C152 258 150 300 152 352 L116 344 C112 300 116 252 128 220Z"/>`+
    `<path d="M186 210 C194 250 194 320 182 360 C196 330 208 250 210 214 Z" fill="#ffffff" opacity=".3"/>`,
  casaco_longo: c => `<path d="M122 220 C140 198 164 194 180 210 C194 224 206 224 220 210 C236 194 260 198 278 220 C296 280 306 380 310 470 C286 486 262 490 246 486 C250 360 244 258 238 228 C224 244 176 244 162 228 C156 258 150 360 154 486 C138 490 114 486 90 470 C94 380 104 280 122 220Z"/>`,
  cardigan: c => `<path d="M130 222 C144 206 162 202 178 214 C192 226 208 226 222 214 C238 202 256 206 270 222 C284 250 288 294 284 336 L252 344 C254 296 252 258 246 234 C230 248 170 248 154 234 C148 258 146 296 148 344 L116 336 C112 294 116 250 130 222Z"/>`+
    `<path d="M198 214 h4 v150 h-4 Z" opacity=".5"/>`
};

/* Pé esquerdo ocupa x≈124-190, direito x≈210-276, base em y≈598. */
const PE = d => `<path d="${d}"/>`;
const SHOE_ART = {
  tenis: c => PE("M124 552 h66 v26 c0 14-13 20-33 20 s-33-6-33-20 Z") + PE("M210 552 h66 v26 c0 14-13 20-33 20 s-33-6-33-20 Z") +
    `<g fill="#ffffff" opacity=".9"><rect x="126" y="578" width="62" height="9" rx="4"/><rect x="212" y="578" width="62" height="9" rx="4"/></g>`+
    `<g stroke="#ffffff" stroke-width="3" opacity=".8"><path d="M140 566 h34 M226 566 h34"/></g>`,
  sapatilha: c => PE("M124 556 h66 v22 c0 13-13 18-33 18 s-33-5-33-18 Z") + PE("M210 556 h66 v22 c0 13-13 18-33 18 s-33-5-33-18 Z") +
    `<path d="M132 562 C144 574 170 574 182 562" stroke="#ffffff" stroke-width="3" fill="none" opacity=".7"/>`+
    `<path d="M218 562 C230 574 256 574 268 562" stroke="#ffffff" stroke-width="3" fill="none" opacity=".7"/>`,
  sandalia: c => PE("M126 570 h62 v8 c0 12-12 16-31 16 s-31-4-31-16 Z") + PE("M212 570 h62 v8 c0 12-12 16-31 16 s-31-4-31-16 Z") +
    `<g stroke="#ffffff" stroke-width="4" opacity=".85"><path d="M132 572 L170 546 M218 572 L256 546"/></g>`,
  bota: c => PE("M126 494 h62 v88 c0 14-12 20-31 20 s-31-6-31-20 Z") + PE("M212 494 h62 v88 c0 14-12 20-31 20 s-31-6-31-20 Z") +
    `<g fill="#000" opacity=".15"><rect x="124" y="520" width="66" height="6"/><rect x="210" y="520" width="66" height="6"/></g>`,
  taco: c => PE("M124 566 h66 v14 c0 12-13 18-33 18 s-33-6-33-18 Z") + PE("M210 566 h66 v14 c0 12-13 18-33 18 s-33-6-33-18 Z") +
    `<g stroke="#00000055" stroke-width="6" stroke-linecap="round"><path d="M180 590 L176 620 M266 590 L262 620"/></g>`
};

const NECK_ART = {
  colar_perolas: c => `<g fill="${c}">` + [0,1,2,3,4,5,6].map(i => {
    const x = 200 + (i-3)*11, y = 222 + Math.abs(i-3)*4;
    return `<circle cx="${x}" cy="${y}" r="6"/>`;
  }).join("") + `</g>`,
  pingente: c => `<path d="M180 214 C186 232 214 232 220 214" stroke="${c}" stroke-width="3" fill="none"/>`+
    `<path d="M200 236 l10 14 -10 16 -10-16 Z" fill="${c}"/>`,
  choker: c => `<path d="M178 212 C186 226 214 226 222 212 L222 220 C214 234 186 234 178 220 Z" fill="${c}"/>`,
  corrente: c => `<path d="M180 212 C188 246 212 246 220 212" stroke="${c}" stroke-width="2.5" fill="none"/>`+
    `<circle cx="200" cy="242" r="5" fill="${c}"/>`,
  gola_pedra: c => `<path d="M172 210 C182 250 218 250 228 210 L228 218 C218 258 182 258 172 218 Z" fill="${c}"/>`
};

const EAR_ART = {
  cravo: c => `<circle cx="152" cy="168" r="5" fill="${c}"/><circle cx="248" cy="168" r="5" fill="${c}"/>`,
  argola: c => `<ellipse cx="152" cy="176" rx="10" ry="14" stroke="${c}" stroke-width="3" fill="none"/>`+
    `<ellipse cx="248" cy="176" rx="10" ry="14" stroke="${c}" stroke-width="3" fill="none"/>`,
  pendente: c => `<path d="M152 164 v22" stroke="${c}" stroke-width="3"/><path d="M248 164 v22" stroke="${c}" stroke-width="3"/>`+
    `<path d="M152 186 l8 12 -8 12 -8-12 Z" fill="${c}"/><path d="M248 186 l8 12 -8 12 -8-12 Z" fill="${c}"/>`,
  festa: c => `<circle cx="152" cy="166" r="4" fill="${c}"/><circle cx="248" cy="166" r="4" fill="${c}"/>`+
    `<path d="M152 176 l10 20 -10 20 -10-20 Z" fill="${c}" opacity=".9"/><path d="M248 176 l10 20 -10 20 -10-20 Z" fill="${c}" opacity=".9"/>`,
  gota: c => `<path d="M152 164 v14" stroke="${c}" stroke-width="2.5"/><path d="M152 178 c8 10 8 22 0 26 c-8-4-8-16 0-26Z" fill="${c}"/>`+
    `<path d="M248 164 v14" stroke="${c}" stroke-width="2.5"/><path d="M248 178 c8 10 8 22 0 26 c-8-4-8-16 0-26Z" fill="${c}"/>`
};

const HEAD_ART = {
  laco: c => `<g transform="translate(258 120) rotate(15)">
      <path d="M0 0 C-26-18-30 14 0 0Z" fill="${c}"/><path d="M0 0 C26-18 30 14 0 0Z" fill="${c}"/>
      <circle cx="0" cy="0" r="6" fill="${c}"/></g>`,
  flor: c => `<g transform="translate(116 130)">` +
    [0,72,144,216,288].map(a => `<ellipse cx="0" cy="-13" rx="8" ry="13" fill="${c}" transform="rotate(${a})"/>`).join("") +
    `<circle cx="0" cy="0" r="7" fill="#ffe066"/></g>`,
  coroa: c => `<path d="M150 108 L158 76 L176 96 L200 68 L224 96 L242 76 L250 108 Z" fill="#ffd43b"/>`+
    `<rect x="150" y="108" width="100" height="10" fill="#d4af37"/>`,
  chapeu: c => `<ellipse cx="200" cy="112" rx="86" ry="18" fill="${c}"/><path d="M156 112 C156 66 244 66 244 112 Z" fill="${c}"/>`,
  oculos: c => `<g fill="none" stroke="${c}" stroke-width="4">
      <circle cx="178" cy="160" r="24"/><circle cx="222" cy="160" r="24"/>
      <path d="M202 158 h-4"/><path d="M154 156 l-18-6"/><path d="M246 156 l18-6"/></g>`
};

const MAKEUP_ART = {
  base: c => `<ellipse cx="200" cy="150" rx="48" ry="40" fill="${c}" opacity=".25"/>`,
  blush: c => `<ellipse cx="160" cy="182" rx="16" ry="9" fill="${c}" opacity=".55"/>`+
    `<ellipse cx="240" cy="182" rx="16" ry="9" fill="${c}" opacity=".55"/>`,
  labial: c => `<path d="M184 194 C192 204 208 204 216 194 C210 208 190 208 184 194Z" fill="${c}"/>`,
  delineado: c => `<path d="M160 152 C170 142 188 142 196 150" stroke="${c}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`+
    `<path d="M204 150 C212 142 230 142 240 152" stroke="${c}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`+
    `<path d="M166 166 l-8 6 M234 166 l8 6" stroke="${c}" stroke-width="2.5"/>`,
  espiral: c => `<ellipse cx="160" cy="182" rx="16" ry="9" fill="#ff6fb5" opacity=".5"/>`+
    `<ellipse cx="240" cy="182" rx="16" ry="9" fill="#ff6fb5" opacity=".5"/>`+
    `<path d="M184 194 C192 206 208 206 216 194 C208 214 192 214 184 194Z" fill="#e03131"/>`+
    `<g stroke="#7048e8" stroke-width="2.5" fill="none">
      <path d="M162 150 q16-8 32 0"/><path d="M206 150 q16-8 32 0"/></g>`+
    `<circle cx="176" cy="140" r="2.5" fill="#fff"/><circle cx="224" cy="140" r="2.5" fill="#fff"/>`+
    `<circle cx="200" cy="140" r="3" fill="#e599f7"/>`
};

/* ---------- montagem ---------- */

function hairArt(id, color){
  const a = HAIR_ART[id] || HAIR_ART.longo;
  return { back: a.back(color), front: a.front(color) };
}

function renderDoll(st){
  const skin = st.skin, hair = st.hairColor, hc = st.colors;
  const top = TOP_ART[st.top.art](hc.roupa);
  const bottom = st.bottom ? BOTTOM_ART[st.bottom.art](hc.calca) : "";
  const coat = st.coat && st.coat.art ? COAT_ART[st.coat.art](hc.casaco) : "";
  const shoe = st.shoes && st.shoes.art ? SHOE_ART[st.shoes.art](hc.sapato) : "";
  const neck = st.necklace && st.necklace.art ? NECK_ART[st.necklace.art](hc.colar) : "";
  const ear  = st.earrings && st.earrings.art ? EAR_ART[st.earrings.art](hc.brinco) : "";
  const head = st.headwear && st.headwear.art ? HEAD_ART[st.headwear.art](hc.acessorio || "#ff6fb5") : "";
  const mk   = st.makeup && st.makeup.art ? MAKEUP_ART[st.makeup.art](hc.maquiagem) : "";
  const h = hairArt(st.hair.id, hair);

  const eye = x => `
    <ellipse cx="${x}" cy="${FACE_POS.eyeY}" rx="11" ry="9" fill="#ffffff"/>
    <circle cx="${x}" cy="${FACE_POS.eyeY + 1}" r="6" fill="${st.eyeColor}"/>
    <circle cx="${x}" cy="${FACE_POS.eyeY + 2}" r="2.8" fill="#101018"/>
    <circle cx="${x - 2.5}" cy="${FACE_POS.eyeY - 2.5}" r="1.8" fill="#fff"/>`;

  return `
  <ellipse cx="200" cy="646" rx="96" ry="16" fill="#000" opacity=".18"/>
  <g fill="${hair}">${h.back}</g>
  <g stroke="${skin}" stroke-linecap="round" fill="none">
    <path d="${SK.legL}" stroke-width="46"/><path d="${SK.legR}" stroke-width="46"/>
    <path d="${SK.armL}" stroke-width="28"/><path d="${SK.armR}" stroke-width="28"/>
  </g>
  <path d="${SK.torso}" fill="${skin}"/>
  <path d="${SK.neck}" fill="${skin}"/>
  <circle cx="152" cy="162" r="11" fill="${skin}"/><circle cx="248" cy="162" r="11" fill="${skin}"/>
  <circle cx="200" cy="152" r="52" fill="${skin}"/>
  <path d="M200 104 C200 104 148 108 152 152 C154 176 176 186 200 186 C224 186 246 176 248 152 C252 108 200 104 200 104Z" fill="#000" opacity="0.05"/>
  <g fill="${hc.calca}">${bottom}</g>
  <g fill="${hc.roupa}">${top}</g>
  <g fill="${hc.sapato}">${shoe}</g>
  <g fill="${hc.casaco}">${coat}</g>
  <g>${ear}</g>
  <g>
    ${eye(FACE_POS.eyeL)}${eye(FACE_POS.eyeR)}
    <path d="M164 142 C172 136 186 136 192 141" stroke="${hair}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M236 142 C228 136 214 136 208 141" stroke="${hair}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M200 168 q-4 10 3 11" stroke="#00000033" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M186 196 C194 206 206 206 214 196" stroke="#c04a5a" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <g>${mk}</g>
  <g>${neck}</g>
  <g fill="${hair}">${h.front}</g>
  <g>${head}</g>`;
}
