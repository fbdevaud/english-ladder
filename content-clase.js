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
   es:"Equivale a 'ni de broma' o 'de ninguna manera'."}

);
