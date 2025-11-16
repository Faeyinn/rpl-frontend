"use client";

import React from "react";
import { motion } from "framer-motion";

interface NotifikasiCardProps {
  title: string;
  description: string;
}

export const NotifikasiCard: React.FC<NotifikasiCardProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8"
    >
      <h3 className="text-xl text-gray-800 font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};