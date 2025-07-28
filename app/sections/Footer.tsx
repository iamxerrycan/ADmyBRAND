"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Releases"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Center", "Terms of Service", "Legal", "Privacy Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t dark:border-gray-800 px-6 md:px-16 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            YourCompany
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
            Building reliable tools for modern businesses. Let&apos;s grow together.
          </p>
        </div>

        {/* Link Sections */}
        {footerLinks.map((section, index) => (
          <nav key={index} aria-label={section.title}>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
