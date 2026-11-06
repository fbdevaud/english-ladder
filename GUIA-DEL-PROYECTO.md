# English Ladder — guía del proyecto

Objetivo doble: **mantener A1→A2 consolidado** y **avanzar A2→B1**.
Contexto: aprendizaje presencial en Irlanda, con guías y tests de la escuela.
Prioridades acordadas: **gramática B1** y **vocabulario / phrasal verbs**.

---

## 1. Archivos

| Archivo | Qué es | ¿Se toca? |
|---|---|---|
| `index.html` | **El motor.** UI, corrector, repetición espaciada, estadísticas, reporte. No contiene ni un solo ejercicio. | Rara vez |
| `content-a2.js` | Banco A2 (24 ítems) | Al ampliar A2 |
| `content-b1-grammar.js` | Banco B1 gramática (54 ítems) | Sí |
| `content-b1-vocab.js` | Banco B1 phrasal verbs, collocations, word formation, falsos amigos (38 ítems) | Sí |
| `content-clase.js` | **Ejercicios sacados de tus guías y tests reales.** Empieza vacío. | Cada semana |
| `validar.js` | Comprueba que el contenido nuevo no rompe nada (`node validar.js`) | Nunca |
| `build-bundle.js` | Genera `english-ladder.bundle.html`, la app en un solo archivo | Nunca |
| `PROMPT-NUEVO-CHAT.md` | El prompt listo para pegar al mandar fotos de un test | Nunca |
| `.claude/commands/clase.md` | El comando `/clase` de Claude Code | Nunca |
| `tense-sprint_v5.html` | La primera versión (A1→A2). Se conserva como respaldo. | Nunca |

Abrir la app: doble clic en **`index.html`**. Los cuatro archivos de contenido deben estar en la misma carpeta.

---

## 2. Cómo funciona (los cinco pilares)

**1. Tres niveles, mismo motor.** Botones `A2` / `B1` / `B2` arriba. Cada nivel tiene su propio syllabus, sus estadísticas y su tarea de escritura (80 palabras en A2, 120 en B1, 150 en B2). A2 y B1 no se archivan: quedan como repaso. El B2 es el nivel activo; por ahora se alimenta de los tests de clase (`content-clase.js`, que también define el syllabus B2).

**2. Repetición espaciada (Leitner, 5 cajas).** Cada ítem sube de caja al acertarlo y vuelve a la caja 1 al fallarlo. Los intervalos son 10 min → 1 día → 3 días → 7 días → 21 días. La sesión diaria trae primero lo que vence hoy, luego lo nuevo. Un ítem alcanza *mastered* en la caja 4. **Esto es lo que convierte práctica en retención:** si sólo entras cuando te acuerdas, el sistema no puede hacer su trabajo.

**3. Corrector con tres veredictos.**
- `right` — coincide con alguna respuesta aceptada, tolerando mayúsculas, puntuación final y contracciones (`doesn't` = `does not`, `she's gone` = `she has gone`).
- `almost` — errata de tecleo: una sola palabra distinta, de 4+ letras, a 1–2 pulsaciones. Cuenta como acierto pero te muestra la forma correcta.
- `wrong` — te subraya en rojo la primera palabra que se desvía y te da la regla.
En opción múltiple **no hay tolerancia**: elegir `has left` en vez de `had left` es error, no errata.

**4. Diagnóstico orientativo, nunca bloqueante.** *Level check* hace una pregunta por tema sin feedback y devuelve un mapa verde/ámbar/rojo. No aprueba ni reprueba, no cierra ningún contenido: sólo te dice dónde poner las siguientes sesiones. Puedes ignorarlo o repetirlo cuando quieras.

**5. Puente hacia los chats.** *Progress & report* genera un texto compacto con tu solidez por tema y tus últimos errores literales. Ese texto es lo que pegas en un chat nuevo.

---

## 3. Rutina recomendada

