'use client';

import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { HelpButton } from '@/components/auth/HelpButton';
import { Logo } from '@/components/auth/Logo';
import { IllustrationSection } from '@/components/auth/IllustrationSection';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex">
      {/* Logo */}
      <Logo />
      
      {/* Help button */}
      <HelpButton />
      
      {/* Left section - Login Form */}
      <div className="w-full lg:w-1/3 flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <LoginForm />
      </div>

      {/* Right section - Illustration */}
      <IllustrationSection />
    </div>
  );
}