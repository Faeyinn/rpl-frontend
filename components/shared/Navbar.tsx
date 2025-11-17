'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/marketplace' },
    { label: 'Bantuan', href: '/bantuan' },
    { label: 'Notifikasi', href: '/notifikasi' },
    { label: 'Profil', href: '/profil' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-purple-200/80 backdrop-blur-sm shadow-md antialiased font-sans"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-40 h-8">
              <Image
                src="/edmt-logo-nobg.png"
                alt="EduMarket"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <div key={index} className="relative inline-flex items-center">
                  <Link
                    href={item.href}
                    className={`relative z-10 px-3 py-1.5 text-base font-semibold tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-gray-800 hover:text-purple-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {/* animated background for active / subtle hover glow */}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-bg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-purple-600 shadow-md -z-10"
                    />
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, scale: 1.02 }}
                      transition={{ duration: 0.16 }}
                      className="absolute inset-0 rounded-full bg-white/0 hover:bg-white/6 -z-10"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};