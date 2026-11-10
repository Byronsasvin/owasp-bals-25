---
name: owasp-security-testing
description: Metodología de pruebas de seguridad OWASP Top 10:2025 con scoring CVSS v3.1, mapeo de cumplimiento (PCI-DSS, GDPR, HIPAA, NIST, ISO 27001) y generación de reportes. Úsala cuando el usuario pida una evaluación de seguridad, pentest, auditoría, revisión de vulnerabilidades, score CVSS, validación de remediación, cadena de suministro de software o reporte ejecutivo de seguridad.
license: GPL-3.0-or-later
metadata:
  version: "2.1.0"
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

## Cuándo cargar cada referencia

Carga solo lo necesario para la tarea:

- Checklist de pruebas por vector: `references/checklist.md`
- Payloads de prueba no destructivos: `references/payloads.md`
- Mapeo de cumplimiento normativo: `references/compliance-mapping.md`
- Plantillas de entrega: `templates/reporte-ejecutivo.md`, `templates/hallazgo-tecnico.md`, `templates/plan-remediacion.md` (en la raíz del Power)

## Metodología de 5 fases

1. **Reconocimiento**: tecnologías, endpoints, arquitectura, certificados TLS, inventario de dependencias (SBOM). Sin explotar.
2. **Escaneo**: ZAP, Nuclei, SAST, SCA, DAST y verificación de integridad de la cadena de suministro.
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

\* CVSS de referencia por categoría. El score real depende del contexto de cada hallazgo.

### Cambios respecto a 2021

- Nuevas: A03 (Cadena de Suministro) y A10 (Condiciones Excepcionales).
- SSRF deja de ser categoría propia y se integra en A01.
- Configuración Incorrecta sube a A02; Inyección pasa a A05; Autenticación a A07.
- "Componentes Vulnerables y Desactualizados" se amplía a Cadena de Suministro (A03).

## Scoring CVSS v3.1

| Rango | Severidad |
|-------|-----------|
| 9.0-10.0 | Crítica |
| 7.0-8.9 | Alta |
| 4.0-6.9 | Media |
| 0.1-3.9 | Baja |

Formato de vector: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` (9.8).

- **AV**: Network, Adjacent, Local, Physical
- **AC**: Low, High
- **PR**: None, Low, High
- **UI**: None, Required
- **S**: Unchanged, Changed
- **C/I/A**: None, Low, High

Calculadora: https://www.first.org/cvss/calculator/3.1

## Flujo de trabajo del agente

1. Confirmar autorización y alcance.
2. Identificar el vector o vectores pedidos (por defecto, los 10).
3. Cargar `references/checklist.md` y recorrer los ítems del vector.
4. Para cada hallazgo: descripción, pasos de reproducción, vector CVSS y score, impacto, remediación con código, mapeo de cumplimiento.
5. Entregar con la plantilla adecuada de `templates/`.

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

- **v2.1.0**: Frontmatter compatible con Agent Skills, referencias separadas, reglas de autorización.
- **v2.0.0**: Actualización a OWASP Top 10:2025.
- **v1.0.0**: Versión inicial (OWASP 2021).

Autor: Byron Antonio Lainez Sasvin (security@byronlainez.click)
