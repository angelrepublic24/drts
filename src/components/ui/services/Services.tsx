

export const Service = () => {

  const allservice = [
    { title: "Web page design", description: "We design all types of web pages, both static and dynamic." },
    { title: "Android App development", description: "Customized to your needs." },
    { title: "Support in application development", description: "We handle a wide variety of languages." },
    { title: "Development of custom systems", description: "Tailored systems to meet client needs." },
    { title: "Technical support", description: "Professional and fast support." },
    { title: "Social networks", description: "Keep your networks updated and managed." },
  ]
    return (
        <section id="services" className="py-20 bg-white text-teal-600">
          <p className="text-center text-black font-light mb-2 bg-gray-50 w-40 mx-auto rounded-xl py-1">Our Service</p>
        <h2 className="text-3xl text-black font-bold text-center mb-12">We offer quality and the best services!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {allservice.map((service, index) => (
            <div key={index} className="bg-teal-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
    
}