# Scripts Directory

This directory contains utility scripts to help with the Rhinebeck Fire Department website project.

## Available Scripts

### `import-webflow-images.js`

This script helps you import images from your existing Webflow site to your local Next.js project. It will:

1. Visit your Webflow site (rhinebeckfd.com)
2. Scrape image URLs
3. Download images to the appropriate directories in your local project

**Usage:**
```bash
npm run import-images
```

The script will automatically:
- Install any required dependencies (like Puppeteer)
- Download the logo and hero images
- Download images for gallery pages
- Create placeholder files for resources

### Manual Alternative

If you prefer not to use the automated script, see `manual-image-workflow.md` for step-by-step instructions on manually transferring images from Webflow to your local project.

## Troubleshooting

If you encounter issues with the scripts:

1. Check that you have Node.js installed (version 14 or higher recommended)
2. Make sure you have proper permissions to create files and directories
3. Check your internet connection if downloading images fails
4. If the script can't access certain images, you may need to download them manually

For any persistent issues, please refer to the project's main README.md file or contact the project maintainer. 