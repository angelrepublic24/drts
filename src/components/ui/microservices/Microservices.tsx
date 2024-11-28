export const Microservices = () => {
  const microservices = [
    { title: "Location Services", description: "Wide-ranging location system for searches by continents, countries, and states." },
    { title: "Roster Services", description: "Create company payrolls and keep detailed records." },
    { title: "Monetization Services", description: "Currency breakdowns for cash closings." },
    { title: "Mailgun Services", description: "Easily integrate Mailgun for email services." },
  ]
    return (
        <section id="microservices" className="py-20 w-11/12 bg-teal-100 text-teal-800 mx-auto rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Small services within a larger functional system!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {microservices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
}