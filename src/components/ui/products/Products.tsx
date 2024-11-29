import Image from "next/image"
import Link from "next/link"
import { ProductData } from '../../../data/product';
import { MdArrowOutward } from "react-icons/md";


export const Products = () => {

    const products = [    
        { id: 1, name: "OSCMI", description: "Inventory Control System", img: "/products/oscmic.png", bg: 'bg-teal-100', textbg: 'bg-teal-50' },
        { id: 2, name: "LOANS", description: "Loan System", img: "/products/sispres.png", bg: 'bg-red-200', textbg: 'bg-red-50'},
        { id: 3, name: "REDIES", description: "Property Inventory Manager", img: "/products/redies.png", bg: 'bg-teal-100', textbg: 'bg-teal-50'},
        { id: 4, name: "VOTER CONTROLLER", description: "Voting System", img: "/products/vote.png", bg: 'bg-teal-100', textbg: 'bg-teal-50' },
        { id: 5, name: "MIGECO", description: "Content Manager", img: "/products/migeco.png", bg: 'bg-fuchsia-200', textbg: 'bg-fuchsia-100'  },
        { id: 6, name: "FIDELISYS", description: "Customer Loyalty System", img: "/products/fidelisys.png", bg: 'bg-gray-50', textbg: 'border-t-2'},
        { id: 7, name: "SIVAMAS", description: "Travel System", img: "/products/sivamas.png", bg: 'bg-amber-100', textbg: 'bg-amber-50'},
        { id: 8, name: "UASD Pre-selection", description: "Travel System", img: "/products/uasd.png", bg: 'bg-violet-50', textbg: 'bg-slate-100'},
        { id: 9, name: "VLAnime", description: "Online Sales", img: "/products/anime.png", bg: 'bg-sky-200', textbg: 'bg-sky-100'}
    
    ];

    return (
        <section id="products" className="py-20 bg-white text-teal-800 w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Discover our products and services for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-full px-6">
          {products.map((product, index) => (
            <div key={index} className={`rounded-lg w-full  shadow-md text-center ${product.bg} overflow-hidden`}>
              <div className="flex justify-center rounded-full p-10 mb-4 h-4/6">
                <Image src={product.img} alt="Eoscmi" width={150} height={120}/>
              </div>
              <div className={`w-full ${product.textbg} p-6 md:h-full grid grid-cols-1 md:grid-cols-2 gap-2`}>
                <div className="flex justify-start flex-col ml-2 mb-2" >
                  <h3 className="text-xl font-semibold mb-2 text-left">{product.name}</h3>
                  <p className="text-left pb-2">{product.description}</p>
                </div>
                <div className="flex justify-end  md:mr-2">
                  <div className="bg-emerald-400 md:w-20 md:h-14 rounded-lg flex md:items-center justify-center">
                  <Link href={`/product/${product.id}`} className=""><MdArrowOutward size={25} style={{color: 'white'}}/></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}