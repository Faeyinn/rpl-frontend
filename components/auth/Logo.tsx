import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="absolute top-6 left-6 z-10">
      <Link href="/" className="block group">
        <div className="relative w-40 h-12 transition-transform group-hover:scale-105">
          <Image
            src="/edmt-logo.png"
            alt="EduMarket Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    </div>
  );
};