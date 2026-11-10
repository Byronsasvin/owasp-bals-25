# Histórico de reportes

Cada reporte se guarda en dos formatos con el mismo nombre: `.md` (editable, versión vigente) y `.pdf` (copia para presentar). No se sobrescriben reportes anteriores.

Generar el PDF:

```
cd scripts
npm ci
node md-to-pdf.mjs ../reports/AAAA-MM-DD-tema.md
```

Requiere Node.js y Chrome o Edge. Si Chrome está en otra ruta, define la variable `CHROME_PATH`.

| Fecha | Reporte | Formatos |
|---|---|---|
| 2026-11-10 | Mejoras de la skill v2.0.0 a v2.2.0 | [md](./2026-11-10-mejoras-skill-v2.2.0.md) · [pdf](./2026-11-10-mejoras-skill-v2.2.0.pdf) |
