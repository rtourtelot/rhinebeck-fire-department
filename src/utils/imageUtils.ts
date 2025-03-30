import { StaticImageData } from 'next/image';

/**
 * Utility functions for handling images in the application
 * 
 * Images are now stored locally in the /public/images directory
 */

/**
 * Maps requested image paths to the most appropriate local image files
 * Handles different image sizes and formats
 */
export const getImageWithFallback = (
  imagePath: string, 
  fallbackUrl: string = ''
): string => {
  // Map common image paths to specific local files
  const localImageMap: Record<string, string> = {
    // Updated mapping to use existing files
    '/images/rbfd-logo.png': '/images/IMG_3542-p-500.jpg', // Using a substitute for the badge
    '/images/hero-image.jpg': '/images/RBFD-hero.png', // Using the full-resolution version
    '/images/station-image.jpg': '/images/IMG_3741-p-2000.jpg',
    '/images/about-hero.jpg': '/images/IMG_3731-p-2000.jpg',
    '/images/join-hero.jpg': '/images/DEC4F091-08C9-4D80-B7E9-923C0D887873-p-2000.jpeg',
    '/images/safety-hero.jpg': '/images/5525A51A-AF51-49C6-A90F-6BD95E38C63B-p-2000.jpeg',
    '/images/chief.jpg': '/images/IMG_3542-p-2000.jpg',
    '/images/assistant-chief.jpg': '/images/IMG_3552-p-2000.jpg',
    '/images/captain.jpg': '/images/IMG_3548-p-2000.jpg',
    '/images/winter-safety.jpg': '/images/29662381_2350819884943633_3834427790490380985_o-p-2000.jpeg',
    '/images/summer-safety.jpg': '/images/29744762_2362878063737815_3908663322297972472_o-p-2000.jpeg'
  };
  
  // Return the mapped local file if available
  if (localImageMap[imagePath]) {
    return localImageMap[imagePath];
  }
  
  // Handle common directory paths that might be missing and map them
  if (imagePath.startsWith('/images/gallery/')) {
    // For any gallery image, provide a reasonable fallback
    const galleryId = parseInt(imagePath.replace(/[^0-9]/g, '')) || 1;
    return getGalleryImagePath(Math.min(galleryId, 12)); // Ensure we're within range
  }
  
  // Return the original path as requested (it might be a direct reference to a file that exists)
  if (imagePath.startsWith('/')) {
    return imagePath;
  }
  
  // Return the provided fallback if specified
  if (fallbackUrl) {
    return fallbackUrl;
  }
  
  // Default fallback - a simple placeholder SVG
  return `data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23CCCCCC'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23555555'%3E${encodeURIComponent(imagePath.split('/').pop() || 'Image Placeholder')}%3C/text%3E%3C/svg%3E`;
};

/**
 * Maps a gallery image ID to the corresponding path from local images
 */
export const getGalleryImagePath = (imageId: number): string => {
  // Gallery image mapping to local files
  const galleryImageMap: Record<number, string> = {
    1: '/images/IMG_1013-p-2000.jpeg',
    2: '/images/29662381_2350819884943633_3834427790490380985_o-p-2000.jpeg',
    3: '/images/29744762_2362878063737815_3908663322297972472_o-p-2000.jpeg',
    4: '/images/44136667_2738873839471567_7471388725730082816_o-1-p-2000.jpeg',
    5: '/images/5525A51A-AF51-49C6-A90F-6BD95E38C63B-p-2000.jpeg',
    6: '/images/DEC4F091-08C9-4D80-B7E9-923C0D887873-p-2000.jpeg',
    7: '/images/IMG_3442-p-2000.jpg',
    8: '/images/IMG_3542-p-2000.jpg',
    9: '/images/IMG_3548-p-2000.jpg',
    10: '/images/IMG_3552-p-2000.jpg',
    11: '/images/IMG_3731-p-2000.jpg',
    12: '/images/IMG_3741-p-2000.jpg'
  };
  
  // Return the mapped gallery image if available
  if (galleryImageMap[imageId]) {
    return galleryImageMap[imageId];
  }
  
  // Default placeholder for gallery images
  return `data:image/svg+xml,%3Csvg width='800' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='800' fill='%23EEEEEE'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='32' fill='%23999999'%3EGallery Image ${imageId}%3C/text%3E%3C/svg%3E`;
};

/**
 * Maps a resource name to the corresponding PDF path
 */
export const getResourcePath = (resourceName: string): string => {
  // Resource mapping - will need to be updated when PDFs are available
  const resourceMap: Record<string, string> = {
    // Add your resource mappings when PDFs are available
    // 'home-fire-safety-checklist': '/resources/home-fire-safety-checklist.pdf',
  };
  
  // Return the mapped resource if available
  if (resourceMap[resourceName]) {
    return resourceMap[resourceName];
  }
  
  // Default local path
  return `/resources/${resourceName}.pdf`;
}; 