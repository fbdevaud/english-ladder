/* ============================================================
   TENSE SPRINT - BANCO DE CONTENIDO B1 / VOCABULARIO  (objetivo A2 -> B1)
   Phrasal verbs, collocations, formacion de palabras y falsos amigos.
   Este archivo SOLO contiene contenido. Nunca logica de la app.
   ============================================================ */

window.SYLLABUS = window.SYLLABUS || {};
window.SYLLABUS.B1 = (window.SYLLABUS.B1 || []).concat([
  'Phrasal verbs: work & study',
  'Phrasal verbs: social',
  'Phrasal verbs: problems',
  'Phrasal verbs: travel',
  'Phrasal verbs: communication',
  'Collocations',
  'Word formation',
  'Confusing pairs'
]);

window.BANK = window.BANK || [];
window.BANK.push(

/* ---------- Phrasal verbs: work & study ---------- */
{id:'b1-pv-001', level:'B1', skill:'vocab', topic:'Phrasal verbs: work & study', type:'choice',
 s:'The client cannot attend today.', h:'postpone',
 t:'We had to ___ the meeting until Friday.',
 options:['put off','put on','put up'],
 a:['put off'],
 r:"<b>put something off</b> = postpone it. (put on = wear &middot; put up with = tolerate)"},

{id:'b1-pv-002', level:'B1', skill:'vocab', topic:'Phrasal verbs: work & study', type:'choice',
 s:'She is being promoted.', h:'accept responsibility',
 t:"She's going to ___ more responsibility next year.",
 options:['take on','take off','take up'],
 a:['take on'],
 r:"<b>take on</b> = accept work or responsibility. (take up = start a hobby &middot; take off = remove / leave the ground)"},

{id:'b1-pv-003', level:'B1', skill:'vocab', topic:'Phrasal verbs: work & study', type:'gap',
 s:'A complaint has arrived.', h:'investigate',
 t:'The manager will look ___ the problem and reply tomorrow.',
 a:['into'],
 r:"<b>look into</b> = investigate. (look after = take care of &middot; look for = search &middot; look up = check in a source)"},

{id:'b1-pv-004', level:'B1', skill:'vocab', topic:'Phrasal verbs: work & study', type:'choice',
 s:'The report is due on Monday.', h:'submit',
 t:'I need to ___ this report before the deadline.',
 options:['hand in','hand out','hand over'],
 a:['hand in'],
 r:"<b>hand in</b> = submit work to a teacher or boss. (hand out = distribute)"},

{id:'b1-pv-005', level:'B1', skill:'vocab', topic:'Phrasal verbs: work & study', type:'gap',
 s:'Encourage someone who wants to quit.', h:'quit',
 t:"Don't give ___. You're almost there.",
 a:['up'],
 r:"<b>give up</b> = stop trying, or quit a habit."},

{id:'b1-pv-006', level:'B1', skill:'vocab', topic:'Phrasal verbs: work & study', type:'gap',
 s:'You missed two classes.', h:'reach the same level',
 t:'I need to catch ___ on the lessons I missed.',
 a:['up'],
 r:"<b>catch up (on / with)</b> = reach the level of the others, or do work you are behind on."},

/* ---------- Phrasal verbs: social ---------- */
{id:'b1-pv-010', level:'B1', skill:'vocab', topic:'Phrasal verbs: social', type:'choice',
 s:'You share a flat and everything is fine.', h:'good relationship',
 t:'I really ___ my new flatmates.',
 options:['get on with','get over','get through'],
 a:['get on with'],
 r:"<b>get on with somebody</b> = have a good relationship. (get over = recover from &middot; get through = survive / finish)",
 es:"Muy usado en Irlanda: 'How are you getting on?' = como te va."},

{id:'b1-pv-011', level:'B1', skill:'vocab', topic:'Phrasal verbs: social', type:'choice',
 s:'The wedding was cancelled.', h:'cancel',
 t:'They ___ the wedding at the last minute.',
 options:['called off','called on','called in'],
 a:['called off'],
 r:"<b>call off</b> = cancel an event that was arranged."},

{id:'b1-pv-012', level:'B1', skill:'vocab', topic:'Phrasal verbs: social', type:'gap',
 s:'Weekend plans with friends.', h:'spend time',
 t:'We usually hang ___ in the city centre at weekends.',
 a:['out'],
 r:"<b>hang out</b> = spend relaxed time with people."},

{id:'b1-pv-013', level:'B1', skill:'vocab', topic:'Phrasal verbs: social', type:'choice',
 s:'You had not planned to see them.', h:'by chance',
 t:'I ___ an old classmate on Grafton Street.',
 options:['ran into','ran over','ran out of'],
 a:['ran into'],
 r:"<b>run into somebody</b> = meet by chance. (run out of = have none left &middot; run over = hit with a vehicle)"},

/* ---------- Phrasal verbs: problems ---------- */
{id:'b1-pv-020', level:'B1', skill:'vocab', topic:'Phrasal verbs: problems', type:'choice',
 s:'A customer is complaining.', h:'handle',
 t:'Can you ___ this problem, please?',
 options:['deal with','deal in','deal on'],
 a:['deal with'],
 r:"<b>deal with</b> = handle a problem or a person."},

{id:'b1-pv-021', level:'B1', skill:'vocab', topic:'Phrasal verbs: problems', type:'gap',
 s:'The car stopped working.', h:'stop working',
 t:'My car broke ___ on the M50.',
 a:['down'],
 r:"<b>break down</b> = stop working (machines), or lose emotional control."},

{id:'b1-pv-022', level:'B1', skill:'vocab', topic:'Phrasal verbs: problems', type:'choice',
 s:'The confusion is now resolved.', h:'resolve',
 t:'It took a week to ___ the misunderstanding.',
 options:['sort out','sort through','sort off'],
 a:['sort out'],
 r:"<b>sort out</b> = organise or resolve something confused. Extremely common in Ireland."},

{id:'b1-pv-023', level:'B1', skill:'vocab', topic:'Phrasal verbs: problems', type:'gap',
 s:'There is no milk left.', h:'finish the supply',
 t:'We have run ___ ___ milk again.',
 a:['out of'],
 r:"<b>run out of + noun</b> = have no more of something."},

{id:'b1-pv-024', level:'B1', skill:'vocab', topic:'Phrasal verbs: problems', type:'choice',
 s:'The noise from upstairs never stops.', h:'tolerate',
 t:"I can't ___ that noise any longer.",
 options:['put up with','put off','put down'],
 a:['put up with'],
 r:"<b>put up with</b> = tolerate something unpleasant."},

/* ---------- Phrasal verbs: travel ---------- */
{id:'b1-pv-030', level:'B1', skill:'vocab', topic:'Phrasal verbs: travel', type:'gap',
 s:'The journey started very early.', h:'start a journey',
 t:'We set ___ at six in the morning.',
 a:['off','out'],
 r:"<b>set off / set out</b> = begin a journey."},

{id:'b1-pv-031', level:'B1', skill:'vocab', topic:'Phrasal verbs: travel', type:'choice',
 s:'At the airport, two hours before the flight.', h:'airport / hotel',
 t:'You must ___ two hours before departure.',
 options:['check in','check out','check up'],
 a:['check in'],
 r:"<b>check in</b> = register at an airport or hotel &middot; <b>check out</b> = leave the hotel."},

{id:'b1-pv-032', level:'B1', skill:'vocab', topic:'Phrasal verbs: travel', type:'gap',
 s:'You are in the car with a friend.', h:'leave someone somewhere',
 t:'Can you drop me ___ at the station?',
 a:['off'],
 r:"<b>drop somebody off</b> = leave a person at a place from a vehicle. (pick somebody up = the opposite)"},

{id:'b1-pv-033', level:'B1', skill:'vocab', topic:'Phrasal verbs: travel', type:'choice',
 s:'The plane leaves the ground.', h:'plane',
 t:'The flight to Madrid ___ at 7.15.',
 options:['takes off','takes up','takes over'],
 a:['takes off'],
 r:"<b>take off</b> = leave the ground (planes), or remove clothes."},

/* ---------- Phrasal verbs: communication ---------- */
{id:'b1-pv-040', level:'B1', skill:'vocab', topic:'Phrasal verbs: communication', type:'choice',
 s:'Nobody wanted to talk about money.', h:'introduce a topic',
 t:'She ___ the subject of salaries during dinner.',
 options:['brought up','brought about','brought in'],
 a:['brought up'],
 r:"<b>bring up</b> = introduce a topic. (It also means <i>raise a child</i>.)"},

{id:'b1-pv-041', level:'B1', skill:'vocab', topic:'Phrasal verbs: communication', type:'gap',
 s:'Nobody had noticed the change.', h:'draw attention to a fact',
 t:'He pointed ___ that the deadline had changed.',
 a:['out'],
 r:"<b>point out</b> = tell someone a fact they had not noticed."},

{id:'b1-pv-042', level:'B1', skill:'vocab', topic:'Phrasal verbs: communication', type:'gap',
 s:'You were reading an article.', h:'find by chance',
 t:'I came ___ this word in an article yesterday.',
 a:['across'],
 r:"<b>come across</b> = find something by chance."},

{id:'b1-pv-043', level:'B1', skill:'vocab', topic:'Phrasal verbs: communication', type:'choice',
 s:'The signal was bad and you could not hear.', h:'end a phone call',
 t:'Sorry, I think you ___ on me. The line went dead.',
 options:['hung up','hung on','hung out'],
 a:['hung up'],
 r:"<b>hang up</b> = end a phone call &middot; <b>hang on</b> = wait a moment."},

/* ---------- Collocations ---------- */
{id:'b1-coll-001', level:'B1', skill:'vocab', topic:'Collocations', type:'choice',
 s:'The deadline is today.', h:'decision',
 t:'I need to ___ a decision today.',
 options:['make','do','take'],
 a:['make'],
 r:"<b>make</b> a decision, a mistake, an effort, progress, a phone call.",
 es:"En espanol 'tomar' una decision; en ingles nunca <i>take</i> a decision."},

{id:'b1-coll-002', level:'B1', skill:'vocab', topic:'Collocations', type:'choice',
 s:'Ask politely for help.', h:'favour',
 t:'Could you ___ me a favour?',
 options:['do','make','give'],
 a:['do'],
 r:"<b>do</b> a favour, homework, the shopping, business, your best."},

{id:'b1-coll-003', level:'B1', skill:'vocab', topic:'Collocations', type:'fix',
 s:'Correct the sentence.', h:'make vs do',
 t:'I make my homework every evening.',
 a:['i do my homework every evening.'],
 r:"<b>do</b> homework &middot; <b>make</b> dinner. There is no rule: these must be memorised as pairs."},

{id:'b1-coll-004', level:'B1', skill:'vocab', topic:'Collocations', type:'gap',
 s:'You are viewing a flat.', h:'take / have',
 t:"I'd like to ___ a look at the bedroom.",
 a:['take','have'],
 r:"<b>take / have a look</b>, <b>have a shower</b>, <b>take a break</b>, <b>have a rest</b>."},

{id:'b1-coll-005', level:'B1', skill:'vocab', topic:'Collocations', type:'choice',
 s:'You are improving.', h:'progress',
 t:"You've ___ a lot of progress this term.",
 options:['made','done','taken'],
 a:['made'],
 r:"<b>make progress</b> is fixed. Never <i>do progress</i>."},

/* ---------- Word formation ---------- */
{id:'b1-wf-001', level:'B1', skill:'vocab', topic:'Word formation', type:'gap',
 s:'Turn the verb into a noun.', h:'-ment',
 t:'The ___ (manage) team meets on Mondays.',
 a:['management'],
 r:"<b>-ment</b> turns many verbs into nouns: manage &rarr; management, develop &rarr; development."},

{id:'b1-wf-002', level:'B1', skill:'vocab', topic:'Word formation', type:'gap',
 s:'Turn the noun into an adjective.', h:'-ful',
 t:"She's very ___ (help) with new students.",
 a:['helpful'],
 r:"<b>-ful</b> = full of it &middot; <b>-less</b> = without it: helpful / helpless."},

{id:'b1-wf-003', level:'B1', skill:'vocab', topic:'Word formation', type:'gap',
 s:'The opposite meaning.', h:'-less',
 t:"This charger is completely ___ (use). It doesn't work.",
 a:['useless'],
 r:"<b>useful</b> &harr; <b>useless</b>. Watch the spelling: only one <i>l</i>."},

{id:'b1-wf-004', level:'B1', skill:'vocab', topic:'Word formation', type:'gap',
 s:'Negative prefix.', h:'un-',
 t:"The instructions were ___ (clear), so nobody understood.",
 a:['unclear'],
 r:"Common negative prefixes: <b>un-</b> (unclear), <b>im-</b> (impossible), <b>in-</b> (incorrect), <b>dis-</b> (dishonest)."},

/* ---------- Confusing pairs (falsos amigos) ---------- */
{id:'b1-fp-001', level:'B1', skill:'vocab', topic:'Confusing pairs', type:'choice',
 s:'Talk about where you live now.', h:'right now, these days',
 t:'___ I live in Dublin, but I am from Chile.',
 options:['Actually','Currently','Eventually'],
 a:['Currently'],
 r:"<b>actually</b> = in fact / in reality &middot; <b>currently</b> = at the present time &middot; <b>eventually</b> = finally, after a long time.",
 es:"Trio de falsos amigos: actualmente = currently; actually = en realidad; eventualmente = possibly, no eventually."},

{id:'b1-fp-002', level:'B1', skill:'vocab', topic:'Confusing pairs', type:'choice',
 s:'She always makes good decisions.', h:'good judgement',
 t:"She's a very ___ person. She never panics.",
 options:['sensible','sensitive','sensitivity'],
 a:['sensible'],
 r:"<b>sensible</b> = with good judgement &middot; <b>sensitive</b> = easily affected emotionally.",
 es:"sensible (EN) = sensato &middot; sensitive (EN) = sensible (ES)."},

{id:'b1-fp-003', level:'B1', skill:'vocab', topic:'Confusing pairs', type:'choice',
 s:'You forgot his name in front of everyone.', h:'how you felt',
 t:'I was so ___ when I forgot his name.',
 options:['embarrassing','embarrassed','embarrass'],
 a:['embarrassed'],
 r:"<b>-ed</b> describes how <b>you feel</b> &middot; <b>-ing</b> describes the <b>thing</b> that causes it.",
 es:"Ojo tambien con 'embarazada': eso es <i>pregnant</i>."},

{id:'b1-fp-004', level:'B1', skill:'vocab', topic:'Confusing pairs', type:'fix',
 s:'Correct the sentence.', h:'attend',
 t:'I will assist to the meeting tomorrow.',
 a:['i will attend the meeting tomorrow.'],
 r:"<b>attend</b> = go to an event (no preposition). <b>assist</b> means <i>help</i>.",
 es:"asistir a una reunion = attend a meeting."},

{id:'b1-fp-005', level:'B1', skill:'vocab', topic:'Confusing pairs', type:'choice',
 s:'The film lasted three hours and nothing happened.', h:'the film, not you',
 t:'The film was three hours long. It was really ___.',
 options:['bored','boring','bore'],
 a:['boring'],
 r:"The film causes the feeling &rarr; <b>-ing</b>. You receive it &rarr; <b>-ed</b> (I was bored)."},

{id:'b1-fp-006', level:'B1', skill:'vocab', topic:'Confusing pairs', type:'choice',
 s:'Say how much you enjoy something.', h:'like a lot',
 t:'I ___ Irish music.',
 options:['like a lot','really like','like very much it'],
 a:['really like'],
 r:"<b>really like</b> or <b>like it a lot</b>. Never separate the verb from its object with <i>a lot</i>.",
 es:"'Me gusta mucho la musica' no se traduce palabra por palabra."}

);
