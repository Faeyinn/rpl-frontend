"use client";

import React from "react";
import { motion } from "framer-motion";
import TrueFocus from "@/components/anim/TrueFocus";
import TextType from "@/components/anim/TextType";

export const HeroSection = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center overflow-hidden" style={{ width: '100%', height: '600px', position: 'relative' }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/bg-dashboard-edmt.png)",
        }}
      ></div>

      {/* overlay untuk menjadikan background sedikit gelap */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 px-4">
        {/* panel glass di belakang teks — beri lebar tetap / responsif supaya ukuran tidak berubah */}
        <div className="inline-block w-[720px] max-w-[90vw] bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-2xl px-6 py-6 md:px-10 md:py-8 text-center overflow-hidden">
          <TrueFocus
            sentence="Edu Market"
            manualMode={false}
            blurAmount={5}
            borderColor="purple"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          {/* Animated typed lines (purple) */}
          <div className="mt-4 flex items-center justify-center gap-4">
            {/* static white word */}
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-md">
              Transaksi
            </span>

            {/* typed text with subtle shadow */}
            <span className="inline-flex items-center">
              <TextType
                text={["Barang Bekas", "Produk Usaha", "Aman antar mahasiswa"]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={1800}
                loop
                showCursor
                cursorCharacter="|"
                textColors={["white"]}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#7C3AED] drop-shadow-xl"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
