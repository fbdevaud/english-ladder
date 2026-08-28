# Cómo abrir un chat listo para recibir las fotos de tus tests

Hay dos escenarios según dónde escribas. Elige el que corresponda.

---

## A) En Claude Code, abierto en esta carpeta

No necesitas pegar nada. Escribe:

```
/clase 28 ago - unit 4
```

…adjunta las fotos, y envía. El comando ya está instalado en `.claude/commands/clase.md`:
lee la guía del proyecto, transcribe las imágenes, diagnostica los patrones de error,
escribe los ejercicios nuevos en `content-clase.js` y corre el validador.

Es la vía recomendada: es la única donde Claude puede **editar los archivos por ti**.

---

## B) En claude.ai u otro chat sin acceso a la carpeta

Ahí Claude no ve tus archivos, así que te devolverá un bloque de código que tú pegas
en `content-clase.js`. Copia este prompt completo, adjunta las fotos y envía:

---

Soy hispanohablante y estudio inglés presencialmente en Irlanda. Objetivo: **pasar de A2
a B1**, manteniendo A2 consolidado. Prioridades: gramática B1 y vocabulario / phrasal verbs.

Te adjunto **fotos de una guía o test de mi clase**. Quiero que:

**1.** Transcribas lo que ves: enunciado, mi respuesta y la corrección del profesor si aparece.
Si algo no se lee con seguridad, dímelo y pídeme la foto de nuevo — no inventes.

**2.** Me expliques **el patrón de error**, no sólo la frase correcta. Agrupa los errores que
nacen de la misma regla. Cuando el error venga de traducir literalmente del español,
márcalo con el contraste ES→EN.

**3.** Generes 2 o 3 ejercicios nuevos por cada patrón fallado, en este formato exacto
(objetos JavaScript, uno por ejercicio, dentro de un solo bloque de código):

```js
{id:'cl-2026-08-28-001', level:'B1', skill:'grammar',
 topic:'Present perfect vs past simple', type:'fix',
 src:'28 ago - unit 4',
 s:'Correct the sentence.',      // instrucción
 h:'since',                       // pista corta (opcional)
 t:'I know her since 2020.',      // el enunciado
 a:['i have known her since 2020.'],   // respuestas aceptadas, minúsculas, sin punto final
 r:"With <b>since</b> use the present perfect.",   // la regla, EN INGLÉS
 es:"'La conozco desde 2020' obliga a present perfect."},  // contraste ES→EN (opcional)
```

Reglas del formato, respétalas:
- `type` sólo puede ser: `build` (escribir la frase completa desde pistas separadas por `/`),
  `fix` (corregir la frase), `gap` (el enunciado **debe** llevar `___` y se responde sólo
  lo que falta), o `choice` (añade `options:['a','b','c']`, y `a[0]` debe estar entre ellas).
- `level` sólo `'A2'` o `'B1'`. `skill` sólo `'grammar'` o `'vocab'`.
- En `choice`, las distractoras deben ser **inequívocamente** incorrectas.
- No listes variantes de contracción en `a`: `doesn't` ya equivale a `does not`.
  Sí lista alternativas reales (`who` / `that`, con y sin `that` en reported speech).
- `r` en inglés. `es` sólo cuando el error nazca de traducir del español.
- Los `topic` deben repetirse entre semanas para que mis estadísticas se acumulen.
  Usa uno de estos si encaja:
  **A2** — Present simple · Present continuous · Past simple · Past continuous ·
  Present perfect · Future: going to / will · Comparatives & superlatives ·
  Modals: should / have to · Countable & uncountable · Prepositions ·
  Adverbs of frequency · There is / there are · Articles
  **B1** — Present perfect vs past simple · Present perfect continuous · Past perfect ·
  used to / would · First conditional · Second conditional · Passive voice ·
  Reported speech · Relative clauses · Gerund vs infinitive · Modals of deduction ·
  Modals of obligation · Future forms · Question tags · Connectors · too / enough ·
  Quantifiers · Phrasal verbs: work & study / social / problems / travel / communication ·
  Collocations · Word formation · Confusing pairs

**4.** Cierres diciéndome **un solo hueco prioritario** para esta semana, no una lista.

Explicaciones en español, reglas y ejemplos en inglés. No suavices los errores.

---

Después pegas el bloque dentro de `content-clase.js`, entre el `window.BANK.push(` y el
`);` final, separando cada objeto con una coma. Guarda y ejecuta:

```bash
node validar.js
```

Si dice `OK: sin problemas`, ya están en tu práctica diaria.
