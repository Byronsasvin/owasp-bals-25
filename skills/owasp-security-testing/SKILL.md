---
name: Pruebas de Seguridad OWASP
description: Metodología profesional de pruebas de seguridad OWASP Top 10:2025 con scoring CVSS v3.1 y mapeo de cumplimiento normativo
keywords:
  - owasp
  - seguridad
  - pruebas
  - testing
  - penetración
  - vulnerabilidades
  - cvss
  - cumplimiento
  - pci-dss
  - gdpr
  - nist
  - auditoría
  - supply-chain
version: 2.0.0
---

# Pruebas de Seguridad OWASP

Metodología profesional para evaluación de seguridad en aplicaciones web usando OWASP Top 10:2025, scoring CVSS v3.1 y mapeo de cumplimiento normativo (PCI-DSS, GDPR, HIPAA, NIST, ISO 27001).

> Actualizado a **OWASP Top 10:2025** (octava edición, presentada en Global AppSec, nov 2025; finalizada ene 2026). Reemplaza la edición 2021. Fuente oficial: https://top10.owasp.org/2025

## Descripción General

Este poder proporciona:

- **Metodología de 5 Fases**: Reconocimiento, Escaneo, Pruebas Manuales, Análisis de Riesgo, Reportes
- **OWASP Top 10:2025 Completo**: Los 10 vectores con técnicas y payloads detallados
- **Scoring CVSS v3.1**: Evaluación profesional de vulnerabilidades con matriz completa
- **Mapeo de Cumplimiento**: PCI-DSS, GDPR, HIPAA, NIST, ISO 27001
- **Checklist de 70+ Items**: Verificación exhaustiva de cada vector
- **Plantillas Profesionales**: Reutilizables para reportes, hallazgos y planes de remediación

## Casos de Uso

- Evaluaciones de seguridad y auditorías
- Pruebas de penetración (pentesting)
- Ejercicios de equipo rojo
- Validación de cumplimiento normativo (PCI-DSS, GDPR, HIPAA)
- Gestión de vulnerabilidades
- Seguridad de la cadena de suministro de software (SBOM, dependencias)
- Capacitación en seguridad
- Validación post-remediación
- Reportes ejecutivos para stakeholders

## Metodología de 5 Fases

### Fase 1: Reconocimiento
Recolectar información sin explotar vulnerabilidades:
- Identificación de tecnologías
- Enumeración de endpoints y rutas
- Análisis de arquitectura de seguridad
- Recopilación de información pública
- Análisis de certificados SSL/TLS
- Inventario de dependencias y componentes de terceros (SBOM)

### Fase 2: Escaneo de Vulnerabilidades
Detección automática de vulnerabilidades conocidas:
- OWASP ZAP scans
- Plantillas Nuclei
- Análisis SAST
- Escaneo de dependencias (SCA) y verificación de integridad de la cadena de suministro
- Testing DAST

### Fase 3: Pruebas Manuales
Validar hallazgos y probar lógica de negocio:
- Cada técnica del vector OWASP (10 vectores, 50+ pruebas)
- Validación de casos extremos
- Testing de gestión de sesión
- Intentos de bypass de autorización
- Validación de flujo lógico
- Manejo de condiciones excepcionales y errores

### Fase 4: Análisis de Riesgo
Priorizar por impacto empresarial:
- Scoring CVSS v3.1
- Evaluación de probabilidad
- Impacto empresarial
- Contexto de cumplimiento

### Fase 5: Reportes
Documentación profesional:
- Resumen ejecutivo
- Hallazgos técnicos detallados
- Planes de remediación
- Criterios de validación
- Cronograma

## OWASP Top 10:2025 - Referencia Rápida

