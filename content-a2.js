/* ============================================================
   TENSE SPRINT - BANCO DE CONTENIDO A2  (objetivo A1 -> A2)
   Este archivo SOLO contiene contenido. Nunca logica de la app.
   Para anadir ejercicios, lee GUIA-DEL-PROYECTO.md
   ============================================================ */

window.SYLLABUS = window.SYLLABUS || {};
window.SYLLABUS.A2 = [
  'Present simple',
  'Present continuous',
  'Past simple',
  'Past continuous',
  'Present perfect',
  'Future: going to / will',
  'Comparatives & superlatives',
  'Modals: should / have to',
  'Countable & uncountable',
  'Prepositions',
  'Adverbs of frequency',
  'There is / there are',
  'Articles'
];

window.BANK = window.BANK || [];
window.BANK.push(

/* ---------- Present simple ---------- */
{id:'a2-ps-001', level:'A2', skill:'grammar', topic:'Present simple', type:'build',
 s:"Talk about Leo's usual breakfast.", h:'every morning',
 t:'Write a negative sentence: Leo / drink coffee.',
 a:["leo doesn't drink coffee"],
 r:"Use <b>doesn't + base verb</b>. After <i>doesn't</i>, write <i>drink</i>, not <i>drinks</i>.",
 es:"El auxiliar ya lleva la marca de 3a persona; el verbo vuelve a su forma base."},

{id:'a2-ps-002', level:'A2', skill:'grammar', topic:'Present simple', type:'build',
 s:"Ask about Ana's routine.", h:'on Mondays',
 t:'Write a question: Ana / work from home?',
 a:['does ana work from home?'],
 r:"Use <b>Does + subject + base verb?</b> for <i>she / he / it</i>."},

{id:'a2-ps-003', level:'A2', skill:'grammar', topic:'Present simple', type:'gap',
 s:'Third person singular.', h:'she',
 t:'My sister ___ (study) medicine in Cork.',
 a:['studies'],
 r:"Verbs ending in <b>consonant + y</b> change to <b>-ies</b>: study &rarr; studies."},

/* ---------- Present continuous ---------- */
{id:'a2-pc-001', level:'A2', skill:'grammar', topic:'Present continuous', type:'build',
 s:'Describe what Tom is doing now.', h:'right now',
 t:'Write a sentence: Tom / study / for his test / right now.',
 a:['tom is studying for his test right now.'],
 r:"Use <b>is + verb-ing</b> for an action happening now."},

{id:'a2-pc-002', level:'A2', skill:'grammar', topic:'Present continuous', type:'fix',
 s:'Correct the sentence.', h:'at the moment',
 t:"He isn't work at the moment.",
 a:["he isn't working at the moment."],
 r:"Use <b>isn't + verb-ing</b> for a negative present continuous sentence."},

/* ---------- Past simple ---------- */
{id:'a2-past-001', level:'A2', skill:'grammar', topic:'Past simple', type:'fix',
 s:'Correct the sentence.', h:'yesterday',
 t:"She didn't went to work.",
 a:["she didn't go to work."],
 r:"After <b>didn't</b>, use the <b>base verb</b>: <i>go</i>, not <i>went</i>."},

{id:'a2-past-002', level:'A2', skill:'grammar', topic:'Past simple', type:'build',
 s:'Ask about a finished action.', h:'last weekend',
 t:'Write a question: they / visit / Dublin?',
 a:['did they visit dublin?'],
 r:"Use <b>Did + subject + base verb?</b> for past simple questions."},

{id:'a2-past-003', level:'A2', skill:'grammar', topic:'Past simple', type:'gap',
 s:'Irregular verb.', h:'last month',
 t:'We ___ (buy) a new sofa last month.',
 a:['bought'],
 r:"<b>buy &rarr; bought</b>. Irregular verbs do not take <i>-ed</i>."},

{id:'a2-be-001', level:'A2', skill:'grammar', topic:'Past simple', type:'build',
 s:'Ask about a past situation.', h:'last night',
 t:'Write a question: they / at home / last night?',
 a:['were they at home last night?'],
 r:"Use <b>Were + subject...?</b> with <i>you / we / they</i> in the past."},

/* ---------- Past continuous ---------- */
{id:'a2-pcont-001', level:'A2', skill:'grammar', topic:'Past continuous', type:'build',
 s:'Describe an interrupted action.', h:'while / when',
 t:'Write a sentence: I / cook dinner / when the phone rang.',
 a:['i was cooking dinner when the phone rang.'],
 r:"Use <b>was / were + verb-ing</b> for the longer action, and past simple for the interruption."},

/* ---------- Present perfect ---------- */
{id:'a2-pp-001', level:'A2', skill:'grammar', topic:'Present perfect', type:'fix',
 s:'Correct the sentence.', h:'already',
 t:'I have saw that film already.',
 a:['i have seen that film already.'],
 r:"Use <b>have / has + past participle</b>: <i>seen</i>, not <i>saw</i>."},

{id:'a2-pp-002', level:'A2', skill:'grammar', topic:'Present perfect', type:'build',
 s:'Ask about experience.', h:'ever',
 t:'Write a question: you / ever / visit Ireland?',
 a:['have you ever visited ireland?'],
 r:"Use <b>Have + subject + past participle?</b> for experience."},

/* ---------- Future ---------- */
{id:'a2-fut-001', level:'A2', skill:'grammar', topic:'Future: going to / will', type:'build',
 s:'Describe a plan.', h:'this weekend',
 t:'Write a sentence: We / going to / meet our friends / this weekend.',
 a:['we are going to meet our friends this weekend.'],
 r:"Use <b>am / is / are going to + base verb</b> for a plan."},

{id:'a2-fut-002', level:'A2', skill:'grammar', topic:'Future: going to / will', type:'fix',
 s:'Correct the sentence.', h:'I think',
 t:'She will studies tomorrow.',
 a:['she will study tomorrow.'],
 r:"After <b>will</b>, use the <b>base verb</b>: <i>study</i>."},

/* ---------- Comparatives & superlatives ---------- */
{id:'a2-comp-001', level:'A2', skill:'grammar', topic:'Comparatives & superlatives', type:'gap',
 s:'Compare two cities.', h:'than',
 t:'Dublin is ___ (expensive) than Galway.',
 a:['more expensive'],
 r:"Long adjectives (3+ syllables) use <b>more + adjective</b>, not <i>-er</i>."},

{id:'a2-comp-002', level:'A2', skill:'grammar', topic:'Comparatives & superlatives', type:'choice',
 s:'Choose the superlative.', h:'the',
 t:'It was the ___ day of the year.',
 options:['hotter','most hot','hottest'],
 a:['hottest'],
 r:"Short adjectives: <b>the + adjective-est</b>. Double the final consonant: hot &rarr; hottest."},

/* ---------- Modals ---------- */
{id:'a2-mod-001', level:'A2', skill:'grammar', topic:'Modals: should / have to', type:'choice',
 s:'Give advice to a friend.', h:'advice',
 t:'You look tired. You ___ go to bed early.',
 options:['should','must to','have'],
 a:['should'],
 r:"<b>should + base verb</b> for advice. No <i>to</i> after the modal."},

{id:'a2-mod-002', level:'A2', skill:'grammar', topic:'Modals: should / have to', type:'build',
 s:'Talk about an obligation at work.', h:'obligation',
 t:'Write a sentence: I / have to / work / on Saturdays.',
 a:['i have to work on saturdays.'],
 r:"<b>have to + base verb</b> expresses an external obligation."},

/* ---------- Countable & uncountable ---------- */
{id:'a2-cnt-001', level:'A2', skill:'grammar', topic:'Countable & uncountable', type:'choice',
 s:'You are making a shopping list.', h:'uncountable',
 t:'How ___ milk do we need?',
 options:['many','much','lot'],
 a:['much'],
 r:"Use <b>much</b> with uncountable nouns (milk, water, money) and <b>many</b> with countable plurals."},

/* ---------- Prepositions ---------- */
{id:'a2-prep-001', level:'A2', skill:'grammar', topic:'Prepositions', type:'gap',
 s:'Time preposition.', h:'clock time',
 t:"The class starts ___ 9 o'clock.",
 a:['at'],
 r:"<b>at</b> + clock time &middot; <b>on</b> + days / dates &middot; <b>in</b> + months / years."},

{id:'a2-prep-002', level:'A2', skill:'grammar', topic:'Prepositions', type:'gap',
 s:'Place preposition.', h:'city',
 t:'I live ___ Dublin.',
 a:['in'],
 r:"Use <b>in</b> for cities and countries, <b>at</b> for exact points (at the bus stop)."},

/* ---------- Adverbs of frequency ---------- */
{id:'a2-freq-001', level:'A2', skill:'grammar', topic:'Adverbs of frequency', type:'fix',
 s:'Correct the word order.', h:'usually',
 t:'I go usually to the gym after work.',
 a:['i usually go to the gym after work.'],
 r:"Frequency adverbs go <b>before the main verb</b>: <i>I usually go</i>.",
 es:"En espanol el adverbio va suelto ('voy normalmente'); en ingles su posicion es fija."},

/* ---------- There is / there are ---------- */
{id:'a2-there-001', level:'A2', skill:'grammar', topic:'There is / there are', type:'build',
 s:'Describe your flat.', h:'plural',
 t:'Write a sentence: there / three rooms / in the flat.',
 a:['there are three rooms in the flat.'],
 r:"<b>There are</b> + plural noun &middot; <b>There is</b> + singular / uncountable."},

/* ---------- Articles ---------- */
{id:'a2-art-001', level:'A2', skill:'grammar', topic:'Articles', type:'choice',
 s:'First mention of a new thing.', h:'sound, not letter',
 t:'She works in ___ office near the canal.',
 options:['a','an','the'],
 a:['an'],
 r:"Use <b>an</b> before a <b>vowel sound</b>: an office, an hour (but a university)."}

);
