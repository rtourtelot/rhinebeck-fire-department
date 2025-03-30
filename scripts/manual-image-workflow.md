# Manual Image Transfer Guide

If you prefer to manually transfer images from your Webflow site to this Next.js project, follow these steps:

## Prerequisite Tools
- Web browser with developer tools (Chrome, Firefox, etc.)
- Image editing software (optional, for resizing/optimizing)

## Step 1: Create the Required Directories
Ensure these directories exist in your project:
```
public/
├── images/
│   ├── gallery/
├── resources/
```

## Step 2: Extract and Download Images from Webflow

### Method 1: Using Browser Developer Tools
1. Visit your Webflow site (rhinebeckfd.com)
2. Right-click on an image and select "Inspect" or press F12
3. Look for the `<img>` tag in the HTML panel
4. Find the `src` attribute which contains the image URL
5. Right-click on the URL and select "Open in new tab"
6. Once the image is open, right-click and select "Save image as..."
7. Save the image to the appropriate directory in your project

### Method 2: Download All Images in Bulk
1. Visit each key page of your Webflow site
2. Press F12 to open Developer Tools
3. Go to the Network tab
4. Refresh the page
5. Filter by "Img" to show only image requests
6. Right-click on an image and select "Save all as HAR"
7. Use a HAR extraction tool (like [HAR Extractor](https://github.com/sai-prasanna/har-extractor)) to extract all images

## Step 3: Rename and Organize Images
Rename the downloaded images according to the structure expected by the Next.js project:

### Core Images (in `/public/images/`)
- `rbfd-logo.png` - The department logo
- `hero-image.jpg` - Homepage hero background
- `station-image.jpg` - Image of the fire station
- `about-hero.jpg` - About page hero image
- `join-hero.jpg` - Join page hero image
- `safety-hero.jpg` - Safety page hero image
- `winter-safety.jpg` - Winter safety tips image
- `summer-safety.jpg` - Summer safety tips image
- `chief.jpg` - Fire Chief portrait
- `assistant-chief.jpg` - Assistant Chief portrait
- `captain.jpg` - Captain portrait

### Gallery Images (in `/public/images/gallery/`)
- `image1.jpg` through `image12.jpg`

## Step 4: Optimize Images (Optional but Recommended)
1. Resize images to appropriate dimensions:
   - Hero images: 1920×1080px
   - Gallery images: 800×800px (square)
   - Team/Personnel photos: 600×800px
   - Logo: 500×500px
2. Compress images for web use (aim for <500KB each)
3. Ensure consistent aspect ratios

## Step 5: Add PDF Resources (if applicable)
Place any PDF resources in the `/public/resources/` directory:
- `home-fire-safety-checklist.pdf`
- `fire-escape-plan-template.pdf`
- `smoke-alarm-installation-guide.pdf`
- `fire-extinguisher-guide.pdf`

## Step 6: Test the Site
1. Start the development server: `npm run dev`
2. Navigate to different pages to ensure all images are displayed correctly
3. Check for any missing or broken images in your browser's developer console
4. Make adjustments as needed

## Troubleshooting
- If images aren't displaying, check the image paths in your code
- Ensure image filenames match exactly what's expected in the code
- Verify that the image formats are supported (jpg, png, etc.)
- For large images, you may need to increase the Next.js image size limit in `next.config.js` 