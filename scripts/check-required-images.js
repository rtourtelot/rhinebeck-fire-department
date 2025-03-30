const fs = require('fs');
const path = require('path');

/**
 * Checks if all the required images for the Rhinebeck Fire Department website exist
 * and reports any missing images.
 * 
 * USAGE:
 * Run `node scripts/check-required-images.js` to check for missing images
 */

// Define all required images
const requiredImages = [
  // Core images
  { path: 'images/rbfd-logo.png', description: 'Department Logo' },
  { path: 'images/hero-image.jpg', description: 'Homepage Hero Image' },
  { path: 'images/station-image.jpg', description: 'Fire Station Image' },
  { path: 'images/about-hero.jpg', description: 'About Page Hero Image' },
  { path: 'images/join-hero.jpg', description: 'Join Page Hero Image' },
  { path: 'images/safety-hero.jpg', description: 'Safety Page Hero Image' },
  { path: 'images/winter-safety.jpg', description: 'Winter Safety Image' },
  { path: 'images/summer-safety.jpg', description: 'Summer Safety Image' },
  { path: 'images/chief.jpg', description: 'Fire Chief Image' },
  { path: 'images/assistant-chief.jpg', description: 'Assistant Chief Image' },
  { path: 'images/captain.jpg', description: 'Captain Image' },
  
  // Gallery images
  ...Array.from({ length: 12 }, (_, i) => ({ 
    path: `images/gallery/image${i + 1}.jpg`, 
    description: `Gallery Image ${i + 1}` 
  })),
  
  // Resource PDFs
  { path: 'resources/home-fire-safety-checklist.pdf', description: 'Home Fire Safety Checklist' },
  { path: 'resources/fire-escape-plan-template.pdf', description: 'Fire Escape Plan Template' },
  { path: 'resources/smoke-alarm-installation-guide.pdf', description: 'Smoke Alarm Installation Guide' },
  { path: 'resources/fire-extinguisher-guide.pdf', description: 'Fire Extinguisher Guide' },
];

// Check if each required image exists
function checkImages() {
  console.log('Checking for required images...\n');
  
  const publicDir = path.join(__dirname, '../public');
  const missingImages = [];
  const presentImages = [];
  
  requiredImages.forEach(image => {
    const imagePath = path.join(publicDir, image.path);
    
    if (fs.existsSync(imagePath)) {
      presentImages.push(image);
    } else {
      missingImages.push(image);
    }
  });
  
  // Report results
  console.log(`Found ${presentImages.length} of ${requiredImages.length} required images.\n`);
  
  if (presentImages.length > 0) {
    console.log('✅ Present images:');
    presentImages.forEach(image => {
      console.log(`  - ${image.path} (${image.description})`);
    });
    console.log('');
  }
  
  if (missingImages.length > 0) {
    console.log('❌ Missing images:');
    missingImages.forEach(image => {
      console.log(`  - ${image.path} (${image.description})`);
    });
    console.log('');
    
    console.log('To add missing images, you can:');
    console.log('1. Run the image import script: npm run import-images');
    console.log('2. Manually add images to the public directory');
    console.log('3. Copy images from your Webflow export\n');
  } else {
    console.log('🎉 All required images are present! Your site is ready to go.\n');
  }
  
  return { 
    total: requiredImages.length,
    present: presentImages.length,
    missing: missingImages.length,
    missingImages 
  };
}

// Allow running directly or requiring as a module
if (require.main === module) {
  checkImages();
} else {
  module.exports = checkImages;
} 