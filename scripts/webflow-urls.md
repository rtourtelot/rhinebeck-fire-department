
# Webflow CDN URL Collection

Use this file to add the URLs from your Webflow site. When you find image URLs (like the one you shared),
add them to this list. Once you have collected all your URLs, you can use them in the imageUtils.ts file.

## Core Images

For each of these images, find the corresponding URL from your Webflow site:

- Logo: https://cdn.prod.website-files.com/5c63698c9b911106a32d8d2f/5c636bdd44c19c26262a30df_site-helmet.svg
- Hero Image: 
- Station Image: 
- About Hero Image: 
- Join Hero Image: 
- Safety Hero Image: 
- Winter Safety Image: 
- Summer Safety Image: 
- Chief Image: 
- Assistant Chief Image: 
- Captain Image: 

## Gallery Images

Add up to 12 gallery image URLs:

1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12. 

## Resource PDFs

Add URLs for any PDF resources:

- Home Fire Safety Checklist: 
- Fire Escape Plan Template: 
- Smoke Alarm Installation Guide: 
- Fire Extinguisher Guide: 

## How to Use This List

After collecting your URLs, add them to the webflowImageMap in src/utils/imageUtils.ts:

```typescript
// Map of local paths to Webflow CDN URLs
const webflowImageMap: Record<string, string> = {
  '/images/rbfd-logo.png': 'https://cdn.prod.website-files.com/5c63698c9b911106a32d8d2f/5c636bdd44c19c26262a30df_site-helmet.svg',
  '/images/hero-image.jpg': 'YOUR_URL_HERE',
  // ...add more mappings here
};

// For gallery images
const galleryImageMap: Record<number, string> = {
  1: 'YOUR_GALLERY_URL_1',
  2: 'YOUR_GALLERY_URL_2',
  // ...and so on
};
```

## Finding Webflow URLs

1. Visit your Webflow site in a browser
2. Right-click on an image and select "Inspect" or "Inspect Element"
3. Find the <img> tag in the HTML panel
4. Look for the "src" attribute, which contains the URL
5. Copy the URL and add it to this list
