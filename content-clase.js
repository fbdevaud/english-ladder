/* ============================================================
   TENSE SPRINT - CONTENIDO DE TUS CLASES EN IRLANDA
   ------------------------------------------------------------
   Este archivo es el destino de todo lo que salga de tus guias,
   tests y correcciones reales de la escuela.

   En cada chat nuevo, me pasas la guia o el test y yo agrego
   items AQUI (no en los otros archivos), con:
     - id que empieza por 'cl-'
     - campo src: fecha o nombre de la clase
     - topic: reutilizando un topic ya existente en SYLLABUS
       cuando sea posible, para que las estadisticas se acumulen.

   Los items de este archivo aparecen mezclados con los del nivel
   que indique su campo level ('A2' o 'B1').
   ============================================================ */

/* Topic nuevo (no existia ninguno para "would rather"). Se agrega aqui
   para no tocar los otros archivos; el motor lo lee igual que el resto. */
window.SYLLABUS = window.SYLLABUS || {};
window.SYLLABUS.B1 = (window.SYLLABUS.B1 || []).concat(['Would rather']);

window.BANK = window.BANK || [];
window.BANK.push(

  /* ===== PATRON A: tiempo terminado => past simple =====
     De la pizarra: "I haven't finished this course" -> "I didn't finish
     this course"; "I have been woke up at 8am" -> "I woke up at 8am". */

  {id:'cl-2026-08-28-001', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'fix',
   src:'Clase 28 ago - unit 4',
   s:'Correct the sentence.', h:'the course ended in June',
   t:"I haven't finished this course, so I repeated it.",
   a:["i didn't finish this course, so i repeated it."],
   r:"The course is over, so the time period is <b>closed</b>. Closed time takes the <b>past simple</b>, never the present perfect.",
   es:"En espanol 'no he terminado el curso' vale aunque el curso ya acabo; en ingles no."},

  {id:'cl-2026-08-28-002', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'fix',
   src:'Clase 28 ago - unit 4',
   s:'Correct the sentence.', h:'at 8am = finished time',
   t:'I have been woke up at 8am yesterday.',
   a:['i woke up at 8am yesterday.'],
   r:"Two problems: <b>at 8am yesterday</b> is finished time, so use the past simple <b>woke</b>. And <i>have been</i> is never followed by a past simple form.",
   es:"'Me he despertado a las 8' se dice en espanol, pero el ingles exige past simple con hora cerrada."},

  {id:'cl-2026-08-28-003', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'choice',
   src:'Clase 28 ago - unit 4',
   s:'Choose the correct form.',
   t:'I ___ my old job three months ago.',
   options:['left','have left','had left'],
   a:['left'],
   r:"<b>ago</b> always points to a finished moment, so it forces the past simple.",
   es:"'Hace tres meses' cierra el periodo: past simple obligatorio."},

  {id:'cl-2026-08-28-004', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'gap',
   src:'Clase 28 ago - unit 4',
   s:'Write the correct form of the verb in brackets.', h:'since',
   t:'I ___ (not eat) meat since January.',
   a:["haven't eaten"],
   r:"<b>since</b> opens a period that is still running, so it takes the present perfect.",
   es:"Aqui el periodo sigue abierto; el contraste con 'ago' es lo que decide el tiempo verbal."},

  {id:'cl-2026-08-28-005', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'choice',
   src:'Clase 28 ago - unit 4',
   s:'Choose the correct question.',
   t:"You want to ask about the countries someone has seen in their whole life.",
   options:['Which countries have you visited in your life?','Which countries did you visit in your life?','Which countries do you visit in your life?'],
   a:['which countries have you visited in your life?'],
   r:"<b>in your life</b> describes a period that is still open, so use the present perfect.",
   es:"Una vida en curso no es tiempo cerrado, aunque en la pizarra apareciera con past simple."},

  {id:'cl-2026-08-28-006', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'fix',
   src:'Clase 28 ago - unit 4',
   s:'Correct the sentence.', h:'last night',
   t:'I have eaten dinner at nine last night.',
   a:['i ate dinner at nine last night.'],
   r:"<b>last night</b> is finished time. Use the past simple <b>ate</b>.",
   es:"Mismo patron que 'woke up at 8am': marcador de tiempo cerrado, past simple."},

  /* ===== PATRON B: It's the first time I've... ===== */

  {id:'cl-2026-08-28-007', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'fix',
   src:'Clase 28 ago - unit 4',
   s:'Correct the sentence.', h:'This is...',
   t:"I've driven here for the first time.",
   a:["this is the first time i've driven here.","it's the first time i've driven here."],
   r:"Say <b>This / It is the first time + present perfect</b>. <i>For the first time</i> belongs to a past simple sentence instead.",
   es:"El error nace de mezclar dos estructuras: elige una de las dos, no las juntes."},

  {id:'cl-2026-08-28-008', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'gap',
   src:'Clase 28 ago - unit 4',
   s:'Complete with the correct form of the verb in brackets.', h:'first time + present perfect',
   t:"It's the first time I ___ (be) in Ireland.",
   a:['have been'],
   r:"After <b>It's the first time</b> English uses the present perfect, not the present simple.",
   es:"En espanol dirias 'es la primera vez que estoy'; en ingles el verbo va en present perfect."},

  {id:'cl-2026-08-28-009', level:'B1', skill:'grammar',
   topic:'Present perfect vs past simple', type:'build',
   src:'Clase 28 ago - unit 4',
   s:'Build a past simple sentence with the words given.', h:'keep the word order',
   t:'I / ride / a horse / for the first time / last summer',
   a:['i rode a horse for the first time last summer'],
   r:"With a finished time marker, <b>for the first time</b> sits inside a past simple sentence.",
   es:"Esta es la otra mitad del contraste: aqui 'for the first time' si es correcto."},

  /* ===== PATRON C: phrasal verbs de la pizarra ===== */

  {id:'cl-2026-08-28-010', level:'B1', skill:'vocab',
   topic:'Phrasal verbs: social', type:'gap',
   src:'Clase 28 ago - unit 4',
   s:'Complete with a phrasal verb meaning "spend time relaxing with people".', h:'hang ___',
   t:'We usually ___ out in the park after class.',
   a:['hang'],
   r:"<b>hang out (with someone)</b> = spend time together informally.",
   es:"Equivale a 'juntarse' o 'pasar el rato', no a 'colgar'."},

  {id:'cl-2026-08-28-011', level:'B1', skill:'vocab',
   topic:'Phrasal verbs: social', type:'choice',
   src:'Clase 28 ago - unit 4',
   s:'Choose the phrasal verb that means "have a good relationship with".',
   t:'I ___ my coworkers, we never argue.',
   options:['get along with','get over','get up with'],
   a:['get along with'],
   r:"<b>get along with someone</b> = have a good relationship. <i>Get over</i> means recover from something.",
   es:"'Llevarse bien con alguien' es get along with, no 'get well with'."},

  {id:'cl-2026-08-28-012', level:'B1', skill:'vocab',
   topic:'Phrasal verbs: work & study', type:'choice',
   src:'Clase 28 ago - unit 4',
   s:'Choose the phrasal verb that means "start a new hobby".',
   t:'I want to ___ photography next year.',
   options:['take up','give up','turn up'],
   a:['take up'],
   r:"<b>take up</b> = start a new activity. <b>Give up</b> is the opposite: quit or stop.",
   es:"El profe los dio en pareja: take up = empezar, give up = dejar."},

  {id:'cl-2026-08-28-013', level:'B1', skill:'vocab',
   topic:'Phrasal verbs: work & study', type:'gap',
   src:'Clase 28 ago - unit 4',
   s:'Complete with the particle that makes "give" mean "quit / stop".', h:'give ___',
   t:'She decided to give ___ smoking last year.',
   a:['up'],
   r:"<b>give up (doing) something</b> = quit a habit.",
   es:"'Dejar de fumar' es give up smoking, con gerundio detras."},

  {id:'cl-2026-08-28-014', level:'B1', skill:'vocab',
   topic:'Phrasal verbs: social', type:'fix',
   src:'Clase 28 ago - unit 4',
   s:'Correct the sentence.', h:'look forward to + -ing',
   t:'I am looking forward to see you next week.',
   a:['i am looking forward to seeing you next week.'],
   r:"In <b>look forward to</b>, <i>to</i> is a preposition, so the verb after it takes <b>-ing</b>.",
   es:"Es la trampa clasica: no es el 'to' del infinitivo, asi que va 'seeing', no 'see'."},

  {id:'cl-2026-08-28-015', level:'B1', skill:'vocab',
   topic:'Phrasal verbs: social', type:'gap',
   src:'Clase 28 ago - unit 4',
   s:'Complete with the particle that makes "grow" mean "spend your childhood somewhere".', h:'grow ___',
   t:'I grew ___ in a small town near the coast.',
   a:['up'],
   r:"<b>grow up</b> = spend your childhood. Not the same as <i>grow</i> (get bigger).",
   es:"'Crecer' como persona en un lugar es grow up; 'grow' solo es aumentar de tamano."},

  /* ===== Lenguaje de certeza (pizarra 100% / 50% / 0%) ===== */

  {id:'cl-2026-08-28-016', level:'B1', skill:'grammar',
   topic:'Modals of deduction', type:'choice',
   src:'Clase 28 ago - unit 4',
   s:'Choose the option that expresses about 50% certainty.',
   t:'___ rain later, but I am not sure.',
   options:['It might','It definitely will','There is no way it will'],
   a:['it might'],
   r:"<b>might</b> sits in the middle of the certainty scale, like <i>maybe</i> and <i>perhaps</i>.",
   es:"La pizarra lo agrupo con maybe y perhaps: posibilidad, no certeza."},

  {id:'cl-2026-08-28-017', level:'B1', skill:'grammar',
   topic:'Modals of deduction', type:'choice',
   src:'Clase 28 ago - unit 4',
   s:'Choose the expression that means 0% possibility.',
   t:'Will he finish the marathon without training? ___.',
   options:['Not a chance','It is obvious','Perhaps'],
   a:['not a chance'],
   r:"<b>Not a chance</b> belongs with <i>no way</i> and <i>absolutely not</i> at the 0% end of the scale.",
   es:"Equivale a 'ni de broma' o 'de ninguna manera'."},

  /* ============================================================
     FILE TEST 7 (English File 3e Upper-Intermediate) - 5 nov 2026
     Resultado: Grammar 16/20, Vocabulary 13/20.
     ============================================================ */

  /* ===== PATRON D: colocaciones del cuerpo / lenguaje corporal =====
     Test ej. 5: dejados en blanco point / raise (voice, eyebrows) /
     shake (hands) / suck (thumb) / shrug (shoulders). */

  {id:'cl-2026-11-05-001', level:'B1', skill:'vocab',
   topic:'Collocations', type:'choice',
   src:'File Test 7 - 5 nov 2026',
   s:'Choose the correct verb.', h:'point your finger',
   t:'She ___ her finger at the thief and shouted, "That is the man!"',
   options:['pointed','showed','pushed'],
   a:['pointed'],
   r:"<b>point (your finger) at someone</b> = aim your finger to show who or what you mean. It is considered rude when you do it to people.",
   es:"En espanol 'senalar con el dedo'; en ingles el verbo es point y la preposicion es at."},

  {id:'cl-2026-11-05-002', level:'B1', skill:'vocab',
   topic:'Collocations', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Complete with the correct verb (past simple).', h:'eyebrows go up = surprise',
   t:'When I told him the price, he ___ his eyebrows but said nothing.',
   a:['raised','lifted'],
   r:"<b>raise your eyebrows</b> = show surprise or doubt without speaking. <b>Raise your voice</b> = speak louder because you are angry.",
   es:"'Levantar las cejas' es raise your eyebrows; en ingles se usa el plural."},

  {id:'cl-2026-11-05-003', level:'B1', skill:'vocab',
   topic:'Collocations', type:'fix',
   src:'File Test 7 - 5 nov 2026',
   s:'Correct the sentence.', h:'shake hands',
   t:'We shook the hand and sat down.',
   a:['we shook hands and sat down'],
   r:"The fixed expression is <b>shake hands (with someone)</b>: always plural, no article. You can also say <i>shake someone's hand</i>.",
   es:"'Darse la mano' se dice con plural en ingles: shake hands, nunca 'shake the hand'."},

  {id:'cl-2026-11-05-004', level:'B1', skill:'vocab',
   topic:'Collocations', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Complete with the correct verb (present simple, third person).', h:'a baby habit',
   t:'My nephew is three and he still ___ his thumb when he is tired.',
   a:['sucks'],
   r:"<b>suck your thumb</b> = put your thumb in your mouth, like a small child. Other body habits: <b>bite your nails</b>, <b>crack your knuckles</b>.",
   es:"'Chuparse el dedo' es suck your thumb. Ojo: el dedo gordo de la mano es thumb, no 'big finger'."},

  {id:'cl-2026-11-05-005', level:'B1', skill:'vocab',
   topic:'Collocations', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Complete with the correct body part.', h:'plural',
   t:'When I asked Eric about the exam, he just shrugged his ___ and walked away.',
   a:['shoulders'],
   r:"<b>shrug your shoulders</b> = lift them for a moment to say \"I don't know\" or \"I don't care\".",
   es:"'Encogerse de hombros' es shrug your shoulders; en ingles tambien va en plural."},

  {id:'cl-2026-11-05-006', level:'B1', skill:'vocab',
   topic:'Collocations', type:'choice',
   src:'File Test 7 - 5 nov 2026',
   s:'Choose the correct verb.', h:'raise vs rise',
   t:"My dad didn't shout, but he ___ his voice when the waiter brought the wrong dish.",
   options:['raised','rose','elevated'],
   a:['raised'],
   r:"<b>raise</b> needs an object (<i>raise your voice, your hand, your eyebrows</i>). <b>Rise</b> has no object: <i>prices rise, the sun rises</i>.",
   es:"'Levantar la voz' es raise your voice. Rise es lo que hace algo por si solo."},

  /* ===== PATRON E: feel like + -ing / look as though ===== */

  {id:'cl-2026-11-05-007', level:'B1', skill:'grammar',
   topic:'Gerund vs infinitive', type:'choice',
   src:'File Test 7 - 5 nov 2026',
   s:'Choose the correct option.', h:'= I do not want to',
   t:"I don't ___ cooking tonight. Let's order a pizza.",
   options:['feel like','look like','sound like'],
   a:['feel like'],
   r:"<b>feel like + -ing</b> = want to do something (informal). <i>Look like</i> and <i>sound like</i> describe appearance or sound, not what you want.",
   es:"'Tengo ganas de cocinar' no es look like: es feel like cooking. Look = lo que se ve."},

  {id:'cl-2026-11-05-008', level:'B1', skill:'grammar',
   topic:'Gerund vs infinitive', type:'fix',
   src:'File Test 7 - 5 nov 2026',
   s:'Correct the sentence.', h:'like is a preposition',
   t:"I don't feel like to go out tonight.",
   a:["i don't feel like going out tonight"],
   r:"In <b>feel like</b>, <i>like</i> is a preposition, so the verb after it takes <b>-ing</b>.",
   es:"Igual que look forward to + -ing: no es el 'to' del infinitivo, aqui 'like' es preposicion."},

  {id:'cl-2026-11-05-009', level:'B1', skill:'grammar',
   topic:'Gerund vs infinitive', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Write the correct form of the verb in brackets.', h:'feel like + ...',
   t:'I feel like ___ (have) something sweet. Is there any chocolate?',
   a:['having'],
   r:"<b>feel like + -ing</b>: <i>feel like having</i>, <i>feel like going</i>.",
   es:"'Me apetece tomar algo dulce' = I feel like having something sweet."},

  {id:'cl-2026-11-05-010', level:'B1', skill:'grammar',
   topic:'Connectors', type:'choice',
   src:'File Test 7 - 5 nov 2026',
   s:'Choose the correct option.', h:'as ___',
   t:"He looks ___ he has seen a ghost!",
   options:['as though','as when','as that'],
   a:['as though'],
   r:"<b>look as if / as though + clause</b> = it seems that. <i>As when</i> and <i>as that</i> do not exist in this structure.",
   es:"'Parece como si hubiera visto un fantasma' = as if / as though, no 'as when' ('como cuando')."},

  {id:'cl-2026-11-05-011', level:'B1', skill:'grammar',
   topic:'Connectors', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Complete with the missing word.', h:'if / though',
   t:'It sounds as ___ you had a great weekend!',
   a:['if','though'],
   r:"<b>as if</b> and <b>as though</b> mean the same. After <i>look / sound / feel / seem</i> they introduce a full clause.",
   es:"Los dos equivalen a 'como si'."},

  {id:'cl-2026-11-05-012', level:'B1', skill:'grammar',
   topic:'Connectors', type:'choice',
   src:'File Test 7 - 5 nov 2026',
   s:'Choose the correct option.', h:'noun or clause?',
   t:'That cloud looks ___ a rabbit.',
   options:['like','as if','as though'],
   a:['like'],
   r:"<b>look like + noun</b> (<i>looks like a rabbit</i>). <b>Look as if / as though + clause</b> (<i>looks as if it is going to rain</i>).",
   es:"Si despues va un sustantivo, like; si va un sujeto y un verbo, as if / as though."},

  /* ===== PATRON F: would rather ===== */

  {id:'cl-2026-11-05-013', level:'B1', skill:'grammar',
   topic:'Would rather', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Write the correct form of the verb in brackets.', h:'different subject',
   t:"I'd rather you ___ (not leave) the window open. It's freezing.",
   a:["didn't leave"],
   r:"<b>would rather + different subject + past simple</b> (it refers to the present or future): <i>I'd rather you didn't leave</i>. Informally you may hear <i>don't</i>, but the exam answer is the past simple.",
   es:"En espanol usas subjuntivo ('prefiero que no dejes'); en ingles el tiempo pasado hace ese trabajo."},

  {id:'cl-2026-11-05-014', level:'B1', skill:'grammar',
   topic:'Would rather', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Write the correct form of the verb in brackets.', h:'same subject',
   t:"My brother says he'd rather ___ (not come) with us.",
   a:['not come'],
   r:"<b>would rather + same subject + (not) + base form</b>: <i>he'd rather not come</i>. No -s, no <i>doesn't</i>, no <i>to</i>.",
   es:"'Prefiere no venir' = he'd rather not come. El auxiliar 'would' ya lleva la conjugacion; el verbo siguiente queda en base."},

  {id:'cl-2026-11-05-015', level:'B1', skill:'grammar',
   topic:'Would rather', type:'gap',
   src:'File Test 7 - 5 nov 2026',
   s:'Write the correct form of the verb in brackets.', h:'different subject, be',
   t:"I'd rather you ___ (be) honest with me.",
   a:['were','was'],
   r:"<b>I'd rather you were / was</b>: with a different subject, English uses the past form even for the present. <i>Were</i> is more formal.",
   es:"'Preferiria que fueras sincero' = past form (were / was), no 'are'."},

  /* ===== PATRON G: avoid vs prevent (Confusing pairs) ===== */

  {id:'cl-2026-11-05-016', level:'B1', skill:'vocab',
   topic:'Confusing pairs', type:'choice',
   src:'File Test 7 - 5 nov 2026',
   s:'Choose the correct verb.', h:'prevent + object + from',
   t:'The new law will ___ companies from dumping waste in the river.',
   options:['prevent','avoid','refuse'],
   a:['prevent'],
   r:"<b>prevent someone from doing</b> = make it impossible. <b>Avoid doing</b> = stay away from something yourself, with no <i>from</i>.",
   es:"'Evitar' cubre los dos usos; en ingles: avoid (tu lo evitas) vs prevent (impides que otro lo haga)."},

  {id:'cl-2026-11-05-017', level:'B1', skill:'vocab',
   topic:'Confusing pairs', type:'fix',
   src:'File Test 7 - 5 nov 2026',
   s:'Correct the sentence.', h:'avoid + -ing',
   t:'I take the bus to prevent paying for parking.',
   a:['i take the bus to avoid paying for parking'],
   r:"You do the action to stay away from something yourself: <b>avoid + -ing</b>. <i>Prevent</i> needs someone else to be stopped.",
   es:"'Evitar pagar' es avoid paying; prevent exige 'impedir que alguien...'."},

  {id:'cl-2026-11-05-018', level:'B1', skill:'vocab',
   topic:'Confusing pairs', type:'fix',
   src:'File Test 7 - 5 nov 2026',
   s:'Correct the sentence.', h:'prevent',
   t:"The rain couldn't avoid us from enjoying the day.",
   a:["the rain couldn't prevent us from enjoying the day"],
   r:"With <b>from</b> you need <b>prevent</b>: <i>prevent someone from doing</i>. <i>Avoid</i> never takes <i>from</i>.",
   es:"'No pudo evitar que disfrutaramos' = couldn't prevent us from enjoying."}

);
