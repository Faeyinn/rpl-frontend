"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Swal from "sweetalert2";
import { Product } from "@/types";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleContact = () => {
    // Menggunakan SweetAlert2 untuk notifikasi
    Swal.fire({
      title: "Hubungi Penjual",
      text: "Anda akan diarahkan ke halaman chat.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, lanjutkan!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // Menggunakan useRouter untuk navigasi dinamis
        router.push(`/chat/${product.seller}`);
      }
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    Swal.fire({
      title: isFavorite ? "Dihapus dari Favorit" : "Ditambah ke Favorit",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <motion.div
      className="w-full space-y-4 py-8 lg:w-1/2 lg:py-0 lg:pl-12"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg text-gray-600">{product.seller}</p>
      <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
      <p className="text-3xl font-medium text-gray-800">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-base text-gray-600">{product.description}</p>

      <div className="flex space-x-4 pt-4">
        <button
          onClick={handleContact}
          className="flex-1 rounded-lg bg-gray-900 px-16 py-3 text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 md:flex-none md:px-56"
        >
          Hubungi Penjual
        </button>
        <button
          onClick={toggleFavorite}
          className="flex-1 rounded-lg border border-gray-900 px-6 py-3 text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 md:flex-none"
        >
          <div className="flex items-center justify-center space-x-2">
            <Heart
              className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
            />
            <span>Favorit</span>
          </div>
        </button>
      </div>
    </motion.div>
  );
}