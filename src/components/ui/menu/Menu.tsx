'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";



export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen); // Alternar el menú
    const closeMenu = () => setMenuOpen(false);
    const isClient = typeof window !== 'undefined';

  const handleNavigation = (e:any, section:string) => {
    e.preventDefault(); // Evitar la navegación predeterminada
    if (isClient) {
      closeMenu(); // Cerrar el menú
      window.location.href = `/#${section}`; // Redirigir a la sección
    }
  };
    return (
        <div className="gradient-background">
     <header className="flex justify-between items-center py-6 px-12 bg-transparent">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href={'/'}>
          <Image src={'/drts_v2.png'} alt="logo" width={100} height={50} />
        </Link>
      </div>

      {/* Botón de menú para móviles */}
      <div className="md:hidden">
        <button
          className="text-teal-600 px-4"
          onClick={(event) => {
            event.stopPropagation()
            toggleMenu()
          }} // Alterna el estado del menú
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <IoMdClose className="h-6 w-6 mb-2"/>
          ) : (
            <IoMenuOutline className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navegación */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute top-32 left-0 w-full shadow-md md:static md:block md:w-auto md:shadow-none md:bg-transparent mt-8 pb-4`}
      >
        <div className="md:flex md:space-x-8 text-white">
          <Link  href="/#services" className="block py-2 px-4 hover:text-teal-200" onClick={(e) => handleNavigation(e, 'services')}>
            Services
          </Link>
          <Link href="#products" className="block py-2 px-4 hover:text-teal-200" onClick={(e) => handleNavigation(e, 'products')}>
            Products
          </Link>
          <Link href="#about" className="block py-2 px-4 hover:text-teal-200" onClick={(e) => handleNavigation(e, 'about')}>
            About Us
          </Link>
          <Link href="#contact" className="block py-2 px-4 hover:text-teal-200" onClick={(e) => handleNavigation(e, 'contact')}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Botón de contacto */}
      <button className="hidden md:block bg-white text-teal-600 px-6 py-2 rounded-md font-semibold">
        Get in Touch
      </button>
    </header>
    </div>
    )
    
}