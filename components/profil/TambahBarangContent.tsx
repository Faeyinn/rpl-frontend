// @/components/profil/TambahBarangContent.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const TambahBarangContent: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    namaBarang: "",
    harga: "",
    tipe: "",
    kondisiBarang: "",
    nomorKontak: "",
    sosialMedia: "",
    lokasi: "",
  });

  const [images, setImages] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 3);
      setImages(filesArray);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Berhasil!",
      text: "Barang berhasil ditambahkan",
      icon: "success",
      confirmButtonColor: "#312B5F",
    }).then(() => {
      router.push("/profil?tab=barang-saya");
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm p-6 md:p-8"
    >
      <h2 className="text-3xl font-bold mb-8">Tambah Barang</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nama Barang
              </label>
              <Input
                type="text"
                name="namaBarang"
                placeholder="your text"
                value={formData.namaBarang}
                onChange={handleChange}
                className="bg-[#8B9C8C] text-white placeholder:text-white/70"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Harga</label>
              <Input
                type="text"
                name="harga"
                placeholder="your text"
                value={formData.harga}
                onChange={handleChange}
                className="bg-[#8B9C8C] text-white placeholder:text-white/70"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Gambar Produk
              </label>
              <div className="relative">
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center w-full h-12 bg-[#8B9C8C] text-white rounded-md cursor-pointer hover:bg-[#8B9C8C]/90 transition-colors"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  <span className="text-sm">
                    {images.length > 0
                      ? `${images.length} gambar dipilih (max 3 item)`
                      : "Upload your image (max 3 item)"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Deskripsi
              </label>
              <Textarea
                name="tipe"
                placeholder="Tipe:&#10;Kondisi Barang:&#10;Nomor Kontak:&#10;Sosial Media:&#10;Lokasi:"
                value={formData.tipe}
                onChange={handleChange}
                className="bg-[#8B9C8C] text-white placeholder:text-white/70 min-h-[280px]"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button type="submit" size="lg" className="w-full md:w-auto px-12">
            Submit
          </Button>
        </div>
      </form>
    </motion.div>
  );
};