/* ============================================================
   VALIDADOR DEL BANCO DE CONTENIDO
   Ejecutar desde esta carpeta con:   node validar.js
   Comprueba que los content-*.js no rompen la app:
   ids unicos, campos obligatorios, respuestas propias correctas,
   distractoras que no se aceptan, huecos, topics del syllabus.
   ============================================================ */
/* Harness: carga el motor real de index.html + los content-*.js y valida el banco */
const fs = require('fs'), path = require('path'), vm = require('vm');
const DIR = __dirname;

const stubEl = () => new Proxy({
  style:{}, classList:{toggle(){},add(){},remove(){},contains(){return false}},
  addEventListener(){}, focus(){}, select(){}, setSelectionRange(){},
  removeAttribute(){}, setAttribute(){}, value:'', textContent:'', innerHTML:'', disabled:false
}, {get:(t,k)=> k in t ? t[k] : undefined, set:(t,k,v)=>{t[k]=v;return true}});

const store = {};
const sandbox = {
  console,
  localStorage:{getItem:k=>k in store?store[k]:null, setItem:(k,v)=>{store[k]=String(v)}, removeItem:k=>{delete store[k]}},
  document:{getElementById:()=>stubEl(), querySelectorAll:()=>[], querySelector:()=>stubEl()},
  alert:()=>{}, confirm:()=>false, navigator:{}, setInterval:()=>0, clearInterval:()=>{},
  Date, Math, JSON, RegExp, Object, Array, String, Number, Set, Error, Proxy, isNaN, parseInt
};
sandbox.window = sandbox;
vm.createContext(sandbox);

for(const f of ['content-a2.js','content-b1-grammar.js','content-b1-vocab.js','content-clase.js']){
  try { vm.runInContext(fs.readFileSync(path.join(DIR,f),'utf8'), sandbox, {filename:f}); }
  catch(e){ console.log('SYNTAX FAIL ' + f + ': ' + e.message); process.exit(1); }
}

const html = fs.readFileSync(path.join(DIR,'index.html'),'utf8');
const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
const engine = blocks[blocks.length-1];
try { vm.runInContext(engine, sandbox, {filename:'engine'}); }
catch(e){ console.log('ENGINE FAIL: ' + e.message + '\n' + e.stack.split('\n').slice(0,4).join('\n')); process.exit(1); }

const {BANK, grade, normBase, SYLLABUS} = sandbox;
let fails = 0;
const bad = (m) => { fails++; console.log('  x ' + m); };

console.log('Items cargados: ' + BANK.length +
  ' (A2 ' + BANK.filter(x=>x.level==='A2').length +
  ' / B1 ' + BANK.filter(x=>x.level==='B1').length + ')');

// 1. ids unicos + campos obligatorios
const seen = new Set();
BANK.forEach(x => {
  if(!x.id) return bad('item sin id: ' + JSON.stringify(x).slice(0,60));
  if(seen.has(x.id)) bad('id duplicado: ' + x.id);
  seen.add(x.id);
  ['level','skill','topic','type','s','t','a','r'].forEach(k => {
    if(x[k] === undefined || x[k] === '') bad(x.id + ' falta campo ' + k);
  });
  if(!Array.isArray(x.a) || !x.a.length) bad(x.id + ' campo a vacio');
  if(!['A2','B1'].includes(x.level)) bad(x.id + ' level invalido');
  if(!['build','fix','gap','choice'].includes(x.type)) bad(x.id + ' type invalido: ' + x.type);
});

// 2. cada respuesta aceptada debe puntuar 'right'
BANK.forEach(x => x.a.forEach(ans => {
  const v = grade(x, ans);
  if(v !== 'right') bad(x.id + ' su propia respuesta "' + ans + '" evalua como ' + v);
}));

// 3. choice: la respuesta debe estar entre las opciones y las distractoras NO deben puntuar
BANK.filter(x => x.type === 'choice').forEach(x => {
  if(!Array.isArray(x.options) || x.options.length < 2) return bad(x.id + ' choice sin options');
  const norms = x.options.map(normBase);
  x.a.forEach(ans => { if(!norms.includes(normBase(ans))) bad(x.id + ' respuesta "' + ans + '" no esta entre las opciones'); });
  x.options.forEach(o => {
    if(x.a.some(a => normBase(a) === normBase(o))) return;
    const v = grade(x, o);
    if(v !== 'wrong') bad(x.id + ' la distractora "' + o + '" se acepta como ' + v);
  });
});

// 4. gap: el enunciado debe tener hueco
BANK.filter(x => x.type === 'gap').forEach(x => {
  if(!x.t.includes('___')) bad(x.id + ' type gap sin ___ en t');
});

// 5. topics declarados en SYLLABUS
BANK.forEach(x => {
  if(!(SYLLABUS[x.level]||[]).includes(x.topic)) bad(x.id + ' topic fuera de SYLLABUS: ' + x.topic);
});

// 6. tolerancia esperada del corrector
const cases = [
  ['a2-ps-001','Leo does not drink coffee','right'],
  ['a2-ps-001',"leo doesn't drink coffee.",'right'],
  ['a2-ps-001','Leo doesnt drink coffee','almost'],
  ['a2-ps-001','Leo drinks coffee','wrong'],
  ['a2-past-002','Did they visit Dublin','right'],
  ['b1-ppc-001','How long have you been waiting?','right'],
  ['b1-rep-001','She said that she was tired','right'],
  ['b1-cond2-002',"If I were you, I'd call him",'right'],
  ['b1-pass-001','My bike was stolen last night','right'],
  ['b1-pass-001','Someone stole my bike last night','wrong'],
  ['b1-ppps-003',"She's lived in Dublin since 2019",'wrong'],
];
cases.forEach(([id,input,want]) => {
  const item = BANK.find(x => x.id === id);
  if(!item) return bad('caso de prueba: no existe ' + id);
  const got = grade(item, input);
  if(got !== want) bad('grade("' + input + '") = ' + got + ', esperado ' + want + '  [' + id + ']');
});

// 7. sesiones se construyen sin explotar
['A2','B1'].forEach(lv => {
  vm.runInContext('state.level="'+lv+'"', sandbox);
  const s = sandbox.buildSession(lv, 20);
  if(!s.length) bad('buildSession vacia para ' + lv);
  const chk = sandbox.checkSet(lv);
  if(chk.length !== sandbox.topicsOf(lv).length) bad('checkSet ' + lv + ' devuelve ' + chk.length + ' de ' + sandbox.topicsOf(lv).length + ' topics');
});

// 8. simulacion: responder todo bien y todo mal no rompe el estado ni el reporte
BANK.slice(0,15).forEach(x => { sandbox.schedule(x.id,'right'); sandbox.bumpTopic(x,true); });
BANK.slice(15,25).forEach(x => { sandbox.schedule(x.id,'wrong'); sandbox.bumpTopic(x,false); });
try { const rep = vm.runInContext('buildReport()', sandbox); if(rep.length < 100) bad('buildReport demasiado corto'); }
catch(e){ bad('buildReport lanza: ' + e.message); }

console.log(fails ? '\n' + fails + ' PROBLEMAS' : '\nOK: sin problemas');
