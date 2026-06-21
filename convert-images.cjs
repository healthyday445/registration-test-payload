const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const SIZE_LIMIT = 150 * 1024; // 150 KB

async function processImages() {
  console.log('Scanning for images...');
  const files = fs.readdirSync(ASSETS_DIR);
  let convertedCount = 0;

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const stat = fs.statSync(filePath);

    // Check if it's a file, a png/jpg/jpeg, and larger than 150KB
    if (
      stat.isFile() &&
      /\.(png|jpg|jpeg)$/i.test(file) &&
      stat.size > SIZE_LIMIT
    ) {
      console.log(`Processing: ${file} (${(stat.size / 1024).toFixed(2)} KB)`);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const newFilePath = path.join(ASSETS_DIR, `${baseName}.webp`);

      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(newFilePath);
        
        console.log(` -> Created: ${baseName}.webp`);
        fs.unlinkSync(filePath);
        console.log(` -> Deleted original: ${file}`);
        convertedCount++;
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  console.log(`Finished processing. Converted ${convertedCount} images.`);
}

processImages();
