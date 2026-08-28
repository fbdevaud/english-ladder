/* ============================================================
   TENSE SPRINT - BANCO DE CONTENIDO B1 / GRAMATICA  (objetivo A2 -> B1)
   Este archivo SOLO contiene contenido. Nunca logica de la app.
   Para anadir ejercicios, lee GUIA-DEL-PROYECTO.md
   ============================================================ */

window.SYLLABUS = window.SYLLABUS || {};
window.SYLLABUS.B1 = [
  'Present perfect vs past simple',
  'Present perfect continuous',
  'Past perfect',
  'used to / would',
  'First conditional',
  'Second conditional',
  'Passive voice',
  'Reported speech',
  'Relative clauses',
  'Gerund vs infinitive',
  'Modals of deduction',
  'Modals of obligation',
  'Future forms',
  'Question tags',
  'Connectors',
  'too / enough',
  'Quantifiers'
];

window.BANK = window.BANK || [];
window.BANK.push(

/* ---------- Present perfect vs past simple ---------- */
{id:'b1-ppps-001', level:'B1', skill:'grammar', topic:'Present perfect vs past simple', type:'choice',
 s:"You are standing outside your front door.", h:'the result matters now',
 t:"I ___ my keys. I can't get in.",
 options:['lost','have lost','was losing'],
 a:['have lost'],
 r:"No finished time is mentioned and the <b>result matters now</b> &rarr; present perfect.",
 es:"En espanol dirias 'perdi mis llaves'. El ingles obliga a present perfect cuando el efecto sigue vivo."},

{id:'b1-ppps-002', level:'B1', skill:'grammar', topic:'Present perfect vs past simple', type:'fix',
 s:'Correct the sentence.', h:'yesterday',
 t:'I have seen her yesterday.',
 a:['i saw her yesterday.'],
 r:"A <b>finished time expression</b> (yesterday, last week, in 2020, ago) forces <b>past simple</b>.",
 es:"Regla dura: si dices CUANDO termino, no puedes usar present perfect."},

{id:'b1-ppps-003', level:'B1', skill:'grammar', topic:'Present perfect vs past simple', type:'gap',
 s:'She moved to Dublin in 2019 and is still there.', h:'since',
 t:'She ___ (live) in Dublin since 2019.',
 a:['has lived',"has been living"],
 r:"<b>since / for</b> + a situation that continues &rarr; <b>has / have + past participle</b>."},

{id:'b1-ppps-004', level:'B1', skill:'grammar', topic:'Present perfect vs past simple', type:'build',
 s:'Talk about your experience, not a specific date.', h:'never',
 t:'Write a sentence: I / never / try / Irish stew.',
 a:['i have never tried irish stew.'],
 r:"<b>never / ever / already / yet / just</b> normally travel with the present perfect."},

/* ---------- Present perfect continuous ---------- */
{id:'b1-ppc-001', level:'B1', skill:'grammar', topic:'Present perfect continuous', type:'build',
 s:'Ask about the duration of an action still in progress.', h:'How long',
 t:'Write a question: how long / you / wait?',
 a:['how long have you been waiting?'],
 r:"<b>have / has + been + verb-ing</b> stresses the <b>duration</b> of something still happening."},

{id:'b1-ppc-002', level:'B1', skill:'grammar', topic:'Present perfect continuous', type:'fix',
 s:'Correct the sentence.', h:'for three years',
 t:'I am working here for three years.',
 a:['i have been working here for three years.','i have worked here for three years.'],
 r:"For an action that started in the past and continues, English needs <b>have been + -ing</b>, not the present continuous.",
 es:"Este es el error numero uno de los hispanohablantes: 'llevo tres anos trabajando aqui' NO es 'I am working'."},

{id:'b1-ppc-003', level:'B1', skill:'grammar', topic:'Present perfect continuous', type:'choice',
 s:'Your hands are covered in soil.', h:'visible evidence',
 t:"You're filthy! What ___?",
 options:['have you done','have you been doing','did you do'],
 a:['have you been doing'],
 r:"Present perfect continuous explains a <b>present state</b> caused by a recent ongoing activity."},

/* ---------- Past perfect ---------- */
{id:'b1-pastperf-001', level:'B1', skill:'grammar', topic:'Past perfect', type:'build',
 s:'Two past events: order them.', h:'already',
 t:'Write a sentence: when we arrived / the film / already start.',
 a:['when we arrived, the film had already started.','when we arrived the film had already started.'],
 r:"The <b>earlier</b> of two past events takes <b>had + past participle</b>."},

{id:'b1-pastperf-002', level:'B1', skill:'grammar', topic:'Past perfect', type:'choice',
 s:'You missed it.', h:'earlier past',
 t:'By the time I got to the station, the train ___.',
 options:['left','has left','had left'],
 a:['had left'],
 r:"<b>By the time + past simple</b>, the other clause goes to the <b>past perfect</b>."},

{id:'b1-pastperf-003', level:'B1', skill:'grammar', topic:'Past perfect', type:'fix',
 s:'Correct the sentence.', h:'before',
 t:'She told me she has never been to Cork before.',
 a:['she told me she had never been to cork before.'],
 r:"After a past reporting verb, the present perfect moves back to the <b>past perfect</b>."},

/* ---------- used to / would ---------- */
{id:'b1-used-001', level:'B1', skill:'grammar', topic:'used to / would', type:'fix',
 s:'Correct the sentence.', h:'past habit',
 t:'I used to played football every Sunday.',
 a:['i used to play football every sunday.'],
 r:"<b>used to + base verb</b>. The past is already marked in <i>used</i>."},

{id:'b1-used-002', level:'B1', skill:'grammar', topic:'used to / would', type:'build',
 s:'A habit he did not have in the past.', h:'negative',
 t:"Write a negative sentence: he / use to / smoke.",
 a:["he didn't use to smoke."],
 r:"Negative and question forms drop the <i>-d</i>: <b>didn't use to</b>, <b>did you use to...?</b>"},

{id:'b1-used-003', level:'B1', skill:'grammar', topic:'used to / would', type:'choice',
 s:'Talking about a past state, not an action.', h:'state verb',
 t:'We ___ have a dog when I was a child.',
 options:['would','used to','use to'],
 a:['used to'],
 r:"<b>would</b> only works for repeated <b>actions</b>. For past <b>states</b> (have, be, live, know) use <b>used to</b>."},

/* ---------- First conditional ---------- */
{id:'b1-cond1-001', level:'B1', skill:'grammar', topic:'First conditional', type:'fix',
 s:'Correct the sentence.', h:'real possibility',
 t:'If it will rain, we will stay at home.',
 a:['if it rains, we will stay at home.','if it rains we will stay at home.'],
 r:"No <b>will</b> after <i>if</i>. Pattern: <b>If + present simple, will + base verb</b>.",
 es:"Igual que en espanol no dices 'si llovera'."},

{id:'b1-cond1-002', level:'B1', skill:'grammar', topic:'First conditional', type:'build',
 s:'Warn a friend who is running late.', h:'hurry',
 t:"Write a sentence: if / you / not hurry / you / miss the bus.",
 a:["if you don't hurry, you will miss the bus.","if you don't hurry you will miss the bus."],
 r:"First conditional = a <b>real, likely</b> future consequence."},

/* ---------- Second conditional ---------- */
{id:'b1-cond2-001', level:'B1', skill:'grammar', topic:'Second conditional', type:'build',
 s:'Imagine something that is not true now.', h:'imaginary',
 t:'Write a sentence: if / I / have more time / I / learn the guitar.',
 a:['if i had more time, i would learn the guitar.','if i had more time i would learn the guitar.'],
 r:"Pattern: <b>If + past simple, would + base verb</b> for hypothetical situations."},

{id:'b1-cond2-002', level:'B1', skill:'grammar', topic:'Second conditional', type:'fix',
 s:'Correct the sentence.', h:'advice',
 t:'If I would be you, I would call him.',
 a:['if i were you, i would call him.','if i was you, i would call him.','if i were you i would call him.'],
 r:"Never put <b>would</b> in the <i>if</i> clause. The fixed advice formula is <b>If I were you, I would...</b>"},

{id:'b1-cond2-003', level:'B1', skill:'grammar', topic:'Second conditional', type:'choice',
 s:'A real possibility this evening, not a fantasy.', h:'which conditional?',
 t:'If I ___ time tonight, I will help you.',
 options:['had','have','would have'],
 a:['have'],
 r:"Realistic future &rarr; <b>first</b> conditional (present simple + will), not second."},

/* ---------- Passive voice ---------- */
{id:'b1-pass-001', level:'B1', skill:'grammar', topic:'Passive voice', type:'build',
 s:'The person who did it is unknown or unimportant.', h:'past passive',
 t:'Rewrite in the passive: Someone stole my bike last night.',
 a:['my bike was stolen last night.'],
 r:"Passive = <b>be + past participle</b>. Past simple passive: <b>was / were + past participle</b>."},

{id:'b1-pass-002', level:'B1', skill:'grammar', topic:'Passive voice', type:'fix',
 s:'Correct the sentence.', h:'participle',
 t:'This bridge was build in 1890.',
 a:['this bridge was built in 1890.'],
 r:"The passive needs the <b>past participle</b> (built), not the base form (build)."},

{id:'b1-pass-003', level:'B1', skill:'grammar', topic:'Passive voice', type:'build',
 s:'A routine at the office.', h:'present passive',
 t:'Write a sentence: the office / clean / every evening.',
 a:['the office is cleaned every evening.'],
 r:"Present simple passive: <b>am / is / are + past participle</b>."},

{id:'b1-pass-004', level:'B1', skill:'grammar', topic:'Passive voice', type:'choice',
 s:'Say who did it.', h:'agent',
 t:'The email was sent ___ my manager.',
 options:['for','by','from'],
 a:['by'],
 r:"The agent of a passive sentence is introduced with <b>by</b>."},

/* ---------- Reported speech ---------- */
{id:'b1-rep-001', level:'B1', skill:'grammar', topic:'Reported speech', type:'build',
 s:'Report what she said.', h:'one tense back',
 t:'She said: "I am tired."',
 a:['she said she was tired.','she said that she was tired.'],
 r:"After a past reporting verb, the tense moves <b>one step back</b>: am &rarr; was."},

{id:'b1-rep-002', level:'B1', skill:'grammar', topic:'Reported speech', type:'build',
 s:'Report the question.', h:'no auxiliary, no question mark',
 t:'He asked: "Where do you live?"',
 a:['he asked where i lived.'],
 r:"Reported questions use <b>statement word order</b> and lose <i>do / does / did</i> and the question mark."},

{id:'b1-rep-003', level:'B1', skill:'grammar', topic:'Reported speech', type:'fix',
 s:'Correct the sentence.', h:'say vs tell',
 t:'She told that she would come.',
 a:['she said that she would come.','she told me that she would come.','she said she would come.'],
 r:"<b>tell</b> needs a person after it (tell <i>me</i>); <b>say</b> does not.",
 es:"En espanol 'decir' cubre los dos. En ingles son verbos con reglas distintas."},

{id:'b1-rep-004', level:'B1', skill:'grammar', topic:'Reported speech', type:'build',
 s:'Report the instruction.', h:'infinitive',
 t:'The teacher said: "Open your books."',
 a:['the teacher told us to open our books.','the teacher told me to open my book.'],
 r:"Orders and requests become <b>told + person + to + base verb</b>."},

/* ---------- Relative clauses ---------- */
{id:'b1-rel-001', level:'B1', skill:'grammar', topic:'Relative clauses', type:'gap',
 s:'Identify the person.', h:'person',
 t:"That's the man ___ helped me yesterday.",
 a:['who','that'],
 r:"<b>who / that</b> for people, <b>which / that</b> for things, <b>whose</b> for possession."},

{id:'b1-rel-002', level:'B1', skill:'grammar', topic:'Relative clauses', type:'fix',
 s:'Correct the sentence.', h:'one preposition only',
 t:'The hotel where we stayed in was lovely.',
 a:['the hotel where we stayed was lovely.','the hotel which we stayed in was lovely.','the hotel that we stayed in was lovely.'],
 r:"<b>where</b> already means <i>in which</i>, so the extra <i>in</i> must go."},

{id:'b1-rel-003', level:'B1', skill:'grammar', topic:'Relative clauses', type:'gap',
 s:'Possession inside the clause.', h:'possession',
 t:'I know a girl ___ brother works at Google.',
 a:['whose'],
 r:"<b>whose</b> replaces <i>his / her / their</i> inside a relative clause."},

/* ---------- Gerund vs infinitive ---------- */
{id:'b1-vp-001', level:'B1', skill:'grammar', topic:'Gerund vs infinitive', type:'choice',
 s:'Talk about what you like.', h:'enjoy',
 t:'I enjoy ___ to music before I sleep.',
 options:['to listen','listening','listen'],
 a:['listening'],
 r:"<b>enjoy, avoid, finish, mind, suggest, practise</b> are always followed by <b>-ing</b>."},

{id:'b1-vp-002', level:'B1', skill:'grammar', topic:'Gerund vs infinitive', type:'fix',
 s:'Correct the sentence.', h:'decide',
 t:'We decided going by train.',
 a:['we decided to go by train.'],
 r:"<b>decide, want, hope, plan, agree, promise, learn</b> take <b>to + base verb</b>."},

{id:'b1-vp-003', level:'B1', skill:'grammar', topic:'Gerund vs infinitive', type:'gap',
 s:'He quit the habit two years ago.', h:'quit, not pause',
 t:'He stopped ___ (smoke) two years ago.',
 a:['smoking'],
 r:"<b>stop + -ing</b> = give up the activity. <b>stop + to</b> = pause in order to do something else."},

{id:'b1-vp-004', level:'B1', skill:'grammar', topic:'Gerund vs infinitive', type:'gap',
 s:'The subject of the sentence.', h:'start of the sentence',
 t:'___ (get) up early is hard in winter.',
 a:['getting'],
 r:"A verb used as the <b>subject</b> of a sentence takes the <b>-ing</b> form."},

/* ---------- Modals of deduction ---------- */
{id:'b1-moddeduc-001', level:'B1', skill:'grammar', topic:'Modals of deduction', type:'choice',
 s:'Her car is outside the office.', h:'almost certain',
 t:'She ___ be at work.',
 options:["can't",'must','might not'],
 a:['must'],
 r:"<b>must</b> = I am almost sure it is true &middot; <b>can't</b> = I am almost sure it is false &middot; <b>might / could</b> = possible."},

{id:'b1-moddeduc-002', level:'B1', skill:'grammar', topic:'Modals of deduction', type:'fix',
 s:'Correct the sentence.', h:'modal + base verb',
 t:'He must to be tired after that flight.',
 a:['he must be tired after that flight.'],
 r:"Modals (<b>must, can, should, might, will</b>) are never followed by <i>to</i>."},

{id:'b1-moddeduc-003', level:'B1', skill:'grammar', topic:'Modals of deduction', type:'choice',
 s:'He is only nineteen.', h:'impossible',
 t:'That ___ be his son. He is far too young.',
 options:["can't",'mustn\'t','shouldn\'t'],
 a:["can't"],
 r:"For a <b>logically impossible</b> conclusion, English uses <b>can't</b>, never <i>mustn't</i>."},

/* ---------- Modals of obligation ---------- */
{id:'b1-modobl-001', level:'B1', skill:'grammar', topic:'Modals of obligation', type:'choice',
 s:'Entry to the museum is free.', h:'no obligation',
 t:'You ___ pay to get in.',
 options:["mustn't",'have to',"don't have to"],
 a:["don't have to"],
 r:"<b>don't have to</b> = it is not necessary &middot; <b>mustn't</b> = it is prohibited. Completely different meanings.",
 es:"Trampa clasica: 'no tienes que pagar' es <i>don't have to</i>, no <i>mustn't</i>."},

{id:'b1-modobl-002', level:'B1', skill:'grammar', topic:'Modals of obligation', type:'build',
 s:'A rule in the building.', h:'prohibition',
 t:'Write a sentence: you / not / smoke / in the corridor. (prohibition)',
 a:["you mustn't smoke in the corridor."],
 r:"<b>mustn't + base verb</b> expresses prohibition."},

{id:'b1-modobl-003', level:'B1', skill:'grammar', topic:'Modals of obligation', type:'gap',
 s:'Past obligation.', h:'past of must',
 t:'I ___ (must) work last Saturday.',
 a:['had to'],
 r:"<b>must</b> has no past form. Use <b>had to</b>."},

/* ---------- Future forms ---------- */
{id:'b1-fut-001', level:'B1', skill:'grammar', topic:'Future forms', type:'choice',
 s:'It is written in your diary with a time.', h:'fixed arrangement',
 t:'I ___ my dentist at four tomorrow.',
 options:['will see','am seeing','see'],
 a:['am seeing'],
 r:"A <b>fixed arrangement</b> with another person uses the <b>present continuous</b>."},

{id:'b1-fut-002', level:'B1', skill:'grammar', topic:'Future forms', type:'fix',
 s:'Correct the sentence.', h:'you can see the clouds',
 t:'Look at those clouds. It will rain.',
 a:["look at those clouds. it's going to rain.","look at those clouds. it is going to rain."],
 r:"When there is <b>evidence right now</b>, use <b>going to</b>. <i>will</i> is for predictions or decisions made at the moment of speaking."},

{id:'b1-fut-003', level:'B1', skill:'grammar', topic:'Future forms', type:'choice',
 s:'The phone rings and you stand up.', h:'decided this second',
 t:"That's the door. I ___ it.",
 options:['will get','am getting','get'],
 a:['will get'],
 r:"A decision taken <b>at the moment of speaking</b> takes <b>will</b>."},

/* ---------- Question tags ---------- */
{id:'b1-tag-001', level:'B1', skill:'grammar', topic:'Question tags', type:'gap',
 s:'Confirm what you believe is true.', h:'positive sentence',
 t:"You're from Chile, ___?",
 a:["aren't you"],
 r:"Positive sentence &rarr; <b>negative tag</b>, using the same auxiliary."},

{id:'b1-tag-002', level:'B1', skill:'grammar', topic:'Question tags', type:'gap',
 s:'Confirm a negative fact.', h:'negative sentence',
 t:"She didn't call, ___?",
 a:['did she'],
 r:"Negative sentence &rarr; <b>positive tag</b>: did she?"},

{id:'b1-tag-003', level:'B1', skill:'grammar', topic:'Question tags', type:'gap',
 s:'No auxiliary in the sentence.', h:'present simple',
 t:'They live near the park, ___?',
 a:["don't they"],
 r:"With no auxiliary in the main clause, the tag borrows <b>do / does / did</b>."},

/* ---------- Connectors ---------- */
{id:'b1-conn-001', level:'B1', skill:'grammar', topic:'Connectors', type:'choice',
 s:'Contrast followed by a noun.', h:'+ noun',
 t:'___ the rain, we went for a walk.',
 options:['Although','Despite','However'],
 a:['Despite'],
 r:"<b>Despite / In spite of</b> + noun or -ing &middot; <b>Although</b> + subject + verb &middot; <b>However</b> + comma, new sentence."},

{id:'b1-conn-002', level:'B1', skill:'grammar', topic:'Connectors', type:'fix',
 s:'Correct the sentence.', h:'one connector is enough',
 t:'Although the traffic was bad, but we arrived on time.',
 a:['although the traffic was bad, we arrived on time.','although the traffic was bad we arrived on time.'],
 r:"English never doubles the contrast: use <b>although</b> OR <b>but</b>, not both.",
 es:"En espanol 'aunque... pero' suena aceptable; en ingles es un error."},

{id:'b1-conn-003', level:'B1', skill:'grammar', topic:'Connectors', type:'build',
 s:'Join the two ideas to express purpose.', h:'so that',
 t:'Join with "so that": I left early / I could catch the train.',
 a:['i left early so that i could catch the train.'],
 r:"<b>so that + subject + can / could</b> expresses purpose. <b>in order to + base verb</b> when the subject is the same."},

{id:'b1-conn-004', level:'B1', skill:'grammar', topic:'Connectors', type:'choice',
 s:'Add a contrasting idea in a new sentence.', h:'new sentence',
 t:'The flat is small. ___, it is very bright.',
 options:['Although','Despite','However'],
 a:['However'],
 r:"<b>However</b> starts a new sentence and is followed by a comma."},

/* ---------- too / enough ---------- */
{id:'b1-too-001', level:'B1', skill:'grammar', topic:'too / enough', type:'fix',
 s:'Correct the sentence.', h:'too + adjective',
 t:'The coffee is too much hot.',
 a:['the coffee is too hot.'],
 r:"<b>too + adjective</b>. <i>too much</i> only goes with uncountable nouns (too much sugar)."},

{id:'b1-too-002', level:'B1', skill:'grammar', topic:'too / enough', type:'gap',
 s:'He is seventeen.', h:'after the adjective',
 t:"He isn't old ___ to drive.",
 a:['enough'],
 r:"<b>enough</b> goes <b>after</b> an adjective (old enough) but <b>before</b> a noun (enough money)."},

/* ---------- Quantifiers ---------- */
{id:'b1-quant-001', level:'B1', skill:'grammar', topic:'Quantifiers', type:'choice',
 s:'Countable noun, small number.', h:'people',
 t:'There were ___ people at the party, maybe ten.',
 options:['a few','a little','much'],
 a:['a few'],
 r:"<b>a few</b> + countable plural &middot; <b>a little</b> + uncountable."},

{id:'b1-quant-002', level:'B1', skill:'grammar', topic:'Quantifiers', type:'gap',
 s:'Uncountable noun, small amount.', h:'money',
 t:'I have ___ money, but not much.',
 a:['a little'],
 r:"<b>a little</b> = a small amount (positive). <b>little</b> alone = almost none (negative)."},

{id:'b1-quant-003', level:'B1', skill:'grammar', topic:'Quantifiers', type:'choice',
 s:'Neither option is possible.', h:'two options',
 t:'___ of the two flats was suitable, so we kept looking.',
 options:['None','Neither','Any'],
 a:['Neither'],
 r:"<b>Neither</b> for two things &middot; <b>None</b> for three or more."}

);
