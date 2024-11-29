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
                    <div> 
                        <Image src={product.img} width={200} height={200} alt=""/>
                    </div>
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
        
    )
}