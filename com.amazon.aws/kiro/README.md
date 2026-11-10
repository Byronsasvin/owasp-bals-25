# OWASP BALS — Kiro IDE Configuration

This directory contains Kiro IDE-specific configuration for the OWASP BALS power.

## Installation

### From GitHub
1. Open Kiro IDE
2. Go to **Powers** panel
3. Click **Add Custom Power** → **Import power from GitHub**
4. Enter: `https://github.com/Byronsasvin/owasp-bals`
5. Click **Install**

### From local folder
1. Clone: `git clone https://github.com/Byronsasvin/owasp-bals.git`
2. In Kiro → Powers → Add Custom Power → **Import power from a folder**
3. Select the cloned folder

## Usage

Once installed, mention any of these keywords in the Kiro chat to activate the power:

`owasp`, `security`, `testing`, `pentest`, `vulnerabilities`, `cvss`, `compliance`, `pci-dss`, `gdpr`

## Update

If you installed an older version, remove the power in the **Powers** panel and import it again from GitHub or the folder. Check that version `2.2.0` is shown.

## What is included

- `POWER.md` and `steering/owasp-security-testing.md`: workflow and rules.
- `skills/owasp-security-testing/`: the skill (`SKILL.md`) and its `references/`.
- `templates/`: executive report, technical finding and remediation plan.
- `examples/hooks/`: optional hooks. Copy the ones you want to `.kiro/hooks/` of your project.
- `evals/`: test cases to check the skill after each change.
- `reports/`: report history in `.md` and `.pdf`. PDFs are generated with `scripts/md-to-pdf.mjs` (Node.js and Chrome or Edge required).

## Quick Start

```
Realiza una evaluación de seguridad básica de [URL].
Dime los 3 riesgos más críticos y cómo solucionarlos.
```

## Author

Byron Antonio Lainez Sasvin — security@byronlainez.click
