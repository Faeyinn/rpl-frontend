"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { FilterTabs } from "@/components/notifikasi/FilterTabs";
import { NotifikasiCard } from "@/components/notifikasi/NotifikasiCard";

// Dummy data notifikasi
const notifikasiData = [
  {
    id: 1,
    title: "Toko Hanabi",
    description:
      "Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.",
    category: "semua",
  },
  {
    id: 2,
    title: "Nana Shop",
    description:
      "Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.",
    category: "belum-dibaca",
  },
  {
    id: 3,
    title: "Subheading",
    description:
      "Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.",
    category: "spam",
  },
];

export default function NotifikasiPage() {
  const [activeTab, setActiveTab] = useState("semua");

  const filteredData =
    activeTab === "semua"
      ? notifikasiData
      : notifikasiData.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 container mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl text-gray-800 font-bold mb-8"
        >
          Halo Guest!
        </motion.h1>

        {/* Filter Tabs */}
        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Notifikasi Cards */}
        <div className="space-y-6">
          {filteredData.map((item) => (
            <NotifikasiCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}