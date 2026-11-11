# Fase de Escaneo: herramientas y comandos

El Power **no instala ni ejecuta** estas herramientas. El usuario las instala y las ejecuta. Kiro propone los comandos, revisa los resultados que se le entreguen y hace el triage.

## Antes de empezar

1. Confirmar **autorización escrita y alcance** (dominios, rutas, ventana horaria, límites de tasa).
2. Verificar qué hay instalado y no afirmar que se escaneó si no se hizo:
   ```powershell
   foreach($c in 'nuclei','semgrep','docker','gitleaks','osv-scanner','npm'){ "$c : $((Get-Command $c -EA SilentlyContinue).Source)" }
   ```
3. Preferir entornos de **staging**. Nunca producción ni terceros sin permiso.
4. Los flags cambian entre versiones: confirma con `<herramienta> --help` o la documentación oficial.

## DAST (contra un host autorizado)

| Herramienta | Instalación | Comando de ejemplo (pasivo o de bajo impacto primero) |
|---|---|---|
| OWASP ZAP | https://www.zaproxy.org/download/ | `docker run --rm -t -v "${PWD}:/zap/wrk" ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://staging.example -r zap-baseline.html` |
| Nuclei | https://docs.projectdiscovery.io/opensource/nuclei/install | `nuclei -u https://staging.example -severity medium,high,critical -rl 10 -o nuclei.txt` |

Notas:
- `zap-baseline.py` es **pasivo** (spider y análisis de respuestas). El escaneo activo (`zap-full-scan.py`) ataca de verdad: solo con autorización explícita para pruebas activas.
- Nuclei: empezar con `-rl` (límite de peticiones por segundo) bajo. Actualizar plantillas con `nuclei -update-templates`.
- Cualquier escaneo genera tráfico visible en logs y puede disparar alertas o bloqueos.

## SAST (código fuente)

Dos niveles:

1. **Revisión asistida por Kiro** (sin instalar nada): seguir `references/code-review.md` sobre el workspace.
2. **Herramientas**:

| Herramienta | Instalación | Comando de ejemplo |
|---|---|---|
| Semgrep | https://semgrep.dev/docs/getting-started/ | `semgrep scan --config p/owasp-top-ten --sarif -o semgrep.sarif .` |
| Gitleaks (secretos) | https://github.com/gitleaks/gitleaks | `gitleaks detect --source . --redact` (en versiones recientes puede ser `gitleaks git` / `gitleaks dir`) |

Con `--config auto`, Semgrep envía métricas al registro. Usa un conjunto de reglas explícito si el código es sensible.

## SCA (dependencias)

| Ecosistema | Comando |
|---|---|
| Node.js | `npm audit --omit=dev` |
| Python | `pip-audit` |
| Multi-ecosistema | `osv-scanner -r .` (en v2: `osv-scanner scan source -r .`) |
| Contenedores | `trivy image <imagen>` |

## Cómo entregar resultados a Kiro

Pega o referencia el archivo de salida (`zap-baseline.html`, `nuclei.txt`, `semgrep.sarif`). Kiro debe:
1. Descartar falsos positivos leyendo el contexto.
2. Asignar CWE y CVSS a cada hallazgo confirmado.
3. Proponer remediación (`references/remediation.md`).
4. Marcar como "por confirmar" lo que no pudo verificar.
5. Guardar el reporte en `reports/` como `.md` y `.pdf`.

No pegues secretos ni datos personales reales en la conversación: enmascáralos.
