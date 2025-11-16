'use client';

import { useState } from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { SearchBar } from '@/components/home/SearchBar';
import { ProductGrid } from '@/components/home/ProductGrid';
import { Footer } from '@/components/home/Footer';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    // Filtering is handled in ProductGrid
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          onSearch={handleSearch}
        />
        <ProductGrid
          searchQuery={searchQuery}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <Footer />
      </div>
    </div>
  );
}
