import React from 'react';
import { getImageWithFallback } from '@/utils/imageUtils';

interface WebflowImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: React.CSSProperties;
  isBackground?: boolean;
}

/**
 * A component that renders images from Webflow CDN using standard img tags
 * This bypasses Next.js Image optimization which can sometimes cause issues with Webflow CDN
 */
const WebflowImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority,
  style,
  isBackground
}: WebflowImageProps) => {
  // Get the source with potential fallback
  const imageSrc = getImageWithFallback(src);
  
  // For background images, we can use div with background-image
  if (isBackground) {
    return (
      <div 
        className={className}
        style={{ 
          backgroundImage: `url("${imageSrc}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          ...style
        }}
        role="img"
        aria-label={alt}
      />
    );
  }
  
  // For regular images, use standard img tag
  // Remove fetchpriority completely since it's causing TypeScript errors
  // and the loading="eager" attribute already handles priority loading
  return (
    <img 
      src={imageSrc} 
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      style={style}
    />
  );
};

export default WebflowImage; 