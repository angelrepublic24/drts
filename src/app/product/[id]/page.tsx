'use client'
import { Footer } from "@/components/ui/footer/Footer"
import { Menu } from "@/components/ui/menu/Menu"
import { ProductData } from "@/data/product"
import Image from "next/image"
import { useParams } from "next/navigation"

// interface Prop {
//     params: {
//         id: number;
//     }
// }

export default function(){
    const params = useParams()
    const id: number = Number(params.id)
    
    const product = ProductData.find(product => product.id === id)
    console.log(product)
    if(!product) return 'Product not found'
    return (
        <>
        <Menu/>
        <div className="bg-white container mx-auto py-10">
                <div key={product.id} className="grid grid-cols-1 md:grid-cols-2  gap-8 px-6 ">
                    <div className=" flex justify-center"> 
                        <Image src={product.img} width={200} height={200} quality={100} alt={product.name} className="w-1/2 h-[300px] lg:h-1/2" />
                    </div>
                    <div>
                        <h2 className="text-4xl mb-4">{product.name}</h2>
                        <h3 className="text-2xl my-2">{product.subtitle}</h3>
                        <div
                            className="product-description text-gray-800 text-lg p-2 leading-10 "
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        ></div>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
        
    )
}