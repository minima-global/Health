// eslint-disable-next-line

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonAsString = fs.readFileSync(__dirname + '/../package.json', 'utf-8');
const packageJson = JSON.parse(packageJsonAsString);

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});


let dAppConf = fs.readFileSync('./build/dapp.conf', 'utf-8');
dAppConf = dAppConf.replace('{{name}}', packageJson.name.capitalize());
dAppConf = dAppConf.replace('{{version}}', packageJson.version);
dAppConf = dAppConf.replace('{{description}}', packageJson.description);

fs.writeFileSync('./build/dapp.conf', dAppConf);

