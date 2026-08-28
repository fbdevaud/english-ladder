# Historial de progreso

Aquí van las fotos de tu progreso, en archivos JSON descargados desde la app:
**Progress & report → Download snapshot**.

El archivo sale con nombre `tense-sprint-B1-AAAA-MM-DD.json`. Guárdalo en esta carpeta
y commitéalo:

```bash
git add progreso/
git commit -m "Progreso 2026-09-15"
```

## Por qué molestarse

La app guarda tu progreso en `localStorage`, que vive **dentro de un solo navegador**.
Se borra si limpias los datos del navegador, no existe en tu móvil, y no viaja si cambias
de ordenador. Un snapshot commiteado es lo único que sobrevive a todo eso.

Además, cada snapshot lleva dentro `history`: la serie temporal de tu solidez por nivel.
Con dos o tres archivos aquí ya se puede reconstruir tu curva completa aunque pierdas
el navegador.

## Cada cuánto

Una vez por semana basta. Y siempre antes de:

- cambiar de navegador, de ordenador o de origen (de `file://` a la URL de GitHub Pages)
- limpiar datos de navegación
- un test importante en la escuela — así queda registrado el "antes"

## Para restaurar

Abre la app → **Progress & report → Import** → pega el contenido del JSON → Restore.
