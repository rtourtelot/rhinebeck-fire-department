# Getting Started with Your New Website

Welcome to your new Rhinebeck Fire Department website! This guide will help you transfer your images from Webflow to your new Next.js site.

## Quick Start

1. **Install dependencies**
   ```
   npm install
   ```

2. **Import images from Webflow automatically** (recommended)
   ```
   npm run import-images
   ```
   This will access your Webflow site, download the images, and place them in the right directories.

3. **Check for any missing images**
   ```
   npm run check-images
   ```

4. **Start the development server**
   ```
   npm run dev
   ```

5. **View your site**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Alternative: Manual Image Transfer

If you prefer to manually transfer your images, follow these steps:

1. Download the images from your Webflow site
2. Rename and organize them according to the structure in `scripts/manual-image-workflow.md`
3. Place them in the correct directories in the `public` folder

## Website Structure

Your website consists of the following pages:
- Home (`/`)
- About (`/about`)
- Join Us (`/join`)
- Safety (`/safety`)
- Gallery (`/gallery`)
- Contact (`/contact`)

## Using Your Own Images

Since you own all the images from the original Webflow site, you can freely use them in this new website. The site has been built to expect images with the same names as specified in the README.

During development, if an image is missing, the site will:
1. Try to look for the local image in the `/public` directory
2. Fall back to the original Webflow image if available
3. Show a placeholder if neither is available

## Working with PDFs and Resources

Any PDF resources from your Webflow site should be placed in the `/public/resources/` directory with these names:
- `home-fire-safety-checklist.pdf`
- `fire-escape-plan-template.pdf`
- `smoke-alarm-installation-guide.pdf`
- `fire-extinguisher-guide.pdf`

## Help and Support

If you encounter any issues or have questions, refer to the main `README.md` file for more detailed information about the project structure and setup. 