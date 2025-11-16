"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

export const AkunForm: React.FC = () => {
  const [formData, setFormData] = useState({
    namaPengguna: "",
    email: "",
    nim: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Berhasil!",
      text: "Data akun berhasil diperbarui",
      icon: "success",
      confirmButtonColor: "#312B5F",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm p-6 md:p-8"
    >
      <h2 className="text-3xl font-bold mb-8">Akun</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nama Pengguna
              </label>
              <Input
                type="text"
                name="namaPengguna"
                placeholder="your text"
                value={formData.namaPengguna}
                onChange={handleChange}
                className="bg-[#C8E6DB]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="your text"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#C8E6DB]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">NIM</label>
              <Input
                type="text"
                name="nim"
                placeholder="xxxxxx"
                value={formData.nim}
                onChange={handleChange}
                className="bg-[#C8E6DB]"
              />
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••••••••••••••••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-[#C8E6DB]"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button type="submit" size="lg" className="w-full md:w-auto">
            Simpan Perubahan
          </Button>
        </div>
      </form>
    </motion.div>
  );
};