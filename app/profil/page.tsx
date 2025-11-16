"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ProfileSidebar } from "@/components/profil/ProfileSidebar";
import { AkunForm } from "@/components/profil/AkunForm";
import { FavoritContent } from "@/components/profil/FavoritContent";
import { BarangSayaContent } from "@/components/profil/BarangSayaContent";
import { TambahBarangContent } from "@/components/profil/TambahBarangContent";

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState("akun");

  const renderContent = () => {
    switch (activeTab) {
      case "favorit":
        return <FavoritContent />;
      case "akun":
        return <AkunForm />;
      case "barang-saya":
        return <BarangSayaContent />;
      case "tambah-barang":
        return <TambahBarangContent />;
      default:
        return <AkunForm />;
    }
  };

  return (
    // set CSS vars for navbar/footer heights (adjust values if needed)
    <div
      className="min-h-screen flex flex-col bg-white w-full"
      style={
        {
          "--navbar-height": "64px",
          "--footer-height": "96px",
        } as React.CSSProperties
      }
    >
      <Navbar />

      <main className="flex-1 w-full px-4 mt-10 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8">
          {/* Sidebar - hidden on mobile, shown on large screens */}
          <div className="hidden lg:block">
            {/* sticky wrapper: sticks under navbar and extends to above footer */}
            <div
              style={
                {
                  position: "sticky",
                  top: "var(--navbar-height)",
                  height: "calc(100vh - var(--navbar-height) - var(--footer-height))",
                  alignSelf: "start",
                  overflowY: "auto",
                } as React.CSSProperties
              }
            >
              <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>

          {/* Mobile Sidebar - Show as horizontal tabs on mobile */}
          <div className="lg:hidden bg-white rounded-lg shadow-sm p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Halo Guest!</h2>
            <div className="flex overflow-x-auto gap-2 pb-2">
              {["favorit", "akun", "barang-saya", "tambah-barang"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? "bg-[#CBAF94] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {tab === "favorit" && "Favorit"}
                    {tab === "akun" && "Akun"}
                    {tab === "barang-saya" && "Barang Saya"}
                    {tab === "tambah-barang" && "Tambah Barang"}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full">{renderContent()}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}