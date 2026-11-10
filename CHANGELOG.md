# Changelog — OWASP BALS

Todos los cambios notables de este proyecto se documentan aquí.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).
Versioning basado en [Semantic Versioning](https://semver.org/lang/es/).

---

## [2.0.1] — 2026-11-10

### Corregido
- **Instalación en Kiro restaurada**: se agregó la carpeta `skills/owasp-security-testing/SKILL.md`,
  que faltaba en el repositorio publicado y es obligatoria según la especificación
  [Agent Plugins](https://kiro.dev/docs/powers/create/) que usa `plugin.json`. Sin este
  archivo, Kiro no podía cargar la skill técnica del Power.
- Se eliminaron las referencias a `com.amazon.aws/kiro/kiro.json` y `com.amazon.aws/kiro/README.md`
  en `POWER.md` y `README.md`: ese formato no corresponde a ningún esquema oficial de Kiro
  (ni Agent Plugins ni el legacy `POWER.md` + `steering/`) y nunca existió en el repositorio.
- Se recreó la carpeta `templates/` con las 3 plantillas (`reporte-ejecutivo.md`,
  `hallazgo-tecnico.md`, `plan-remediacion.md`), ausente desde la publicación de v2.0.0.
- `plugin.json`: `homepage` y `repository` corregidos para apuntar a
  `github.com/Byronsasvin/owasp-bals-25` (apuntaban al repo `owasp-bals` sin sufijo).
- `LISTA-COMPLETA-ARCHIVOS.txt` actualizado a v2.0.0/estructura real (seguía en v1.0.2)
  y ahora documenta los requisitos de instalación según la especificación Agent Plugins.

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

[2.0.0]: https://github.com/Byronsasvin/owasp-bals/compare/v1.0.2...v2.0.0
[1.0.2]: https://github.com/Byronsasvin/owasp-bals/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Byronsasvin/owasp-bals/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Byronsasvin/owasp-bals/releases/tag/v1.0.0
