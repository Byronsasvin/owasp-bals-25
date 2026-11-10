# Reportes: formato, CWE, SARIF y archivo histórico

## Regla de guardado (obligatoria)

Todo reporte se guarda en **dos formatos**, con el mismo nombre base:

- `reports/AAAA-MM-DD-<tema>.md` (fuente, siempre)
- `reports/AAAA-MM-DD-<tema>.pdf` (para líderes y responsables del proyecto)

El Markdown es la versión vigente y editable. El PDF es la copia inmutable para el histórico. Nunca sobrescribas un reporte anterior: crea uno nuevo con la fecha del día. Mantén `reports/README.md` con una línea por reporte.

Generar el PDF (lo ejecuta el usuario, requiere Node y Chrome o Edge):

```
cd scripts
npm ci
node md-to-pdf.mjs ../reports/AAAA-MM-DD-tema.md
```

Si no hay herramientas disponibles, entrega el `.md`, indica cómo generar el PDF y no afirmes que existe.

## Estructura mínima de un reporte

1. Portada: título, fecha, versión de la skill, autor, alcance y autorización.
2. Resumen ejecutivo: hallazgos por severidad, riesgo global, 3 acciones prioritarias.
3. Metodología y límites de la evaluación.
4. Hallazgos (uno por sección) con el formato de abajo.
5. Plan de remediación con responsables y fechas.
6. Cumplimiento: brechas por norma.
7. Historial de cambios respecto al reporte anterior.

Plantillas: `templates/reporte-ejecutivo.md`, `templates/hallazgo-tecnico.md`, `templates/plan-remediacion.md`.

## Formato de hallazgo

```
ID: BALS-001
Título:
Vector OWASP 2025: A0X
CWE:
CVSS (versión, vector, score):
Ubicación: archivo:línea o METHOD /ruta
Descripción:
Reproducción:
Impacto:
Remediación (con código):
Cumplimiento afectado:
Estado: abierto | en remediación | cerrado
```

## CWE frecuentes

| Vector | CWE |
|---|---|
| A01 | 22, 284, 285, 639, 862, 863, 918 |
| A02 | 16, 489, 942, 1004 |
| A03 | 829, 937, 1104, 1395 |
| A04 | 259, 295, 327, 338, 798 |
| A05 | 20, 77, 78, 79, 89, 94, 95 |
| A06 | 209, 256, 501, 840 |
| A07 | 287, 307, 384, 521, 613 |
| A08 | 345, 353, 494, 502 |
| A09 | 117, 223, 532, 778 |
| A10 | 209, 248, 636, 703, 755 |

Esta tabla es una selección práctica, **no la lista oficial**. OWASP mapea decenas de CWE por categoría (por ejemplo, 40 en A01). Consulta el mapeo oficial en la página de cada categoría, p. ej. https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/, y verifica cada CWE en https://cwe.mitre.org/ antes de citarlo.

## Salida SARIF (opcional, para GitHub Code Scanning)

```json
{
  "version": "2.1.0",
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "runs": [{
    "tool": { "driver": { "name": "owasp-bals", "version": "2.2.0",
      "rules": [{ "id": "BALS-A05-SQLI", "name": "SqlInjection",
        "shortDescription": { "text": "Inyección SQL" },
        "properties": { "tags": ["external/cwe/cwe-89", "security"] } }] } },
    "results": [{
      "ruleId": "BALS-A05-SQLI",
      "level": "error",
      "message": { "text": "Consulta SQL construida con entrada del usuario." },
      "locations": [{ "physicalLocation": {
        "artifactLocation": { "uri": "src/db.py" },
        "region": { "startLine": 42 } } }]
    }]
  }]
}
```
Guárdalo como `reports/AAAA-MM-DD-<tema>.sarif`.

## Reglas de contenido

- Sin secretos ni datos personales reales. Enmascara valores.
- Distingue hallazgo confirmado de "por confirmar".
- Indica qué no se pudo verificar.
