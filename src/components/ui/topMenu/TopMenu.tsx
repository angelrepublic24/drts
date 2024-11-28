"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination  } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from 'next/image';

export const TopMenu = () => {
  return (
    <div className="gradient-background" style={{ height: "90vh" }}>
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-12">
        <div className="text-2xl font-bold">
          <Image src={'/drts_v2.png'} alt="logo" width={150} height={50}/>
        </div>
        <nav className="space-x-8">
          <Link href="#services" className="hover:text-teal-200">
            Services
          </Link>
          <Link href="#products" className="hover:text-teal-200">
            Products
          </Link>
          <Link href="#about" className="hover:text-teal-200">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-teal-200">
            Contact
          </Link>
        </nav>
        <button className="bg-white text-teal-600 px-6 py-2 rounded-md font-semibold">
          Get in Touch
        </button>
      </header>

      {/* Slider */}
      <section className="h-[calc(100%-6rem)] relative overflow-hidden py-10">
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
              <div className="w-1/2 flex flex-col justify-center pl-12 text-left pb-40 ">
                <h1 className="text-5xl md:text-8xl font-bold mb-6">
                  Web Page <br /> <p style={{color: '#94eedc'}}>Development</p>
                </h1>
                <p className="text-lg md:text-5xl mb-6 text-gray-50">
                  100% for all environments. <br />
                </p>
                <p className="text-lg md:text-2xl mb-10 md:w-10/12">
                  We design all types of web pages,
                  and a variety of web applications at your disposal.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-teal-600 px-6 py-3 rounded-md font-medium">
                    Get Started
                  </button>
                  <button className="border border-white px-6 py-3 rounded-md font-medium">
                    Read More
                  </button>
                </div>
              </div>
              {/* Imagen */}
              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/path-to-image1.jpg')", // Reemplaza con tu imagen
                }}
              ></div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex h-full">
              {/* Contenido */}
              <div className="w-1/2 flex flex-col justify-center pl-12 text-left">
                <h1 className="text-4xl md:text-8xl font-bold mb-6">
                  Custom App <br /> <p style={{color: '#94eedc'}}>Development</p>
                </h1>
                <p className="text-lg md:text-xl mb-8">
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
              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/path-to-image2.jpg')", // Reemplaza con tu imagen
                }}
              ></div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex h-full">
              {/* Contenido */}
              <div className="w-1/2 flex flex-col justify-center pl-12 text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Top-notch Technical Support
                </h1>
                <p className="text-lg md:text-xl mb-8">
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
              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/path-to-image3.jpg')", // Reemplaza con tu imagen
                }}
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
};
