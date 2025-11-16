// @/components/profil/BarangSayaContent.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/dummy-data";
import { ProductCard } from "@/components/home/ProductCard";

export const BarangSayaContent: React.FC = () => {
  // ambil contoh produk milik user — sesuaikan filter bila ada properti owner
  const myProducts = products.slice(4, 16);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent"
    >
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Barang Saya</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {myProducts.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};