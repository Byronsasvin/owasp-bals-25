# OWASP BALS: guía de trabajo para Kiro

Guía para evaluaciones de seguridad con OWASP Top 10:2025. El detalle técnico está en `skills/owasp-security-testing/` (SKILL.md y `references/`).

## Reglas obligatorias

1. Pide confirmar autorización y alcance antes de evaluar cualquier objetivo.
2. No ejecutes ataques contra producción ni sistemas de terceros. Entrega payloads y pasos para que el usuario los ejecute en su entorno autorizado.
3. Usa solo payloads no destructivos (`skills/owasp-security-testing/references/payloads.md`).
4. No incluyas secretos ni datos personales reales en reportes.

## Flujo

1. Confirmar autorización y alcance.
2. Elegir vectores (por defecto A01 a A10).
3. Recorrer `references/checklist.md` por vector.
4. Por hallazgo: descripción, reproducción, vector y score CVSS v3.1, impacto, remediación con código, mapeo de cumplimiento (`references/compliance-mapping.md`).
5. Entregar con las plantillas de `templates/`.
6. Guardar el reporte en `reports/AAAA-MM-DD-<tema>.md` y `.pdf` (ver `references/reporting.md`). No sobrescribir reportes previos. Si no puedes generar el PDF, entrega el `.md` y explica cómo generarlo.

Otras referencias: `code-review.md` (código del workspace), `remediation.md` (parches), `api-security.md`, `cvss.md` (v3.1 y v4.0). Perfiles: Rápido, Estándar (por defecto), Completo.

## Vectores 2025

A01 Control de Acceso Roto (incluye SSRF), A02 Configuración Incorrecta, A03 Cadena de Suministro, A04 Criptografía, A05 Inyección, A06 Diseño Inseguro, A07 Autenticación, A08 Integridad, A09 Logging y Alertas, A10 Condiciones Excepcionales.
