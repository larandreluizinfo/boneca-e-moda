/* Cenários de fundo — cada função devolve SVG (viewBox 0 0 400 700). */

const SCENE_ART = {};

SCENE_ART.quarto = () => `
<defs>
  <linearGradient id="wallQ" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffe3f1"/><stop offset="1" stop-color="#ffc0dd"/>
  </linearGradient>
</defs>
<rect width="400" height="700" fill="url(#wallQ)"/>
<rect y="480" width="400" height="220" fill="#c98a5f"/>
<g stroke="#a86c45" stroke-width="2" opacity=".6">
  <path d="M0 520h400M0 570h400M0 620h400M0 670h400"/>
  <path d="M60 480v220M140 480v220M220 480v220M300 480v220"/>
</g>
<rect x="30" y="60" width="130" height="140" rx="10" fill="#fff3b0" stroke="#d9a441" stroke-width="6"/>
<path d="M95 60v140M30 130h130" stroke="#d9a441" stroke-width="6"/>
<circle cx="140" cy="80" r="16" fill="#fffde7"/>
<rect x="215" y="90" width="140" height="12" rx="6" fill="#a5765a"/>
<g fill="#ff8fb1">
  <rect x="230" y="52" width="16" height="38" rx="4"/>
  <rect x="250" y="66" width="14" height="24" rx="4"/>
  <rect x="268" y="46" width="12" height="44" rx="4"/>
</g>
<rect x="240" y="60" width="60" height="8" rx="4" fill="#7ad7ff"/>
<rect x="40" y="400" width="180" height="80" rx="12" fill="#d9a441"/>
<rect x="40" y="400" width="180" height="24" rx="12" fill="#ffe066"/>
<rect x="55" y="424" width="150" height="30" rx="8" fill="#fff" opacity=".7"/>
<rect x="60" y="480" width="14" height="34" fill="#8b5a3c"/>
<rect x="186" y="480" width="14" height="34" fill="#8b5a3c"/>
<ellipse cx="300" cy="520" rx="80" ry="26" fill="#ff6fb5" opacity=".35"/>`;

SCENE_ART.praia = () => `
<defs>
  <linearGradient id="skyP" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7ad7ff"/><stop offset="1" stop-color="#dff6ff"/>
  </linearGradient>
  <linearGradient id="seaP" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2f9e9e"/><stop offset="1" stop-color="#1c7ed6"/>
  </linearGradient>
</defs>
<rect width="400" height="700" fill="url(#skyP)"/>
<circle cx="320" cy="90" r="42" fill="#ffe066"/>
<circle cx="320" cy="90" r="58" fill="#ffe066" opacity=".25"/>
<g fill="#ffffff" opacity=".9">
  <ellipse cx="90" cy="80" rx="42" ry="20"/><ellipse cx="120" cy="90" rx="30" ry="16"/>
  <ellipse cx="250" cy="50" rx="34" ry="16"/>
</g>
<rect y="330" width="400" height="200" fill="url(#seaP)"/>
<g stroke="#ffffff" stroke-width="4" opacity=".6" fill="none">
  <path d="M20 380q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0"/>
  <path d="M0 440q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0"/>
  <path d="M30 500q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0"/>
</g>
<path d="M0 530q100-30 200 0t200 0v170H0z" fill="#ffe9b0"/>
<path d="M40 600q40-16 80 0" stroke="#e8c98a" stroke-width="4" fill="none"/>
<g>
  <rect x="40" y="360" width="14" height="150" rx="7" fill="#8b5a3c"/>
  <g fill="#2f9e44">
    <ellipse cx="47" cy="350" rx="46" ry="26"/>
    <ellipse cx="20" cy="372" rx="30" ry="18"/>
    <ellipse cx="76" cy="372" rx="30" ry="18"/>
  </g>
</g>
<g opacity=".9">
  <circle cx="120" cy="620" r="8" fill="#ff6fb5"/>
  <path d="M120 612v16" stroke="#ff6fb5" stroke-width="3"/>
</g>`;

