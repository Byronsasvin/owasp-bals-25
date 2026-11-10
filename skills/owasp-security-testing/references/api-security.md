# Seguridad de APIs (REST, GraphQL, JWT)

Complementa el Top 10 web con OWASP API Security Top 10:2023 (https://owasp.org/API-Security/). Verifica allí la edición vigente.

## Mapeo API → Top 10:2025

| API Security 2023 | Pruebas clave | Vector web |
|---|---|---|
| API1 Broken Object Level Authorization (BOLA) | Cambiar IDs de objetos entre usuarios | A01 |
| API2 Broken Authentication | Tokens débiles, sin límite de intentos, JWT mal validado | A07 |
| API3 Broken Object Property Level Authorization | Mass assignment, campos sensibles en respuestas | A01 |
| API4 Unrestricted Resource Consumption | Sin rate limit, paginación sin tope, cargas grandes | A06 |
| API5 Broken Function Level Authorization | Usuario normal llamando rutas admin | A01 |
| API6 Unrestricted Access to Sensitive Business Flows | Automatizar compras, registros, cupones | A06 |
| API7 Server Side Request Forgery | Parámetros URL, webhooks | A01 |
| API8 Security Misconfiguration | CORS, errores verbosos, métodos HTTP | A02 |
| API9 Improper Inventory Management | Versiones antiguas, endpoints olvidados, docs expuestas | A02 |
| API10 Unsafe Consumption of APIs | Confiar en datos de terceros sin validar | A03, A08 |

## REST: lista rápida

- BOLA: repetir cada petición con el token de otro usuario y con IDs ajenos.
- Mass assignment: enviar campos extra (`role`, `isAdmin`, `price`) y ver si se aceptan.
- Métodos: probar `PUT`, `DELETE`, `PATCH`, `OPTIONS` en rutas que solo esperan `GET`.
- Versiones: buscar `/v1`, `/v2`, `/internal`, `/debug`, `/swagger`, `/openapi.json`.
- Rate limiting en login, recuperación de contraseña y OTP.
- Respuestas: no devolver campos internos (hashes, flags, tokens).

## GraphQL

- Introspección habilitada en producción: `{ __schema { types { name } } }`.
- Consultas anidadas profundas y alias repetidos (agotamiento de recursos). Exigir límite de profundidad y costo.
- Batching de consultas para eludir rate limit y fuerza bruta.
- Autorización por campo y por resolver, no solo por query raíz.
- Sugerencias de campos en errores (filtración del esquema).

## JWT

- `alg: none` y confusión HS256/RS256: el servidor debe fijar el algoritmo esperado.
- Verificar firma, `exp`, `nbf`, `iss`, `aud`.
- Secretos HS256 débiles: comprobar contra listas de secretos comunes en un entorno autorizado.
- `kid` y `jku`/`x5u` controlados por el atacante (inyección o SSRF).
- Almacenamiento: evitar `localStorage` para tokens de sesión sensibles. Preferir cookies `HttpOnly`.
- Revocación y rotación de refresh tokens.

## OAuth / OIDC

- `redirect_uri` con coincidencia exacta.
- `state` y PKCE obligatorios en flujos públicos.
- Alcance (`scope`) mínimo, y validación de `aud`.

## Entregables

Para cada hallazgo de API: método y ruta, rol requerido, petición mínima de reproducción (con datos de prueba), respuesta esperada vs. obtenida, CWE, CVSS y remediación.