- **Diario, 10 min:** `Daily practice` en B1. Es lo único obligatorio.
- **Después de cada clase:** me pasas la guía o el test; yo genero ítems en `content-clase.js`.
- **Cuando un tema salga rojo:** `Drill one topic` sobre ese tema, 10 preguntas.
- **Cada 2 semanas:** `Level check` + me pegas el reporte.
- **Antes de un test de la escuela:** `Exam mode` (30 min, sin pistas) + `Writing task`.

---

## 4. Contrato del ítem

Todo ejercicio es un objeto con esta forma. **Los campos sin marcar son obligatorios.**

```js
{
 id:    'b1-ppps-005',   // único y estable: el progreso se guarda por id
 level: 'B2',            // 'A2' | 'B1' | 'B2'
 skill: 'grammar',       // 'grammar' | 'vocab'
 topic: 'Present perfect vs past simple',  // debe existir en SYLLABUS
 type:  'fix',           // 'build' | 'fix' | 'gap' | 'choice'
 s:     'Correct the sentence.',   // situación / instrucción
 h:     'since',                   // (opcional) pista, se oculta en examen
 t:     'I know her since 2020.',  // el enunciado
 a:     ['i have known her since 2020.'],  // respuestas aceptadas
 options: ['a','b','c'],           // SÓLO si type es 'choice'
 r:     "With <b>since</b> use the present perfect.",  // la regla, en inglés
 es:    "'La conozco desde 2020' obliga a present perfect.", // (opcional) nota contrastiva ES→EN
 src:   'Clase 28 ago - unit 4'    // (opcional) de dónde salió
}
```

**Los cuatro tipos**

| type | Qué escribe el alumno | Regla |
|---|---|---|
| `build` | La frase completa a partir de pistas | `t` lleva las piezas separadas por `/` |
| `fix` | La frase corregida completa | `t` es la frase con el error |
| `gap` | **Sólo** lo que falta | `t` debe contener `___` |
| `choice` | Elige una opción | `options` obligatorio; `a[0]` debe estar en `options` |

---

## 5. Reglas para escribir el campo `a`

1. **En minúsculas y sin punto final.** El corrector lo normaliza igual, pero mantiene el archivo legible.
2. **`a[0]` es la respuesta modelo**: es la que se muestra al fallar. Que sea la más natural.
3. **No listes variantes de contracción.** `doesn't` ya equivale a `does not`, y `she's gone` a `she has gone`. Listar ambas es ruido.
4. **Sí lista variantes reales**: `who` / `that`, `set off` / `set out`, con y sin `that` en reported speech.
5. **En `choice`, las distractoras deben ser inequívocamente incorrectas.** El validador las prueba una por una y falla si alguna se acepta.
6. **La regla `r` va en inglés** (inmersión). El campo `es` es sólo para el contraste con el español cuando el error nace de traducir literalmente. Úsalo con criterio, no en todos los ítems.

---

## 6. Validar antes de dar nada por bueno

Desde esta carpeta:

```bash
node validar.js
```

Comprueba: sintaxis de los cuatro archivos, ids únicos, campos obligatorios, que cada respuesta aceptada se evalúe como correcta, que ninguna distractora se cuele, que los `gap` tengan `___`, que los `topic` existan en el syllabus, y que las sesiones se construyan sin romperse. Debe terminar en `OK: sin problemas`.

---

## 7. Qué hacer al abrir un chat nuevo

**En Claude Code, dentro de esta carpeta:** escribe `/clase 28 ago - unit 4`, adjunta las
fotos del test y envía. El comando ya hace todo el flujo. Es la única vía donde Claude
puede editar los archivos por ti.

**Fuera de Claude Code** (claude.ai, móvil): usa el prompt de `PROMPT-NUEVO-CHAT.md`.
Te devolverá un bloque de código que pegas tú en `content-clase.js`.

Versión corta para pegar junto con tu reporte:

> Trabajo con mi app English Ladder en `C:\Users\pipe_\OneDrive\Documentos\IA\English`.
> Lee primero `GUIA-DEL-PROYECTO.md`. Objetivo: A2 → B1, manteniendo A2.
> Aquí va mi reporte actual desde la app:
>
> ```
> [pegar el texto de Progress & report]
> ```
>
> Y aquí el material de la clase: [adjuntar / pegar]
>
> Quiero que: (1) corrijas los errores del reporte explicándome el patrón, no sólo la frase;
> (2) generes ejercicios nuevos para los temas marcados DEBIL;
> (3) los agregues a `content-clase.js` y corras `node validar.js`.

