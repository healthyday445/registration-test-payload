const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = path.join(__dirname, 'src', 'assets', 'Referral Poster for registration page.png');
const outputPath = path.join(__dirname, 'src', 'assets', 'Referral Poster for registration page.webp');

async function convert() {
  try {
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log('Converted to WebP successfully.');
    fs.unlinkSync(inputPath);
    console.log('Deleted original PNG.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

convert();
