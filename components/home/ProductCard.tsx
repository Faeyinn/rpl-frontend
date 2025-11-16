'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Swal from 'sweetalert2';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  seller: string;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  index,
}) => {
  const router = useRouter();

  const handleAddToCart = () => {
    Swal.fire({
      title: 'Berhasil!',
      text: `${name} ditambahkan ke keranjang`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleProductClick = () => {
    router.push(`/marketplace/product/${id}`);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={handleProductClick}
    >
      <div className="relative h-48 bg-gray-200">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 font-bold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 text-xl font-bold">${price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};