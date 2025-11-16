import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <motion.div 
      className="absolute -top-8 left-8 z-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-40 h-40 transition-transform group-hover:scale-110">
          <Image
            src="/edmt-logo-nobg.png"
            alt="EduMarket Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    </motion.div>
  );
};