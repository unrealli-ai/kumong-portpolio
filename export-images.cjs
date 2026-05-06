const fs = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');

const root = __dirname;
const outDir = path.join(root, 'output');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.jsx': 'text/javascript; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.otf': 'font/otf',
  '.png': 'image/png',
};

function serveFile(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const safePath = path.normalize(urlPath === '/' ? '/Kmong Portfolio.html' : urlPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  });
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const server = http.createServer(serveFile);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const url = `http://127.0.0.1:${port}/Kmong%20Portfolio.html`;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 2200 }, deviceScaleFactor: 1 });

  const consoleMessages = [];
  page.on('console', (msg) => consoleMessages.push(`${msg.type()}: ${msg.text()}`));
  page.on('pageerror', (err) => consoleMessages.push(`pageerror: ${err.message}`));

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('[data-export-slide]', { timeout: 60000 });
  await page.evaluate(() => document.fonts && document.fonts.ready);

  const slides = await page.$$('[data-export-slide]');
  for (let i = 0; i < slides.length; i += 1) {
    const filename = i === 0
      ? '01-main-cover-1080x1080.png'
      : `${String(i + 1).padStart(2, '0')}-detail-${String(i).padStart(2, '0')}-1080x1600.png`;
    await slides[i].screenshot({ path: path.join(outDir, filename), animations: 'disabled' });
    console.log(`exported ${filename}`);
  }

  if (slides.length !== 6) {
    throw new Error(`Expected 6 slides, found ${slides.length}. Browser messages:\n${consoleMessages.join('\n')}`);
  }

  await browser.close();
  server.close();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
