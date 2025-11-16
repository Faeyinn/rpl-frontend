import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    {
      topic: "Topic",
      pages: ["Page", "Page", "Page"],
    },
    {
      topic: "Topic",
      pages: ["Page", "Page", "Page"],
    },
    {
      topic: "Topic",
      pages: ["Page", "Page", "Page"],
    },
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Kolom Kiri: Logo dan Sosial Media */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-gray-900">EduMart</h2>
            <p className="mt-4 text-sm text-gray-600">
              Tertarik jadi penjual?{" "}
              <Link
                href="/register-seller"
                className="font-medium text-purple-700 hover:underline"
              >
                Gabung bersama kami.
              </Link>
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-gray-800"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{section.topic}</h3>
                <ul className="mt-4 space-y-2">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}