# OWASP BALS — Configuración para Kiro IDE

Este directorio contiene la configuración específica de Kiro IDE para el Power OWASP BALS.

## Instalación

### Desde GitHub
1. Abre Kiro IDE.
2. Ve al panel **Powers**.
3. Haz clic en **Add Custom Power** → **Import power from GitHub**.
4. Ingresa: `https://github.com/Byronsasvin/owasp-bals-25`
5. Haz clic en **Install**.

### Desde una carpeta local
1. Clona el repositorio: `git clone https://github.com/Byronsasvin/owasp-bals-25.git`
2. En Kiro → Powers → Add Custom Power → **Import power from a folder**.
3. Selecciona la carpeta clonada.

## Uso

Una vez instalado, menciona cualquiera de estas palabras clave en el chat de Kiro para activar el Power:

`owasp`, `seguridad`, `pentest`, `vulnerabilidades`, `cvss`, `cumplimiento`, `pci-dss`, `gdpr`

## Actualización

Si instalaste una versión anterior, elimina el Power en el panel **Powers** e impórtalo de nuevo desde GitHub o desde la carpeta. Verifica que aparezca la versión `2.2.0`.

## Qué incluye

- `POWER.md` y `steering/owasp-security-testing.md`: flujo de trabajo y reglas.
- `skills/owasp-security-testing/`: la skill (`SKILL.md`) y sus `references/`.
- `templates/`: reporte ejecutivo, hallazgo técnico y plan de remediación.
- `examples/hooks/`: hooks opcionales. Copia los que quieras a `.kiro/hooks/` de tu proyecto.
- `evals/`: casos de prueba para verificar la skill tras cada cambio.
- `reports/`: histórico de reportes en `.md` y `.pdf`. Los PDF se generan con `scripts/md-to-pdf.mjs` (requiere Node.js y Chrome o Edge).

## Inicio rápido

```
Realiza una evaluación de seguridad básica de [URL].
Dime los 3 riesgos más críticos y cómo solucionarlos.
```

## Autor

Byron Antonio Lainez Sasvin — security@byronlainez.click
