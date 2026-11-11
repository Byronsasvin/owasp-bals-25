---
name: owasp-security-testing
description: Metodología de pruebas de seguridad OWASP Top 10:2025 con scoring CVSS v3.1, mapeo de cumplimiento (PCI-DSS, GDPR, HIPAA, NIST, ISO 27001) y generación de reportes. Úsala cuando el usuario pida una evaluación de seguridad, pentest, auditoría, revisión de vulnerabilidades, score CVSS, validación de remediación, cadena de suministro de software o reporte ejecutivo de seguridad.
license: GPL-3.0-or-later
metadata:
  version: "2.2.0"
  author: Byron Antonio Lainez Sasvin
  keywords: owasp, seguridad, pentest, cvss, cumplimiento, pci-dss, gdpr, hipaa, nist, supply-chain
---

# Pruebas de Seguridad OWASP

Metodología para evaluar aplicaciones web con OWASP Top 10:2025, scoring CVSS v3.1 y mapeo de cumplimiento normativo. Fuente oficial: https://top10.owasp.org/2025

## Reglas de seguridad (obligatorias)

1. Antes de probar cualquier objetivo, pide al usuario confirmar que está **autorizado** a evaluarlo y cuál es el **alcance** (dominios, endpoints, ventanas de prueba).
2. No ejecutes ataques reales contra sistemas de producción ni de terceros. Entrega payloads y pasos de prueba para que el usuario los ejecute en su entorno autorizado.
3. Usa solo payloads **no destructivos** (ver `references/payloads.md`).
4. No incluyas credenciales, tokens ni datos personales reales en los reportes.

## Modos de trabajo

| Modo | Cuándo | Referencia |
|---|---|---|
| Revisión de código del workspace (recomendado en Kiro) | El usuario tiene el proyecto abierto | `references/code-review.md` |
| Prueba de endpoint o aplicación | URL o endpoint autorizado | `references/checklist.md`, `references/payloads.md` |
| Seguridad de APIs (REST, GraphQL, JWT, OAuth) | Servicios o contratos de API | `references/api-security.md` |
| Cadena de suministro | Dependencias, CI/CD, contenedores | `references/code-review.md` (sección A03) |
| Validación post-remediación | Un hallazgo ya corregido | `references/checklist.md` |

## Perfiles de profundidad

- **Rápido**: los 3 riesgos más críticos con remediación. Sin checklist completo.
- **Estándar** (por defecto): los 10 vectores, hallazgos con CVSS y CWE, plan de remediación.
- **Completo**: estándar más checklist de 72 ítems, mapeo de cumplimiento y reporte en md y PDF.

Si el usuario no indica el perfil, usa Estándar y dilo.

## Cuándo cargar cada referencia

Carga solo lo necesario para la tarea:

- Revisión de código y patrones de riesgo: `references/code-review.md`
- Remediación con código por stack: `references/remediation.md`
- Herramientas de escaneo (ZAP, Nuclei, SAST, SCA) y comandos: `references/scanning.md`
- Checklist de pruebas por vector: `references/checklist.md`
- Payloads de prueba no destructivos: `references/payloads.md`
- APIs, GraphQL, JWT y OAuth: `references/api-security.md`
- CVSS v3.1 y v4.0: `references/cvss.md`
- Mapeo de cumplimiento normativo: `references/compliance-mapping.md`
- Formato de reporte, CWE, SARIF y guardado md + PDF: `references/reporting.md`
- Plantillas de entrega: `templates/reporte-ejecutivo.md`, `templates/hallazgo-tecnico.md`, `templates/plan-remediacion.md` (en la raíz del Power)

## Idioma

Responde en el idioma del usuario. Los términos técnicos (CVSS, CWE, SSRF) se mantienen en su forma estándar.

## Metodología de 5 fases

1. **Reconocimiento**: tecnologías, endpoints, arquitectura, certificados TLS, inventario de dependencias (SBOM). Sin explotar.
2. **Escaneo**: revisión de código del workspace (SAST manual asistido, lo único que ejecutas tú mismo), y comandos de ZAP, Nuclei, SCA y DAST que **el usuario** instala y ejecuta. Verifica con `Get-Command`/`where` qué herramientas hay instaladas antes de proponer comandos. Si no están, dilo y no afirmes haber escaneado. Interpreta los resultados que el usuario te entregue.
3. **Pruebas manuales**: un conjunto de pruebas por cada vector OWASP, sesiones, autorización, lógica de negocio, manejo de errores.
4. **Análisis de riesgo**: CVSS v3.1, probabilidad, impacto empresarial, contexto de cumplimiento.
5. **Reportes**: resumen ejecutivo, hallazgos técnicos, plan de remediación, criterios de cierre, cronograma.

## OWASP Top 10:2025

