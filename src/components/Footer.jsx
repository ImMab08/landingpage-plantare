/* eslint-disable @next/next/no-img-element */
import { IconFacebook, IconInstagram, IconTikTok } from "@/icons";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center space-y-6 sm:space-y-0 sm:justify-between">
          <a
            href="https://www.instagram.com/plantarebyemi/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img              
              src="logo.png"
              className="h-[70px] max-w-max"
              alt="Flowbite Logo"
            />
          </a>
          <ul className="flex mb-6 text-sm space-x-4">
            <li className="flex items-center justify-center">
              <Link target="_blank" href="https://www.facebook.com/profile.php?id=100083206418670" className="">
                <IconFacebook />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link target="_blank" href="https://www.instagram.com/plantarebyemi/" className="">
                <IconInstagram />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link target="_blank" href="https://www.tiktok.com/@plantarebyemi" className="">
                <IconTikTok />
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024 Plantare. Todos lo derechos reservados.
        </span>
      </div>
    </footer>
  );
}
