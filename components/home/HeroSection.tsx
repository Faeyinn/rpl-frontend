"use client";

import React from "react";
import TrueFocus from "@/components/anim/TrueFocus";
import RotatingText from "@/components/anim/RotatingText";

export const HeroSection = () => {
  return (
    <div
      className="relative h-[500px] flex items-center justify-center overflow-hidden"
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
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

          {/* Animated rotating lines (purple, per spec) */}
          <div className="mt-4 flex items-center justify-center gap-4">
            {/* static white word */}
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-md">
              Transaksi
            </span>

            {/* RotatingText replacing TextType */}
            <span className="inline-flex items-center">
              <RotatingText
                texts={["Barang Bekas", "Produk Usaha", "Aman antar mahasiswa"]}
                mainClassName="px-3 sm:px-4 md:px-5 bg-[#7C3AED] text-white font-extrabold text-lg md:text-xl lg:text-2xl overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
