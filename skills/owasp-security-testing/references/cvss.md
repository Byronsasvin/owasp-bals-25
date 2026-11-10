# Scoring: CVSS v3.1 y v4.0

Por defecto usa **CVSS v3.1**. Usa **v4.0** si el usuario o su organización lo pide. Indica siempre la versión en el vector.

## v3.1

Vector: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` = 9.8

Métricas base: AV (N, A, L, P), AC (L, H), PR (N, L, H), UI (N, R), S (U, C), C/I/A (N, L, H).

## v4.0

Vector: `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N`

Diferencias principales:
- Nueva métrica **AT** (Attack Requirements): N o P.
- **UI** pasa a N, P (pasivo) o A (activo).
- El impacto se separa en sistema vulnerable (VC, VI, VA) y sistemas subsecuentes (SC, SI, SA). Reemplaza a Scope.
- Nomenclatura: CVSS-B (base), CVSS-BT (con amenaza), CVSS-BE (con entorno), CVSS-BTE.

## Severidad (ambas versiones)

| Rango | Severidad |
|---|---|
| 0.0 | Ninguna |
| 0.1-3.9 | Baja |
| 4.0-6.9 | Media |
| 7.0-8.9 | Alta |
| 9.0-10.0 | Crítica |

## Reglas para el agente

- No inventes el score: deriva cada métrica con una justificación breve y calcula con la fórmula oficial o indica "calcular en la calculadora oficial".
- Calculadoras: v3.1 https://www.first.org/cvss/calculator/3.1 · v4.0 https://www.first.org/cvss/calculator/4.0
- Si no puedes calcular con certeza, entrega el vector y marca el score como "estimado".
- Complementa con probabilidad y contexto de negocio (por ejemplo EPSS o la lista KEV de CISA para vulnerabilidades con CVE).
- El score de referencia por categoría en `SKILL.md` es orientativo, no sustituye el cálculo por hallazgo.
