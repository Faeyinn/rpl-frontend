'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  minPrice: string;
  setMinPrice: (price: string) => void;
  maxPrice: string;
  setMaxPrice: (price: string) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onSearch,
}) => {
  const handleSearch = () => {
    onSearch();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-8 relative z-20">
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Cari barang"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-lg transition-colors flex items-center gap-2 font-medium shadow-sm"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Cari</span>
            </button>
          </div>
          <div className="flex gap-3">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Harga Min"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Harga Max"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
