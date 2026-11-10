# Hooks de ejemplo para Kiro

Estos hooks son **opcionales** y no se activan solos. Para usarlos, copia el JSON a `.kiro/hooks/` de tu proyecto (o créalos desde el panel Agent Hooks de Kiro).

| Archivo | Disparador | Qué hace |
|---|---|---|
| `security-review-on-save.json` | `PostFileSave` en código fuente | Pide a Kiro revisar el archivo guardado con `references/code-review.md` y reportar solo hallazgos reales |
| `confirm-scan-commands.json` | `PreToolUse` en ejecución de comandos | Recuerda confirmar autorización y alcance antes de comandos de escaneo contra un host |
| `dependency-review-on-lockfile.json` | `PostFileSave` en manifiestos | Revisa cambios en dependencias y CI/CD (A03) |

Ajusta el `matcher` a los lenguajes de tu proyecto.