| ID | Vector | CVSS* | Técnicas Clave |
|----|--------|-------|-----------------|
| A01 | Control de Acceso Roto | 9.1 | IDOR, Escalación, Autorización, SSRF (CWE-918) |
| A02 | Configuración Incorrecta | 8.6 | Headers, Debug, Defaults, Servicios expuestos |
| A03 | Fallas en la Cadena de Suministro de Software | 9.8 | Dependencias comprometidas, typosquatting, build/CI-CD |
| A04 | Fallas Criptográficas | 7.5 | Cifrado débil, PII sin proteger, transmisión insegura |
| A05 | Inyección | 9.8 | SQL, NoSQL, Comandos, LDAP, XSS |
| A06 | Diseño Inseguro | 8.1 | Fallas de modelado de amenazas, patrones inseguros |
| A07 | Fallas de Autenticación | 9.3 | Fuerza bruta, sesiones, credenciales, MFA ausente |
| A08 | Fallas de Integridad de Software y Datos | 9.8 | Deserialización insegura, actualizaciones sin firmar |
| A09 | Fallas de Logging y Alertas de Seguridad | 7.5 | Logs insuficientes, sin alertas, sin SIEM, retención |
| A10 | Manejo Incorrecto de Condiciones Excepcionales | 7.5 | Errores mal gestionados, fail-open, fugas por excepción |

\* CVSS de referencia por categoría; el score real depende del contexto de cada hallazgo. CVSS se calcula siempre por vulnerabilidad individual, nunca asumiendo el valor de la categoría.

### Qué cambió respecto a 2021

- **Nuevas categorías**: A03 Fallas en la Cadena de Suministro de Software y A10 Manejo Incorrecto de Condiciones Excepcionales.
- **SSRF** deja de ser categoría propia: su debilidad (CWE-918) se integra en **A01 Control de Acceso Roto**.
- **A01 Control de Acceso Roto** sigue siendo el riesgo #1.
- Reordenamiento: Configuración Incorrecta sube a A02; Inyección pasa a A05; Autenticación a A07.
- **Software Supply Chain Failures** sustituye y amplía el antiguo "Componentes Vulnerables y Desactualizados".

## Scoring CVSS v3.1

### Matriz Rápida

| Rango | Severidad |
|-------|-----------|
| 9.0-10.0 | CRÍTICA |
| 7.0-8.9 | ALTA |
| 4.0-6.9 | MEDIA |
| 0.1-3.9 | BAJA |

### Formato de Vector

`CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8`

### Métricas Clave

- **AV** (Vector de Ataque): Red, Adyacente, Local, Físico
- **AC** (Complejidad): Baja, Alta
- **PR** (Privilegios): Ninguno, Bajo, Alto
- **UI** (Interacción Usuario): Ninguna, Requerida
- **S** (Alcance): Sin cambios, Cambiado
- **C/I/A** (Impacto): Ninguno, Bajo, Alto

## Ejemplos de Payloads

### Inyección SQL (A05)
```sql
' OR '1'='1' --
' UNION SELECT * FROM usuarios --
' ; DROP TABLE usuarios; --
```

### XSS (A05 - Inyección)
```html
<script>alert('XSS')</script>
<img src=x onerror="alert('XSS')">
<svg onload="alert('XSS')">
```

### Inyección de Comandos (A05)
```bash
; whoami
| cat /etc/passwd
` id `
```

### SSRF (ahora dentro de A01)
```
http://169.254.169.254/latest/meta-data/
http://localhost:6379/
file:///etc/passwd
```

### Cadena de Suministro (A03) - señales a revisar
```
# Dependencias con nombres sospechosos / typosquatting
npm install reqeusts   # vs requests legítimo
# Integridad: verificar hashes/firmas y lockfiles
npm ci   # usa package-lock.json, no package.json
pip install --require-hashes -r requirements.txt
```

## Mapeo de Cumplimiento Normativo

Cada hallazgo se mapea a:
- **PCI-DSS v4.0**: Protección de datos de tarjetahabientes
- **GDPR**: Protección de datos personales
- **HIPAA**: Protección de datos de salud
- **NIST CSF 2.0**: Mejores prácticas de ciberseguridad
- **ISO 27001**: Seguridad de la información

