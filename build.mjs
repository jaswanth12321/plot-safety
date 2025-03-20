import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildApp() {
  try {
    await build({
      root: __dirname,
      configFile: path.resolve(__dirname, 'vite.config.js')
    });
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildApp(); 