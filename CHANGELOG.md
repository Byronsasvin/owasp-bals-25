# Changelog — OWASP BALS

Todos los cambios notables de este proyecto se documentan aquí.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).
Versioning basado en [Semantic Versioning](https://semver.org/lang/es/).

---

## [Sin publicar]

### Cambiado
- Power 100% en español: `displayName` y `description` en `POWER.md`, `plugin.json` y `kiro.json`; se eliminó la sección en inglés de `POWER.md`; `com.amazon.aws/kiro/README.md` traducido. Los nombres de botones de Kiro y los nombres oficiales de OWASP se conservan en inglés

### Corregido
- Validación contra la fuente oficial OWASP Top 10:2025: A07 no cambia de puesto (sigue en #7, solo cambia el nombre); se agregan los cambios reales de posición de A02, A04, A05 y A06
- Los valores CVSS por categoría se declaran como referencia interna, no de OWASP
- `POWER.md`: A07 con score 9.3 figuraba como ALTA; corregido a CRÍTICA
- Plantillas actualizadas a OWASP 2025 y v2.2.0; `LISTA-COMPLETA-ARCHIVOS.txt` regenerada

---

## [2.2.0] — 2026-11-10

### Agregado
- `references/code-review.md`: revisión de código del workspace, patrones por vector con CWE, cadena de suministro y secretos
- `references/remediation.md`: remediación con código (Python, Node.js, Java, C#)
- `references/cvss.md`: CVSS v3.1 y v4.0
- `references/api-security.md`: OWASP API Security, GraphQL, JWT y OAuth
- `references/reporting.md`: formato de reporte, CWE, SARIF y regla de guardado md + PDF
- `evals/`: 10 casos de evaluación y archivos de prueba vulnerables intencionales
- `examples/hooks/`: tres hooks de ejemplo para Kiro (opcionales)
- `scripts/md-to-pdf.mjs`: genera el PDF de un reporte (Node.js + Chrome o Edge)
- `reports/`: histórico de reportes en `.md` y `.pdf`; primer reporte de mejoras
- Perfiles de profundidad (Rápido, Estándar, Completo) y modos de trabajo en la skill

### Cambiado
- Cada reporte se guarda en `.md` y `.pdf` con fecha, sin sobrescribir los anteriores
- `compliance-mapping.md`: advertencias y proceso de validación contra textos oficiales
- CI valida los nuevos archivos, los hooks de ejemplo y que cada reporte tenga su PDF

### Eliminado
- Plantillas duplicadas de la raíz (`hallazgo-tecnico.md`, `reporte-ejecutivo.md`, `plan-remediacion.md`); se conserva `templates/`

---

## [2.1.0] — 2026-11-10

### Agregado
- `steering/owasp-security-testing.md` (estaba documentado en 2.0.0 pero no existía)
- `skills/owasp-security-testing/references/` con checklist (72 items), payloads no destructivos y mapeo de cumplimiento
- Reglas de autorización y alcance en la skill

### Cambiado
- Frontmatter de `SKILL.md` conforme a Agent Skills: `name` en minúsculas con guiones igual a la carpeta, `description` con criterio de activación, `version` y `keywords` bajo `metadata`
- `payloads`: sustituido payload destructivo (`DROP TABLE`) por pruebas no destructivas
- Prompt de vector específico en `POWER.md` con IDs OWASP 2025 correctos
- CI: falla si el frontmatter de la skill es inválido y valida `steering/` y `references/`

### Eliminado
- Referencias a integración con AWS Security Hub/CodeBuild/CodePipeline en README y POWER.md (no estaba implementada)

---

## [2.0.0] — 2026-10-23

### Agregado
- **OWASP Top 10:2025** completo, reemplazando la edición 2021. Dos categorías nuevas:
  - `A03:2025` Fallas en la Cadena de Suministro de Software
  - `A10:2025` Manejo Incorrecto de Condiciones Excepcionales
- Carpeta `steering/` con `owasp-security-testing.md` para compatibilidad con el
  formato de Powers nativo de Kiro (`POWER.md` + `steering/`)
- Prompt y sección dedicada a auditoría de cadena de suministro (SBOM, lockfiles, CI/CD)
- Payloads de SSRF (ahora dentro de A01) y señales de typosquatting en dependencias

### Cambiado
- SSRF deja de ser categoría propia: su debilidad (CWE-918) se integra en `A01` Control de Acceso Roto
- Reordenamiento de vectores: A01 Control de Acceso Roto (#1), A02 Configuración Incorrecta,
  A05 Inyección, A07 Autenticación
- Checklist ampliado de 68 a 70+ items
- Mapeo de cumplimiento actualizado: PCI-DSS v4.0, NIST CSF 2.0
- `plugin.json`, `kiro.json`, `POWER.md`, `README.md` y `SKILL.md` actualizados a v2.0.0

### Corregido
- Compatibilidad con loaders de Kiro que exigen el formato `POWER.md` + `steering/`
  (origen del error "plugin.json has an unsupported or missing $schema")

---

## [1.0.2] — 2026-01-XX

### Agregado
- Carpeta `templates/` con 3 plantillas listas para usar:
  - `templates/reporte-ejecutivo.md`
  - `templates/hallazgo-tecnico.md`
  - `templates/plan-remediacion.md`
- `CHANGELOG.md` para seguimiento de versiones
- GitHub Actions workflow para validación automática del power
- Soporte bilingüe (ES/EN) en `POWER.md`

### Mejorado
- `POWER.md` reescrito con sección Keywords explícita para activación automática en Kiro
- `POWER.md` incluye sección "¿Qué NO hace este Power?" para expectativas claras
- `POWER.md` incluye guía de uso por rol (Desarrollador, DevOps, CTO, Cumplimiento)
- `README.md` con inicio rápido desde el primer párrafo
- `plugin.json` con descripción expandida y keywords completos (EN + ES)
- `docs/SKILL.md` corregido — redirige al skill real en `skills/`
- `LISTA-COMPLETA-ARCHIVOS.txt` actualizada con estructura real del proyecto

### Corregido
- Referencias rotas a `./docs/EXAMPLES.md` → apuntan a `./EXAMPLES.md`
- Referencias rotas a `./templates/` → carpeta ahora existe
- `$schema` en `plugin.json` removido (apuntaba a dominio no oficial)

---

## [1.0.1] — 2026-01-XX

### Mejorado
- Descripción accesible para usuarios no expertos en seguridad
- Keywords ampliados en `plugin.json` para mejor descubrimiento

---

## [1.0.0] — 2026-01-XX

### Agregado
- Versión inicial de OWASP BALS
- OWASP Top Ten 2021 completo (10 vectores)
- Scoring CVSS v3.1 con matriz profesional
- Mapeo de cumplimiento: PCI-DSS, GDPR, HIPAA, NIST CSF, ISO 27001
- Checklist de 68 items de verificación
- 25+ payloads reales de testing
- Metodología de 5 fases
- Skill para Kiro IDE (`skills/owasp-security-testing/SKILL.md`)
- Configuración Kiro (`com.amazon.aws/kiro/kiro.json`)
- 8 ejemplos de uso completos (`EXAMPLES.md`)
- Plantillas de reporte ejecutivo y plan de remediación
- Integración con AWS Security Hub, CodeBuild y CodePipeline
- Soporte completo en español para Latinoamérica

---

[2.0.0]: https://github.com/Byronsasvin/owasp-bals-25/compare/v1.0.2...v2.0.0
[1.0.2]: https://github.com/Byronsasvin/owasp-bals-25/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Byronsasvin/owasp-bals-25/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Byronsasvin/owasp-bals-25/releases/tag/v1.0.0
