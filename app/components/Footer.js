"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo + Social */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/Cnn_Logo.png"
                alt="CNN Logo"
                width={120}
                height={60}
                className="mx-auto md:mx-0"
              />
            </Link>

            <ul className="flex justify-center md:justify-start space-x-4 mt-4">
              <li>
                <Link href="#" className="text-xl hover:text-pink-400">
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xl hover:text-blue-500">
                  <ion-icon name="logo-facebook"></ion-icon>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xl hover:text-sky-400">
                  <ion-icon name="logo-twitter"></ion-icon>
                </Link>
              </li>
            </ul>

            <p className="mt-4 text-sm text-gray-400">
              &copy; {year} CNN Securities, Inc. <br className="sm:hidden" />
              All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-2">Contact us</p>
            <address className="not-italic text-sm space-y-2">
              <p>
                5F Unit 2502, The Orient Square, F. Ortigas Jr. Road, Ortigas
                Centre, Pasig City.
              </p>
              <p>
                <a
                  className="block hover:underline"
                  href="tel:+63286877955-56"
                >
                  +632 86877955-56
                </a>
                <a
                  className="block hover:underline"
                  href="mailto:info@cnnsecurities.com"
                >
                  info@cnnsecurities.com
                </a>
              </p>
            </address>
          </div>

          {/* Account */}
          <div>
            <p className="font-semibold mb-2">Account</p>
            <ul className="space-y-1">
              <li>
                <Link href="/forms" className="hover:underline">
                  Open an account
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold mb-2">Company</p>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:underline">
                  About HDI
                </Link>
              </li>
              <li>
                <Link href="/forms" className="hover:underline">
                  Forms
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-semibold mb-2">Resources</p>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy & terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
