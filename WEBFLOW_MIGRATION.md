# Migrating from Webflow - Using CDN URLs

Since you're unable to export all assets directly from Webflow, we've updated the approach to use Webflow's CDN URLs directly. This document explains how to find and use these URLs with your Next.js site.

## Finding Webflow CDN URLs

1. **Right-click and inspect**: On your Webflow site, right-click on an image and select "Inspect" or "Inspect Element"
2. **Locate the image tag**: In the developer tools panel, find the `<img>` tag
3. **Copy the src URL**: Look for the `src` attribute which contains a URL like:
   ```
   https://cdn.prod.website-files.com/5c63698c9b911106a32d8d2f/5c636bdd44c19c26262a30df_site-helmet.svg
   ```
4. **Collect all URLs**: Repeat this process for all images on your site

## Using the URL Collection Template

We've created a template to help you collect these URLs:

1. Run: `node scripts/collect-webflow-urls.js` (you've already done this)
2. Open `scripts/webflow-urls.md`
3. As you find image URLs on your Webflow site, add them to this document
4. This will give you a central place to organize all your image URLs

## Adding URLs to the Image Utility

Once you've collected URLs, you need to add them to the image utility:

1. Open `src/utils/imageUtils.ts`
2. Add your URLs to the `webflowImageMap` object:
   ```typescript
   const webflowImageMap: Record<string, string> = {
     '/images/rbfd-logo.png': 'https://cdn.prod.website-files.com/5c63698c9b911106a32d8d2f/5c636bdd44c19c26262a30df_site-helmet.svg',
     '/images/hero-image.jpg': 'YOUR_URL_HERE',
     // Add more mappings
   };
   ```
3. For gallery images, update the `galleryImageMap`:
   ```typescript
   const galleryImageMap: Record<number, string> = {
     1: 'YOUR_GALLERY_URL_1',
     2: 'YOUR_GALLERY_URL_2',
     // Add more mappings
   };
   ```
4. For PDF resources, update the `resourceMap`:
   ```typescript
   const resourceMap: Record<string, string> = {
     'home-fire-safety-checklist': 'YOUR_PDF_URL_1',
     // Add more mappings
   };
   ```

## Testing Your Site

After adding URLs to the image utility:

1. Run `npm run dev` to start the development server
2. Navigate through your site to make sure images are displaying correctly
3. If some images are still not displaying, check the console for errors and update the URLs as needed

## Advantages of This Approach

1. **No need for local files**: You can use Webflow's CDN directly
2. **No need for image export**: You don't need to download or upload any files
3. **Seamless fallbacks**: For any images without a URL mapping, we show a nice placeholder

## Limitations

1. **CDN dependencies**: Your site will continue to depend on Webflow's CDN
2. **Potential hotlink protection**: Webflow might block direct linking to their CDN resources
3. **Future changes**: If Webflow changes their URLs, you'll need to update your mappings

## Long-term Solution

Once your site is up and running, consider:

1. **Gradually downloading images**: Save important images locally
2. **Using image optimization services**: Consider using services like Cloudinary or Imgix
3. **Creating your own assets**: Replace Webflow assets with your own over time

Remember, the current solution is a practical intermediary step to get your site running while minimizing dependencies on Webflow. 