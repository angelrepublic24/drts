export const Client = () => {
    return (
        <section id="clients" className="py-20 bg-white text-teal-600">
        <h2 className="text-3xl font-bold text-center mb-12">Our clients trust us to deliver excellence!</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6">
          {[
            "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6",
            "Client 7", "Client 8", "Client 9", "Client 10", "Client 11", "Client 12",
          ].map((client, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
              <img src={`/clients/${client.toLowerCase().replace(' ', '-')}.jpg`} alt={client} className="w-full" />
            </div>
          ))}
        </div>
      </section>
    )
}