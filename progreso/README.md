# Historial de progreso

Aquí van las fotos de tu progreso, en archivos JSON descargados desde la app:
**Progress & report → Download snapshot**.

El archivo sale con nombre `english-ladder-B1-AAAA-MM-DD.json`. Guárdalo en esta carpeta.

## Importante: esto NO se sube al repositorio

El repo es público, y estos archivos contienen tu solidez por tema **y tus últimos
errores literales**. `progreso/*.json` está en `.gitignore` a propósito — `git status`
no debería mostrarlos como pendientes de subir, y si algún día lo hace, no los agregues
sin pensarlo primero.

Esta carpeta es tu respaldo **local**. Si algún día quieres respaldo con historial en
la nube sin exponerlo, hace falta un repositorio aparte que sea *privado* sólo para
`progreso/` — pregúntame y lo dejamos armado.

## Por qué molestarse

La app guarda tu progreso en `localStorage`, que vive **dentro de un solo navegador**.
Se borra si limpias los datos del navegador, no existe en tu móvil, y no viaja si cambias
de ordenador o de origen (de `file://` a la URL de GitHub Pages). Un snapshot guardado
aquí es lo único que sobrevive a todo eso.

Además, cada snapshot lleva dentro `history`: la serie temporal de tu solidez por nivel.
Con dos o tres archivos aquí ya se puede reconstruir tu curva completa aunque pierdas
el navegador.

## Cada cuánto

Una vez por semana basta. Y siempre antes de:

- cambiar de navegador, de ordenador o de origen
- limpiar datos de navegación
- un test importante en la escuela — así queda registrado el "antes"

## Para restaurar

Abre la app → **Progress & report → Import** → pega el contenido del JSON → Restore.
