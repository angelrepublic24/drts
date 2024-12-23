"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

export const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className=" w-full overflow-hidden gradient-background md:bg-[#000a1b]"
      style={{ height: "90vh" }}
    >
      <div className=" hidden md:hidden">
        <Image
          src={"/slider/odrts.gif"}
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
              href="#contact"
              className="block py-2 px-4 hover:text-teal-200"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Botón de contacto */}
        <button className="hidden md:block bg-white text-teal-600 px-6 py-2 rounded-md font-semibold">
          Get in Touch
        </button>
      </header>

      {/* Slider */}
      <section className="h-[calc(100%-6rem)] relative overflow-hidden py-0 md:py-10">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{
            delay: 7000, // Cambiar cada 7 segundos
            disableOnInteraction: false, // Continuar el autoplay al interactuar
          }}
          effect="fade"
          loop={true}
          fadeEffect={{
            crossFade: true, // Asegura una transición suave
          }}
          pagination={{
            clickable: true, // Hacer los puntos interactivos
          }}
          className="mySwiper h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex h-full">
              {/* Contenido */}
              <div className="w-full md:w-1/2 flex flex-col justify-center pl-12 text-left pb-36 md:pb-35 ">
                <h1 className="text-xl md:text-6xl font-bold mb-6">
                  Web Page <br />{" "}
                  <p style={{ color: "#94eedc" }}>Development</p>
                </h1>
                <p className="text-lg md:text-5xl mb-6 text-gray-50">
                  100% for all environments. <br />
                </p>
                <p className="text-md md:text-2xl mb-10 w-full md:w-10/12">
                  We design all types of web pages, and a variety of web
                  applications at your disposal.
                </p>
                <div className="flex space-x-4 w-full">
                  <button className="bg-white text-teal-600 px-6 py-3 rounded-md md:text-md font-medium">
                    Get Started
                  </button>
                  <button className="border border-white px-6 py-3 rounded-md font-medium">
                    Read More
                  </button>
                </div>
              </div>
              {/* Imagen */}
              {/* <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('')", // Reemplaza con tu imagen
                }}
              ></div> */}
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex h-full">
              {/* Contenido */}
              <div className="w-full md:w-1/2 flex flex-col justify-center pl-12 text-left pb-36 md:pb-40">
                <h1 className="text-2xl md:text-6xl font-bold mb-6">
                  Custom App <br />{" "}
                  <p style={{ color: "#94eedc" }}>Development</p>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-50 pr-4">
                  We develop apps tailored to your specific business needs,
                  ensuring quality and efficiency.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-teal-600 px-6 py-3 rounded-md font-medium">
                    Learn More
                  </button>
                  <button className="border border-white px-6 py-3 rounded-md font-medium">
                    Contact Us
                  </button>
                </div>
              </div>
              {/* Imagen */}
              {/* <div
                className="w-full md:w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/path-to-image2.jpg')", // Reemplaza con tu imagen
                }}
              ></div> */}
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex h-full">
              {/* Contenido */}
              <div className="w-full md:w-1/2 flex flex-col justify-center pl-12 text-left pb-36 md:pb-40">
                <h1 className="text-2xl md:text-6xl font-bold mb-6">
                  Top-notch Technical Support
                </h1>
                <p className="text-lg md:text-xl mb-8 pr-4">
                  Get access to expert technical support to help you with any
                  challenges.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-teal-600 px-6 py-3 rounded-md font-medium">
                    Get Support
                  </button>
                  <button className="border border-white px-6 py-3 rounded-md font-medium">
                    Learn More
                  </button>
                </div>
              </div>
              {/* Imagen */}
              {/* <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/path-to-image3.jpg')", // Reemplaza con tu imagen
                }}
              ></div> */}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-10 md:bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
};
