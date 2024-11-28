import Image from "next/image"

export const Products = () => {
  const products = [
    { name: "OSCMI", description: "Inventory Control System", img: "/products/oscmic.png", bg: 'bg-teal-100', textbg: 'bg-teal-50' },
    { name: "LOANS", description: "Loan System", img: "/products/sispres.png", bg: 'bg-red-200', textbg: 'bg-red-50'},
    { name: "REDIES", description: "Property Inventory Manager", img: "/products/redies.png", bg: 'bg-teal-100', textbg: 'bg-teal-50'},
    { name: "VOTER CONTROLLER", description: "Voting System", img: "/products/vote.png", bg: 'bg-teal-100', textbg: 'bg-teal-50' },
    { name: "MIGECO", description: "Content Manager", img: "/products/migeco.png", bg: 'bg-fuchsia-200', textbg: 'bg-fuchsia-100'  },
    { name: "FIDELISYS", description: "Customer Loyalty System", img: "/products/fidelisys.png", bg: 'bg-gray-50'  },
    { name: "SIVAMAS", description: "Travel System", img: "/products/sivamas.png", bg: 'bg-amber-100'},
    { name: "UASD Pre-selection", description: "Travel System", img: "/products/uasd.png", bg: 'bg-violet-50' },
    { name: "VLAnime", description: "Online Sales", img: "/products/anime.png", bg: 'bg-sky-200'}
  ]
    return (
        <section id="products" className="py-20 bg-white text-teal-800 w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Discover our products and services for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-full px-6">
          {products.map((product, index) => (
            <div key={index} className={`rounded-lg w-full  shadow-md text-center ${product.bg} overflow-hidden`}>
              <div className="flex justify-center rounded-full p-10 mb-4 h-4/6">
                <Image src={product.img} alt="Eoscmi" width={150} height={120}/>
              </div>
              <div className={`w-full ${product.textbg} py-6 h-full`}>
                <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}