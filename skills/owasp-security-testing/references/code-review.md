# Revisión de código del workspace

Modo recomendado en Kiro: revisar el código del proyecto abierto (SAST manual asistido). No requiere atacar ningún sistema.

## Procedimiento

1. Detectar el stack: `package.json`, `requirements.txt`, `pom.xml`, `*.csproj`, `go.mod`, `Dockerfile`, `.github/workflows/`.
2. Buscar patrones de riesgo por vector (tabla siguiente) con búsqueda de texto en el workspace.
3. Leer el contexto de cada coincidencia. Descartar falsos positivos (por ejemplo, entrada ya validada o constante).
4. Registrar hallazgos con archivo y línea, CWE, CVSS y remediación (`remediation.md`).
5. Si el usuario lo pide, aplicar el parche como cambio mínimo y explicar el motivo.

## Patrones de riesgo por vector

| Vector | Qué buscar | Ejemplos | CWE |
|---|---|---|---|
| A05 Inyección SQL | SQL armado con concatenación o f-strings | `"SELECT ... " + var`, `f"... {var}"`, `.query(` con plantillas | CWE-89 |
| A05 Comandos | Ejecución de shell con entrada del usuario | `os.system`, `subprocess(... shell=True)`, `child_process.exec` | CWE-78 |
| A05 XSS | Inserción de HTML sin codificar | `innerHTML`, `dangerouslySetInnerHTML`, `\|safe`, `v-html` | CWE-79 |
| A05 Evaluación dinámica | Código construido en tiempo de ejecución | `eval(`, `new Function(`, `exec(` | CWE-95 |
| A08 Deserialización | Deserializar datos no confiables | `pickle.loads`, `yaml.load(` sin SafeLoader, `ObjectInputStream` | CWE-502 |
| A04 Criptografía | Algoritmos débiles o aleatoriedad insegura | `md5`, `sha1`, `DES`, `Math.random()` para tokens | CWE-327, CWE-338 |
| A04 Secretos | Credenciales en código | `password =`, `api_key`, `AKIA`, `BEGIN PRIVATE KEY` | CWE-798 |
| A02 Configuración | Debug y CORS abierto | `DEBUG = True`, `Access-Control-Allow-Origin: *`, `verify=False` | CWE-489, CWE-942, CWE-295 |
| A01 Acceso | Recursos por ID sin comprobar dueño | `findById(req.params.id)` sin filtro por usuario | CWE-639 |
| A01 SSRF | Peticiones a URL del usuario | `requests.get(url)`, `fetch(req.query.url)` | CWE-918 |
| A01 Path traversal | Rutas con entrada del usuario | `open(base + name)`, `sendFile(req.params.f)` | CWE-22 |
| A07 Sesiones | Cookies sin atributos | `httpOnly: false`, sin `secure`, JWT sin verificar `alg` | CWE-1004, CWE-347 |
| A09 Logging | Datos sensibles en logs, ausencia de logs de auth | `log(password)`, `console.log(token)` | CWE-532 |
| A10 Excepciones | Errores tragados o fail-open | `except: pass`, `catch {}` que permite el acceso | CWE-755, CWE-636 |

## Cadena de suministro (A03)

- Dependencias sin lockfile (`package-lock.json`, `poetry.lock`, `go.sum`).
- Versiones con rangos abiertos (`^`, `*`, `latest`).
- `curl ... | sh` en Dockerfile o CI.
- GitHub Actions sin pin a SHA (`uses: org/action@main`).
- Permisos amplios en workflows (`permissions: write-all`) y secretos expuestos a PRs de forks.
- Imágenes base con tag flotante (`:latest`).
- Comandos útiles (el usuario los ejecuta): `npm audit --omit=dev`, `pip-audit`, `osv-scanner -r .`.

## Secretos

Buscar con expresiones como `AKIA[0-9A-Z]{16}`, `-----BEGIN (RSA|EC|OPENSSH) PRIVATE KEY-----`, `ghp_[A-Za-z0-9]{36}`, `xox[baprs]-`. Nunca imprimas el valor completo: indica archivo, línea y tipo, y recomienda rotar la credencial.

## Reglas

- Reporta solo lo que leíste. Si no verificaste el contexto, márcalo como "por confirmar".
- No ejecutes el código del proyecto ni sus pruebas con datos reales sin permiso.
- Prioriza por explotabilidad real, no por el número de coincidencias.
