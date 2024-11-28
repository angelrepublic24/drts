import Image from "next/image";

export const Footer = () => {
    return (
      <footer className="gradient-background text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
  
            {/* Imagen en el medio */}
            <div className="w-full lg:w-sxreen flex justify-center mb-6 lg:mb-0">
              <Image
                src="/drts_v2.png"
                alt="Footer Logo"
                width={150}
                height={150}
              />
            </div>
        </div>
  
        <div className="flex  flex-col lg:flex-row items-center justify-between">
        <div className="w-full">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 text-sm">
                Email: contact@yourcompany.com
              </p>
              <p className="text-gray-400 text-sm">Phone: +1 123 456 7890</p>
              <div className="mt-4 flex justify-center lg:justify-end space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* Columna derecha */}
            <div className="w-full  text-center">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 text-sm">
                Email: contact@yourcompany.com
              </p>
              <p className="text-gray-400 text-sm">Phone: +1 123 456 7890</p>
              <div className="mt-4 flex justify-center lg:justify-end space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="w-full text-center lg:text-right">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 text-sm">
                Email: contact@yourcompany.com
              </p>
              <p className="text-gray-400 text-sm">Phone: +1 123 456 7890</p>
              <div className="mt-4 flex justify-center lg:justify-end space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
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
  