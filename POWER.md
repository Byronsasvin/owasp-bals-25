---
name: "owasp-bals"
displayName: "OWASP BALS - Pruebas de Seguridad"
description: "Marco de pruebas de seguridad web OWASP Top 10:2025 para Kiro. Scoring CVSS v3.1 y v4.0, mapeo de cumplimiento (PCI-DSS, GDPR, HIPAA, NIST, ISO 27001), revisión de código, checklist de 72 ítems, más de 25 payloads de prueba y reportes en Markdown y PDF. Pensado para Latinoamérica, 100% en español."
keywords: ["owasp", "security", "seguridad", "testing", "pentest", "vulnerabilities", "cvss", "compliance", "pci-dss", "gdpr", "hipaa", "nist", "iso27001", "injection", "xss", "authentication", "supply-chain"]
author: "Byron Antonio Lainez Sasvin"
version: "2.2.0"
---

# OWASP BALS — Pruebas de Seguridad

Marco profesional de pruebas de seguridad para aplicaciones web, integrado en Kiro. Evalúa contra OWASP Top 10:2025, calcula scores CVSS, verifica requisitos de cumplimiento (PCI-DSS, GDPR, HIPAA) y genera reportes ejecutivos en Markdown y PDF.

---

## 🚀 Inicio Rápido — Cómo hacer tu primera evaluación

Copia cualquiera de estos prompts directamente en el chat de Kiro:

**Escaneo básico (recomendado para empezar):**
```
Realiza una evaluación de seguridad básica de [URL o nombre de tu app].
Dime cuáles son los 3 riesgos más críticos y cómo solucionarlos.
```

**Escaneo de un endpoint específico:**
```
Evalúa el endpoint [POST /api/login] de mi aplicación.
¿Tiene vulnerabilidades de inyección SQL o autenticación rota?
Muéstrame los payloads de prueba y cómo remediar cada hallazgo.
```

**Escaneo completo con reporte:**
```
Haz una evaluación completa OWASP Top 10:2025 de [URL].
Incluye score CVSS para cada hallazgo y un plan de remediación priorizado.
```

**Si nunca hiciste un pentest antes:**
```
Soy nuevo en pruebas de seguridad. Tengo una app web en [URL o descripción].
¿Por dónde empiezo? Guíame paso a paso usando OWASP BALS.
```

> Reemplaza `[URL]`, `[nombre de tu app]` o `[endpoint]` con tu información real.

---

## ¿Qué es este Power?

OWASP BALS es un marco profesional de pruebas de seguridad para aplicaciones web, integrado directamente en Kiro. Te permite realizar evaluaciones de seguridad completas siguiendo la metodología OWASP Top 10:2025, calcular scores CVSS v3.1, verificar cumplimiento normativo y generar reportes ejecutivos, sin salir del IDE.

Diseñado para equipos de desarrollo, seguridad y cumplimiento en Latinoamérica, con soporte completo en español.

---

## ¿Qué puedes hacer con este Power?

| Capacidad | Descripción |
|-----------|-------------|
| **Evaluación OWASP Top 10:2025** | Analiza los 10 vectores de ataque más críticos de 2025 |
| **Scoring CVSS v3.1** | Calcula la severidad de vulnerabilidades con estándar internacional |
| **Mapeo de Cumplimiento** | Verifica requisitos de PCI-DSS, GDPR, HIPAA, NIST e ISO 27001 |
| **Checklist de 70+ items** | Guía de verificación exhaustiva por vector OWASP |
| **25+ Payloads reales** | Ejemplos listos para testing de SQL Injection, XSS, XXE y más |
| **Reportes Profesionales** | Genera reportes ejecutivos, técnicos y planes de remediación |
| **Revisión de código del workspace** | Detecta patrones inseguros con archivo, línea y CWE, y propone el parche |
| **APIs y CVSS 4.0** | REST, GraphQL, JWT, OAuth; scoring v3.1 y v4.0 |
| **Histórico en md y PDF** | Cada reporte se guarda en `reports/` en ambos formatos |

---

## Cómo activar este Power

Este Power se activa cuando mencionas cualquiera de las palabras clave definidas en su frontmatter (`keywords`), por ejemplo:

```
seguridad, security, owasp, pruebas, testing, pentest, penetración,
vulnerabilidades, cvss, compliance, cumplimiento, pci-dss, gdpr,
evaluación, auditoría, inyección, xss, autenticación
```

No necesitas configuración adicional. Solo escribe tu solicitud en lenguaje natural.

---

## Guía de Uso Rápido

### Para alguien que nunca usó OWASP

Si nunca has hecho una evaluación de seguridad, empieza con este prompt:

```
Necesito evaluar la seguridad de mi aplicación web [URL o descripción].
¿Por dónde empiezo? Guíame paso a paso.
```

Kiro te explicará el proceso y adaptará la evaluación a tu nivel.

---

### Prompts listos para usar

**1. Evaluación completa (punto de partida recomendado)**
```
Realiza una evaluación completa de seguridad de [URL o nombre de app]
usando OWASP BALS. Incluye los 10 vectores, scoring CVSS, mapeo de
cumplimiento PCI-DSS y GDPR, y un plan de remediación con cronograma.
```

**2. Analizar un vector específico**
```
Evalúa [URL o endpoint] para vulnerabilidades de [nombre del vector].
Por ejemplo: Inyección SQL/XSS (A05), Control de Acceso Roto (A01), Cadena de Suministro (A03).
Incluye payloads de prueba, score CVSS y código de remediación.
```

