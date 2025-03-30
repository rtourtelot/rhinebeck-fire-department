# Rhinebeck Fire Department Website

A modern, responsive website for the Rhinebeck Fire Department built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Fast performance with Next.js
- TypeScript for type safety
- Tailwind CSS for styling
- SEO optimized with proper metadata
- Accessible UI components

## Pages

- Home
- About
- Join Us
- Fire Safety
- Photo Gallery
- Contact

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rhinebeck-fire-department.git
cd rhinebeck-fire-department
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm run start
# or
yarn start
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Original design and content from the Rhinebeck Fire Department Webflow site
- Images courtesy of the Rhinebeck Fire Department

## Image Implementation

This project uses a flexible approach to handle images:

1. **Primary option:** Local images in the `/public` directory
2. **Fallback option:** Direct links to Webflow CDN URLs
3. **Last resort:** Generated placeholders for missing images

The site will work even without images, displaying placeholders until you add the proper URLs.

## Project Structure

- `/public` - Static assets including images and resources
- `/src/components` - Reusable React components
- `/src/pages` - Next.js pages and routes
- `/src/styles` - Global CSS and Tailwind configuration
- `/src/utils` - Utility functions, including image handling
- `/scripts` - Utility scripts for Webflow URL collection

## Deployment

This site can be deployed to any hosting platform that supports Next.js, including:

- Vercel
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Traditional hosting with Node.js

## Additional Documentation

- [WEBFLOW_MIGRATION.md](WEBFLOW_MIGRATION.md) - Detailed guide for using Webflow CDN URLs
- [scripts/webflow-urls.md](scripts/webflow-urls.md) - Template for collecting Webflow URLs
- [scripts/README.md](scripts/README.md) - Information about utility scripts

## Image Requirements

Since you own the original website images, you'll need to ensure they're properly added to this project. Here's where to place each image:

### Core Images
Place these in the `/public/images/` directory:
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

### Gallery Images
Place these in the `/public/images/gallery/` directory:
- `image1.jpg` through `image12.jpg` - Gallery photos

### Resources
Place these in the `/public/resources/` directory:
- `home-fire-safety-checklist.pdf`
- `fire-escape-plan-template.pdf`
- `smoke-alarm-installation-guide.pdf`
- `fire-extinguisher-guide.pdf`

## Image Formats and Sizes

For optimal performance:
- Use `.jpg` for photos (`.png` for logo)
- Compress images for web (aim for <500KB each)
- Recommended dimensions:
  - Hero images: 1920×1080px
  - Gallery images: 800×800px (square)
  - Team/Personnel photos: 600×800px
  - Logo: 500×500px

## Temporary Image Fallbacks

During development, if images are missing, the site will automatically fall back to using your original Webflow images where possible. This allows you to develop and test even before all images have been transferred.

A yellow notice will appear at the bottom of the page if you're using placeholder images. You can dismiss this notice once you've added your own images.

## Notes

This site uses Next.js Image Optimization to automatically serve optimized, responsive images. The original images will be processed and optimized when the site is built.

## Favicon

Don't forget to add your favicon.ico file to the public directory. 