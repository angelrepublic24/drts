import Image from "next/image"


export const Service = () => {

  const allservice = [
    { title: "Web page design", description: "We design all types of web pages, both static and dynamic.", img:'/services/Monitor2.png'},
    { title: "Mobile app development", description: "Customized to your needs.", img: '/services/smartphone.png' },
    { title: "Support in application development", description: "We handle a wide variety of languages.", img: '/services/settings.png' },
    { title: "Development of custom systems", description: "Tailored systems to meet client needs.", img: '/services/laptop.png' },
    { title: "Technical support", description: "Professional and fast support.", img: '/services/shieldUser.png' },
    { title: "Social networks", description: "Keep your networks updated and managed.", img: '/services/shareCircle.png' },
  ]
    return (
        <section id="services" className="py-20 bg-white text-teal-600">
          <p className="text-center text-black font-light mb-2 bg-gray-50 w-40 mx-auto rounded-xl py-1">Our Service</p>
        <h2 className="text-3xl text-black font-bold text-center mb-12">We offer quality and the best services!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {allservice.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-center items-center w-full">
              <div className="flex justify-center bg-teal-50 rounded-full w-36 p-6 mb-4">
                <Image src={service.img} alt="" width={100} height={100} quality={100}/>
              </div>
              <h3 className="text-xl text-center font-semibold mb-4 text-black">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
    
}