# Checklist de pruebas OWASP Top 10:2025

Total: **72 ítems** (8 reconocimiento, 6 escaneo, 50 manuales, 4 riesgo, 4 reportes).
Úsalo solo en sistemas con autorización escrita.

## Fase 1: Reconocimiento (8)

- R1. Identificar stack, frameworks y versiones.
- R2. Enumerar rutas, endpoints y parámetros.
- R3. Revisar `robots.txt`, `sitemap.xml`, `.well-known/`.
- R4. Analizar certificado y configuración TLS.
- R5. Revisar headers de respuesta.
- R6. Inventariar dependencias y generar SBOM.
- R7. Identificar proveedores y servicios de terceros.
- R8. Mapear roles de usuario y flujos de autenticación.

## Fase 2: Escaneo (6)

- E1. DAST con OWASP ZAP.
- E2. Plantillas Nuclei.
- E3. SAST sobre el código fuente.
- E4. SCA de dependencias (CVE conocidos).
- E5. Escaneo de secretos en repositorio e historial.
- E6. Revisión de integridad del pipeline CI/CD.

## Fase 3: Pruebas manuales (50)

### A01 Control de Acceso Roto
- A01.1 IDOR cambiando IDs en ruta, query y body.
- A01.2 Acceso a recursos de otro usuario del mismo rol.
- A01.3 Escalación vertical a funciones de administrador.
- A01.4 Bypass cambiando método HTTP o cabeceras.
- A01.5 SSRF (CWE-918) hacia metadatos y servicios internos.

### A02 Configuración Incorrecta
- A02.1 Headers de seguridad (CSP, HSTS, X-Content-Type-Options).
- A02.2 Modo debug o trazas visibles.
- A02.3 Credenciales y cuentas por defecto.
- A02.4 Listado de directorios y archivos expuestos (`.git`, `.env`).
- A02.5 CORS permisivo y métodos HTTP innecesarios.

### A03 Cadena de Suministro
- A03.1 Dependencias sin lockfile o sin versión fija.
- A03.2 Paquetes con nombre sospechoso (typosquatting).
- A03.3 Verificación de hashes y firmas de artefactos.
- A03.4 Permisos y secretos en workflows CI/CD.
- A03.5 Acciones o imágenes de terceros sin pin por digest/SHA.

### A04 Fallas Criptográficas
- A04.1 Protocolos y cifrados débiles en TLS.
- A04.2 Datos sensibles transmitidos sin cifrar.
- A04.3 Hash de contraseñas sin sal o con algoritmo débil.
- A04.4 Claves o secretos en código y respuestas.
- A04.5 Generación de aleatoriedad insegura en tokens.

### A05 Inyección
- A05.1 SQL injection en parámetros y cabeceras.
- A05.2 NoSQL injection.
- A05.3 Inyección de comandos del sistema.
- A05.4 XSS reflejado, almacenado y DOM.
- A05.5 Inyección LDAP, XPath y plantillas (SSTI).

### A06 Diseño Inseguro
- A06.1 Existencia de modelo de amenazas.
- A06.2 Abuso de lógica de negocio (cupones, precios, cantidades).
- A06.3 Falta de límites de tasa en flujos sensibles.
- A06.4 Flujos de recuperación de cuenta explotables.
- A06.5 Separación de entornos y datos de prueba en producción.

### A07 Fallas de Autenticación
- A07.1 Fuerza bruta y falta de bloqueo.
- A07.2 Política de contraseñas débil.
- A07.3 Ausencia de MFA en cuentas privilegiadas.
- A07.4 Fijación y expiración de sesión.
- A07.5 Atributos de cookie (Secure, HttpOnly, SameSite).

### A08 Integridad de Software o Datos
- A08.1 Deserialización insegura.
- A08.2 Actualizaciones sin verificación de firma.
- A08.3 Scripts de CDN sin Subresource Integrity.
- A08.4 Datos de cliente aceptados sin validación de integridad.
- A08.5 Pipeline que despliega sin aprobación ni verificación.

### A09 Logging y Alertas
- A09.1 Registro de inicios de sesión fallidos y exitosos.
- A09.2 Registro de acciones administrativas.
- A09.3 Alertas ante patrones anómalos.
- A09.4 Logs sin datos sensibles ni inyección de líneas.
- A09.5 Retención y protección de logs.

### A10 Condiciones Excepcionales
- A10.1 Mensajes de error sin detalles internos.
- A10.2 Comportamiento fail-open ante fallos de autorización.
- A10.3 Entradas extremas, nulas o malformadas.
- A10.4 Fallos de dependencias externas (timeouts, caída).
- A10.5 Liberación de recursos y transacciones tras error.

## Fase 4: Análisis de riesgo (4)

- K1. Calcular CVSS v3.1 por hallazgo.
- K2. Estimar probabilidad de explotación.
- K3. Evaluar impacto empresarial.
- K4. Mapear brechas de cumplimiento.

## Fase 5: Reportes (4)

- P1. Reporte ejecutivo.
- P2. Hallazgos técnicos con evidencia.
- P3. Plan de remediación con cronograma.
- P4. Criterios de cierre y revalidación.
