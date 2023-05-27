import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

const packageJsonAsString = fs.readFileSync(__dirname + '/../package.json', 'utf-8');
const packageJson = JSON.parse(packageJsonAsString);
process.stdout.write(packageJson.name.capitalize());
