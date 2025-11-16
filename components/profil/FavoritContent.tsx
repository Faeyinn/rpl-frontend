// @/components/profil/FavoritContent.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/dummy-data";
import { ProductCard } from "@/components/home/ProductCard";

export const FavoritContent: React.FC = () => {
  // ambil beberapa produk sebagai favorit (sesuaikan index jika perlu)
  const favoritProducts = products.slice(0, 12);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent"
    >
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Favorit</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favoritProducts.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};