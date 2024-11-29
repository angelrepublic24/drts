import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";



export const Footer = () => {
    return (
      <footer className="gradient-background text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-2">
  
            {/* Imagen en el medio */}
            <div className="w-full lg:w-screen flex justify-center mb-6 lg:mb-0">
              <Image
                src="/drts_v2.png"
                alt="Footer Logo"
                width={150}
                height={150}
              />
            </div>
        </div>
  
        <div className="flex  flex-col lg:flex-row items-center justify-between">
        <div className="w-full flex justify-center md:justify-start">
              <p className="text-white text-md">+1 551 362 7203</p>
            </div>
            {/* Columna derecha */}
            <div className="w-full  text-center flex justify-center flex-row my-4 md:my-0">
            <MdEmail className="mt-1 mx-3" />
            <p className="text-white text-md">angel.almonte@drts.com</p>

            </div>
            <div className="w-full text-center lg:text-right flex flex-row justify-center md:justify-end">
            <Link className="p-2 mx-4 bg-slate-50 rounded-lg" href={''}><FaXTwitter style={{color: 'black'}}/></Link>
             <Link className="p-2 bg-slate-50 rounded-lg" href={''}><FaFacebook style={{color: 'blue'}}/></Link>
             <Link className="p-2 mx-4 bg-slate-50 rounded-lg" href={'https://www.instagram.com/dev_rts/'}><FaSquareInstagram style={{color: 'red'}}/></Link>
             <Link className="p-2 bg-slate-50 rounded-lg" href={'https://www.linkedin.com/company/development-real-time-strategy'}><FaLinkedin style={{color: '#0A66C2'}}/></Link>
            </div>
          </div>
  
          {/* Barra inferior */}
          <div className="mt-12 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  