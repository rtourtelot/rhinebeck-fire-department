const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

/**
 * This script helps import images from the existing Webflow site to your local Next.js project.
 * It scrapes the Webflow site for image URLs and downloads them to the correct directory structure.
 * 
 * USAGE:
 * 1. Run `npm install puppeteer` to install the required dependency
 * 2. Run `node scripts/import-webflow-images.js` to start the import process
 */

// Helper function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    // Create directory if it doesn't exist
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filename);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file on error
      console.error(`❌ Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
}

async function startImport() {
  try {
    // Install puppeteer if not already installed
    try {
      require.resolve('puppeteer');
      console.log('Puppeteer is already installed.');
    } catch (e) {
      console.log('Installing puppeteer...');
      execSync('npm install puppeteer', { stdio: 'inherit' });
    }
    
    const puppeteer = require('puppeteer');
    console.log('Starting browser...');
    
    // Launch the browser
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Visit the Webflow site
    console.log('Visiting Rhinebeck Fire Department Webflow site...');
    await page.goto('https://www.rhinebeckfd.com', { waitUntil: 'networkidle2' });
    
    // Get all image sources from the site
    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt || 'Rhinebeck Fire Department image'
      }));
    });
    
    console.log(`Found ${images.length} images on the site`);
    
    // Create the destination directories
    const publicDir = path.join(__dirname, '../public');
    const imagesDir = path.join(publicDir, 'images');
    const galleryDir = path.join(imagesDir, 'gallery');
    
    [publicDir, imagesDir, galleryDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    // Download the main images
    console.log('Downloading key images...');
    
    // Find the logo
    const logoImg = images.find(img => 
      img.alt.toLowerCase().includes('logo') || 
      img.src.toLowerCase().includes('logo')
    );
    
    if (logoImg) {
      await downloadImage(logoImg.src, path.join(imagesDir, 'rbfd-logo.png'));
    } else {
      console.log('⚠️ Logo image not found. Please add it manually.');
    }
    
    // Visit other key pages to get more images
    const pagesToVisit = [
      { url: 'https://www.rhinebeckfd.com/about', type: 'about' },
      { url: 'https://www.rhinebeckfd.com/join', type: 'join' },
      { url: 'https://www.rhinebeckfd.com/safety', type: 'safety' },
      { url: 'https://www.rhinebeckfd.com/gallery', type: 'gallery' },
    ];
    
    // Keep track of downloaded gallery images
    let galleryImageCount = 0;
    
    // Process each page
    for (const pageInfo of pagesToVisit) {
      console.log(`Visiting ${pageInfo.url}...`);
      await page.goto(pageInfo.url, { waitUntil: 'networkidle2' });
      
      // Get images from this page
      const pageImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt || 'Rhinebeck Fire Department image'
        }));
      });
      
      console.log(`Found ${pageImages.length} images on ${pageInfo.type} page`);
      
      // Process images based on page type
      if (pageInfo.type === 'gallery') {
        // For gallery page, download up to 12 images
        for (const img of pageImages.slice(0, 12)) {
          galleryImageCount++;
          if (galleryImageCount <= 12) {
            await downloadImage(
              img.src, 
              path.join(galleryDir, `image${galleryImageCount}.jpg`)
            );
          }
        }
      } else {
        // For other pages, try to find the hero image (usually largest or first)
        const heroImg = pageImages.find(img => img.src !== logoImg?.src);
        if (heroImg) {
          await downloadImage(
            heroImg.src, 
            path.join(imagesDir, `${pageInfo.type}-hero.jpg`)
          );
        }
      }
    }
    
    // If we don't have 12 gallery images yet, fill in with images from other pages
    if (galleryImageCount < 12) {
      console.log('Finding additional images for gallery...');
      
      // Get more images from all pages visited
      await page.goto('https://www.rhinebeckfd.com', { waitUntil: 'networkidle2' });
      const allImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt || 'Rhinebeck Fire Department image'
        }));
      });
      
      // Filter out already downloaded images and get unique ones
      const usedUrls = new Set();
      for (const img of allImages) {
        if (galleryImageCount >= 12) break;
        
        // Skip if we've already used this URL
        if (usedUrls.has(img.src)) continue;
        usedUrls.add(img.src);
        
        // Skip the logo or very small images
        if (img.src === logoImg?.src) continue;
        
        galleryImageCount++;
        await downloadImage(
          img.src, 
          path.join(galleryDir, `image${galleryImageCount}.jpg`)
        );
      }
    }
    
    // Close the browser
    await browser.close();
    
    console.log('\n✅ Image import complete!');
    console.log('\nNext steps:');
    console.log('1. Check the downloaded images in the public/images directory');
    console.log('2. Rename and organize images as needed');
    console.log('3. Add any missing images manually');
    console.log('4. Run `npm run dev` to start the development server');
    
  } catch (error) {
    console.error('Error during import:', error);
  }
}

startImport(); 