**3. Generar reporte ejecutivo**
```
Genera un reporte ejecutivo de seguridad para [nombre de la aplicación].
Audiencia: [CTO / Board / Inversores]. Incluye matriz de riesgo,
hallazgos principales, brechas de cumplimiento y plan de acción.
```

**4. Validar una remediación**
```
Verifica que la vulnerabilidad [descripción] en [endpoint] ha sido
corregida. Proporciona los pasos de validación y criterios de éxito.
```

**5. Preparar auditoría de cumplimiento**
```
Evalúa [aplicación] contra los requisitos de [PCI-DSS / GDPR / HIPAA].
Genera matriz de cumplimiento con gaps identificados y roadmap de remediación.
```

---

## Metodología de 5 Fases

```
Fase 1: Reconocimiento   → Guía para identificar tecnologías y superficie de ataque
Fase 2: Escaneo          → Revisión de código + comandos de ZAP/Nuclei/SCA y triage de resultados
Fase 3: Pruebas Manuales → Checklist y payloads para validar hallazgos y lógica de negocio
Fase 4: Análisis de Riesgo → Priorizar por impacto con CVSS v3.1 o v4.0 y CWE
Fase 5: Reportes         → Reportes y planes de remediación en .md y .pdf
```

> **Importante:** este Power no instala ni ejecuta ZAP, Nuclei ni Semgrep. Tú instalas y ejecutas esas herramientas; Kiro te da los comandos, interpreta los resultados y revisa el código de tu proyecto. Los escaneos contra un host requieren autorización y alcance confirmados.

---

## OWASP Top 10:2025 — Referencia Rápida

| ID | Vector | Severidad | Ejemplo de Ataque |
|----|--------|-----------|-------------------|
| A01 | Control de Acceso Roto | CRÍTICA (9.1) | IDOR, escalada de privilegios, SSRF |
| A02 | Configuración Incorrecta | ALTA (8.6) | Headers faltantes, debug en prod |
| A03 | Fallas en la Cadena de Suministro de Software | CRÍTICA (9.8) | Dependencias comprometidas, typosquatting, CI/CD |
| A04 | Fallas Criptográficas | ALTA (7.5) | Datos sin cifrar, claves expuestas |
| A05 | Inyección | CRÍTICA (9.8) | SQL Injection, Command Injection, XSS |
| A06 | Diseño Inseguro | ALTA (8.1) | Falta de modelado de amenazas, patrones inseguros |
| A07 | Fallas de Autenticación | CRÍTICA (9.3) | Fuerza bruta, sesiones débiles, sin MFA |
| A08 | Fallas de Integridad de Software y Datos | CRÍTICA (9.8) | Deserialización insegura, updates sin firmar |
| A09 | Fallas de Logging y Alertas de Seguridad | ALTA (7.5) | Sin alertas en eventos críticos, sin SIEM |
| A10 | Manejo Incorrecto de Condiciones Excepcionales | ALTA (7.5) | Fail-open, fugas de info por excepciones |

> Novedades 2025: A03 (Cadena de Suministro) y A10 (Condiciones Excepcionales) son nuevas; SSRF (CWE-918) se integró en A01. Fuente: https://top10.owasp.org/2025
>
> Los valores CVSS de la tabla son referencias internas de este Power para priorizar, no datos de OWASP. El score real se calcula por hallazgo.

---

## ¿Qué NO hace este Power?

- No ejecuta ataques reales contra sistemas en producción
- No reemplaza una prueba de penetración manual por un profesional certificado
- No garantiza el 100% de cobertura de vulnerabilidades
- No accede directamente a tu infraestructura (solo guía el proceso)

**Importante**: Usa este Power únicamente en sistemas que tienes autorización para evaluar.

---

## Casos de Uso por Rol

**Desarrollador**
> "Quiero revisar si mi nuevo endpoint tiene vulnerabilidades antes de hacer el PR"

**Equipo de seguridad**
> "Necesito una evaluación OWASP completa con evidencia para el reporte de auditoría"

**DevOps / DevSecOps**
> "Quiero revisar la seguridad de mi pipeline de CI/CD y mis dependencias (A03)"

**CTO / Manager**
> "Necesito un reporte ejecutivo de riesgos de seguridad para presentar al board"

**Equipo de cumplimiento**
> "Debo demostrar cumplimiento PCI-DSS antes de la certificación"

---

## Recursos

- [Skill técnica detallada](./skills/owasp-security-testing/SKILL.md)
- [Ejemplos prácticos con prompts completos](./EXAMPLES.md)
- [Plantilla: Reporte Ejecutivo](./templates/reporte-ejecutivo.md)
- [Plantilla: Hallazgo Técnico](./templates/hallazgo-tecnico.md)
- [Plantilla: Plan de Remediación](./templates/plan-remediacion.md)
- [Configuración para Kiro IDE](./com.amazon.aws/kiro/README.md)
- [OWASP Top 10:2025](https://top10.owasp.org/2025)
- [Calculadora CVSS v3.1](https://www.first.org/cvss/calculator/3.1)

---

## Autor

**Byron Antonio Lainez Sasvin**  
Security Researcher · LATAM

- GitHub: [@Byronsasvin](https://github.com/Byronsasvin)
- Email: security@byronlainez.click
- Instagram: [@bals.sec](https://instagram.com/bals.sec)
- Web: [byronlainez.click](https://byronlainez.click)

**Licencia**: GPL-3.0-or-later | **Versión**: 2.2.0
