/* ============================================================
   Genera english-ladder.bundle.html: la app entera en UN archivo,
   con los content-*.js incrustados.

   Ejecutar:  node build-bundle.js

   Sólo hace falta para compartir la app como archivo suelto o
   publicarla donde no se puedan servir varios archivos.
   Para GitHub Pages NO se necesita: ahi los <script src> cargan bien.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const FILES = ['content-a2.js','content-b1-grammar.js','content-b1-vocab.js','content-clase.js'];

let html = fs.readFileSync(path.join(DIR,'index.html'),'utf8');
let missing = [];

FILES.forEach(f => {
  const tag = '<script src="' + f + '"></script>';
  if(!html.includes(tag)) return missing.push(f + ' (no encontrado en index.html)');
  const js = fs.readFileSync(path.join(DIR,f),'utf8');
  if(js.includes('</scr'+'ipt>')) return missing.push(f + ' (contiene </script>, no se puede incrustar)');
  html = html.replace(tag, '<script>\n' + js + '\n</scr'+'ipt>');
});

if(missing.length){
  console.log('PROBLEMAS:\n  ' + missing.join('\n  '));
  process.exit(1);
}

const out = path.join(DIR,'english-ladder.bundle.html');
fs.writeFileSync(out, html);
console.log('OK  ->  english-ladder.bundle.html  (' + Math.round(html.length/1024) + ' KB)');
console.log('Recuerda: el progreso se guarda por origen. Exporta desde Progress & report antes de cambiar de sitio.');
