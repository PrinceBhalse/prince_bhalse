import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage - Performance-optimized image component.
 * - Uses native lazy loading
 * - Shows a placeholder shimmer while loading
 * - Uses IntersectionObserver for enhanced lazy loading  
 * - Includes width/height to prevent CLS
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  style = {},
  width,
  height,
  aspectRatio,
  objectFit = 'cover',
  objectPosition = 'center',
  borderRadius,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: width || '100%',
    height: height || 'auto',
    aspectRatio: aspectRatio || undefined,
    borderRadius: borderRadius || undefined,
    ...style,
  };

  return (
    <div ref={imgRef} style={containerStyle} className={className} {...rest}>
      {/* Shimmer placeholder */}
      {!isLoaded && (
        <div
          className="lazy-img-shimmer"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: borderRadius || undefined,
          }}
          aria-hidden="true"
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            objectPosition,
            display: 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
            borderRadius: borderRadius || undefined,
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