| ID | Vector | CVSS ref.* | Técnicas clave |
|----|--------|-----------|----------------|
| A01 | Control de Acceso Roto | 9.1 | IDOR, escalación de privilegios, bypass de autorización, SSRF (CWE-918) |
| A02 | Configuración Incorrecta de Seguridad | 8.6 | Headers, modo debug, credenciales por defecto, servicios expuestos |
| A03 | Fallas en la Cadena de Suministro de Software | 9.8 | Dependencias comprometidas, typosquatting, CI/CD, lockfiles |
| A04 | Fallas Criptográficas | 7.5 | Cifrado débil, PII sin proteger, transmisión insegura |
| A05 | Inyección | 9.8 | SQL, NoSQL, comandos, LDAP, XSS |
| A06 | Diseño Inseguro | 8.1 | Falta de modelado de amenazas, patrones inseguros |
| A07 | Fallas de Autenticación | 9.3 | Fuerza bruta, sesiones, credenciales, MFA ausente |
| A08 | Fallas de Integridad de Software o Datos | 9.8 | Deserialización insegura, actualizaciones sin firmar |
| A09 | Fallas de Logging y Alertas de Seguridad | 7.5 | Logs insuficientes, sin alertas, retención |
| A10 | Manejo Incorrecto de Condiciones Excepcionales | 7.5 | Errores mal gestionados, fail-open, fugas por excepción |

\* Valores de referencia internos de este Power para orientar la priorización. **No provienen de OWASP**, que no publica un CVSS por categoría. El score real depende del contexto de cada hallazgo.

### Cambios respecto a 2021

Según la introducción oficial (https://top10.owasp.org/2025/0x00_2025-Introduction/):

- Nuevas: A03 (Cadena de Suministro) y A10 (Condiciones Excepcionales).
- A03 amplía A06:2021 "Componentes Vulnerables y Desactualizados" a todo el ecosistema de dependencias, build y distribución.
- SSRF deja de ser categoría propia y se integra en A01 (CWE-918).
- Configuración Incorrecta sube de #5 a A02. Criptografía baja de #2 a A04. Inyección baja de #3 a A05. Diseño Inseguro baja de #4 a A06.
- A07 se mantiene en el puesto #7 y cambia de nombre a "Authentication Failures" (antes "Identification and Authentication Failures").
- A09 cambia a "Security Logging & Alerting Failures" (antes "Logging and Monitoring").

## Scoring

CVSS v3.1 por defecto y v4.0 bajo petición. Cada hallazgo lleva su CWE. Detalle, métricas y reglas en `references/cvss.md`.

| Rango | Severidad |
|-------|-----------|
| 9.0-10.0 | Crítica |
| 7.0-8.9 | Alta |
| 4.0-6.9 | Media |
| 0.1-3.9 | Baja |

No inventes scores: justifica cada métrica o marca el score como estimado.

## Flujo de trabajo del agente

1. Confirmar autorización, alcance y perfil de profundidad.
2. Elegir modo de trabajo y vectores (por defecto, los 10).
3. Recorrer la referencia correspondiente.
4. Para cada hallazgo: ubicación, CWE, vector CVSS y score, pasos de reproducción, impacto, remediación con código (`references/remediation.md`) y cumplimiento afectado.
5. Entregar con la plantilla adecuada de `templates/`.
6. Guardar el reporte en `reports/` como `.md` y `.pdf` con fecha (ver `references/reporting.md`). No sobrescribir reportes previos.
7. Indicar qué no se pudo verificar.

## Prompts de ejemplo

- "Evalúa [endpoint] para A05 Inyección y dame score CVSS y remediación."
- "Audita la cadena de suministro de [proyecto] según A03:2025 y genera un SBOM con riesgos."
- "Genera un reporte ejecutivo de [aplicación] con brechas PCI-DSS y GDPR."
- "Valida que la vulnerabilidad [descripción] fue remediada."

## Referencias externas

- [OWASP Top 10:2025](https://top10.owasp.org/2025)
- [CVSS v3.1](https://www.first.org/cvss/v3.1/)
- [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/)
- [CWE](https://cwe.mitre.org/)
- [NIST CSF](https://www.nist.gov/cyberframework)

## Historial

- **v2.2.0**: Revisión de código del workspace, remediación con código, CVSS 4.0, seguridad de APIs, perfiles de profundidad, CWE y SARIF, reportes en md y PDF, casos de evaluación y hooks de ejemplo.
- **v2.1.0**: Frontmatter compatible con Agent Skills, referencias separadas, reglas de autorización.
- **v2.0.0**: Actualización a OWASP Top 10:2025.
- **v1.0.0**: Versión inicial (OWASP 2021).

Autor: Byron Antonio Lainez Sasvin (security@byronlainez.click)
