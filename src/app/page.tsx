import { About } from "@/components/ui/about/About";
import { Client } from "@/components/ui/client/Client";
import { Contact } from "@/components/ui/contact/Contact";
import { Footer } from "@/components/ui/footer/Footer";
import { Microservices } from "@/components/ui/microservices/Microservices";
import { OurApp } from "@/components/ui/ourApp/OurApp";
import { Products } from "@/components/ui/products/Products";
import { Service } from "@/components/ui/services/Services";
import { TopMenu } from "@/components/ui/topMenu/TopMenu";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-white bg-white">
      {/* Encabezado */}
      <TopMenu />

      {/* Sección de Servicios */}
      <Service />

      {/* Microservice */}
      <Microservices/>

      {/* Sección de Productos */}
      <Products />

      {/* About */}
      <About/>

      {/* Client */}
      <Client/>

      {/* Our App */}
      <OurApp/>

      {/* Formulario de Contacto */}
      <Contact/>

      {/* Pie de Página */}
      <Footer/>
    </div>
  );
}
