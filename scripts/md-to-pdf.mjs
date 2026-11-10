// Convierte un reporte Markdown en PDF usando marked + Chrome/Edge headless.
// Uso: node md-to-pdf.mjs ../reports/AAAA-MM-DD-tema.md
import { readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, basename } from "node:path";
import { pathToFileURL } from "node:url";
import { tmpdir } from "node:os";
import { marked } from "marked";

const input = process.argv[2];
if (!input || !existsSync(input)) {
  console.error("Uso: node md-to-pdf.mjs <archivo.md>");
  process.exit(1);
}

const candidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("No se encontró Chrome ni Edge. Define CHROME_PATH.");
  process.exit(1);
}

const md = readFileSync(input, "utf8");
const body = marked.parse(md);
const css = `
  @page { size: A4; margin: 18mm; }
  body { font-family: "Segoe UI", Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #1a1a1a; }
  h1 { font-size: 22pt; border-bottom: 2px solid #222; padding-bottom: 6px; }
  h2 { font-size: 15pt; margin-top: 22px; border-bottom: 1px solid #ccc; padding-bottom: 3px; }
  h3 { font-size: 12pt; }
  table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 10pt; }
  th, td { border: 1px solid #bbb; padding: 5px 8px; text-align: left; vertical-align: top; }
  th { background: #f0f0f0; }
  code, pre { font-family: Consolas, monospace; font-size: 9.5pt; background: #f6f6f6; }
  pre { padding: 8px; border: 1px solid #ddd; white-space: pre-wrap; word-break: break-word; }
  blockquote { border-left: 4px solid #999; margin: 8px 0; padding: 2px 12px; color: #444; }
  tr, pre { page-break-inside: avoid; }
`;
const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${basename(
  input,
)}</title><style>${css}</style></head><body>${body}</body></html>`;

const tmpHtml = resolve(tmpdir(), `bals-${Date.now()}.html`);
writeFileSync(tmpHtml, html, "utf8");

const out = resolve(input.replace(/\.md$/i, ".pdf"));
try {
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${out}`,
      pathToFileURL(tmpHtml).href,
    ],
    { stdio: "ignore", timeout: 60000 },
  );
} finally {
  rmSync(tmpHtml, { force: true });
}

if (!existsSync(out)) {
  console.error("No se generó el PDF.");
  process.exit(1);
}
console.log("PDF generado:", out);
