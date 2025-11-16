import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Menggabungkan beberapa class name menjadi satu string.
 * @param inputs Daftar class name.
 * @returns String class name yang sudah digabungkan.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}