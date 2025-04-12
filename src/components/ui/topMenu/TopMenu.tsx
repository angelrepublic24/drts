"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Slider from "../slider/Slider";





export const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className=" w-full overflow-hidden gradient-background md:bg-[#000a1b]"
      style={{ height: "90vh" }}
    >
      <div className="">
        <Image
          src={"/slider/diamond2.gif"}
          priority={true}
          className="absolute w-screen inset-0 md:object-cover slider "
          width={500}
          height={500}
          alt=""
          quality={100}
          style={{ height: "90vh", imageRendering: "crisp-edges" }}
        />
      </div>
      <header className="flex justify-between relative z-10 items-center py-6 px-12 bg-transparent">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href={"/"}>
            <Image src={"/drts_v2.png"} alt="logo" width={120} height={50} />
          </Link>
        </div>

        {/* Botón de menú para móviles */}
        <div className="md:hidden">
          <button
            className="text-teal-600 px-4"
            onClick={(event) => {
              event.stopPropagation();
              toggleMenu();
            }} // Alterna el estado del menú
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <IoMdClose className="h-6 w-6 mb-2" />
            ) : (
              <IoMenuOutline className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navegación */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-32 left-0 w-full shadow-md md:static md:block md:w-auto md:shadow-none md:bg-transparent mt-8 pb-4`}
        >
          <div className="md:flex md:space-x-8">
            <Link
              href="#services"
              className="block py-2 px-4 hover:text-teal-200"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="#products"
              className="block py-2 px-4 hover:text-teal-200"
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="block py-2 px-4 hover:text-teal-200"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="#customers"
              className="block py-2 px-4 hover:text-teal-200"
              onClick={closeMenu}
            >
              Customers
            </Link>
          </div>
        </nav>

        {/* Botón de contacto */}
        <Link href="#contact" className="hidden md:block bg-white text-teal-600 px-6 py-2 rounded-md font-semibold">
          Contact us
        </Link>
      </header>

      {/* Slider */}
      <Slider />
    </div>
  );
};
