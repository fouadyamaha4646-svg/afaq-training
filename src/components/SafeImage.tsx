import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({ src, alt, className = '', fallbackTitle }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-[#0B192C] text-slate-300 p-6 text-center ${className}`}
      >
        <BookOpen className="w-8 h-8 text-amber-500/80 mb-2" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-200 max-w-xs">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