---

## 8. Publicar la app en una URL

La app es 100% estática: no hay servidor, ni build, ni dependencias. Basta con que
alguien sirva la carpeta por HTTP.

**Recomendado: GitHub Pages.** Sobre HTTP los `<script src>` cargan sin problema, así que
la arquitectura de varios archivos se mantiene tal cual — actualizar contenido es un
`git push`. Además el repositorio te queda como copia de seguridad e historial de tu
propio material de estudio.

```bash
git init
git add .
git commit -m "English Ladder"
git branch -M main
git remote add origin https://github.com/USUARIO/english-ladder.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)` → Save**.
La URL queda en `https://USUARIO.github.io/english-ladder/`. Tarda un minuto la primera vez.
En el plan gratuito, Pages exige que el repositorio sea **público**.

**Alternativa sin git:** arrastrar la carpeta a `app.netlify.com/drop` da una URL al
instante, pero cada actualización es un arrastre manual.

**Archivo único:** `node build-bundle.js` genera `english-ladder.bundle.html` con todo
incrustado, para enviártelo por correo o publicarlo donde sólo se admita un archivo.

### ⚠️ El progreso NO viaja contigo

`localStorage` está aislado por origen. Tu progreso guardado en `file:///C:/...` **no
aparecerá** en `https://usuario.github.io/...`, ni al revés. Son almacenes distintos.

Antes de mudarte a la URL:

1. Abre la app actual → **Progress & report → Export data** → copia el JSON.
2. Abre la app en la URL nueva → **Progress & report → Import data** → pégalo → Restore.

A partir de ahí, usa **siempre el mismo origen**. Si practicas un día en el archivo local
y otro en la URL, tendrás dos historiales de repetición espaciada desincronizados y el
sistema pierde su sentido. Elige uno.

En el móvil, abre la URL y usa *Añadir a pantalla de inicio*: se abre a pantalla completa,
como una app. El progreso vive en ese navegador, así que expórtalo de vez en cuando.

### El código es público. Tu progreso, no.

Son dos cosas distintas y conviene tenerlo claro:

- **Si le pasas la URL a alguien**, su navegador abre la app con `localStorage` vacío.
  No ve nada de lo tuyo: `localStorage` está aislado por navegador y por origen, nunca
  viaja por la red. Puede usar la app para su propio estudio sin pisar tu historial.
  Esto es justo lo que la hace compartible.
- **El repositorio en sí es lo que es público.** El código y los bancos de ejercicios no
  tienen nada tuyo dentro — pueden estarlo sin problema. Lo que sí sería tuyo son los
  snapshots de `progreso/` (tu solidez por tema y tus errores literales): si se
  commitean, cualquiera que navegue el repo en GitHub los vería.

Por eso `progreso/*.json` está en `.gitignore`: tus snapshots se generan y se guardan en
esa carpeta, pero **no se suben**. Si alguna vez quieres respaldo con historial en la
nube sin exponerlo, la vía es un repositorio *privado* aparte sólo para `progreso/`
(Pages no funciona ahí, pero no lo necesitas: es sólo almacenamiento).

---

## 9. Criterio de avance

La app llama **solidez** al porcentaje de temas del nivel respondidos al 75% o más, con un mínimo de 3 intentos. Es orientativo, no un certificado.

- **Solidez B1 < 40%** — la base A2 todavía manda. Alterna días A2 / B1.
- **40–70%** — fase de construcción. Prioriza los temas rojos con `Drill one topic`.
- **> 70% y todos los temas con al menos 5 intentos** — momento de subir la exigencia: escritura de 120 palabras, `Exam mode` semanal, y ampliar el banco con contenido real de clase en lugar de ejercicios genéricos.

Lo que **no** mide: listening, speaking ni pronunciación. Esos tres se trabajan en clase y en la calle; la app cubre la parte que se puede automatizar.