## Checklist de Pruebas

- Reconocimiento: 6 items (incluye inventario de dependencias / SBOM)
- Escaneo: 5 items
- Pruebas Manuales: 50+ items (5+ por cada uno de los 10 vectores)
- Análisis de Riesgo: 4 items
- Reportes: 4 items

**Total**: 70+ items de verificación

## Prompts para Usar Este Poder

### Evaluación Completa de Seguridad
```
Realiza una evaluación completa de seguridad de [URL] usando OWASP BALS.
Incluye los 10 vectores de OWASP Top 10:2025, scoring CVSS, mapeo de
cumplimiento (PCI-DSS, GDPR) y un plan de remediación con cronograma.
```

### Testing de Vector Específico
```
Prueba este endpoint para vulnerabilidades de A05 Inyección usando OWASP BALS.
Proporciona payloads, pasos de validación, score CVSS, impacto empresarial,
y ejemplos de código de remediación (SQL, Python, Node.js).
```

### Auditoría de Cadena de Suministro (nuevo en 2025)
```
Evalúa la cadena de suministro de software de [proyecto] según A03:2025.
Revisa dependencias, lockfiles, integridad de build/CI-CD y genera un SBOM
con los riesgos priorizados.
```

### Reporte Ejecutivo
```
Genera un reporte de seguridad ejecutivo para [aplicación] usando OWASP BALS.
Incluye matriz de riesgo, resumen de hallazgos, brechas de cumplimiento (PCI-DSS, GDPR),
y plan de acción priorizado.
```

### Validación Post-Remediación
```
Valida que esta vulnerabilidad [descripción] ha sido remediada correctamente
usando la metodología OWASP BALS. Proporciona pasos de testing y criterios de éxito.
```

## Características Clave

✓ **Integral**: Los 10 vectores OWASP Top 10:2025 con 6-10 subtécnicas cada uno
✓ **Práctica**: Payloads reales y técnicas de testing
✓ **Estandarizada**: Scoring CVSS v3.1 con matriz profesional
✓ **Normativa**: Mapeo PCI-DSS, GDPR, HIPAA, NIST, ISO 27001
✓ **Profesional**: Resúmenes ejecutivos, detalles técnicos, planes de remediación
✓ **Verificada**: Checklist de 70+ items para completitud

## Entregas

**1. Reporte Ejecutivo**
- Resumen de hallazgos
- Matriz de riesgo
- Brechas de cumplimiento
- Plan de acción

**2. Hallazgos Técnicos**
- Descripción por vulnerabilidad
- Pasos de reproducción
- Score CVSS
- Impacto empresarial
- Ejemplos de código de remediación

**3. Plan de Remediación**
- Enfoque por fases
- Asignación de recursos
- Cronograma
- Métricas de éxito
- Criterios de cierre

## Estándares y Referencias

- [OWASP Top 10:2025](https://top10.owasp.org/2025)
- [CVSS v3.1 Specification](https://www.first.org/cvss/v3.1/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [CWE - Common Weakness Enumeration](https://cwe.mitre.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

## Historial de Versiones

- **v2.0.0** (Octubre 2026): Actualización a OWASP Top 10:2025. Nuevas categorías A03 (Cadena de Suministro) y A10 (Manejo de Condiciones Excepcionales); SSRF integrado en A01. Checklist ampliado a 70+ items.
- **v1.0.0** (Enero 2026): Versión inicial con OWASP Top Ten 2021, CVSS v3.1, mapeo de cumplimiento.

## Autor

Byron Antonio Lainez Sasvin
- GitHub: [@Byronsasvin](https://github.com/Byronsasvin)
- Instagram: [@bals.sec](https://instagram.com/bals.sec)
- Email: security@byronlainez.click
- Sitio Web: [byronlainez.click](https://byronlainez.click)

---

**Para detalles técnicos completos, metodología, payloads y checklists, ver la documentación en el repositorio del poder.**
