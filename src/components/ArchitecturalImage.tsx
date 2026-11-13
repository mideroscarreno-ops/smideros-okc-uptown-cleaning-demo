import { useState } from 'react';
import { Compass } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function ArchitecturalImage({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  priority = false,
}: ArchitecturalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#E9E6DF] text-[#1D2526] p-8 text-center border border-[#1D2526]/10 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Compass className="w-8 h-8 text-[#78817F] mb-3 stroke-[1.25]" aria-hidden="true" />
        <p className="font-serif text-lg font-medium text-[#1D2526] max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E9E6DF] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setHasError(true)}
        className={imgClassName}
      />
    </div>
  );
}