SCENE_ART.cidade = () => `
<defs>
  <linearGradient id="skyC" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b1b4b"/><stop offset="1" stop-color="#7048e8"/>
  </linearGradient>
</defs>
<rect width="400" height="700" fill="url(#skyC)"/>
<circle cx="80" cy="100" r="34" fill="#fff3b0" opacity=".9"/>
<circle cx="66" cy="90" r="8" fill="#1b1b4b" opacity=".5"/>
<g fill="#ffffff" opacity=".8">
  <circle cx="300" cy="60" r="2"/><circle cx="340" cy="110" r="2"/><circle cx="250" cy="40" r="1.5"/>
  <circle cx="120" cy="50" r="1.5"/><circle cx="360" cy="40" r="2"/>
</g>
<g fill="#2a1b3f">
  <rect x="0" y="300" width="90" height="240"/><rect x="100" y="240" width="70" height="300"/>
  <rect x="180" y="330" width="80" height="210"/><rect x="270" y="270" width="60" height="270"/>
  <rect x="340" y="340" width="60" height="200"/>
</g>
<g fill="#ffe066" opacity=".85">
  <rect x="14" y="316" width="14" height="14"/><rect x="40" y="316" width="14" height="14"/><rect x="66" y="316" width="14" height="14"/>
  <rect x="114" y="260" width="14" height="14"/><rect x="140" y="260" width="14" height="14"/><rect x="114" y="300" width="14" height="14"/>
  <rect x="196" y="350" width="14" height="14"/><rect x="226" y="350" width="14" height="14"/><rect x="196" y="392" width="14" height="14"/>
  <rect x="284" y="290" width="14" height="14"/><rect x="310" y="330" width="14" height="14"/>
  <rect x="356" y="360" width="14" height="14"/>
</g>
<rect y="540" width="400" height="160" fill="#3a2750"/>
<g stroke="#ffe066" stroke-width="6" stroke-dasharray="26 22" opacity=".7">
  <path d="M0 620h400"/>
</g>
<rect x="20" y="470" width="10" height="70" fill="#555"/>
<rect x="370" y="470" width="10" height="70" fill="#555"/>
<circle cx="25" cy="460" r="14" fill="#ffe066"/><circle cx="375" cy="460" r="14" fill="#ffe066"/>`;

SCENE_ART.festa = () => `
<defs>
  <linearGradient id="wallF" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a2750"/><stop offset="1" stop-color="#7048e8"/>
  </linearGradient>
</defs>
<rect width="400" height="700" fill="url(#wallF)"/>
<g stroke="#ffe066" stroke-width="4" fill="none">
  <path d="M0 90q100 60 200 0t200 0"/>
</g>
<g>
  <path d="M20 40l16 28h-32z" fill="#ff6fb5"/><path d="M100 30l16 28h-32z" fill="#7ad7ff"/>
  <path d="M190 20l16 28h-32z" fill="#ffe066"/><path d="M280 30l16 28h-32z" fill="#8ce99a"/>
  <path d="M360 45l16 28h-32z" fill="#ff9f68"/>
</g>
<g>
  <ellipse cx="60" cy="180" rx="30" ry="38" fill="#ff6fb5"/><path d="M60 218v40" stroke="#fff" stroke-width="2"/>
  <ellipse cx="330" cy="200" rx="26" ry="34" fill="#7ad7ff"/><path d="M330 234v36" stroke="#fff" stroke-width="2"/>
  <ellipse cx="250" cy="130" rx="22" ry="30" fill="#ffe066"/><path d="M250 160v30" stroke="#fff" stroke-width="2"/>
</g>
<rect y="520" width="400" height="180" fill="#2a1b3f"/>
<g opacity=".85">
  <rect x="0" y="520" width="400" height="60" fill="#b197fc" opacity=".25"/>
</g>
<g fill="#ffe066" opacity=".9">
  <rect x="40" y="560" width="20" height="20" rx="4" transform="rotate(20 50 570)"/>
  <rect x="300" y="600" width="18" height="18" rx="4" transform="rotate(-15 309 609)"/>
  <circle cx="200" cy="640" r="8"/>
  <circle cx="120" cy="600" r="6"/><circle cx="270" cy="550" r="6"/>
</g>`;

SCENE_ART.escola = () => `
<rect width="400" height="700" fill="#f2ead6"/>
<rect y="520" width="400" height="180" fill="#c9a06a"/>
<g stroke="#a8814f" stroke-width="2" opacity=".7">
  <path d="M0 580h400M0 640h400"/>
</g>
<rect x="20" y="80" width="250" height="150" rx="8" fill="#2f6b3f" stroke="#8b5a3c" stroke-width="10"/>
<g stroke="#ffffff" stroke-width="3" opacity=".8" stroke-linecap="round">
  <path d="M50 130h180M50 160h140M50 190h160"/>
</g>
<text x="145" y="255" fill="#8b5a3c" font-size="20" text-anchor="middle" font-family="sans-serif">Matemática</text>
<rect x="300" y="90" width="80" height="110" rx="8" fill="#7ad7ff" opacity=".7" stroke="#d9a441" stroke-width="5"/>
<g>
  <rect x="0" y="360" width="200" height="26" rx="8" fill="#d9a441"/>
  <rect x="20" y="386" width="12" height="90" fill="#a5765a"/><rect x="168" y="386" width="12" height="90" fill="#a5765a"/>
  <rect x="220" y="380" width="180" height="26" rx="8" fill="#d9a441"/>
  <rect x="240" y="406" width="12" height="90" fill="#a5765a"/><rect x="370" y="406" width="12" height="90" fill="#a5765a"/>
</g>
<rect x="30" y="200" width="60" height="70" rx="6" fill="#ff6fb5" opacity=".8"/>`;

