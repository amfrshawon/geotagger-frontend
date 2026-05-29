const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const indexPath = path.join(root, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('build failed: index.html not found');
  process.exit(1);
}

const distDir = path.join(root, 'dist');
fs.mkdirSync(distDir, { recursive: true });
fs.copyFileSync(indexPath, path.join(distDir, 'index.html'));

console.log('Static build complete → dist/index.html');
