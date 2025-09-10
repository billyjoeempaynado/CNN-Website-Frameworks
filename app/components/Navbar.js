"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to check active path
  const isActive = (path) =>
    pathname === path
      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-1"
      : "text-gray-900 dark:text-gray-100 hover:text-blue-600";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/logoOnly.png"
            alt="CNN Securities Logo"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          <span className="text-2xl font-bold text-green-600 dark:text-green-500">
            CNN Securities
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="/faq" className={isActive("/faq")}>
            FAQ
          </Link>
          <Link href="/forms" className={isActive("/forms")}>
            Forms
          </Link>
        </div>

        {/* Burger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-gray-900 z-50 shadow-2xl flex flex-col p-6"
          >
            {/* Close Button */}
            <button
              className="self-end text-2xl text-gray-800 dark:text-white mb-6"
              onClick={toggleMenu}
            >
              ✕
            </button>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-6">
              <Link href="/" className={isActive("/")} onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/about" className={isActive("/about")} onClick={toggleMenu}>
                About
              </Link>
              <Link href="/faq" className={isActive("/faq")} onClick={toggleMenu}>
                FAQ
              </Link>
              <Link href="/forms" className={isActive("/forms")} onClick={toggleMenu}>
                Forms
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