SCENE_ART.floresta = () => `
<defs>
  <linearGradient id="skyF" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b2f2bb"/><stop offset="1" stop-color="#e9f7c3"/>
  </linearGradient>
</defs>
<rect width="400" height="700" fill="url(#skyF)"/>
<circle cx="320" cy="90" r="38" fill="#fff3b0" opacity=".9"/>
<g fill="#2f9e44">
  <path d="M40 120l50 120H-10z"/><path d="M120 90l60 150H60z"/>
  <path d="M360 100l60 140h-120z"/><path d="M300 140l50 120H250z"/>
</g>
<g fill="#37b24d">
  <path d="M20 200l40 110H-20z"/><path d="M200 220l40 90h-80z"/><path d="M390 240l40 100h-80z"/>
</g>
<path d="M0 400q100-40 200 0t200 0v300H0z" fill="#8ce99a"/>
<path d="M120 700q30-160 80-300" stroke="#ffe9b0" stroke-width="60" fill="none" opacity=".8"/>
<g>
  <circle cx="60" cy="500" r="10" fill="#ff6fb5"/><circle cx="330" cy="520" r="10" fill="#ff9f68"/>
  <circle cx="240" cy="470" r="9" fill="#ffe066"/><circle cx="150" cy="560" r="8" fill="#e599f7"/>
  <circle cx="60" cy="500" r="3" fill="#fff3b0"/><circle cx="330" cy="520" r="3" fill="#fff3b0"/>
</g>
<g opacity=".7" fill="#66a80f">
  <ellipse cx="40" cy="660" rx="60" ry="18"/><ellipse cx="360" cy="620" rx="70" ry="20"/>
</g>`;

SCENE_ART.casa = () => `
<defs>
  <linearGradient id="wallK" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff5e1"/><stop offset="1" stop-color="#ffe3bf"/>
  </linearGradient>
</defs>
<rect width="400" height="700" fill="url(#wallK)"/>
<g stroke="#f2d3a0" stroke-width="2">
  <path d="M0 100h400M0 180h400M0 260h400M0 340h400"/>
  <path d="M50 0v420M150 0v420M250 0v420M350 0v420"/>
</g>
<rect y="420" width="400" height="280" fill="#d9b98a"/>
<g stroke="#c19a6b" stroke-width="3">
  <path d="M0 480h400M0 550h400M0 620h400"/>
  <path d="M60 420v280M160 420v280M260 420v280M360 420v280"/>
</g>
<rect x="20" y="440" width="200" height="24" rx="6" fill="#8b5a3c"/>
<rect x="40" y="464" width="16" height="90" fill="#6b4327"/><rect x="184" y="464" width="16" height="90" fill="#6b4327"/>
<circle cx="100" cy="430" r="22" fill="#ffffff"/><circle cx="150" cy="430" r="18" fill="#7ad7ff"/>
<rect x="250" y="300" width="120" height="120" rx="10" fill="#a5765a"/>
<rect x="260" y="310" width="46" height="46" rx="6" fill="#7ad7ff"/><rect x="316" y="310" width="46" height="46" rx="6" fill="#8ce99a"/>
<rect x="260" y="364" width="46" height="46" rx="6" fill="#ff9f68"/><rect x="316" y="364" width="46" height="46" rx="6" fill="#ffe066"/>
<path d="M40 180h90l-10-70h-70z" fill="#ff9f68"/>
<path d="M85 180a45 45 0 0 0 45-45h-90a45 45 0 0 0 45 45z" fill="#ffe9b0"/>`;

SCENE_ART.nave = () => `
<defs>
  <radialGradient id="space" cx="50%" cy="40%" r="80%">
    <stop offset="0" stop-color="#2b2b5c"/><stop offset="1" stop-color="#0b0b1c"/>
  </radialGradient>
</defs>
<rect width="400" height="700" fill="url(#space)"/>
<g fill="#ffffff">
  <circle cx="40" cy="60" r="2"/><circle cx="120" cy="140" r="1.5"/><circle cx="360" cy="90" r="2"/>
  <circle cx="300" cy="180" r="1.5"/><circle cx="60" cy="260" r="1.5"/><circle cx="380" cy="300" r="2"/>
  <circle cx="200" cy="50" r="1.5"/><circle cx="160" cy="330" r="1.5"/><circle cx="270" cy="380" r="1.5"/>
</g>
<g transform="translate(340 620)">
  <ellipse rx="90" ry="22" fill="#cbd5e1" opacity=".7"/>
  <ellipse rx="70" ry="16" fill="#94a3b8" opacity=".6"/>
  <circle cx="0" cy="-14" r="18" fill="#7ad7ff" opacity=".8"/>
</g>
<g transform="translate(40 620)">
  <ellipse rx="90" ry="22" fill="#cbd5e1" opacity=".7"/>
  <ellipse rx="70" ry="16" fill="#94a3b8" opacity=".6"/>
</g>
<path d="M0 700h400v-70q-100 20-200 0t-200 0z" fill="#1b1b2f" opacity=".9"/>
<ellipse cx="200" cy="620" rx="130" ry="26" fill="#7ad7ff" opacity=".25"/>`;

function sceneSVG(id){
  const fn = SCENE_ART[id] || SCENE_ART.quarto;
  return fn();
}
