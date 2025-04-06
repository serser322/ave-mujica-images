import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join, extname, parse } from 'path';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fs = require('fs');
const sharp = require('sharp');

const assetsDir = join(__dirname, 'src/assets');
const webpDir = join(assetsDir, 'webp/mygo');
const jpgDir = join(assetsDir, 'jpg/mygo');

fs.readdirSync(webpDir).forEach((file) => {
  if (extname(file).toLowerCase() === '.webp') {
    const webpPath = join(webpDir, file);
    const jpgPath = join(jpgDir, `${parse(file).name}.jpg`);

    // Check if JPG version already exists
    if (!fs.existsSync(jpgPath)) {
      sharp(webpPath)
        .jpeg({ quality: 85 })
        .toFile(jpgPath)
        .then(() => console.log(`Converted ${file} to JPG`))
        .catch((err) => console.error(`Error converting ${file}:`, err));
    } else {
      console.log(`JPG version of ${file} already exists, skipping conversion.`);
    }
  }
});
