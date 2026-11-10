# Remediación con código (antes y después)

Cambios mínimos. Adapta al framework real del proyecto.

## A05 Inyección SQL (CWE-89)

Python
```python
# Antes
cur.execute(f"SELECT * FROM users WHERE email = '{email}'")
# Después
cur.execute("SELECT * FROM users WHERE email = %s", (email,))
```
Node.js
```js
// Antes
db.query("SELECT * FROM users WHERE id = " + req.params.id);
// Después
db.query("SELECT * FROM users WHERE id = ?", [req.params.id]);
```
Java
```java
// Después
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
ps.setLong(1, id);
```
C#
```csharp
// Después
var cmd = new SqlCommand("SELECT * FROM Users WHERE Id = @id", conn);
cmd.Parameters.AddWithValue("@id", id);
```

## A05 Inyección de comandos (CWE-78)

```python
# Antes
os.system("ping " + host)
# Después: sin shell, argumentos en lista y validación
import ipaddress, subprocess
ipaddress.ip_address(host)
subprocess.run(["ping", "-c", "1", host], check=True, timeout=5)
```
```js
// Antes: exec(`ping ${host}`)
const { execFile } = require("child_process");
execFile("ping", ["-c", "1", host], { timeout: 5000 }, cb);
```

## A05 XSS (CWE-79)

```js
// Antes
el.innerHTML = userInput;
// Después
el.textContent = userInput;
```
Si necesitas HTML, sanitiza con una librería mantenida (por ejemplo DOMPurify) y define una CSP:
```
Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'
```

## A01 IDOR (CWE-639)

```js
// Antes
const order = await Order.findById(req.params.id);
// Después: filtrar por el dueño autenticado
const order = await Order.findOne({ _id: req.params.id, userId: req.user.id });
if (!order) return res.sendStatus(404);
```

## A01 SSRF (CWE-918)

```python
from urllib.parse import urlparse
ALLOWED = {"api.partner.example"}
u = urlparse(url)
if u.scheme != "https" or u.hostname not in ALLOWED:
    raise ValueError("destino no permitido")
```
Además: bloquear rangos privados y `169.254.169.254`, y resolver DNS una sola vez para evitar rebinding. En AWS, exigir IMDSv2.

## A01 Path traversal (CWE-22)

```python
from pathlib import Path
base = Path("/srv/files").resolve()
target = (base / name).resolve()
if base not in target.parents:
    raise PermissionError()
```

## A04 Contraseñas y aleatoriedad (CWE-327, CWE-338)

```python
# Contraseñas: argon2 o bcrypt, nunca md5/sha1
from argon2 import PasswordHasher
ph = PasswordHasher(); hash = ph.hash(password)
# Tokens
import secrets; token = secrets.token_urlsafe(32)
```
```js
const token = require("crypto").randomBytes(32).toString("base64url");
```

## A08 Deserialización (CWE-502)

```python
# Antes: pickle.loads(data) / yaml.load(data)
import json, yaml
obj = json.loads(data)
cfg = yaml.safe_load(text)
```

## A07 Sesiones y cookies (CWE-1004)

```js
res.cookie("sid", sid, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 3600_000 });
```
JWT: fijar el algoritmo esperado al verificar, validar `exp`, `iss`, `aud`, y rechazar `alg: none`.

## A02 Configuración

```
Strict-Transport-Security: max-age=63072000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), camera=()
```
Desactivar debug en producción, cambiar credenciales por defecto, restringir CORS a orígenes explícitos.

## A03 Cadena de suministro

```yaml
# GitHub Actions: pin a SHA y permisos mínimos
permissions:
  contents: read
steps:
  - uses: actions/checkout@<sha-completo>
```
- Commitear lockfiles e instalar con `npm ci` / `pip install --require-hashes`.
- Fijar imágenes por digest: `FROM python:3.12-slim@sha256:...`.
- Generar SBOM (CycloneDX o SPDX) en el pipeline.

## A09 Logging

Registrar: login ok/fallido, cambios de permisos, acciones administrativas, fallos de validación. No registrar contraseñas, tokens ni PAN completos. Enviar a un almacén centralizado con alertas.

## A10 Condiciones excepcionales

```python
# Antes: except Exception: return True  (fail-open)
try:
    allowed = authz.check(user, resource)
except Exception:
    log.exception("fallo de autorización")
    allowed = False   # fail-closed
```
Respuestas de error genéricas al cliente, detalle solo en logs.
