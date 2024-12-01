import Image from "next/image"

export const Microservices = () => {
  const microservices = [
    { title: "Location Services", description: "Wide-ranging location system for searches by continents, countries, and states.", img:'/micro/Global.png'},
    { title: "Roster Services", description: "Create company payrolls and keep detailed records.", img:'/micro/billCheck.png' },
    { title: "Monetization Services", description: "Currency breakdowns for cash closings.", img:'/micro/dollarMinimalistic.png' },
    { title: "Mailgun Services", description: "Easily integrate Mailgun for email services.", img:'/micro/mentionCircle.png' },
  ]
    return (
        <section id="microservices" className="py-20 w-11/12 bg-teal-100 text-teal-800 mx-auto rounded-3xl">
        <p className="text-center text-black font-light mb-2 bg-gray-50 w-40 mx-auto rounded-xl py-1">Micro Service</p>
        <h2 className="text-3xl font-bold text-center mb-12">Small services within a larger functional system!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {microservices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md w-full flex flex-col justify-center items-center">
              <div className="flex justify-center bg-teal-50 rounded-full w-20 p-6 mb-4">
                <Image src={service.img} alt="" width={40} height={40} quality={100}/>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black text-center">{service.title}</h3>
              <p className="text-center text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
}